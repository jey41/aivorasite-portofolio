import React from 'react';

interface SectionBlockProps {
  children: React.ReactNode;
  bg?: 'white' | 'charcoal' | 'yellow' | 'ink';
  className?: string;
  id?: string;
  fullBleed?: boolean;
}

const bgClasses = {
  white: 'bg-pure-white text-charcoal-text',
  charcoal: 'bg-charcoal-text text-pure-white',
  yellow: 'bg-playdate-yellow text-charcoal-text',
  ink: 'bg-ink-wash text-pure-white',
};

export function SectionBlock({
  children,
  bg = 'white',
  className = '',
  id,
  fullBleed = false,
}: SectionBlockProps) {
  return (
    <section
      id={id}
      className={`
        py-[68px]
        ${bgClasses[bg]}
        ${className}
      `}
    >
      <div className={fullBleed ? '' : 'max-w-[1200px] mx-auto px-6 md:px-8'}>
        {children}
      </div>
    </section>
  );
}
