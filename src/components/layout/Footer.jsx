import { ArrowRight, ChevronRight, Clock, Globe, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  company, contact, footer, navigation, services, socials,
} from '../../data/companyData';
import { Container } from '../ui/Container';
import { Icon } from '../ui/Icon';
import styles from './Footer.module.css';

/** A footer link with the small leading chevron used throughout the columns. */
function FooterLink({ to, children }) {
  return (
    <Link to={to} className={styles.link}>
      <ChevronRight size={14} aria-hidden="true" className={styles.chevron} />
      <span>{children}</span>
    </Link>
  );
}

/** One "get in touch" row: a circular icon badge beside its content. */
function ContactRow({ icon: Glyph, children }) {
  return (
    <li className={styles.contactRow}>
      <span className={styles.contactBadge} aria-hidden="true">
        <Glyph size={16} strokeWidth={2} />
      </span>
      <div className={styles.contactBody}>{children}</div>
    </li>
  );
}

/**
 * Site footer.
 *
 * Every block is driven by companyData and renders only when it has content,
 * so nothing here ever links to a page that does not exist.
 */
export function Footer() {
  const year = new Date().getFullYear();
  const quickLinks = navigation;
  const categories = services.items.slice(0, 8);
  const office = contact.offices[0];

  const copyright = footer.copyright
    .replace('{year}', String(year))
    .replace('{company}', company.name || 'This company')
    // The name ends in "Pvt. Ltd." and the template adds ". All rights
    // reserved.", which would render a double full stop.
    .replace(/\.\./g, '.');

  const hasContact =
    office || contact.phones.length > 0 || contact.emails.length > 0 || company.website;

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brandCol}>
            {company.logo?.src && (
              <span className={styles.logoBadge}>
                <img
                  src={company.logo.src}
                  alt={company.logo.alt || company.name}
                  className={styles.logoImage}
                  width="900"
                  height="398"
                />
              </span>
            )}
            {footer.description && (
              <p className={styles.blurb}>
                {footer.description}
                <span className={styles.blurbRule} aria-hidden="true" />
              </p>
            )}
          </div>

          {quickLinks.length > 0 && (
            <nav className={styles.col} aria-labelledby="footer-quick-heading">
              <h2 id="footer-quick-heading" className={styles.colHeading}>
                Quick Links
              </h2>
              <ul className={styles.list}>
                {quickLinks.map((item) => (
                  <li key={item.to}>
                    <FooterLink to={item.to}>{item.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {categories.length > 0 && (
            <div className={styles.col}>
              <h2 className={styles.colHeading}>Job Categories</h2>
              <ul className={styles.list}>
                {categories.map((category) => (
                  <li key={category.title}>
                    <FooterLink to="/jobs">{category.title}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Renders only if legal pages actually exist -- see companyData. */}
          {footer.legalLinks.length > 0 && (
            <div className={styles.col}>
              <h2 className={styles.colHeading}>Compliance</h2>
              <ul className={styles.list}>
                {footer.legalLinks.map((item) => (
                  <li key={item.label}>
                    <FooterLink to={item.href}>{item.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {hasContact && (
            <div className={styles.col}>
              <h2 className={styles.colHeading}>Get in Touch</h2>
              <ul className={styles.contactList}>
                {office && (
                  <ContactRow icon={MapPin}>
                    <address className={styles.address}>
                      {office.address.join(', ')}
                    </address>
                  </ContactRow>
                )}

                {contact.phones.map((phone) => (
                  <ContactRow key={phone} icon={Phone}>
                    <a href={`tel:${phone.replace(/[^+\d]/g, '')}`} className={styles.contactLink}>
                      {phone}
                    </a>
                  </ContactRow>
                ))}

                {contact.emails.map((email) => (
                  <ContactRow key={email} icon={Mail}>
                    <a href={`mailto:${email}`} className={styles.contactLink}>
                      {email}
                    </a>
                  </ContactRow>
                ))}

                {company.website && (
                  <ContactRow icon={Globe}>
                    <a
                      href={company.website}
                      className={styles.contactLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {company.website.replace(/^https?:\/\//, '')}
                    </a>
                  </ContactRow>
                )}

                {contact.hours && (
                  <ContactRow icon={Clock}>
                    <span>{contact.hours}</span>
                  </ContactRow>
                )}
              </ul>
            </div>
          )}
        </div>

        {footer.countries.length > 0 && (
          <section className={styles.countries} aria-labelledby="footer-countries-heading">
            <h2 id="footer-countries-heading" className={styles.countriesHeading}>
              Countries We Serve
            </h2>
            <ul className={styles.chips}>
              {footer.countries.map((countryName) => (
                <li key={countryName} className={styles.chip}>
                  {countryName}
                </li>
              ))}
            </ul>
          </section>
        )}

        {socials.length > 0 && (
          <div className={styles.socialRow}>
            <span className={styles.rule} aria-hidden="true" />
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
                    <Icon name={social.icon} size={17} />
                  </a>
                </li>
              ))}
            </ul>
            <span className={styles.rule} aria-hidden="true" />
          </div>
        )}

        <div className={styles.bottom}>
          <p className={styles.registrations}>
            {company.registrationNumber && (
              <span className={styles.registration}>
                Reg. No. {company.registrationNumber}
              </span>
            )}
            {company.registrationNumber && company.licenceNumber && (
              /* The flex gap separates these visually only; without a real
                 character they run together when copied or read aloud. */
              <span className="visually-hidden"> · </span>
            )}
            {company.licenceNumber && (
              <span className={styles.registration}>
                Foreign Employment License No. {company.licenceNumber}
              </span>
            )}
          </p>
          <p className={styles.copyright}>{copyright}</p>
        </div>

        {(footer.credit?.name || footer.workWithUs?.label) && (
          <div className={styles.bottomBar}>
            {footer.credit?.name && (
              <p className={styles.credit}>
                {footer.credit.prefix}{' '}
                {footer.credit.url ? (
                  <a
                    href={footer.credit.url}
                    className={styles.creditLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {footer.credit.name}
                  </a>
                ) : (
                  <span className={styles.creditName}>{footer.credit.name}</span>
                )}
              </p>
            )}

            {footer.workWithUs?.label && (
              <Link to={footer.workWithUs.href} className={styles.workLink}>
                {footer.workWithUs.label}
                <ArrowRight size={15} aria-hidden="true" className={styles.workArrow} />
              </Link>
            )}
          </div>
        )}
      </Container>
    </footer>
  );
}
