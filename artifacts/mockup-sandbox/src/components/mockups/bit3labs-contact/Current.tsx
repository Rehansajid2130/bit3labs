import { useState, type FormEvent, type AnchorHTMLAttributes, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import "./_group.css";

function Link({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; children?: ReactNode }) {
  return <a {...props}>{children}</a>;
}

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const focus = String(data.get('focus') || '');
    const message = String(data.get('message') || '').trim();
    if (!name || !email || !focus || !message) { setFormError('Please complete each required field.'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setFormError('Enter a valid email address.'); return; }
    setFormError('');
    setSubmitted(true);
    form.reset();
  };
  return <div className="contact-page">
    <main id="contact-top">
      <section className="contact-hero" aria-labelledby="contact-heading">
        <div className="contact-kicker"><span className="red-line" aria-hidden="true" /><span className="eyebrow">Contact</span></div>
        <div className="contact-layout">
          <aside className="contact-info" aria-label="Project areas">
            <a href="#contact-form" className="contact-info-row"><span className="contact-info-icon" aria-hidden="true"><ArrowUpRight size={13} /></span><span>Custom websites</span></a>
            <a href="#contact-form" className="contact-info-row"><span className="contact-info-icon" aria-hidden="true"><ArrowUpRight size={13} /></span><span>Mobile apps</span></a>
            <a href="#contact-form" className="contact-info-row"><span className="contact-info-icon" aria-hidden="true"><ArrowUpRight size={13} /></span><span>ERP systems</span></a>
          </aside>
          <div className="contact-body">
            <h1 className="display" id="contact-heading">Let’s create<br /><span>together.</span></h1>
            <div className="contact-form-wrap">
              {submitted ? <div className="success-panel" role="status" aria-live="polite"><span className="eyebrow">Preview only</span><h2>Message prepared.</h2><p>Nothing was sent or saved. This form still needs to be connected to an inbox.</p><button onClick={() => setSubmitted(false)} className="reset-link">Prepare another message <ArrowRight size={15} /></button></div> :
              <form className="inquiry-form dedicated-form" id="contact-form" onSubmit={handleSubmit} noValidate aria-describedby="preview-note">
                <label htmlFor="contact-name"><span className="field-label">Name <span aria-hidden="true">*</span></span><input id="contact-name" name="name" type="text" placeholder="Your name" autoComplete="name" required /></label>
                <label htmlFor="contact-email"><span className="field-label">Email <span aria-hidden="true">*</span></span><input id="contact-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required /></label>
                <label htmlFor="contact-focus"><span className="field-label">Project type <span aria-hidden="true">*</span></span><select id="contact-focus" name="focus" defaultValue="" required><option value="" disabled>Select a project type</option><option>Custom website</option><option>Mobile app</option><option>ERP system</option><option>Not sure yet</option></select></label>
                <label htmlFor="contact-message"><span className="field-label">Message <span aria-hidden="true">*</span></span><textarea id="contact-message" name="message" rows={3} placeholder="Tell us what you would like to create." required /></label>
                {formError && <p className="form-error" role="alert">{formError}</p>}
                <button className="submit-button" type="submit">Prepare message <ArrowUpRight size={16} /></button>
                <p className="privacy-note" id="preview-note">Preview only. Messages are not sent or stored.</p>
              </form>}
            </div>
          </div>
        </div>
        <div className="contact-watermark" aria-hidden="true">bit3labs</div>
      </section>
    </main>
    <footer className="contact-footer"><div className="contact-footer-inner section-wrap"><Link href="/" className="wordmark footer-mark">bit3labs<span className="period">.</span></Link><nav className="contact-footer-links" aria-label="Footer navigation"><a href="/#about">About</a><a href="/#work">Work</a><a href="/#services">Services</a><Link href="/contact">Contact</Link></nav><span className="eyebrow">© {new Date().getFullYear()} bit3labs</span></div></footer>
  </div>;
}

export function Current() { return <ContactPage />; }
