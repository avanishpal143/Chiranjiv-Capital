import React from 'react';
import SEO from '../../components/SEO';
import AnimatedSection from '../../components/AnimatedSection';
import styles from './PolicyPage.module.css';

export default function InvestorGrievance() {
  return (
    <div className={styles.policyPage}>
      <SEO
        title="Investor Grievance Redressal Mechanism"
        description="Learn about the Investor Grievance Redressal Policy and Mechanism of Chiranjiv Capital Services Limited."
        canonical="/investor-grievance-policy"
      />
      <section className={styles.hero}>
        <div className="container">
          <AnimatedSection>
            <span className={styles.heroSubtitle}>Regulatory Policy</span>
            <h1 className={styles.heroTitle}>Investor Grievance Redressal</h1>
          </AnimatedSection>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <AnimatedSection className={styles.paperCard}>
            <div className={styles.docTitle}>Investor Grievance Redressal Mechanism</div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>1. Introduction</h2>
              <p className={styles.text}>
                1.1 Chiranjiv Capital Services Limited (hereinafter referred to as &ldquo;Company&rdquo; / &ldquo;CCSL&rdquo;) is registered with the Securities and Exchange Board of India (&ldquo;SEBI&rdquo;) under the SEBI (Merchant Bankers) Regulations, 1992.
              </p>
              <p className={styles.text}>
                1.2 This Investor Grievance Redressal Policy (&ldquo;Policy&rdquo;) is formulated in line with the Circular on the redressal of Investors&rsquo; grievances through the SEBI Complaints Redress System (SCORES) platform dated September 20, 2023, and the Master Circular for Online Dispute Resolution (ODR) platform in the Indian Securities Market dated December 28, 2023.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>2. Purpose</h2>
              <p className={styles.text}>
                2.1 CCSL believes in delivering prompt and efficient services. Effective handling of complaints and taking immediate corrective action is key to maintaining strong relationships and ensuring investor satisfaction. Addressing investor queries and complaints is a vital aspect of our operations. This Policy outlines grievance handling by the Company through a structured grievance redressal framework.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>3. Grievance Redressal Framework</h2>
              
              <h3 className={styles.text}><strong>Level 1: Approaching Company Directly</strong></h3>
              <p className={styles.text}>
                An investor can first raise their queries, grievances, and complaints directly to the Compliance Officer of the Company.
              </p>
              <div className={styles.contactBox}>
                <div className={styles.contactLabel}>Grievance Redressal Contact:</div>
                <div className={styles.contactRow}>
                  <div className={styles.contactCol}>
                    <strong>Designated Email:</strong> <a href="mailto:Investor@chiranjivcapital.com">Investor@chiranjivcapital.com</a>
                  </div>
                  <div className={styles.contactCol}>
                    <strong>Contact Number:</strong> <a href="tel:+919910613098">+91 99106 13098</a>
                  </div>
                </div>
              </div>
              <ul className={styles.list}>
                <li className={styles.listItem}>Once the investor lodges a complaint on the designated email, an email containing a ticket number and an acknowledgment of the grievance will be sent.</li>
                <li className={styles.listItem}>Investors can track the status of their grievance by sending an email with the ticket number to the designated email ID.</li>
                <li className={styles.listItem}>Our compliance team will investigate and respond to the investor via phone or email within 7 (seven) days of receipt.</li>
                <li className={styles.listItem}>In all cases, the Company shall endeavor to resolve or respond to the complaint within 21 calendar days of receipt.</li>
                <li className={styles.listItem}>On successful closure, a resolution email will be sent. If not satisfied, the investor may reopen the grievance using the same ticket number.</li>
              </ul>

              <h3 className={styles.text}><strong>Level 2: SCORES Platform (SEBI Mandate)</strong></h3>
              <p className={styles.text}>
                If the investor&rsquo;s issue remains unresolved at Level 1, or if they are not satisfied with the response:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>The investor may register their complaint against the Company on the SEBI SCORES website (<a href="https://scores.gov.in" target="_blank" rel="noopener noreferrer">www.scores.gov.in</a>) within one year of the occurrence of the cause of action.</li>
                <li className={styles.listItem}>Upon receiving complaints through SCORES, the Company shall upload an Action Taken Report (ATR) on the platform within 21 days of receipt. The investor will be kept informed of the status.</li>
                <li className={styles.listItem}><strong>First Review:</strong> If unsatisfied with the resolution or if no ATR is filed within 21 days, the investor may within 15 calendar days opt for a review of the complaint by SEBI-appointed Designated Bodies (DB). The Company shall fully cooperate with the DB.</li>
                <li className={styles.listItem}><strong>Second Review:</strong> If unsatisfied with the DB resolution, or if the DB does not submit its report within 10 calendar days, SEBI may take cognizance and undertake a review directly.</li>
              </ul>

              <h3 className={styles.text}><strong>Level 3: Online Dispute Resolution (ODR) Framework</strong></h3>
              <p className={styles.text}>
                If SCORES redressal is not satisfactory or in cases requiring adjudication of questions of law or fact, investors may seek remedies through the Online Dispute Resolution (ODR) mechanism in the securities market:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>The dispute resolution through the ODR Portal can be initiated after giving at least 15 (fifteen) calendar days notice to the Company for resolution.</li>
                <li className={styles.listItem}>Initiation must be within the applicable law of limitation (reckoned from the date when the issue arose or from the date of the last transaction).</li>
                <li className={styles.listItem}>No ODR is permitted if the matter is already pending before any court, arbitral process, or consumer forum.</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>4. Review of the Policy</h2>
              <p className={styles.text}>
                This Policy will be reviewed periodically by the governing body of the Company in light of changes in the regulatory framework or for business or operational reasons. Any change in the Policy shall be made in writing and hosted on the Company&rsquo;s website.
              </p>
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
