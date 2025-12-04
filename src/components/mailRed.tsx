import { TfiEmail } from "react-icons/tfi";

const MailRed = ({ text = "", size = 24 }) => {
  return (
    <div className='flex items-center md:font-medium'>
      <TfiEmail className='text-[#c62931]' size={size} />
      {text && <span className='ms-1'>{text}</span>}
    </div>
  );
};

export default MailRed;
