import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'yellow' | 'teal' | 'violet' | 'gray';
  className?: string;
}

// Map old variants to new brutalist ones or use a default
export function Badge({ children, variant = 'secondary', className = '' }: BadgeProps) {
  // Use secondary (violet) outline as default brutalist chip
  return (
    <span
      className={`
        px-3 py-1 
        border-2 border-secondary 
        text-secondary rounded-full 
        font-label-bold text-[12px] uppercase
        ${className}
      `}
    >
      {children}
    </span>
  );
}
