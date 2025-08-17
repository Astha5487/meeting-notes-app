import React from "react";
import { useHistoryStore } from "../context/HistoryContext";

export default function HistoryList({ onSelect }) {
  const { history, deleteHistory } = useHistoryStore();
  return (
    <div className="space-y-2">
      {history.map((h) => (
        <div key={h.id} className="border p-2 rounded bg-gray-50 dark:bg-gray-800">
          <div className="text-sm font-semibold">{h.date}</div>
          <div className="text-xs truncate">{h.prompt}</div>
          <div className="flex gap-2 mt-1">
            <button className="btn text-xs" onClick={() => onSelect(h)}>
              Load
            </button>
            <button
              className="btn text-xs text-red-600"
              onClick={() => deleteHistory(h.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      {history.length === 0 && (
        <div className="text-gray-500 text-sm">No history yet.</div>
      )}
    </div>
  );
}
