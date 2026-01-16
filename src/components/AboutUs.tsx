'use client';

import { useEffect, useState } from 'react';

// Arrow Icon
function ArrowIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function AboutUs() {
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
    <section className="relative overflow-hidden">
      {/* ミッション達成のために section */}
      <div
        style={{
          padding: isMobile ? '48px 5%' : '100px 5%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '32px' : '64px',
          }}
        >
          {/* Left side - Text */}
          <div style={{ flex: '1' }}>
            <h3
              className="text-black font-bold"
              style={{
                fontSize: isMobile ? '20px' : 'clamp(24px, 3vw, 36px)',
                marginBottom: isMobile ? '24px' : '40px',
                letterSpacing: '0.1em',
              }}
            >
              ミッション達成のために
            </h3>
            <p
              className="text-black"
              style={{
                fontSize: isMobile ? '14px' : 'clamp(14px, 1.5vw, 18px)',
                lineHeight: isMobile ? '1.9' : '2.2',
                maxWidth: isMobile ? '100%' : '500px',
              }}
            >
              現在、私たちは最速で日本社会の「well-working」を達成するために、スタートアップのスピード感を失わずに規模を拡大していくという難題にチャレンジしています。人事労務領域にとどまらない事業拡大を推進するとともに、従業員一人ひとりが働きやすさとやりがいを感じられる「働きがい」のある組織づくりに取り組んでいます。
            </p>
          </div>

          {/* Right side - Buttons */}
          <div
            style={{
              flex: isMobile ? 'none' : '1',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: isMobile ? '12px' : '20px',
            }}
          >
            <a
              href="#"
              className="flex items-center justify-between bg-black text-white"
              style={{
                padding: isMobile ? '16px 20px' : '24px 32px',
                fontSize: isMobile ? '14px' : '18px',
                borderRadius: '50px',
                transition: 'border-radius 0.5s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderRadius = '8px'}
              onMouseLeave={(e) => e.currentTarget.style.borderRadius = '50px'}
            >
              <span>事業から見るSmartHR</span>
              <ArrowIcon size={isMobile ? 16 : 20} />
            </a>
            <a
              href="#"
              className="flex items-center justify-between bg-black text-white"
              style={{
                padding: isMobile ? '16px 20px' : '24px 32px',
                fontSize: isMobile ? '14px' : '18px',
                borderRadius: '50px',
                transition: 'border-radius 0.5s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderRadius = '8px'}
              onMouseLeave={(e) => e.currentTarget.style.borderRadius = '50px'}
            >
              <span>組織から見るSmartHR</span>
              <ArrowIcon size={isMobile ? 16 : 20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
