'use client';

import Image from 'next/image';
import {
  motion,
  type MotionValue,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';
import { aboutData } from '@/data/portfolio';

const heroHeadingText = 'THE MECHANIC BEHIND THE MACHINE.';
const heroHeadingClassName = 'font-display-lg text-display-lg-mobile md:text-display-lg font-black uppercase tracking-tighter';
const aboutCopy = (
  <div className="max-w-xl">
    <h2 className="font-headline-lg text-[44px] leading-[1.05] md:text-[56px] font-black mb-8 uppercase">The Story</h2>
    <div className="w-20 h-1.5 bg-pure-white mb-8"></div>
    <p className="font-body-md text-[20px] md:text-[24px] leading-[1.25] font-normal mb-6 opacity-90">
      {aboutData.businessCase.strategicOverview}
    </p>
    <p className="font-body-md text-[20px] md:text-[24px] leading-[1.25] font-normal mb-6 opacity-90">
      {aboutData.businessCase.businessContext}
    </p>
    <p className="font-body-md text-[20px] md:text-[24px] leading-[1.25] font-normal opacity-90">
      {aboutData.businessCase.strategicApproach}
    </p>
  </div>
);

export function StickyHero() {
  const container = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <main ref={container} data-hero-about-region className="relative h-[212vh] bg-background">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </main>
  );
}

const Section1 = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  
  return (
    <motion.section
      style={{ scale, rotate }}
      data-standard-cursor
      className="sticky top-0 h-screen w-full bg-background flex flex-col items-center justify-center text-center px-8"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#1d1c14_1px,transparent_1px),linear-gradient(to_bottom,#1d1c14_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      <h1 className={`${heroHeadingClassName} relative z-10 mx-auto max-w-4xl text-on-surface`}>
        {heroHeadingText}
      </h1>
    </motion.section>
  );
};

const Section2 = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.section
      style={{ scale, rotate }}
      id="about"
      className="relative h-[112vh] min-h-screen w-full origin-center bg-primary-container py-20 px-8 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#1d1c14_1px,transparent_1px),linear-gradient(to_bottom,#1d1c14_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Profile Image Block */}
        <div className="relative w-full max-w-md mx-auto aspect-square md:aspect-video lg:aspect-square bg-on-surface p-2 brutalist-border">
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-secondary brutalist-border z-10"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-secondary brutalist-border z-10"></div>
          <Image 
            src="/images/hero_section.png" 
            alt="Muhammad Hisyam Nugroho" 
            width={800}
            height={1000}
            className="w-full h-full object-cover border-2 border-on-surface filter grayscale hover:grayscale-0 transition-all duration-500" 
          />
        </div>
        
        {/* Text Content */}
        <div className="text-pure-white">
          {aboutCopy}
        </div>
      </div>
    </motion.section>
  );
};
