import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ShieldCheck } from 'lucide-react';
import WhatsAppIcon from '../common/WhatsAppIcon';
import { DESIGNER_INFO, getWhatsAppUrl } from '../../data/designer';
import './Footer.css';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const footerWhatsApp = getWhatsAppUrl("Hi Rajabul, I am contacting you through your website for an interior consultation.");

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        {/* Brand & Focus */}
        <div className="footer-col brand-col">
          <h3 className="footer-brand-title">{DESIGNER_INFO.name}</h3>
          <p className="footer-brand-subtitle">Interior Designer & Labour Team Execution</p>
          <p className="footer-brand-desc">
            Direct on-site supervision and dedicated craftsmanship for residential and commercial spaces across Delhi NCR.
          </p>
          <div className="footer-trust-tag">
            <ShieldCheck size={18} />
            <span>Direct execution with no middleman margins</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Navigation</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Completed Projects</Link></li>
            <li><Link to="/services">Services & Labour Scope</Link></li>
            <li><Link to="/about">About Rajabul Saifi</Link></li>
            <li><Link to="/contact">Get in Touch</Link></li>
          </ul>
        </div>

        {/* Coverage Areas */}
        <div className="footer-col">
          <h4 className="footer-heading">Service Locations</h4>
          <ul className="footer-areas-list">
            {DESIGNER_INFO.serviceAreas.map((area, idx) => (
              <li key={idx}>
                <MapPin size={16} className="area-icon" />
                <span>{area}</span>
              </li>
            ))}
          </ul>
          <p className="footer-subtext">Available for on-site consultation and measurement visits across Delhi NCR.</p>
        </div>

        {/* Contact & Conversion */}
        <div className="footer-col contact-col">
          <h4 className="footer-heading">Direct Contact</h4>
          <p className="footer-subtext">Have a site in mind? Chat directly to discuss ideas, timeline, and estimates:</p>
          <div className="footer-cta-group">
            <a href={footerWhatsApp} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp footer-btn" aria-label="Send WhatsApp message to Rajabul Saifi">
              <WhatsAppIcon size={22} />
              <span>WhatsApp Message</span>
            </a>
            <a href={`tel:${DESIGNER_INFO.contact.phone.replace(/\s+/g, '')}`} className="btn btn-outline footer-btn footer-btn-call" aria-label={`Call Rajabul Saifi at ${DESIGNER_INFO.contact.phone}`}>
              <Phone size={18} />
              <span>{DESIGNER_INFO.contact.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {currentYear} {DESIGNER_INFO.name}. All rights reserved.</p>
          <p className="footer-credits">Delhi NCR Interior Design & Execution</p>
        </div>
      </div>
    </footer>
  );
}
