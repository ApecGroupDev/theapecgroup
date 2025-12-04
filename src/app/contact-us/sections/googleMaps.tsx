"use client";

import React from "react";

const GoogleMaps: React.FC = () => {
  return (
    <div className='bg-transparent flex flex-col items-center my-20'>
      {/* Google Maps Section */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold text-gray-800 mb-4 lg:text-xl">
          Find Us on Google Maps
        </h2>
        <div className="w-full mx-auto h-140 rounded-xl overflow-hidden shadow-2xl">
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5625.444795644097!2d-84.19747312274932!3d33.86014347322978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5a60d37eeaeb9%3A0x378e67f08f914808!2sAtlanta%20Petroleum%20Equipment%20Co!5e1!3m2!1sen!2sph!4v1752174129484!5m2!1sen!2sph"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default GoogleMaps;