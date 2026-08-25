import { Clock, Globe, Mail, MapPin, Phone } from 'lucide-react';
import { company, contact } from '../../data/companyData';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { ContactForm } from './ContactForm';
import { MapEmbed } from './MapEmbed';
import styles from './Contact.module.css';

function DetailBlock({ icon: Glyph, title, children }) {
  return (
    <div className={styles.detail}>
      <span className={styles.detailIcon}>
        <Glyph size={20} strokeWidth={1.7} aria-hidden="true" />
      </span>
      <div className={styles.detailBody}>
        <h3 className={styles.detailTitle}>{title}</h3>
        {children}
      </div>
    </div>
  );
}

export function Contact() {
  const hasDetails =
    contact.offices.length > 0 ||
    contact.phones.length > 0 ||
    contact.emails.length > 0 ||
    Boolean(company.website);

  if (!hasDetails && !contact.heading) return null;

  return (
    <Section id="contact" tone="subtle">
      <SectionHeading
        eyebrow={contact.eyebrow}
        heading={contact.heading || 'Get in Touch'}
        intro={contact.intro}
      />

      <div className={styles.layout}>
        <Reveal className={styles.details}>
          {contact.offices.map((office) => (
            <DetailBlock key={office.label || office.address[0]} icon={MapPin} title={office.label || 'Office'}>
              <address className={styles.address}>
                {office.address.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </address>
            </DetailBlock>
          ))}

          {contact.phones.length > 0 && (
            <DetailBlock icon={Phone} title="Phone">
              <ul className={styles.linkList}>
                {contact.phones.map((phone) => (
                  <li key={phone}>
                    <a href={`tel:${phone.replace(/[^+\d]/g, '')}`} className={styles.link}>
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
            </DetailBlock>
          )}

          {contact.emails.length > 0 && (
            <DetailBlock icon={Mail} title="Email">
              <ul className={styles.linkList}>
                {contact.emails.map((email) => (
                  <li key={email}>
                    <a href={`mailto:${email}`} className={styles.link}>
                      {email}
                    </a>
                  </li>
                ))}
              </ul>
            </DetailBlock>
          )}

          {company.website && (
            <DetailBlock icon={Globe} title="Website">
              <a
                href={company.website}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {company.website.replace(/^https?:\/\//, '')}
              </a>
            </DetailBlock>
          )}

          {contact.hours && (
            <DetailBlock icon={Clock} title="Business hours">
              <p className={styles.plain}>{contact.hours}</p>
            </DetailBlock>
          )}
        </Reveal>

        <Reveal className={styles.formCol} delay={80}>
          <ContactForm />
        </Reveal>
      </div>

      <MapEmbed />
    </Section>
  );
}
