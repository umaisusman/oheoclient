import React, { useEffect } from 'react';
import './privacy.css';
const PrivacyPolicy = () => {
  useEffect(() => {
    // Add animation classes after component mounts
    const elements = document.querySelectorAll('.animate-in');
    elements.forEach(element => {
      element.classList.add('visible');
    });
  }, []);

  return (
    <div className="privacy-content">
      <div className="animate-in">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-subtitle">Last updated: January 1, 2023</p>
      </div>

      <div className="privacy-section animate-in delay-100">
        <h2>Our Commitment to Privacy</h2>
        <p>Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, transfer, and store your information when you use our products, services, apps, software, websites, and content.</p>
      </div>

      <div className="privacy-section animate-in delay-200">
        <h2>Information We Collect</h2>
        <p>We may collect various types of information, including:</p>
        <ul>
          <li>Contact information, such as your name, address, telephone number, and email address</li>
          <li>Payment information, such as your credit card details, billing address, and other financial data</li>
          <li>Demographic information, such as your age, gender, and preferences</li>
          <li>Device information, such as your hardware model, operating system, and unique device identifiers</li>
          <li>Location information, including precise location when you enable location services</li>
          <li>Usage information, such as information about how you use our services and interact with content</li>
        </ul>
      </div>

      <div className="privacy-section animate-in delay-300">
        <h2>How We Use Your Information</h2>
        <p>We use your personal information to:</p>
        <ul>
          <li>Provide, maintain, and improve our products and services</li>
          <li>Process transactions and send related information</li>
          <li>Send administrative messages, such as confirmations, updates, and security alerts</li>
          <li>Respond to your comments, questions, and requests</li>
          <li>Personalize your experience and deliver content tailored to your interests</li>
          <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
          <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
          <li>Comply with legal obligations</li>
        </ul>
      </div>

      <div className="privacy-section animate-in delay-300">
        <h2>Sharing Your Information</h2>
        <p>We may share your personal information with:</p>
        <ul>
          <li>Service providers that perform services on our behalf</li>
          <li>Partners with whom we offer co-branded services or products</li>
          <li>Law enforcement or other third parties if required by law or if necessary to protect our rights</li>
          <li>Other parties in connection with a corporate transaction, such as a merger, sale of company assets, or acquisition</li>
          <li>With your consent or at your direction</li>
        </ul>
      </div>

      <div className="privacy-section animate-in delay-300">
        <h2>Your Choices</h2>
        <p>You have several choices regarding the use of your information:</p>
        <ul>
          <li>Account Information: You can update or correct your account information at any time</li>
          <li>Marketing Communications: You can opt out of receiving promotional emails by following the instructions in those emails</li>
          <li>Cookies: Most web browsers are set to accept cookies by default. You can set your browser to remove or reject cookies</li>
          <li>Location Information: You can control whether your device shares location information through your device settings</li>
        </ul>
      </div>

      <div className="privacy-section animate-in delay-300">
        <h2>Data Security</h2>
        <p>We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no security system is impenetrable, and we cannot guarantee the security of our systems.</p>
      </div>

      <div className="privacy-section animate-in delay-300">
        <h2>Children's Privacy</h2>
        <p>Our services are not intended for children under the age of 13, and we do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will promptly delete that information.</p>
      </div>

      <div className="privacy-section animate-in delay-300">
        <h2>International Data Transfers</h2>
        <p>We may transfer your personal information to countries other than the one in which you live. We rely on various legal mechanisms, such as standard contractual clauses, to ensure that your rights and protections travel with your data.</p>
      </div>

      <div className="privacy-section animate-in delay-300">
        <h2>Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
      </div>

      <div className="privacy-section animate-in delay-300">
        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <p>Company Name<br />
        123 Main Street<br />
        City, State 12345<br />
        privacy@example.com</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
