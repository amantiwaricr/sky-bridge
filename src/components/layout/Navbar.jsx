import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigation, primaryCta } from '../../data/companyData';
import { useScrolled } from '../../hooks/useScrollPosition';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Logo } from './Logo';
import styles from './Navbar.module.css';

/**
 * Fixed header with in-page navigation and a mobile drawer.
 * Only links whose target section actually rendered are shown, so removing
 * content from companyData.js never leaves a dead nav link behind.
 */
export function Navbar({ availableSections }) {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const menuId = useId();
  const toggleRef = useRef(null);

  const links = useMemo(
    () => navigation.filter((item) => availableSections.includes(item.id)),
    [availableSections]
  );

  const activeId = useActiveSection(useMemo(() => links.map((l) => l.id), [links]));

  const close = useCallback(() => setOpen(false), []);
  useLockBodyScroll(open);

  // Escape closes the drawer and returns focus to the control that opened it.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        close();
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, close]);

  // Close the drawer if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 60rem)');
    const onChange = (event) => event.matches && close();
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [close]);

  return (
    <header className={[styles.header, scrolled ? styles.scrolled : ''].join(' ')}>
      <Container className={styles.inner}>
        <a href="#top" className={styles.brand} onClick={close}>
          <Logo />
        </a>

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.navList}>
            {links.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={styles.navLink}
                  aria-current={activeId === item.id ? 'true' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          {primaryCta.label && (
            <Button href={primaryCta.href} size="sm" className={styles.desktopCta}>
              {primaryCta.label}
            </Button>
          )}

          <button
            ref={toggleRef}
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {/* Kept mounted but inert when closed so the open/close transition runs. */}
      <div
        id={menuId}
        className={[styles.drawer, open ? styles.drawerOpen : ''].join(' ')}
        inert={!open}
      >
        <nav aria-label="Mobile">
          <ul className={styles.drawerList}>
            {links.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={styles.drawerLink} onClick={close}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {primaryCta.label && (
          <Button href={primaryCta.href} className={styles.drawerCta} onClick={close}>
            {primaryCta.label}
          </Button>
        )}
      </div>

      <button
        type="button"
        className={[styles.scrim, open ? styles.scrimOpen : ''].join(' ')}
        onClick={close}
        tabIndex={-1}
        aria-hidden="true"
      />
    </header>
  );
}
