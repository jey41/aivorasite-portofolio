import { SectionBlock } from '@/components/layout/section-block';
import { Badge } from '@/components/ui/badge';
import { PillButton } from '@/components/ui/pill-button';
import {
  aboutData,
  achievementsData,
  organizationData,
  experienceData,
  projectsData,
} from '@/data/portfolio';
import {
  GraduationCap,
  Award,
  ArrowRight,
  Star,
  Users,
  Briefcase,
  Code,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Muhammad Hisyam Nugroho — Digital Strategist & Operations Specialist at Universitas Mulawarman.',
};

export default function AboutPage() {
  // Collect all unique skills
  const allSkills = new Set<string>();
  [...organizationData, ...experienceData, ...projectsData].forEach((item) => {
    const bc = 'businessCase' in item ? item.businessCase : null;
    bc?.keySkills.forEach((s) => allSkills.add(s));
  });
  aboutData.businessCase.keySkills.forEach((s) => allSkills.add(s));

  const stats = [
    { label: 'Pengalaman Organisasi', value: organizationData.length, icon: Users },
    { label: 'Pengalaman Profesional', value: experienceData.length, icon: Briefcase },
    { label: 'Proyek', value: projectsData.length, icon: Code },
    { label: 'Penghargaan', value: achievementsData.length, icon: Award },
  ];

  return (
    <>
      {/* ── Header ─────────────────────────────────────────── */}
      <SectionBlock bg="charcoal" className="pt-40 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">
          <div>
            <span className="text-playdate-yellow font-bold text-[15px] uppercase tracking-wider">
              Tentang Saya
            </span>
            <h1 className="text-heading-lg text-pure-white mt-2 mb-6">
              {aboutData.name}
            </h1>
            <p className="text-[21px] text-stone-gray leading-relaxed mb-6 max-w-[600px]">
              {aboutData.businessCase.strategicOverview}
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-playdate-yellow">
                <GraduationCap size={20} />
                <span className="font-bold text-[17px]">{aboutData.university}</span>
              </div>
              <span className="text-stone-gray">·</span>
              <span className="text-stone-gray font-bold text-[17px]">{aboutData.major}</span>
              <span className="text-stone-gray">·</span>
              <span className="text-pure-white font-extrabold text-[17px]">
                IPK {aboutData.gpa}
              </span>
            </div>
          </div>

          {/* Avatar placeholder */}
          <div className="w-[200px] h-[200px] rounded-[6px] flex items-center justify-center mx-auto md:mx-0 overflow-hidden shrink-0 shadow-lg">
            <img 
              src="https://placehold.co/400x400/FFDD00/18181B.png?text=Foto+Profil%5Cn(Rasio+1:1)" 
              alt={aboutData.name}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </SectionBlock>

      {/* ── Stats ──────────────────────────────────────────── */}
      <SectionBlock bg="yellow">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-charcoal-text rounded-[6px] p-6 text-center"
            >
              <stat.icon size={24} className="text-playdate-yellow mx-auto mb-3" />
              <p className="text-[40px] font-extrabold text-pure-white leading-none">
                {stat.value}
              </p>
              <p className="text-stone-gray text-[15px] font-bold mt-2 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* ── Approach ───────────────────────────────────────── */}
      <SectionBlock bg="white">
        <div className="max-w-[800px] mx-auto">
          <span className="text-crank-violet font-bold text-[15px] uppercase tracking-wider">
            Pendekatan Saya
          </span>
          <h2 className="text-heading-lg mt-2 mb-8">Bagaimana Saya Memberikan Dampak</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-heading mb-3">Konteks Bisnis</h3>
              <p className="text-body text-default-gray leading-relaxed">
                {aboutData.businessCase.businessContext}
              </p>
            </div>
            <div>
              <h3 className="text-heading mb-3">Tantangan Utama</h3>
              <p className="text-body text-default-gray leading-relaxed">
                {aboutData.businessCase.coreChallenge}
              </p>
            </div>
            <div>
              <h3 className="text-heading mb-3">Pendekatan Strategis</h3>
              <p className="text-body text-default-gray leading-relaxed">
                {aboutData.businessCase.strategicApproach}
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-12">
            <h3 className="text-heading mb-6">Sorotan Utama</h3>
            <div className="space-y-4">
              {aboutData.businessCase.executionHighlights.map((h, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-8 h-8 bg-playdate-yellow rounded-[6px] flex items-center justify-center shrink-0">
                    <Star size={16} className="text-charcoal-text" />
                  </div>
                  <p className="text-[17px] text-charcoal-text leading-relaxed">{h}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionBlock>

      {/* ── Skills ─────────────────────────────────────────── */}
      <SectionBlock bg="charcoal">
        <div className="max-w-[800px] mx-auto text-center">
          <span className="text-playdate-yellow font-bold text-[15px] uppercase tracking-wider">
            Kemampuan
          </span>
          <h2 className="text-heading-lg text-pure-white mt-2 mb-8">
            Keahlian
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {Array.from(allSkills).map((skill) => (
              <Badge key={skill} variant="yellow">{skill}</Badge>
            ))}
          </div>
        </div>
      </SectionBlock>

      {/* ── Achievements ───────────────────────────────────── */}
      <SectionBlock bg="white">
        <span className="text-crank-violet font-bold text-[15px] uppercase tracking-wider">
          Pengakuan
        </span>
        <h2 className="text-heading-lg mt-2 mb-12">Penghargaan & Pencapaian</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievementsData.map((ach, i) => (
            <div
              key={i}
              className="flex gap-4 items-start p-5 bg-paper-white rounded-[6px]"
            >
              <div className="w-10 h-10 bg-playdate-yellow rounded-[6px] flex items-center justify-center shrink-0">
                <Award size={20} className="text-charcoal-text" />
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-charcoal-text">
                  {ach.title}
                </h3>
                <p className="text-default-gray text-[15px] mt-1">{ach.event}</p>
                <Badge variant="gray" className="mt-2">{ach.year}</Badge>
              </div>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* ── CTA ────────────────────────────────────────────── */}
      <SectionBlock bg="yellow" className="text-center">
        <h2 className="text-heading-lg mb-4">Mari terhubung.</h2>
        <p className="text-charcoal-text/70 text-[19px] mb-10 max-w-[500px] mx-auto">
          Saya terbuka untuk kolaborasi, peluang, dan percakapan tentang strategi digital dan operasional.
        </p>
        <PillButton href="mailto:hisyam@example.com">
          Hubungi Saya
          <ArrowRight size={18} className="ml-2" />
        </PillButton>
      </SectionBlock>
    </>
  );
}
