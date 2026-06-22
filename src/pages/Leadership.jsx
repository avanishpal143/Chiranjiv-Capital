import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import AnimatedSection, { StaggerContainer } from '../components/AnimatedSection';
import { Icon } from '../components/Icons';
import { LEADERSHIP } from '../data/content';
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
            "At Chiranjiv Capital, we believe that every business deserves access to
            world-class capital market expertise — regardless of its size or location.
            We founded this firm to be the trusted advisor that we ourselves would have
            wanted when navigating the complexities of India's financial markets."
          </blockquote>
          <p className={styles.messageText}>
            Our approach is straightforward: we invest deeply in understanding your business,
            your ambitions, and the challenges you face. Only then do we recommend solutions.
            We don't believe in one-size-fits-all advisory. Every mandate we take is
            approached with fresh eyes, senior commitment, and the full weight of our
            combined experience.
          </p>
          <p className={styles.messageText}>
            Our registration as a Merchant Banker is not just a regulatory requirement — it is a
            promise to our clients and to the market that we uphold the highest standards of
            professional conduct, transparency, and client confidentiality.
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
        <AnimatedSection className={styles.sectionHead}>
          <span className="eyebrow">Our People</span>
          <h2 className="section-title">Meet the Team</h2>
          <p className="section-subtitle">
            Each member of our team is a specialist in their domain,
            bringing focused expertise to every client engagement.
          </p>
        </AnimatedSection>
        <div className={styles.profilesGrid}>
          {LEADERSHIP.map((leader, i) => (
            <AnimatedSection key={leader.id} delay={i * 0.08} className={styles.profileCard}>
              <div className={styles.profileHeader}>
                <div className={styles.profileAvatarWrap}>
                  {leader.photo ? (
                    <img src={leader.photo} alt={leader.name} className={styles.profilePhoto} />
                  ) : (
                    <div className={styles.profileAvatar} style={{background:`linear-gradient(135deg,${leader.color},${leader.color}cc)`}}>
                      <span className={styles.profileInitials}>{leader.initials}</span>
                    </div>
                  )}
                </div>
                <div className={styles.profileMeta}>
                  <h3 className={styles.profileName}>{leader.name}</h3>
                  <p className={styles.profileDesig}>{leader.designation}</p>
                  <div className={styles.profileBadge}>
                    <Icon name="Award" size={12}/>{leader.experience}
                  </div>
                </div>
              </div>
              <div className={styles.profileDivider}/>
              <p className={styles.profileBio}>{leader.fullBio}</p>
              <div className={styles.profileSection}>
                <h4 className={styles.profileSubTitle}>Areas of Expertise</h4>
                <div className={styles.profileTags}>
                  {leader.expertise.map(e => (
                    <span key={e} className={styles.profileTag}>{e}</span>
                  ))}
                </div>
              </div>
              <div className={styles.profileSection}>
                <h4 className={styles.profileSubTitle}>Education</h4>
                <p className={styles.profileEdu}>{leader.education}</p>
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
