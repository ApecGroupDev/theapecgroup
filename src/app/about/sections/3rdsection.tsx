const ThirdSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white">
      <div className="w-auto flex flex-col">
        {/* Top Section: APEC + OUT and WORK */}
        <div className="flex">
          {/* Left Side (APEC + OUT) */}
          <div className="w-1/5 flex flex-col flex-1">
            {/* Ensuring height matches WORK */}
            <div className="2xl:mt-24">
              {/* APEC + will always (Same Line, Bottom Alignment) */}
              <div className="flex items-center justify-end">
                <span className="2xl:text-8xl font-semibold">APEC</span>
                <span className="2xl:text-5xl font-extralight tracking-widest">will always</span>
              </div>

              {/* OUT (Aligned at the Top) */}
              <div className="flex justify-end items-start">
                <span className="2xl:text-12xl font-semibold italic 2xl:-mt-16 2xl:me-6">OUT</span>
              </div>
            </div>
          </div>

          {/* Right Side (WORK + the competition) */}
          <div className="w-auto flex flex-col items-center">
            {/* WORK */}
            <div className="w-full flex items-center justify-center">
              <span className="2xl:text-14xl 2xl:scale-y-110 font-bold text-black 2xl:mt-6">WORK</span>
            </div>

            {/* the competition (Directly Below WORK) */}
            <div className="w-full flex items-center justify-end 2xl:-mt-24 2xl:ms-32">
              <span className="text-5xl tracking-widest">the competition</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
