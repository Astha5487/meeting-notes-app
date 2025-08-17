export async function generateSummary({ transcript, prompt }) {
  const res = await fetch("http://localhost:8080/api/summarize", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ transcript, prompt })
  });
  return res.text();
}

export async function sendEmail({ summary, emails }) {
  const res = await fetch("http://localhost:8080/api/email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ summary, emails })
  });
  return res.text();
}

