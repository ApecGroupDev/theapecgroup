import { FaCheck } from "react-icons/fa";

interface CheckmarkBadgeProps {
  text?: string;
  bgColor?: string;
  textColor?: string;
}

const CheckmarkBadgeNew: React.FC<CheckmarkBadgeProps> = ({
  text = "",
  bgColor = "#c62931",
  textColor = "white",
}) => {
  return (
    <div className="flex items-center">
      {/* Circle Checkmark */}
      <div
        className="flex justify-center items-center flex-shrink-0 rounded-full
                   w-4 h-4 scrn-600:w-5 scrn-600:h-5 scrn-1000:w-7 scrn-1000:h-7 scrn-1250:w-8 scrn-1250:h-8"
        style={{ backgroundColor: bgColor }}
      >
        <FaCheck
          className="text-white text-[8px] scrn-600:text-[10px] scrn-1000:text-[14px] scrn-1250:text-[16px]"
          style={{ color: textColor }}
        />
      </div>

      {/* Text */}
      {text && (
        <span className="ml-2 text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl tracking-wider">
          {text}
        </span>
      )}
    </div>
  );
};

export default CheckmarkBadgeNew;
