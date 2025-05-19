"use client";

import React from 'react';
import { blogData, BlogThumbnail } from '../components/blogData';

const BlogMain: React.FC = () => {
  const [activeBlog, setActiveBlog] = React.useState<BlogThumbnail | null>(null);

  const openBlog = (blog: BlogThumbnail) => setActiveBlog(blog);
  const closeBlog = () => setActiveBlog(null);
  return (
    <div className="bg-transparent flex flex-col items-center scrn-600:justify-center outline-1 outline-dashed gap-y-4
      h-168
      scrn-400:h-168
      scrn-500:h-152
      scrn-600:h-160
      scrn-800:h-164 
      scrn-850:h-172
      scrn-900:h-184
      scrn-950:h-192
      scrn-1000:h-216
      scrn-1050:h-216
      scrn-1100:h-228
      scrn-1150:h-240
      scrn-1200:h-248
      scrn-1300:h-256
      scrn-1350:h-272
      scrn-1400:h-276
      scrn-1450:h-288
      scrn-1500:h-304
      scrn-1550:h-304
      scrn-1600:h-316
      scrn-1650:h-324
      scrn-1700:h-324
      scrn-1750:h-339
      scrn-1800:h-352
      scrn-1850:h-360
      scrn-1900:h-352
      scrn-1950:h-368
      scrn-2000:h-384
      scrn-2100:h-416
      scrn-2250:h-432
      scrn-2300:h-448
      scrn-2400:h-464
      scrn-2450:h-464
      scrn-2500:h-480"
    >
      {[0, 4].map((startIdx) => (
        <div key={startIdx} className="grid grid-cols-2 gap-4 max-w-7xl">
          {/* Left Large Thumbnail */}
          <div
            onClick={() => openBlog(blogData[startIdx])}
            className="relative overflow-hidden rounded-lg h-full shadow-lg cursor-pointer"
          >
            <img
              src={blogData[startIdx].imageUrl}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-white to-transparent" />
            <div className="absolute text-2xl bottom-2 left-4 right-4 text-black font-semibold">
              <p className="text-[#c62931]">{blogData[startIdx].title}</p>
              <p>{blogData[startIdx].subtitle}</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 h-full">
            <div className="grid grid-cols-2 gap-4 h-1/2">
              {[startIdx + 1, startIdx + 2].map((i) => (
                <div
                  key={i}
                  onClick={() => openBlog(blogData[i])}
                  className="relative h-full overflow-hidden rounded-lg shadow-lg cursor-pointer"
                >
                  <img
                    src={blogData[i].imageUrl}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-[140px] bg-gradient-to-t from-white to-transparent" />
                  <div className="absolute text-xl bottom-2 left-4 text-black font-semibold">
                    <p className="text-[#c62931]">{blogData[i].title}</p>
                    <p>{blogData[i].subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              onClick={() => openBlog(blogData[startIdx + 3])}
              className="relative h-1/2 overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              <img
                src={blogData[startIdx + 3].imageUrl}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full h-[140px] bg-gradient-to-t from-white to-transparent" />
              <div className="absolute text-xl bottom-2 left-4 text-black font-semibold">
                <p className="text-[#c62931]">{blogData[startIdx + 3].title}</p>
                <p>{blogData[startIdx + 3].subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {activeBlog && (
        <div className="fixed inset-0 z-50 bg-white bg-opacity-95 flex flex-col p-8 overflow-y-auto">
          <div className="wax-w-7xl">
            <button
              onClick={closeBlog}
              className="self-end mb-4 text-4xl text-gray-700 hover:text-red-500"
            >
              &times;
            </button>
            <img
              src={activeBlog.imageUrl}
              alt="Blog Image"
              className="max-w-7xl mx-auto max-h-224 object-cover rounded-lg mb-6"
            />

            {/* Title + Subtitle inline */}
            <div className="text-3xl font-bold mb-4">
              <span className="text-[#c62931]">{activeBlog.title} </span>
              <span className="text-black font-semibold">{activeBlog.subtitle}</span>
            </div>

            <p className="text-gray-800 text-xl whitespace-pre-line">
              {activeBlog.p1 || ''}
            </p>

          </div>
        </div>
      )}
    </div>
  );
};

export default BlogMain;
