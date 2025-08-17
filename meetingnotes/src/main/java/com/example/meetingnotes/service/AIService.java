package com.example.meetingnotes.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import okhttp3.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class AIService {

    private final String apiKey;
    private final OkHttpClient client;
    private final ObjectMapper mapper;

    public AIService(@Value("${openai.api.key}") String apiKey) {
        this.apiKey = apiKey;
        this.client = new OkHttpClient();
        this.mapper = new ObjectMapper();
    }

    public String generateSummary(String transcript, String customPrompt) {
        String finalPrompt = (customPrompt != null && !customPrompt.isEmpty())
                ? customPrompt + "\n\nTranscript:\n" + transcript
                : "Summarize the following meeting transcript:\n\n" + transcript;

        try {
            // ✅ Build JSON safely using Jackson
            ObjectNode root = mapper.createObjectNode();
            root.put("model", "gpt-4o-mini");

            ArrayNode messages = mapper.createArrayNode();
            ObjectNode userMessage = mapper.createObjectNode();
            userMessage.put("role", "user");
            userMessage.put("content", finalPrompt);
            messages.add(userMessage);

            root.set("messages", messages);

            String requestBodyJson = mapper.writeValueAsString(root);

            RequestBody body = RequestBody.create(
                    requestBodyJson,
                    MediaType.parse("application/json")
            );

            Request request = new Request.Builder()
                    .url("https://api.openai.com/v1/chat/completions")
                    .header("Authorization", "Bearer " + apiKey)
                    .post(body)
                    .build();

            try (Response response = client.newCall(request).execute()) {
                if (!response.isSuccessful()) {
                    return "Error from OpenAI: " + response.code() + " - " + response.message() + " - " + response.body().string();
                }

                JsonNode jsonNode = mapper.readTree(response.body().string());
                return jsonNode
                        .get("choices").get(0)
                        .get("message").get("content")
                        .asText();
            }

        } catch (Exception e) {
            e.printStackTrace();
            return "Error while generating summary: " + e.getMessage();
        }
    }
}
