'use client';

// Arrow Icon
function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden">
      {/* Text and Button section */}
      <div className="relative" style={{ padding: '0 5%', paddingBottom: '60px', paddingLeft: '50%' }}>
        {/* Main text */}
        <div style={{ paddingTop: '40px' }}>
          <p
            className="text-black"
            style={{
              fontSize: 'clamp(16px, 1.8vw, 22px)',
              lineHeight: '2',
            }}
          >
            私たちは、誰もが心地よく、健康に、そして幸せに働ける社会を目指し、<br />
            テクノロジーと創意工夫で、日本の労働を一歩ずつアップデートしていきます。
          </p>

          {/* Button */}
          <div style={{ marginTop: '40px' }}>
            <a
              href="#"
              className="group inline-flex items-center justify-between bg-black text-white"
              style={{
                padding: '20px 30px',
                minWidth: '280px',
                fontSize: '18px',
                borderRadius: '50px',
                transition: 'border-radius 0.5s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderRadius = '8px'}
              onMouseLeave={(e) => e.currentTarget.style.borderRadius = '50px'}
            >
              <span>私たちについて</span>
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Images section - no cyan background */}
      <div className="relative" style={{ padding: '60px 0' }}>
        {/* Three images */}
        <div className="flex gap-6">
          {/* Image 1 - Left */}
          <div
            className="flex-1"
            style={{
              borderTopRightRadius: '20px',
              borderBottomRightRadius: '20px',
              overflow: 'hidden',
              height: '400px',
              backgroundColor: '#e5e7eb',
            }}
          >
            <div
              className="w-full h-full flex items-center justify-center text-gray-400"
              style={{
                background: 'linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)',
              }}
            >
              <span className="text-sm">Office Photo 1</span>
            </div>
          </div>

          {/* Image 2 - Center */}
          <div
            className="flex-1"
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              height: '400px',
              backgroundColor: '#e5e7eb',
            }}
          >
            <div
              className="w-full h-full flex items-center justify-center text-gray-400"
              style={{
                background: 'linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)',
              }}
            >
              <span className="text-sm">Office Photo 2</span>
            </div>
          </div>

          {/* Image 3 - Right */}
          <div
            className="flex-1"
            style={{
              borderTopLeftRadius: '20px',
              borderBottomLeftRadius: '20px',
              overflow: 'hidden',
              height: '400px',
              backgroundColor: '#e5e7eb',
            }}
          >
            <div
              className="w-full h-full flex items-center justify-center text-gray-400"
              style={{
                background: 'linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)',
              }}
            >
              <span className="text-sm">Office Photo 3</span>
            </div>
          </div>
        </div>
      </div>

      {/* ミッション達成のために section */}
      <div
        style={{
          padding: '100px 5%',
        }}
      >
        <div className="flex gap-16">
          {/* Left side - Text */}
          <div style={{ flex: '1' }}>
            <h3
              className="text-black font-bold"
              style={{
                fontSize: 'clamp(24px, 3vw, 36px)',
                marginBottom: '40px',
                letterSpacing: '0.1em',
              }}
            >
              ミッション達成のために
            </h3>
            <p
              className="text-black"
              style={{
                fontSize: 'clamp(14px, 1.5vw, 18px)',
                lineHeight: '2.2',
                maxWidth: '500px',
              }}
            >
              現在、私たちは最速で日本社会の「well-working」を達成するために、スタートアップのスピード感を失わずに規模を拡大していくという難題にチャレンジしています。人事労務領域にとどまらない事業拡大を推進するとともに、従業員一人ひとりが働きやすさとやりがいを感じられる「働きがい」のある組織づくりに取り組んでいます。
            </p>
          </div>

          {/* Right side - Buttons */}
          <div
            style={{
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '20px',
            }}
          >
            <a
              href="#"
              className="flex items-center justify-between bg-black text-white"
              style={{
                padding: '24px 32px',
                fontSize: '18px',
                borderRadius: '50px',
                transition: 'border-radius 0.5s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderRadius = '8px'}
              onMouseLeave={(e) => e.currentTarget.style.borderRadius = '50px'}
            >
              <span>事業から見るSmartHR</span>
              <ArrowIcon />
            </a>
            <a
              href="#"
              className="flex items-center justify-between bg-black text-white"
              style={{
                padding: '24px 32px',
                fontSize: '18px',
                borderRadius: '50px',
                transition: 'border-radius 0.5s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderRadius = '8px'}
              onMouseLeave={(e) => e.currentTarget.style.borderRadius = '50px'}
            >
              <span>組織から見るSmartHR</span>
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
