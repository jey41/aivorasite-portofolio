'use client';

import React, { useState, useMemo } from 'react';
import { ProjectCard } from '@/components/content/project-card';
import { getDetailItemPreviewPath, type ProjectItem } from '@/data/portfolio';

interface FilterableProjectsProps {
  projects: ProjectItem[];
}

export function FilterableProjects({ projects }: FilterableProjectsProps) {
  const filters = useMemo(() => {
    const uniqueTypes = Array.from(new Set(projects.map(item => item.category)));
    return ['All', ...uniqueTypes];
  }, [projects]);

  const [active, setActive] = useState<string>('All');

  const filtered = active === 'All' 
    ? projects 
    : projects.filter(item => item.category === active);

  return (
    <div className="w-full">
      {/* Filter Bar */}
      <div className="flex flex-wrap gap-2 mb-12">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`
              px-4 py-1.5 rounded-sm font-label-bold text-label-bold uppercase border-2 border-on-surface
              transition-all duration-200 cursor-pointer
              ${active === f
                ? 'bg-on-surface text-background'
                : 'bg-background text-on-surface hover:bg-surface-variant'
              }
            `}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filtered.map((item) => (
          <ProjectCard
            key={item.id}
            id={item.id}
            title={item.title}
            subtitle={item.category}
            shortDesc={item.shortDesc}
            tags={item.tags}
            link={item.link}
            previewImageSrc={getDetailItemPreviewPath(item.id)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 border-4 border-on-surface bg-surface-variant">
          <p className="font-headline-md font-bold text-on-surface">Tidak ada proyek dalam kategori ini.</p>
        </div>
      )}
    </div>
  );
}
