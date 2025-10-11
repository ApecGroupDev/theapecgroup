"use client";

import React from "react";

const IntroContact: React.FC = () => {
  return (
    <div className='bg-transparent flex flex-col items-center scrn-600:justify-center h-auto max-w-[1440px] mx-auto px-4 scrn-600:px-6 scrn-1000:px-8'>
      <div className="mt-12">
        <p className="text-lg">
          Have a question? Need a quote? Want expert advice on your next fuel station or compliance project? You’re in the right place.
        </p>
        <p className="text-lg mt-4">
          At <span className="apec-red font-semibold">The APEC Group,</span> we make it easy to get the answers and support you need. Whether you’re planning construction,
          seeking financing, upgrading fuel equipment, or ensuring regulatory compliance — our team is ready to help.
        </p>
        <p className="text-lg mt-4">
          We believe in <span className="apec-red font-semibold">fast, clear communication</span> and <span className="apec-red font-semibold">practical, real-world solutions</span>.
          When you reach out, you’ll talk directly to experienced professionals — not call centers — so you get the guidance you need, when you need it.
        </p>
      </div>
    </div>
  );
};

export default IntroContact;
