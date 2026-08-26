import styles from './Figure.module.css';

/**
 * Image slot that degrades gracefully. Until an asset is extracted from the
 * PDF, `image` is null and a labelled placeholder renders in its place -- so
 * layout is correct now and swapping in the real asset changes nothing else.
 *
 * @param {{ src: string, alt: string }|null} image
 * @param {string} placeholder  Describes the image that belongs here.
 * @param {'wide'|'square'|'portrait'|'auto'} ratio
 * @param {boolean} bare  Drops the panel, rounding and clipping -- for cut-out
 *                        subjects on a transparent background, where a framed
 *                        box would enclose empty space.
 */
export function Figure({
  image,
  placeholder = 'Image from company profile',
  ratio = 'wide',
  eager = false,
  bare = false,
  className = '',
}) {
  const classes = [styles.figure, styles[ratio], bare ? styles.bare : '', className]
    .filter(Boolean)
    .join(' ');

  if (!image?.src) {
    return (
      <div className={classes} data-placeholder="true">
        <span className={styles.placeholderText}>{placeholder}</span>
      </div>
    );
  }

  return (
    <div className={classes}>
      <img
        src={image.src}
        alt={image.alt ?? ''}
        className={styles.img}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        {...(eager ? { fetchPriority: 'high' } : {})}
      />
    </div>
  );
}
