import { MapPin } from 'lucide-react';
import { contact } from '../../data/companyData';
import styles from './MapEmbed.module.css';

/**
 * Renders a map for the first office that supplies a `mapQuery` address.
 *
 * Uses Google's keyless embed, which geocodes from the address string, so no
 * coordinates are hard-coded or guessed anywhere. (OpenStreetMap's embed is
 * not an option here: it requires an explicit bounding box and has no
 * address-lookup parameter.)
 *
 * TO USE THE OFFICIAL MAPS EMBED API instead, swap the `src` for
 *   https://www.google.com/maps/embed/v1/place?key=YOUR_KEY&q=<mapQuery>
 * which takes the same address string plus an API key.
 */
export function MapEmbed() {
  const office = contact.offices.find((entry) => entry.mapQuery);

  if (!office) {
    // No address to plot -- show a labelled slot rather than a fake map.
    if (contact.offices.length === 0) return null;
    return (
      <div className={styles.placeholder}>
        <MapPin size={24} aria-hidden="true" />
        <p className={styles.placeholderText}>
          Map slot — add a <code>mapQuery</code> address to an office in{' '}
          <code>companyData.js</code> to enable it.
        </p>
      </div>
    );
  }

  const query = encodeURIComponent(office.mapQuery);
  const label = office.label ? `${office.label}, ${office.mapQuery}` : office.mapQuery;

  return (
    <div className={styles.wrap}>
      <iframe
        title={`Map showing ${label}`}
        src={`https://maps.google.com/maps?q=${query}&output=embed`}
        className={styles.frame}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${query}`}
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Open in maps
      </a>
    </div>
  );
}
