import React, { useState } from 'react'

export default function EmailShare({ onShare }) {
  const [emailsRaw, setEmailsRaw] = useState('')

  const parseEmails = () =>
    emailsRaw
      .split(/[,\s]+/)
      .map(e => e.trim())
      .filter(Boolean)

  return (
    <section className="card">
      <label className="label mb-2">Share via Email</label>
      <input
        className="input mb-2"
        placeholder="Enter recipient emails (comma or space separated)"
        value={emailsRaw}
        onChange={(e) => setEmailsRaw(e.target.value)}
      />
      <button
        className="btn btn-primary"
        onClick={() => onShare(parseEmails())}
      >
        Send Email
      </button>
      <p className="mt-2 text-xs text-gray-500">
        Example: alice@company.com, bob@company.com
      </p>
    </section>
  )
}
