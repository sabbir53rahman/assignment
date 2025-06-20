import React from "react";

interface ButtonPrimaryProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  className?: string;
  borderColor?: string; // e.g. "border-black" or "border-white"
  textColor?: string;   // e.g. "text-black" or "text-white"
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  icon,
  label,
  onClick,
  className = "",
  borderColor = "border-black",
  textColor = "text-black",
}) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center rounded-full pr-4 py-2 gap-3 hover:shadow-md transition border ${borderColor} ${className}`}
    >
      <span className={`flex items-center justify-center p-[12px] rounded-full border ${borderColor}`}>
        {icon}
      </span>
      <span className={`${textColor} font-normal text-[16px]`}>{label}</span>
    </button>
  );
};

export default ButtonPrimary;
