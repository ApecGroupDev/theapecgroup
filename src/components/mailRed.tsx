import { TfiEmail } from "react-icons/tfi";

const MailRed = ({ text = "", size = 24 }) => {
  return (
    <div className="flex items-center scrn-800:font-medium">
      <TfiEmail className="text-red-600" size={size} />
      {text && <span className="ml-2">{text}</span>}
    </div>
    // update push on deployment
  );
};

export default MailRed;
