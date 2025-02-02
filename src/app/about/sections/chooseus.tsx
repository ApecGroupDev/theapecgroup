const ChooseUs: React.FC = () => {
  return (
    <section className="py-20 px-10 flex flex-col items-center text-center">
      {/* Heading */}
      <h2 className="text-6xl 2xl:text-8xl font-bold">Why <span className="text-red-600">Choose Us</span></h2>

      {/* Content */}
      <p className="max-w-6xl text-3xl leading-normal font-semibold tracking-wider 2xl:mt-12">
        Today, APEC Group offers a diverse range of services, including canopy imaging and installation, 
        environmental compliance inspections, C-store renovations, EV charging solutions, remote site monitoring, 
        and digital marketing for dispensaries. We also provide tailored financing options to help you grow your business.
      </p>

      <p className="max-w-4xl text-3xl leading-normal font-semibold tracking-wider 2xl:mt-8">
        With offices in Atlanta, Georgia, and Houston, Texas, we are dedicated to serving businesses nationwide 
        with unparalleled expertise and commitment.
      </p>

      <p className="text-3xl font-semibold 2xl:mt-8">Let us partner with you to build success for your business.</p>
      <p className="text-3xl font-semibold 2xl:mt-8">What can we do for you today?</p>

      {/* Contact Button */}
      <a 
        href="mailto:Sales@TheAPECgroup.com"
        className="px-16 mt-12 md:px-12 md:text-sm lg:px-20 2k:px-28 py-1 border-2 border-red-600 text-gray-800 lg:text-lg mac-16:text-2xl 2xl:text-2xl 2k:text-3xl font-regular rounded-lg hover:bg-red-600 hover:text-white transition duration-200"
      >
        Sales@TheAPECgroup.com
      </a>
    </section>
  );
};

export default ChooseUs;
