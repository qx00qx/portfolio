import React from "react";
import { FC } from "react";
import { cn } from "../../lib/styles";

interface InputProps {
  className?: string;
  placeholder?: string;
}

const Input: FC<InputProps> = ({ className, placeholder }) => {
  return (
    <input
      className={cn(
        className,
        "bg-transparent border-b border-white placeholder-white"
      )}
      placeholder={placeholder}
      type="text"
    />
  );
};

export default Input;
