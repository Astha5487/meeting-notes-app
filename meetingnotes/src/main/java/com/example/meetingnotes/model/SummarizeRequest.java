package com.example.meetingnotes.model;

public class SummarizeRequest {
    private String transcript;
    private String prompt;

    // getters and setters
    public String getTranscript() { return transcript; }
    public void setTranscript(String transcript) { this.transcript = transcript; }
    public String getPrompt() { return prompt; }
    public void setPrompt(String prompt) { this.prompt = prompt; }

}
