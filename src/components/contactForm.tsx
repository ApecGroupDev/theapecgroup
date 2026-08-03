"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle, AlertCircle } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactFormProps {
  formspreeUrl?: string;
  placeholder?: string;
  buttonLabel?: string;
}

export default function ContactForm({
  formspreeUrl = "https://formspree.io/f/mqabwyre",
  placeholder = "How can we help you?",
  buttonLabel = "Send Message",
}: ContactFormProps) {
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

    const formElement = e.target as HTMLFormElement;
    const gotchaValue = (formElement.elements.namedItem("_gotcha") as HTMLInputElement)?.value;
    
    const payload = {
      ...formData,
      ...(gotchaValue ? { _gotcha: gotchaValue } : {}),
    };

    try {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
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
    text-sm text-[#111] placeholder-[#111]/60
    focus:outline-none focus:border-[#c62931]/50 focus:bg-white
    transition-all duration-200
  `;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-semibold text-[#111]/70 pl-1">Your Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="e.g., John Doe"
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
            required
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-semibold text-[#111]/70 pl-1">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="e.g., john@example.com"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-xs font-semibold text-[#111]/70 pl-1">Phone Number (optional)</label>
        <input
          id="phone"
          type="text"
          name="phone"
          placeholder="e.g., (555) 123-4567"
          value={formData.phone}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-semibold text-[#111]/70 pl-1">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder={placeholder}
          value={formData.message}
          onChange={handleChange}
          className={`${inputClass} min-h-36 resize-none`}
          required
        />
      </div>

      {/* Honeypot for spam protection */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <button
        type="submit"
        disabled={loading}
        className="group w-full inline-flex items-center justify-center gap-3 bg-[#c62931] hover:bg-[#a8232a] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm tracking-wide px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_8px_30px_rgba(198,41,49,0.3)]"
      >
        {loading ? "Sending..." : buttonLabel}
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
            Thank you! We&apos;ll be in touch within one business day.
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
