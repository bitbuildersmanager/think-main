import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

export const BlueButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  className,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "flex justify-center py-[14px] rounded-[12px] font-semibold",
        className,
        disabled ? "bg-gray-bg text-gray-text" : "bg-blue text-white"
      )}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
