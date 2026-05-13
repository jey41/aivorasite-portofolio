import { notFound } from 'next/navigation';
import { SectionBlock } from '@/components/layout/section-block';
import { BusinessCaseView } from '@/components/content/business-case-view';
import { Badge } from '@/components/ui/badge';
import { getAllDetailItems, getDetailItemById } from '@/data/portfolio';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllDetailItems().map((item) => ({
    slug: item.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getDetailItemById(slug);
  if (!item) return { title: 'Not Found' };

  return {
    title: `${item.title} — ${item.subtitle}`,
    description: item.shortDesc,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getDetailItemById(slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      {/* Header */}
      <SectionBlock bg="charcoal" className="pt-40 pb-16">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-stone-gray hover:text-playdate-yellow transition-colors duration-200 mb-8"
        >
          <ArrowLeft size={18} />
          <span className="font-bold text-[17px]">Kembali ke semua proyek</span>
        </Link>

        <div>
          <p className="text-playdate-yellow font-bold text-[15px] uppercase tracking-wider">
            {item.subtitle}
          </p>
          <h1 className="text-heading-lg text-pure-white mt-2">{item.title}</h1>
          {item.date && (
            <p className="text-stone-gray text-[17px] mt-2">{item.date}</p>
          )}
          <p className="text-pure-white/80 text-[19px] mt-4 max-w-[700px] leading-relaxed">
            {item.shortDesc}
          </p>
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {item.tags.map((tag) => (
                <Badge key={tag} variant="teal">{tag}</Badge>
              ))}
            </div>
          )}
        </div>
      </SectionBlock>

      {/* Live Preview */}
      {item.link && (
        <SectionBlock bg="charcoal" className="pb-16 pt-0">
          <div className="max-w-[1000px] mx-auto">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-pure-white text-[21px] font-bold">Pratinjau Proyek</h2>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-playdate-yellow hover:text-pure-white transition-colors duration-200 font-bold"
              >
                Kunjungi Situs <ExternalLink size={18} />
              </a>
            </div>
            <a 
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative w-full aspect-video bg-ink-wash rounded-[12px] border border-pure-white/10 overflow-hidden shadow-2xl"
            >
              <img
                src={`https://placehold.co/1280x720/E8E5DF/18181B.png?text=Tangkapan+Layar+Website%5Cn(Rasio+16:9)`}
                alt={`Preview of ${item.title}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-charcoal-text/0 group-hover:bg-charcoal-text/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-playdate-yellow text-charcoal-text font-bold px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0">
                  Buka Website <ExternalLink size={18} />
                </div>
              </div>
            </a>
          </div>
        </SectionBlock>
      )}

      {/* Business Case */}
      <SectionBlock bg="white">
        <div className="max-w-[900px] mx-auto">
          <BusinessCaseView data={item.businessCase} />
        </div>
      </SectionBlock>

      {/* CTA */}
      <SectionBlock bg="yellow" className="text-center">
        <h2 className="text-heading mb-4">Tertarik untuk bekerja sama?</h2>
        <p className="text-charcoal-text/70 text-[19px] mb-8">
          Saya selalu terbuka untuk mendiskusikan proyek dan peluang baru.
        </p>
        <a
          href="mailto:hisyam@example.com"
          className="inline-flex items-center gap-2 gradient-cta text-pure-white font-bold text-[19px] px-8 py-4 rounded-[152.19px] border-t border-pure-white/30 hover:scale-105 transition-transform duration-300"
        >
          Hubungi Saya
        </a>
      </SectionBlock>
    </>
  );
}
