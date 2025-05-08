import React from 'react';

type BlogThumbnail = {
  title: string;
  subtitle?: string;
  imageUrl: string;
};

const blogData: BlogThumbnail[] = [
  {
    title: 'The Future of Gas Stations:',
    subtitle: 'Innovations Shaping the Petroleum Industry',
    imageUrl: '/blogImages/blog1.png',
  },
  {
    title: 'How much does it cost',
    subtitle: 'to build a gas station?',
    imageUrl: '/blogImages/blog1.png',
  },
  {
    title: 'How much does it cost',
    subtitle: 'to build a gas station?',
    imageUrl: '/blogImages/blog1.png',
  },
  {
    title: 'The Future of Gas Stations:',
    subtitle: 'Innovations Shaping the Petroleum Industry',
    imageUrl: '/blogImages/blog1.png',
  },
  {
    title: 'The Future of Gas Stations:',
    subtitle: 'Innovations Shaping the Petroleum Industry',
    imageUrl: '/blogImages/blog1.png',
  },
  {
    title: 'How much does it cost',
    subtitle: 'to build a gas station?',
    imageUrl: '/blogImages/blog1.png',
  },
  {
    title: 'How much does it cost',
    subtitle: 'to build a gas station?',
    imageUrl: '/blogImages/blog1.png',
  },
  {
    title: 'The Future of Gas Stations:',
    subtitle: 'Innovations Shaping the Petroleum Industry',
    imageUrl: '/blogImages/blog1.png',
  },
];

const BlogMain: React.FC = () => {
  return (
    <div className="bg-transparent flex flex-col items-center scrn-600:justify-center
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
      <div className="grid grid-cols-2 max-w-7xl gap-4 p-4 mx-auto">
        {/* Left Large Thumbnail */}
        <div className="w-full h-[500px] relative">
          <img src={blogData[0].imageUrl} alt="" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-xl font-bold">{blogData[0].title}</h2>
            <p className="text-sm">{blogData[0].subtitle}</p>
          </div>
        </div>

        {/* Right Thumbnails */}
        <div className="flex flex-col gap-4">
          {/* Top Row - Two Images */}
          <div className="grid grid-cols-2 gap-4 h-[240px]">
            {[1, 2].map((i) => (
              <div key={i} className="relative">
                <img
                  src={blogData[i].imageUrl}
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-2 left-2 text-white text-sm">
                  <p className="font-semibold">{blogData[i].title}</p>
                  <p>{blogData[i].subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row - Full Width Image */}
          <div className="relative h-[240px]">
            <img
              src={blogData[3].imageUrl}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-md font-bold">{blogData[3].title}</h2>
              <p className="text-sm">{blogData[3].subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogMain;
