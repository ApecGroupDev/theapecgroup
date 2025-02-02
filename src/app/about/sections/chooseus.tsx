const ChooseUs: React.FC = () => {
  return (
    <section className="py-20 px-10 text-white flex flex-col items-center text-center">
      {/* Heading */}
      <h2 className="text-6xl font-bold mb-8">Why Choose Us</h2>

      {/* Content */}
      <p className="max-w-4xl text-2xl leading-relaxed mb-8">
        Today, APEC Group offers a diverse range of services, including canopy imaging and installation, 
        environmental compliance inspections, C-store renovations, EV charging solutions, remote site monitoring, 
        and digital marketing for dispensaries. We also provide tailored financing options to help you grow your business.
      </p>

      <p className="max-w-4xl text-2xl leading-relaxed mb-8">
        With offices in Atlanta, Georgia, and Houston, Texas, we are dedicated to serving businesses nationwide 
        with unparalleled expertise and commitment.
      </p>

      <p className="text-3xl font-semibold mb-6">Let us partner with you to build success for your business.</p>
      <p className="text-2xl mb-8">What can we do for you today?</p>

      {/* Contact Button */}
      <a 
        href="mailto:Sales@TheAPECgroup.com"
        className="px-8 py-4 text-2xl font-semibold border-4 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all rounded-lg"
      >
        Sales@TheAPECgroup.com
      </a>
    </section>
  );
};

export default ChooseUs;
