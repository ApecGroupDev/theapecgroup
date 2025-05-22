"use client";

import React from 'react';
import { blogData, BlogThumbnail } from '../components/blogData';

const BlogMain: React.FC = () => {
  const [activeBlog, setActiveBlog] = React.useState<BlogThumbnail | null>(null);

  const openBlog = (blog: BlogThumbnail) => setActiveBlog(blog);
  const closeBlog = () => setActiveBlog(null);

  return (
    <div className="flex flex-col items-center scrn-600:justify-center outline-2 outline-dashed outline-green-500 gap-y-4
     h-auto mb-12 scrn-800:mx-8 scrn-1350:mx-0 py-4 scrn-1750:py-24 scrn-2000:py-32 scrn-2100:py-44 scrn-2400:py-60"
    >
      {[0, 4].map((startIdx) => (
        <div key={startIdx} className="grid grid-cols-1 px-2 scrn-1000:grid-cols-2 gap-4 max-w-7xl scrn-2100:max-w-8xl">
          {/* Left Large Thumbnail */}
          <div
            onClick={() => openBlog(blogData[startIdx])}
            className="relative overflow-hidden rounded-lg scrn-1000:h-full shadow-lg cursor-pointer scrn-500:mx-12 scrn-600:mx-0
            h-64
            scrn-450:h-72
            scrn-500:h-80
            scrn-800:h-96
            scrn-900:h-118"
          >
            <img
              src={blogData[startIdx].imageUrl}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-white to-transparent" />
            <div className="absolute text-base scrn-600:text-2xl bottom-2 left-4 right-4 text-black font-semibold">
              <p className="text-[#c62931]">{blogData[startIdx].title}</p>
              <p>{blogData[startIdx].subtitle}</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 scrn-600:grid-cols-2 gap-4 scrn-1000:h-1/2">
              {[startIdx + 1, startIdx + 2].map((i) => (
                <div
                  key={i}
                  onClick={() => openBlog(blogData[i])}
                  className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer scrn-500:mx-12 scrn-600:mx-0
                  h-64
                  scrn-450:h-72
                  scrn-500:h-80
                  scrn-900:h-96
                  scrn-1000:h-full"
                >
                  <img
                    src={blogData[i].imageUrl}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-white to-transparent" />
                  <div className="absolute text-base scrn-600:text-xl bottom-2 left-4 text-black font-semibold">
                    <p className="text-[#c62931]">{blogData[i].title}</p>
                    <p>{blogData[i].subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              onClick={() => openBlog(blogData[startIdx + 3])}
              className="relative scrn-1000:h-1/2 overflow-hidden rounded-lg shadow-lg cursor-pointer scrn-500:mx-12 scrn-600:mx-0
              h-64
              scrn-450:h-72
              scrn-500:h-80
              scrn-800:h-96
              scrn-900:h-118"
            >
              <img
                src={blogData[startIdx + 3].imageUrl}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full h-[140px] bg-gradient-to-t from-white to-transparent" />
              <div className="absolute text-base scrn-600:text-2xl bottom-2 left-4 text-black font-semibold">
                <p className="text-[#c62931]">{blogData[startIdx + 3].title}</p>
                <p>{blogData[startIdx + 3].subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {activeBlog && (
        <div className="fixed inset-0 z-50 bg-white bg-opacity-95 flex flex-col p-8 overflow-y-auto">
          <button
            onClick={closeBlog}
            className="ml-auto text-6xl text-red-700 hover:text-red-500 hover:scale-150"
          >
            &times;
          </button>
          <div className="max-w-7xl mx-auto">
            <img
              src={activeBlog.imageUrl}
              alt="Blog Image"
              className="w-full object-center rounded-lg mb-6
              scrn-1900:h-172"
            />

            {/* Title + Subtitle inline */}
            <div className="text-xl scrn-1900:text-3xl font-bold mb-4">
              <span className="text-[#c62931]">{activeBlog.title} </span>
              <span className="text-black font-semibold">{activeBlog.subtitle}</span>
            </div>

            <hr className='border-[#c62931] border-2 w-20 my-2' />

            {/* ✅ Render component here */}
            <activeBlog.ContentComponent />

          </div>
        </div>
      )}
    </div>
  );
};

export default BlogMain;
