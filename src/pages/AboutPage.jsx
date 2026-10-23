import React from 'react';
import { ShieldCheck, Users, MapPin, Phone } from 'lucide-react';
import WhatsAppIcon from '../components/common/WhatsAppIcon';
import { DESIGNER_INFO, getWhatsAppUrl } from '../data/designer';
import './AboutPage.css';

export default function AboutPage() {
  const whatsappUrl = getWhatsAppUrl("Hi Rajabul, I would like to learn more about your process and discuss an interior project.");

  return (
    <div className="about-page">
      {/* Header Banner */}
      <section className="page-header-wrapper" aria-label="About header">
        <div className="container">
          <div className="page-header-inner">
            <span className="badge">About</span>
            <h1 className="page-main-title">Meet {DESIGNER_INFO.name}</h1>
            <p className="page-main-desc">
              Interior Designer & Site Execution Specialist based in Delhi NCR.
            </p>
          </div>
        </div>
      </section>

      <div className="container" style={{ maxWidth: '1000px' }}>
        <div className="about-intro-box">
          <p className="about-bio-lead">
            {DESIGNER_INFO.bio}
          </p>
        </div>

        <div className="about-pillars-grid" aria-label="Core work values">
          <div className="about-pillar-card">
            <div className="about-pillar-icon" aria-hidden="true">
              <Users size={32} />
            </div>
            <h2 className="about-pillar-title">Hands-On Labour Team</h2>
            <p className="about-pillar-text">
              Working directly with trusted carpenters, POP masters, painters, and electricians ensures high craft standards, seamless teamwork, and rapid problem-solving on the ground.
            </p>
          </div>

          <div className="about-pillar-card">
            <div className="about-pillar-icon" aria-hidden="true">
              <ShieldCheck size={32} />
            </div>
            <h2 className="about-pillar-title">Direct Accountability</h2>
            <p className="about-pillar-text">
              No sales middlemen or distant project managers. You deal directly with the person responsible for drawing the layouts and supervising the work daily.
            </p>
          </div>

          <div className="about-pillar-card">
            <div className="about-pillar-icon" aria-hidden="true">
              <MapPin size={32} />
            </div>
            <h2 className="about-pillar-title">Delhi NCR Roots</h2>
            <p className="about-pillar-text">
              Operating actively across Delhi, Noida, and Greater Noida with localized vendor networks for wood, hardware, and surface finishes.
            </p>
          </div>
        </div>

        {/* CTA Box */}
        <div className="about-cta-card">
          <h2>Ready to Discuss Your Space?</h2>
          <p>
            Schedule an on-site visit or send your floor plan directly on WhatsApp for an honest discussion and transparent estimates.
          </p>
          <div className="about-cta-actions">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp about-btn-wa"
              aria-label="Chat with Rajabul Saifi on WhatsApp"
            >
              <WhatsAppIcon size={22} />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`tel:${DESIGNER_INFO.contact.phone.replace(/\s+/g, '')}`}
              className="btn btn-outline about-btn-call"
              aria-label={`Call Rajabul Saifi at ${DESIGNER_INFO.contact.phone}`}
            >
              <Phone size={18} aria-hidden="true" />
              <span>Call {DESIGNER_INFO.contact.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
