import React, { useState, useCallback, useMemo, type FormEvent, type ChangeEvent } from 'react';
import styles from './ZohoForm.module.scss';
import { submitForm } from '../api/formAPI';

// ── Types ──────────────────────────────────────────────────────────────────────
type FormData = {
  Name: string;
  Email: string;
  Phone: string;
  From: string;
  To: string;
  Goods: string;
};

type Errors = Partial<Record<keyof FormData, string>>;
type Touched = Partial<Record<keyof FormData, boolean>>;

interface Props {
  successCondition: React.Dispatch<React.SetStateAction<boolean>>;
}

// ── Field config ───────────────────────────────────────────────────────────────
const FIELDS: {
  key: keyof FormData;
  label: string;
  placeholder: string;
  type?: string;
  icon: React.ReactNode;
}[] = [
    {
      key: 'Name', label: 'Your Name', placeholder: 'e.g. Rahul Sharma', type: 'text',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      key: 'Phone', label: 'Mobile Number', placeholder: '+91 98765 4321', type: 'tel',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 4.18 2 2 0 015.07 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L9.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
    },
    {
      key: 'Email', label: 'Email Address', placeholder: 'rahul@example.com', type: 'email',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      key: 'From', label: 'Pickup City', placeholder: 'e.g. Mumbai', type: 'text',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="10" r="3" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        </svg>
      ),
    },
    {
      key: 'To', label: 'Drop City', placeholder: 'e.g. Delhi', type: 'text',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="3 11 22 2 13 21 11 13 3 11" />
        </svg>
      ),
    },
    {
      key: 'Goods', label: 'Goods Type', placeholder: 'e.g. Household, Car, Office', type: 'text',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10V6a1 1 0 00-.6-.9l-8-3.5a1 1 0 00-.8 0l-8 3.5A1 1 0 003 6v4" /><path d="M12 2.5V13M3 10l9 4 9-4" /><rect x="3" y="13" width="18" height="8" rx="1" />
        </svg>
      ),
    },
  ];

// ── Validation ─────────────────────────────────────────────────────────────────
const validate = (data: FormData): Errors => {
  const errs: Errors = {};

  if (!data.Name.trim())
    errs.Name = 'Name is required';
  else if (data.Name.trim().length < 2)
    errs.Name = 'Name must be at least 2 characters';

  if (!data.Phone.trim())
    errs.Phone = 'Mobile number is required';
  else if (!/^[6-9]\d{9}$/.test(data.Phone.replace(/[\s\-+]/g, '')))
    errs.Phone = 'Enter a valid 10-digit Indian mobile number';

  if (!data.Email.trim())
    errs.Email = 'Email is required';
  else if (!/\S+@\S+\.\S+/.test(data.Email))
    errs.Email = 'Enter a valid email address';

  if (!data.From.trim())
    errs.From = 'Pickup city is required';
  else if (data.From.trim().length < 2)
    errs.From = 'Enter a valid city name';

  if (!data.To.trim())
    errs.To = 'Drop city is required';
  else if (data.To.trim().length < 2)
    errs.To = 'Enter a valid city name';

  if (!data.Goods.trim())
    errs.Goods = 'Please mention goods type';

  return errs;
};

// ── Component ──────────────────────────────────────────────────────────────────
const ZohoForm: React.FC<Props> = ({ successCondition }) => {
  const empty: FormData = { Name: '', Email: '', Phone: '', From: '', To: '', Goods: '' };

  const [formData, setFormData] = useState<FormData>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Touched>({});
  const [loading, setLoading] = useState(false);

  const fireConversion = () => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-17573064597/5JeFCIznu74bEJXfvrtB',
        value: 1.0,
        currency: 'INR',
      });
    }
  };

  // Live validate on change
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);

    // Re-validate only touched fields in real-time
    if (touched[name as keyof FormData]) {
      const errs = validate(updated);
      setErrors((prev) => ({ ...prev, [name]: errs[name as keyof FormData] }));
    }
  }, [formData, touched]);

  // Validate on blur
  const handleBlur = useCallback((key: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
    const errs = validate(formData);
    setErrors((prev) => ({ ...prev, [key]: errs[key] }));
  }, [formData]);

  const handleReset = () => {
    setFormData(empty);
    setErrors({});
    setTouched({});
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Mark all touched
    const allTouched: Touched = {};
    FIELDS.forEach((f) => { allTouched[f.key] = true; });
    setTouched(allTouched);

    const errs = validate(formData);
    setErrors(errs);

    if (Object.keys(errs).length > 0) return; // block submit

    setLoading(true);
    try {
      type FormPayload = FormData & { landingPage: string };
      const payload: FormPayload = { ...formData, landingPage: window.location.href };
      const response = await submitForm(payload);
      if (response) {
        handleReset();
        successCondition(true);
        fireConversion();
        if (window.fbq) window.fbq('track', 'Lead');
      } else {
        alert('Failed to submit form. Please try again.');
      }
    } catch (err) {
      alert('Error submitting form: ' + err);
    } finally {
      setLoading(false);
    }
  };

  const completedCount = useMemo(() => {
    const errs = validate(formData);
    return FIELDS.filter((f) => !errs[f.key]).length;
  }, [formData]);
  const progressPct = Math.round((completedCount / FIELDS.length) * 100);

  return (
    <div className={styles.root}>
      {/* Progress bar */}
      <div className={styles.progress} aria-label={`Form ${progressPct}% complete`}>
        <div className={styles.progress__bar} style={{ width: `${progressPct}%` }} />
      </div>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.grid}>
          {FIELDS.map((field) => {
            const hasError = touched[field.key] && errors[field.key];
            const isOk = touched[field.key] && !errors[field.key] && formData[field.key];

            return (
              <div
                key={field.key}
                className={`${styles.field} ${hasError ? styles['field--error'] : ''} ${isOk ? styles['field--ok'] : ''}`}
              >
                <label className={styles.label} htmlFor={field.key}>
                  <span className={styles.label__icon}>{field.icon}</span>
                  {field.label}
                  <span className={styles.label__req} aria-hidden>*</span>
                </label>

                <div className={styles.inputWrap}>
                  <input
                    id={field.key}
                    name={field.key}
                    type={field.type ?? 'text'}
                    value={formData[field.key]}
                    onChange={handleChange}
                    onBlur={() => handleBlur(field.key)}
                    placeholder={field.placeholder}
                    className={styles.input}
                    disabled={loading}
                    autoComplete={field.key === 'Email' ? 'email' : field.key === 'Phone' ? 'tel' : 'off'}
                    aria-invalid={!!hasError}
                    aria-describedby={hasError ? `err-${field.key}` : undefined}
                  />

                  {/* Status icon */}
                  {isOk && (
                    <span className={styles.inputWrap__check} aria-hidden>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                  )}
                  {hasError && (
                    <span className={styles.inputWrap__x} aria-hidden>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </span>
                  )}
                </div>

                {hasError && (
                  <p className={styles.errorMsg} id={`err-${field.key}`} role="alert">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    {errors[field.key]}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          <button
            type="submit"
            className={styles.submitBtn}
            disabled={loading}
            aria-label="Get free moving quote"
          >
            {loading ? (
              <span className={styles.submitBtn__loader}>
                <span className={styles.spinner} />
                Submitting…
              </span>
            ) : (
              <span className={styles.submitBtn__inner}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                Get Free Quote
              </span>
            )}
          </button>

          <button
            type="button"
            className={styles.resetBtn}
            onClick={handleReset}
            disabled={loading}
            aria-label="Reset form"
          >
            Reset
          </button>

          <span className={styles.trustLine} aria-hidden>
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            We'll call back in 15 minutes
          </span>
        </div>
      </form>
    </div>
  );
};

export default ZohoForm;