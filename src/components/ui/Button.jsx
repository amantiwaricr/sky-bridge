import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const isExternal = (href) => /^(https?:|mailto:|tel:)/.test(href);
const isInPageAnchor = (href) => href.startsWith('#');

/**
 * Renders whichever element matches the destination, so an action is never a
 * clickable div and keyboard behaviour matches what the user sees:
 * a router Link for internal routes, a plain anchor for external links,
 * mail/phone links and in-page anchors, and a button when there is no href.
 */
export function Button({
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}) {
  const classes = [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(' ');

  if (href) {
    if (isExternal(href)) {
      const newTab = href.startsWith('http');
      return (
        <a
          href={href}
          className={classes}
          {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          {...rest}
        >
          {children}
        </a>
      );
    }

    if (isInPageAnchor(href)) {
      return (
        <a href={href} className={classes} {...rest}>
          {children}
        </a>
      );
    }

    return (
      <Link to={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
