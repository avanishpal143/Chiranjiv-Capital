import React from 'react';
import SEO from '../../components/SEO';
import AnimatedSection from '../../components/AnimatedSection';
import styles from './PolicyPage.module.css';

export default function MandateAcceptance() {
  return (
    <div className={styles.policyPage}>
      <SEO
        title="Mandate Acceptance Criteria"
        description="Read the Merchant Banking Mandate Acceptance Criteria of Chiranjiv Capital Services Limited."
        canonical="/mandate-acceptance-criteria"
      />
      <section className={styles.hero}>
        <div className="container">
          <AnimatedSection>
            <span className={styles.heroSubtitle}>CCSL Policy</span>
            <h1 className={styles.heroTitle}>Mandate Acceptance Criteria</h1>
          </AnimatedSection>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <AnimatedSection className={styles.paperCard}>
            <div className={styles.docTitle}>Merchant Banking Mandate Acceptance Criteria</div>
            
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Introduction</h2>
              <p className={styles.introText}>
                Chiranjiv Capital Services Limited (&ldquo;CCSL&rdquo;) aims to support businesses in navigating the complexities of the capital markets and achieving their funding objectives. As the Lead Manager to an issue, we become primarily responsible for the pricing, financing, and distribution of the securities. We have a greater responsibility towards Investors, SEBI, and the Issuer company.
              </p>
              <p className={styles.text}>
                Issue Management generally involves the following, as per the Securities and Exchange Board of India (Issue of Capital and Disclosure Requirements) Regulations, 2018 (&ldquo;SEBI ICDR Regulations&rdquo;):
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>Public issues</li>
                <li className={styles.listItem}>Rights issues made by listed companies, where the aggregate value of the issue is Rs. 50 crore or more</li>
                <li className={styles.listItem}>Further public offer by a listed issuer</li>
                <li className={styles.listItem}>Preferential issue by a listed issuer</li>
                <li className={styles.listItem}>Qualified institutions placement by a listed issuer</li>
                <li className={styles.listItem}>Initial public offer of Indian depository receipts</li>
                <li className={styles.listItem}>Rights issue of Indian depository receipts; an initial public offer by a small and medium enterprise</li>
                <li className={styles.listItem}>Listing on the Innovators Growth Platform through an issue or without an issue</li>
                <li className={styles.listItem}>Bonus issue by a listed issuer</li>
              </ul>
              <p className={styles.text}>
                The process for above issues is governed by SEBI-defined eligibility norms, compliance guidelines, engagement of intermediaries, and processes and procedures which must be followed. Accordingly, the Lead Manager has to carry out an exhaustive review of the following matters before accepting or entering into any Mandate for and on its behalf:
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>I. Issuer Eligibility Criteria</h2>
              <p className={styles.text}>
                We evaluate whether the issuer meets the eligibility requirements w.r.t. the below as laid down under SEBI ICDR Regulations or by the designated Stock Exchanges:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}><strong>Issuer&rsquo;s Business Models &amp; Plans</strong> &ndash; High feasibility and clear operational roadmap.</li>
                <li className={styles.listItem}><strong>Corporate Governance Practices</strong> &ndash; Ensuring decisions and actions follow accountability, transparency, fairness, and responsibility.</li>
                <li className={styles.listItem}><strong>Track Record</strong> &ndash; Reviewing operations, growth potential, net worth, tangible assets, operating profit, paid-up capital, and financial history.</li>
                <li className={styles.listItem}><strong>Legal Due Diligence Report</strong> &ndash; Complete compliance with all legal and regulatory requirements.</li>
              </ul>
              
              <h3 className={styles.text}><strong>Ineligible Entities as Defined by SEBI:</strong></h3>
              <p className={styles.text}>
                An entity shall not be eligible to raise funds via the capital market if:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>The issuer, promoters, promoter group, directors, or selling shareholders are debarred from accessing the capital market by SEBI.</li>
                <li className={styles.listItem}>Any promoter or director of the issuer is a promoter or director of another company debarred by SEBI.</li>
                <li className={styles.listItem}>The issuer or any of its promoters or directors is a wilful defaulter or fraudulent borrower.</li>
                <li className={styles.listItem}>Any of the promoters or directors is a fugitive economic offender.</li>
                <li className={styles.listItem}>There are outstanding convertible securities or rights entitling any person to receive equity shares of the issuer.</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>II. Debt Listing Requirements</h2>
              <p className={styles.text}>
                In addition to listing criteria prescribed under SEBI ICDR Regulations, some further requirements apply in case of Debt Listings by Issuer companies:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>Issuer must not be in default of payment of interest or repayment of principal amount in respect of debt instruments issued to the public for a period of more than six months.</li>
                <li className={styles.listItem}>Obtaining a credit rating from at least one credit rating agency.</li>
                <li className={styles.listItem}>Appointment of at least one Debenture Trustee in accordance with the Companies Act, 2013 and SEBI Regulations.</li>
                <li className={styles.listItem}>Creation of a Debenture Redemption Reserve (DRR).</li>
                <li className={styles.listItem}>Charge or security creation on assets in respect of secured debt instruments.</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>III. CCSL Role and Responsibilities as Lead Manager</h2>
              <h3 className={styles.text}><strong>A. Due Diligence</strong></h3>
              <p className={styles.text}>
                To ascertain eligibility of the issuer, CCSL carries out detailed due diligence as defined by SEBI. The Code of Conduct under SEBI Regulations requires us to exercise due diligence, ensure proper care, and exercise independent professional judgment, ensuring true and adequate disclosures are made to investors in a timely manner.
              </p>
              <p className={styles.text}>
                Legal counsels and statutory auditors are involved in carrying out documentary due diligence and providing key certifications (such as comfort letters) for financial disclosures.
              </p>

              <h3 className={styles.text}><strong>B. Scope of Work</strong></h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>Restructuring of Pre-IPO Capital</li>
                <li className={styles.listItem}>Due Diligence &amp; Pre-IPO preparation</li>
                <li className={styles.listItem}>Dematerialisation of Shares</li>
                <li className={styles.listItem}>Valuation &amp; Issue Pricing</li>
                <li className={styles.listItem}>Preparation and filing of Public Issue Offer Document (Draft &amp; Prospectus)</li>
                <li className={styles.listItem}>Appointment of Intermediaries</li>
                <li className={styles.listItem}>Filing and clearance of Draft Offer Document with SEBI/SE and Prospectus with ROC</li>
                <li className={styles.listItem}>IPO Launch, Management, Closure, and Refunds/Allotments process</li>
                <li className={styles.listItem}>Listing &amp; Market Making</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>IV. Limitations and Conditions</h2>
              <p className={styles.text}>
                During the course of engagement, the Lead Manager will not undertake:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>Regulatory &amp; secretarial activities in relation to the IPO.</li>
                <li className={styles.listItem}>Legal advice, opinions, or representation in any form.</li>
                <li className={styles.listItem}>Accounting and taxation matters, opinions, or representation in any form.</li>
                <li className={styles.listItem}>Any third-party certification services outside the merchant banking scope.</li>
              </ul>
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
