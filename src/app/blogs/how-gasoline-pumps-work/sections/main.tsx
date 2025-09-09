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
        src="/blogImages/blogThumbnails/blog2.webp"
        alt="Blog Image"
        width={1024}
        height={500}
        className='w-full object-center rounded-lg mb-6 scrn-1900:h-172 mt-4'
      />

      {/* Title + Subtitle inline */}
      <div className='text-3xl scrn-1000:text-5xl scrn-1900:text-7xl font-bold mb-4'>
        <h1>
          <span className='text-[#c62931]'>Gasoline Pumps: </span>
          <span className='text-black font-semibold'>How Do They Work?</span>
        </h1>
      </div>

      <hr className='border-[#c62931] border-2 w-20 my-2' />

      <div className='scrn-1000:ps-12 pt-12'>
        {/* INTRO PARAGRAPHS - HOW DO GAS PUMP WORK */}
        <div>
          <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
            A gasoline pump is a filling station machine used to pump gasoline (petrol), diesel, or other types of liquid Fuel into vehicles.
            Gasoline pumps are also known as bowsers, petrol bowsers, petrol pumps, and fuel dispensers.
          </p>

          <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line mt-3'>
            Gasoline is made when crude oil is broken into various petroleum products by fractional distillation. It is essential to run cars&apos;
            internal combustion engines. The chemical composition of gasoline varies depending on its grade or octane rating, but generally, it
            is a mixture of combustible hydrocarbons. Gasoline is one of the most widely used petroleum products.
          </p>

          <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line mt-3'>
            The combustion of gasoline is a significant source of human-made carbon dioxide (CO2). The combustion of any fossil fuel and the formation
            of this carbon dioxide negatively impact the earth. It can cause climate change and promote global warming.
          </p>
        </div>
        {/* END - INTRO PARAGRAPHS - HOW DO GAS PUMP WORK */}

        {/* PARTS OF GASOLINE PUMP */}
        <div className='space-y-3'>
          <p className='text-4xl scrn-1000:text-5xl font-semibold text-[#c62931] whitespace-pre-line mt-10'>
            Parts of a gasoline pump
          </p>

          <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
            A modern gasoline pump is divided into two main parts:
          </p>

          <ul className='list-disc list-inside'>
            <li className='font-semibold text-lg scrn-1000:text-xl'>Electronic head:</li>
          </ul>

          <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
            It contains an embedded computer to control the pump&apos;s action, drive the pump&apos;s displays, and communicate with an indoor sales system.
          </p>

          <ul className='list-disc list-inside'>
            <li className='font-semibold text-lg scrn-1000:text-xl'>Mechanical section:</li>
          </ul>

          <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
            It has an electric motor, pumping unit, meters, pulses, and valves to pump and physically control the fuel flow.
          </p>
        </div>
        {/* END - PARTS OF GASOLINE PUMP */}

        {/* TYPES OF GASOLINE PUMP */}
        <div className='space-y-3'>
          <p className='text-4xl scrn-1000:text-5xl font-semibold text-[#c62931] whitespace-pre-line mt-10'>
            Types of a Gasoline Pumps
          </p>

          <p className='text-gray-800 text-xl scrn-1000:text-2xl whitespace-pre-line'>
            There are some primary types of gasoline pumps, each of which is described below:
          </p>

          <ol className='list-decimal list-inside space-y-2'>
            <li className='text-lg scrn-1000:text-xl'>Mechanical Fuel Pump.</li>
            <li className='text-lg scrn-1000:text-xl'>Electrical Fuel Pump.</li>
            <li className='text-lg scrn-1000:text-xl'>Fuel Pump with Diaphragm.</li>
            <li className='text-lg scrn-1000:text-xl'>Fuel Pump with a Plunger.</li>
            <li className='text-lg scrn-1000:text-xl'>Centrifugal Pump.</li>
          </ol>
        </div>
        {/* END - TYPES OF GASOLINE PUMP */}

        {/* TYPE OF PUMP USED FOR GASOLINE */}
        <div className='space-y-3'>
          <p className='text-4xl scrn-1000:text-5xl font-semibold text-[#c62931] whitespace-pre-line mt-10'>
            Type of pump used for gasoline
          </p>

          <p className='font-semibold text-gray-800 text-xl scrn-1000:text-2xl whitespace-pre-line'>
            Centrifugal Pump
          </p>

          <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
            Centrifugal pumps are the most common type in the oil and gasoline industry. The centrifugal pumps use
            centrifugal force through the rotation of the pump impeller. The pump intake and force it through the
            discharge section via centrifugal force. Discharge flow Control Valves control the flow through the pump.
          </p>

          <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line mt-3'>
            Centrifugal pumps are primarily used for transferring low-viscosity fluids that require high flow rates.
            They are typically part of a larger pump network comprising other centrifugal pumps. Crude oil shipping is used in secondary oil and gas recovery.
          </p>
        </div>
        {/* END - TYPE OF PUMP USED FOR GASOLINE */}

        {/* WORKING PRINCIPLE OF GASOLINE PUMPS */}
        <div className='space-y-3'>
          <p className='text-4xl scrn-1000:text-5xl font-semibold text-[#c62931] whitespace-pre-line mt-10'>
            Working Principle of Gasoline Pumps
          </p>

          <Image
            src="/blogImages/Blog_2_Img_2.webp"
            alt="Fuel pump system illustration"
            width={1024}
            height={500}
            className='rounded-lg shadow w-full h-auto'
          />

          <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
            A fuel pump is a fluid-handling device that moves gasoline from the fuel tank to the engine. It&apos;s often found in internal combustion engines.
            The fuel pump transports gasoline from the tank to the fuel bowl, where the carburetor mixes the Fuel with air and transports it to the
            engine’s combustion chamber.
          </p>

          <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line mt-3'>
            Large gas tanks underneath all the service pumps at a fuel station. Fuel stations have two or three large tanks, which can hold several
            thousand gallons of gasoline. But for the gas to come up from these tanks into the pump, it must defy gravity.
          </p>

          <p className='text-2xl scrn-1000:text-3xl whitespace-pre-line mt-3 text-[#c62931]'>
            Most gasoline stations use one of two kinds of pumps to get the gas from the storage tanks into the dispenser:
          </p>

          <p className='text-lg scrn-1000:text-xl font-semibold whitespace-pre-line mt-6'>
            1.  Submersible Pump
          </p>
          <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
            A submersible pump is a deluge below the surface of the liquid. It uses a screw-like device called an impeller to move the Fuel upward into
            the pumps. Skewed blades on the rotating impeller push the liquid away.
          </p>

          <p className='text-lg scrn-1000:text-xl font-semibold whitespace-pre-line mt-6'>
            2.  Suction Pump
          </p>
          <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
            The system contains an electrical motor, pump, and valves to manage the Fuel. A suction pump moves the gasoline using the principle of
            unequal pressure.  A pipe is inserted into the liquid. The motor above the fluid level removes enough air from the pipe to decrease the
            air pressure above the gasoline. When the air pressure inside the pipe is low enough, the gas climbs into the dispenser.
          </p>

          <p className='text-lg scrn-1000:text-xl font-semibold whitespace-pre-line mt-6'>
            3.  Electronic Monitor
          </p>
          <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
            Electronic monitor, the sensor reading to show fuel volume and pressure details. Fuel monitoring devices provide accurate measurements
            and improve efficiency.
          </p>
        </div>
        {/* END - WORKING PRINCIPLE OF GASOLINE PUMPS */}

        {/* KEEP YOUR GASOLINE PUMP HEALTHY */}
        <div className='space-y-3'>
          <p className='text-4xl scrn-1000:text-5xl font-semibold text-[#c62931] whitespace-pre-line mt-10'>
            Keep Your Gasoline Pump Healthy
          </p>

          <Image
            src="/blogImages/Blog_2_Img_3.webp"
            alt="Fuel pump system illustration"
            width={1024}
            height={500}
            className='rounded-lg shadow w-full h-auto'
          />

          <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
            These modest actions should help keep it in good condition. Gasoline doubles as a coolant when used with in-tank pumps.
            If you leave a tank low frequently, your pump will overheat. Fill your tank.
          </p>
        </div>
        {/* END - KEEP YOUR GASOLINE PUMP HEALTHY */}

        {/* CONCLUSION */}
        <div>
          <p className='text-4xl scrn-1000:text-5xl font-semibold text-[#c62931] whitespace-pre-line mt-10'>
            Conclusion
          </p>
          <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line mt-6'>
            Gasoline pumps have been briefly described here, but a more detailed discussion is needed to fully understand the workings of gasoline
            pumps. You are encouraged to visit the <span className='font-semibold text-[#c62931] italic'>APEC</span> website&apos;s gasoline pump based
            on your demand and application.
          </p>
        </div>
        {/*END - CONCLUSION */}
      </div>
    </div>
  );
};

export default Main;
