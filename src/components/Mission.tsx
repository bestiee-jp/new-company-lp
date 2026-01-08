'use client';

export default function Mission() {
  return (
    <section className="relative">
      {/* ミッション label with full-width border */}
      <div style={{ borderBottom: '1px solid #e5e7eb' }}>
        <div className="flex items-center gap-4" style={{ padding: '20px 5%' }}>
          <div style={{ width: '4px', height: '28px', backgroundColor: '#4dd9d9' }}></div>
          <span style={{ color: 'black', fontSize: '22px', letterSpacing: '0.2em', fontWeight: '500' }}>ミッション</span>
        </div>
      </div>

      {/* well-working text */}
      <div
        style={{
          paddingLeft: '5%',
          paddingTop: '40px',
          paddingBottom: '40px'
        }}
      >
        <h2
          className="text-black"
          style={{
            fontSize: 'clamp(60px, 12vw, 180px)',
            fontFamily: 'Georgia, serif',
            fontWeight: 300,
            letterSpacing: '-0.02em',
            lineHeight: '1'
          }}
        >
          well-working
        </h2>
      </div>

      {/* Main content area - transparent to show cyan background */}
      <div
        style={{
          padding: '30px 5%',
          paddingLeft: '50%',
          marginTop: '-50px',
        }}
      >
        {/* Main tagline */}
        <h3
          className="text-black font-bold mb-16"
          style={{
            fontSize: 'clamp(24px, 3vw, 40px)',
            lineHeight: '1.6'
          }}
        >
          労働にまつわる社会課題をなくし、<br />
          誰もがその人らしく働ける社会をつくる。
        </h3>

        {/* Body paragraphs */}
        <div
          className="text-black"
          style={{
            fontSize: 'clamp(16px, 1.5vw, 20px)',
            lineHeight: '2.2',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <p>働くこと。</p>
          <p>
            それは人生の多くの時間を使い、自分や他者に大きな影響を与える、<br />
            生きていく上でとても大切なものだと考えます。
          </p>
          <p>だからこそ、誰もがその人らしく働ける社会であってほしい。</p>
          <p>だからこそ、私たちは、労働にまつわる複雑な社会課題を解決していきたい。</p>
          <p>私たちは、誰もが心地よく、健康に、そして幸せに働ける社会を目指し、</p>
        </div>
      </div>
    </section>
  );
}
