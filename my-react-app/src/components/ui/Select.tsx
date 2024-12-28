import React from 'react';

interface SelectProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
  required?: boolean;
  className?: string;
  name: string;
}

export const Select: React.FC<SelectProps> = ({
  value,
  name,
  onValueChange,
  children,
  required = false,
  className = '',
}) => {
  return (
    <select
      name={name}
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
      required={required}
      className={`w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 ${className}`}
    >
      {children}
    </select>
  );
};