import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <motion.p
          className="footer-brand"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="brand-letter">A</span>dvance{" "}
          <span className="brand-letter">B</span>eyond{" "}
          <span className="brand-letter">I</span>magination
        </motion.p>

        <motion.p
          className="footer-copyright"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          © 2025 ABI GROUP. All rights reserved.
        </motion.p>

        {/* Privacy Policy */}
        <motion.div
          className="privacy-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="privacy-container">
            <h3 className="privacy-title">Privacy Policy</h3>
            
            <div className="privacy-content">
              <p>
                1. ABI GROUP ("we," "us," or "our") is the data controller responsible for your personal information collected through this website. When you use our contact form, we collect: (a) your name, (b) email address, (c) message content, and (d) timestamp of submission. We do not use cookies or tracking technologies on this website.
              </p>
              <p>
                2. We process your personal data based on: (1) Legitimate interests - to respond to your inquiries and provide requested services, (2) Consent - which you provide by voluntarily submitting the contact form, (3) Pre-contractual measures - when you inquire about our services. Your data is used exclusively to: (1) respond to your inquiry, (2) provide information about our services if requested, (3) maintain business records, and (4) comply with legal obligations. We do not sell, rent, or share your personal information with third parties for marketing purposes.
              </p>
              <p>
                3. Form submissions are transmitted via secure HTTPS protocol to Google's infrastructure and delivered to our business email. We implement appropriate technical and organizational security measures. However, no method of electronic transmission or storage is 100% secure. We use Google Apps Script to process contact form submissions. Google's privacy policy applies to their services: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>
              </p>
              <p>
                4. We retain your information for as long as necessary to fulfill the purposes described in this policy, typically no longer than 3 years from last contact, unless a longer retention period is required by law. Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers.
              </p>
              <p>
                5. Under applicable data protection laws, you have the right to: (1) access your personal data, (2) rectify inaccurate data, (3) request erasure ("right to be forgotten"), (4) restrict processing, (5) data portability, (6) object to processing, (7) withdraw consent at any time, and (8) lodge a complaint with a supervisory authority. Our services are not directed to individuals under 16 years of age. We do not knowingly collect personal information from children under 16.
              </p>
              <p>
                6. We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. For any questions about this privacy policy or to exercise your rights, please contact us at: contact@abigroup.ai
              </p>
            </div>
            
            <p className="privacy-date">Last updated: January 30, 2025</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;