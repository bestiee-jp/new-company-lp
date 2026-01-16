'use client';

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[60vh] md:min-h-[80vh] lg:min-h-[90vh]">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/hero-bg.mp4?v=3" type="video/mp4" />
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full z-[1] bg-white/30" />

      {/* Main content */}
      <div className="relative z-10 flex items-center min-h-[60vh] md:min-h-[80vh] lg:min-h-[90vh]" style={{ paddingLeft: '5%', paddingRight: '5%' }}>
        {/* Tagline - Cyan - Medium Glow */}
        <h1
          className="leading-tight font-bold tracking-wider text-[#1a1a1a] text-[clamp(24px,6vw,32px)] md:text-[clamp(28px,4.5vw,56px)]"
          style={{
            textShadow: '0 0 4px rgba(0, 229, 229, 0.4), 0 0 10px rgba(0, 229, 229, 0.25)',
          }}
        >
          学びと出会いに、ワクワクを
        </h1>
      </div>
    </section>
  );
}
