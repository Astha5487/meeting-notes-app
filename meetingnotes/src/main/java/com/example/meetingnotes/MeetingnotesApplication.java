package com.example.meetingnotes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MeetingnotesApplication {

	public static void main(String[] args) {
		SpringApplication.run(MeetingnotesApplication.class, args);

		System.out.println("OpenAI API key: " + System.getenv("OPENAI_API_KEY")); // <-- Check here
	}
}

