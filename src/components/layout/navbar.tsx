'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Projects', href: '/#projects' },
  { label: 'Workflow', href: '/#workflow' },
  { label: 'Experiences', href: '/#experiences' },
  { label: 'Pricing Plans', href: '/#pricing' },
  { label: 'Contact', href: 'mailto:hisyam@example.com' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hideForHero, setHideForHero] = useState(false);
  const pathname = usePathname();
  const isNavbarHidden = pathname === '/' && hideForHero;

  useEffect(() => {
    if (pathname !== '/') {
      return;
    }

    const updateVisibility = () => {
      const heroRegion = document.querySelector('[data-hero-about-region]');

      if (!heroRegion) {
        setHideForHero(false);
        return;
      }

      const { bottom, top } = heroRegion.getBoundingClientRect();
      setHideForHero(top <= 0 && bottom > 8);
    };

    const animationFrameId = window.requestAnimationFrame(updateVisibility);
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('resize', updateVisibility);
    };
  }, [pathname]);

  return (
    <nav
      aria-hidden={isNavbarHidden}
      className={`fixed left-0 top-0 z-50 flex w-full max-w-full justify-between border-b-4 border-on-surface bg-background px-8 py-6 items-center transition-transform duration-300 ease-out ${
        isNavbarHidden ? '-translate-y-full pointer-events-none' : 'translate-y-0'
      }`}
    >
      <Link
        href="/"
        className="font-display-lg text-display-lg-mobile font-black text-on-surface uppercase tracking-tighter hover:translate-x-0.5 hover:translate-y-0.5 transition-transform"
      >
        MHN<span className="text-secondary">.</span>
      </Link>

      <div className="hidden md:flex gap-8 items-center font-headline-md text-headline-md font-bold">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-on-surface hover:text-secondary hover:translate-x-0.5 hover:translate-y-0.5 transition-transform"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link
        href="mailto:hisyam@example.com"
        className="hidden md:inline-flex btn-brutalist px-6 py-3 bg-secondary-container text-on-secondary border-2 border-on-surface font-label-bold text-label-bold rounded-full hover:bg-secondary"
      >
        Hire Me
      </Link>

      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden text-on-surface hover:text-secondary"
      >
        {mobileOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Menu */}
      {mobileOpen && !isNavbarHidden && (
        <div className="absolute top-full left-0 right-0 bg-background border-b-4 border-on-surface p-6 md:hidden flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-on-surface font-headline-md text-[24px] font-bold hover:text-secondary uppercase"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="mailto:hisyam@example.com"
            onClick={() => setMobileOpen(false)}
            className="btn-brutalist px-6 py-4 bg-secondary-container text-on-secondary border-2 border-on-surface font-label-bold text-label-bold text-center rounded-full"
          >
            Hire Me
          </Link>
        </div>
      )}
    </nav>
  );
}
