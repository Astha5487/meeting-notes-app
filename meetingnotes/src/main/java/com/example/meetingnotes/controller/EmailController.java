package com.example.meetingnotes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class EmailController {

    @Autowired
    private JavaMailSender mailSender;

    @PostMapping("/share-email")
    public String sendEmail(@RequestBody EmailRequest request) {

        try {
            for (String to : request.getEmails()) {
                SimpleMailMessage message = new SimpleMailMessage();
                message.setTo(to);
                message.setSubject("Your Summary");
                message.setText(request.getSummary());
                mailSender.send(message);
            }
            return "Email sent successfully!";
        } catch (Exception e) {
            e.printStackTrace();
            return "Failed to send email: " + e.getMessage();
        }
    }
}

class EmailRequest {
    private List<String> emails;
    private String summary;

    public List<String> getEmails() { return emails; }
    public void setEmails(List<String> emails) { this.emails = emails; }

    public String getSummary() { return summary; }
    public void setSummary(String summary) { this.summary = summary; }
}
