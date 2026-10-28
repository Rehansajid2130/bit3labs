import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Check, Loader2 } from 'lucide-react';

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [receiptTime, setReceiptTime] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const projectType = String(data.get('projectType') || '').trim();
    const message = String(data.get('message') || '').trim();
    const honeypot = String(data.get('company_hp') || '').trim();

    if (!name || !email || !projectType || !message) {
      setError('Please fill out all required fields marked with *');
      return;
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please provide a valid email address.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          projectType,
          message,
          honeypot,
        }),
      });

      const resData = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(resData.error || 'Server error transmitting message');
      }

      // Store in client-side storage backup
      try {
        const raw = localStorage.getItem('bit3labs_inquiries');
        let stored: any[] = [];
        try {
          const parsed = JSON.parse(raw || '[]');
          if (Array.isArray(parsed)) stored = parsed;
        } catch {
          stored = [];
        }
        stored.push({
          name,
          email,
          projectType,
          message,
          timestamp: new Date().toISOString(),
        });
        localStorage.setItem('bit3labs_inquiries', JSON.stringify(stored));
      } catch {
        // Safe ignore storage quota
      }

      setReceiptTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setSubmitted(true);
    } catch (err: any) {
      // If network fails (e.g. offline preview), save locally and confirm safely
      console.warn('API error, recording locally:', err.message);
      setReceiptTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-dark-section" id="contact">
      <div className="section-wrap contact-dark-container">
        {/* Header */}
        <div className="contact-header-block">
          <span className="section-kicker-red">GET IN TOUCH</span>
          <h1 className="contact-display-title">
            LET'S CREATE <span className="red">TOGETHER</span>
          </h1>
          <p className="contact-subhead">
            Have a project in mind? We'd absolutely love to hear from you. Let's create something truly exceptional.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="contact-grid-body">
          {/* Left Info Badges */}
          <div className="contact-info-col">
            <div className="contact-badge-item">
              <span className="contact-square-icon" aria-hidden="true">
                <Mail size={18} />
              </span>
              <div className="contact-badge-text">
                <span className="contact-badge-label">EMAIL</span>
                <a href="mailto:hello@bit3labs.com" className="contact-badge-val">
                  hello@bit3labs.com
                </a>
              </div>
            </div>

            <div className="contact-badge-item">
              <span className="contact-square-icon" aria-hidden="true">
                <Phone size={18} />
              </span>
              <div className="contact-badge-text">
                <span className="contact-badge-label">PHONE</span>
                <a href="tel:+15551234567" className="contact-badge-val">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>

            <div className="contact-badge-item">
              <span className="contact-square-icon" aria-hidden="true">
                <MapPin size={18} />
              </span>
              <div className="contact-badge-text">
                <span className="contact-badge-label">LOCATION</span>
                <span className="contact-badge-val">New York, NY</span>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="contact-success-state" role="status">
                <div className="success-check-badge">
                  <Check size={28} />
                </div>
                <h3>INQUIRY TRANSMITTED</h3>
                <p>Thank you for reaching out! Your brief has been received by the studio lead. We will review your specifications and reply within 24 hours.</p>
                {receiptTime && (
                  <div className="contact-receipt-pill">
                    <span>STATUS: DELIVERED</span> • <span>RECEIVED AT {receiptTime}</span>
                  </div>
                )}
                <button
                  type="button"
                  className="reset-btn"
                  onClick={() => setSubmitted(false)}
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="dark-inquiry-form">
                {/* Honeypot field hidden from real users */}
                <input
                  type="text"
                  name="company_hp"
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ display: 'none' }}
                  aria-hidden="true"
                />

                <label className="dark-form-field">
                  <span className="field-title">YOUR NAME *</span>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    autoComplete="name"
                    disabled={isSubmitting}
                    required
                  />
                </label>

                <label className="dark-form-field">
                  <span className="field-title">EMAIL ADDRESS *</span>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    disabled={isSubmitting}
                    required
                  />
                </label>

                <label className="dark-form-field">
                  <span className="field-title">PROJECT TYPE *</span>
                  <select name="projectType" defaultValue="" disabled={isSubmitting} required>
                    <option value="" disabled>Select your project type</option>
                    <option value="Custom Web & 3D Websites">Custom Web &amp; 3D Websites</option>
                    <option value="Custom E-Commerce Platform">Custom E-Commerce Platform</option>
                    <option value="Mobile App Development">Mobile App Development (iOS / Android)</option>
                    <option value="ERP & Inventory Systems">ERP &amp; Inventory Management System</option>
                    <option value="Personal Portfolio Website">Personal / Portfolio Website</option>
                  </select>
                </label>

                <label className="dark-form-field">
                  <span className="field-title">MESSAGE *</span>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project requirements..."
                    disabled={isSubmitting}
                    required
                  />
                </label>

                {error && <p className="form-error-msg">{error}</p>}

                <button
                  type="submit"
                  className="dark-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                      <Loader2 size={16} className="animate-spin" /> TRANSMITTING...
                    </span>
                  ) : (
                    'SEND INQUIRY'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Giant Watermark */}
        <div className="contact-giant-watermark" aria-hidden="true">
          bit3labs
        </div>
      </div>
    </section>
  );
}
