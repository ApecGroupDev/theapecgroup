import Image from 'next/image';
import Link from 'next/link';

const Main = () => {
  return (
    <div className='px-4 scrn-600:px-12 scrn-800:px-20 max-w-7xl mx-auto mb-20'>
      <div className='mt-28 scrn-600:mt-32 scrn-1000:mt-24 scrn-1300:mt-28 scrn-1600:mt-32 scrn-1900:mt-40 items-end flex underline'>
        <Link
          href="/blogs"
          className="ms-auto scrn-750:text-lg scrn-1400:text-xl text-red-700 hover:text-red-500 hover:scale-150"
        >
          Back to Blogs
        </Link>
      </div>
      <img
        src="/blogImages/blog3.jpg"
        alt="Blog Image"
        className='w-full object-center rounded-lg mb-6 scrn-1900:h-172 mt-4'
      />

      {/* Title + Subtitle inline */}
      <div className='text-3xl scrn-1000:text-5xl scrn-1900:text-7xl font-bold mb-4'>
        <span className='text-[#c62931]'>Main Parts Of The </span>
        <span className='text-black font-semibold'>Petroleum Industry</span>
      </div>

      <hr className='border-[#c62931] border-2 w-20 my-2' />

      <div className='scrn-1000:ps-12 pt-12'>
        {/* PARTS OF GASOLINE PUMP */}
        <div className='space-y-3'>
          <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
            The petroleum industry has a significant impact globally. They use advanced technologies to find underground
            reserves. The oil and <span className='text-[#c62931]'>gas industry</span> is one of the largest and most crucial industries for many things we use daily.
            This industry is often divided into three segments:
          </p>

          <ul className='list-disc list-inside space-y-2'>
            <li className='font-semibold text-lg scrn-1000:text-xl'>Upstream - <span className='font-normal'>exploration and production</span></li>
            <li className='font-semibold text-lg scrn-1000:text-xl'>Midstream - <span className='font-normal'>transportation and storage</span></li>
            <li className='font-semibold text-lg scrn-1000:text-xl'>Downstream - <span className='font-normal'>refining and processing</span></li>
          </ul>
        </div>
        {/* END - PARTS OF GASOLINE PUMP */}

        {/* OVERVIEW OF THE PETROLEUM INDUSTRY */}
        <p className='text-4xl scrn-1000:text-5xl font-semibold text-[#c62931] whitespace-pre-line mt-6'>
          Overview of the Petroleum Industry
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
          The petroleum industry is also known as the oil industry and oil patch. It&apos;s all about exploration, extraction, refining,
          and transportation of petroleum products. The exploration process involves searching for oil and gas reserves; after
          exploration, extraction methods are used to extract the oil and gas from underground reservoirs. After extraction,
          crude oil is refined, converting it into usable products to meet our energy needs.
        </p>
        {/* END - OVERVIEW OF THE PETROLEUM INDUSTRY */}

        {/* REGULATIONS OF THE PETROLEUM INDUSTRY */}
        <p className='text-4xl scrn-1000:text-5xl font-semibold text-[#c62931] whitespace-pre-line mt-10'>
          Regulations within the Petroleum Industry
        </p>
        <Image
          src="/blogImages/Blog_3_Img_1.webp" // Adjust this path to your public directory image
          alt="Fuel pump system illustration"
          width={1024}
          height={500}
          className='rounded-lg shadow w-full h-auto my-3'
        />
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
          Petroleum industries have some rules and regulations to follow from the state and federal governments.
          Some of the regulations are given below:
        </p>

        <p className='text-3xl scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Government Laws and Policies
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
          Government policies and laws regulate the petroleum industry to ensure safe and reliable operations,
          protect the environment, and maintain safety standards. So, petroleum industries must comply with
          government regulations like licensing, taxation, etc, to establish smooth operations.
        </p>

        <p className='text-3xl scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Environmental and Safety Regulations
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
          Protecting the environment from carbon emissions is a top priority for the petroleum industry. That’s why
          petroleum industries strictly follow environmental and safety regulations and focus on reducing air and water
          pollution and promoting a greener environment.
        </p>
        {/* END - REGULATIONS OF THE PETROLEUM INDUSTRY */}

        {/* CHALLENGES OF THE PETROLEUM INDUSTRY */}
        <p className='text-4xl scrn-1000:text-5xl font-semibold text-[#c62931] whitespace-pre-line mt-10'>
          Challenges of the Petroleum Industry
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line mt-4'>
          The petroleum industry has faced many economic, technological, and environmental challenges.
          These challenges have made companies need to find solutions and stay competitive in the markets.
        </p>

        <p className='text-3xl scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Environmental Regulations
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
          The major challenge facing the petroleum equipment industry is the increasing environmental regulations.
          People are concerned about carbon emissions, pollution, and climate change. Hence, the government implements
          strict rules to reduce pollution and make the planet greener, which can increase operating costs for companies
          due to investment in advanced technologies.
        </p>

        <p className='text-3xl scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Economic Fluctuations
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
          The petroleum industry has to face economic fluctuations caused by geopolitical stress, economic and environmental
          issues, and price volatility that can affect companies’ profitability and lead to supply disruption and
          unpredictable prices, which are big challenges.
        </p>

        <p className='text-3xl scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Talent shortage
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
          As technology advances, the petroleum industry faces the challenge of upgrading existing infrastructure and finding
          talented workers to operate these new technologies. It’s difficult for companies to find highly skilled workers and
          upgrade existing infrastructure because it requires a significant investment.
        </p>
        {/* END - CHALLENGES OF THE PETROLEUM INDUSTRY */}

        {/* OPPORTUNITIES IN THE PETROLEUM INDUSTRY */}
        <p className='text-4xl scrn-1000:text-5xl font-semibold text-[#c62931] whitespace-pre-line mt-10'>
          Opportunities in the Petroleum Industry
        </p>
        <Image
          src="/blogImages/Blog_3_Img_2.webp" // Adjust this path to your public directory image
          alt="Fuel pump system illustration"
          width={1024}
          height={500}
          className='rounded-lg shadow w-full h-auto my-3'
        />
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
          There are many amazing opportunities in the petroleum industry. Some of these are given below:
        </p>

        <p className='text-3xl scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Exploration and Extraction process
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
          Innovative techniques play a crucial role in exploring and extracting petroleum resources. Advanced techniques
          such as 3D seismic imaging, drilling technologies, robotics and artificial intelligence, digital twinning,
          and blockchain technology have revolutionised and expanded the industry’s potential.
        </p>

        <p className='text-3xl scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Renewable energy Sources
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
          The petroleum industry is shifting towards renewable energy sources for a sustainable, greener future.
          Many companies use renewable energy sources, like wind, sunlight and biofuels. This diversification will
          help reduce the carbon footprint, minimise the negative environmental impacts, and stimulate economic
          growth by creating a healthier and greener innovative environment.
        </p>

        <p className='text-3xl scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Investment Potential
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
          With the increasing energy demand, it’s a favorable environment for investment and market expansion.
          Technological advancements and improved infrastructure increased productivity, reduced costs, and improved
          safety measures, ultimately generating higher company profits.
        </p>
        {/* END - OPPORTUNITIES IN THE PETROLEUM INDUSTRY */}

        {/* TRENDS IN THE PETROLEUM INDUSTRY */}
        <p className='text-4xl scrn-1000:text-5xl font-semibold text-[#c62931] whitespace-pre-line mt-10'>
          Trends in the Petroleum Industry
        </p>
        <Image
          src="/blogImages/Blog_3_Img_3.webp" // Adjust this path to your public directory image
          alt="Fuel pump system illustration"
          width={1024}
          height={500}
          className='rounded-lg shadow w-full h-auto my-3'
        />
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
          The petroleum industry is undergoing significant changes driven by advancements, shifting global demand,
          sustainability practices, etc. These trends are reshaping the petroleum industry for a better future.
        </p>

        <p className='text-3xl scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Focus on Sustainable practices.
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
          The petroleum industry has been focused on sustainable practices. This means that they focus on taking
          steps to reduce the environmental effects, which have been a major issue in the past. Furthermore, they are
          developing innovative solutions, like air compressor packages, adopting cleaner technologies, and optimizing
          resource usage to improve sustainability.
        </p>

        <p className='text-3xl scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Advanced development
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
          Advanced development and infrastructure trends have been significant in the petroleum industry. These
          advanced developments, like advanced analytics, artificial intelligence and the Internet of Things (IoT),
          enhance efficiency and improve various aspects of the industry.
        </p>

        <p className='text-3xl scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Focus On Safety
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
          The petroleum industry implements advanced technologies and predictive maintenance for the safety of workers
          and the environment. The industries strictly follow the rules and regulations of regulatory bodies, including
          regular safety training and the implementation of safety management systems and other safety measures. These steps improve safety, extend the life of installations, and reduce unnecessary costs.
        </p>
        {/* END - TRENDS IN THE PETROLEUM INDUSTRY */}
      </div>
    </div>
  );
};

export default Main;
