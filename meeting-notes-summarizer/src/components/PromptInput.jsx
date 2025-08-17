import React from 'react'

export default function PromptInput({ prompt, onPromptChange, onGenerate, loading }) {
  return (
    <section className="card">
      <label className="label mb-2">Custom Instruction / Prompt</label>
      <textarea
        className="input h-28 resize-y"
        placeholder='e.g., "Summarize in bullet points for executives"'
        value={prompt}
        onChange={(e) => onPromptChange(e.target.value)}
      />
      <div className="mt-2 flex items-center gap-2">
        <button
          className="btn btn-primary"
          onClick={onGenerate}
          disabled={loading}
        >
          {loading ? 'Generating…' : 'Generate Summary'}
        </button>
        <button
          className="btn"
          onClick={() =>
            onPromptChange('Highlight only action items with owners and deadlines')
          }
        >
          Use: Action Items
        </button>
        <button
          className="btn"
          onClick={() =>
            onPromptChange('Summarize in 5 bullet points for executives')
          }
        >
          Use: Exec Bullets
        </button>
      </div>
    </section>
  )
}
