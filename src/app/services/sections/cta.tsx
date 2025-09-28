"use client";

import React from "react";

const CTAServices: React.FC = () => {
  return (
    <div className='flex flex-col items-center scrn-600:justify-center h-auto px-2 scrn-600:px-14'>
      {/* CTA Section */}
      <section className="w-full outline-dashed py-12 px-6 my-16 rounded-2xl">
        <div className="mx-auto text-center space-y-6">
          <h2 className="text-2xl scrn-600:text-3xl scrn-1000:text-4xl font-bold">
            Ready to Build or Grow Your Gas Station Business?
          </h2>
          <p className="text-lg scrn-600:text-xl">
            Call us now at{" "}
            <a href="tel:8554442732" className="font-semibold underline hover:text-gray-600 apec-red">
              855-444-2732
            </a>
          </p>
          <p className="text-lg scrn-600:text-xl">
            Email:{" "}
            <a href="mailto:Sales@TheAPECgroup.com" className="font-semibold underline hover:text-gray-600 apec-red">
              Sales@TheAPECgroup.com
            </a>
          </p>
          <p className="text-xl scrn-600:text-2xl font-medium">
            Get a free consultation today — let’s fuel your success!
          </p>
        </div>
      </section>
    </div>
  );
};

export default CTAServices;
