import React, { useRef, useState } from "react";

export default function UploadArea({ transcript, onTranscriptChange, onFileSelect }) {
  const fileRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleFile = (file) => {
    if (!file) return;

    const allowedTypes = [
      "text/plain",
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Please upload .txt, .pdf, or .docx file.");
      return;
    }

    setFileName(file.name);
    onFileSelect(file);

    // If .txt, read content locally
    if (file.type === "text/plain") {
      file.text().then((text) => onTranscriptChange(text));
    } else {
      // For pdf/docx, clear transcript; backend will extract
      onTranscriptChange("");
    }
  };

  return (
    <section className="card">
      <div className="flex items-center justify-between mb-2">
        <label className="label">Transcript</label>
        <div className="flex items-center gap-2">
          <input
            ref={fileRef}
            type="file"
            accept=".txt,.pdf,.docx"
            className="hidden"
            onChange={(e) => handleFile(e.target.files?.[0])}
          />
          <button className="btn" onClick={() => fileRef.current?.click()}>
            Upload File
          </button>
          <button className="btn" onClick={() => { onTranscriptChange(""); setFileName(""); onFileSelect(null); }}>
            Clear
          </button>
        </div>
      </div>
      {fileName && <p className="text-sm text-gray-600">Uploaded: {fileName}</p>}
      <textarea
        className="input h-48 resize-y"
        placeholder="Paste meeting transcript here..."
        value={transcript}
        onChange={(e) => onTranscriptChange(e.target.value)}
      />
    </section>
  );
}
