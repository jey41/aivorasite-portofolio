import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  id: string;
  title: string;
  shortDesc: string;
  tags?: string[];
  link?: string;
  previewImageSrc: string;
}

export function ProjectCard({ id, title, shortDesc, tags, link, previewImageSrc }: ProjectCardProps) {
  return (
    <div className="bg-background border-4 border-on-surface p-0 flex flex-col h-full group btn-hover-effect">
      <div className="relative border-b-4 border-on-surface overflow-hidden aspect-video bg-surface-variant">
        {previewImageSrc ? (
          <Image
            src={previewImageSrc}
            alt={`Pratinjau hero untuk ${title}`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center font-label-bold text-on-surface opacity-50 uppercase">
            No Image
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-headline-md text-headline-md font-bold mb-4">{title}</h3>
        <p className="font-body-md text-body-md mb-6 flex-grow opacity-90">
          {shortDesc}
        </p>
        
        {tags && tags.length > 0 && (
          <div className="flex gap-2 flex-wrap mb-6">
            {tags.slice(0, 4).map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        )}
        
        <div className="flex border-t-2 border-on-surface pt-4 justify-between font-label-bold text-label-bold uppercase flex-col sm:flex-row gap-2">
          {link ? (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-secondary text-on-secondary px-6 py-2 border-2 border-on-surface hover:bg-secondary-container transition-colors w-full text-center"
            >
              Preview Website
            </a>
          ) : (
            <span className="bg-surface-variant text-on-surface px-6 py-2 border-2 border-on-surface w-full text-center cursor-not-allowed opacity-50">
              No Link Available
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
