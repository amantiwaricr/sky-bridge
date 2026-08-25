import { MapPin } from 'lucide-react';
import { contact } from '../../data/companyData';
import styles from './MapEmbed.module.css';

/**
 * Renders a map for the first office that supplies a `mapQuery` address.
 *
 * Uses OpenStreetMap's embed, which needs no API key. It geocodes from the
 * address string, so no coordinates are invented anywhere.
 *
 * TO SWAP IN GOOGLE MAPS OR MAPBOX: replace the iframe `src` below. Both
 * accept the same address string via their embed APIs plus a key, e.g.
 *   https://www.google.com/maps/embed/v1/place?key=YOUR_KEY&q=<mapQuery>
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
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=&layer=mapnik&marker=&query=${query}`;

  return (
    <div className={styles.wrap}>
      <iframe
        title={`Map showing ${office.label || 'our office'}`}
        src={src}
        className={styles.frame}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a
        href={`https://www.openstreetmap.org/search?query=${query}`}
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Open in maps
      </a>
    </div>
  );
}
