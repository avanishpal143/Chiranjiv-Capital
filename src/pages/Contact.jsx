import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import SEO, { localBusinessSchema } from '../components/SEO';
import AnimatedSection from '../components/AnimatedSection';
import { Icon } from '../components/Icons';
import { COMPANY, SERVICES } from '../data/content';
import styles from './Contact.module.css';

function PageHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} aria-hidden="true"/>
      <div className="container">
        <AnimatedSection className={styles.heroContent}>
          <span className="eyebrow eyebrow-white">Contact Us</span>
          <h1 className={styles.heroTitle}>Let's Start a<br/><span className={styles.heroGold}>Conversation</span></h1>
          <p className={styles.heroDesc}>
            Reach out to discuss your capital requirements, compliance needs, or any
            advisory engagement. Our senior team responds within one business day.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

function ContactGrid() {
  return (
    <section className={`section ${styles.contactSection}`}>
      <div className="container">
        <div className={styles.contactLayout}>
          <AnimatedSection direction="left" className={styles.contactInfo}>
            <h2 className={styles.infoTitle}>Get in Touch</h2>
            <p className={styles.infoDesc}>
              Whether you're planning an IPO, evaluating an acquisition, or need an
              ongoing compliance partner — we'd love to hear from you.
            </p>

            <div className={styles.infoCards}>
              <div className={styles.infoCard}>
                <div className={styles.infoCardIcon}><Icon name="Phone" size={20}/></div>
                <div>
                  <div className={styles.infoCardLabel}>Phone</div>
                  <a href={`tel:${COMPANY.phone.replace(/\s/g,'')}`} className={styles.infoCardValue}>{COMPANY.phone}</a>
                  <p className={styles.infoCardNote}>Mon – Sat, 9:30 AM – 6:30 PM IST</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoCardIcon}><Icon name="Mail" size={20}/></div>
                <div>
                  <div className={styles.infoCardLabel}>Email</div>
                  <a href={`mailto:${COMPANY.email}`} className={styles.infoCardValue}>{COMPANY.email}</a>
                  <p className={styles.infoCardNote}>Response within 1 business day</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoCardIcon}><Icon name="MapPin" size={20}/></div>
                <div>
                  <div className={styles.infoCardLabel}>Office Address</div>
                  <div className={styles.infoCardValue} style={{fontSize:'var(--text-sm)'}}>
                    {COMPANY.address.line1}, {COMPANY.address.line2}<br/>
                    {COMPANY.address.city}, {COMPANY.address.state} – {COMPANY.address.pin}
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.sebiInfo} id="registration">
              <div className={styles.sebiInfoTitle}>Registration Details</div>
              <div className={styles.sebiInfoGrid}>
                <div><span className={styles.sebiKey}>Reg. No.</span><span className={styles.sebiVal}>{COMPANY.sebiReg}</span></div>
                <div><span className={styles.sebiKey}>CIN</span><span className={styles.sebiVal}>{COMPANY.cin}</span></div>
                <div><span className={styles.sebiKey}>Category</span><span className={styles.sebiVal}>Merchant Banker – Cat I</span></div>
                <div><span className={styles.sebiKey}>Registered Under</span><span className={styles.sebiVal}>Merchant Bankers Regulations, 1992</span></div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.15} className={styles.formWrap}>
            <ContactForm/>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

  const onSubmit = async (data) => {
    await new Promise(r => setTimeout(r, 1200));
    console.log('Form submission:', data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className={styles.successState}>
        <div className={styles.successIcon}>
          <Icon name="CheckCircle" size={48}/>
        </div>
        <h3 className={styles.successTitle}>Thank You!</h3>
        <p className={styles.successText}>
          Your enquiry has been received. A senior member of our team will
          reach out to you within one business day.
        </p>
        <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={styles.formHeader}>
        <h3 className={styles.formTitle}>Book a Consultation</h3>
        <p className={styles.formSubtitle}>Fill in your details and we'll be in touch.</p>
      </div>

      <div className={styles.formGrid}>
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel} htmlFor="name">Full Name *</label>
          <input
            id="name" type="text"
            className={`${styles.fieldInput} ${errors.name ? styles.fieldError : ''}`}
            placeholder="Your full name"
            {...register('name', { required: 'Full name is required', minLength: { value: 2, message: 'Name must be at least 2 characters' } })}
          />
          {errors.name && <span className={styles.errorMsg}>{errors.name.message}</span>}
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel} htmlFor="company">Company / Organisation *</label>
          <input
            id="company" type="text"
            className={`${styles.fieldInput} ${errors.company ? styles.fieldError : ''}`}
            placeholder="Company name"
            {...register('company', { required: 'Company name is required' })}
          />
          {errors.company && <span className={styles.errorMsg}>{errors.company.message}</span>}
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel} htmlFor="phone">Phone Number *</label>
          <input
            id="phone" type="tel"
            className={`${styles.fieldInput} ${errors.phone ? styles.fieldError : ''}`}
            placeholder="+91 XXXXX XXXXX"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: { value: /^[+]?[\d\s\-]{8,15}$/, message: 'Please enter a valid phone number' }
            })}
          />
          {errors.phone && <span className={styles.errorMsg}>{errors.phone.message}</span>}
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel} htmlFor="email">Email Address *</label>
          <input
            id="email" type="email"
            className={`${styles.fieldInput} ${errors.email ? styles.fieldError : ''}`}
            placeholder="you@company.com"
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email address' }
            })}
          />
          {errors.email && <span className={styles.errorMsg}>{errors.email.message}</span>}
        </div>

        <div className={`${styles.fieldGroup} ${styles.fieldFull}`}>
          <label className={styles.fieldLabel} htmlFor="service">Service Required *</label>
          <select
            id="service"
            className={`${styles.fieldInput} ${styles.fieldSelect} ${errors.service ? styles.fieldError : ''}`}
            {...register('service', { required: 'Please select a service' })}
          >
            <option value="">Select a service...</option>
            {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
            <option value="general">General Advisory / Not Sure Yet</option>
          </select>
          {errors.service && <span className={styles.errorMsg}>{errors.service.message}</span>}
        </div>

        <div className={`${styles.fieldGroup} ${styles.fieldFull}`}>
          <label className={styles.fieldLabel} htmlFor="message">Message</label>
          <textarea
            id="message"
            className={`${styles.fieldInput} ${styles.fieldTextarea}`}
            placeholder="Briefly describe your requirements or any questions you have..."
            rows={4}
            {...register('message')}
          />
        </div>
      </div>

      <div className={styles.formFooter}>
        <p className={styles.formDisclaimer}>
          By submitting this form, you consent to being contacted by Chiranjiv Capital.
          Your information will not be shared with third parties.
        </p>
        <button type="submit" className={`btn btn-primary btn-lg ${styles.submitBtn}`} disabled={isSubmitting}>
          {isSubmitting ? (
            <><span className={styles.spinner}/> Sending...</>
          ) : (
            <>Send Enquiry <Icon name="ArrowRight" size={16}/></>
          )}
        </button>
      </div>
    </form>
  );
}

function MapSection() {
  return (
    <section className={styles.mapSection}>
      <div className="container">
        <AnimatedSection className={styles.mapWrapper}>
          <div className={styles.mapOverlay}>
            <div className={styles.mapCard}>
              <Icon name="MapPin" size={20} style={{color:'var(--primary-teal)'}}/>
              <div>
                <div className={styles.mapCardTitle}>Chiranjiv Capital Services Limited</div>
                <div className={styles.mapCardAddr}>
                  302, Navrang House, Bhawani Singh Road,<br/>
                  C-Scheme, Jaipur, Rajasthan – 302 001
                </div>
              </div>
            </div>
          </div>
          <iframe
            title="Office Location"
            src="https://maps.google.com/maps?q=Bhawani+Singh+Road+C-Scheme+Jaipur+Rajasthan&output=embed&z=15"
            className={styles.mapFrame}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Chiranjiv Capital office location map"
          />
        </AnimatedSection>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Contact Chiranjiv Capital Services Limited in Jaipur. Book a consultation for IPO advisory, M&A due diligence, capital market services, or compliance management."
        canonical="/contact"
        schema={localBusinessSchema}
      />
      <PageHero/>
      <ContactGrid/>
      <MapSection/>
    </>
  );
}
