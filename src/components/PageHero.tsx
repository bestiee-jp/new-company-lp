'use client';

import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle: string;
  breadcrumb: BreadcrumbItem[];
  decorative?: boolean;
}

// Decorative diagonal bands component (exported for custom heroes)
export function DecorativeBands() {
  return (
    <div style={{
      position: 'absolute',
      top: '0',
      right: '0',
      width: '50%',
      height: '100%',
      overflow: 'hidden',
      zIndex: 0,
    }}>
      {/* Main diagonal band */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-100px',
        width: '600px',
        height: '120px',
        background: 'linear-gradient(90deg, var(--bestiee-blue) 0%, var(--bestiee-blue-light) 50%, var(--bestiee-cyan) 100%)',
        transform: 'rotate(-25deg)',
        transformOrigin: 'center',
      }} />
      {/* Second diagonal band */}
      <div style={{
        position: 'absolute',
        top: '30px',
        right: '-50px',
        width: '500px',
        height: '80px',
        background: 'linear-gradient(90deg, var(--bestiee-blue-light) 0%, var(--bestiee-cyan) 100%)',
        opacity: 0.7,
        transform: 'rotate(-25deg)',
        transformOrigin: 'center',
      }} />
      {/* Third diagonal band with stripes */}
      <div style={{
        position: 'absolute',
        top: '100px',
        right: '-80px',
        width: '550px',
        height: '60px',
        background: 'repeating-linear-gradient(90deg, var(--bestiee-blue-light) 0px, var(--bestiee-blue-light) 4px, white 4px, white 8px)',
        transform: 'rotate(-25deg)',
        transformOrigin: 'center',
      }} />
      {/* Fourth striped band */}
      <div style={{
        position: 'absolute',
        top: '140px',
        right: '-60px',
        width: '500px',
        height: '40px',
        background: 'repeating-linear-gradient(90deg, var(--bestiee-cyan) 0px, var(--bestiee-cyan) 2px, white 2px, white 6px)',
        opacity: 0.8,
        transform: 'rotate(-25deg)',
        transformOrigin: 'center',
      }} />
    </div>
  );
}

export default function PageHero({ title, subtitle, breadcrumb, decorative = false }: PageHeroProps) {
  return (
    <section style={{
      backgroundColor: decorative ? 'white' : '#f8fafc',
      paddingTop: '80px',
      paddingBottom: decorative ? undefined : '40px',
      position: decorative ? 'relative' : undefined,
      overflow: decorative ? 'hidden' : undefined,
    }}>
      {/* Decorative bands for company pages */}
      {decorative && <DecorativeBands />}

      {/* Content */}
      <div style={{ padding: '0 5%', position: 'relative', zIndex: 1 }}>
        {/* Title */}
        <div style={{ marginBottom: decorative ? '40px' : undefined }}>
          <h1 style={{
            fontSize: decorative ? 'clamp(40px, 6vw, 64px)' : 'clamp(32px, 5vw, 48px)',
            fontWeight: 'bold',
            color: 'black',
            display: decorative ? 'inline-block' : undefined,
          }}>
            {title}
          </h1>
          <p style={{
            fontSize: decorative ? '18px' : '16px',
            color: '#666',
            marginTop: decorative ? '16px' : '12px',
          }}>
            {subtitle}
          </p>
        </div>

        {/* Breadcrumb */}
        <div style={{
          fontSize: '14px',
          color: '#666',
          marginTop: decorative ? undefined : '24px',
          marginBottom: decorative ? '60px' : undefined,
        }}>
          {breadcrumb.map((item, index) => (
            <span key={index}>
              {index > 0 && <span style={{ margin: '0 8px' }}>-</span>}
              {item.href ? (
                <Link href={item.href} style={{ color: '#666', textDecoration: 'none' }}>
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
