import { Mail, MapPin, Phone } from 'lucide-react';
import {
  company, contact, footer, navigation, services, socials,
} from '../../data/companyData';
import { Container } from '../ui/Container';
import { Icon } from '../ui/Icon';
import { Logo } from './Logo';
import styles from './Footer.module.css';

/** Renders each column only when the PDF supplied content for it. */
export function Footer({ availableSections }) {
  const year = new Date().getFullYear();
  const links = navigation.filter((item) => availableSections.includes(item.id));
  const serviceNames = services.items.slice(0, 6);
  const office = contact.offices[0];

  const copyright = footer.copyright
    .replace('{year}', String(year))
    .replace('{company}', company.name || 'This company');

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <Logo tone="inverse" />
            {footer.description && <p className={styles.blurb}>{footer.description}</p>}

            {socials.length > 0 && (
              <ul className={styles.socials}>
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.url}
                      className={styles.socialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <Icon name={social.icon} size={18} />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {links.length > 0 && (
            <nav className={styles.col} aria-labelledby="footer-nav-heading">
              <h2 id="footer-nav-heading" className={styles.colHeading}>
                Explore
              </h2>
              <ul className={styles.list}>
                {links.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className={styles.link}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {serviceNames.length > 0 && (
            <div className={styles.col}>
              <h2 className={styles.colHeading}>Services</h2>
              <ul className={styles.list}>
                {serviceNames.map((service) => (
                  <li key={service.title}>
                    <a href="#services" className={styles.link}>
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {(office || contact.phones.length > 0 || contact.emails.length > 0) && (
            <div className={styles.col}>
              <h2 className={styles.colHeading}>Contact</h2>
              <ul className={styles.list}>
                {office && (
                  <li className={styles.contactRow}>
                    <MapPin size={16} aria-hidden="true" className={styles.contactIcon} />
                    <address className={styles.address}>
                      {office.address.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </address>
                  </li>
                )}
                {contact.phones.map((phone) => (
                  <li key={phone} className={styles.contactRow}>
                    <Phone size={16} aria-hidden="true" className={styles.contactIcon} />
                    <a href={`tel:${phone.replace(/[^+\d]/g, '')}`} className={styles.link}>
                      {phone}
                    </a>
                  </li>
                ))}
                {contact.emails.map((email) => (
                  <li key={email} className={styles.contactRow}>
                    <Mail size={16} aria-hidden="true" className={styles.contactIcon} />
                    <a href={`mailto:${email}`} className={styles.link}>
                      {email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>{copyright}</p>
          {footer.legalLinks.length > 0 && (
            <ul className={styles.legal}>
              {footer.legalLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={styles.link}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </footer>
  );
}
