import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import AnimatedSection, { StaggerContainer } from '../components/AnimatedSection';
import { Icon } from '../components/Icons';
import { LEADERSHIP, KMP } from '../data/content';
import styles from './Leadership.module.css';

function PageHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} aria-hidden="true"/>
      <div className="container">
        <AnimatedSection className={styles.heroContent}>
          <span className="eyebrow eyebrow-white">The Team</span>
          <h1 className={styles.heroTitle}>A Team That<br/><span className={styles.heroGold}>Delivers Results</span></h1>
          <p className={styles.heroDesc}>
            Our team brings a combined 90+ years of capital markets experience.
            Senior professionals who have personally managed hundreds of transactions
            across India's most demanding market environments.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

function TeamMessage() {
  return (
    <section className={`section ${styles.messageSection}`}>
      <div className="container">
        <AnimatedSection className={styles.messageBox}>
          <span className="eyebrow">Message from Our Team</span>
          <h2 className={styles.messageTitle}>Our Commitment to Your Success</h2>
          <div className={styles.messageDivider}/>
          <blockquote className={styles.messageQuote}>
            "At Chiranjiv Capital, we provide world-class capital market expertise with a personal, boutique approach. We walk alongside you at every step of your growth journey."
          </blockquote>
          <p className={styles.messageText}>
            We invest deeply in understanding your business goals and compliance needs. We do not believe in one-size-fits-all advisory; every mandate is executed with senior commitment and institutional precision.
          </p>
          <p className={styles.messageSig}>— The Chiranjiv Capital Team</p>
        </AnimatedSection>
      </div>
    </section>
  );
}

function LeaderProfiles() {
  return (
    <section className={`section ${styles.profilesSection}`}>
      <div className="container">
        
        {/* Our Team Section */}
        <AnimatedSection className={styles.sectionHead}>
          <span className="eyebrow">Our Team</span>
          <h2 className="section-title">Board of Directors</h2>
          <p className="section-subtitle">
            Senior leadership driving our strategic vision and capital market transactions.
          </p>
        </AnimatedSection>

        <div className={styles.profilesList}>
          {LEADERSHIP.map((leader, i) => (
            <AnimatedSection key={leader.id} delay={i * 0.08} className={styles.profileCard}>
              <div className={styles.profileAvatarWrap}>
                {leader.photo ? (
                  <img src={leader.photo} alt={leader.name} className={styles.profilePhoto} />
                ) : (
                  <div className={styles.profileAvatar} style={{background:`linear-gradient(135deg,${leader.color},${leader.color}cc)`}}>
                    <span className={styles.profileInitials}>{leader.initials}</span>
                  </div>
                )}
              </div>
              <div className={styles.profileContent}>
                <div className={styles.profileHeader}>
                  <div className={styles.profileMeta}>
                    <h3 className={styles.profileName}>{leader.name}</h3>
                    <p className={styles.profileDesig}>{leader.designation}</p>
                  </div>
                  {leader.experience && (
                    <div className={styles.profileBadge}>
                      <Icon name="Award" size={12}/>{leader.experience}
                    </div>
                  )}
                </div>
                {leader.fullBio && <p className={styles.profileBio}>{leader.fullBio}</p>}
                
                {leader.expertise && leader.expertise.length > 0 && (
                  <div className={styles.profileSection}>
                    <h4 className={styles.profileSubTitle}>Areas of Expertise</h4>
                    <div className={styles.profileTags}>
                      {leader.expertise.map(e => (
                        <span key={e} className={styles.profileTag}>{e}</span>
                      ))}
                    </div>
                  </div>
                )}

                {leader.education && (
                  <div className={styles.profileSection}>
                    <h4 className={styles.profileSubTitle}>Education</h4>
                    <p className={styles.profileEdu}>{leader.education}</p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Section Divider */}
        <div className={styles.sectionDividerLine} />

        {/* KMP Section */}
        <AnimatedSection className={styles.sectionHead} style={{ marginTop: 'var(--space-16)' }}>
          <span className="eyebrow">KMP</span>
          <h2 className="section-title">Key Managerial Personnel</h2>
          <p className="section-subtitle">
            Qualified professionals ensuring execution and regulatory compliance across all mandates.
          </p>
        </AnimatedSection>

        <div className={styles.profilesList}>
          {KMP.map((kmp, i) => (
            <AnimatedSection key={kmp.id} delay={i * 0.08} className={styles.profileCard}>
              <div className={styles.profileContent}>
                <div className={styles.profileHeader}>
                  <div className={styles.profileMeta}>
                    <h3 className={styles.profileName}>{kmp.name}</h3>
                    <p className={styles.profileDesig}>{kmp.designation}</p>
                  </div>
                  {kmp.experience && (
                    <div className={styles.profileBadge}>
                      <Icon name="Award" size={12}/>{kmp.experience}
                    </div>
                  )}
                </div>
                {kmp.fullBio && <p className={styles.profileBio}>{kmp.fullBio}</p>}
                
                {kmp.expertise && kmp.expertise.length > 0 && (
                  <div className={styles.profileSection}>
                    <h4 className={styles.profileSubTitle}>Areas of Expertise</h4>
                    <div className={styles.profileTags}>
                      {kmp.expertise.map(e => (
                        <span key={e} className={styles.profileTag}>{e}</span>
                      ))}
                    </div>
                  </div>
                )}

                {kmp.education && (
                  <div className={styles.profileSection}>
                    <h4 className={styles.profileSubTitle}>Education</h4>
                    <p className={styles.profileEdu}>{kmp.education}</p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}

function TeamCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <AnimatedSection className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Work Directly With Our Team</h2>
          <p className={styles.ctaDesc}>
            Every engagement at Chiranjiv Capital is personally overseen by senior professionals.
            No junior handoffs. No account manager barriers.
          </p>
          <Link to="/contact" className="btn btn-gold btn-lg">
            Request a Meeting<Icon name="ArrowRight" size={16}/>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default function Leadership() {
  return (
    <>
      <SEO
        title="Leadership"
        description="Meet the team at Chiranjiv Capital Services Limited. Seasoned capital markets professionals with 90+ combined years of experience."
        canonical="/leadership"
      />
      <PageHero/>
      <TeamMessage/>
      <LeaderProfiles/>
      <TeamCTA/>
    </>
  );
}
