'use client';

import { useEffect } from 'react';
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function TermsPage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <main className="wrap-narrow">
        <section className="hero reveal" style={{ paddingBottom: '20px' }}>
          <div className="hero-aurora" />
          <div className="hero-grid" />
          <div className="hero-eyebrow">
            <span className="sep" />
            <span>Legal</span>
          </div>
          <h1 className="hero-title">
            Terms of <span className="serif">Service</span>
          </h1>
          <p className="hero-sub">
            Last updated: April 25, 2026
          </p>
        </section>

        <section className="legal-content">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using Vendor Pulse ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            Vendor Pulse provides code-aware monitoring for vendor APIs, helping teams track and respond to changelogs and breaking changes. The Service includes monitoring, notifications, ticketing, and related features.
          </p>

          <h2>3. Account Terms</h2>
          <p>To use the Service, you must:</p>
          <ul>
            <li>Be at least 18 years old or have parental consent</li>
            <li>Provide accurate and complete registration information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Notify us promptly of any unauthorized access</li>
          </ul>

          <h2>4. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Service for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to any systems</li>
            <li>Interfere with or disrupt the Service</li>
            <li>Reverse engineer or decompile the Service</li>
            <li>Use automated tools to scrape or extract data without permission</li>
          </ul>

          <h2>5. Intellectual Property</h2>
          <p>
            The Service, including all content, features, and functionality, is owned by Vendor Pulse and is protected by copyright, trademark, and other intellectual property laws. You retain ownership of any data you provide.
          </p>

          <h2>6. Payment Terms</h2>
          <p>
            Paid subscriptions are billed according to the plan selected. All fees are non-refundable except as required by law. We reserve the right to change pricing with 30 days' notice.
          </p>

          <h2>7. Data and Privacy</h2>
          <p>
            Your use of the Service is also governed by our Privacy Policy. We collect and process data as described in that policy, which you can review at <a href="/privacy">vendorpulse.io/privacy</a>.
          </p>

          <h2>8. Third-Party Services</h2>
          <p>
            The Service may include integrations with third-party services. We are not responsible for the content, accuracy, or opinions expressed in such services.
          </p>

          <h2>9. Disclaimers</h2>
          <p>
            THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT GUARANTEE THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
          </p>

          <h2>10. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Vendor Pulse shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Service.
          </p>

          <h2>11. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Vendor Pulse from any claims, damages, or expenses arising from your violation of these Terms or your use of the Service.
          </p>

          <h2>12. Termination</h2>
          <p>
            We may terminate or suspend your account at any time for any reason, with or without notice. Upon termination, your right to use the Service ceases immediately.
          </p>

          <h2>13. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. We will notify you of material changes via email or prominent notice on the Service. Continued use after changes constitutes acceptance.
          </p>

          <h2>14. Governing Law</h2>
          <p>
            These Terms are governed by the laws of Victoria, Australia, without regard to conflict of law principles. Any disputes shall be resolved in the courts of Melbourne, Australia.
          </p>

          <h2>15. Contact</h2>
          <p>
            For questions about these Terms, contact us at <a href="mailto:legal@vendorpulse.io">legal@vendorpulse.io</a>.
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}