import React from 'react';
import { FC } from 'react';
import { cn } from '../../lib/styles';

interface InputProps {
  className?: string;
  placeholder?: string;
  type?: string;
  id?: string
}

const Input: FC<InputProps> = ({ className, placeholder, type, id, ...props }) => {
  return (
    <input
      className={cn(className, 'w-full bg-transparent border-b')}
      placeholder={placeholder}
      type={type}
      id={id}
      {...props}
    />
  );
};

export default Input;
