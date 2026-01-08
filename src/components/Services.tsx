'use client';

// Arrow Icon
function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function Services() {
  return (
    <section className="bg-white" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      {/* サービス label with full-width border */}
      <div style={{ borderBottom: '1px solid #e5e7eb', marginBottom: '60px' }}>
        <div className="flex items-center gap-4" style={{ padding: '0 5%', paddingBottom: '20px' }}>
          <div style={{ width: '4px', height: '28px', backgroundColor: '#4dd9d9' }}></div>
          <span style={{ color: 'black', fontSize: '22px', letterSpacing: '0.2em', fontWeight: '500' }}>サービス</span>
        </div>
      </div>

      {/* Content area */}
      <div className="flex" style={{ gap: '60px', padding: '0 5%' }}>
        {/* Left side - Text and Button */}
        <div style={{ flex: '0 0 35%', paddingTop: '40px' }}>
          <p
            className="text-black"
            style={{
              fontSize: 'clamp(16px, 1.8vw, 20px)',
              lineHeight: '2',
              marginBottom: '40px',
            }}
          >
            人事・労務の業務効率化と、着実な成果につながるタレントマネジメントの推進を支援するクラウド人事労務ソフト「SmartHR」を開発しています。
          </p>

          {/* Button */}
          <a
            href="#"
            className="inline-flex items-center justify-between bg-black text-white"
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
            <span>サービス</span>
            <ArrowIcon />
          </a>
        </div>

        {/* Right side - Device Mockups */}
        <div style={{ flex: '1', position: 'relative', minHeight: '500px' }}>
          {/* Laptop mockup */}
          <div
            style={{
              position: 'absolute',
              top: '0',
              right: '0',
              width: '85%',
              height: '400px',
              backgroundColor: '#f3f4f6',
              borderRadius: '8px',
              border: '8px solid #1f2937',
              borderBottom: '24px solid #1f2937',
              overflow: 'hidden',
            }}
          >
            {/* Laptop screen content */}
            <div
              style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%)',
                padding: '20px',
              }}
            >
              {/* Header bar */}
              <div
                style={{
                  backgroundColor: '#0d9488',
                  padding: '8px 16px',
                  borderRadius: '4px 4px 0 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span style={{ color: 'white', fontSize: '12px', fontWeight: 'bold' }}>SmartHR</span>
                <span style={{ color: 'white', fontSize: '10px', opacity: 0.8 }}>株式会社＊＊＊＊＊</span>
              </div>
              {/* Content area */}
              <div style={{ backgroundColor: 'white', padding: '16px', borderRadius: '0 0 4px 4px' }}>
                <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '12px' }}>勤怠レポート</div>
                <div style={{ display: 'flex', gap: '20px' }}>
                  {/* Stats */}
                  <div>
                    <div style={{ fontSize: '10px', color: '#6b7280' }}>月間平均労働時間（正社員）</div>
                    <div style={{ fontSize: '24px', fontWeight: 'bold' }}>174.6<span style={{ fontSize: '12px' }}>時間</span></div>
                  </div>
                  {/* Chart placeholder */}
                  <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '4px', height: '80px' }}>
                    {[60, 45, 70, 55, 80, 65, 75, 50, 85, 60].map((h, i) => (
                      <div
                        key={i}
                        style={{
                          flex: 1,
                          height: `${h}%`,
                          backgroundColor: i % 2 === 0 ? '#0891b2' : '#22d3ee',
                          borderRadius: '2px 2px 0 0',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone mockup */}
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              left: '5%',
              width: '160px',
              height: '320px',
              backgroundColor: '#1f2937',
              borderRadius: '24px',
              padding: '8px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            }}
          >
            {/* Phone screen */}
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
              }}
            >
              {/* Phone header */}
              <div
                style={{
                  backgroundColor: '#0d9488',
                  padding: '8px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span style={{ color: 'white', fontSize: '10px', fontWeight: 'bold' }}>SmartHR</span>
              </div>
              {/* Phone content */}
              <div style={{ padding: '12px' }}>
                {/* Profile section */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)',
                    }}
                  />
                  <div>
                    <div style={{ fontSize: '10px', fontWeight: 'bold' }}>田中 ゆき</div>
                    <div style={{ fontSize: '8px', color: '#6b7280' }}>カナダ</div>
                  </div>
                </div>
                {/* Info rows */}
                {['住所と連絡先', '電話番号', '業務情報', '所属部署', '所属支店'].map((label, i) => (
                  <div
                    key={i}
                    style={{
                      borderBottom: '1px solid #e5e7eb',
                      padding: '6px 0',
                      fontSize: '8px',
                      color: '#374151',
                    }}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
