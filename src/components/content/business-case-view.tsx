import React from 'react';
import { Badge } from '@/components/ui/badge';
import type { BusinessCaseContent } from '@/data/portfolio';
import { Target, Lightbulb, Rocket, TrendingUp, Wrench } from 'lucide-react';

interface BusinessCaseViewProps {
  data: BusinessCaseContent;
}

export function BusinessCaseView({ data }: BusinessCaseViewProps) {
  return (
    <div className="space-y-12">
      {/* Strategic Overview */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-playdate-yellow rounded-[6px] flex items-center justify-center">
            <Target size={20} className="text-charcoal-text" />
          </div>
          <h2 className="text-heading">Tinjauan Strategis</h2>
        </div>
        <p className="text-body text-default-gray leading-relaxed">
          {data.strategicOverview}
        </p>
      </div>

      {/* Context & Challenge */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-paper-white p-6 rounded-[6px]">
          <div className="flex items-center gap-3 mb-3">
            <Lightbulb size={18} className="text-crank-violet" />
            <h3 className="text-subheading">Konteks Bisnis</h3>
          </div>
          <p className="text-[17px] text-default-gray leading-relaxed">
            {data.businessContext}
          </p>
        </div>
        <div className="bg-paper-white p-6 rounded-[6px]">
          <div className="flex items-center gap-3 mb-3">
            <Rocket size={18} className="text-crank-violet" />
            <h3 className="text-subheading">Tantangan Utama</h3>
          </div>
          <p className="text-[17px] text-default-gray leading-relaxed">
            {data.coreChallenge}
          </p>
        </div>
      </div>

      {/* Strategic Approach */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-crank-violet rounded-[6px] flex items-center justify-center">
            <Wrench size={20} className="text-pure-white" />
          </div>
          <h2 className="text-heading">Pendekatan Strategis</h2>
        </div>
        <p className="text-body text-default-gray leading-relaxed">
          {data.strategicApproach}
        </p>
      </div>

      {/* Execution Highlights */}
      <div>
        <h2 className="text-heading mb-6">Sorotan Eksekusi</h2>
        <div className="space-y-4">
          {data.executionHighlights.map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-playdate-yellow rounded-[6px] flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-[14px] font-extrabold text-charcoal-text">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <p className="text-[17px] text-charcoal-text leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="bg-charcoal-text rounded-[6px] p-8">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp size={22} className="text-playdate-yellow" />
          <h2 className="text-heading text-pure-white">Dampak & Hasil</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.impactMetrics.map((metric, i) => (
            <div key={i} className="bg-pure-white/5 border border-pure-white/10 rounded-[6px] p-5">
              <p className="text-[17px] text-pure-white/90 leading-relaxed">{metric}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Skills */}
      <div>
        <h2 className="text-heading mb-4">Keahlian Utama</h2>
        <div className="flex flex-wrap gap-2">
          {data.keySkills.map((skill) => (
            <Badge key={skill} variant="violet">{skill}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
