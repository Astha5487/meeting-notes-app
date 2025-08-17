import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HistoryProvider } from "./context/HistoryContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <HistoryProvider>
        <App />
      </HistoryProvider>
    </ThemeProvider>
  </React.StrictMode>
);
