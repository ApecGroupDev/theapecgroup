"use client";
import React from "react";

const CTAAbout: React.FC = () => {
  return (
    <div className='flex flex-col items-center scrn-600:justify-center h-auto'>
      <div className="max-w-xs scrn-400:max-w-sm scrn-600:max-w-xl scrn-700:max-w-2xl scrn-850:max-w-3xl scrn-1000:max-w-4xl scrn-1200:max-w-5xl scrn-1400:max-w-6xl scrn-1500:max-w-7xl scrn-1700:max-w-8xl scrn-2000:max-w-9xl">
        {/* CTA Section */}
        <section className="w-full outline-dashed apec-red py-12 px-6 my-16 rounded-2xl">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-lg scrn-600:text-xl">
              Call us now at{" "}
              <a href="tel:8554442732" className="font-semibold underline hover:text-gray-600">
                855-444-2732
              </a>
            </p>
            <p className="text-lg scrn-600:text-xl">
              Email:{" "}
              <a href="mailto:Sales@TheAPECgroup.com" className="font-semibold underline hover:text-gray-600">
                Sales@TheAPECgroup.com
              </a>
            </p>
            <p className="text-xl scrn-600:text-2xl font-medium">
              Get a free consultation today — let’s fuel your success!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CTAAbout;
