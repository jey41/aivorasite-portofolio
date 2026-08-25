import { FilterableProjects } from '@/components/content/filterable-projects';
import { PortfolioTabs } from '@/components/content/portfolio-tabs';
import { StickyHero } from '@/components/content/sticky-hero';
import { Pricing } from '@/components/content/pricing';
import { Workflow } from '@/components/content/workflow';
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

      {/* ── Workflow / Alur Kerja ────────────────────────────── */}
      <Workflow />

      {/* ── Pricing Section ──────────────────────────────────── */}
      <Pricing />

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
