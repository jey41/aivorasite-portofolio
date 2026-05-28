import { ImageResponse } from 'next/og';
import { getDetailItemById } from '@/data/portfolio';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

interface ImageProps {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: ImageProps) {
  const { slug } = await params;
  const item = getDetailItemById(slug);

  if (!item) {
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#111111',
            color: '#f5f1e8',
            fontSize: 54,
            fontWeight: 800,
            textTransform: 'uppercase',
          }}
        >
          Project not found
        </div>
      ),
      size,
    );
  }

  const tags = item.tags?.slice(0, 3) ?? [];

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          background: '#111111',
          color: '#f5f1e8',
          padding: '54px 58px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.18,
            backgroundImage:
              'linear-gradient(to right, #2a281d 1px, transparent 1px), linear-gradient(to bottom, #2a281d 1px, transparent 1px)',
            backgroundSize: '54px 54px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: -110,
            right: -70,
            width: 320,
            height: 320,
            display: 'flex',
            borderRadius: 9999,
            background: '#ffdd00',
            opacity: 0.12,
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 58,
            right: 58,
            top: 44,
            height: 8,
            display: 'flex',
            background: '#ffdd00',
          }}
        />
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 18,
              maxWidth: '88%',
            }}
          >
            <div
              style={{
                display: 'flex',
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: '#ffdd00',
              }}
            >
              {item.type} / {item.subtitle}
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 68,
                lineHeight: 1.02,
                fontWeight: 900,
                letterSpacing: '-0.04em',
                textTransform: 'uppercase',
              }}
            >
              {item.title}
            </div>
            <div
              style={{
                display: 'flex',
                maxWidth: '94%',
                fontSize: 28,
                lineHeight: 1.35,
                color: 'rgba(245, 241, 232, 0.82)',
              }}
            >
              {item.shortDesc}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: 20,
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: 12,
                flexWrap: 'wrap',
                maxWidth: '72%',
              }}
            >
              {tags.map((tag) => (
                <div
                  key={tag}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid #f5f1e8',
                    padding: '10px 16px',
                    fontSize: 20,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: 8,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'rgba(245, 241, 232, 0.6)',
                }}
              >
                Auto Preview
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: 28,
                  fontWeight: 800,
                  textTransform: 'uppercase',
                }}
              >
                Hero Section
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
