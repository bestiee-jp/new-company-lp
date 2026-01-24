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
      <div className="absolute top-0 left-0 w-full h-full z-[1] bg-black/20" />

      {/* Main content */}
      <div className="relative z-10 flex items-center min-h-[60vh] md:min-h-[80vh] lg:min-h-[90vh]" style={{ paddingLeft: '5%', paddingRight: '5%' }}>
        <div className="w-full">
          {/* MOBILE */}
          <div className="flex items-start gap-4 mb-[-14px] md:mb-[-28px]">
            <h1
              className="text-[clamp(67px,17vw,168px)] font-bold leading-none text-black tracking-tight"
              style={{ textShadow: '0 0 10px rgba(77, 217, 217, 0.3), 0 0 20px rgba(77, 217, 217, 0.2), 0 0 30px rgba(77, 217, 217, 0.1)' }}
            >
              MOBILE
            </h1>
          </div>

          {/* TECH with cursive */}
          <div className="flex items-center gap-5 mb-[-14px] md:mb-[-28px]">
            <h1
              className="text-[clamp(67px,17vw,168px)] font-bold leading-none text-black tracking-tight"
              style={{ textShadow: '0 0 10px rgba(77, 217, 217, 0.3), 0 0 20px rgba(77, 217, 217, 0.2), 0 0 30px rgba(77, 217, 217, 0.1)' }}
            >
              TECH
            </h1>
            <div className="flex flex-col">
              <span
                className="text-[clamp(34px,7vw,67px)] italic"
                style={{ fontFamily: 'var(--font-satisfy), cursive', color: '#4dd9d9' }}
              >
                mobile tech for all
              </span>
              <span className="text-[clamp(22px,4.2vw,39px)] text-white font-medium tracking-wide">
                学びと出会いに、ワクワクを
              </span>
            </div>
          </div>


          {/* FOR ALL. */}
          <div className="flex items-start gap-4">
            <h1
              className="text-[clamp(67px,17vw,168px)] font-bold leading-none text-black tracking-tight"
              style={{ textShadow: '0 0 10px rgba(77, 217, 217, 0.3), 0 0 20px rgba(77, 217, 217, 0.2), 0 0 30px rgba(77, 217, 217, 0.1)' }}
            >
              FOR ALL.
            </h1>
          </div>
        </div>

        {/* Sparkle icon */}
        <div className="absolute right-[5%] bottom-[20%] text-white text-5xl md:text-7xl">
          ✦
        </div>

      </div>
    </section>
  );
}
