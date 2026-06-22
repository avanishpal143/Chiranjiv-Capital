import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import AnimatedSection, { StaggerContainer } from '../components/AnimatedSection';
import { Icon } from '../components/Icons';
import { SERVICES } from '../data/content';
import styles from './Services.module.css';

function PageHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} aria-hidden="true"/>
      <div className="container">
        <AnimatedSection className={styles.heroContent}>
          <span className="eyebrow eyebrow-white">Our Services</span>
          <h1 className={styles.heroTitle}>Comprehensive Capital Market<br/><span className={styles.heroGold}>Advisory Services</span></h1>
          <p className={styles.heroDesc}>
            Six core service lines designed to support every stage of your business's
            capital market journey — from first fundraise to ongoing listed company compliance.
          </p>
          <div className={styles.heroNav}>
            {SERVICES.map(s => (
              <a key={s.id} href={`#${s.id}`} className={styles.heroNavLink}>{s.title}</a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function ServiceSection({ service, index }) {
  const isEven = index % 2 === 0;
  return (
    <section className={styles.serviceSection} id={service.id}>
      <div className="container">
        <div className={`${styles.serviceGrid} ${isEven ? '' : styles.serviceGridReverse}`}>
          <AnimatedSection direction={isEven ? 'left' : 'right'} className={styles.serviceContent}>
            <div className={styles.serviceIconWrap} style={{background:`${service.color}15`,color:service.color}}>
              <Icon name={service.icon} size={28}/>
            </div>
            <span className="eyebrow" style={{color:service.color,['--eyebrow-color']:service.color}}>Service {String(index+1).padStart(2,'0')}</span>
            <h2 className={styles.serviceTitle}>{service.title}</h2>
            <div className={styles.divider} style={{background:`linear-gradient(90deg,${service.color},${service.color}55)`}}/>
            <p className={styles.serviceOverview}>{service.overview}</p>

            <h4 className={styles.subHeading}>Key Benefits</h4>
            <ul className={styles.benefitsList}>
              {service.benefits.map(b => (
                <li key={b} className={styles.benefitItem}>
                  <Icon name="Check" size={14}/>
                  {b}
                </li>
              ))}
            </ul>

            <div className={styles.impactBox}>
              <Icon name="TrendingUp" size={16}/>
              <p className={styles.impactText}><strong>Business Impact:</strong> {service.impact}</p>
            </div>

            <Link to="/contact" className="btn btn-primary" style={{marginTop:'0.5rem'}}>
              Discuss This Service<Icon name="ArrowRight" size={16}/>
            </Link>
          </AnimatedSection>

          <AnimatedSection direction={isEven ? 'right' : 'left'} delay={0.15} className={styles.serviceVisual}>
            <div className={styles.processCard}>
              <h4 className={styles.processCardTitle}>Our Process</h4>
              <div className={styles.processSteps}>
                {service.process.map((p,i) => (
                  <div key={p.step} className={styles.processStep}>
                    <div className={styles.processStepNum} style={{background:service.color}}>{p.step}</div>
                    <div>
                      <div className={styles.processStepTitle}>{p.title}</div>
                      <div className={styles.processStepDesc}>{p.desc}</div>
                    </div>
                    {i < service.process.length-1 && <div className={styles.processStepLine}/>}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function ServicesCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <AnimatedSection className={styles.ctaInner}>
          <span className="eyebrow eyebrow-white">Get Started</span>
          <h2 className={styles.ctaTitle}>Ready to Discuss Your Requirements?</h2>
          <p className={styles.ctaDesc}>
            Our senior advisors will understand your specific needs and design a
            bespoke engagement that delivers results.
          </p>
          <Link to="/contact" className="btn btn-gold btn-lg">
            Schedule a Consultation<Icon name="ArrowRight" size={16}/>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default function Services() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
    }
  }, [hash]);

  return (
    <>
      <SEO
        title="Services"
        description="Chiranjiv Capital offers IPO advisory, M&A due diligence, capital market services, transaction advisory, financial structuring, and compliance management for listed companies."
        canonical="/services"
      />
      <PageHero/>
      {SERVICES.map((service, i) => (
        <ServiceSection key={service.id} service={service} index={i}/>
      ))}
      <ServicesCTA/>
    </>
  );
}
