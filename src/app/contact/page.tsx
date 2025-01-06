"use client";

import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Contacts: React.FC = () => {
  const [captchaValid, setCaptchaValid] = useState(false);

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValid(!!value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!captchaValid) {
      alert('Please complete the captcha.');
      return;
    }
    alert('Form submitted successfully!');
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center mt-24">Contact Us</h1>
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your Message"
                rows={6}
                required
              ></textarea>
            </div>
            <div className="mb-6">
              <ReCAPTCHA
                sitekey="YOUR_RECAPTCHA_SITE_KEY"
                onChange={handleCaptchaChange}
                className="captcha-container"
              />
            </div>
            <button
              type="submit"
              className={`w-full py-3 text-white font-medium rounded-lg transition ${
                captchaValid ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'
              }`}
              disabled={!captchaValid}
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="bg-gray-100 p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-700">Phone:</h3>
              <p className="text-gray-600">855-444-APEC</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700">Email:</h3>
              <p className="text-gray-600">Sales@TheAPECgroup.com</p>
              <p className="text-gray-600">Service@TheAPECgroup.com</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700">Addresses:</h3>
              <p className="text-gray-600">4732-E North Royal Atlanta Drive, Tucker, Georgia 30084</p>
              <p className="text-gray-600">505 Garden Oaks Boulevard, Houston, Texas 77018</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
