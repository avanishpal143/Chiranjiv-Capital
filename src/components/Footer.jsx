import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Phone, Mail, MapPin, ArrowRight } from './Icons';
import { COMPANY } from '../data/content';
import styles from './Footer.module.css';

const FOOTER_LINKS = {
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Leadership', to: '/leadership' },
    { label: 'Clientele', to: '/clientele' },
    { label: 'Contact Us', to: '/contact' },
  ],
  Services: [
    { label: 'IPO & Fund Raising', to: '/services#ipo-fundraising' },
    { label: 'M&A Due Diligence', to: '/services#ma-due-diligence' },
    { label: 'Capital Market Services', to: '/services#capital-market-services' },
    { label: 'Transaction Advisory', to: '/services#transaction-advisory' },
    { label: 'Financial Structuring', to: '/services#project-financial-structuring' },
    { label: 'Compliance Advisory', to: '/services#compliance-regulatory' },
  ],
  'Regulatory & Policies': [
    { label: 'Mandate Acceptance Criteria', to: '/mandate-acceptance-criteria' },
    { label: 'Investor Grievance Policy', to: '/investor-grievance-policy' },
    { label: 'Code of Ethics', to: '/code-of-ethics' },
    { label: 'Data Backup Policy', to: '/data-backup-policy' },
    { label: 'Employee Investment Policy', to: '/employee-investment-policy' },
  ],
  'Quick Links': [
    { label: 'Book Consultation', to: '/contact' },
    { label: 'Our Process', to: '/#process' },
    { label: 'Why Choose Us', to: '/#why-us' },
    { label: 'Registration Details', to: '/about#registration' },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Pre-footer CTA strip */}
      <div className={styles.ctaStrip}>
        <div className={styles.ctaInner}>
          <div className={styles.ctaText}>
            <h3 className={styles.ctaTitle}>Ready to take the next step?</h3>
            <p className={styles.ctaDesc}>
              Speak with our senior advisors about your capital requirements.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link to="/contact" className="btn btn-gold btn-lg">
              Schedule Consultation
              <ArrowRight size={16} />
            </Link>
            <a href={`tel:${COMPANY.phone.replace(/[^0-9+]/g, '')}`} className="btn btn-outline-white btn-lg">
              Call Us Now
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Brand column */}
            <div className={styles.brandCol}>
              <Logo variant="light" size="md" />
              <p className={styles.brandDesc}>
                A Merchant Banker providing comprehensive capital market advisory,
                IPO management, M&A due diligence, and compliance services to growing businesses
                across India.
              </p>
              <div className={styles.sebiTag}>
                <span className={styles.sebiDot} />
                Reg. No. {COMPANY.sebiReg}
              </div>
              <div className={styles.contactList}>
                <a href={`tel:${COMPANY.phone.replace(/[^0-9+]/g, '')}`} className={styles.contactItem}>
                  <Phone size={14} />
                  Ph: {COMPANY.phone}
                </a>
                <a href={`tel:${COMPANY.mobile.replace(/[^0-9+]/g, '')}`} className={styles.contactItem}>
                  <Phone size={14} />
                  Mob: {COMPANY.mobile}
                </a>
                <a href={`mailto:${COMPANY.email}`} className={styles.contactItem}>
                  <Mail size={14} />
                  {COMPANY.email}
                </a>
                <div className={styles.contactItem}>
                  <MapPin size={14} style={{ flexShrink: 0, marginTop: 2 }} />
                  <span>
                    {COMPANY.address.line1}, {COMPANY.address.line2},<br />
                    {COMPANY.address.city} – {COMPANY.address.pin}
                  </span>
                </div>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(FOOTER_LINKS).map(([group, links]) => (
              <div key={group} className={styles.linkCol}>
                <h4 className={styles.colTitle}>{group}</h4>
                <ul className={styles.linkList}>
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className={styles.footerLink}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>
            © {year} {COMPANY.name}. All rights reserved.
          </p>
          <p className={styles.disclaimer}>
            Merchant Banker · CIN: {COMPANY.cin} · Investments are subject to market risks.
          </p>
          <div className={styles.bottomLinks}>
            <Link to="/about" className={styles.bottomLink}>Privacy Policy</Link>
            <span className={styles.bottomSep} />
            <Link to="/about" className={styles.bottomLink}>Terms of Use</Link>
            <span className={styles.bottomSep} />
            <Link to="/about" className={styles.bottomLink}>Disclosures</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
