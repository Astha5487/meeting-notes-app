package com.example.meetingnotes.controller;

import com.example.meetingnotes.model.SummarizeRequest;
import com.example.meetingnotes.service.AIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class AISummarizerController {

    private final AIService aiService;

    public AISummarizerController(AIService aiService) {
        this.aiService = aiService;
    }

    // ---- JSON request (pasted transcript) ----
    @PostMapping(value = "/summarize", consumes = "application/json")
    public String summarizeJson(@RequestBody SummarizeRequest request) {
        return aiService.generateSummary(request.getTranscript(), request.getPrompt());
    }

    // ---- File upload request ----
    @PostMapping(value = "/summarize", consumes = "multipart/form-data")
    public String summarizeFile(@RequestParam("file") MultipartFile file,
                                @RequestParam(value = "prompt", required = false) String prompt) throws IOException {
        String transcript = new String(file.getBytes());
        return aiService.generateSummary(transcript, prompt);
    }
}
