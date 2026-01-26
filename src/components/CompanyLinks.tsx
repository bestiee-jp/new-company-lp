'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Arrow Icon
function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function CompanyLinks() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="bg-white" style={{ paddingTop: isMobile ? '40px' : '80px', paddingBottom: isMobile ? '40px' : '80px' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '30px' : '40px',
          padding: '0 5%',
        }}
      >
        {/* 会社情報 */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              height: isMobile ? '200px' : '350px',
              marginBottom: '16px',
            }}
          >
            <Image
              src="/images/company-office.jpg"
              alt="会社情報"
              width={600}
              height={400}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              href="/company"
              className="inline-flex items-center justify-between bg-black text-white"
              style={{
                padding: isMobile ? '14px 20px' : '18px 28px',
                minWidth: isMobile ? '160px' : '200px',
                fontSize: isMobile ? '14px' : '16px',
                borderRadius: '50px',
                transition: 'border-radius 0.5s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderRadius = '8px'}
              onMouseLeave={(e) => e.currentTarget.style.borderRadius = '50px'}
            >
              <span>会社情報</span>
              <ArrowIcon />
            </Link>
          </div>
        </div>

        {/* 沿革 */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              height: isMobile ? '200px' : '350px',
              marginBottom: '16px',
            }}
          >
            <Image
              src="/images/history-tib.jpg"
              alt="沿革"
              width={600}
              height={400}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              href="/company/history"
              className="inline-flex items-center justify-between bg-black text-white"
              style={{
                padding: isMobile ? '14px 20px' : '18px 28px',
                minWidth: isMobile ? '160px' : '200px',
                fontSize: isMobile ? '14px' : '16px',
                borderRadius: '50px',
                transition: 'border-radius 0.5s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderRadius = '8px'}
              onMouseLeave={(e) => e.currentTarget.style.borderRadius = '50px'}
            >
              <span>沿革</span>
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
