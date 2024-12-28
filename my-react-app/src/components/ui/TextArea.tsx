import React from 'react';

interface TextareaProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  className?: string;
  name:string;
}

export const Textarea: React.FC<TextareaProps> = ({ placeholder, value,name, onChange, required = false, className = '' }) => {
  return (
    <textarea
    name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 ${className}`}
    />
  );
};
