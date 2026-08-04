export default function TermsOfService() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 md:py-32">
      <div className="prose prose-lg max-w-none text-[#111]">
        <h1 className="text-4xl font-bold mb-4 text-[#c62931]">Terms of Service</h1>
        <p className="text-gray-500 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">1. Agreement to Terms</h2>
        <p className="mb-6 leading-relaxed text-gray-700">By viewing or using this website, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree with any part of these terms, you must not use this website.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">2. Intellectual Property Rights</h2>
        <p className="mb-6 leading-relaxed text-gray-700">Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the &quot;Content&quot;) and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">3. User Representations</h2>
        <p className="mb-6 leading-relaxed text-gray-700">By using the Site, you represent and warrant that all registration information you submit will be true, accurate, current, and complete, and you will maintain the accuracy of such information.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">4. Disclaimer</h2>
        <p className="mb-6 leading-relaxed text-gray-700">The site is provided on an as-is and as-available basis. You agree that your use of the site and our services will be at your sole risk.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">5. Website Accessibility</h2>
        <p className="mb-6 leading-relaxed text-gray-700">We are committed to making our website accessible and usable for all people. While we strive to meet the Web Content Accessibility Guidelines (WCAG) 2.1 AA standards, this site is provided on an &quot;as-is&quot; basis. You agree that we are not liable for any temporary unavailability or accessibility issues that may arise, nor for any third-party content or integrations that fall outside our direct control.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">6. Contact Information</h2>
        <p className="mb-6 leading-relaxed text-gray-700">In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at Sales@TheAPECgroup.com.</p>
      </div>
    </main>
  );
}
