import { TfiLocationPin } from "react-icons/tfi";

const LocationRed = ({ text = "", size = 24 }) => {
  return (
    <div className="flex items-center scrn-800:font-medium scrn-1000:-ms-1 scrn-1500:ms-0">
      <TfiLocationPin className="text-red-600" size={size} />
      {text && <span className="ml-1 scrn-600:ml-0">{text}</span>}
    </div>
  );
};

export default LocationRed;
