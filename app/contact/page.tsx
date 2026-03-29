"use client";

import { useState } from "react";
import Image from "next/image";

const trustBadges = [
  { icon: "🏅", label: "AIGP Certified" },
  { icon: "🇦🇺", label: "Australian Owned" },
  { icon: "🔐", label: "Essential Eight Specialists" },
  { icon: "🖥️", label: "Sovereign Compute" },
];

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  concern: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  industry: "",
  concern: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log("Assessment booking submitted:", form);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-md text-sm text-text-primary placeholder-text-muted outline-none transition-all focus:ring-2";
  const inputStyle = {
    backgroundColor: "#141c2e",
    border: "1px solid rgba(255,255,255,0.1)",
  };
  const inputFocusStyle = {
    "--tw-ring-color": "rgba(6,182,212,0.4)",
  } as React.CSSProperties;

  return (
    <div className="animate-fade-in-up">
      {/* Header */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-bg.jpg"
            alt="Office"
            fill
            className="object-cover"
            style={{ opacity: 0.08 }}
          />
          <div className="absolute inset-0" style={{ background: "rgba(8,11,20,0.92)" }} />
        </div>
        <div className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-black text-text-primary mb-4">
              Start with a Free Assessment
            </h1>
            <p className="text-lg text-text-secondary">
              We&apos;ll spend 30 minutes mapping your Essential Eight baseline — no obligation, no sales pressure.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div
                  className="rounded-lg p-10 text-center"
                  style={{
                    backgroundColor: "#111827",
                    border: "1px solid rgba(6,182,212,0.3)",
                    boxShadow: "0 0 40px rgba(6,182,212,0.12)",
                  }}
                >
                  <div className="text-6xl mb-6">✅</div>
                  <h2 className="text-2xl font-bold text-text-primary mb-3">
                    Booking Received
                  </h2>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    Thanks for reaching out. We&apos;ll review your details and get back to you within 1 business
                    day to confirm your free 30-minute assessment.
                  </p>
                  <p className="text-sm" style={{ color: "#06b6d4" }}>
                    team@auresta.com.au
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm(initialForm);
                    }}
                    className="mt-6 text-sm text-text-muted hover:text-text-secondary transition-colors underline"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-2">
                        Name <span style={{ color: "#06b6d4" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className={inputClass}
                        style={{ ...inputStyle, ...inputFocusStyle }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-2">
                        Company <span style={{ color: "#06b6d4" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Pty Ltd"
                        className={inputClass}
                        style={{ ...inputStyle, ...inputFocusStyle }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-2">
                        Email <span style={{ color: "#06b6d4" }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@company.com.au"
                        className={inputClass}
                        style={{ ...inputStyle, ...inputFocusStyle }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-2">
                        Phone{" "}
                        <span className="text-text-muted text-xs font-normal">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+61 4xx xxx xxx"
                        className={inputClass}
                        style={{ ...inputStyle, ...inputFocusStyle }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      Industry <span style={{ color: "#06b6d4" }}>*</span>
                    </label>
                    <select
                      name="industry"
                      required
                      value={form.industry}
                      onChange={handleChange}
                      className={inputClass}
                      style={{ ...inputStyle, ...inputFocusStyle, color: form.industry ? "#f1f5f9" : "#475569" }}
                    >
                      <option value="">Select your industry</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Construction">Construction</option>
                      <option value="Agriculture">Agriculture</option>
                      <option value="Professional Services">Professional Services</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      What are you most concerned about? <span style={{ color: "#06b6d4" }}>*</span>
                    </label>
                    <select
                      name="concern"
                      required
                      value={form.concern}
                      onChange={handleChange}
                      className={inputClass}
                      style={{ ...inputStyle, ...inputFocusStyle, color: form.concern ? "#f1f5f9" : "#475569" }}
                    >
                      <option value="">Select your primary concern</option>
                      <option value="Essential Eight Compliance">Essential Eight Compliance</option>
                      <option value="Cyber Insurance">Cyber Insurance</option>
                      <option value="Data Breach Risk">Data Breach Risk</option>
                      <option value="AI Product Security">AI Product Security</option>
                      <option value="Not Sure">Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      Message{" "}
                      <span className="text-text-muted text-xs font-normal">(optional)</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us a bit about your situation or any specific concerns..."
                      className={inputClass}
                      style={{ ...inputStyle, ...inputFocusStyle, resize: "vertical" }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-md font-bold text-sm transition-all hover:opacity-90 disabled:opacity-60"
                    style={{ backgroundColor: "#06b6d4", color: "#080b14" }}
                  >
                    {loading ? "Submitting..." : "Book Free Assessment"}
                  </button>

                  <p className="text-xs text-text-muted text-center">
                    We respect your privacy. Your details are never shared or used for marketing. 
                    See our{" "}
                    <a href="/privacy" style={{ color: "rgba(6,182,212,0.7)" }}>
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div
                className="rounded-lg p-7"
                style={{
                  backgroundColor: "#111827",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                }}
              >
                <h3 className="font-bold text-text-primary mb-5">Contact Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-lg">📧</span>
                    <div>
                      <p className="text-xs text-text-muted mb-1">Email</p>
                      <a
                        href="mailto:team@auresta.com.au"
                        className="text-sm font-medium transition-colors"
                        style={{ color: "#06b6d4" }}
                      >
                        team@auresta.com.au
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg">📍</span>
                    <div>
                      <p className="text-xs text-text-muted mb-1">Location</p>
                      <p className="text-sm text-text-secondary">Melbourne, Australia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg">🗺️</span>
                    <div>
                      <p className="text-xs text-text-muted mb-1">Coverage</p>
                      <p className="text-sm text-text-secondary">
                        Serving clients Australia-wide with on-site capability in Melbourne and Sydney
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="rounded-lg p-7"
                style={{
                  backgroundColor: "rgba(6,182,212,0.07)",
                  border: "1px solid rgba(6,182,212,0.2)",
                }}
              >
                <h3 className="font-bold text-text-primary mb-3">What to Expect</h3>
                <ol className="space-y-3">
                  {[
                    "We review your submission within 1 business day",
                    "Schedule a 30-minute video call at your convenience",
                    "We map your Essential Eight baseline — honestly",
                    "You receive a summary with no-obligation recommendations",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                      <span
                        className="flex-shrink-0 w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold"
                        style={{ backgroundColor: "rgba(6,182,212,0.2)", color: "#06b6d4" }}
                      >
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-3">
                {trustBadges.map((badge) => (
                  <div
                    key={badge.label}
                    className="rounded-lg p-3 text-center"
                    style={{
                      backgroundColor: "#141c2e",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <div className="text-2xl mb-1">{badge.icon}</div>
                    <p className="text-xs text-text-muted leading-tight">{badge.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
