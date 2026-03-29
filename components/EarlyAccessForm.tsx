"use client";
import { useState } from "react";

export default function EarlyAccessForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", useCase: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Early access request:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "rgba(251,146,60,0.15)", border: "1px solid rgba(251,146,60,0.4)" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fb923c" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h3 className="text-xl font-bold text-text-primary mb-2">Request Received</h3>
        <p className="text-text-secondary">We&apos;ll be in touch shortly about your early access application.</p>
      </div>
    );
  }

  const inputStyle = {
    backgroundColor: "#0f1623",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "8px",
    color: "#f1f5f9",
    padding: "12px 16px",
    width: "100%",
    outline: "none",
    fontSize: "14px",
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-text-secondary mb-1.5">Full Name *</label>
          <input required style={inputStyle} value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Jane Smith" />
        </div>
        <div>
          <label className="block text-xs font-medium text-text-secondary mb-1.5">Company *</label>
          <input required style={inputStyle} value={form.company} onChange={e => setForm({...form, company: e.target.value})} placeholder="Acme Pty Ltd" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-text-secondary mb-1.5">Email *</label>
        <input required type="email" style={inputStyle} value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="jane@company.com.au" />
      </div>
      <div>
        <label className="block text-xs font-medium text-text-secondary mb-1.5">How would you use Shannon?</label>
        <textarea rows={3} style={{...inputStyle, resize: "none"}} value={form.useCase} onChange={e => setForm({...form, useCase: e.target.value})} placeholder="E.g. continuous external attack surface monitoring for our SaaS product..." />
      </div>
      <button
        type="submit"
        className="w-full py-3.5 rounded-md font-bold text-sm transition-all hover:opacity-90"
        style={{ backgroundColor: "#fb923c", color: "#080b14" }}
      >
        Apply for Early Access
      </button>
      <p className="text-center text-xs text-text-muted">We review all applications personally. Expect a response within 48 hours.</p>
    </form>
  );
}
