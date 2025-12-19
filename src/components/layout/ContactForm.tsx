import { Turnstile } from '@marsidev/react-turnstile';
import { useState } from 'react';

import { env } from '@/lib/env';
import styles from '@/styles/ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [turnstileToken, setTurnstileToken] = useState('');
  const [status, setStatus] = useState('idle');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/.test(email);
  };

  const validateName = (name: string) => {
    return /^[a-z\s'-]+$/i.test(name.trim());
  };

  const handleBlur = (field: 'name' | 'email' | 'message') => {
    setTouched({ ...touched, [field]: true });

    if (field === 'email') {
      if (!formData.email.trim()) {
        setErrors({ ...errors, email: 'This field is required' });
      } else if (!validateEmail(formData.email)) {
        setErrors({ ...errors, email: 'Sorry, invalid format' });
      } else {
        setErrors({ ...errors, email: '' });
      }
    } else if (field === 'name') {
      if (!formData.name.trim()) {
        setErrors({ ...errors, name: 'This field is required' });
      } else if (formData.name.trim().length < 2) {
        setErrors({ ...errors, name: 'Name must be at least 2 characters' });
      } else if (!validateName(formData.name)) {
        setErrors({ ...errors, name: 'Name must contain letters only' });
      } else {
        setErrors({ ...errors, name: '' });
      }
    } else if (field === 'message') {
      if (!formData.message.trim()) {
        setErrors({ ...errors, message: 'This field is required' });
      } else if (formData.message.trim().length < 10) {
        setErrors({
          ...errors,
          message: 'Message must be at least 10 characters',
        });
      } else {
        setErrors({ ...errors, message: '' });
      }
    }
  };

  const getInputState = (field: 'name' | 'email' | 'message') => {
    if (!touched[field]) return styles.normal;
    if (errors[field]) return styles.invalid;
    return styles.valid;
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setStatus('loading');

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        turnstileToken,
      }),
    });

    setStatus(response.ok ? 'success' : 'error');
  };

  return (
    <div className={styles.container__form}>
      <div className={styles.form__text}>
        <h1>Contact</h1>
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I'll get back to you as soon as possible.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.input__wrapper}>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            onBlur={() => handleBlur('name')}
            className={getInputState('name')}
            required
          />
          {touched.name && errors.name && (
            <span className={styles.error}>{errors.name}</span>
          )}
        </div>
        <div className={styles.input__wrapper}>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            onBlur={() => handleBlur('email')}
            className={getInputState('email')}
            required
          />
          {touched.email && errors.email && (
            <span className={styles.error}>{errors.email}</span>
          )}
        </div>
        <div className={styles.input__wrapper}>
          <textarea
            placeholder="Message"
            value={formData.message}
            onChange={e =>
              setFormData({ ...formData, message: e.target.value })
            }
            onBlur={() => handleBlur('message')}
            className={getInputState('message')}
            required
          />
          {touched.message && errors.message && (
            <span className={styles.error}>{errors.message}</span>
          )}
        </div>

        <Turnstile
          siteKey={env.PUBLIC_TURNSTILE_SITE_KEY}
          onSuccess={token => setTurnstileToken(token)}
          data-size="flexible"
          data-theme="dark"
          data-appearance="interaction-only"
        />
        <button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
        {status === 'success' && <p>Sent!</p>}
        {status === 'error' && <p>Error!</p>}
      </form>
    </div>
  );
}
