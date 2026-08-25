import { useCallback, useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { launchNotice } from '../../data/companyData';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import styles from './NoticeModal.module.css';

const SESSION_KEY = 'sbo:launch-notice-dismissed';

/**
 * Public notice shown over the page on load.
 *
 * Built on the native <dialog> element rather than a hand-rolled overlay:
 * showModal() gives a real focus trap, Escape-to-close, an inert background
 * and correct dialog semantics for free, which is hard to reproduce reliably
 * by hand.
 */
export function NoticeModal() {
  const dialogRef = useRef(null);
  const [open, setOpen] = useState(false);

  useLockBodyScroll(open);

  useEffect(() => {
    if (!launchNotice.enabled || !launchNotice.image?.src) return;

    // Optional: only nag once per browser tab session.
    if (launchNotice.showOncePerSession) {
      try {
        if (sessionStorage.getItem(SESSION_KEY) === '1') return;
      } catch {
        // Private mode or blocked storage -- fall through and show the notice.
      }
    }

    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;

    dialog.showModal();
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    if (launchNotice.showOncePerSession) {
      try {
        sessionStorage.setItem(SESSION_KEY, '1');
      } catch {
        // Nothing to do -- the notice simply shows again next time.
      }
    }
  }, []);

  const dismiss = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  // Clicking the backdrop closes. The backdrop is not a child element, so a
  // click that lands on the <dialog> itself rather than on its content is a
  // backdrop click.
  const handleDialogClick = useCallback((event) => {
    if (event.target === dialogRef.current) dialogRef.current.close();
  }, []);

  if (!launchNotice.enabled || !launchNotice.image?.src) return null;

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby="launch-notice-title"
      onClose={handleClose}
      onCancel={handleClose}
      onClick={handleDialogClick}
    >
      <div className={styles.panel}>
        <div className={styles.head}>
          <h2 id="launch-notice-title" className={styles.title}>
            {launchNotice.title}
          </h2>
          <button type="button" className={styles.close} onClick={dismiss} aria-label="Close notice">
            <X size={22} aria-hidden="true" />
          </button>
        </div>

        {/* Explicitly focusable so the tall notice can be scrolled by keyboard.
            Chromium focuses scroll containers automatically, Firefox does not. */}
        <div
          className={styles.body}
          tabIndex={0}
          role="group"
          aria-label="Notice document, scrollable"
        >
          <img
            src={launchNotice.image.src}
            alt={launchNotice.image.alt}
            className={styles.image}
          />
        </div>

        <div className={styles.foot}>
          <button type="button" className={styles.continueButton} onClick={dismiss}>
            {launchNotice.dismissLabel}
          </button>
        </div>
      </div>
    </dialog>
  );
}
