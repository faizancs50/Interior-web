import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, CheckCircle2, MapPin, Hammer, ShieldCheck, Ruler } from 'lucide-react';
import WhatsAppIcon from '../components/common/WhatsAppIcon';
import { DESIGNER_INFO, getWhatsAppUrl } from '../data/designer';
import { SERVICES } from '../data/services';
import { PROJECTS } from '../data/projects';
import './HomePage.css';

export default function HomePage() {
  const heroWhatsApp = getWhatsAppUrl("Hi Rajabul, I am interested in interior design and execution for my flat/home in Delhi NCR.");

  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section className="hero-section bbb" aria-label="Introduction">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="badge">
              <MapPin size={14} aria-hidden="true" />
              <span>Delhi • Noida • Greater Noida</span>
            </div>
            <h1 className="hero-title">
              Crafting Thoughtful Interiors with Direct Site Execution
            </h1>
            <p className="hero-subtitle">
              Hi, I'm <strong>{DESIGNER_INFO.name}</strong>. I design beautiful, practical residential interiors and personally manage an in-house team of skilled labourers to turn concepts into reality without middleman markups.
            </p>

            <div className="hero-actions">
              <a
                href={heroWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp hero-whatsapp-btn"
                aria-label="Enquire with Rajabul Saifi on WhatsApp"
              >
                <WhatsAppIcon size={22} />
                <span>Enquire on WhatsApp</span>
              </a>
              <Link to="/projects" className="btn btn-outline hero-portfolio-btn">
                <span>View Completed Sites</span>
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>

            {/* Quick Trust Highlights */}
            <div className="hero-trust-list">
              <div className="trust-item">
                <CheckCircle2 size={16} className="trust-icon" aria-hidden="true" />
                <span>Direct Site Supervision</span>
              </div>
              <div className="trust-item">
                <CheckCircle2 size={16} className="trust-icon" aria-hidden="true" />
                <span>Dedicated Craftsmen & Labourers</span>
              </div>
              <div className="trust-item">
                <CheckCircle2 size={16} className="trust-icon" aria-hidden="true" />
                <span>Transparent Material Sourcing</span>
              </div>
            </div>
          </div>

          <div className="hero-media">
            <div className="hero-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
                alt="Contemporary interior execution with modular wood finishes in Delhi NCR"
                className="hero-image"
                fetchPriority="high"
                decoding="async"
                width="600"
                height="480"
              />
              <div className="hero-floating-card">
                <Hammer size={24} className="card-icon" aria-hidden="true" />
                <div>
                  <div className="card-title">Hands-On Execution</div>
                  <div className="card-text">Every detail built by experienced craftsmen</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE VALUE / HOW RAJABUL WORKS */}
      <section className="values-section" aria-label="Why choose Rajabul Saifi">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">Why Work With Us</span>
            <h2>The Advantage of Designer + Dedicated Labour Team</h2>
            <p className="section-description">
              Unlike large interior agencies that sub-contract your home to unknown third parties, Rajabul Saifi provides end-to-end design guidance and on-site labor supervision.
            </p>
          </div>

          <div className="strengths-grid">
            {DESIGNER_INFO.strengths.map((item, idx) => (
              <div key={idx} className="strength-card">
                <div className="strength-icon-box" aria-hidden="true">
                  {idx === 0 && <ShieldCheck size={24} />}
                  {idx === 1 && <Hammer size={24} />}
                  {idx === 2 && <Ruler size={24} />}
                  {idx === 3 && <MapPin size={24} />}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS PREVIEW */}
      <section className="projects-preview-section" aria-label="Recent work showcase">
        <div className="container">
          <div className="section-header-flex">
            <div>
              <span className="section-eyebrow">Work Showcase</span>
              <h2>Recent Completed Projects</h2>
              <p className="section-description">
                Explore real spaces brought to life across Delhi, Noida, and Greater Noida.
              </p>
            </div>
            <Link to="/projects" className="btn btn-outline preview-all-btn">
              <span>View All Projects</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="projects-grid">
            {PROJECTS.map(project => (
              <article key={project.id} className="project-card">
                <div className="project-image-box">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="250"
                  />
                  <span className="project-badge">{project.category}</span>
                </div>
                <div className="project-info">
                  <div className="project-location">
                    <MapPin size={14} aria-hidden="true" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>
                  <div className="project-scope">
                    <strong>Scope:</strong> {project.scope}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES BRIEF */}
      <section className="services-section" aria-label="Services overview">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">What We Do</span>
            <h2>Complete Interior Execution Services</h2>
            <p className="section-description">
              From bare shell structures to final handovers, our specialized teams cover all interior trades.
            </p>
          </div>

          <div className="services-grid">
            {SERVICES.slice(0, 4).map(service => (
              <div key={service.id} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.shortDescription}</p>
                <ul className="service-scope-list">
                  {service.scope.map((item, i) => (
                    <li key={i}>
                      <CheckCircle2 size={16} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="services-footer-cta text-center">
            <Link to="/services" className="btn btn-outline">
              <span>Explore Full Service Capabilities</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHATSAPP CONVERSION CTA BANNER */}
      <section className="cta-banner-section" aria-label="Schedule a consultation">
        <div className="container">
          <div className="cta-banner-card">
            <div className="cta-banner-content">
              <h2>Have a Flat or Villa Ready for Interior Work?</h2>
              <p>
                Speak directly with Rajabul Saifi. Get practical site advice, honest cost estimates, and scheduled on-site consultation across Delhi, Noida, or Greater Noida.
              </p>
            </div>
            <div className="cta-banner-actions">
              <a
                href={heroWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp cta-big-btn"
                aria-label="Chat directly with Rajabul Saifi on WhatsApp"
              >
                <WhatsAppIcon size={24} />
                <span>Chat Directly on WhatsApp</span>
              </a>
              <a
                href={`tel:${DESIGNER_INFO.contact.phone.replace(/\s+/g, '')}`}
                className="btn btn-outline cta-phone-btn"
                aria-label={`Call Rajabul Saifi at ${DESIGNER_INFO.contact.phone}`}
              >
                <Phone size={20} aria-hidden="true" />
                <span>Call {DESIGNER_INFO.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
