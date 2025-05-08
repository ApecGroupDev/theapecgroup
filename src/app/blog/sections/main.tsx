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
      <div className="grid grid-cols-2 max-w-7xl gap-4 p-4 outline-1 outline-dashed">
        {/* Left Large Thumbnail */}
        <div className="relative overflow-hidden rounded-lg h-full shadow-lg">
          <img
            src={blogData[0].imageUrl}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-white to-transparent" />
          <div className="absolute text-2xl bottom-2 left-4 right-4 text-black font-semibold">
            <p className="text-[#c62931]">{blogData[0].title}</p>
            <p>{blogData[0].subtitle}</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 h-full">
          {/* Top Two Thumbnails (half height) */}
          <div className="grid grid-cols-2 gap-4 h-1/2">
            {[1, 2].map((i) => (
              <div key={i} className="relative h-full overflow-hidden rounded-lg shadow-lg">
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

          {/* Bottom Thumbnail (half height) */}
          <div className="relative h-1/2 overflow-hidden rounded-lg shadow-lg">
            <img
              src={blogData[3].imageUrl}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-[140px] bg-gradient-to-t from-white to-transparent" />
            <div className="absolute text-xl bottom-2 left-4 text-black font-semibold">
              <p className="text-[#c62931]">{blogData[3].title}</p>
              <p>{blogData[3].subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogMain;
