import Image from 'next/image';

const About: React.FC = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div className="relative w-full h-auto">
        <Image
          src="/backgrounds/Img2.jpg" // Replace with your image path
          alt="Hero Background"
          layout="intrinsic" // Makes the container adjust based on image's natural size
          width={1920} // Replace with your image width
          height={1080} // Replace with your image height
          objectFit="contain" // Ensures the whole image is visible without cropping
          objectPosition="center" // Ensures the image is centered in the container
        />
      </div>

      {/* Content Section */}
      <div className="relative w-full">
        {/* Your content here */}
      </div>
    </div>
  );
};

export default About;
