"use client";

import React from "react";

const GoogleMaps: React.FC = () => {
  return (
    <div className='bg-transparent flex flex-col items-center my-20'>
      {/* Google Maps Section */}
      <div className="w-full max-w-xs scrn-400:max-w-sm scrn-600:max-w-xl scrn-700:max-w-2xl scrn-850:max-w-3xl scrn-1000:max-w-4xl scrn-1200:max-w-5xl scrn-1400:max-w-6xl scrn-1500:max-w-7xl scrn-1700:max-w-8xl scrn-2000:max-w-9xl hidden scrn-600:block">
        <h2 className="text-center text-lg font-semibold text-gray-800 mb-4 scrn-1000:text-xl">
          Find Us on Google Maps
        </h2>
        <div className="w-full mx-auto h-auto scrn-700:h-44 scrn-950:h-52 scrn-1100:h-64 scrn-1250:h-80 scrn-1350:h-96 scrn-1500:h-80 scrn-1600:h-96 scrn-1700:h-120 scrn-1800:h-128 scrn-2200:h-140 rounded-xl overflow-hidden shadow-2xl">
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