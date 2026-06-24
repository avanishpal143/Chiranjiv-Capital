import React from 'react';
import SEO from '../../components/SEO';
import AnimatedSection from '../../components/AnimatedSection';
import styles from './PolicyPage.module.css';

export default function DataBackupPolicy() {
  return (
    <div className={styles.policyPage}>
      <SEO
        title="Data Backup, Storage &amp; Security Policy"
        description="Read the Data Backup, Storage, Security Policy and Chinese Wall Policy of Chiranjiv Capital Services Limited."
        canonical="/data-backup-policy"
      />
      <section className={styles.hero}>
        <div className="container">
          <AnimatedSection>
            <span className={styles.heroSubtitle}>Security Policy</span>
            <h1 className={styles.heroTitle}>Data Backup &amp; Chinese Wall Policy</h1>
          </AnimatedSection>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <AnimatedSection className={styles.paperCard}>
            <div className={styles.docTitle}>Data Backup, Storage and Security Policy</div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>A. Applicability of the Policy</h2>
              <p className={styles.introText}>
                This Data Backup, Storage and Security Policy (&ldquo;Policy&rdquo;) is adopted by Chiranjiv Capital Services Limited (&ldquo;Company&rdquo; / &ldquo;CCSL&rdquo;) and shall be applicable to every person associated with the Company in the business of merchant banking, including the Board of Directors, Key Managerial Personnel, employees, and all staff working in the Company.
              </p>
              <p className={styles.text}>The purpose of this Policy is:</p>
              <ul className={styles.list}>
                <li className={styles.listItem}>To ensure that the Company securely stores all data and information and can retrieve it when needed.</li>
                <li className={styles.listItem}>To protect Company&rsquo;s data by ensuring that it is handled and stored in a secure manner.</li>
                <li className={styles.listItem}>To define the procedures and responsibilities for backing up Company&rsquo;s data to ensure its availability in case of data loss.</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>B. The Policy</h2>
              <h3 className={styles.text}><strong>a) Company&rsquo;s Data/Information Storage and Security</strong></h3>
              <ol className={styles.list} style={{ listStyleType: 'decimal' }}>
                <li className={styles.listItem}>All employees must ensure data is stored securely based on format and security classification. This protects against physical damage, degradation, loss, unauthorized access, and hacking.</li>
                <li className={styles.listItem}>Client information and Company data must not be stored outside corporate systems (such as on PC hard drives, CDs, or personal media) unless authorized temporarily.</li>
                <li className={styles.listItem}>All critical business data must be stored in two separate physical locations to protect against physical threats such as fire, flooding, magnetic interference, and extreme environmental conditions.</li>
                <li className={styles.listItem}>Data no longer needed for operations and not required to be archived will be destroyed in a timely and secure manner.</li>
                <li className={styles.listItem}>Physical access to information storage areas (file cabinets, server rooms) must be restricted and locked.</li>
                <li className={styles.listItem}>Digital systems must be password-protected or encrypted, and access credentials must be updated periodically.</li>
                <li className={styles.listItem}>Software installations on Company devices must be pre-approved in writing by the IT department.</li>
                <li className={styles.listItem}>Periodic audits and reviews will be conducted to identify and rectify security vulnerabilities.</li>
              </ol>
            </div>

            <div className={styles.section}>
              <h3 className={styles.text}><strong>b) Data Backup Guidelines</strong></h3>
              <p className={styles.text}>
                Backup and maintenance of data are critical to the viability and operations of the Company. The backup aspects of our IT infrastructure are detailed below:
              </p>

              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th className={styles.th} style={{ width: '25%' }}>Aspect</th>
                      <th className={styles.th}>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={styles.tr}>
                      <td className={styles.td}><strong>Backup Schedule</strong></td>
                      <td className={styles.td}>Regular schedules must be maintained. Full backups are performed weekly, with incremental backups occurring daily. All backups are encrypted and stored in a secure, off-site location.</td>
                    </tr>
                    <tr className={styles.tr}>
                      <td className={styles.td}><strong>Roles &amp; Responsibilities</strong></td>
                      <td className={styles.td}>The IT department is responsible for executing backups as scheduled. The department head ensures procedures are followed and reviewed.</td>
                    </tr>
                    <tr className={styles.tr}>
                      <td className={styles.td}><strong>3-2-1 Backup Rule</strong></td>
                      <td className={styles.td}>
                        At least 3 copies of data (original production and 2 backups).<br />
                        At least 2 different types of media (local disk, tape, or external disk).<br />
                        At least 1 backup copy stored off-site (cloud or remote site).
                      </td>
                    </tr>
                    <tr className={styles.tr}>
                      <td className={styles.td}><strong>Backup Procedures</strong></td>
                      <td className={styles.td}>IT must use secure hardware/software. Data includes investor information, financial records, and operational data.</td>
                    </tr>
                    <tr className={styles.tr}>
                      <td className={styles.td}><strong>Data Retention</strong></td>
                      <td className={styles.td}>Retain all backup data for a minimum of five (5) years, or longer as required by law or industry regulations.</td>
                    </tr>
                    <tr className={styles.tr}>
                      <td className={styles.td}><strong>Disaster Recovery</strong></td>
                      <td className={styles.td}>In the event of data loss, the IT department shall follow the disaster recovery plan to restore data from the most recent backup copy.</td>
                    </tr>
                    <tr className={styles.tr}>
                      <td className={styles.td}><strong>Review &amp; Testing</strong></td>
                      <td className={styles.td}>Annual review of policy and procedures. Quarterly testing of backup and restoration procedures to ensure effectiveness.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className={styles.sectionDividerLine} style={{ margin: 'var(--space-10) auto' }} />

            <div className={styles.section}>
              <div className={styles.docTitle}>Chinese Wall Policy</div>
              <p className={styles.introText}>
                The Company has adopted a Chinese Wall Policy to ensure strict segregation of sensitive information and to prevent any conflict of interest in the course of its Merchant Banking and related business activities.
              </p>
              <h3 className={styles.text}><strong>Key Provisions:</strong></h3>
              <ol className={styles.list} style={{ listStyleType: 'decimal' }}>
                <li className={styles.listItem}>
                  <strong>Information Barriers:</strong> Distinct functional areas are created to separate advisory, capital raising, and research activities, ensuring that Unpublished Price Sensitive Information (UPSI) does not flow across divisions.
                </li>
                <li className={styles.listItem}>
                  <strong>Access Control:</strong> Only authorized personnel on a &ldquo;need-to-know&rdquo; basis are permitted to access sensitive information, with role-based restrictions and monitoring in place.
                </li>
                <li className={styles.listItem}>
                  <strong>Physical &amp; Electronic Safeguards:</strong> Separate workspaces, restricted IT permissions, and secure communication channels are maintained to uphold confidentiality.
                </li>
                <li className={styles.listItem}>
                  <strong>Compliance Oversight:</strong> The Compliance Officer monitors adherence to the Chinese Wall framework and records all instances where wall-crossing is permitted under regulatory approval.
                </li>
                <li className={styles.listItem}>
                  <strong>Fair Market Conduct:</strong> The Policy ensures that decisions regarding advisory, underwriting, or investment services are taken independently and free from influence of other business functions.
                </li>
              </ol>
              <p className={styles.text} style={{ fontStyle: 'italic' }}>
                Through this mechanism, the Company ensures confidentiality, independence, and regulatory compliance, thereby protecting client interests and maintaining the integrity of capital markets. This policy is reviewed on an annual basis.
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
