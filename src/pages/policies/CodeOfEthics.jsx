import React from 'react';
import SEO from '../../components/SEO';
import AnimatedSection from '../../components/AnimatedSection';
import styles from './PolicyPage.module.css';

export default function CodeOfEthics() {
  return (
    <div className={styles.policyPage}>
      <SEO
        title="Code of Ethics"
        description="Read the Merchant Banking Code of Ethics of Chiranjiv Capital Services Limited."
        canonical="/code-of-ethics"
      />
      <section className={styles.hero}>
        <div className="container">
          <AnimatedSection>
            <span className={styles.heroSubtitle}>Conduct Policy</span>
            <h1 className={styles.heroTitle}>Merchant Banking Code of Ethics</h1>
          </AnimatedSection>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <AnimatedSection className={styles.paperCard}>
            <div className={styles.docTitle}>Merchant Banking Code of Ethics</div>

            <div className={styles.section}>
              <p className={styles.introText}>
                Chiranjiv Capital Services Limited has adopted this Code of Conduct for its Board of Directors and Management Personnel in compliance with Schedule III of the SEBI (Merchant Banking) Regulations and Section 166 of the Companies Act, 2013. The Code serves as a guiding framework for ethical conduct, governance, and fiduciary responsibility of directors and senior management.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Applicability</h2>
              <p className={styles.text}>
                The Code applies to all Executive Directors, Independent/Non-Executive Directors (to the extent permissible), and Management Personnel, including functional heads one level below the Executive Directors.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Principles</h2>
              <ol className={styles.list} style={{ listStyleType: 'decimal' }}>
                <li className={styles.listItem}>
                  <strong>Accountability &amp; Integrity:</strong> Directors and management must discharge their duties in good faith, exercise independent judgment, and act in the best interest of the Company and its stakeholders.
                </li>
                <li className={styles.listItem}>
                  <strong>Conflict of Interest:</strong> They must avoid situations that create actual or potential conflicts with the Company&rsquo;s interest and proactively disclose any unavoidable conflicts.
                </li>
                <li className={styles.listItem}>
                  <strong>Compliance:</strong> Full adherence to applicable laws, SEBI regulations, and internal policies is mandatory.
                </li>
                <li className={styles.listItem}>
                  <strong>Confidentiality:</strong> All unpublished price-sensitive information (UPSI), client data, and Company information must be kept strictly confidential and not misused.
                </li>
                <li className={styles.listItem}>
                  <strong>Investor Focus:</strong> Ensure fairness, transparency, and timely disclosures to investors, while upholding high standards of integrity in communication and conduct.
                </li>
                <li className={styles.listItem}>
                  <strong>Fair Practices:</strong> Directors and management must avoid insider trading, misrepresentation, or unfair competition, and must safeguard Company assets.
                </li>
                <li className={styles.listItem}>
                  <strong>Corporate Governance:</strong> Promote a culture of ethical decision-making, teamwork, non-discrimination, and accountability across the entire organization.
                </li>
              </ol>
            </div>

            <div className={styles.signatureArea}>
              <div className={styles.sigCompany}>For Chiranjiv Capital Services Limited</div>
              <div className={styles.sigName}>CS Sumit Bajaj</div>
              <div className={styles.sigTitle}>Director</div>
              <div className={styles.sigTitle}>DIN: 10815454</div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
