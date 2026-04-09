import { Check } from "lucide-react";

interface CheckmarkBadgeProps {
  text?: string;
  bgColor?: string;
  textColor?: string;
}

const CheckmarkBadge: React.FC<CheckmarkBadgeProps> = ({
  text = "",
  bgColor = "#c62931",
  textColor = "white",
}) => {
  return (
    <div className="flex items-center">
      {/* Circle Checkmark */}
      <div
        className="flex justify-center items-center flex-shrink-0 rounded-full
                   w-7 h-7 xl:w-8 xl:h-8"
        style={{ backgroundColor: bgColor }}
      >
        <Check
          className="w-3.5 h-3.5 xl:w-4 xl:h-4"
          style={{ color: textColor }}
          strokeWidth={3}
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

export default CheckmarkBadge;
