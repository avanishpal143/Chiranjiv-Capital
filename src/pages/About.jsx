import React from 'react';
import { Link } from 'react-router-dom';
import SEO, { orgSchema } from '../components/SEO';
import AnimatedSection, { StaggerContainer } from '../components/AnimatedSection';
import { Icon } from '../components/Icons';
import { COMPANY, ABOUT_MILESTONES, COMPANY_VALUES, STATS } from '../data/content';
import styles from './About.module.css';

function PageHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} aria-hidden="true" />
      <div className="container">
        <AnimatedSection className={styles.heroContent}>
          <span className="eyebrow eyebrow-white">About Us</span>
          <h1 className={styles.heroTitle}>
            A Firm Built on Integrity,<br />
            <span className={styles.heroGold}>Expertise & Trust</span>
          </h1>
          <p className={styles.heroDesc}>
            Chiranjiv Capital Services Limited is a Merchant Banker headquartered in Connaught Place,
            New Delhi, dedicated to helping businesses raise capital and navigate India's capital
            markets with confidence since 2019.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

function CompanyStory() {
  return (
    <section className={`section ${styles.storySection}`}>
      <div className="container">
        <div className={styles.storyGrid}>
          <AnimatedSection direction="left">
            <span className="eyebrow">Our Story</span>
            <h2 className="section-title" style={{margin:'1rem 0'}}>From Vision to India's Capital Markets</h2>
            <div className={styles.divider}/>
            <p style={{color:'var(--text-body)',lineHeight:1.75,marginBottom:'1rem'}}>
              Chiranjiv Capital Services Limited is a Category I Merchant Banker. Founded in 2019 and headquartered in Connaught Place, New Delhi, we blend institutional-grade expertise with boutique personal attention.
            </p>
            <p style={{color:'var(--text-body)',lineHeight:1.75,marginBottom:'1rem'}}>
              We specialize in IPO fundraising, transaction advisory, M&A due diligence, and regulatory compliance. Our team of CAs, CSs, and legal advisors helps businesses grow and transition seamlessly in India's competitive landscape.
            </p>
            <div className={styles.storyBadges}>
              <div className={styles.storyBadge}>
                <Icon name="Shield" size={16}/>
                Reg. No. {COMPANY.sebiReg}
              </div>
              <div className={styles.storyBadge}>
                <Icon name="Building" size={16}/>
                CIN: {COMPANY.cin}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.15}>
            <div className={styles.statsGrid}>
              {STATS.map((s) => (
                <div key={s.label} className={styles.statBox}>
                  <div className={styles.statVal}>{s.value}{s.suffix}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
            <div className={styles.missionBox}>
              <h3 className={styles.missionTitle}>Our Mission</h3>
              <p className={styles.missionText}>
                To empower businesses at every stage of their growth journey by providing
                world-class capital markets advisory services with integrity, expertise,
                and unwavering commitment to client success.
              </p>
              <h3 className={styles.missionTitle} style={{marginTop:'1.25rem'}}>Our Vision</h3>
              <p className={styles.missionText}>
                To be India's most trusted financial advisory firm — where every client
                relationship is built for the long term, and every mandate is executed
                with institutional precision.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className={`section ${styles.valuesSection}`}>
      <div className="container">
        <AnimatedSection className={styles.sectionHead}>
          <span className="eyebrow">Our Foundation</span>
          <h2 className="section-title">The Values We Live By</h2>
          <p className="section-subtitle">
            Every decision at Chiranjiv Capital is guided by four core principles
            that have shaped our culture since day one.
          </p>
        </AnimatedSection>
        <StaggerContainer className={styles.valuesGrid} staggerDelay={0.09}>
          {COMPANY_VALUES.map((v) => (
            <div key={v.title} className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <Icon name={v.icon} size={24}/>
              </div>
              <h3 className={styles.valueTitle}>{v.title}</h3>
              <p className={styles.valueDesc}>{v.desc}</p>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className={`section ${styles.timelineSection}`}>
      <div className="container">
        <AnimatedSection className={styles.sectionHead}>
          <span className="eyebrow eyebrow-gold">Our Journey</span>
          <h2 className="section-title section-title-white">Milestones That Define Us</h2>
          <p className="section-subtitle section-subtitle-white">
            Five years of consistent growth, expanding capabilities, and deepening
            client relationships across India's capital markets.
          </p>
        </AnimatedSection>
        <div className={styles.timeline}>
          {ABOUT_MILESTONES.map((m, i) => (
            <AnimatedSection key={m.year} delay={i * 0.08} className={`${styles.timelineItem} ${i % 2 === 0 ? styles.timelineLeft : styles.timelineRight}`}>
              <div className={styles.timelineCard}>
                <div className={styles.timelineYear}>{m.year}</div>
                <h4 className={styles.timelineTitle}>{m.title}</h4>
                <p className={styles.timelineDesc}>{m.desc}</p>
              </div>
              <div className={styles.timelineDot}/>
            </AnimatedSection>
          ))}
          <div className={styles.timelineLine}/>
        </div>
      </div>
    </section>
  );
}

function WhyTrustSection() {
  const points = [
    { icon: 'Shield', title: 'Regulatory Compliance', desc: 'Fully compliant with all applicable regulatory frameworks for Merchant Bankers, BSE, NSE and RBI requirements.' },
    { icon: 'Users', title: 'Senior-Led Execution', desc: 'Every mandate is led by senior professionals, not delegated to junior teams.' },
    { icon: 'Target', title: 'Conflict-Free Advisory', desc: 'We act solely in the interest of our clients with no proprietary trading conflicts.' },
    { icon: 'Globe', title: 'Pan-India Reach', desc: 'Active client relationships across 15+ states with deep knowledge of local market dynamics.' },
    { icon: 'Zap', title: 'Technology-Enabled', desc: 'Modern tools for deal tracking, compliance calendars, and investor reporting.' },
    { icon: 'Award', title: 'Track Record', desc: 'A consistent track record of successfully closed transactions across market cycles.' },
  ];
  return (
    <section className={`section ${styles.whyTrustSection}`} id="registration">
      <div className="container">
        <AnimatedSection className={styles.sectionHead}>
          <span className="eyebrow">Why Businesses Trust Us</span>
          <h2 className="section-title">What Sets Us Apart</h2>
          <p className="section-subtitle">
            Six reasons why promoters, CFOs, and boards consistently choose Chiranjiv Capital
            for their most critical financial decisions.
          </p>
        </AnimatedSection>
        <StaggerContainer className={styles.trustGrid} staggerDelay={0.07}>
          {points.map((p) => (
            <div key={p.title} className={styles.trustCard}>
              <div className={styles.trustIcon}><Icon name={p.icon} size={20}/></div>
              <h4 className={styles.trustTitle}>{p.title}</h4>
              <p className={styles.trustDesc}>{p.desc}</p>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function AboutCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <AnimatedSection className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to Partner With Us?</h2>
          <p className={styles.ctaDesc}>
            Let our senior advisors understand your requirements and recommend the right approach.
          </p>
          <div className={styles.ctaBtns}>
            <Link to="/contact" className="btn btn-gold btn-lg">Book Consultation<Icon name="ArrowRight" size={16}/></Link>
            <Link to="/services" className="btn btn-outline-white btn-lg">Our Services</Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Chiranjiv Capital Services Limited — a Merchant Banker in Connaught Place, New Delhi. Our story, mission, values, and leadership team."
        canonical="/about"
        schema={orgSchema}
      />
      <PageHero/>
      <CompanyStory/>
      <ValuesSection/>
      <TimelineSection/>
      <WhyTrustSection/>
      <AboutCTA/>
    </>
  );
}
