package com.example.meetingnotes.model;

import java.util.List;

public class EmailRequest {
        private String summary;
        private List<String> emails;

        // getters and setters
        public String getSummary() { return summary; }
        public void setSummary(String summary) { this.summary = summary; }

        public List<String> getEmails() { return emails; }
        public void setEmails(List<String> emails) { this.emails = emails; }
    }

