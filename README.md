📝 Meeting Notes Summarizer

AI-powered meeting assistant that converts raw meeting transcripts into concise, professional summaries.
Built with a React frontend and Spring Boot backend, integrated with OpenAI API and Gmail SMTP for seamless user experience.

✨ Features

✅ Upload meeting transcripts (text)
✅ Generate AI-powered summaries with OpenAI GPT models
✅ Email summarized notes to participants
✅ User-friendly React UI
✅ Secure backend with environment variable–based secret management
✅ Deployed-ready structure (frontend + backend separated)

📂 Project Structure
meeting-notes-app/
│
├── meeting-notes-summarizer/    # React frontend
│   ├── src/
│   └── package.json
│
├── meetingnotes/                # Spring Boot backend
│   ├── src/main/java/com/elyx/health
│   ├── src/main/resources/
│   │   └── application.properties   # Uses env variables
│   └── pom.xml
│
└── README.md

⚙️ Tech Stack

Frontend:

React (Vite / CRA)

TailwindCSS / Material-UI (if used)

Backend:

Spring Boot

Java 17+

Spring Mail (Gmail SMTP)

OpenAI GPT API

Other:

GitHub Actions (CI/CD-ready)

Docker (optional for deployment)

🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/Astha5487/meeting-notes-app.git
cd meeting-notes-app

2️⃣ Backend Setup (Spring Boot)

Navigate to the backend folder:

cd meetingnotes

Configure Environment Variables

Instead of storing secrets in application.properties, create an .env file in the project root or export env vars in your shell.

Example .env:

EMAIL_USERNAME=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
OPENAI_API_KEY=sk-xxxxxx


Spring Boot will read them as:

spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=${EMAIL_USERNAME}
spring.mail.password=${EMAIL_PASSWORD}
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true
spring.mail.default-encoding=UTF-8

openai.api.key=${OPENAI_API_KEY}

Run the Backend
./mvnw spring-boot:run


Backend runs at:
👉 http://localhost:8080

3️⃣ Frontend Setup (React)

Navigate to frontend folder:

cd meeting-notes-summarizer

Install Dependencies
npm install

Configure Environment Variables

Create .env in frontend root:

VITE_API_BASE_URL=http://localhost:8080

Run Frontend
npm run dev


Frontend runs at:
👉 http://localhost:5173 (or similar)

📧 Email Feature

Uses Gmail SMTP.

Requires an App Password (not your Gmail password).

Enable 2FA in Gmail → Generate App Password → Use it in EMAIL_PASSWORD.

🔒 Security

No secrets committed to Git (all via .env).

.gitignore excludes node_modules, target/, .env, and build artifacts.

GitHub Push Protection enabled against secret leaks.

📦 Deployment

Backend can be deployed to Heroku / Render / AWS Elastic Beanstalk

Frontend can be deployed to Vercel / Netlify

Environment variables must be set in deployment platform.

🛠️ Contributing

Fork the repo

Create a feature branch (git checkout -b feature/xyz)

Commit your changes (git commit -m "Add xyz")

Push the branch (git push origin feature/xyz)

Create a Pull Request 🎉

📜 License

This project is licensed under the MIT License – feel free to use and modify.
