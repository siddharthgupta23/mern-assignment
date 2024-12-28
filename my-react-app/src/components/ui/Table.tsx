import React from 'react';

// Table Component
export const Table: React.FC<{ className?: string; children: React.ReactNode }> = ({ children, className }) => (
  <table className={`min-w-full border border-gray-300 ${className}`}>
    {children}
  </table>
);

// TableHeader Component
export const TableHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <thead className="bg-gray-200">
    {children}
  </thead>
);

// TableBody Component
export const TableBody: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <tbody className="bg-white">
    {children}
  </tbody>
);

// TableRow Component
export const TableRow: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <tr className={`border-b border-gray-300 hover:bg-gray-100 ${className}`}>
    {children}
  </tr>
);

// TableCell Component
export const TableCell: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <td className={`border border-gray-300 px-4 py-2 ${className}`}>
    {children}
  </td>
);

// TableHead Component
export const TableHead: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <th className={`border border-gray-300 px-4 py-2 text-left ${className}`}>
    {children}
  </th>
);
