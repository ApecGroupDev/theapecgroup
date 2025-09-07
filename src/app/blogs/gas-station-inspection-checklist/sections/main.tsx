import Image from 'next/image';
import Link from 'next/link';

const Main = () => {
  return (
    <div className='px-4 scrn-600:px-12 scrn-800:px-20 max-w-7xl mx-auto mb-20'>
      <div className='mt-28 scrn-600:mt-32 scrn-1000:mt-24 scrn-1300:mt-28 scrn-1600:mt-32 scrn-1900:mt-40 items-end flex underline'>
        <Link
          href="/blogs"
          className="ms-auto scrn-750:text-lg scrn-1400:text-xl text-red-700 hover:text-red-500 hover:scale-105"
        >
          Back to Blogs
        </Link>
      </div>
      <Image
        src="/blogImages/blogThumbnails/blog8.webp"
        alt="Blog Image"
        width={1024}
        height={500}
        className='w-full object-center rounded-lg mb-6 scrn-1900:h-172 mt-4'
      />

      {/* Title + Subtitle inline */}
      <div className='text-3xl scrn-1000:text-5xl scrn-1900:text-7xl font-bold mb-4'>
        <h1 className='text-[#c62931]'>Gas Station</h1>
        <h1 className='text-black font-semibold'>Inspection Checklist</h1>
      </div>

      <hr className='border-[#c62931] border-2 w-20 my-2' />

      <div className='scrn-1000:ps-12 pt-12'>
        {/* INTRO */}
        <div className='space-y-3'>
          <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
            The gas station inspection checklist, also known as the service station inspection checklist, plays a
            crucial role in making the area safer for customers and surrounding people. Implementing various safety
            compliances in gas stations helps to avoid any serious explosion or hazard. Gas stations are risky areas
            where fuels are handled and stored for vehicles. They strenuously require regular inspection for the
            protection of customers and employees.
          </p>

          <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
            The professional technician must inspect gas station regulations and safety compliances.
            <span className='text-[#c62931]'>The gas station</span> inspection checklists ensure that the fuels
            are handled safely and wastes are disposed of properly. Additionally, Regular inspection is necessary for
            <span className='text-[#c62931]'>environmental compliance</span>.This guide will explore the inspection checklist
            and why it is necessary for gas stations.
          </p>
        </div>
        {/* END - INTRO */}

        {/* GROUP 1 */}
        <p className='text-4xl scrn-1000:text-5xl font-semibold text-[#c62931] whitespace-pre-line mt-12'>
          What is included in the gas station inspection checklist?
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line mt-3'>
          The fuel station checklist allows inspectors to thoroughly inspect the following essential elements to
          ensure safety compliance and regulations. The checklist may vary depending on the policies of a specific
          area, but the objective is the same.
        </p>

        <p className='text-4xl scrn-1000:text-5xl font-semibold whitespace-pre-line mt-12'>
          Fuel dispensers & Underground Tanks
        </p>
        <Image
          src="/blogImages/Blog_8_Img_1.webp"
          alt="Fuel pump system illustration"
          width={1024}
          height={500}
          className='rounded-lg shadow w-full h-auto my-3'
        />
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
          The primary item on the checklist is thoroughly examining the leakage or damage in the oil storage tanks
          and dispensers. The area near the tanks is clear and safe, with no smoking or flames. Adding a smoking-restricting
          signboard reduces the risk associated with the fuel. The fuel dispenser display works well, and all its parts,
          like nozzles and hoses, function properly.
        </p>

        <p className='text-4xl scrn-1000:text-5xl font-semibold whitespace-pre-line mt-12'>
          Fire Safety Equipment
        </p>

        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line mt-3'>
          Inspect the fire safety measures to ensure compliance with standard regulations or policies. Ensure all the
          fire extinguishers and other emergency equipment are working well or charged and of good quality. Ensure
          the first aid kit and fire <span className='text-[#c62931]'>safety equipment</span> are ready for rapid action.
        </p>

        <p className='text-4xl scrn-1000:text-5xl font-semibold whitespace-pre-line mt-12'>
          Employees
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line mt-3'>
          Inspect the fire safety measures to ensure compliance with standard regulations or policies. Ensure all the
          fire extinguishers and other emergency equipment are working well or charged and of good quality. Ensure the
          first aid kit and fire <span className='text-[#c62931]'>safety equipment</span> are ready for rapid action.
        </p>

        <p className='text-4xl scrn-1000:text-5xl font-semibold whitespace-pre-line mt-12'>
          Warning Signage
        </p>
        <Image
          src="/blogImages/Blog_8_Img_2.webp"
          alt="Fuel pump system illustration"
          width={1024}
          height={500}
          className='rounded-lg shadow w-full h-auto my-3'
        />
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
          They ensure that all the warning sign boards are located near the fuel dispensers and tanks to warn people about the hazards. Warning signs include no smoking, no mobile phone, a stop engine, and no naked flame.
        </p>

        <p className='text-4xl scrn-1000:text-5xl font-semibold whitespace-pre-line mt-12'>
          Spill kits
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line mt-3'>
          Examine the availability of spill-prevention measures in gas stations. Spill kits must contain <span className='text-[#c62931]'>PPE</span>, oil, fuel cleaning supplies, and sorbents. Spill buckets are also placed to prevent spills.
        </p>

        <p className='text-4xl scrn-1000:text-5xl font-semibold whitespace-pre-line mt-12'>
          Electrical systems
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line mt-3'>
          The electrical system must be integrated into gas stations, power dispensers, flashes of lightning, and other systems. Ensure that the connection of electrical systems is grounding and bonding properly to protect against the hazard of static electricity fires at gas stations.
        </p>

        <p className='text-4xl scrn-1000:text-5xl font-semibold whitespace-pre-line mt-12'>
          Lightning Standard
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line mt-3'>
          Check that the gas station’s lighting system follows the rules and regulations. Proper lighting is necessary for restrooms, hallways, service areas, and parking areas.
        </p>

        <p className='text-4xl scrn-1000:text-5xl font-semibold whitespace-pre-line mt-12'>
          Convenience Store
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line mt-3'>
          A convenience store is also part of a gas station, so its safety is a gas station safety. Ensure the convenience store’s lighting, electric system, etc, are properly safe. The products used in this store are of good quality. The shelves and other systems are working well.
        </p>
        {/* END - GROUP 1 */}

        {/* CONCLUSION */}
        <p className='text-4xl scrn-1000:text-5xl font-semibold text-[#c62931] whitespace-pre-line mt-12'>
          Conclusion
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line mt-3'>
          These are gas station safety measures that effectively reduce fire-associated risks. The checklist ensures that all inspections are according to the regulations and performed with a keen eye. It assures that inspectors are performing their duties well. Only a professional inspector or technician can conduct thorough inspections for safety assurance.
        </p>
        {/* END - CONCLUSION */}

        {/* END - TOP 10 BIGGEST OIL AND GAS EQUIPMENT AND SERVICES */}
      </div>
    </div>
  );
};

export default Main;
