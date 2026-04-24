'use client';

import { useEffect } from 'react';
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
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
            Privacy <span className="serif">Policy</span>
          </h1>
          <p className="hero-sub">
            Last updated: April 25, 2026
          </p>
        </section>

        <section className="legal-content">
          <h2>1. Introduction</h2>
          <p>
            Vendor Pulse ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.
          </p>

          <h2>2. Information We Collect</h2>
          
          <h3>2.1 Information You Provide</h3>
          <ul>
            <li><strong>Account Information:</strong> Name, email address, company name, and authentication credentials</li>
            <li><strong>Payment Information:</strong> Billing address and payment method details (processed by third-party payment providers)</li>
            <li><strong>User Content:</strong> Data you connect to the Service, including repository configurations and integration settings</li>
          </ul>

          <h3>2.2 Information Collected Automatically</h3>
          <ul>
            <li><strong>Usage Data:</strong> Features used, actions taken, and interaction patterns</li>
            <li><strong>Log Data:</strong> IP address, browser type, operating system, and referring URLs</li>
            <li><strong>Device Information:</strong> Device identifiers and device characteristics</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Provide, maintain, and improve the Service</li>
            <li>Process transactions and send related information</li>
            <li>Send technical notices, updates, and security alerts</li>
            <li>Respond to your comments, questions, and customer service requests</li>
            <li>Monitor and analyze usage patterns to improve user experience</li>
            <li>Detect, prevent, and address technical issues</li>
          </ul>

          <h2>4. Data Sharing and Disclosure</h2>
          <p>We do not sell your personal information. We may share data with:</p>
          <ul>
            <li><strong>Service Providers:</strong> Third parties that process data on our behalf (hosting, analytics, payment processing)</li>
            <li><strong>Integrations:</strong> Third-party services you connect (Jira, Slack, GitHub) per their respective privacy policies</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
          </ul>

          <h2>5. Data Security</h2>
          <p>
            We implement industry-standard security measures including encryption at rest and in transit, access controls, and regular security audits. However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We retain your information for as long as your account is active or as needed to provide services. You may request deletion of your data at any time by contacting support@vendorpulse.io.
          </p>

          <h2>7. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Delete your data</li>
            <li>Object to or restrict certain processing</li>
            <li>Data portability</li>
            <li>Withdraw consent</li>
          </ul>
          <p>
            To exercise these rights, contact us at <a href="mailto:privacy@vendorpulse.io">privacy@vendorpulse.io</a>.
          </p>

          <h2>8. Cookies and Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to operate our Service. Essential cookies are required for core functionality. Optional cookies are used for analytics and preferences.
          </p>

          <h2>9. Third-Party Services</h2>
          <p>
            Our Service includes links to third-party websites and services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
          </p>

          <h2>10. Children's Privacy</h2>
          <p>
            The Service is not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.
          </p>

          <h2>11. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries outside your jurisdiction. We ensure appropriate safeguards for international data transfers.
          </p>

          <h2>12. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. We will notify you of material changes via email or prominent notice on our Service.
          </p>

          <h2>13. Contact Us</h2>
          <p>
            For privacy-related questions or concerns, contact our Data Protection Officer at <a href="mailto:privacy@vendorpulse.io">privacy@vendorpulse.io</a>.
          </p>
          <p>
            Vendor Pulse<br />
            Melbourne, Australia<br />
            <a href="mailto:support@vendorpulse.io">support@vendorpulse.io</a>
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}