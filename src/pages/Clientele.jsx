import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import AnimatedSection, { StaggerContainer } from '../components/AnimatedSection';
import { Icon } from '../components/Icons';
import { IPO_CLIENTS, LISTED_CLIENTS } from '../data/content';
import styles from './Clientele.module.css';

const INDUSTRIES = [
  { name: 'Manufacturing', count: 28, icon: 'Building' },
  { name: 'Financial Services', count: 22, icon: 'TrendingUp' },
  { name: 'Infrastructure', count: 18, icon: 'Layers' },
  { name: 'Textiles & Apparel', count: 15, icon: 'Target' },
  { name: 'Energy & Renewables', count: 12, icon: 'Zap' },
  { name: 'Media & Publishing', count: 8, icon: 'Globe' },
];

const SUCCESS_HIGHLIGHTS = [
  {
    client: 'Leading Polymer Manufacturer',
    type: 'SME IPO',
    outcome: 'Successfully raised ₹120 Cr via BSE SME IPO at 12x oversubscription. Promoter achieved clean exit on 15% stake.',
    sector: 'Manufacturing',
    color: '#08B39C',
  },
  {
    client: 'Infrastructure EPC Company',
    type: 'Rights Issue',
    outcome: 'Managed ₹280 Cr Rights Issue for listed infrastructure company. 100% subscription achieved within 5 days of opening.',
    sector: 'Infrastructure',
    color: '#2848B8',
  },
  {
    client: 'Renewable Energy Developer',
    type: 'Project Finance',
    outcome: 'Structured and arranged ₹450 Cr project finance facility for 80MW solar project across two states.',
    sector: 'Energy',
    color: '#CFA84F',
  },
  {
    client: 'Regional Bank (Acquired Entity)',
    type: 'M&A Advisory',
    outcome: 'Advised on ₹850 Cr acquisition of regional NBFC. Completed due diligence and negotiation in 45 days.',
    sector: 'Financial Services',
    color: '#112E63',
  },
];

function PageHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} aria-hidden="true"/>
      <div className="container">
        <AnimatedSection className={styles.heroContent}>
          <span className="eyebrow eyebrow-white">Our Clients</span>
          <h1 className={styles.heroTitle}>Trusted By Over<br/><span className={styles.heroGold}>200+ Companies</span></h1>
          <p className={styles.heroDesc}>
            From pre-IPO startups to large listed corporates, our clients represent
            the breadth of India's business community. Each relationship is built on
            trust, results, and long-term partnership.
          </p>
          <div className={styles.heroStats}>
            {[['50+','IPO Mandates'],['200+','Listed Clients'],['15+','Industry Sectors'],['₹5000Cr+','Capital Raised']].map(([v,l]) => (
              <div key={l} className={styles.heroStat}>
                <div className={styles.heroStatVal}>{v}</div>
                <div className={styles.heroStatLabel}>{l}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function ClientGrid({ title, subtitle, clients, eyebrow, accent }) {
  return (
    <section className={`section ${styles.clientSection}`}>
      <div className="container">
        <AnimatedSection className={styles.sectionHead}>
          <span className="eyebrow" style={{color: accent}}>{eyebrow}</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </AnimatedSection>
        <StaggerContainer className={styles.clientGrid} staggerDelay={0.04}>
          {clients.map((client) => (
            <div key={client} className={styles.clientCard} style={{'--accent': accent}}>
              <div className={styles.clientInitial} style={{color: accent, background: `${accent}12`}}>
                {client.charAt(0)}
              </div>
              <span className={styles.clientName}>{client}</span>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section className={`section ${styles.industriesSection}`}>
      <div className="container">
        <AnimatedSection className={styles.sectionHead}>
          <span className="eyebrow eyebrow-gold">Industry Presence</span>
          <h2 className="section-title section-title-white">Sectors We Serve</h2>
          <p className="section-subtitle section-subtitle-white">
            Deep expertise across the industries that drive India's economy.
          </p>
        </AnimatedSection>
        <StaggerContainer className={styles.industryGrid} staggerDelay={0.07}>
          {INDUSTRIES.map((ind) => (
            <div key={ind.name} className={styles.industryCard}>
              <div className={styles.industryIcon}><Icon name={ind.icon} size={22}/></div>
              <div className={styles.industryName}>{ind.name}</div>
              <div className={styles.industryCount}>{ind.count} Clients</div>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function SuccessHighlights() {
  return (
    <section className={`section ${styles.highlightsSection}`}>
      <div className="container">
        <AnimatedSection className={styles.sectionHead}>
          <span className="eyebrow">Case Studies</span>
          <h2 className="section-title">Client Success Highlights</h2>
          <p className="section-subtitle">
            A selection of transaction outcomes that illustrate our advisory capabilities
            across service lines and sectors.
          </p>
        </AnimatedSection>
        <div className={styles.highlightsGrid}>
          {SUCCESS_HIGHLIGHTS.map((h, i) => (
            <AnimatedSection key={h.client} delay={i * 0.09} className={styles.highlightCard}>
              <div className={styles.highlightTop}>
                <span className={styles.highlightType} style={{background:`${h.color}15`,color:h.color}}>{h.type}</span>
                <span className={styles.highlightSector}>{h.sector}</span>
              </div>
              <div className={styles.highlightBar} style={{background:h.color}}/>
              <h4 className={styles.highlightClient}>{h.client}</h4>
              <p className={styles.highlightOutcome}>{h.outcome}</p>
              <div className={styles.highlightFooter}>
                <Icon name="CheckCircle" size={14} style={{color:h.color}}/>
                <span className={styles.highlightResult}>Successfully Completed</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.2} style={{textAlign:'center',marginTop:'2.5rem'}}>
          <p className={styles.disclaimerNote}>
            * Client names withheld for confidentiality. Transaction details are illustrative.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

function ClienteleCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <AnimatedSection className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Join Our Growing Client Family</h2>
          <p className={styles.ctaDesc}>
            Hundreds of businesses have trusted Chiranjiv Capital to navigate their most
            critical financial decisions. You could be next.
          </p>
          <Link to="/contact" className="btn btn-gold btn-lg">
            Start the Conversation<Icon name="ArrowRight" size={16}/>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default function Clientele() {
  return (
    <>
      <SEO
        title="Clientele"
        description="Chiranjiv Capital's client portfolio includes 50+ IPO mandates and 200+ listed companies across manufacturing, financial services, infrastructure, energy and more."
        canonical="/clientele"
      />
      <PageHero/>
      <ClientGrid
        eyebrow="IPO Clientele"
        title="Companies We've Taken Public"
        subtitle="Businesses that trusted us to manage their public market debut — from DRHP filing to listing day and beyond."
        clients={IPO_CLIENTS}
        accent="#08B39C"
      />
      <ClientGrid
        eyebrow="Listed Company Clients"
        title="Listed Companies We Serve"
        subtitle="Ongoing advisory, compliance management, and transaction support for companies listed on BSE and NSE."
        clients={LISTED_CLIENTS}
        accent="#2848B8"
      />
      <IndustriesSection/>
      <SuccessHighlights/>
      <ClienteleCTA/>
    </>
  );
}
