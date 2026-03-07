"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle, AlertCircle } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ComplianceContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mpwrbzjk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const inputClass = `
    w-full bg-[#f7f5f2] border border-[#111]/[0.08] rounded-xl px-4 py-3.5
    text-sm text-[#111] placeholder-[#111]/30
    focus:outline-none focus:border-[#c62931]/50 focus:bg-white
    transition-all duration-200
  `;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className={inputClass}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className={inputClass}
          required
        />
      </div>

      <input
        type="text"
        name="phone"
        placeholder="Phone Number (optional)"
        value={formData.phone}
        onChange={handleChange}
        className={inputClass}
      />

      <textarea
        name="message"
        placeholder="Tell us about your compliance needs..."
        value={formData.message}
        onChange={handleChange}
        className={`${inputClass} min-h-36 resize-none`}
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="group w-full inline-flex items-center justify-center gap-3 bg-[#c62931] hover:bg-[#a8232a] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm tracking-wide px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_8px_30px_rgba(198,41,49,0.3)]"
      >
        {loading ? "Sending..." : "Send Request"}
        {!loading && (
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/15 group-hover:bg-white/25 transition-colors duration-300">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        )}
      </button>

      {submitted && (
        <div className="flex items-center gap-3 border border-green-200 bg-green-50 rounded-xl px-4 py-3">
          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
          <p className="text-sm text-green-700 font-medium">
            Thank you! We’ll be in touch within one business day.
          </p>
        </div>
      )}

      {error && (
        <div className="flex items-center gap-3 border border-red-200 bg-red-50 rounded-xl px-4 py-3">
          <AlertCircle className="w-4 h-4 text-[#c62931] flex-shrink-0" />
          <p className="text-sm text-[#c62931] font-medium">
            Something went wrong. Please try again or call us directly.
          </p>
        </div>
      )}
    </form>
  );
}
