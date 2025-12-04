'use client'; // Only needed if you're using Next.js app directory

import { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ConstructionContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);

    try {
      const response = await fetch("https://formspree.io/f/xkgbynqy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='tracking-wider space-y-2 sm:space-y-3 md:space-y-4 2xl:space-y-8 mt-6 md:mt-8 lg:mt-12 lg:text-lg 2xl:text-xl'>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className='w-full border-b border-gray-400 bg-transparent outline-none py-2 placeholder-black'
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className='w-full border-b border-gray-400 bg-transparent outline-none py-2 placeholder-black'
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className='w-full border-b border-gray-400 bg-transparent outline-none py-2 placeholder-black'
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className='w-full border-b border-gray-400 bg-transparent outline-none py-2 placeholder-black min-h-40'
        required
      />
      <button
        type="submit"
        className='w-2/5 bg-[#c62931] text-white py-3 rounded-md hover:bg-red-500 transition'
      >
        SUBMIT
      </button>

      {submitted && (
        <p className='mt-4 text-green-600 font-medium'>Thank you! Message sent.</p>
      )}
      {error && (
        <p className='mt-4 text-red-600 font-medium'>
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
