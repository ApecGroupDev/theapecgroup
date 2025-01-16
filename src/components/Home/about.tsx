const About: React.FC = () => {
  return (
    <div className="relative w-full bg-transparent flex flex-col md:flex-row justify-center md:px-8 md:mt-24 w-900:mt-40 lg:px-8 lg:mt-32 xl:px-28 w-800:mt-12 xl:mt-24 mac-14:mt-0 mac-16:mt-0 2xl:mt-28">
      {/* Left Image Section */}
      <div className="w-full md:w-2/5 flex justify-center md:py-8 w-900:py-20 lg:py-32 lg:p-12 mac-14:pt-0 mac-16:px-14 2xl:pt-0">
        <img
          src="/products/station.png"
          alt="Hero"
          className="rounded-lg object-cover w-full md:max-w-[200px] lg:max-w-full mac-14:max-w-full xl:max-w-full 2xl:max-w-[650px] 2k:max-w-[700px]"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-3/5 p-6 md:p-4 lg:p-12 mac-14:pt-12 mac-16:pt-8 xl:mt-0 2xl:px-24 2xl:mt-8 2k:px-28 flex flex-col">
        <p className="text-5xl md:text-2xl lg:text-3xl mac-14:text-6xl 2xl:text-6xl 2k:text-8xl font-bold tracking-wider italic">Welcome to</p>
        <p className="text-5xl md:text-xl md:mt-0 lg:text-2xl lg:mt-0 mac-14:text-6xl xl:mt-0 2xl:text-6xl 2xl:mt-3 2k:text-8xl font-extrabold text-red-600">APEC</p>
        <p className="text-2xl md:text-xl md:mt-0 lg:mt-0 lg:text-2xl mac-14:text-3xl xl:mt-0 2xl:text-3xl 2xl:mt-4 2k:text-5xl font-bold text-gray-800">Petroleum Equipment Services</p>
        <p className="mt-6 md:text-xs w-900:text-base lg:text-lg xl:text-lg mac-14:text-xl 2xl:text-xl 2k:text-2xl text-gray-600 tracking-wider">
          The APEC group you know today started out originally as Atlanta Petroleum Equipment Company in September of 1989.
          From our modest beginning as a small service company, we have grown to a leader in our industry offering a full
          line of petroleum equipment, installation, repair and support services.
        </p>
        <p className="mt-4 md:text-xs w-900:text-base lg:text-lg xl:text-lg mac-14:text-xl 2xl:text-xl 2k:text-2xl text-gray-600 tracking-wider">
          APEC is committed to providing only the highest quality products and services available. Our industry continues
          to evolve technically year after year. APEC is committed to staying on the leading edge of all the latest innovations
          and technologies to not only support our customer’s needs but so we can also be the industry experts you can rely on.
        </p>
        {/* Button */}
        <div className="md:mt-8 lg:mt-12 flex justify-center">
          <button
            className="md:px-8 md:text-sm lg:px-20 py-2 border-2 border-red-600 text-gray-800 lg:text-lg font-semibold rounded-lg hover:bg-red-600 hover:text-white transition duration-200"
          >
            Sales@TheAPECgroup.com
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
