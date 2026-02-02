'use client';

import { useIsMobile } from '@/hooks/useIsMobile';
import { useTranslation } from '@/hooks/useTranslation';

export default function Mission() {
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  return (
    <section className="relative">
      {/* ミッション label with full-width border */}
      <div style={{ borderBottom: '1px solid #e5e7eb' }}>
        <div
          className="flex items-center"
          style={{
            padding: isMobile ? '16px 5%' : '20px 5%',
            gap: isMobile ? '12px' : '16px'
          }}
        >
          <div style={{ width: '4px', height: isMobile ? '24px' : '28px', background: 'var(--bestiee-gradient-vertical)' }}></div>
          <span style={{ color: 'black', fontSize: isMobile ? '18px' : '22px', letterSpacing: '0.2em', fontWeight: '500' }}>{t('mission.sectionTitle')}</span>
        </div>
      </div>

      {/* Main content area with image and text */}
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          padding: isMobile ? '24px 5%' : '30px 5%',
          marginTop: isMobile ? '24px' : '40px',
          gap: isMobile ? '40px' : '60px',
        }}
      >
        {/* Left side - Image and Caption */}
        <div style={{
          flex: isMobile ? '1' : '0 0 45%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img
            src="/kou2.jpg"
            alt="Mission"
            style={{
              width: '100%',
              maxWidth: isMobile ? '350px' : '600px',
              height: 'auto',
              objectFit: 'cover',
              borderRadius: '8px',
              transform: 'scale(1.02)',
            }}
          />
          <div style={{
            marginTop: isMobile ? '32px' : '80px',
            textAlign: 'center',
            fontSize: isMobile ? '14px' : '20px',
            lineHeight: '2',
            color: '#333'
          }}>
            <p style={{ fontWeight: 'bold', fontSize: isMobile ? '20px' : '30px' }}>{t('mission.ceoTitle')}</p>
            <p>{t('mission.ceoDescription1')}</p>
            <p>{t('mission.ceoDescription2')}</p>
          </div>
        </div>

        {/* Right side - Text */}
        <div style={{ flex: '1' }}>
          {/* Main tagline */}
          <h3
            className="text-black font-bold"
            style={{
              fontSize: isMobile ? '22px' : 'clamp(24px, 3vw, 40px)',
              lineHeight: '1.6',
              marginBottom: isMobile ? '24px' : '64px'
            }}
          >
            {t('mission.tagline')}
          </h3>

          {/* Body paragraphs */}
          <div
            className="text-black"
            style={{
              fontSize: isMobile ? '15px' : 'clamp(16px, 1.5vw, 20px)',
              lineHeight: isMobile ? '1.9' : '2.2',
              display: 'flex',
              flexDirection: 'column',
              gap: isMobile ? '16px' : '24px',
            }}
          >
            <p>{t('mission.paragraph1')}</p>
            <p>
              {t('mission.paragraph2')}
              {!isMobile && <br />}
              {t('mission.paragraph2_sub')}
              {!isMobile && <br />}
              {t('mission.paragraph2_sub2')}
            </p>
            <p>{t('mission.paragraph3')}</p>
            <p>
              {t('mission.paragraph4')}
              {!isMobile && <br />}
              {t('mission.paragraph4_sub')}
              {!isMobile && <br />}
              {t('mission.paragraph4_sub2')}
            </p>
          </div>

          {/* About us button */}
          <div style={{ marginTop: isMobile ? '32px' : '60px' }}>
            <a
              href="/mission"
              className="inline-flex items-center justify-between bg-black text-white"
              style={{
                padding: isMobile ? '16px 24px' : '24px 40px',
                minWidth: isMobile ? '200px' : '280px',
                fontSize: isMobile ? '16px' : '22px',
                borderRadius: '50px',
                transition: 'border-radius 0.5s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderRadius = '8px')}
              onMouseLeave={(e) => (e.currentTarget.style.borderRadius = '50px')}
            >
              <span>{t('mission.aboutUsButton')}</span>
              <svg
                width={isMobile ? "20" : "28"}
                height={isMobile ? "20" : "28"}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Auto-scroll Photo Gallery */}
      <div
        style={{
          overflow: 'hidden',
          padding: isMobile ? '32px 0' : '60px 0',
          marginTop: isMobile ? '24px' : '40px',
        }}
      >
        <div
          className="flex items-center"
          style={{
            gap: isMobile ? '16px' : '24px',
            animation: 'scroll 40s linear infinite',
            width: 'fit-content',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
          }}
        >
          {/* Photos - duplicated for seamless loop */}
          {[...Array(2)].map((_, setIndex) => (
            [
              { src: '/mission-photos/s-_C8A2490.jpg', id: 1 },
              { src: '/mission-photos/s-_C8A2500.jpg', id: 2 },
              { src: '/mission-photos/s-DSC07998.jpg', id: 3 },
              { src: '/mission-photos/s-DSC08159.jpg', id: 4 },
              { src: '/mission-photos/s-IMG_5545.jpg', id: 5 },
              { src: '/mission-photos/s-IMG_5548.jpg', id: 6 },
              { src: '/mission-photos/s-Vol.2_座談会写真学生2.jpg', id: 7 },
            ].map((photo) => (
              <div
                key={`${setIndex}-${photo.id}`}
                style={{
                  width: isMobile ? '280px' : '400px',
                  height: isMobile ? '210px' : '300px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  flexShrink: 0,
                }}
              >
                <img
                  src={photo.src}
                  alt={`Office photo ${photo.id}`}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    willChange: 'transform',
                  }}
                />
              </div>
            ))
          )).flat()}
        </div>
      </div>
    </section>
  );
}
