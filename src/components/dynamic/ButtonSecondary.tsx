import React from "react";

interface ButtonSecondaryProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  className?: string;
  borderColor?: string; // e.g. "border-black" or "border-white"
  textColor?: string; // e.g. "text-black"
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  icon,
  label,
  onClick,
  className = "",
  borderColor = "border-black",
  textColor = "text-black",
}) => {
  return (
    <div
      className={`flex items-center w-fit cursor-pointer ${className}`}
      onClick={onClick}
    >
      {/* Icon Circle */}
      <div
        className={`flex items-center justify-center w-[44px] h-[44px] rounded-full border ${textColor} ${borderColor}`}
      >
        {icon}
      </div>

      {/* Label Button */}
      <div
        className={`ml-[-1px] h-[44px] pl-5 pr-[20px] flex items-center rounded-full border ${borderColor}`}
      >
        <span className={`${textColor} font-normal text-base`}>{label}</span>
      </div>
    </div>
  );
};

export default ButtonSecondary;
