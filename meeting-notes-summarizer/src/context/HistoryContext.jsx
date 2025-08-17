import React, { createContext, useContext, useEffect, useState } from "react";

const HistoryContext = createContext();

export function HistoryProvider({ children }) {
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("summaries");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("summaries", JSON.stringify(history));
  }, [history]);

  const addHistory = ({ transcript, prompt, summary }) => {
    const newItem = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      transcript,
      prompt,
      summary,
    };
    setHistory(prevHistory => [newItem, ...prevHistory]); // ✅ functional update
  };

  const deleteHistory = (id) =>
    setHistory(prevHistory => prevHistory.filter((item) => item.id !== id)); // ✅ functional update

  return (
    <HistoryContext.Provider value={{ history, addHistory, deleteHistory }}>
      {children}
    </HistoryContext.Provider>
  );
}

export function useHistoryStore() {
  return useContext(HistoryContext);
}
