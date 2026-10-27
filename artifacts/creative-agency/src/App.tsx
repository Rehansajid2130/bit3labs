import { useEffect, useState, type FormEvent } from 'react';
import { Link, useLocation } from 'wouter';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Menu, X, Plus, Minus } from 'lucide-react';

type Project = { title: string; type: string; category: string; image: string; tone: string; label: string };
const projects: Project[] = [
  { title: 'Form & Field', type: 'Digital commerce', category: 'Websites', image: '3739120', tone: 'field', label: 'Concept study · A considered home for everyday objects' },
  { title: 'Northline', type: 'Operations platform', category: 'ERP systems', image: '323780', tone: 'north', label: 'Concept study · Clarity for complex work' },
  { title: 'Common Ground', type: 'Mobile experience', category: 'Mobile apps', image: '3769021', tone: 'common', label: 'Concept study · A better way to find your people' },
  { title: 'Morrow House', type: 'Brand & website', category: 'Websites', image: '1648771', tone: 'morrow', label: 'Concept study · A softer kind of hospitality' },
  { title: 'Arcwell', type: 'Business system', category: 'ERP systems', image: '3184465', tone: 'arcwell', label: 'Concept study · One view across the whole business' },
];
const faqs = [
  ['What kind of businesses do you work with?', 'We partner with ambitious teams who are ready to make a meaningful move—whether that means launching something new, improving a digital product, or bringing fragmented operations together.'],
  ['How does a typical project begin?', 'We start with a focused conversation about your goals, constraints, and people. From there we shape a clear scope, a realistic timeline, and the right team before any production work begins.'],
  ['Can you work with our in-house team?', 'Absolutely. We regularly collaborate with internal product, marketing, and engineering teams. We can lead a project end to end or add the specialist capacity your team needs.'],
  ['What is a typical project timeline?', 'It depends on the challenge. A focused website can take 8–12 weeks; a larger platform or ERP engagement is usually phased over several months. We agree milestones together before kickoff.'],
  ['Do you provide support after launch?', 'Yes. We can stay close through launch and beyond with ongoing product support, optimization, and thoughtful improvements as your business evolves.'],
];
const categories = ['All work', 'Websites', 'Mobile apps', 'ERP systems'];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <article className={`project-card project-${index}`}>
    <Link className={`project-visual ${project.tone}`} href="/contact" aria-label={`Discuss a project like ${project.title}`}>
      <img src={`https://images.pexels.com/photos/${project.image}/pexels-photo-${project.image}.jpeg?auto=compress&cs=tinysrgb&w=1200`} alt={`${project.title} project visual`} loading="lazy" />
      <span className="project-stamp">{String(index + 1).padStart(2, '0')}</span>
      <span className="project-open"><ArrowUpRight size={21} /></span>
    </Link>
    <div className="project-info"><div><h3>{project.title}</h3><p>{project.label}</p></div><span>{project.type}</span></div>
  </article>;
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <header className="topbar">
    <Link href="/" className="wordmark" aria-label="bit3labs home">bit3labs<span className="period">.</span></Link>
    <nav className="desktop-nav" aria-label="Main navigation">
      <a href="/#about">About</a><a href="/#work">Work</a><a href="/#services">Services</a><a href="/#faq">FAQ</a><Link href="/contact">Contact</Link>
    </nav>
    <Link className="nav-cta" href="/contact">Start a project <ArrowUpRight size={15} /></Link>
    <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)} data-testid="button-menu">{menuOpen ? <X /> : <Menu />}</button>
    {menuOpen && <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
      {['About', 'Work', 'Services', 'FAQ'].map((item) => <a key={item} href={`/#${item.toLowerCase()}`} onClick={closeMenu}>{item}<ArrowUpRight size={16} /></a>)}
      <Link href="/contact" onClick={closeMenu}>Contact<ArrowUpRight size={16} /></Link>
      <span className="eyebrow">Independent by design · Working everywhere</span>
    </nav>}
  </header>;
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

function App() {
  const [location] = useLocation();
  const [activeFilter, setActiveFilter] = useState('All work');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const filtered = activeFilter === 'All work' ? projects : projects.filter((p) => p.category === activeFilter);
  useEffect(() => {
    const contact = location === '/contact';
    const title = contact ? 'Contact bit3labs — Start a digital project' : 'bit3labs — Independent Digital Studio';
    const description = contact
      ? 'Start a conversation about a custom website, mobile app, or ERP system with bit3labs.'
      : 'bit3labs creates thoughtful websites, mobile apps, and connected business systems for ambitious teams.';
    document.title = title;
    const setMeta = (selector: string, value: string) => document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', value);
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
  }, [location]);
  if (location === '/contact') return <ContactPage />;
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get('email') || '').trim();
    const name = String(data.get('name') || '').trim();
    const message = String(data.get('message') || '').trim();
    if (!name || !email || !message) { setFormError('Please complete each field so we know how to reach you.'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setFormError('Please enter a valid email address.'); return; }
    setFormError('');
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return <main>
    <SiteHeader />

    <section className="hero site-grid" id="top">
      <div className="hero-meta"><span className="eyebrow red">Independent digital studio</span><span className="eyebrow">Strategy · Design · Technology</span></div>
      <div className="hero-title reveal"><h1 className="display">We create<br />exceptional<br /><span>experiences.</span></h1>
        <div className="hero-aside"><p>Thoughtful websites, useful apps, and connected systems for businesses ready to move forward.</p><a href="#work" className="round-link" aria-label="Explore selected work"><ArrowDown size={20} /></a></div>
      </div>
      <div className="hero-bottom"><span className="eyebrow">Small studio. Big-picture thinking.</span><span className="hero-index">01 — 05</span><a href="#about">Scroll to explore <ArrowDown size={14} /></a></div>
      <div className="hero-red-mark" aria-hidden="true">C</div>
    </section>

    <section className="intro section-wrap" id="about">
      <div className="section-tag"><span className="red-line"></span><span className="eyebrow">01 / About</span></div>
      <div className="intro-content"><h2 className="display">Good digital<br />should feel <span className="red">obvious.</span></h2>
        <div className="intro-copy"><p className="lead">The best experiences don’t ask for attention. They earn trust, remove friction, and make the next step feel natural.</p><p>We’re an independent creative technology studio partnering with ambitious businesses to turn complicated challenges into clear, capable digital products. Senior thinking, close collaboration, and a healthy respect for the details.</p><a className="text-link" href="#services">Get to know how we work <ArrowRight size={16} /></a></div>
      </div>
      <div className="stats">
        <div><strong>03</strong><small>Core digital<br />disciplines</small></div>
        <div><strong>01</strong><small>Connected team<br />from idea to launch</small></div>
        <div><strong>∞</strong><small>Room to grow<br />with your business</small></div>
        <div className="stats-note"><span className="eyebrow">A useful point of view</span><p>Websites, mobile apps, and business systems—shaped around the way your team works.</p></div>
      </div>
    </section>

    <section className="work-section" id="work">
      <div className="section-wrap">
        <div className="section-heading"><div className="section-tag"><span className="red-line"></span><span className="eyebrow">02 / Project concepts</span></div><div><h2 className="display">Made for the<br /><span>next chapter.</span></h2><p>Illustrative project concepts. Replace these with your agency’s own case studies before publishing.</p></div></div>
        <div className="filter-row" role="group" aria-label="Filter projects by category">
          {categories.map((category) => <button key={category} onClick={() => setActiveFilter(category)} className={activeFilter === category ? 'filter active' : 'filter'} aria-pressed={activeFilter === category} data-testid={`filter-${category.toLowerCase().replaceAll(' ', '-')}`}>{category}<span>{category === 'All work' ? projects.length : projects.filter(p => p.category === category).length}</span></button>)}
        </div>
        <div className="project-grid" aria-live="polite">{filtered.map((project) => <ProjectCard key={project.title} project={project} index={projects.indexOf(project)} />)}</div>
        <div className="work-foot"><span className="eyebrow">No two challenges are quite alike.</span><Link href="/contact" className="text-link">Tell us what you’re building <ArrowRight size={16} /></Link></div>
      </div>
    </section>

    <section className="services-section section-wrap" id="services">
      <div className="section-heading service-heading"><div className="section-tag"><span className="red-line"></span><span className="eyebrow">03 / What we do</span></div><div><h2 className="display">The right work.<br /><span>Done together.</span></h2><p>From the first useful question to the final detail, we bring the right disciplines around your challenge.</p></div></div>
      <div className="service-list">
        <article className="service-row"><span className="service-no">01</span><div><h3>Websites &amp; digital platforms</h3><p>Distinctive, useful online experiences that bring your story into focus and make growth easier to reach.</p></div><ul><li>Digital strategy</li><li>Experience &amp; interface design</li><li>Web development</li></ul><ArrowUpRight className="service-arrow" /></article>
        <article className="service-row"><span className="service-no">02</span><div><h3>Mobile apps</h3><p>Purpose-built products that fit naturally into people’s lives and help your team serve them better.</p></div><ul><li>Product definition</li><li>UX &amp; visual design</li><li>iOS &amp; Android development</li></ul><ArrowUpRight className="service-arrow" /></article>
        <article className="service-row"><span className="service-no">03</span><div><h3>ERP &amp; connected systems</h3><p>Clearer ways to work, with the tools and information your people need finally working in sync.</p></div><ul><li>Process discovery</li><li>System design &amp; integration</li><li>Custom business software</li></ul><ArrowUpRight className="service-arrow" /></article>
        <article className="service-row"><span className="service-no">04</span><div><h3>Ongoing partnership</h3><p>Good digital is never quite finished. We stay close, learn what’s working, and make what comes next better.</p></div><ul><li>Product evolution</li><li>Technical support</li><li>Continuous improvement</li></ul><ArrowUpRight className="service-arrow" /></article>
      </div>
    </section>

    <section className="team-section">
      <div className="team-image"><img src="https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="A small creative team working together around a table" loading="lazy" /><div className="team-caption"><span className="eyebrow">The people behind the pixels</span><span>Curious minds, sleeves rolled up.</span></div></div>
      <div className="team-copy"><span className="eyebrow">Independent by design</span><h2 className="display">Close to the<br />work. <span>Close to you.</span></h2><p>We keep our studio intentionally small. You work directly with the people shaping your strategy, designing the experience, and building the thing. No hand-offs. No layers. Just good people, doing considered work.</p><Link href="/contact" className="button-dark">Meet your next collaborators <ArrowUpRight size={16} /></Link></div>
    </section>

    <section className="faq-section section-wrap" id="faq">
      <div className="section-heading faq-heading"><div className="section-tag"><span className="red-line"></span><span className="eyebrow">04 / Good to know</span></div><div><h2 className="display">Questions,<br /><span>meet answers.</span></h2><p>A few things people usually want to know before we get started.</p></div></div>
      <div className="faq-list">{faqs.map(([question, answer], index) => <article className={`faq-item ${openFaq === index ? 'is-open' : ''}`} key={question}>
        <h3><button aria-expanded={openFaq === index} aria-controls={`faq-answer-${index}`} onClick={() => setOpenFaq(openFaq === index ? null : index)} data-testid={`faq-toggle-${index}`}><span className="faq-num">0{index + 1}</span><span>{question}</span>{openFaq === index ? <Minus size={18} /> : <Plus size={18} />}</button></h3>
        <div id={`faq-answer-${index}`} className="faq-answer" hidden={openFaq !== index}><p>{answer}</p></div>
      </article>)}</div>
    </section>

    <footer className="contact-section" id="contact">
      <div className="contact-main section-wrap">
         <div className="contact-copy"><span className="eyebrow">05 / Your next move</span><h2 className="display">Let’s make<br /><span>something</span><br />matter.</h2><p>Have a knotty challenge or a first spark of an idea? We’d love to hear about it.</p><a href="#contact-form" className="email-link">Tell us about your project <ArrowUpRight size={17} /></a></div>
        <div className="contact-form-wrap">
          {submitted ? <div className="success-panel" role="status"><span className="success-icon"><Check /></span><span className="eyebrow">Preview form</span><h3>Your note is<br />ready to go.</h3><p>This preview isn’t connected to an inbox, so your message hasn’t been sent. Connect a real submission method before publishing.</p><button onClick={() => setSubmitted(false)} className="reset-link">Edit your message <ArrowRight size={15} /></button></div> :
          <form className="inquiry-form" id="contact-form" onSubmit={handleSubmit} noValidate>
            <span className="eyebrow">Tell us a little about it</span>
            <label>Your name<input name="name" type="text" placeholder="How should we address you?" autoComplete="name" required data-testid="input-name" /></label>
            <label>Email address<input name="email" type="email" placeholder="you@company.com" autoComplete="email" required data-testid="input-email" /></label>
            <label>What are you thinking about?<textarea name="message" rows={3} placeholder="A website, an app, a tricky system… or not quite sure yet." required data-testid="input-message" /></label>
            {formError && <p className="form-error" role="alert">{formError}</p>}
            <button className="submit-button" type="submit" data-testid="button-submit">Send your note <ArrowUpRight size={17} /></button>
            <p className="privacy-note">Preview only: this form checks your details in the browser and doesn’t send or store them.</p>
          </form>}
        </div>
      </div>
       <div className="footer-bottom section-wrap"><a href="#top" className="wordmark footer-mark">bit3labs<span className="period">.</span></a><p>Independent digital studio<br />Working everywhere.</p><div className="footer-links"><a href="#about">About</a><a href="#work">Work</a><a href="#services">Services</a><a href="#faq">FAQ</a></div><span className="eyebrow">© {new Date().getFullYear()} bit3labs</span><a href="#top" className="back-top">Back to top <ArrowUpRight size={14} /></a></div>
    </footer>
  </main>;
}

export default App;
