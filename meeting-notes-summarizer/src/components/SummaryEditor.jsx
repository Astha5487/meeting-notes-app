import React from 'react'

export default function SummaryEditor({ summary, onChange }) {
  return (
    <section className="card">
      <div className="flex items-center justify-between mb-2">
        <label className="label">Generated Summary (Editable)</label>
        <button className="btn" onClick={() => onChange('')}>
          Clear
        </button>
      </div>
      <textarea
        className="input h-64 resize-y"
        placeholder="Your summary will appear here. You can edit it before sharing."
        value={summary}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="mt-2 text-xs text-gray-500">
        Tip: Edit freely — email will send exactly what you see here.
      </div>
    </section>
  )
}
