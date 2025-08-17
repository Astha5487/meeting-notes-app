import React from "react";
import { useHistoryStore } from "../context/HistoryContext.jsx";

export default function Sidebar({ onSelectHistory }) {
  const { history, deleteHistory } = useHistoryStore();

  return (
    <aside className="w-64 bg-gray-100 dark:bg-gray-900 p-4 overflow-y-auto">
      <h2 className="font-bold mb-2">History</h2>
      {history.length === 0 && <p className="text-sm text-gray-500">No history yet.</p>}
      <ul>
        {history.map(item => (
          <li key={item.id} className="mb-2 border-b pb-1">
            <button
              className="text-left w-full"
              onClick={() => onSelectHistory(item)}
            >
              {item.date} - {item.prompt?.substring(0, 20) || "No Prompt"}
            </button>
            <button
              className="text-red-500 text-sm mt-1"
              onClick={() => deleteHistory(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
