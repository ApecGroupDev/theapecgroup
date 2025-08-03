import Image from 'next/image';
import Link from 'next/link';

const Main = () => {
  return (
    <div className='px-4 scrn-600:px-12 scrn-800:px-20 max-w-7xl mx-auto mb-20'>
      <div className='mt-28 scrn-600:mt-32 scrn-1000:mt-40 scrn-1900:mt-60 items-end flex underline'>
        <Link
          href="/blogs"
          className="ms-auto scrn-750:text-lg scrn-1400:text-xl text-red-700 hover:text-red-500 hover:scale-150"
        >
          Back to Blogs
        </Link>
      </div>
      <img
        src="/blogImages/blog4.jpg"
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
        {/* INTRO */}
        <div className='space-y-3'>
          <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
            Research plays a vital role in the <span className='text-[#c62931]'>petroleum industry</span>. It helps to understand and tackle
            the challenges of exploring, extracting and producing oil and gas. Through research, we discover the latest techniques and technologies
            that enhance the sustainable and efficient petroleum industry.
          </p>

          <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
            With petroleum research, we can produce oil and gas products in a safer and environmentally friendly way. In this article, we will
            discuss all aspects of petroleum research.
          </p>
        </div>
        {/* END - INTRO */}

        {/* TYPES OF PETROLEUM RESEARCH */}
        <p className='text-4xl scrn-1000:text-5xl font-semibold text-[#c62931] whitespace-pre-line mt-12'>
          Types of Petroleum Research
        </p>
        <Image
          src="/blogImages/Blog_4_Img_1.webp" // Adjust this path to your public directory image
          alt="Fuel pump system illustration"
          width={1024}
          height={500}
          className='rounded-lg shadow w-full h-auto my-3'
        />
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line mt-4'>
          There are various types of <span className='text-[#c62931]'>petroleum research</span>. Some of them are given below:
        </p>
        <p className='text-3xl scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Exploration and Production Research
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
          Exploration and production research is crucial in the oil and gas industry. It focuses on searching for and extracting oil
          and gas techniques that are the first step of energy production.
        </p>

        <p className='text-3xl scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Refining and Processing Research
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
          Refining and Processing Research is crucial in the oil and gas industry. It focuses on transforming Oil and natural gas
          into a wide range of fuels and other useful products while removing polluting components.
        </p>
        <p className='text-3xl scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Environmental Research
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
          Environmental research helps us to understand and reduce the environmental impacts of exploration, extraction, and production
          processes. Through research, we can develop innovative solutions to minimise pollution.
        </p>
        <p className='text-3xl scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Alternative Energy Research
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
          Alternative energy research focuses on finding sustainable and renewable sources for a greener and healthier planet.
          In this research, we develop and explore solar, wind, hydro and geothermal power technologies.
        </p>
        <p className='text-3xl scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Economic and Market Research
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
          Economic and market research focuses on understanding the oil and gas industry dynamics. In this research, we analyse
          trends, forecast demand and assess the impact of various factors on pricing.
        </p>
        {/* END - TYPES OF PETROLEUM RESEARCH */}

        {/* CURRENT PROJECTS IN PETROLEUM RESEARCH */}
        <p className='text-4xl scrn-1000:text-5xl font-semibold text-[#c62931] whitespace-pre-line mt-12'>
          Current Projects in Petroleum Research
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line mt-3'>
          The United States plays a major role in the oil and gas industry, and several innovative projects are underway.
          Researchers are working on numerous projects to improve efficiency and sustainability by improving production rates,
          reducing costs, and minimising environmental impacts.
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line mt-3'>
          Some current projects in petroleum research include:
        </p>
        <ul className='list-disc list-inside space-y-2 mt-3'>
          <li className='text-lg scrn-1000:text-xl'>Hydraulic fracturing</li>
          <li className='text-lg scrn-1000:text-xl'>Gas hydrates drilling</li>
          <li className='text-lg scrn-1000:text-xl'>Reservoir Simulation</li>
          <li className='text-lg scrn-1000:text-xl'>Producing gas condensate</li>
          <li className='text-lg scrn-1000:text-xl'>CO2 sequestration</li>
          <li className='text-lg scrn-1000:text-xl'>Multilateral drilling and many other projects</li>
        </ul>
        {/* END - CURRENT PROJECTS IN PETROLEUM RESEARCH */}

        {/* TOP INSTITUTES FOR PETROLEUM RESEARCH */}
        <p className='text-4xl scrn-1000:text-5xl font-semibold text-[#c62931] whitespace-pre-line mt-12'>
          Top Institutes for Petroleum Research
        </p>
        <Image
          src="/blogImages/Blog_4_Img_2.webp" // Adjust this path to your public directory image
          alt="Fuel pump system illustration"
          width={1024}
          height={500}
          className='rounded-lg shadow w-full h-auto my-3'
        />
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line mt-4'>
          Some well-known petroleum research institutes focus on different aspects of <span className='text-[#c62931]'>PCRA</span>,
          including exploration, extraction, refining, and environmental impact. Some top institutes include:
        </p>
        <p className='text-3xl scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Massachusetts Institute of Technology
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
          Massachusetts Institute of Technology is a private institute known for its cutting-edge research in various fields.
          They specialise in the following programs:
        </p>
        <ul className='list-disc list-inside space-y-2 mt-3'>
          <li className='text-lg scrn-1000:text-xl'>Enhanced Oil Recovery</li>
          <li className='text-lg scrn-1000:text-xl'>Sustainable energy systems</li>
          <li className='text-lg scrn-1000:text-xl'>Reservoir modelling and others</li>
        </ul>
        <p className='text-3xl scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Stanford University
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
          Stanford University has a strong petroleum research program. They specialise in research with emphasis on the following programs:
        </p>
        <ul className='list-disc list-inside space-y-2 mt-3'>
          <li className='text-lg scrn-1000:text-xl'>Reservoir Engineering</li>
          <li className='text-lg scrn-1000:text-xl'>Enhanced Oil Recovery</li>
          <li className='text-lg scrn-1000:text-xl'>Carbon capture technologies and many others</li>
        </ul>
        <p className='text-3xl scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Texas A&M University
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
          Texas A&M University is a leading public university. Their expertise in the following research programs:
        </p>
        <ul className='list-disc list-inside space-y-2 mt-3'>
          <li className='text-lg scrn-1000:text-xl'>Drilling Engineering</li>
          <li className='text-lg scrn-1000:text-xl'>Reservoir Management</li>
          <li className='text-lg scrn-1000:text-xl'>Production Optimization</li>
        </ul>
        <p className='text-3xl scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Imperial College London
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
          Imperia College London has a global reputation for its interdisciplinary research in petroleum engineering.
          They specialise in research with emphasis on the following topics:
        </p>
        <ul className='list-disc list-inside space-y-2 mt-3'>
          <li className='text-lg scrn-1000:text-xl'>Process Engineering</li>
          <li className='text-lg scrn-1000:text-xl'>Reservoir Engineering</li>
          <li className='text-lg scrn-1000:text-xl'>Multiphase flow and many others</li>
        </ul>
        <p className='text-[#c62931] scrn-1000:text-lg whitespace-pre-line mt-4'>
          These institutes, among others, have played a significant role in petroleum research and drive cutting-edge
          innovations in the petroleum industry.
        </p>
        {/* END - TOP INSTITUTES FOR PETROLEUM RESEARCH */}

        {/* TOOLS AND RESOURCES FOR PETROLEUM RESEARCH */}
        <p className='text-4xl scrn-1000:text-5xl font-semibold text-[#c62931] whitespace-pre-line mt-12'>
          Tools and Resources for Petroleum Research
        </p>
        <Image
          src="/blogImages/Blog_4_Img_3.webp"
          alt="Fuel pump system illustration"
          width={1024}
          height={500}
          className='rounded-lg shadow w-full h-auto my-3'
        />
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line mt-4'>
          Here, we discuss tools and resources essential for petroleum research that contribute to the advancements of the petroleum industry.
        </p>
        <p className='text-3xl scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Laboratory Equipment
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
          Petroleum research requires laboratory equipment such as spectrometers, viscometers and chromatographs to gain valuable insights.
        </p>

        <p className='text-3xl scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Data Analysis
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
          Big data analysis tools play a vital role in petroleum research. They help understand the vast amount of data and also help in decision-making.
        </p>

        <p className='text-3xl scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Advanced Modeling Software
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
          Advanced modelling software like reservoir stimulation tools stimulate and analyse the behaviour of oil and gas reservoirs.
        </p>

        <p className='text-3xl scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Research databases
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
          A research database is crucial for staying current with the latest findings and advancements in petroleum research.
        </p>
        {/* END - TOOLS AND RESOURCES FOR PETROLEUM RESEARCH */}

        {/* FUNDING SOURCES FOR PETROLEUM RESEARCH */}
        <p className='text-4xl scrn-1000:text-5xl font-semibold text-[#c62931] whitespace-pre-line mt-12'>
          Tools and Resources for Petroleum Research
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line mt-4'>
          There are various sources of funding for petroleum research. These sources provide financial support to conduct research and
          develop the latest technologies. The goal of funding petroleum research is to support research and innovation in the petroleum
          industry. Some common sources are the following:
        </p>
        <p className='text-3xl scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Governments Grants
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
          The government offers grants and funding programs designed to support petroleum research. Researchers can apply for these grants
          through research institutions and government programs. The government grants support the development of new technologies in
          the petroleum industry, which is profitable for the economy.
        </p>

        <p className='text-3xl scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Industry Collaboration and Sponsorships
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
          Another way to obtain funding is by collaborating with industry partners and securing sponsorships from oil and gas companies.
          These partnerships provide financial support for conducting research.
        </p>

        <p className='text-3xl scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Academic Institutions
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
          Academic institutions have their funding mechanisms to support research projects. They have various sources of funding for petroleum research.
        </p>
        <p className='text-[#c62931] scrn-1000:text-lg whitespace-pre-line mt-6'>
          These are just a few sources of funding for petroleum research. Other sources like non-profit organisations, foundations
          and research centres also play a vital role in funding. Moreover, building strong collaborations and networks is important
          to increase the chance of funding
        </p>
        {/* END - FUNDING SOURCES FOR PETROLEUM RESEARCH */}
      </div>
    </div>
  );
};

export default Main;
