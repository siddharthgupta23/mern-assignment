import React from 'react';

interface InputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
  name: string;
}

export const Input: React.FC<InputProps> = ({ type = 'text', placeholder, value, onChange,name, required = false, className = '' }) => {
  return (
    <input
    name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 ${className}`}
    />
  );
};
