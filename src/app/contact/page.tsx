'use client';

import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

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
            お問い合わせ
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#666',
            marginTop: '12px',
          }}>
            Contact
          </p>

          {/* Breadcrumb */}
          <div style={{
            fontSize: '14px',
            color: '#666',
            marginTop: '24px',
          }}>
            <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>トップ</Link>
            <span style={{ margin: '0 8px' }}>-</span>
            <span>お問い合わせ</span>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section style={{ backgroundColor: 'white', padding: '80px 5%', flex: 1 }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          {isSubmitted ? (
            /* Success Message */
            <div style={{
              textAlign: 'center',
              padding: '60px 40px',
              backgroundColor: '#f0fdfa',
              borderRadius: '16px',
              border: '1px solid #4dd9d9',
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#4dd9d9',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '16px' }}>
                送信が完了しました
              </h2>
              <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.8' }}>
                お問い合わせいただきありがとうございます。<br />
                内容を確認の上、担当者よりご連絡いたします。
              </p>
              <Link
                href="/"
                style={{
                  display: 'inline-block',
                  marginTop: '32px',
                  padding: '16px 32px',
                  backgroundColor: '#333',
                  color: 'white',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontSize: '16px',
                  transition: 'border-radius 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderRadius = '8px'}
                onMouseLeave={(e) => e.currentTarget.style.borderRadius = '50px'}
              >
                トップページへ戻る
              </Link>
            </div>
          ) : (
            /* Contact Form */
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div style={{ marginBottom: '32px' }}>
                <label
                  htmlFor="name"
                  style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#333',
                    marginBottom: '8px',
                  }}
                >
                  お名前
                  <span style={{ color: '#4dd9d9', marginLeft: '8px', fontSize: '12px' }}>必須</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="山田 太郎"
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    fontSize: '16px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    outline: 'none',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                    backgroundColor: '#fafafa',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#4dd9d9';
                    e.currentTarget.style.boxShadow = '0 0 0 4px rgba(77, 217, 217, 0.1)';
                    e.currentTarget.style.backgroundColor = 'white';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#e5e7eb';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.backgroundColor = '#fafafa';
                  }}
                />
              </div>

              {/* Email Field */}
              <div style={{ marginBottom: '32px' }}>
                <label
                  htmlFor="email"
                  style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#333',
                    marginBottom: '8px',
                  }}
                >
                  メールアドレス
                  <span style={{ color: '#4dd9d9', marginLeft: '8px', fontSize: '12px' }}>必須</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="example@email.com"
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    fontSize: '16px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    outline: 'none',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                    backgroundColor: '#fafafa',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#4dd9d9';
                    e.currentTarget.style.boxShadow = '0 0 0 4px rgba(77, 217, 217, 0.1)';
                    e.currentTarget.style.backgroundColor = 'white';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#e5e7eb';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.backgroundColor = '#fafafa';
                  }}
                />
              </div>

              {/* Message Field */}
              <div style={{ marginBottom: '40px' }}>
                <label
                  htmlFor="message"
                  style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#333',
                    marginBottom: '8px',
                  }}
                >
                  お問い合わせ内容
                  <span style={{ color: '#4dd9d9', marginLeft: '8px', fontSize: '12px' }}>必須</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="お問い合わせ内容をご記入ください"
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    fontSize: '16px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    outline: 'none',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                    backgroundColor: '#fafafa',
                    resize: 'vertical',
                    minHeight: '160px',
                    fontFamily: 'inherit',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#4dd9d9';
                    e.currentTarget.style.boxShadow = '0 0 0 4px rgba(77, 217, 217, 0.1)';
                    e.currentTarget.style.backgroundColor = 'white';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#e5e7eb';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.backgroundColor = '#fafafa';
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '20px',
                  fontSize: '18px',
                  fontWeight: '600',
                  color: 'white',
                  backgroundColor: isSubmitting ? '#9ca3af' : '#333',
                  border: 'none',
                  borderRadius: '50px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'border-radius 0.3s ease, background-color 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) e.currentTarget.style.borderRadius = '8px';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderRadius = '50px';
                }}
              >
                {isSubmitting ? (
                  <>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      border: '2px solid white',
                      borderTopColor: 'transparent',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite',
                    }} />
                    送信中...
                  </>
                ) : (
                  <>
                    送信する
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Spinner animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}} />

      <Footer />
    </main>
  );
}
