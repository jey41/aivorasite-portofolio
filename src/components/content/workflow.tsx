'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Diskusi & Pemahaman Visi",
    desc: "Memahami tujuan dan harapan Anda. Kami mulai dengan mengumpulkan informasi tentang kebutuhan, tujuan, dan konteks proyek Anda.",
    bgClass: "bg-primary-container",
    textClass: "text-on-primary-container"
  },
  {
    number: "02",
    title: "Timeline & Perjanjian",
    desc: "Menyelaraskan jadwal, ruang lingkup, dan biaya. Kami menentukan timeline, hasil yang diharapkan, dan harga untuk memastikan kejelasan sebelum melanjutkan.",
    bgClass: "bg-playdate-yellow",
    textClass: "text-on-surface"
  },
  {
    number: "03",
    title: "Iterasi",
    desc: "Menjelajahi ide-ide dan arahan desain awal dikembangkan dan disempurnakan melalui kolaborasi.",
    bgClass: "bg-secondary",
    textClass: "text-on-secondary"
  },
  {
    number: "04",
    title: "Pengerjaan",
    desc: "Melanjutkan dengan eksekusi terstruktur. Kemajuan desain dan pengembangan berdasarkan rencana yang disepakati. Kami juga akan mengirimkan laporan kemajuan kami setiap minggu.",
    bgClass: "bg-seafoam-teal",
    textClass: "text-on-surface"
  },
  {
    number: "05",
    title: "Validasi & Revisi",
    desc: "Meninjau, menyempurnakan, dan meningkatkan. Kami memvalidasi hasilnya bersama-sama dan menerapkan revisi untuk memastikan semuanya memenuhi harapan.",
    bgClass: "bg-crank-violet",
    textClass: "text-pure-white"
  },
  {
    number: "06",
    title: "Penyelesaian",
    desc: "Penyerahan sistem final dengan performa terbaik. Infrastruktur Anda kini siap beroperasi dan mendukung ekspansi bisnis.",
    bgClass: "bg-tertiary-container",
    textClass: "text-on-tertiary-container"
  }
];

function WorkflowCard({ step, index, scrollYProgress }: { step: any, index: number, scrollYProgress: any }) {
  const segments = steps.length - 1;
  const start = Math.max(0, (index - 1) / segments);
  const end = Math.max(0.001, index / segments);

  const y = useTransform(
    scrollYProgress,
    [start, end],
    ["100vh", `${index * 1.5}rem`]
  );

  return (
    <motion.div
      className={`absolute top-0 left-0 w-full border-4 border-on-surface p-8 md:p-12 shadow-[8px_8px_0px_rgba(0,0,0,1)] ${step.bgClass} ${step.textClass}`}
      style={{ 
        y: index === 0 ? "0rem" : y, 
        zIndex: index 
      }}
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center">
        <div className="font-display-lg text-[64px] md:text-[80px] font-black tracking-tighter opacity-80 leading-none">
          {step.number}
        </div>
        <div>
          <h3 className="font-headline-lg text-[28px] md:text-[36px] font-black uppercase mb-4">
            {step.title}
          </h3>
          <p className="font-body-lg text-[18px] md:text-[20px] leading-relaxed opacity-90">
            {step.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function Workflow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="w-full bg-background border-b-4 border-on-surface relative h-[400vh]">
      <div className="sticky top-0 w-full h-screen pt-28 md:pt-32 px-8 flex flex-col overflow-hidden">
        <div className="max-w-4xl mx-auto w-full flex-1 relative">
          
          <div className="text-center mb-16 relative z-0">
            <h2 className="font-display-lg text-[40px] md:text-[56px] font-black uppercase tracking-tighter mb-4 text-on-surface">
              Alur Kerja
            </h2>
            <p className="font-body-lg text-[20px] md:text-[24px] opacity-90 text-on-surface">
              Proses kolaboratif untuk menghidupkan visi Anda.
            </p>
          </div>

          <div className="relative w-full h-full">
            {steps.map((step, index) => (
              <WorkflowCard 
                key={step.number} 
                step={step} 
                index={index} 
                scrollYProgress={scrollYProgress} 
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
