const About: React.FC = () => {
  return (
    <div className="relative w-full bg-transparent flex flex-col md:flex-row justify-center lg:px-8 xl:px-28 lg:mt-32 xl:mt-32 macbook-pro-14:mt-0 macbook-pro-16:mt-0 2xl:mt-28">
      {/* Left Image Section */}
      <div className="w-full md:w-2/5 flex justify-center lg:py-28 p-6 md:p-12 xl:pt-0 2xl:pt-0 macbook-pro-14:pt-0 macbook-pro-16:px-14">
        <img
          src="/products/station.png"
          alt="Hero"
          className="rounded-lg object-cover w-full max-w-[400px] md:max-w-[500px] lg:max-w-[300px] xl:max-w-[350px] 2xl:max-w-[650px] 2k:max-w-[700px]"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-3/5 p-6 md:p-12 2xl:px-24 lg:mt-20 2xl:mt-8 2k:px-28 macbook-pro-14:pt-12 macbook-pro-16:pt-8 flex flex-col">
        <p className="text-5xl md:text-6xl lg:text-3xl macbook-pro-14:text-6xl 2xl:text-6xl 2k:text-8xl font-bold tracking-wider italic">Welcome to</p>
        <p className="text-5xl md:text-6xl lg:text-2xl macbook-pro-14:text-6xl 2xl:text-6xl 2k:text-8xl font-extrabold text-red-600 mt-3 lg:mt-0 xl:mt-0">APEC</p>
        <p className="text-2xl md:text-3xl lg:text-2xl macbook-pro-14:text-3xl 2xl:text-3xl 2k:text-5xl font-bold text-gray-800 mt-4 lg:mt-0 xl:mt-0">Petroleum Equipment Services</p>
        <p className="mt-6 lg:text-md xl:text-md macbook-pro-14:text-xl 2xl:text-xl 2k:text-2xl text-gray-600 tracking-wider">
          The APEC group you know today started out originally as Atlanta Petroleum Equipment Company in September of 1989.
          From our modest beginning as a small service company, we have grown to a leader in our industry offering a full
          line of petroleum equipment, installation, repair and support services.
        </p>
        <p className="mt-4 lg:text-md xl:text-md macbook-pro-14:text-xl 2xl:text-xl 2k:text-2xl text-gray-600 tracking-wider">
          APEC is committed to providing only the highest quality products and services available. Our industry continues
          to evolve technically year after year. APEC is committed to staying on the leading edge of all the latest innovations
          and technologies to not only support our customer’s needs but so we can also be the industry experts you can rely on.
        </p>
        {/* Button */}
        <div className="mt-12 flex justify-center">
          <button
            className="px-20 py-2 border-2 border-red-600 text-gray-800 text-lg font-semibold rounded-lg hover:bg-red-600 hover:text-white transition duration-200"
          >
            Sales@TheAPECgroup.com
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
