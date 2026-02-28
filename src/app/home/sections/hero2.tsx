import Image from "next/image";

const logos = [
  { src: "/logos/Auth_Dis/Auth_Dis_Dover.webp", alt: "Dover" },
  { src: "/logos/Auth_Dis/Auth_Dis_Wayne3.webp", alt: "Wayne" },
  { src: "/logos/Auth_Dis/Auth_Dis_Verifone.webp", alt: "Verifone" },
  { src: "/logos/Auth_Dis/Auth_Dis_OPW.webp", alt: "OPW" },
  { src: "/logos/Auth_Dis/Auth_Dis_Franklin.webp", alt: "Franklin" },
];

const LogoItem = ({ logo }: { logo: { src: string; alt: string } }) => (
  <div className="flex items-center justify-center transition-transform duration-300 hover:scale-105">
    <Image
      src={logo.src}
      alt={logo.alt}
      width={200}
      height={80}
      quality={75}
      className="w-36 md:w-40 lg:w-44 xl:w-48 object-contain"
    />
  </div>
);

const Hero2: React.FC = () => {
  return (
    <section className="relative bg-transparent py-16">
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col items-center text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-snug pb-8">
          Authorized Distributor <span className="text-[#c62931]">For:</span>
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-12 lg:gap-16 w-full">
          {logos.map((logo) => (
            <div key={logo.alt} className="w-36 md:w-40 lg:w-44 xl:w-48">
              <LogoItem logo={logo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero2;
