import { useId, useState } from 'react';
import { contact } from '../../data/companyData';
import { Button } from '../ui/Button';
import styles from './ContactForm.module.css';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FIELDS = [
  { name: 'name', label: 'Full name', type: 'text', required: true, autoComplete: 'name' },
  { name: 'email', label: 'Email address', type: 'email', required: true, autoComplete: 'email' },
  { name: 'phone', label: 'Phone number', type: 'tel', required: false, autoComplete: 'tel' },
  { name: 'company', label: 'Company', type: 'text', required: false, autoComplete: 'organization' },
];

const EMPTY = { name: '', email: '', phone: '', company: '', message: '' };

/**
 * Some mail clients (Outlook among them) drop mailto: links beyond roughly
 * 2,000 characters, which would fail silently. The message field is capped
 * below that, and this is the belt-and-braces check on the finished URL.
 */
const MAILTO_LIMIT = 2000;
const MESSAGE_LIMIT = 1200;

/** Builds a mailto: URL carrying the enquiry as a ready-to-send draft. */
function buildMailto(recipient, values) {
  if (!recipient) return '';

  const subject = values.company
    ? `Website enquiry from ${values.name} (${values.company})`
    : `Website enquiry from ${values.name}`;

  // Built in two parts on purpose: an empty string means "omit this optional
  // line", so it cannot also serve as the blank line before the message.
  const details = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    values.phone ? `Phone: ${values.phone}` : null,
    values.company ? `Company: ${values.company}` : null,
  ].filter(Boolean);

  const body = `${details.join('\n')}\n\n${values.message}`;

  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!values.message.trim()) {
    errors.message = 'Please tell us how we can help.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Please provide a little more detail (at least 10 characters).';
  }
  return errors;
}

/**
 * Client-side validated enquiry form.
 *
 * With no backend configured, submitting opens the visitor's own mail client
 * on a draft addressed to the company, pre-filled with everything they typed.
 * Nothing leaves the browser by itself -- the visitor still presses send in
 * their mail app -- so the form never claims to have sent anything.
 *
 * TO WIRE UP A REAL BACKEND: set `contact.formEndpoint` in companyData.js.
 * The submit handler then POSTs the values there as JSON instead.
 */
export function ContactForm() {
  const formId = useId();
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  // idle | submitting | sent | error | mail-opened | too-long | no-recipient
  const [status, setStatus] = useState('idle');

  const recipient = contact.emails[0] ?? '';

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear a field's error as soon as the user starts correcting it.
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      document.getElementById(`${formId}-${Object.keys(nextErrors)[0]}`)?.focus();
      return;
    }

    // No backend: hand the enquiry to the visitor's mail client as a draft.
    if (!contact.formEndpoint) {
      if (!recipient) {
        setStatus('no-recipient');
        return;
      }

      const href = buildMailto(recipient, values);
      if (href.length > MAILTO_LIMIT) {
        setStatus('too-long');
        return;
      }

      // Assigning a mailto: hands off to the OS handler; the page stays put.
      window.location.href = href;
      setStatus('mail-opened');
      return;
    }

    setStatus('submitting');
    try {
      const response = await fetch(contact.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      setStatus('sent');
      setValues(EMPTY);
    } catch {
      setStatus('error');
    }
  };

  const mailtoHref = buildMailto(recipient, values);

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.rows}>
        {FIELDS.map((field) => {
          const id = `${formId}-${field.name}`;
          const errorId = `${id}-error`;
          const error = errors[field.name];

          return (
            <div key={field.name} className={styles.field}>
              <label htmlFor={id} className={styles.label}>
                {field.label}
                {field.required && (
                  <span className={styles.required} aria-hidden="true">
                    *
                  </span>
                )}
              </label>
              <input
                id={id}
                name={field.name}
                type={field.type}
                value={values[field.name]}
                onChange={handleChange}
                autoComplete={field.autoComplete}
                required={field.required}
                aria-invalid={error ? 'true' : undefined}
                aria-describedby={error ? errorId : undefined}
                className={[styles.input, error ? styles.inputError : ''].join(' ')}
              />
              {error && (
                <p id={errorId} className={styles.error}>
                  {error}
                </p>
              )}
            </div>
          );
        })}

        <div className={[styles.field, styles.fullWidth].join(' ')}>
          <label htmlFor={`${formId}-message`} className={styles.label}>
            How can we help?
            <span className={styles.required} aria-hidden="true">
              *
            </span>
          </label>
          <textarea
            id={`${formId}-message`}
            name="message"
            rows={5}
            value={values.message}
            onChange={handleChange}
            required
            maxLength={MESSAGE_LIMIT}
            aria-invalid={errors.message ? 'true' : undefined}
            aria-describedby={errors.message ? `${formId}-message-error` : undefined}
            className={[styles.input, styles.textarea, errors.message ? styles.inputError : '']
              .filter(Boolean)
              .join(' ')}
          />
          {errors.message && (
            <p id={`${formId}-message-error`} className={styles.error}>
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <div className={styles.footer}>
        <Button type="submit" size="lg" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Send enquiry'}
        </Button>
        <p className={styles.note}>
          <span aria-hidden="true">*</span> Required fields
        </p>
      </div>

      {/* Status is announced to assistive tech as it changes. */}
      <div role="status" aria-live="polite" className={styles.status}>
        {status === 'sent' && (
          <p className={styles.success}>
            Thank you — your enquiry has been sent. We will be in touch shortly.
          </p>
        )}

        {status === 'error' && (
          <p className={styles.failure}>
            Sorry, something went wrong sending your enquiry.
            {recipient && (
              <>
                {' '}
                Please email us directly at{' '}
                <a href={`mailto:${recipient}`} className={styles.inlineLink}>
                  {recipient}
                </a>
                .
              </>
            )}
          </p>
        )}

        {status === 'mail-opened' && (
          <p className={styles.success}>
            Your email app should now be open with this enquiry ready to go —
            <strong> press send there to deliver it</strong>.
            {recipient && (
              <>
                {' '}
                If nothing opened, email us directly at{' '}
                <a href={`mailto:${recipient}`} className={styles.inlineLink}>
                  {recipient}
                </a>
                , or{' '}
                <a href={mailtoHref} className={styles.inlineLink}>
                  try opening the draft again
                </a>
                .
              </>
            )}
          </p>
        )}

        {status === 'too-long' && (
          <p className={styles.failure}>
            This message is too long to hand to an email app. Please shorten it,
            or email us directly at{' '}
            <a href={`mailto:${recipient}`} className={styles.inlineLink}>
              {recipient}
            </a>
            .
          </p>
        )}

        {status === 'no-recipient' && (
          <p className={styles.failure}>
            No contact email is configured yet. Add one to{' '}
            <code>contact.emails</code> in <code>companyData.js</code> to enable
            this form.
          </p>
        )}
      </div>
    </form>
  );
}
