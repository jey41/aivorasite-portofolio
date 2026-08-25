'use client';

import React, { useState } from 'react';
import { ProjectCard } from '@/components/content/project-card';
import { type ProjectItem } from '@/data/portfolio';
import { motion, AnimatePresence } from 'framer-motion';

interface FilterableProjectsProps {
  projects: ProjectItem[];
}

export function FilterableProjects({ projects }: FilterableProjectsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  if (projects.length === 0) {
    return (
      <div className="text-center py-20 border-4 border-on-surface bg-surface-variant">
        <p className="font-headline-md font-bold text-on-surface">Tidak ada proyek.</p>
      </div>
    );
  }

  const getIndex = (offset: number) => {
    return (currentIndex + offset + projects.length) % projects.length;
  };

  return (
    <div className="w-full relative flex flex-col items-center justify-center py-4 overflow-hidden">
      <div className="relative w-full max-w-7xl flex items-center justify-center h-[650px] md:h-[600px] lg:h-[700px]">
        <AnimatePresence mode="popLayout">
          {projects.map((item, index) => {
            // For 3 items:
            let position = 0;
            if (index === currentIndex) position = 0;
            else if (index === getIndex(-1)) position = -1;
            else if (index === getIndex(1)) position = 1;

            const isCenter = position === 0;
            const xOffset = position * (typeof window !== 'undefined' && window.innerWidth < 768 ? 40 : 35);
            const scale = isCenter ? 1 : 0.8;
            const zIndex = isCenter ? 30 : 20;
            const opacity = isCenter ? 1 : 0.4;
            
            return (
              <motion.div
                key={item.id}
                layout
                initial={false}
                animate={{
                  opacity,
                  x: `${xOffset}%`,
                  scale,
                  zIndex,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute top-0 md:top-4 w-[90%] md:w-[70%] lg:w-[60%] cursor-pointer"
                style={{
                  filter: isCenter ? 'none' : 'brightness(0.5)',
                }}
                onClick={() => {
                  if (position === -1) handlePrev();
                  else if (position === 1) handleNext();
                }}
              >
                <div className={`transition-shadow duration-500 ${isCenter ? 'shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : 'shadow-none'}`}>
                  <ProjectCard
                    id={item.id}
                    title={item.title}
                    shortDesc={item.shortDesc}
                    tags={item.tags}
                    link={item.link}
                    previewImageSrc={item.image}
                  />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      
    </div>
  );
}
