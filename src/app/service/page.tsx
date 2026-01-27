'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useIsMobile } from "@/hooks/useIsMobile";
import { recruitmentServices, educationServices, serviceIntroduction } from "@/data/services";

// サービスカードコンポーネント
function ServiceCard({ name, description, image, isReversed, isMobile }: {
  name: string;
  description: string;
  image: string;
  isReversed?: boolean;
  isMobile: boolean;
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : (isReversed ? 'row-reverse' : 'row'),
        gap: isMobile ? '24px' : '60px',
        alignItems: 'center',
        marginBottom: isMobile ? '48px' : '80px',
      }}
    >
      {/* 画像 */}
      <div
        style={{
          flex: isMobile ? 'none' : '0 0 45%',
          width: isMobile ? '100%' : 'auto',
        }}
      >
        <div
          style={{
            width: '100%',
            aspectRatio: '16/10',
            borderRadius: '12px',
            overflow: 'hidden',
            backgroundColor: 'white',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
          }}
        >
          <img
            src={image}
            alt={name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>

      {/* テキスト */}
      <div style={{ flex: 1 }}>
        <h3
          style={{
            fontSize: isMobile ? '22px' : '28px',
            fontWeight: 'bold',
            color: 'black',
            marginBottom: '16px',
          }}
        >
          {name}
        </h3>
        <p
          style={{
            fontSize: isMobile ? '14px' : '16px',
            lineHeight: '2',
            color: '#333',
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default function ServicePage() {
  const isMobile = useIsMobile();

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <PageHero
        title="サービス"
        subtitle="Service"
        breadcrumb={[
          { label: 'トップ', href: '/' },
          { label: 'サービス' },
        ]}
      />

      {/* Introduction */}
      <section style={{ backgroundColor: 'white', padding: isMobile ? '40px 5%' : '60px 5%', textAlign: 'center' }}>
        <p style={{
          fontSize: isMobile ? '20px' : 'clamp(24px, 3vw, 36px)',
          fontWeight: '600',
          lineHeight: '1.8',
          background: 'linear-gradient(135deg, #1E5AA8 0%, #00A3E0 50%, #4DD9D9 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          {serviceIntroduction.tagline}
        </p>
      </section>

      {/* 採用支援 Section */}
      <section style={{
        backgroundColor: 'white',
        paddingTop: isMobile ? '40px' : '80px',
        paddingBottom: isMobile ? '40px' : '80px',
      }}>
        {/* Section Header */}
        <div style={{ borderBottom: '1px solid #e5e7eb', marginBottom: isMobile ? '40px' : '60px' }}>
          <div
            className="flex items-center"
            style={{
              padding: isMobile ? '0 5% 16px' : '0 5% 20px',
              gap: isMobile ? '12px' : '16px'
            }}
          >
            <div style={{ width: '4px', height: isMobile ? '24px' : '28px', background: 'var(--bestiee-gradient-vertical)' }}></div>
            <span style={{ color: 'black', fontSize: isMobile ? '18px' : '22px', letterSpacing: '0.2em', fontWeight: '500' }}>採用支援</span>
          </div>
        </div>

        {/* Services */}
        <div style={{ padding: '0 5%' }}>
          {recruitmentServices.map((service, index) => (
            <ServiceCard
              key={service.name}
              name={service.name}
              description={service.description}
              image={service.image}
              isReversed={index % 2 === 1}
              isMobile={isMobile}
            />
          ))}
        </div>
      </section>

      {/* 教育 Section */}
      <section style={{
        backgroundColor: '#f9fafb',
        paddingTop: isMobile ? '40px' : '80px',
        paddingBottom: isMobile ? '40px' : '80px',
      }}>
        {/* Section Header */}
        <div style={{ borderBottom: '1px solid #e5e7eb', marginBottom: isMobile ? '40px' : '60px' }}>
          <div
            className="flex items-center"
            style={{
              padding: isMobile ? '0 5% 16px' : '0 5% 20px',
              gap: isMobile ? '12px' : '16px'
            }}
          >
            <div style={{ width: '4px', height: isMobile ? '24px' : '28px', background: 'var(--bestiee-gradient-vertical)' }}></div>
            <span style={{ color: 'black', fontSize: isMobile ? '18px' : '22px', letterSpacing: '0.2em', fontWeight: '500' }}>教育</span>
          </div>
        </div>

        {/* Services */}
        <div style={{ padding: '0 5%' }}>
          {educationServices.map((service, index) => (
            <ServiceCard
              key={service.name}
              name={service.name}
              description={service.description}
              image={service.image}
              isReversed={index % 2 === 1}
              isMobile={isMobile}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
