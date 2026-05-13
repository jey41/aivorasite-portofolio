import React from 'react';

interface PillButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function PillButton({ children, href, className = '', onClick }: PillButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center
    gradient-cta text-pure-white
    font-bold text-[19px]
    rounded-[152.19px]
    px-8 py-4
    border-t border-pure-white/30
    transition-all duration-300 ease-out
    hover:scale-105 hover:brightness-110
    active:scale-95
    cursor-pointer
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}
