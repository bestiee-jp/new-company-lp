'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useIsMobile } from '@/hooks/useIsMobile';
import { ArrowIcon } from '@/components/icons';

// 画像データ - 円形と四角形を混ぜる
const scrollImages = [
  { src: '/images/contact-1.jpg', type: 'circle' },
  { src: '/images/contact-2.jpg', type: 'rect' },
  { src: '/images/contact-3.jpg', type: 'rect' },
  { src: '/images/contact-4.jpg', type: 'circle' },
];

export default function ContactSection() {
  const isMobile = useIsMobile();
  const pathname = usePathname();

  // スクロール用に画像を複製
  const duplicatedImages = [...scrollImages, ...scrollImages, ...scrollImages, ...scrollImages];

  // Handle click - scroll to top if same page (preserve form data)
  const handleContactClick = (e: React.MouseEvent) => {
    if (pathname === '/contact') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  return (
    <section className="bg-white" style={{ paddingTop: isMobile ? '40px' : '80px', paddingBottom: isMobile ? '40px' : '80px', position: 'relative', overflow: 'hidden' }}>
      {/* お問い合わせ label with full-width border */}
      <div style={{ borderBottom: '1px solid #e5e7eb', marginBottom: isMobile ? '30px' : '60px' }}>
        <div className="flex items-center gap-4" style={{ padding: '0 5%', paddingBottom: isMobile ? '16px' : '20px' }}>
          <div style={{ width: '4px', height: isMobile ? '24px' : '28px', background: 'var(--bestiee-gradient-vertical)' }}></div>
          <span style={{ color: 'black', fontSize: isMobile ? '18px' : '22px', letterSpacing: '0.2em', fontWeight: '500' }}>お問い合わせ</span>
        </div>
      </div>

      {/* Decorative circles (PC only) */}
      {!isMobile && (
        <>
          <div
            style={{
              position: 'absolute',
              top: '25%',
              right: '8%',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(0, 163, 224, 0.2) 0%, rgba(77, 217, 217, 0.05) 100%)',
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '35%',
              right: '2%',
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(30, 90, 168, 0.15) 0%, rgba(77, 217, 217, 0.03) 100%)',
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '40%',
              right: '18%',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(77, 217, 217, 0.3) 0%, rgba(77, 217, 217, 0.1) 100%)',
              zIndex: 0,
            }}
          />
        </>
      )}

      {/* Main content */}
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          gap: isMobile ? '30px' : '60px',
          padding: '0 5%',
          marginBottom: isMobile ? '30px' : '60px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Left side - Text */}
        <div style={{ flex: '1', maxWidth: isMobile ? '100%' : '500px', marginLeft: isMobile ? '0' : '10%' }}>
          <h2
            className="text-black"
            style={{
              fontSize: isMobile ? '24px' : 'clamp(28px, 3.5vw, 42px)',
              lineHeight: '1.5',
              marginBottom: isMobile ? '20px' : '30px',
              fontWeight: '300',
            }}
          >
            お気軽にご相談ください。
          </h2>
          <p
            className="text-black"
            style={{
              fontSize: isMobile ? '14px' : 'clamp(14px, 1.5vw, 16px)',
              lineHeight: '2',
            }}
          >
            AI採用マッチング・採用イベントなど、優秀学生の新卒採用に関して幅広くご提案いたします。
            サービスに関するご質問やお見積りから、取材・メディア掲載のお問い合わせまで、お気軽にご連絡ください。
          </p>
        </div>

        {/* Right side - Button */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: isMobile ? 'flex-start' : 'center',
            justifyContent: 'center',
            marginRight: isMobile ? '0' : '15%',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <Link
            href="/contact"
            onClick={handleContactClick}
            className="inline-flex items-center justify-between bg-black text-white"
            style={{
              padding: isMobile ? '16px 24px' : '24px 32px',
              minWidth: isMobile ? '200px' : '280px',
              fontSize: isMobile ? '16px' : '18px',
              borderRadius: '50px',
              transition: 'border-radius 0.5s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderRadius = '8px'}
            onMouseLeave={(e) => e.currentTarget.style.borderRadius = '50px'}
          >
            <span>お問い合わせ</span>
            <ArrowIcon />
          </Link>
        </div>
      </div>

      {/* Scrolling Photos Section */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          overflow: 'hidden',
          padding: isMobile ? '20px 0' : '40px 0',
        }}
      >
        <div
          className="flex items-center"
          style={{
            gap: isMobile ? '20px' : '40px',
            animation: 'scroll 30s linear infinite',
            width: 'fit-content',
          }}
        >
          {duplicatedImages.map((img, index) => (
            <div
              key={index}
              style={{
                width: img.type === 'circle'
                  ? (isMobile ? '200px' : '350px')
                  : (isMobile ? '220px' : '390px'),
                height: img.type === 'circle'
                  ? (isMobile ? '200px' : '350px')
                  : (isMobile ? '275px' : '488px'),
                borderRadius: img.type === 'circle' ? '50%' : '12px',
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              <Image
                src={img.src}
                alt="お問い合わせ"
                width={img.type === 'circle' ? 350 : 390}
                height={img.type === 'circle' ? 350 : 488}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
