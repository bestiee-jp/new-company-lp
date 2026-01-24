'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section style={{ backgroundColor: '#f8fafc', paddingTop: '80px', paddingBottom: '40px' }}>
        <div style={{ padding: '0 5%' }}>
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 'bold',
            color: 'black',
          }}>
            プライバシーポリシー
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#666',
            marginTop: '12px',
          }}>
            Privacy Policy
          </p>

          {/* Breadcrumb */}
          <div style={{
            fontSize: '14px',
            color: '#666',
            marginTop: '24px',
          }}>
            <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>トップ</Link>
            <span style={{ margin: '0 8px' }}>-</span>
            <span>プライバシーポリシー</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ backgroundColor: 'white', padding: '60px 5%', flex: 1 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Content will be added here */}
        </div>
      </section>

      <Footer />
    </main>
  );
}
