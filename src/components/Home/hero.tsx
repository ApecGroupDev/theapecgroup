import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="relative flex items-center min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/backgrounds/Img1.jpg" // Replace with your image name
          alt="Hero Background"
          layout="fill"
          objectFit="fill"
          objectPosition="center"
          className="opacity-100"
        />
      </div>

      {/* Content */}
      <div className="text-white pl-40">
        <p className="text-6xl font-bold mb-4 text-black">YOUR TOP CHOICE</p>
        <p className="text-8xl mb-8 italic text-red-600 tracking-wide">ONE-STOP SHOP</p>
        <p className="text-6xl mb-4 text-black">ATLANTA COMPANY</p>
      </div>
    </div>
  );
};

export default Hero;
