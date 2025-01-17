const About: React.FC = () => {
  return (
    <div className="w-full bg-transparent flex flex-col md:flex-row md:px-12">
      {/* Left Image Section */}
      <div className="w-full md:w-2/5 xl:w-1/2">
        <img
          src="/products/station.png"
          alt="Hero"
          className="rounded-lg object-cover max-w-full lg:w-11/12 xl:w-9/12 mx-auto"
        />
      </div>

      {/* Right Text Section */}
      <div className="md:w-3/5 lg:w-1/2 xl:mt-16 flex flex-col">
        <p className="md:text-4xl xl:text-5xl mac-14:text-6xl 2xl:text-6xl 2k:text-8xl font-semibold italic">Welcome to</p>
        <p className="md:text-5xl xl:text-6xl mac-14:text-6xl 2xl:text-6xl 2k:text-8xl font-extrabold text-red-600">APEC</p>
        <p className="md:text-xl lg:text-2xl mac-14:text-3xl 2xl:text-3xl 2k:text-5xl font-medium text-gray-800">Petroleum Equipment Services</p>
        <p className="mt-4 md:text-sm w-900:text-base lg:text-base xl:text-lg mac-14:text-xl 2xl:text-xl 2k:text-2xl text-gray-800">
          The APEC group you know today started out originally as Atlanta Petroleum Equipment Company in September of 1989.
          From our modest beginning as a small service company, we have grown to a leader in our industry offering a full
          line of petroleum equipment, installation, repair and support services.
        </p>
        <p className="mt-4 md:text-sm w-900:text-base lg:text-base xl:text-lg mac-14:text-xl 2xl:text-xl 2k:text-2xl text-gray-800">
          APEC is committed to providing only the highest quality products and services available. Our industry continues
          to evolve technically year after year. APEC is committed to staying on the leading edge of all the latest innovations
          and technologies to not only support our customer’s needs but so we can also be the industry experts you can rely on.
        </p>
        {/* Button */}
        <div className="mt-4 flex justify-center">
          <button
            className="md:px-12 md:text-sm lg:px-20 py-1 border-2 border-red-600 text-gray-800 lg:text-lg font-regular rounded-lg hover:bg-red-600 hover:text-white transition duration-200"
          >
            Sales@TheAPECgroup.com
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
