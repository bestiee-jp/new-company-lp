'use client';

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '90vh' }}>
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="/hero-bg.mp4?v=3" type="video/mp4" />
      </video>

      {/* Overlay for better text readability */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ zIndex: 1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-center" style={{ minHeight: '90vh', padding: '0 5%' }}>
        {/* Tagline - Cyan - Medium Glow */}
        <h1
          className="leading-tight"
          style={{
            position: 'absolute',
            top: '50%',
            left: '5%',
            transform: 'translateY(-50%)',
            fontSize: 'clamp(28px, 4.5vw, 56px)',
            fontWeight: 700,
            letterSpacing: '0.1em',
            color: '#1a1a1a',
            textShadow: '0 0 4px rgba(0, 229, 229, 0.4), 0 0 10px rgba(0, 229, 229, 0.25)',
          }}
        >
          学びと出会いに、ワクワクを
        </h1>

      </div>
    </section>
  );
}
