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
                   w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 xl:w-8 xl:h-8"
        style={{ backgroundColor: bgColor }}
      >
        <FaCheck
          className="text-white text-[8px] sm:text-[10px] lg:text-[14px] xl:text-[16px]"
          style={{ color: textColor }}
        />
      </div>

      {/* Text */}
      {text && (
        <span className="ml-2 lg:text-lg 2xl:text-xl tracking-wider">
          {text}
        </span>
      )}
    </div>
  );
};

export default CheckmarkBadgeNew;
