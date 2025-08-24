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
      <Image
        src="/blogImages/blogThumbnails/blog1.webp"
        alt="Blog Image"
        width={1024}
        height={484}
        className='w-full object-center rounded-lg mb-6 scrn-1900:h-172 mt-4'
      />

      {/* Title + Subtitle inline */}
      <div className='text-3xl scrn-1000:text-5xl scrn-1900:text-7xl font-bold mb-4'>
        <span className='text-[#c62931]'>The Future of Gas Stations: </span>
        <span className='text-black font-semibold'>Innovations Shaping the Petroleum Industry</span>
      </div>

      <hr className='border-[#c62931] border-2 w-20 my-2' />

      <div className='scrn-1000:ps-12 pt-12'>
        {/* INTRO */}
        <div className='space-y-3'>
          <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
            If you are looking for the best gas station financing companies to run your own gas station in Atlanta.
            Then this is the right place for you. In this article, we listed the top gas station financing companies
            with their essential features, qualities and services they provide all across in Atlanta.
          </p>

          <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
            Gas station is the best growing business all cross in Atlanta that provide fuel, gasoline and petrol to the
            vehicles. It is a suitable place for a driver to stop their vehicles and fill up their fuel tanks. Gas station
            also offer a wide range of product services such as car washing, repairing, rental and also provide convenient
            stores for food items. A gas station is a profitable business if it is constructed on the right piece of land.
            According to the report, the market of gas stations will increase in all these years in Atlanta. Due to the
            current growth of gas, it is an opportunity for financing companies to invest in making gas stations.
          </p>

          <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line'>
            If you want to construct a gas station in Atlanta just contact our company that financially helps you in this project.
            Our professional experts make realistic plans and use the best patterns that are competitive in the market.
            They also used high quality equipment such as fuel dispensers, canopies, petroleum lines, pumps, security systems
            and automatic tank gauges. Our experts keep an eye on everything to make your project successful. In that way your
            business is cost effective and will grow rapidly.
          </p>
        </div>
        {/* END - INTRO */}

        {/* LIST OF BEST GAS STATION FINANCING COMPANIES */}
        <p className='text-4xl scrn-1000:text-5xl font-semibold text-[#c62931] whitespace-pre-line mt-12'>
          Here Is The List Of Best Gas Station Financing Companies In Atlanta
        </p>

        {/* APEC */}
        <p className='text-4xl scrn-1000:text-5xl font-semibold whitespace-pre-line mt-6'>
          Atlanta Petroleum Equipment Company(APEC)
        </p>
        <Image
          src="/blogImages/Blog_5_Img_1.webp"
          alt="Fuel pump system illustration"
          width={1024}
          height={500}
          className='rounded-lg shadow w-full h-auto my-3'
        />
        <p className='text-[#c62931] scrn-1000:text-lg whitespace-pre-line mt-4'>
          BEST FOR ALL BUSINESS
        </p>
        <p className='text-3xl font-semibold scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Services
        </p>
        <ol className='list-decimal list-inside space-y-2 scrn-1000:ps-12 mt-3'>
          <li className='text-lg scrn-1000:text-xl text-[#c62931]'><a href="/services/imaging-and-canopies">APEC Imaging and Canopies</a></li>
          <li className='text-lg scrn-1000:text-xl text-[#c62931]'><a href="/services/compliance">APEC Compliance</a></li>
          <li className='text-lg scrn-1000:text-xl text-[#c62931]'><a href="/services/renovation">APEC Renovation</a></li>
          <li className='text-lg scrn-1000:text-xl text-[#c62931]'><a href="/services/construction">APEC Construction</a></li>
          <li className='text-lg scrn-1000:text-xl text-[#c62931]'><a href="/services/link">APEC Link</a></li>
          <li className='text-lg scrn-1000:text-xl text-[#c62931]'><a href="/services/financing">APEC Financing</a></li>
        </ol>
        <p className='text-3xl font-semibold scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Pros
        </p>
        <ul className='list-disc list-inside space-y-2 scrn-1000:ps-12 mt-3'>
          <li className='text-lg scrn-1000:text-xl'>Fast and reliable services</li>
          <li className='text-lg scrn-1000:text-xl'>Positive customer review</li>
          <li className='text-lg scrn-1000:text-xl'>Provide cost–effective services</li>
          <li className='text-lg scrn-1000:text-xl'>Provide friendly team</li>
          <li className='text-lg scrn-1000:text-xl'>Use high quality construction material</li>
          <li className='text-lg scrn-1000:text-xl'>Save your time and money</li>
        </ul>
        <p className='text-3xl font-semibold scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Cons
        </p>
        <ul className='list-disc list-inside space-y-2 scrn-1000:ps-12 mt-3'>
          <li className='text-lg scrn-1000:text-xl'>Fixed Rate</li>
        </ul>
        <table className='border-collapse border border-gray-400 w-full mt-6 text-2xs scrn-350:text-xs scrn-400:text-sm scrn-450:text-base'>
          <tbody>
            <tr>
              <td className='border p-2 border-gray-300'>Website Link</td>
              <td className='border p-2 border-gray-300'><a className='text-[#c62931]' href="https://theapecgroup.com">https://theapecgroup.com</a></td>
            </tr>
            <tr>
              <td className='border p-2 border-gray-300'>Email Address</td>
              <td className='border p-2 border-gray-300'>Service@TheAPECgroup.com, Sales@TheAPECgroup.com</td>
            </tr>
            <tr>
              <td className='border p-2 border-gray-300'>Phone Number</td>
              <td className='border p-2 border-gray-300'>855-444-2732</td>
            </tr>
            <tr>
              <td className='border p-2 border-gray-300'>Address: Main Office</td>
              <td className='border p-2 border-gray-300'>4732-E North Royal Atlanta Drive, Tucker, Georgia 30084</td>
            </tr>
            <tr>
              <td className='border p-2 border-gray-300'>Address: Branch Office</td>
              <td className='border p-2 border-gray-300'>505 Garden Oaks Boulevard, Houston, Texas 77018</td>
            </tr>
          </tbody>
        </table>
        <p className='text-3xl font-semibold scrn-1000:text-4xl whitespace-pre-line mt-6'>
          APEC provide Gas station financial support
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line mt-3'>
          APEC is the best gas station financing company in Atlanta. They provide you financial support to construct your gas station.
          They provide a highly qualified professional team and consultant to complete your projects.
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line mt-3'>
          For many years, they provide gas station services and financial support services with honesty, trustworthy and integrity to
          small or large size businesses. Professional experts firstly make a map and construction plan for your dream project.
        </p>
        <p className='text-3xl font-semibold scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Use Quality Materials
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line mt-3'>
          Use high quality equipment such as pumps, underground tanks, petroleum lines, fuel dispensers and canopies. They also use high
          quality materials during gas station construction. They provide best services by guiding their clients and using best techniques
          in construction. Company has a 5-star rating with positive reviews.
        </p>

        {/* BP GAS STATION */}
        <p className='text-4xl scrn-1000:text-5xl font-semibold whitespace-pre-line mt-24'>
          BP Gas Station
        </p>
        <Image
          src="/blogImages/Blog_5_Img_2.webp"
          alt="Fuel pump system illustration"
          width={1024}
          height={500}
          className='rounded-lg shadow w-full h-auto my-3'
        />
        <p className='text-[#c62931] scrn-1000:text-lg whitespace-pre-line mt-4'>
          Suitable For Small Business
        </p>
        <p className='text-3xl font-semibold scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Services
        </p>
        <ol className='list-decimal list-inside space-y-2 scrn-1000:ps-12 mt-3'>
          <li className='text-lg scrn-1000:text-xl'>Restaurants services include deliver all types of food and also make reservation</li>
          <li className='text-lg scrn-1000:text-xl'>Home Services include home cleaners, plumbers, contractors and HVAC</li>
          <li className='text-lg scrn-1000:text-xl'>Auto services include repair, dealers, towing and washing</li>
        </ol>
        <p className='text-3xl font-semibold scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Pros
        </p>
        <ul className='list-disc list-inside space-y-2 scrn-1000:ps-12 mt-3'>
          <li className='text-lg scrn-1000:text-xl'>Provide Experts for construction</li>
          <li className='text-lg scrn-1000:text-xl'>Help you in making decision</li>
          <li className='text-lg scrn-1000:text-xl'>Deliver services to the clients in some languages</li>
          <li className='text-lg scrn-1000:text-xl'>Few years of experiences</li>
          <li className='text-lg scrn-1000:text-xl'>Customer satisfication</li>
        </ul>
        <p className='text-3xl font-semibold scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Cons
        </p>
        <ul className='list-disc list-inside space-y-2 scrn-1000:ps-12 mt-3'>
          <li className='text-lg scrn-1000:text-xl'>Fixed Rate</li>
        </ul>
        <table className='border-collapse border border-gray-400 w-full mt-6 text-2xs scrn-350:text-xs scrn-400:text-sm scrn-450:text-base'>
          <tbody>
            <tr>
              <td className='border p-2 border-gray-300'>Website Link</td>
              <td className='border p-2 border-gray-300'><a className='text-[#c62931]' href="https://www.bp.com">https://www.bp.com</a></td>
            </tr>
            <tr>
              <td className='border p-2 border-gray-300'>Phone Number</td>
              <td className='border p-2 border-gray-300'>(404) 875-3903</td>
            </tr>
            <tr>
              <td className='border p-2 border-gray-300'>Address</td>
              <td className='border p-2 border-gray-300'>1856 Piedmont Rd NE Atlanta, GA 30324</td>
            </tr>
          </tbody>
        </table>
        <p className='text-3xl font-semibold scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Professional expertise of BP gas station
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line mt-3'>
          If you are looking for financial support for your business BP gas station is best for this purpose. They are known in
          this field due to their accuracy and precise decision. They also provide a wide range of services other than gas
          station finance. The services include food delivery, towing, auto washing, repairing, rental, home cleaners, HVAC,
          contractors and also dealers.
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line mt-3'>
          Their professional experts are highly skillful in these services and deliver effective results. They understand
          the real struggle of small business so that they provide them with financial expertise. They make a plan of
          construction using advanced techniques and equipment that are essential for your business. We give you proper
          advice on how you can run your business successfully. They give a proper guide about process and managing your
          business system. Their services are affordable and save your time and money. Company is 4 star rating with
          positive reviews.
        </p>

        {/* QUIK TRIP */}
        <p className='text-4xl scrn-1000:text-5xl font-semibold whitespace-pre-line mt-24'>
          Quik Trip
        </p>
        <Image
          src="/blogImages/Blog_5_Img_3.webp"
          alt="Fuel pump system illustration"
          width={1024}
          height={500}
          className='rounded-lg shadow w-full h-auto my-3'
        />
        <p className='text-[#c62931] scrn-1000:text-lg whitespace-pre-line mt-4'>
          Suitable For Small Business
        </p>
        <p className='text-3xl font-semibold scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Services
        </p>
        <ol className='list-decimal list-inside space-y-2 scrn-1000:ps-12 mt-3'>
          <li className='text-lg scrn-1000:text-xl'>Restaurants services include delivery food</li>
          <li className='text-lg scrn-1000:text-xl'>Home services include electricians, Landscaping, plumbers, home cleaners</li>
          <li className='text-lg scrn-1000:text-xl'>Auto services include washing, repairing, oil changing and towing</li>
        </ol>
        <p className='text-3xl font-semibold scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Pros
        </p>
        <ul className='list-disc list-inside space-y-2 scrn-1000:ps-12 mt-3'>
          <li className='text-lg scrn-1000:text-xl'>Provide excellent services</li>
          <li className='text-lg scrn-1000:text-xl'>Making strong strategies</li>
          <li className='text-lg scrn-1000:text-xl'>Use quality material</li>
          <li className='text-lg scrn-1000:text-xl'>Provide consultant</li>
          <li className='text-lg scrn-1000:text-xl'>Best customer services</li>
        </ul>
        <p className='text-3xl font-semibold scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Cons
        </p>
        <ul className='list-disc list-inside space-y-2 scrn-1000:ps-12 mt-3'>
          <li className='text-lg scrn-1000:text-xl'>Fixed Rate</li>
        </ul>
        <table className='border-collapse border border-gray-400 w-full mt-6 text-2xs scrn-350:text-xs scrn-400:text-sm scrn-450:text-base'>
          <tbody>
            <tr>
              <td className='border p-2 border-gray-300'>Website Link</td>
              <td className='border p-2 border-gray-300'><a className='text-[#c62931]' href="https://www.quiktrip.com">https://www.quiktrip.com</a></td>
            </tr>
            <tr>
              <td className='border p-2 border-gray-300'>Phone Number</td>
              <td className='border p-2 border-gray-300'>(404) 240-0089</td>
            </tr>
            <tr>
              <td className='border p-2 border-gray-300'>Address</td>
              <td className='border p-2 border-gray-300'>761 Sidney Marcus Blvd Atlanta, GA 30324</td>
            </tr>
          </tbody>
        </table>
        <p className='text-3xl font-semibold scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Quik Trip provide financial support to your business
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line mt-3'>
          Quik Trip is a company that provides financial support to small businesses. This company provides professional
          expertise that make plans about construction, use technologies and also use high quality equipment such as pumps,
          pipe line, dispenser. Their professional team is well trained and mannered. They provide the best advice that
          helps you in your business. Their services are budget friendly that save your time and money.
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line mt-3'>
          The specialized professionals of quik trip company handle all of your construction and management work. They
          build a strong connection with their clients by delivering their outstanding services. Their main priority is
          to protect customer privacy. Company is at a 3.9 rating star with some positive reviews.
        </p>

        {/* DIVIDEND AMERICA COMMERCIAL LENDING */}
        <p className='text-4xl scrn-1000:text-5xl font-semibold whitespace-pre-line mt-24'>
          Dividend America Commercial Leading
        </p>
        <Image
          src="/blogImages/Blog_5_Img_4.webp"
          alt="Fuel pump system illustration"
          width={1024}
          height={500}
          className='rounded-lg shadow w-full h-auto my-3'
        />
        <p className='text-[#c62931] scrn-1000:text-lg whitespace-pre-line mt-4'>
          Best For All Business
        </p>
        <p className='text-3xl font-semibold scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Services
        </p>
        <ol className='list-decimal list-inside space-y-2 scrn-1000:ps-12 mt-3'>
          <li className='text-lg scrn-1000:text-xl'>Multifamily & Apartments</li>
          <li className='text-lg scrn-1000:text-xl'>Construction Loans</li>
          <li className='text-lg scrn-1000:text-xl'>Bridge Loans</li>
          <li className='text-lg scrn-1000:text-xl'>Investment Property</li>
          <li className='text-lg scrn-1000:text-xl'>Hostel & Hospitality</li>
          <li className='text-lg scrn-1000:text-xl'>Commercial Real Estate</li>
        </ol>
        <p className='text-3xl font-semibold scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Pros
        </p>
        <ul className='list-disc list-inside space-y-2 scrn-1000:ps-12 mt-3'>
          <li className='text-lg scrn-1000:text-xl'>Fast and reliable services</li>
          <li className='text-lg scrn-1000:text-xl'>Positive customer review</li>
          <li className='text-lg scrn-1000:text-xl'>Provide cost–effective services</li>
          <li className='text-lg scrn-1000:text-xl'>Use high quality construction material</li>
          <li className='text-lg scrn-1000:text-xl'>Save your time and money</li>
        </ul>
        <p className='text-3xl font-semibold scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Cons
        </p>
        <ul className='list-disc list-inside space-y-2 scrn-1000:ps-12 mt-3'>
          <li className='text-lg scrn-1000:text-xl'>Fixed Rate</li>
        </ul>
        <table className='border-collapse border border-gray-400 w-full mt-6 text-2xs scrn-350:text-xs scrn-400:text-sm scrn-450:text-base'>
          <tbody>
            <tr>
              <td className='border p-2 border-gray-300'>Website Link</td>
              <td className='border p-2 border-gray-300'><a className='text-[#c62931]' href="https://www.dividendamerica.com">https://www.dividendamerica.com</a></td>
            </tr>
            <tr>
              <td className='border p-2 border-gray-300'>Phone Number</td>
              <td className='border p-2 border-gray-300'>404-549-6756, 480-788-2761</td>
            </tr>
            <tr>
              <td className='border p-2 border-gray-300'>Address</td>
              <td className='border p-2 border-gray-300'>3100 W Ray Rd Suite 201 Chandler, AZ 85226</td>
            </tr>
            <tr>
              <td className='border p-2 border-gray-300'>Email Address</td>
              <td className='border p-2 border-gray-300'>mgross@dividendamerica.com</td>
            </tr>
          </tbody>
        </table>
        <p className='text-3xl font-semibold scrn-1000:text-4xl whitespace-pre-line mt-6'>
          Gas Station Financing Program By Professionals
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line mt-3'>
          Dividend America Commercial Leading company provides financial support for your business. They provide various range
          of services in Atlanta such as construction loan, hotel loan, gas station construction, bridge loan, apartment loan
          and commercial real estate.
        </p>
        <p className='text-gray-800 scrn-1000:text-lg whitespace-pre-line mt-3'>
          They only prioritize their effective services that help your business to grow rapidly. They ensure that your business
          system can run smoothly as soon as possible. The company is 3.7 star-rating with positive reviews.
        </p>
        {/* END - LIST OF BEST GAS STATION FINANCING COMPANIES */}
      </div>
    </div>
  );
};

export default Main;
