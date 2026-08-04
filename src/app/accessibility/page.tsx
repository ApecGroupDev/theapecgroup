export default function AccessibilityStatement() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 md:py-32">
      <div className="prose prose-lg max-w-none text-[#111]">
        <h1 className="text-4xl font-bold mb-4 text-[#c62931]">Accessibility Statement</h1>
        <p className="text-gray-500 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Commitment</h2>
        <p className="mb-6 leading-relaxed text-gray-700">
          The APEC Group is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to guarantee we provide equal access to all of our users.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Conformance Status</h2>
        <p className="mb-6 leading-relaxed text-gray-700">
          The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. The APEC Group website aims to be conformant with WCAG 2.1 level AA.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Feedback</h2>
        <p className="mb-6 leading-relaxed text-gray-700">
          We welcome your feedback on the accessibility of The APEC Group website. Please let us know if you encounter accessibility barriers on our site:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Phone: 855-444-2732</li>
          <li>E-mail: Sales@TheAPECgroup.com</li>
          <li>Visitor Address: 4732-E North Royal Atlanta Drive, Tucker, GA 30084</li>
        </ul>
        <p className="mb-6 leading-relaxed text-gray-700">
          We try to respond to feedback within 2 business days.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Limitations and Alternatives</h2>
        <p className="mb-6 leading-relaxed text-gray-700">
          Despite our best efforts to ensure accessibility of The APEC Group website, there may be some limitations. Please contact us if you observe an issue, and we will do our best to assist you in accessing the information you need.
        </p>
      </div>
    </main>
  );
}
