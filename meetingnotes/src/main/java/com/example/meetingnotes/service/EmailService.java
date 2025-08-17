package com.example.meetingnotes.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendEmail(String summary, List<String> emails) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("aj911743@gmail.com");
        message.setTo(emails.toArray(new String[0]));
        message.setSubject("AI Meeting Summary");
        message.setText(summary);
        mailSender.send(message);
    }
}
