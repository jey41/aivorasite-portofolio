import { FilterableProjects } from '@/components/content/filterable-projects';
import { PortfolioTabs } from '@/components/content/portfolio-tabs';
import { StickyHero } from '@/components/content/sticky-hero';
import {
  projectsData,
  experienceData,
  organizationData,
  aboutData,
  skillsData,
} from '@/data/portfolio';
import { SkillIcon } from '@/components/ui/skill-icon';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* ── Sticky Hero & Story ───────────────────────────────── */}
      <StickyHero />

      {/* ── Portfolio Tabs (Projects, Skills, Experiences, Organizations) ── */}
      <PortfolioTabs />

      {/* ── Technical Specs / Hardware & Tools ──────────────── */}
      <section className="w-full min-h-screen bg-background border-b-4 border-on-surface py-20 px-8 flex items-center justify-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Tech Specs */}
          <div>
            <h2 className="font-headline-md text-headline-md font-bold mb-8 uppercase">Technical Specs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-primary-container border-4 border-on-surface p-6 aspect-video flex flex-col justify-end group btn-hover-effect cursor-default">
                <span className="material-symbols-outlined mb-2 text-on-surface font-bold">Strategy</span>
                <span className="font-headline-sm text-headline-sm font-bold uppercase">Digital</span>
              </div>
              <div className="bg-secondary-fixed border-4 border-on-surface p-6 aspect-video flex flex-col justify-end group btn-hover-effect cursor-default">
                <span className="material-symbols-outlined mb-2 text-on-surface font-bold">Process</span>
                <span className="font-headline-sm text-headline-sm font-bold uppercase">Operations</span>
              </div>
              <div className="bg-tertiary-fixed border-4 border-on-surface p-6 aspect-video flex flex-col justify-end group btn-hover-effect cursor-default">
                <span className="material-symbols-outlined mb-2 text-on-surface font-bold">Data</span>
                <span className="font-headline-sm text-headline-sm font-bold uppercase">Analytics</span>
              </div>
              <div className="bg-error-container border-4 border-on-surface p-6 aspect-video flex flex-col justify-end group btn-hover-effect cursor-default">
                <span className="material-symbols-outlined mb-2 text-on-surface font-bold">Manage</span>
                <span className="font-headline-sm text-headline-sm font-bold uppercase">Product</span>
              </div>
            </div>
          </div>
          
          {/* Hardware & Tools */}
          <div>
            <h2 className="font-headline-md text-headline-md font-bold mb-8 uppercase">Core Skills</h2>
            <ul className="flex flex-col gap-0 font-label-bold text-label-bold uppercase text-on-surface">
              {aboutData.businessCase.keySkills.map((skill, index) => (
                <li key={index} className="flex items-center gap-4 py-4 border-t-4 border-on-surface last:border-b-4">
                  <div className="w-3 h-3 bg-on-surface"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────── */}
      <section className="w-full min-h-screen bg-surface-container-low border-b-4 border-on-surface py-20 px-8 flex flex-col justify-center items-center text-center">
        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg font-black text-on-surface uppercase tracking-tighter max-w-4xl mx-auto mb-10">
          READY TO ASSEMBLE SOMETHING NEW?
        </h2>
        <Link href="mailto:hisyam@example.com" className="btn-brutalist px-8 py-4 bg-secondary text-on-secondary border-4 border-on-surface font-label-bold text-[18px] rounded-full hover:bg-secondary-container hover:text-on-surface transition-colors">
          START A PROJECT
        </Link>
      </section>
    </>
  );
}
