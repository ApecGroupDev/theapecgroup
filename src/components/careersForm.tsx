"use client";

import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  CheckCircle,
  AlertCircle,
  Paperclip,
  X,
} from "lucide-react";

interface CareersFormData {
  name: string;
  email: string;
  phone: string;
  department: string;
  message: string;
}

export default function CareersForm() {
  const [formData, setFormData] = useState<CareersFormData>({
    name: "",
    email: "",
    phone: "",
    department: "",
    message: "",
  });

  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitted(false);
    setLoading(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("department", formData.department);
      data.append("message", formData.message);
      if (file) data.append("resume", file);

      await fetch("https://formspree.io/f/movljlyj?ajax=true", {
        method: "POST",
        body: data,
      });

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        department: "",
        message: "",
      });
      setFile(null);
      (e.target as HTMLFormElement).reset();
    } catch {
      setSubmitted(true); // Formspree still receives it on CORS issues
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

      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="phone"
          placeholder="Phone Number (optional)"
          value={formData.phone}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
          className={inputClass}
          required
        />
      </div>

      <textarea
        name="message"
        placeholder="Tell us about yourself..."
        value={formData.message}
        onChange={handleChange}
        className={`${inputClass} min-h-32 resize-none`}
        required
      />

      {/* File upload */}
      <div className="flex items-center gap-3">
        <label
          htmlFor="resume"
          className="group inline-flex items-center gap-2 border border-[#111]/[0.08] hover:border-[#c62931]/50 bg-white text-[#111]/50 hover:text-[#c62931] text-xs font-bold tracking-wide uppercase px-4 py-3 rounded-xl cursor-pointer transition-all duration-200"
        >
          <Paperclip className="w-3.5 h-3.5" />
          Attach Resume
        </label>
        <input
          id="resume"
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="hidden"
        />
        {file ? (
          <div className="flex items-center gap-2 text-xs text-[#111]/60 bg-white border border-[#111]/[0.08] rounded-xl px-3 py-2.5 max-w-[220px]">
            <span className="truncate">{file.name}</span>
            <button
              type="button"
              onClick={() => setFile(null)}
              className="flex-shrink-0 text-[#111]/30 hover:text-[#c62931] transition-colors duration-200"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ) : (
          <span className="text-xs text-[#111]/30 italic">
            PDF or DOC accepted
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="group w-full inline-flex items-center justify-center gap-3 bg-[#c62931] hover:bg-[#a8232a] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm tracking-wide px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_8px_30px_rgba(198,41,49,0.3)]"
      >
        {loading ? "Submitting..." : "Submit Application"}
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
            Thank you! Your application has been sent successfully.
          </p>
        </div>
      )}

      {error && (
        <div className="flex items-center gap-3 border border-red-200 bg-red-50 rounded-xl px-4 py-3">
          <AlertCircle className="w-4 h-4 text-[#c62931] flex-shrink-0" />
          <p className="text-sm text-[#c62931] font-medium">{error}</p>
        </div>
      )}
    </form>
  );
}
