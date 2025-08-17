# 📝 Meeting Notes Summarizer  

AI-powered meeting assistant that converts raw meeting transcripts into **concise, professional summaries**.  
Built with a **React frontend** and **Spring Boot backend**, integrated with **OpenAI API** and **Gmail SMTP** for seamless user experience.  

---

## ✨ Features  

- ✅ Upload meeting transcripts (text)  
- ✅ Generate AI-powered summaries with OpenAI GPT models  
- ✅ Email summarized notes to participants  
- ✅ User-friendly React UI  
- ✅ Secure backend with environment variable–based secret management  
- ✅ Deployment-ready structure (frontend + backend separated)  

---

## 📂 Project Structure  

meeting-notes-app/
│
├── meeting-notes-summarizer/ # React frontend
│ ├── src/
│ └── package.json
│
├── meetingnotes/ # Spring Boot backend
│ ├── src/main/java/com/elyx/health
│ ├── src/main/resources/
│ │ └── application.properties # Uses env variables
│ └── pom.xml
│
└── README.md

yaml
Copy
Edit

---

## ⚙️ Tech Stack  

**Frontend**  
- React (Vite / CRA)  
- TailwindCSS / Material-UI (if used)  

**Backend**  
- Spring Boot  
- Java 17+  
- Spring Mail (Gmail SMTP)  
- OpenAI GPT API  

**Other**  
- GitHub Actions (CI/CD-ready)  
- Docker (optional for deployment)  

---

## 🚀 Getting Started  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/Astha5487/meeting-notes-app.git
cd meeting-notes-app
2️⃣ Backend Setup (Spring Boot)
Navigate to backend folder:

bash
Copy
Edit
cd meetingnotes
Configure Environment Variables
Instead of storing secrets in application.properties, use an .env file or export env vars in your shell.

Example .env:

env
Copy
Edit
EMAIL_USERNAME=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
OPENAI_API_KEY=sk-xxxxxx
Spring Boot picks them as:

properties
Copy
Edit
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=${EMAIL_USERNAME}
spring.mail.password=${EMAIL_PASSWORD}
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true
spring.mail.default-encoding=UTF-8

openai.api.key=${OPENAI_API_KEY}
Run backend:

bash
Copy
Edit
./mvnw spring-boot:run
Backend runs at 👉 http://localhost:8080

3️⃣ Frontend Setup (React)
Navigate to frontend:

bash
Copy
Edit
cd meeting-notes-summarizer
Install dependencies:

bash
Copy
Edit
npm install
Configure .env:

env
Copy
Edit
VITE_API_BASE_URL=http://localhost:8080
Run frontend:

bash
Copy
Edit
npm run dev
Frontend runs at 👉 http://localhost:5173

📧 Email Feature
Uses Gmail SMTP.

Requires an App Password (not your Gmail password).

Enable 2FA in Gmail → Generate App Password → Use it in EMAIL_PASSWORD.

🔒 Security
✅ No secrets committed to Git (use .env)

✅ .gitignore excludes node_modules, target/, .env, build artifacts

✅ GitHub Push Protection enabled against secret leaks

📦 Deployment
Backend → Heroku / Render / AWS Elastic Beanstalk

Frontend → Vercel / Netlify

Make sure to set environment variables in your deployment platform.








ChatGPT can make mistakes. Check important info. See Cookie Preferences.
