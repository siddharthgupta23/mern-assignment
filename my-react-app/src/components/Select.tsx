// Select.tsx
import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {

}

export const Select: React.FC<SelectProps> = ({ children,name, onChange, ...props }) => {
  return (
    <select {...props} className="border rounded p-2 w-full">
      {children}
    </select>
  );
};