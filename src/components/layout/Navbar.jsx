import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navigation, primaryCta } from '../../data/companyData';
import { useScrolled } from '../../hooks/useScrollPosition';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Logo } from './Logo';
import styles from './Navbar.module.css';

/**
 * Fixed header with route navigation and a mobile drawer.
 * Active state comes from the router, so the current page is marked whatever
 * the scroll position.
 */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const menuId = useId();
  const toggleRef = useRef(null);
  const { pathname } = useLocation();

  const close = useCallback(() => setOpen(false), []);

  // Close the drawer when the route changes, so tapping a link in the drawer
  // does not leave it covering the page it just navigated to.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
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
        <NavLink to="/" className={styles.brand} onClick={close}>
          <Logo />
        </NavLink>

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.navList}>
            {navigation.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={styles.navLink}>
                  {item.label}
                </NavLink>
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
            {navigation.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={styles.drawerLink} onClick={close}>
                  {item.label}
                </NavLink>
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
