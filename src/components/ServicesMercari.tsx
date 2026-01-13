'use client';

import { useState, useEffect } from 'react';

// Add keyframe animation styles - 25 degrees from vertical
const diagonalWipeKeyframes = `
@keyframes diagonalWipe {
  0% {
    clip-path: polygon(-30% 0, 0% 0, -30% 100%, -60% 100%);
  }
  100% {
    clip-path: polygon(100% 0, 130% 0, 100% 100%, 70% 100%);
  }
}
`;

// External Link Icon
function ExternalLinkIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

// Slide data
const slides = [
  {
    logoText: 'mercari',
    logoIcon: 'm',
    description: '「メルカリ」は、個人が簡単にモノの売り買いが楽しめるフリマアプリです。AIによる不正の監視や独自の入金システムにより、誰でも安心・安全な取引が行えます。',
    buttonText: 'サイトを開く',
    buttonLink: '#',
    bgColor: '#4dd9d9',
    visualType: 'phone',
  },
  {
    logoText: 'Pay',
    logoIcon: 'm',
    description: '「メルペイ」は、スマホ決済サービスです。メルカリの売上金や、銀行口座からチャージしたお金を使って、メルカリアプリ内や、さまざまなお店でお買い物が楽しめます。',
    buttonText: 'サイトを開く',
    buttonLink: '#',
    bgColor: '#e8eef4',
    visualType: 'illustration',
  },
];

export default function ServicesMercari() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [resetTrigger, setResetTrigger] = useState(0);
  const [targetSlide, setTargetSlide] = useState(0);

  useEffect(() => {
    if (isAnimating) return; // Stop timer during animation

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 120);

    // Slide change
    const slideInterval = setInterval(() => {
      const nextIndex = (currentSlide + 1) % slides.length;
      setTargetSlide(nextIndex);
      setIsAnimating(true);
      setProgress(0);
      // Change content at 200ms (middle of wipe)
      setTimeout(() => {
        setCurrentSlide(nextIndex);
      }, 200);
      // End animation at 450ms (after wipe completes)
      setTimeout(() => {
        setIsAnimating(false);
      }, 450);
    }, 6000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(slideInterval);
    };
  }, [resetTrigger, isAnimating, currentSlide]);

  const handleSlideChange = (index: number) => {
    setTargetSlide(index);
    setIsAnimating(true);
    setProgress(0);
    // Change content at 200ms (middle of wipe)
    setTimeout(() => {
      setCurrentSlide(index);
    }, 200);
    // End animation at 450ms (after wipe completes)
    setTimeout(() => {
      setIsAnimating(false);
      setResetTrigger((prev) => prev + 1);
    }, 450);
  };

  const slide = slides[currentSlide];

  // Get target slide background color for wipe effect
  const wipeBgColor = slides[targetSlide].bgColor;

  return (
    <section
      style={{
        backgroundColor: slide.bgColor,
        minHeight: '600px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 5%',
      }}
    >
      {/* Inject keyframe styles */}
      <style dangerouslySetInnerHTML={{ __html: diagonalWipeKeyframes }} />

      {/* Diagonal wipe overlay - 60 degree angle */}
      {isAnimating && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: wipeBgColor,
            animation: 'diagonalWipe 0.4s linear forwards',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        />
      )}
      {/* Main container */}
      <div
        style={{
          maxWidth: '1200px',
          width: '100%',
          position: 'relative',
          height: '500px',
        }}
      >
        {/* Left - White Card */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '48px',
            width: '500px',
            height: '380px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
            position: 'absolute',
            left: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Services label */}
          <div
            style={{
              color: '#4dd9d9',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              marginBottom: '24px',
            }}
          >
            Services
          </div>

          {/* Logo */}
          <div
            style={{
              marginBottom: '24px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {/* Placeholder for logo - using text for now */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#4dd9d9',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '20px',
                }}
              >
                m
              </div>
              <span
                style={{
                  fontSize: '32px',
                  fontWeight: '700',
                  color: '#333',
                  letterSpacing: '-0.02em',
                  opacity: isAnimating ? 0 : 1,
                  transition: 'opacity 0.3s ease',
                }}
              >
                {slide.logoText}
              </span>
            </div>
          </div>

          {/* Description */}
          <div
            style={{
              flex: 1,
              minHeight: '120px',
            }}
          >
            <p
              style={{
                fontSize: '16px',
                lineHeight: '2',
                color: '#555',
                opacity: isAnimating ? 0 : 1,
                transition: 'opacity 0.3s ease',
              }}
            >
              {slide.description}
            </p>
          </div>

          {/* Button and indicators row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* Button */}
            <a
              href={slide.buttonLink}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
                color: '#333',
                fontSize: '16px',
                fontWeight: '500',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#4dd9d9',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                }}
              >
                <ExternalLinkIcon />
              </div>
              <span>{slide.buttonText}</span>
            </a>

            {/* Dot indicators with progress */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              {slides.map((_, index) => {
                const isActive = currentSlide === index;
                const size = isActive ? 24 : 8;
                const strokeWidth = 2;
                const radius = (size - strokeWidth) / 2;
                const circumference = 2 * Math.PI * radius;
                const displayProgress = isAnimating ? 0 : progress;
                const strokeDashoffset = circumference - (displayProgress / 100) * circumference;

                return (
                  <button
                    key={index}
                    onClick={() => handleSlideChange(index)}
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      padding: 0,
                      border: 'none',
                      backgroundColor: 'transparent',
                      cursor: 'pointer',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'width 0.3s ease, height 0.3s ease',
                    }}
                  >
                    {isActive ? (
                      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
                        {/* Background circle */}
                        <circle
                          cx={size / 2}
                          cy={size / 2}
                          r={radius}
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth={strokeWidth}
                        />
                        {/* Progress circle */}
                        <circle
                          cx={size / 2}
                          cy={size / 2}
                          r={radius}
                          fill="none"
                          stroke="#4dd9d9"
                          strokeWidth={strokeWidth}
                          strokeLinecap="round"
                          strokeDasharray={circumference}
                          strokeDashoffset={strokeDashoffset}
                          style={{ transition: 'stroke-dashoffset 0.1s linear' }}
                        />
                        {/* Center dot */}
                        <circle
                          cx={size / 2}
                          cy={size / 2}
                          r={3}
                          fill="#4dd9d9"
                          style={{ transform: 'rotate(90deg)', transformOrigin: 'center' }}
                        />
                      </svg>
                    ) : (
                      <div
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: '#d1d5db',
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right - Visual (Phone or Illustration) */}
        <div
          style={{
            position: 'absolute',
            right: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '550px',
            height: '500px',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              opacity: isAnimating ? 0 : 1,
              transform: isAnimating ? 'translateX(30px)' : 'translateX(0)',
              transition: 'opacity 0.3s ease, transform 0.4s ease',
            }}
          >
          {slide.visualType === 'phone' ? (
            /* Phone Mockup */
            <div style={{ transform: 'rotate(5deg)' }}>
              <div
                style={{
                  width: '280px',
                  height: '560px',
                  backgroundColor: 'white',
                  borderRadius: '40px',
                  padding: '12px',
                  boxShadow: '0 30px 80px rgba(0, 0, 0, 0.3)',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#f5f5f5',
                    borderRadius: '32px',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '120px',
                      height: '28px',
                      backgroundColor: 'white',
                      borderRadius: '0 0 20px 20px',
                      zIndex: 10,
                    }}
                  />
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(180deg, #fff 0%, #f8f8f8 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <div style={{ height: '44px', backgroundColor: 'white' }} />
                    <div style={{ padding: '12px 16px', backgroundColor: 'white', borderBottom: '1px solid #eee' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '24px', height: '24px', backgroundColor: '#4dd9d9', borderRadius: '4px' }} />
                        <span style={{ fontSize: '12px', fontWeight: '600', color: '#333' }}>{slide.logoText}</span>
                      </div>
                    </div>
                    <div style={{ flex: 1, padding: '8px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px' }}>
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          style={{
                            aspectRatio: '1',
                            backgroundColor: ['#4dd9d9', '#06b6d4', '#f59e0b', '#10b981', '#8b5cf6', '#ec4899', '#3b82f6', '#ef4444', '#14b8a6', '#f97316', '#6366f1', '#84cc16'][i % 12],
                            borderRadius: '4px',
                            opacity: 0.8,
                          }}
                        />
                      ))}
                    </div>
                    <div style={{ height: '60px', backgroundColor: 'white', borderTop: '1px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '0 20px' }}>
                      {[...Array(5)].map((_, i) => (
                        <div key={i} style={{ width: '24px', height: '24px', backgroundColor: i === 0 ? '#4dd9d9' : '#ccc', borderRadius: '4px' }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* 3D Isometric Illustration */
            <div style={{ width: '550px', height: '450px', position: 'relative' }}>
              {/* Main Phone */}
              <div style={{
                position: 'absolute',
                top: '50px',
                left: '150px',
                width: '180px',
                height: '320px',
                backgroundColor: 'white',
                borderRadius: '24px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                transform: 'perspective(800px) rotateY(-5deg)',
                overflow: 'hidden',
              }}>
                <div style={{ width: '100%', height: '100%', backgroundColor: '#4da6ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'white', fontSize: '28px', fontWeight: 'bold', letterSpacing: '2px' }}>merpay</span>
                </div>
              </div>

              {/* Platform 1 - Top left */}
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '0',
                width: '100px',
                height: '60px',
                backgroundColor: '#e2e8f0',
                borderRadius: '8px',
                transform: 'perspective(500px) rotateX(45deg) rotateZ(-10deg)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
              }} />

              {/* Building blocks - Top right */}
              <div style={{ position: 'absolute', top: '0', right: '80px' }}>
                <div style={{ width: '50px', height: '80px', backgroundColor: '#4da6ff', borderRadius: '4px', marginBottom: '4px' }} />
                <div style={{ width: '50px', height: '30px', backgroundColor: '#cbd5e1', borderRadius: '4px' }} />
              </div>

              {/* Coin 1 */}
              <div style={{
                position: 'absolute',
                top: '100px',
                right: '60px',
                width: '50px',
                height: '50px',
                backgroundColor: '#fbbf24',
                borderRadius: '50%',
                boxShadow: 'inset -5px -5px 15px rgba(0,0,0,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{ width: '30px', height: '30px', backgroundColor: '#f59e0b', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '14px' }}>m</div>
              </div>

              {/* Person 1 - Red dress */}
              <div style={{ position: 'absolute', top: '150px', right: '120px' }}>
                <div style={{ width: '16px', height: '16px', backgroundColor: '#fcd5ce', borderRadius: '50%', margin: '0 auto 4px' }} />
                <div style={{ width: '24px', height: '35px', backgroundColor: '#ef4444', borderRadius: '8px 8px 0 0' }} />
                <div style={{ display: 'flex', gap: '4px', marginTop: '2px' }}>
                  <div style={{ width: '10px', height: '25px', backgroundColor: '#fcd5ce', borderRadius: '4px' }} />
                  <div style={{ width: '10px', height: '25px', backgroundColor: '#fcd5ce', borderRadius: '4px' }} />
                </div>
              </div>

              {/* Platform 2 - Middle */}
              <div style={{
                position: 'absolute',
                top: '280px',
                left: '80px',
                width: '120px',
                height: '50px',
                backgroundColor: '#e2e8f0',
                borderRadius: '8px',
                transform: 'perspective(500px) rotateX(45deg)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
              }} />

              {/* Bicycle */}
              <div style={{ position: 'absolute', bottom: '120px', left: '60px' }}>
                <div style={{ width: '60px', height: '35px', position: 'relative' }}>
                  <div style={{ position: 'absolute', bottom: '0', left: '0', width: '25px', height: '25px', border: '3px solid #ef4444', borderRadius: '50%' }} />
                  <div style={{ position: 'absolute', bottom: '0', right: '0', width: '25px', height: '25px', border: '3px solid #ef4444', borderRadius: '50%' }} />
                  <div style={{ position: 'absolute', bottom: '12px', left: '10px', width: '40px', height: '3px', backgroundColor: '#ef4444', transform: 'rotate(-15deg)' }} />
                </div>
              </div>

              {/* Coin 2 */}
              <div style={{
                position: 'absolute',
                bottom: '80px',
                left: '180px',
                width: '40px',
                height: '40px',
                backgroundColor: '#fbbf24',
                borderRadius: '50%',
                boxShadow: 'inset -4px -4px 12px rgba(0,0,0,0.2)',
              }} />

              {/* Shop/Store */}
              <div style={{ position: 'absolute', bottom: '40px', right: '60px' }}>
                <div style={{ width: '80px', height: '15px', background: 'repeating-linear-gradient(90deg, #4da6ff 0px, #4da6ff 8px, white 8px, white 16px)', borderRadius: '4px 4px 0 0' }} />
                <div style={{ width: '80px', height: '50px', backgroundColor: 'white', borderRadius: '0 0 4px 4px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }} />
              </div>

              {/* Person 2 - Blue shirt */}
              <div style={{ position: 'absolute', bottom: '30px', right: '160px' }}>
                <div style={{ width: '14px', height: '14px', backgroundColor: '#fcd5ce', borderRadius: '50%', margin: '0 auto 3px' }} />
                <div style={{ width: '20px', height: '30px', backgroundColor: '#3b82f6', borderRadius: '6px 6px 0 0' }} />
                <div style={{ display: 'flex', gap: '3px', marginTop: '2px' }}>
                  <div style={{ width: '8px', height: '20px', backgroundColor: '#1e3a5f', borderRadius: '3px' }} />
                  <div style={{ width: '8px', height: '20px', backgroundColor: '#1e3a5f', borderRadius: '3px' }} />
                </div>
              </div>

              {/* Platform 3 - Bottom */}
              <div style={{
                position: 'absolute',
                bottom: '0',
                right: '40px',
                width: '140px',
                height: '60px',
                backgroundColor: '#e2e8f0',
                borderRadius: '8px',
                transform: 'perspective(500px) rotateX(45deg)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
              }} />

              {/* Phone small - right side */}
              <div style={{
                position: 'absolute',
                bottom: '100px',
                right: '0',
                width: '70px',
                height: '120px',
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                overflow: 'hidden',
              }}>
                <div style={{ width: '100%', height: '100%', backgroundColor: '#4da6ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'white', fontSize: '12px', fontWeight: 'bold' }}>m</span>
                </div>
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
    </section>
  );
}
