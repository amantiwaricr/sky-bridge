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
 * There is no backend yet. Rather than faking a successful send, the form
 * validates and then hands the user a mailto: link pre-filled with what they
 * typed, so the enquiry still reaches the company.
 *
 * TO WIRE UP A REAL BACKEND: set `contact.formEndpoint` in companyData.js.
 * The submit handler below will POST the values there as JSON.
 */
export function ContactForm() {
  const formId = useId();
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | sent | error | no-endpoint

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

    if (!contact.formEndpoint) {
      setStatus('no-endpoint');
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

  const mailtoHref = recipient
    ? `mailto:${recipient}?subject=${encodeURIComponent(
        `Website enquiry from ${values.name}`
      )}&body=${encodeURIComponent(
        [
          `Name: ${values.name}`,
          `Email: ${values.email}`,
          values.phone && `Phone: ${values.phone}`,
          values.company && `Company: ${values.company}`,
          '',
          values.message,
        ]
          .filter(Boolean)
          .join('\n')
      )}`
    : '';

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

        {status === 'no-endpoint' && (
          <p className={styles.failure}>
            {recipient ? (
              <>
                This form is not connected to a mail service yet. Use the button
                below to send the same details by email instead.{' '}
                <a href={mailtoHref} className={styles.inlineLink}>
                  Open your email client
                </a>
                .
              </>
            ) : (
              <>
                This form is not connected to a mail service yet. Add a contact
                email or a form endpoint in <code>companyData.js</code> to enable
                submissions.
              </>
            )}
          </p>
        )}
      </div>
    </form>
  );
}
