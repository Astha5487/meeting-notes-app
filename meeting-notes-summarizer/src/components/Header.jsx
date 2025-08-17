import React from 'react';
import ThemeToggle from './ThemeToggle.jsx'; // import your existing ThemeToggle

export default function Header() {
  return (
    <header className="border-b bg-white dark:bg-gray-950">
      <div className="container-base flex items-center justify-between">
        <h1 className="text-gray-900 dark:text-gray-100">
          AI Meeting Notes Summarizer
        </h1>
        <div className="flex items-center gap-2">
          <a
            className="btn btn-ghost"
            href="https://example.com"
            onClick={(e) => e.preventDefault()}
            title="Placeholder"
          >
            Docs
          </a>
          <ThemeToggle /> {/* added theme toggle button */}
        </div>
      </div>
    </header>
  );
}
