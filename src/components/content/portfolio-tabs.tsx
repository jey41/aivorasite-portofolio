'use client';

import React, { useState } from 'react';
import { FilterableProjects } from '@/components/content/filterable-projects';
import { SkillIcon } from '@/components/ui/skill-icon';
import { projectsData, skillsData } from '@/data/portfolio';

type TabType = 'Projects' | 'Skills';
type MarqueeStyle = React.CSSProperties & {
  '--marquee-duration': string;
  '--marquee-gap': string;
};

export function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState<TabType>('Projects');

  const tabs: TabType[] = ['Projects', 'Skills'];

  return (
    <section className="w-full bg-background border-b-4 border-on-surface py-20 px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Tabs Navigation */}
        <div className="flex w-full border-4 border-on-surface mb-16 bg-background overflow-hidden">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-4 px-2 font-label-bold font-black text-[14px] sm:text-[16px] md:text-[20px] uppercase transition-colors duration-300 text-center ${
                index !== tabs.length - 1 ? 'border-r-4 border-on-surface' : ''
              } ${
                activeTab === tab
                  ? 'bg-primary-container text-on-surface'
                  : 'bg-transparent text-on-surface hover:bg-surface-container-high hover:text-on-surface'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="w-full min-h-[500px]">
          
          {/* Projects Content */}
          {activeTab === 'Projects' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <FilterableProjects projects={projectsData} />
            </div>
          )}

          {/* Skills & Tools Content */}
          {activeTab === 'Skills' && (
            <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex flex-col gap-16">
                {skillsData.map((category) => {
                  const movesRight = category.name === 'Framework' || category.name === 'Tools';
                  const marqueeStyle: MarqueeStyle = {
                    '--marquee-duration': `${Math.max(category.skills.length * 4, 18)}s`,
                    '--marquee-gap': '1.5rem',
                  };

                  return (
                  <div key={category.name} className="flex flex-col items-center">
                    <h3 className="font-headline-lg text-[32px] font-bold text-on-surface uppercase mb-8 text-center bg-background border-4 border-on-surface px-8 py-2">
                      {category.name}
                    </h3>
                    <div className="skills-marquee w-full overflow-hidden px-4 py-6 [mask-image:linear-gradient(to_right,transparent,black_14%,black_86%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_14%,black_86%,transparent)] sm:px-6" style={marqueeStyle}>
                      <div
                        className="skills-marquee-track flex w-max min-w-full items-center [gap:var(--marquee-gap)]"
                        style={{ animationDirection: movesRight ? 'reverse' : 'normal' }}
                      >
                        {[false, true].map((isDuplicate) => (
                          <div
                            key={`${category.name}-${isDuplicate ? 'duplicate' : 'original'}`}
                            className="flex min-w-full shrink-0 items-center justify-around [gap:var(--marquee-gap)]"
                            aria-hidden={isDuplicate}
                          >
                            {category.skills.map((skill) => (
                              <div
                                key={`${category.name}-${isDuplicate ? 'duplicate' : 'original'}-${skill}`}
                                className="group flex h-20 w-20 shrink-0 items-center justify-center"
                                title={skill}
                              >
                                <SkillIcon name={skill} className="text-on-surface transition-colors duration-300 group-hover:text-secondary" />
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>
          )}


        </div>
      </div>
    </section>
  );
}
