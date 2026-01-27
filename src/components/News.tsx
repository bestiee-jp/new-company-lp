'use client';

import { useIsMobile } from '@/hooks/useIsMobile';
import { homeNewsItems } from '@/data/news';

export default function News() {
  const isMobile = useIsMobile();

  return (
    <section className="bg-white" style={{ paddingTop: isMobile ? '40px' : '80px', paddingBottom: isMobile ? '40px' : '80px', position: 'relative' }}>
      {/* ニュース label with full-width border */}
      <div style={{ borderBottom: '1px solid #e5e7eb', marginBottom: isMobile ? '40px' : '80px' }}>
        <div
          className="flex items-center"
          style={{
            padding: isMobile ? '0 5% 16px' : '0 5% 20px',
            gap: isMobile ? '12px' : '16px'
          }}
        >
          <div style={{ width: '4px', height: isMobile ? '24px' : '28px', background: 'var(--bestiee-gradient-vertical)' }}></div>
          <span style={{ color: 'black', fontSize: isMobile ? '18px' : '22px', letterSpacing: '0.2em', fontWeight: '500' }}>ニュース</span>
        </div>
      </div>

      {/* News cards grid */}
      <div
        style={{
          padding: '0 5%',
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: isMobile ? '20px' : '24px',
        }}
      >
        {homeNewsItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="group"
            style={{
              display: 'flex',
              flexDirection: 'column',
              textDecoration: 'none',
            }}
          >
            {/* Image */}
            <div
              style={{
                width: '100%',
                aspectRatio: '16/10',
                borderRadius: '8px',
                overflow: 'hidden',
                marginBottom: '16px',
                backgroundColor: '#f3f4f6',
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                }}
                className="group-hover:scale-105"
              />
            </div>

            {/* Date and Category */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '8px',
              }}
            >
              <span
                style={{
                  color: '#6b7280',
                  fontSize: isMobile ? '12px' : '14px',
                }}
              >
                {item.date}
              </span>
              <span
                style={{
                  color: 'var(--bestiee-cyan)',
                  fontSize: isMobile ? '12px' : '14px',
                  fontWeight: '500',
                }}
              >
                {item.category}
              </span>
            </div>

            {/* Title */}
            <p
              className="group-hover:text-[var(--bestiee-cyan)] transition-colors"
              style={{
                color: '#1f2937',
                fontSize: isMobile ? '13px' : '15px',
                lineHeight: '1.6',
                margin: 0,
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {item.title}
            </p>
          </a>
        ))}
      </div>

      {/* ニュース一覧 Button */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: isMobile ? '32px' : '60px', padding: '0 5%' }}>
        <a
          href="/news"
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
          <span>ニュース一覧</span>
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
    </section>
  );
}
