'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useIsMobile } from '@/hooks/useIsMobile';
import { ExternalLinkIcon } from '@/components/icons';
import {
  copyrightText,
  footerLogoPath,
  type SocialLink,
} from '@/data/footer';
import { useTranslation } from '@/hooks/useTranslation';

// X (Twitter) Icon
function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

// Note Icon
function NoteIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
      <text x="12" y="16" textAnchor="middle" fontSize="10" fill="currentColor">n</text>
    </svg>
  );
}

// LinkedIn Icon
function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

// TikTok Icon
function TikTokIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );
}

// YouTube Icon
function YouTubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

// Facebook Icon
function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

// Get icon component by platform
function getSocialIcon(platform: string) {
  switch (platform) {
    case 'x':
      return <XIcon />;
    case 'note':
      return <NoteIcon />;
    case 'linkedin':
      return <LinkedInIcon />;
    case 'youtube':
      return <YouTubeIcon />;
    case 'tiktok':
      return <TikTokIcon />;
    case 'facebook':
      return <FacebookIcon />;
    default:
      return null;
  }
}

// Footer Link Component
function FooterLink({ href, children, external = false, isMobile = false }: { href: string; children: React.ReactNode; external?: boolean; isMobile?: boolean }) {
  const pathname = usePathname();

  const content = (
    <>
      <span className="relative inline-block">
        {children}
        <span className="absolute left-0 bottom-[-2px] h-[1px] bg-white transition-all duration-100 w-0 group-hover:w-full"></span>
      </span>
      {external && <ExternalLinkIcon />}
    </>
  );

  const fontSize = isMobile ? '14px' : '18px';

  // Handle click - scroll to top if same page (preserve form data)
  const handleClick = (e: React.MouseEvent) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  // Use Link for internal links (starting with /)
  if (href.startsWith('/') && !external) {
    return (
      <Link href={href} onClick={handleClick} className="group text-white flex items-center gap-2 w-fit" style={{ fontSize }}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className="group text-white flex items-center gap-2 w-fit"
      style={{ fontSize }}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {content}
    </a>
  );
}

// Footer Section Title
function FooterTitle({ children, isMobile = false }: { children: React.ReactNode; isMobile?: boolean }) {
  return <h3 style={{ fontSize: isMobile ? '16px' : '22px', fontWeight: 'bold', color: 'white', marginBottom: isMobile ? '12px' : '20px' }}>{children}</h3>;
}

// Social Link Component
function SocialLinkComponent({ link, isMobile = false }: { link: SocialLink; isMobile?: boolean }) {
  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-white w-fit" style={{ fontSize: isMobile ? '14px' : '18px' }}>
      {getSocialIcon(link.platform)}
      <span className="relative inline-block">
        {link.label}
        <span className="absolute left-0 bottom-[-2px] h-[1px] bg-white transition-all duration-100 w-0 group-hover:w-full"></span>
      </span>
    </a>
  );
}

export default function Footer() {
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  // Social media links with translations - Column 1
  const socialLinksColumn1: SocialLink[] = [
    { platform: 'x', label: t('footer.social.xCeo'), href: 'https://x.com/kou_goto_' },
    { platform: 'x', label: t('footer.social.xFastpass'), href: 'https://x.com/fastpass_ai' },
    { platform: 'note', label: t('footer.social.noteCeo'), href: 'https://note.com/kou_goto_' },
    { platform: 'note', label: t('footer.social.noteFastpass'), href: 'https://note.com/fastpass_ai' },
    { platform: 'linkedin', label: t('footer.social.linkedin'), href: 'https://www.linkedin.com/in/%E5%BC%98-%E5%BE%8C%E8%97%A4-ab61a3379/' },
  ];

  // Social media links with translations - Column 2
  const socialLinksColumn2: SocialLink[] = [
    { platform: 'youtube', label: t('footer.social.youtubeCeo'), href: 'https://www.youtube.com/@toudaiou_room' },
    { platform: 'youtube', label: t('footer.social.youtubeAiFest'), href: 'https://youtu.be/O4GQPqapLI4?si=S5GMDRgfnClG8EvC' },
    { platform: 'tiktok', label: t('footer.social.tiktok'), href: 'https://www.tiktok.com/@toudaiou_room' },
    { platform: 'facebook', label: t('footer.social.facebook'), href: 'https://www.facebook.com/people/%E5%BE%8C%E8%97%A4%E5%BC%98/100014465291670/' },
  ];

  // Dynamic footer nav sections with translations
  const footerNavSections = [
    {
      titleHref: '/mission',
      links: [{ label: t('footer.aboutUs'), href: '/mission', isBold: true }],
    },
    {
      titleHref: '/service',
      links: [{ label: t('footer.service'), href: '/service', isBold: true }],
    },
    {
      titleHref: '/news',
      links: [{ label: t('footer.news'), href: '/news', isBold: true }],
    },
    {
      titleHref: '/company',
      links: [
        { label: t('footer.company'), href: '/company', isBold: true },
        { label: t('footer.company'), href: '/company' },
        { label: t('footer.executives'), href: '/company/executives' },
        { label: t('footer.history'), href: '/company/history' },
      ],
    },
    {
      titleHref: '/contact',
      links: [{ label: t('footer.contact'), href: '/contact', isBold: true }],
    },
  ];

  // Dynamic policy links with translations
  const policyLinks = [
    { label: t('footer.securityPolicy'), href: '/security' },
    { label: t('footer.privacyPolicy'), href: '/privacy' },
    { label: t('footer.aiPolicy'), href: '/ai-policy' },
  ];

  return (
    <footer className="bg-[#1a1a1a] text-white flex flex-col" style={{ minHeight: isMobile ? 'auto' : '100vh' }}>
      {/* Top Spacer */}
      <div style={{ height: isMobile ? '40px' : '20vh' }}></div>

      {/* Main Footer Content */}
      <div style={{ padding: '0 5%' }} className="flex-1">
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '48px' : '0' }}>
          {/* Left Half - Logo, SNS, YouTube/Facebook */}
          <div style={{ width: isMobile ? '100%' : '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              {/* Logo at top */}
              <div style={{ marginBottom: isMobile ? '32px' : '48px' }}>
                <Link href="/">
                  <Image
                    src={footerLogoPath}
                    alt="bestiee"
                    width={isMobile ? 140 : 180}
                    height={50}
                    style={{ height: 'auto' }}
                  />
                </Link>
              </div>

              {/* SNS Links */}
              <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '24px' : '64px' }}>
                {/* Column 1 - X, note, LinkedIn */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '12px' : '20px' }}>
                  {socialLinksColumn1.map((link, index) => (
                    <SocialLinkComponent key={index} link={link} isMobile={isMobile} />
                  ))}
                </div>

                {/* Column 2 - YouTube, TikTok, Facebook */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '12px' : '20px' }}>
                  {socialLinksColumn2.map((link, index) => (
                    <SocialLinkComponent key={index} link={link} isMobile={isMobile} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Half - Navigation */}
          <div style={{
            width: isMobile ? '100%' : '50%',
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? '32px' : '40px'
          }}>
            {/* Row 1: 私たちについて, サービス, ニュース */}
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: isMobile ? '24px' : '48px'
            }}>
              {footerNavSections.slice(0, 3).map((section, sectionIndex) => (
                <div key={sectionIndex} style={{ display: 'flex', flexDirection: 'column', gap: section.links.length > 1 ? (isMobile ? '12px' : '16px') : '0' }}>
                  {section.links.map((link, linkIndex) => (
                    <FooterLink key={linkIndex} href={link.href} isMobile={isMobile}>
                      {link.isBold ? (
                        <span style={{ fontSize: isMobile ? '16px' : '18px', fontWeight: 'bold' }}>{link.label}</span>
                      ) : (
                        link.label
                      )}
                    </FooterLink>
                  ))}
                </div>
              ))}
            </div>
            {/* Row 2: 会社情報, お問い合わせ */}
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: isMobile ? '24px' : '48px'
            }}>
              {footerNavSections.slice(3).map((section, sectionIndex) => (
                <div key={sectionIndex} style={{ display: 'flex', flexDirection: 'column', gap: section.links.length > 1 ? (isMobile ? '12px' : '16px') : '0' }}>
                  {section.links.map((link, linkIndex) => (
                    <FooterLink key={linkIndex} href={link.href} isMobile={isMobile}>
                      {link.isBold ? (
                        <span style={{ fontSize: isMobile ? '16px' : '18px', fontWeight: 'bold' }}>{link.label}</span>
                      ) : (
                        link.label
                      )}
                    </FooterLink>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ padding: isMobile ? '32px 5%' : '0 5% 80px 5%' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: isMobile ? 'flex-start' : 'flex-end',
          gap: isMobile ? '16px' : '16px'
        }}>
          {/* Policy Links */}
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'flex-end',
            gap: isMobile ? '8px' : '24px'
          }}>
            {policyLinks.map((link, index) => (
              <a key={index} href={link.href} className="group text-white" style={{ fontSize: isMobile ? '12px' : '14px' }}>
                <span className="relative inline-block">{link.label}<span className="absolute left-0 bottom-[-2px] h-[1px] bg-white transition-all duration-100 w-0 group-hover:w-full"></span></span>
              </a>
            ))}
          </div>
          {/* Copyright */}
          <span className="text-white" style={{ fontSize: isMobile ? '12px' : '14px', opacity: 0.8 }}>{copyrightText}</span>
        </div>
      </div>
    </footer>
  );
}
