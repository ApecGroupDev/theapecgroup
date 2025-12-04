import { TfiLocationPin } from "react-icons/tfi";

const LocationRed = ({ text = "", size = 24 }) => {
  return (
    <div className='flex items-center md:font-medium lg:-ms-1 2xl:ms-0'>
      <TfiLocationPin className='text-[#c62931]' size={size} />
      {text && <span className='ms-1'>{text}</span>}
    </div>
  );
};

export default LocationRed;
