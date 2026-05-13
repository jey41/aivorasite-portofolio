import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <div
      className="relative h-[360px] md:h-[420px]"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <footer className="fixed bottom-0 left-0 h-[360px] w-full border-t-4 border-on-surface bg-on-surface px-8 py-10 md:h-[420px] md:py-12">
        <div className="mx-auto flex h-full max-w-6xl flex-col justify-between gap-10">
          <div className="flex flex-col gap-4">
            <span className="font-label-bold text-label-bold uppercase tracking-wide text-primary">
              Portfolio Footer
            </span>
            <h2 className="max-w-4xl font-display-lg text-[44px] font-black uppercase leading-[0.95] tracking-tighter text-surface md:text-[76px]">
              Let&apos;s build the next system.
            </h2>
          </div>

          <div className="flex flex-col justify-between gap-6 border-t-2 border-surface-variant/30 pt-6 md:flex-row md:items-end">
            <div className="font-headline-md text-label-bold font-bold uppercase tracking-wide text-primary md:text-headline-sm">
              &copy; {new Date().getFullYear()} MUHAMMAD HISYAM NUGROHO. BUILT WITH MECHANICAL WHIMSY.
            </div>

            <div className="flex flex-wrap gap-6 font-label-bold text-label-bold uppercase">
              <Link href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="text-surface-variant hover:text-primary transition-colors">
                LinkedIn
              </Link>
              <Link href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-surface-variant hover:text-primary transition-colors">
                GitHub
              </Link>
              <Link href="mailto:hisyam@example.com" className="text-surface-variant hover:text-primary transition-colors">
                Contact
              </Link>
              <Link href="/console" className="text-surface-variant hover:text-primary transition-colors">
                Console Log
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
