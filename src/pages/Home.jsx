import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCountUp } from 'react-countup';
import { useInView } from 'react-intersection-observer';
import SEO, { orgSchema } from '../components/SEO';
import AnimatedSection, { StaggerContainer } from '../components/AnimatedSection';
import { Icon } from '../components/Icons';
import {
  STATS, SERVICES, WHY_CHOOSE, LEADERSHIP, PROCESS_STEPS, IPO_CLIENTS
} from '../data/content';
import styles from './Home.module.css';

/* ── Hero Section ── */
function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} aria-hidden="true">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" className={styles.heroBgSvg}>
          <defs>
            <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B1F47"/>
              <stop offset="50%" stopColor="#112E63"/>
              <stop offset="100%" stopColor="#0E2654"/>
            </linearGradient>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#08B39C" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#2848B8" stopOpacity="0.3"/>
            </linearGradient>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#CFA84F" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#E8C97A" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
          <rect width="1440" height="900" fill="url(#bgGrad)"/>
          {[120,240,360,480,600,720,840,960,1080,1200,1320].map(x => (
            <line key={x} x1={x} y1="0" x2={x} y2="900" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
          ))}
          {[100,200,300,400,500,600,700,800].map(y => (
            <line key={y} x1="0" y1={y} x2="1440" y2={y} stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
          ))}
          <polyline points="180,700 360,580 540,480 720,360 900,260 1080,200 1260,140" fill="none" stroke="url(#lineGrad)" strokeWidth="2"/>
          {[[180,700],[360,580],[540,480],[720,360],[900,260],[1080,200],[1260,140]].map(([cx,cy],i) => (
            <circle key={i} cx={cx} cy={cy} r="4" fill="#08B39C" opacity="0.7"/>
          ))}
          <rect x="900" y="640" width="28" height="120" rx="3" fill="url(#goldGrad)" opacity="0.6"/>
          <rect x="944" y="580" width="28" height="180" rx="3" fill="url(#goldGrad)" opacity="0.5"/>
          <rect x="988" y="520" width="28" height="240" rx="3" fill="url(#goldGrad)" opacity="0.4"/>
          <circle cx="1300" cy="150" r="160" fill="rgba(40,72,184,0.12)" />
          <circle cx="1300" cy="150" r="100" fill="rgba(40,72,184,0.10)" />
          <circle cx="140" cy="780" r="120" fill="rgba(8,179,156,0.07)"/>
          <line x1="0" y1="900" x2="600" y2="0" stroke="rgba(207,168,79,0.06)" strokeWidth="80"/>
        </svg>
      </div>

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="eyebrow eyebrow-white">Capital Market Advisory</span>
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Strategic Capital Solutions<br />
            For Growing Businesses<br />
            <span className={styles.heroTitleGold}>And Listed Companies</span>
          </motion.h1>

          <motion.p
            className={styles.heroDesc}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35 }}
          >
            Helping organizations raise capital, execute transactions, maintain compliance,
            and unlock long-term growth opportunities.
          </motion.p>

          <motion.div
            className={styles.heroBtns}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link to="/contact" className="btn btn-gold btn-lg">
              Book Consultation
              <Icon name="ArrowRight" size={16} />
            </Link>
            <Link to="/services" className="btn btn-outline-white btn-lg">
              Explore Services
            </Link>
          </motion.div>

          <motion.div
            className={styles.heroTrustBar}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
          >
            {['BSE & NSE Listed Clients', '₹5000 Cr+ Raised', '50+ IPO Mandates', 'Pan-India Presence'].map((tag) => (
              <span key={tag} className={styles.heroTrustTag}>
                <Icon name="CheckCircle" size={13} />
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className={styles.heroVisual}
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.heroCard}>
            <div className={styles.heroCardHeader}>
              <span className={styles.heroCardBadge}>Capital Markets</span>
              <span className={styles.heroCardBadgeTeal}>Merchant Banker</span>
            </div>
            <div className={styles.heroCardStats}>
              {STATS.map((s) => (
                <div key={s.label} className={styles.heroCardStat}>
                  <div className={styles.heroCardStatVal}>
                    <StatNumber value={s.value} suffix={s.suffix} />
                  </div>
                  <div className={styles.heroCardStatLabel}>{s.label}</div>
                </div>
              ))}
            </div>
            <div className={styles.heroCardServices}>
              {SERVICES.slice(0,3).map(s => (
                <div key={s.id} className={styles.heroCardService}>
                  <Icon name={s.icon} size={14} />
                  {s.title}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatNumber({ value, suffix }) {
  const [ref, inView] = useInView({ triggerOnce: true });
  const countUpRef = React.useRef(null);
  const { start } = useCountUp({
    ref: countUpRef,
    end: value,
    duration: 2.2,
    separator: ',',
    suffix: suffix,
    startOnMount: false,
  });

  React.useEffect(() => {
    if (inView) start();
  }, [inView]);

  return <span ref={ref}><span ref={countUpRef}>0</span></span>;
}

/* ── About Intro Section ── */
function AboutSection() {
  return (
    <section className={`section ${styles.aboutSection}`}>
      <div className="container">
        <div className={styles.aboutGrid}>
          <AnimatedSection direction="left" className={styles.aboutLeft}>
            <span className="eyebrow">Who We Are</span>
            <h2 className={`section-title ${styles.aboutTitle}`}>
              Trusted Capital Markets Advisors Since 2019
            </h2>
            <div className={styles.dividerLine} />
            <p className={styles.aboutText}>
              Chiranjiv Capital Services Limited is a Category I Merchant Banker headquartered in Connaught Place, New Delhi. We deliver high-impact solutions across corporate finance, transaction advisory, compliance, and strategic growth.
            </p>
            <p className={styles.aboutText}>
              Our multidisciplinary team of CAs, CSs, and legal experts helps businesses navigate complex capital market challenges with clarity, precision, and compliance.
            </p>
            <div className={styles.aboutHighlights}>
              {[
                { label: 'Merchant Banker', value: 'Category I' },
                { label: 'Transactions Closed', value: '150+' },
                { label: 'Cities Served', value: '20+' },
                { label: 'Established', value: '2019' },
              ].map(h => (
                <div key={h.label} className={styles.aboutHighlight}>
                  <div className={styles.aboutHighlightVal}>{h.value}</div>
                  <div className={styles.aboutHighlightLabel}>{h.label}</div>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn btn-primary">
              Our Full Story
              <Icon name="ArrowRight" size={16} />
            </Link>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.15} className={styles.aboutRight}>
            <div className={styles.aboutImgWrap}>
              <div className={styles.aboutImgMain}>
                <svg viewBox="0 0 420 480" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
                  <rect width="420" height="480" rx="16" fill="#F3F7FC"/>
                  <rect x="32" y="40" width="356" height="56" rx="10" fill="#E7EDF5"/>
                  <rect x="48" y="56" width="120" height="8" rx="4" fill="#D1DCF0"/>
                  <rect x="48" y="72" width="80" height="6" rx="3" fill="#E7EDF5"/>
                  <rect x="32" y="116" width="356" height="200" rx="10" fill="white"/>
                  <text x="52" y="140" fill="#6B7280" fontSize="10" fontWeight="600">CAPITAL FLOW — FY 2024</text>
                  {[
                    {x:60,h:80,c:'#08B39C'},{x:105,h:110,c:'#2848B8'},{x:150,h:90,c:'#CFA84F'},
                    {x:195,h:130,c:'#08B39C'},{x:240,h:100,c:'#2848B8'},{x:285,h:150,c:'#CFA84F'},
                    {x:330,h:120,c:'#08B39C'},
                  ].map((b,i) => (
                    <rect key={i} x={b.x} y={270-b.h} width="32" height={b.h} rx="4" fill={b.c} opacity="0.8"/>
                  ))}
                  <line x1="48" y1="272" x2="372" y2="272" stroke="#E7EDF5" strokeWidth="1"/>
                  <rect x="32" y="336" width="168" height="64" rx="10" fill="#112E63"/>
                  <text x="52" y="360" fill="rgba(255,255,255,0.6)" fontSize="9" fontWeight="600">IPO PIPELINE</text>
                  <text x="52" y="382" fill="white" fontSize="22" fontWeight="800">12</text>
                  <text x="90" y="382" fill="#CFA84F" fontSize="11" fontWeight="600">Active</text>
                  <rect x="220" y="336" width="168" height="64" rx="10" fill="#F3F7FC"/>
                  <text x="240" y="360" fill="#6B7280" fontSize="9" fontWeight="600">CAPITAL RAISED</text>
                  <text x="240" y="382" fill="#112E63" fontSize="18" fontWeight="800">₹5,200Cr</text>
                  <rect x="32" y="420" width="88" height="28" rx="6" fill="#F3F7FC"/>
                  <text x="76" y="437" textAnchor="middle" fill="#6B7280" fontSize="9" fontWeight="500">New Delhi HQ</text>
                  <rect x="124" y="420" width="96" height="28" rx="6" fill="rgba(8,179,156,0.1)"/>
                  <text x="172" y="437" textAnchor="middle" fill="#08B39C" fontSize="9" fontWeight="600">Registered</text>
                  <rect x="232" y="420" width="80" height="28" rx="6" fill="rgba(207,168,79,0.1)"/>
                  <text x="272" y="437" textAnchor="middle" fill="#B8923A" fontSize="9" fontWeight="600">Since 2019</text>
                  <rect x="324" y="420" width="64" height="28" rx="6" fill="#F3F7FC"/>
                  <text x="356" y="437" textAnchor="middle" fill="#6B7280" fontSize="9" fontWeight="500">Pan-India</text>
                </svg>
              </div>
              <div className={styles.aboutFloatCard}>
                <Icon name="Award" size={20} />
                <div>
                  <div className={styles.aboutFloatTitle}>Zero Penalty Record</div>
                  <div className={styles.aboutFloatSub}>With BSE & NSE</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ── Statement Section ── */
function StatementSection() {
  return (
    <section className={styles.statement}>
      <div className={styles.statementBg} aria-hidden="true">
        <svg viewBox="0 0 1440 400" preserveAspectRatio="xMidYMid slice" style={{position:'absolute',inset:0,width:'100%',height:'100%'}}>
          <defs>
            <linearGradient id="stGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0E2654"/>
              <stop offset="100%" stopColor="#112E63"/>
            </linearGradient>
          </defs>
          <rect width="1440" height="400" fill="url(#stGrad)"/>
          <circle cx="200" cy="200" r="300" fill="rgba(8,179,156,0.05)"/>
          <circle cx="1240" cy="200" r="280" fill="rgba(40,72,184,0.08)"/>
          <line x1="0" y1="200" x2="1440" y2="200" stroke="rgba(207,168,79,0.06)" strokeWidth="1"/>
        </svg>
      </div>
      <div className="container" style={{position:'relative'}}>
        <AnimatedSection className={styles.statementInner}>
          <span className="eyebrow eyebrow-white">Our Purpose</span>
          <h2 className={styles.statementTitle}>
            Helping Businesses Navigate<br />
            <span className={styles.statementGold}>Capital Markets With Confidence.</span>
          </h2>
          <p className={styles.statementText}>
            From your first capital raise to your IPO, and through every compliance cycle that follows —
            Chiranjiv Capital is your long-term financial partner.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ── Services Section ── */
function ServicesSection() {
  return (
    <section className={`section ${styles.servicesSection}`} id="services">
      <div className="container">
        <AnimatedSection className={styles.sectionHead}>
          <span className="eyebrow">What We Do</span>
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-subtitle">
            A comprehensive suite of capital market advisory services designed to take
            your business from ambition to achievement.
          </p>
        </AnimatedSection>
        <StaggerContainer className={styles.servicesGrid} staggerDelay={0.07}>
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </StaggerContainer>
        <AnimatedSection delay={0.2} className={styles.servicesFooter}>
          <Link to="/services" className="btn btn-primary btn-lg">
            View All Services
            <Icon name="ArrowRight" size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  return (
    <Link to={`/services#${service.id}`} className={styles.serviceCard}>
      <div className={styles.serviceIconWrap} style={{ background: `${service.color}15`, color: service.color }}>
        <Icon name={service.icon} size={26} />
      </div>
      <h3 className={styles.serviceCardTitle}>{service.title}</h3>
      <p className={styles.serviceCardDesc}>{service.shortDesc}</p>
      <span className={styles.serviceCardLink}>
        Learn More <Icon name="ChevronRight" size={14} />
      </span>
    </Link>
  );
}

/* ── Why Choose Section ── */
function WhySection() {
  return (
    <section className={`section ${styles.whySection}`} id="why-us">
      <div className="container">
        <div className={styles.whyGrid}>
          <AnimatedSection direction="left" className={styles.whyLeft}>
            <span className="eyebrow">Why Chiranjiv Capital</span>
            <h2 className="section-title">Built on Trust,<br />Driven by Results</h2>
            <div className={styles.dividerLine}/>
            <p className="section-subtitle" style={{maxWidth:'480px'}}>
              When businesses choose Chiranjiv Capital, they gain more than an advisor.
              They gain a partner who is as invested in their success as they are.
            </p>
            <Link to="/about" className="btn btn-outline" style={{marginTop:'1.5rem'}}>
              Learn About Us
              <Icon name="ArrowRight" size={16}/>
            </Link>
          </AnimatedSection>
          <StaggerContainer className={styles.whyRight} staggerDelay={0.09}>
            {WHY_CHOOSE.map((item) => (
              <div key={item.title} className={styles.whyCard}>
                <div className={styles.whyIconWrap}>
                  <Icon name={item.icon} size={22}/>
                </div>
                <div>
                  <h4 className={styles.whyCardTitle}>{item.title}</h4>
                  <p className={styles.whyCardDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

/* ── Leadership Preview ── */
function LeadershipSection() {
  return (
    <section className={`section ${styles.leadershipSection}`}>
      <div className="container">
        <AnimatedSection className={styles.sectionHead}>
          <span className="eyebrow">The Team</span>
          <h2 className="section-title">Our Leadership Team</h2>
          <p className="section-subtitle">
            A team that brings decades of capital markets experience
            and a track record of delivering results.
          </p>
        </AnimatedSection>
        <StaggerContainer className={styles.leaderGrid} staggerDelay={0.08}>
          {LEADERSHIP.map((leader) => (
            <LeaderCard key={leader.id} leader={leader} />
          ))}
        </StaggerContainer>
        <AnimatedSection delay={0.2} className={styles.servicesFooter}>
          <Link to="/leadership" className="btn btn-outline">
            View Full Profiles
            <Icon name="ArrowRight" size={16}/>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

function LeaderCard({ leader }) {
  return (
    <div className={styles.leaderCard}>
      <div className={styles.leaderAvatarWrap}>
        {leader.photo ? (
          <img src={leader.photo} alt={leader.name} className={styles.leaderPhoto} />
        ) : (
          <div className={styles.leaderAvatar} style={{ background: `linear-gradient(135deg, ${leader.color}, ${leader.color}dd)` }}>
            <span className={styles.leaderInitials}>{leader.initials}</span>
          </div>
        )}
      </div>
      <h4 className={styles.leaderName}>{leader.name}</h4>
      <p className={styles.leaderDesig}>{leader.designation}</p>
      <p className={styles.leaderBio}>{leader.shortBio}</p>
      <div className={styles.leaderTags}>
        {leader.expertise.slice(0,2).map(e => (
          <span key={e} className={styles.leaderTag}>{e}</span>
        ))}
      </div>
      <Link to="/leadership" className={styles.leaderLink}>
        Full Profile <Icon name="ChevronRight" size={13}/>
      </Link>
    </div>
  );
}

/* ── Clientele Marquee ── */
function ClienteleSection() {
  const allClients = [...IPO_CLIENTS, ...IPO_CLIENTS];
  return (
    <section className={`section-sm ${styles.clienteleSection}`}>
      <div className="container">
        <AnimatedSection className={styles.sectionHead}>
          <span className="eyebrow">Our Clients</span>
          <h2 className="section-title">Trusted By Leading Companies</h2>
          <p className="section-subtitle">
            From IPO-stage companies to large listed corporates across industries.
          </p>
        </AnimatedSection>
      </div>
      <div className={styles.marqueeWrap}>
        <div className={styles.marqueeTrack}>
          {allClients.map((c, i) => (
            <span key={i} className={styles.marqueeItem}>{c}</span>
          ))}
        </div>
      </div>
      <div className="container" style={{marginTop:'2rem',textAlign:'center'}}>
        <Link to="/clientele" className="btn btn-outline">
          View All Clients <Icon name="ArrowRight" size={16}/>
        </Link>
      </div>
    </section>
  );
}

/* ── Process Section ── */
function ProcessSection() {
  return (
    <section className={`section ${styles.processSection}`} id="process">
      <div className="container">
        <AnimatedSection className={styles.sectionHead}>
          <span className="eyebrow">How We Work</span>
          <h2 className="section-title">Our Proven Process</h2>
          <p className="section-subtitle">
            A structured six-stage methodology that delivers consistent outcomes
            for every mandate we undertake.
          </p>
        </AnimatedSection>
        <div className={styles.processTrack}>
          {PROCESS_STEPS.map((step, idx) => (
            <AnimatedSection key={step.number} delay={idx * 0.08} className={styles.processStep}>
              <div className={styles.processNum}>{step.number}</div>
              {idx < PROCESS_STEPS.length - 1 && <div className={styles.processConnector} aria-hidden="true"/>}
              <h4 className={styles.processTitle}>{step.title}</h4>
              <p className={styles.processDesc}>{step.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA Section ── */
function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaBg} aria-hidden="true">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="xMidYMid slice" style={{position:'absolute',inset:0,width:'100%',height:'100%'}}>
          <defs>
            <linearGradient id="ctaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#112E63"/>
              <stop offset="100%" stopColor="#0B1F47"/>
            </linearGradient>
          </defs>
          <rect width="1440" height="320" fill="url(#ctaGrad)"/>
          <circle cx="720" cy="160" r="400" fill="rgba(207,168,79,0.05)"/>
          <circle cx="100" cy="300" r="200" fill="rgba(8,179,156,0.06)"/>
          <circle cx="1340" cy="50" r="180" fill="rgba(40,72,184,0.08)"/>
        </svg>
      </div>
      <div className="container" style={{position:'relative'}}>
        <AnimatedSection className={styles.ctaInner}>
          <span className="eyebrow eyebrow-white">Get Started</span>
          <h2 className={styles.ctaTitle}>
            Let's Build Long-Term<br />Financial Growth Together
          </h2>
          <p className={styles.ctaSubtitle}>
            Whether you're preparing for an IPO, evaluating an acquisition, or need a reliable
            compliance partner — our senior advisors are ready to assist.
          </p>
          <div className={styles.ctaBtns}>
            <Link to="/contact" className="btn btn-gold btn-lg">
              Schedule Consultation
              <Icon name="ArrowRight" size={16}/>
            </Link>
            <Link to="/services" className="btn btn-outline-white btn-lg">
              Explore Services
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <SEO
        description="Chiranjiv Capital Services Limited — Merchant Banker in New Delhi. Expert IPO advisory, M&A due diligence, capital market services, transaction advisory and compliance management."
        canonical="/"
        schema={orgSchema}
      />
      <HeroSection />
      <AboutSection />
      <StatementSection />
      <ServicesSection />
      <WhySection />
      <LeadershipSection />
      <ClienteleSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
