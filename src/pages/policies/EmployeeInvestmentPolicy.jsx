import React from 'react';
import SEO from '../../components/SEO';
import AnimatedSection from '../../components/AnimatedSection';
import styles from './PolicyPage.module.css';

export default function EmployeeInvestmentPolicy() {
  return (
    <div className={styles.policyPage}>
      <SEO
        title="Employee Investment Policy"
        description="Read the Employees' Personal Investment Policy of Chiranjiv Capital Services Limited."
        canonical="/employee-investment-policy"
      />
      <section className={styles.hero}>
        <div className="container">
          <AnimatedSection>
            <span className={styles.heroSubtitle}>Internal Policy</span>
            <h1 className={styles.heroTitle}>Employee Investment Policy</h1>
          </AnimatedSection>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <AnimatedSection className={styles.paperCard}>
            <div className={styles.docTitle}>Employees&rsquo; Personal Investment Policy</div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Introduction</h2>
              <p className={styles.introText}>
                The purpose of this policy is to set forth prudent standards to be followed by all employees when conducting their Personal Investment Transactions. Accordingly, this policy provides standards and specifies investment practices that are either prohibited or subject to special constraints. Any exceptions require prior approval of the respective Unit Head of the Company and the Compliance Officer.
              </p>
              <p className={styles.text}>
                Pursuant to SEBI (Prohibition of Insider Trading Regulations), 2015, &ldquo;Insiders&rdquo; are defined as any person who is, or was, connected with a company or is deemed to have been connected with the company and who is reasonably expected to have access to unpublished price sensitive information (&ldquo;UPSI&rdquo;) in respect of securities of a company, or who has received or has had access to such unpublished price.
              </p>
              <p className={styles.text}>
                Chiranjiv Capital Services Limited, by virtue of the services provided, is deemed to be a &ldquo;connected person&rdquo; and is in possession of unpublished price sensitive information. Hence, employees and officials engaged in providing services on behalf of the Company are covered under this definition.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Objective of the Policy</h2>
              <p className={styles.text}>
                The purpose of this Policy is to prevent the misuse of UPSI and to establish guidelines and approval requirements for employees&rsquo; personal investments. Employees may never engage in personal transactions which conflict, or appear to conflict, with the interest of the Company or its clients.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Policy Guidelines</h2>
              <ul className={styles.list}>
                <li className={styles.listItem}>Employees and officials may purchase and sell investments for their personal or family accounts as long as the transactions are consistent with applicable laws, regulations, and this Policy.</li>
                <li className={styles.listItem}>All investment decisions must be based solely upon publicly available information. Personal transactions should focus on long-term investments rather than short-term speculation in the capital market.</li>
                <li className={styles.listItem}>Company employees will not use their position to obtain favored treatment to buy or sell securities for their own or family accounts.</li>
                <li className={styles.listItem}>No employee may purchase or sell a security on the basis of knowledge of UPSI acquired while providing services.</li>
                <li className={styles.listItem}>Employees who have knowledge that the Company is dealing or proposes to deal with a company must refrain from conducting personal transactions in such security.</li>
              </ul>
              <p className={styles.text}>
                <strong>Scope of Transactions:</strong> Personal investment transactions apply to purchase or sale of securities for the employee&rsquo;s own account (permanent, contractual, temporary), accounts of immediate family/dependents, accounts for whom the employee provides investment discretion/advice, or any legal entity in which they have a beneficial interest.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Exemptions Under This Policy</h2>
              <p className={styles.text}>The following transactions are exempt from pre-clearance constraints:</p>
              <ul className={styles.list}>
                <li className={styles.listItem}>Savings deposits, current deposits, notice deposits, time deposits, and mutual funds.</li>
                <li className={styles.listItem}>Investments other than in securities, provided they do not conflict with the interests of the Company or any of its clients.</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Necessary Reporting &amp; Pre-Clearance</h2>
              <ol className={styles.list} style={{ listStyleType: 'decimal' }}>
                <li className={styles.listItem}><strong>Pre-clearance:</strong> All personal trading by employees in securities shall be subject to pre-clearance by the Compliance Officer.</li>
                <li className={styles.listItem}><strong>Declarations:</strong> Prior to approving any trades, the Compliance Officer is entitled to seek declarations that the applicant is not in possession of any unpublished price sensitive information (UPSI).</li>
                <li className={styles.listItem}><strong>Annual Certification:</strong> Employees must certify on an annual basis that they have complied with the policy and disclosed all personal securities transactions to the Compliance Officer.</li>
              </ol>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Policy Enforcement &amp; Monitoring</h2>
              <p className={styles.text}>
                Misuse of confidential information or violation of securities laws may subject individuals to severe civil and criminal penalties under SEBI regulations. Failure to comply with these policies represents grounds for disciplinary action, including termination of employment.
              </p>
              <p className={styles.text}>
                The Compliance Officer will actively monitor the personal investment activities of employees, review periodic reports, and report any deviations.
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
