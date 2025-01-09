const About: React.FC = () => {
  return (
    <div className="relative w-full bg-transparent flex flex-col md:flex-row items-center justify-center xl:px-28">
      {/* Left Image Section */}
      <div className="w-full md:w-2/5 flex justify-center items-center p-6 md:p-12">
        <img
          src="/products/station.jpg"
          alt="Hero"
          className="rounded-lg object-cover w-full max-w-[400px] md:max-w-[500px] lg:max-w-[400px]"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-3/5 p-6 md:p-12 flex flex-col justify-center">
        <p className="text-5xl md:text-6xl font-semibold tracking-wider italic">Welcome to</p>
        <p className="text-red-600 mt-3 font-extrabold text-5xl md:text-6xl">APEC</p>
        <p className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">Petroleum Equipment Services</p>
        <p className="mt-6 text-lg md:text-xl text-gray-600">
          The APEC group you know today started out originally as Atlanta Petroleum Equipment Company in September of 1989.
          From our modest beginning as a small service company, we have grown to a leader in our industry offering a full
          line of petroleum equipment, installation, repair and support services.
        </p>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          APEC is committed to providing only the highest quality products and services available. Our industry continues
          to evolve technically year after year. APEC is committed to staying on the leading edge of all the latest innovations
          and technologies to not only support our customer’s needs but so we can also be the industry experts you can rely on.
        </p>
      </div>
    </div>
  );
};

export default About;
