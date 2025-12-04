import Image from 'next/image';
import Link from 'next/link';

const Main = () => {
  return (
    <div className='px-4 sm:px-12 md:px-20 max-w-7xl mx-auto mb-20'>
      <div className='mt-28 sm:mt-32 lg:mt-24 xl:mt-28 2xl:mt-32 items-end flex underline'>
        <Link
          href="/blogs"
          className="ms-auto md:text-lg xl:text-xl text-red-700 hover:text-red-500 hover:scale-105"
        >
          Back to Blogs
        </Link>
      </div>
      <Image
        src="/blogImages/blogThumbnails/blog1.webp"
        alt="Blog Image"
        width={1024}
        height={484}
        className='w-full object-center rounded-lg mb-6 2xl:h-172 mt-4'
      />

      {/* Title + Subtitle inline */}
      <div className='text-3xl lg:text-5xl 2xl:text-7xl font-bold mb-4'>
        <h1>
          <span className='text-[#c62931]'>The Future of Gas Stations: </span>
          <span className='text-black font-semibold'>Innovations Shaping the Petroleum Industry</span>
        </h1>
      </div>

      <hr className='border-[#c62931] border-2 w-20 my-2' />

      <div className='lg:ps-12 pt-12'>
        {/* INTRO */}
        <p className='text-gray-800 lg:text-lg whitespace-pre-line'>
          The petroleum industry is in the midst of a transformation, driven by technological advancements and evolving consumer demands.
          Modern gas stations are evolving beyond simple refueling stops—they&apos;re becoming high-tech service hubs focused on enhancing
          convenience, efficiency, and environmental responsibility.
        </p>
        {/* END -INTRO */}

        {/* GROUP 1 */}
        <p className='text-4xl lg:text-5xl font-semibold text-[#c62931] whitespace-pre-line mt-6'>
          Smart Fueling Technology
        </p>
        <p className='text-gray-800 lg:text-lg whitespace-pre-line'>
          Automation is changing the way we fuel our vehicles. Smart pumps with digital interfaces enable customers to make cashless payments,
          track fuel consumption, and receive personalized promotions. Mobile apps and contactless payment solutions are further enhancing convenience,
          reducing wait times, and boosting operational efficiency.
        </p>
        {/* END - GROUP 1 */}

        {/* GROUP 2 */}
        <p className='text-4xl lg:text-5xl font-semibold text-[#c62931] whitespace-pre-line mt-6'>
          Eco-Friendly Fueling Solutions
        </p>
        <p className='text-gray-800 lg:text-lg whitespace-pre-line'>
          Sustainability is a priority in the petroleum industry. Many gas stations are incorporating biofuels, electric vehicle (EV) charging stations,
          and solar-powered canopies to reduce their carbon footprint. Innovations such as vapor recovery systems and eco-friendly fuel dispensers are
          contributing to environmental conservation.
        </p>
        {/* END - GROUP 2 */}

        {/* GROUP 3 */}
        <p className='text-4xl lg:text-5xl font-semibold text-[#c62931] whitespace-pre-line mt-6'>
          Advanced Safety and Compliance Measures
        </p>
        <p className='text-gray-800 lg:text-lg whitespace-pre-line'>
          Safety regulations are constantly evolving, and compliance is crucial for fueling stations. Automated leak detection systems, real-time fuel
          tank monitoring, and AI-driven predictive maintenance are helping station owners prevent costly leaks and ensure compliance with environmental
          standards.
        </p>
        {/* END - GROUP 3 */}

        {/* GROUP 4 */}
        <p className='text-4xl lg:text-5xl font-semibold text-[#c62931] whitespace-pre-line mt-6'>
          Convenience Store Upgrades
        </p>
        <p className='text-gray-800 lg:text-lg whitespace-pre-line'>
          Gas station convenience stores are shifting towards a more customer-centric approach. Modern designs, self-checkout kiosks, fresh food options,
          and loyalty rewards programs are enhancing the customer experience. Integrated POS systems allow for seamless transactions, making fuel stations
          more competitive with standalone retail stores.
        </p>
        {/* END - GROUP 4 */}

        {/* GROUP 5 */}
        <p className='text-4xl lg:text-5xl font-semibold text-[#c62931] whitespace-pre-line mt-6'>
          The Role of Data Analytics
        </p>
        <p className='text-gray-800 lg:text-lg whitespace-pre-line'>
          Big data plays a crucial role in optimizing petroleum business operations. Fuel station owners use analytics to monitor inventory, predict demand,
          and adjust pricing strategies. Customer behavior insights also help in creating targeted promotions and improving service offerings.
        </p>
        {/* END - GROUP 5 */}

        {/* CONCLUSION */}
        <p className='text-4xl lg:text-5xl font-semibold text-[#c62931] whitespace-pre-line mt-6'>
          Conclusion
        </p>
        <p className='text-gray-800 lg:text-lg whitespace-pre-line'>
          The future of gas stations is centered around innovation, efficiency, and sustainability. As the industry continues to evolve, businesses must
          stay ahead of emerging trends to remain competitive. The APEC Group is dedicated to delivering cutting-edge solutions for fueling stations,
          ensuring compliance, safety, and customer satisfaction.
        </p>
        {/* END - CONCLUSION */}

        {/* STAY TUNED */}
        <p className='text-3xl italic lg:text-2xl font-semibold whitespace-pre-line my-6'>
          Stay tuned for more updates on industry trends and innovations in petroleum services!
        </p>
        {/*END - STAY TUNED */}

        <hr className='my-4 border-2 border-gray-300' />


        {/* FAQ'S */}
        <p className='text-4xl lg:text-5xl font-semibold whitespace-pre-line'>
          FAQ&apos;s
        </p>

        <p className='text-[#c62931] lg:text-lg italic font-medium whitespace-pre-line'>
          1. How gas stations work?
        </p>

        <p className='text-gray-800 whitespace-pre-line'>
          Gas stations provide fuel to vehicles through pumps, where customers select fuel types, pay, and fill their tanks.
        </p>

        <p className='text-[#c62931] lg:text-lg italic font-medium whitespace-pre-line mt-6'>
          2. Why gas stations have different prices?
        </p>

        <p className='text-gray-800 whitespace-pre-line'>
          Prices vary due to factors like location, supply chain costs, competition, taxes, and oil market fluctuations.
        </p>

        <p className='text-[#c62931] lg:text-lg italic font-medium whitespace-pre-line mt-6'>
          3. Can gas stations cash checks?
        </p>

        <p className='text-gray-800 whitespace-pre-line'>
          Yes, we receive cash checks, and some gas stations may offer check-cashing services, but it depends on the location and available amenities.
        </p>
        {/* END - FAQ'S */}
      </div>
    </div>
  );
};

export default Main;
