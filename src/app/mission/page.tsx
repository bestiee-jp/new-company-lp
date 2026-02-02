'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { useIsMobile } from '@/hooks/useIsMobile';
import { useTranslation } from '@/hooks/useTranslation';

export default function MissionPage() {
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <PageHero
        title={t('pages.mission.title')}
        subtitle={t('pages.mission.subtitle')}
        breadcrumb={[
          { label: t('breadcrumb.top'), href: '/' },
          { label: t('pages.mission.title') },
        ]}
      />

      {/* Mission Section */}
      <section style={{ backgroundColor: 'white', position: 'relative', overflow: 'hidden' }}>
        <SectionHeader title={t('mission.sectionTitle')} withBorder />

        {/* Content */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '32px' : '60px',
          padding: isMobile ? '40px 5% 60px' : '80px 5% 100px',
          alignItems: isMobile ? 'stretch' : 'center',
        }}>
          {/* Text content */}
          <div style={{ flex: 1, maxWidth: isMobile ? '100%' : '700px' }}>
            <p style={{
              fontSize: isMobile ? '12px' : '14px',
              color: '#666',
              marginBottom: isMobile ? '12px' : '16px',
              letterSpacing: '0.1em',
            }}>
              turn fear into passion
            </p>

            <h2 style={{
              fontSize: isMobile ? '24px' : 'clamp(28px, 4vw, 40px)',
              fontWeight: 'bold',
              color: 'black',
              lineHeight: '1.6',
              marginBottom: isMobile ? '32px' : '60px',
            }}>
              {t('mission.tagline')}
            </h2>

            <div style={{ fontSize: isMobile ? '14px' : '16px', lineHeight: '2.2', color: '#333' }}>
              <p style={{ marginBottom: isMobile ? '24px' : '32px' }}>
                {t('mission.paragraph1')}
              </p>

              <p style={{ marginBottom: isMobile ? '24px' : '32px' }}>
                {t('mission.paragraph2')}{!isMobile && <br />}
                {t('mission.paragraph2_sub')}{!isMobile && <br />}
                {t('mission.paragraph2_sub2')}
              </p>

              <p style={{ marginBottom: isMobile ? '24px' : '32px' }}>
                {t('mission.paragraph3')}
              </p>

              <p>
                {t('mission.paragraph4')}{!isMobile && <br />}
                {t('mission.paragraph4_sub')}{!isMobile && <br />}
                {t('mission.paragraph4_sub2')}
              </p>
            </div>
          </div>

          {/* Image */}
          <div style={{
            width: isMobile ? '100%' : '450px',
            height: isMobile ? '220px' : '320px',
            borderRadius: '16px',
            overflow: 'hidden',
            flexShrink: 0,
          }}>
            <Image
              src="/images/mission.jpg"
              alt="ミッション"
              width={450}
              height={320}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ backgroundColor: 'white', position: 'relative' }}>
        <SectionHeader title={t('values.sectionTitle')} withBorder />

        {/* Values Content */}
        <div style={{ padding: isMobile ? '40px 5% 60px' : '80px 5% 100px' }}>
          {/* Intro text */}
          <p style={{
            fontSize: isMobile ? '14px' : '16px',
            lineHeight: '2',
            color: '#333',
            marginBottom: isMobile ? '48px' : '80px',
            maxWidth: '800px',
          }}>
            {t('values.intro')}{!isMobile && <br />}
            {t('values.intro2')}{!isMobile && <br />}
            {t('values.intro3')}
          </p>

          {/* Value 1 */}
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '24px' : '60px',
            marginBottom: isMobile ? '48px' : '80px',
            alignItems: isMobile ? 'stretch' : 'center',
          }}>
            <div style={{ flex: 1, order: isMobile ? 2 : 1 }}>
              <p style={{
                fontSize: isMobile ? '12px' : '14px',
                color: 'var(--bestiee-blue)',
                fontWeight: '600',
                letterSpacing: '0.05em',
                marginBottom: '8px',
              }}>
                {t('values.value1.tagline')}
              </p>
              <h3 style={{
                fontSize: isMobile ? '22px' : '28px',
                fontWeight: 'bold',
                color: 'black',
                marginBottom: isMobile ? '16px' : '24px',
              }}>
                {t('values.value1.title')}
              </h3>
              <p style={{
                fontSize: isMobile ? '14px' : '16px',
                lineHeight: '2',
                color: '#333',
              }}>
                {t('values.value1.description')}
              </p>
            </div>
            <div style={{
              width: isMobile ? '100%' : '400px',
              height: isMobile ? '200px' : '280px',
              borderRadius: '16px',
              overflow: 'hidden',
              flexShrink: 0,
              order: isMobile ? 1 : 2,
            }}>
              <Image
                src="/images/value-bestiee.jpg"
                alt="Be a Bestiee"
                width={400}
                height={280}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Value 2 */}
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row-reverse',
            gap: isMobile ? '24px' : '60px',
            marginBottom: isMobile ? '48px' : '80px',
            alignItems: isMobile ? 'stretch' : 'center',
          }}>
            <div style={{ flex: 1, order: isMobile ? 2 : 1 }}>
              <p style={{
                fontSize: isMobile ? '12px' : '14px',
                color: 'var(--bestiee-blue)',
                fontWeight: '600',
                letterSpacing: '0.05em',
                marginBottom: '8px',
              }}>
                {t('values.value2.tagline')}
              </p>
              <h3 style={{
                fontSize: isMobile ? '22px' : '28px',
                fontWeight: 'bold',
                color: 'black',
                marginBottom: isMobile ? '16px' : '24px',
              }}>
                {t('values.value2.title')}
              </h3>
              <p style={{
                fontSize: isMobile ? '14px' : '16px',
                lineHeight: '2',
                color: '#333',
              }}>
                {t('values.value2.description')}
              </p>
            </div>
            <div style={{
              width: isMobile ? '100%' : '400px',
              height: isMobile ? '200px' : '280px',
              borderRadius: '16px',
              overflow: 'hidden',
              flexShrink: 0,
              order: isMobile ? 1 : 2,
            }}>
              <Image
                src="/images/value-wow.jpg"
                alt="Design the Wow"
                width={400}
                height={280}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Value 3 */}
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '24px' : '60px',
            alignItems: isMobile ? 'stretch' : 'center',
          }}>
            <div style={{ flex: 1, order: isMobile ? 2 : 1 }}>
              <p style={{
                fontSize: isMobile ? '12px' : '14px',
                color: 'var(--bestiee-blue)',
                fontWeight: '600',
                letterSpacing: '0.05em',
                marginBottom: '8px',
              }}>
                {t('values.value3.tagline')}
              </p>
              <h3 style={{
                fontSize: isMobile ? '22px' : '28px',
                fontWeight: 'bold',
                color: 'black',
                marginBottom: isMobile ? '16px' : '24px',
              }}>
                {t('values.value3.title')}
              </h3>
              <p style={{
                fontSize: isMobile ? '14px' : '16px',
                lineHeight: '2',
                color: '#333',
              }}>
                {t('values.value3.description')}
              </p>
            </div>
            <div style={{
              width: isMobile ? '100%' : '400px',
              height: isMobile ? '200px' : '280px',
              borderRadius: '16px',
              overflow: 'hidden',
              flexShrink: 0,
              order: isMobile ? 1 : 2,
            }}>
              <Image
                src="/images/value-grind.jpg"
                alt="Trust the Grind"
                width={400}
                height={280}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
