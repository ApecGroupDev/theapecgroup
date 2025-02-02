const ThirdSection: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-white p-8 mt-24">
      <div className="w-4/5 flex flex-col gap-6">
        {/* Top Section: APEC + OUT and WORK */}
        <div className="flex gap-8">
          {/* Left Side (APEC + OUT) */}
          <div className="w-2/5 flex flex-col flex-1">
            {/* Ensuring height matches WORK */}
            <div className="flex-1 flex flex-col">
              {/* First Row (APEC will always) */}
              <div className="flex-1 bg-blue-400 rounded-lg flex items-center justify-end whitespace-nowrap p-4">
                <span className="text-5xl font-semibold">
                  APEC <span className="text-2xl font-extralight">will always</span>
                </span>
              </div>
              {/* Second Row (OUT) */}
              <div className="flex-1 bg-blue-700 rounded-lg flex items-center justify-end p-4">
                <span className="text-10xl font-semibold">OUT</span>
              </div>
            </div>
          </div>

          {/* Right Side (WORK) */}
          <div className="w-3/5 flex-1 bg-green-500 rounded-lg flex items-center justify-center p-6">
            <span className="text-12xl font-black scale-y-150">WORK</span>
          </div>
        </div>

        {/* Bottom Row (the competition) */}
        <div className="w-full bg-gray-800 rounded-lg flex items-center justify-end p-6">
          <span className="text-2xl">the competition</span>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
