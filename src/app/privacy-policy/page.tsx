export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 md:py-32">
      <div className="prose prose-lg prose-invert text-[#111] max-w-none">
        <h1 className="text-4xl font-bold mb-4 text-[#c62931]">Privacy Policy</h1>
        <p className="text-gray-500 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
        <p className="mb-6 leading-relaxed text-gray-700">We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website, or otherwise when you contact us. This includes names, phone numbers, email addresses, and any attachments (like resumes) submitted via our forms.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
        <p className="mb-6 leading-relaxed text-gray-700">We use personal information collected via our Website for a variety of business purposes, including to respond to your inquiries, facilitate the recruitment process, and improve our services.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">3. Third-Party Tracking and Analytics</h2>
        <p className="mb-6 leading-relaxed text-gray-700">We use third-party analytics services, such as Google Analytics and Vercel Analytics, to help analyze how users use the site. These services use cookies and similar technologies to collect and analyze information about use of the services and report on activities and trends.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">4. Your Consent</h2>
        <p className="mb-6 leading-relaxed text-gray-700">By using our website, you consent to our Privacy Policy. You can manage your cookie preferences at any time through our cookie consent banner. If you decline, analytics scripts will not be loaded during your session.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">5. Contact Us</h2>
        <p className="mb-4 leading-relaxed text-gray-700">If you have questions or comments about this notice, you may email us at Sales@TheAPECgroup.com or contact us by post at:</p>
        <address className="not-italic text-gray-700 bg-gray-50 p-6 rounded-xl border border-gray-100">
          <strong>The APEC Group</strong><br/>
          4732-E North Royal Atlanta Drive<br/>
          Tucker, GA 30084
        </address>
      </div>
    </main>
  );
}
