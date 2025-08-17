import React, { useState } from "react";
import Header from "./components/Header.jsx";
import UploadArea from "./components/UploadArea.jsx";
import PromptInput from "./components/PromptInput.jsx";
import SummaryEditor from "./components/SummaryEditor.jsx";
import EmailShare from "./components/EmailShare.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { useHistoryStore } from "./context/HistoryContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx"; // <-- import ThemeProvider
import './index.css';


export default function App() {
  const [transcript, setTranscript] = useState("");
  const [prompt, setPrompt] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [transcriptFile, setTranscriptFile] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState("");

  const { addHistory } = useHistoryStore();

const handleGenerate = async () => {
  if (!transcript.trim() && !transcriptFile) {
    alert("Please paste a transcript or upload a file.");
    return;
  }

  setLoading(true);
  try {
    let response;

    if (transcriptFile) {
      // ✅ File Upload Path
      const formData = new FormData();
      formData.append("file", transcriptFile);
      formData.append("prompt", prompt);

      response = await fetch("http://localhost:8080/api/summarize", {
        method: "POST",
        body: formData, // browser auto sets multipart
      });
    } else {
      // ✅ JSON Path
      response = await fetch("http://localhost:8080/api/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          transcript: transcript,
          prompt: prompt,
        }),
      });
    }

    if (!response.ok) throw new Error(`Server error: ${response.status}`);

    const data = await response.text();
    setSummary(data);

    addHistory({
      transcript: transcriptFile ? `Uploaded File: ${uploadedFileName}` : transcript,
      prompt,
      summary: data,
    });
  } catch (e) {
    console.error(e);
    alert("Failed to generate summary. Make sure backend is running on port 8080.");
  } finally {
    setLoading(false);
  }
};

  const handleShare = async (emails) => {
    if (!summary.trim()) {
      alert("Please generate or type a summary first.");
      return;
    }
    if (emails.length === 0) {
      alert("Please enter at least one recipient email.");
      return;
    }

    try {
      for (let email of emails) {
        const formData = new URLSearchParams();
        formData.append("to", email);
        formData.append("summary", summary);

        const response = await fetch("http://localhost:8080/api/send-summary", {
          method: "POST",
          body: formData,
        });

        const data = await response.text();
        alert(data);
      }
    } catch (e) {
      console.error(e);
      alert("Failed to send email.");
    }
  };

  return (
    <ThemeProvider> {/* <-- Wrap the whole app in ThemeProvider */}
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex">
        <Sidebar
          onSelectHistory={(item) => {
            setPrompt(item.prompt);
            setSummary(item.summary);
            setTranscript(item.transcript.startsWith("Uploaded File:") ? "" : item.transcript);
            setTranscriptFile(null);
            setUploadedFileName(
              item.transcript.startsWith("Uploaded File:") ? item.transcript.replace("Uploaded File: ", "") : ""
            );
          }}
        />

        <div className="flex-1">
          <Header />
          <main className="container-base space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <UploadArea
                  transcript={transcript}
                  onTranscriptChange={setTranscript}
                  onFileSelect={(file) => {
                    setTranscriptFile(file);
                    setUploadedFileName(file?.name || "");
                  }}
                />
                <PromptInput
                  prompt={prompt}
                  onPromptChange={setPrompt}
                  onGenerate={handleGenerate}
                  loading={loading}
                />
              </div>
              <div className="space-y-4">
                <SummaryEditor summary={summary} onChange={setSummary} />
                <EmailShare onShare={handleShare} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
