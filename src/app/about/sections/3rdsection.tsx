const ThirdSection: React.FC = () => {
  return (
    <div className="h-auto 2xl:min-h-screen flex flex-col items-center justify-center text-white">
      <div className="w-auto flex flex-col">
        {/* Top Section: APEC + OUT and WORK */}
        <div className="flex gap-16">
          {/* Left Side (APEC + OUT) */}
          <div className="w-1/5 flex flex-col flex-1">
            {/* Ensuring height matches WORK */}
            <div className="2xl:mt-24">
              {/* APEC + will always (Same Line, Bottom Alignment) */}
              <div className="outline-dotted rounded-lg flex items-center justify-end">
                <span className="text-5xl font-semibold">APEC</span>
                <span className="text-2xl font-extralight tracking-widest ml-2">will always</span>
              </div>

              {/* OUT (Aligned at the Top) */}
              <div className="outline-dotted rounded-lg flex justify-end items-start">
                <span className="text-10xl font-semibold italic 2xl:-mt-12 2xl:me-6">OUT</span>
              </div>
            </div>
          </div>

          {/* Right Side (WORK + the competition) */}
          <div className="w-3/5 flex flex-col items-center">
            {/* WORK */}
            <div className="w-full outline-dashed rounded-lg flex items-center justify-center">
              <span className="text-13xl font-bold text-black">WORK</span>
            </div>

            {/* the competition (Directly Below WORK) */}
            <div className="w-full outline-dotted rounded-lg flex items-center justify-end 2xl:-mt-24 2xl:ms-32">
              <span className="text-2xl">the competition</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
