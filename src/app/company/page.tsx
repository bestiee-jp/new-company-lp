'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import RelatedPagesGrid from "@/components/RelatedPagesGrid";
import { useTranslation } from '@/hooks/useTranslation';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function CompanyPage() {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  // Company info data with translations
  const companyInfo = [
    { label: t('companyInfo.companyName'), value: t('companyInfo.companyNameValue') },
    { label: t('companyInfo.ceo'), value: t('companyInfo.ceoValue') },
    { label: t('companyInfo.business'), value: t('companyInfo.businessValue') },
    { label: t('companyInfo.established'), value: t('companyInfo.establishedValue') },
    { label: t('companyInfo.capital'), value: t('companyInfo.capitalValue') },
    { label: t('companyInfo.registeredAddress'), value: t('companyInfo.registeredAddressValue') },
    { label: t('companyInfo.office'), value: t('companyInfo.officeValue') },
  ];

  // Related pages with translations
  const relatedPages = [
    { label: t('nav.company'), href: '/company', image: '/images/related-company.jpg' },
    { label: t('nav.executives'), href: '/company/executives', image: '/images/related-executives.jpg' },
    { label: t('nav.history'), href: '/company/history', image: '/images/history-tib.jpg' },
  ];
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <PageHero
        title={t('pages.company.title')}
        subtitle={t('pages.company.subtitle')}
        breadcrumb={[
          { label: t('breadcrumb.top'), href: '/' },
          { label: t('pages.company.title') },
        ]}
        decorative
      />

      {/* Hero Image */}
      <section style={{ backgroundColor: 'white' }}>
        <div style={{ padding: '0 5%', paddingBottom: '60px', display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{
            width: '40%',
            maxWidth: '480px',
            aspectRatio: '16/9',
            overflow: 'hidden',
            borderRadius: '12px',
          }}>
            <Image
              src="/images/related-company.jpg"
              alt="オフィス"
              width={480}
              height={270}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Company Info Table Section */}
      <section style={{ backgroundColor: 'white', padding: '0 5% 80px' }}>
        <div style={{ maxWidth: '1200px' }}>
          <SectionHeader title={t('companyInfo.overview')} padding="0 0 40px 0" />

          {/* Info Table */}
          <div style={{ borderTop: '1px solid #e5e7eb' }}>
            {companyInfo.map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  borderBottom: '1px solid #e5e7eb',
                  padding: '24px 0',
                }}
              >
                <div style={{
                  flex: '0 0 200px',
                  fontSize: '18px',
                  fontWeight: '500',
                  color: '#333',
                }}>
                  {item.label}
                </div>
                <div style={{
                  flex: '1',
                  fontSize: '18px',
                  color: '#333',
                  lineHeight: '1.8',
                  whiteSpace: 'pre-line',
                }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          {/* Company Images */}
          <div style={{ display: 'flex', gap: '24px', marginTop: '40px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 400px', aspectRatio: '16/10', overflow: 'hidden', borderRadius: '8px' }}>
              <Image
                src="/images/会社情報_上司と部下.jpg"
                alt="オフィス風景"
                width={600}
                height={375}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ flex: '1 1 400px', aspectRatio: '16/10', overflow: 'hidden', borderRadius: '8px' }}>
              <Image
                src="/images/会社情報_AIコーディング.jpg"
                alt="AIコーディング"
                width={600}
                height={375}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section style={{ backgroundColor: '#f9fafb', padding: '80px 5%' }}>
        <div style={{ maxWidth: '1200px' }}>
          <SectionHeader title={t('companyInfo.access')} padding="0 0 40px 0" />

          {/* Access Info */}
          <div style={{ marginBottom: '32px' }}>
            <p style={{ fontSize: '18px', fontWeight: '500', color: '#333', marginBottom: '16px' }}>
              {t('companyInfo.accessInfo')}
            </p>
            <div style={{ fontSize: '16px', color: '#666', lineHeight: '2' }}>
              <p>{t('companyInfo.accessStation1')}</p>
              <p>{t('companyInfo.accessStation2')}</p>
            </div>
          </div>

          {/* Google Maps */}
          <div style={{ width: '100%', maxWidth: '800px', aspectRatio: '16/10', borderRadius: '8px', overflow: 'hidden' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6480.670245376782!2d139.74546!3d35.69337!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c69146baa49%3A0xe464fb5b1da4d499!2z44CSMTAyLTAwNzQg5p2x5Lqs6YO95Y2D5Luj55Sw5Yy65Lmd5q615Y2X77yS5LiB55uu77yT4oiS77yR!5e0!3m2!1sja!2sjp!4v1769323408390!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <RelatedPagesGrid pages={relatedPages} />

      <Footer />
    </main>
  );
}
