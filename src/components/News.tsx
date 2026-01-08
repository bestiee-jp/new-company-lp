'use client';

// Arrow Icon in circle
function ArrowCircleIcon({ hover = false }: { hover?: boolean }) {
  return (
    <div
      style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: hover ? '#00c8c8' : 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.3s',
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </div>
  );
}

// Arrow Icon
function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

// News item data
const newsItems = [
  {
    date: '2025.12.26',
    category: 'お知らせ',
    title: 'VP就任に関するお知らせ',
  },
  {
    date: '2025.12.08',
    category: 'お知らせ',
    title: '不適切なブログ記事公開に関するお詫びと今後の対応について',
  },
  {
    date: '2025.12.03',
    category: 'プレスリリース',
    title: 'SmartHR、蓄積された従業員データをAIが分析し、最適な人材選定を提案する「AI類似従業員検索」機能を提供',
  },
  {
    date: '2025.11.25',
    category: 'お知らせ',
    title: 'SmartHR、「人事評価」に「給与シミュレーション」機能を追加',
  },
  {
    date: '2025.11.18',
    category: 'お知らせ',
    title: 'General AtlanticがSmartHRの株主に参画 Coral Capitalから146億円の株式を取得',
  },
];

export default function News() {
  return (
    <section className="bg-white" style={{ paddingTop: '80px', paddingBottom: '80px', position: 'relative' }}>
      {/* ニュース label with full-width border */}
      <div style={{ borderBottom: '1px solid #e5e7eb', marginBottom: '80px' }}>
        <div className="flex items-center gap-4" style={{ padding: '0 5%', paddingBottom: '20px' }}>
          <div style={{ width: '4px', height: '28px', backgroundColor: '#4dd9d9' }}></div>
          <span style={{ color: 'black', fontSize: '22px', letterSpacing: '0.2em', fontWeight: '500' }}>ニュース</span>
        </div>
      </div>

      {/* News list */}
      <div style={{ padding: '0 5%' }}>
        {newsItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="flex items-center justify-between group"
            style={{
              padding: '30px 0',
              borderBottom: '1px solid #e5e7eb',
              textDecoration: 'none',
            }}
          >
            {/* Left side: Date, Category, Title */}
            <div className="flex items-center" style={{ gap: '30px', flex: 1 }}>
              {/* Date */}
              <span
                style={{
                  color: '#6b7280',
                  fontSize: '15px',
                  minWidth: '110px',
                }}
              >
                {item.date}
              </span>

              {/* Category tag */}
              <span
                style={{
                  border: '1px solid #00c8c8',
                  color: '#00c8c8',
                  padding: '6px 20px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  minWidth: '100px',
                  textAlign: 'center',
                }}
              >
                {item.category}
              </span>

              {/* Title */}
              <span
                className="group-hover:text-[#00c8c8] transition-colors"
                style={{
                  color: 'black',
                  fontSize: '16px',
                  flex: 1,
                }}
              >
                {item.title}
              </span>
            </div>

            {/* Right side: Arrow */}
            <div className="group-hover:scale-110 transition-transform">
              <ArrowCircleIcon />
            </div>
          </a>
        ))}
      </div>

      {/* ニュース一覧 Button */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '60px', padding: '0 5%' }}>
        <a
          href="#"
          className="inline-flex items-center justify-between bg-black text-white"
          style={{
            padding: '24px 32px',
            minWidth: '280px',
            fontSize: '18px',
            borderRadius: '50px',
            transition: 'border-radius 0.5s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderRadius = '8px'}
          onMouseLeave={(e) => e.currentTarget.style.borderRadius = '50px'}
        >
          <span>ニュース一覧</span>
          <ArrowIcon />
        </a>
      </div>

      {/* Office Photos Section */}
      <div style={{ position: 'relative', marginTop: '100px' }}>
        {/* Cyan decorative shapes */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            left: '-10%',
            width: '400px',
            height: '350px',
            backgroundColor: '#00c8c8',
            transform: 'skewY(-8deg) skewX(-5deg)',
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50px',
            left: '-15%',
            width: '350px',
            height: '200px',
            backgroundColor: '#00c8c8',
            transform: 'skewY(5deg) skewX(-10deg)',
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '180px',
            left: '-5%',
            width: '300px',
            height: '250px',
            backgroundColor: '#00c8c8',
            transform: 'skewY(-3deg)',
            zIndex: 0,
          }}
        />

        {/* Photos container */}
        <div
          className="flex gap-8"
          style={{
            position: 'relative',
            zIndex: 1,
            paddingTop: '80px',
            paddingLeft: '10%',
          }}
        >
          {/* Left photo - Dark office */}
          <div
            style={{
              flex: '1',
              height: '450px',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(180deg, #1a1a2e 0%, #2d2d44 40%, #4a4a5c 100%)',
                position: 'relative',
              }}
            >
              {/* Ceiling grid pattern */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '40%',
                  background: 'repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(0,0,0,0.3) 30px, rgba(0,0,0,0.3) 32px), repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(0,0,0,0.3) 30px, rgba(0,0,0,0.3) 32px)',
                }}
              />
              {/* Hanging lamps */}
              <div style={{ position: 'absolute', top: '35%', left: '30%', width: '20px', height: '30px', backgroundColor: '#f59e0b', borderRadius: '50%' }} />
              <div style={{ position: 'absolute', top: '38%', left: '60%', width: '20px', height: '30px', backgroundColor: '#ea580c', borderRadius: '50%' }} />
              {/* Window silhouettes */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '20%',
                  left: '10%',
                  right: '10%',
                  height: '35%',
                  background: 'linear-gradient(180deg, rgba(135,206,235,0.3) 0%, rgba(255,200,150,0.2) 100%)',
                  borderRadius: '4px',
                }}
              />
              {/* People silhouettes */}
              <div className="flex justify-center gap-4" style={{ position: 'absolute', bottom: '15%', left: '20%', right: '20%' }}>
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: '25px',
                      height: '40px',
                      backgroundColor: 'rgba(0,0,0,0.6)',
                      borderRadius: '50% 50% 0 0',
                    }}
                  />
                ))}
              </div>
              <span
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '12px',
                }}
              >
                Office Photo 1
              </span>
            </div>
          </div>

          {/* Right photo - Bright meeting */}
          <div
            style={{
              flex: '1',
              height: '450px',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f8fafc 100%)',
                position: 'relative',
              }}
            >
              {/* Window light effect */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '60%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 100%)',
                }}
              />
              {/* People placeholders */}
              <div
                className="flex items-end justify-center gap-6"
                style={{
                  position: 'absolute',
                  bottom: '20%',
                  left: '15%',
                  right: '15%',
                }}
              >
                {/* Person 1 */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#374151', marginBottom: '8px' }} />
                  <div style={{ width: '40px', height: '60px', backgroundColor: '#1f2937', borderRadius: '8px 8px 0 0' }} />
                </div>
                {/* Person 2 - center */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#374151', marginBottom: '8px' }} />
                  <div style={{ width: '40px', height: '60px', backgroundColor: '#dc2626', borderRadius: '8px 8px 0 0' }} />
                </div>
                {/* Person 3 */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#374151', marginBottom: '8px' }} />
                  <div style={{ width: '40px', height: '60px', backgroundColor: '#6b7280', borderRadius: '8px 8px 0 0' }} />
                </div>
              </div>
              {/* Laptop */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '25%',
                  right: '25%',
                  width: '60px',
                  height: '40px',
                  backgroundColor: '#d1d5db',
                  borderRadius: '4px',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  color: 'rgba(0,0,0,0.3)',
                  fontSize: '12px',
                }}
              >
                Office Photo 2
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
