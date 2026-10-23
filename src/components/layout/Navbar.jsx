import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import WhatsAppIcon from '../common/WhatsAppIcon';
import { DESIGNER_INFO, getWhatsAppUrl } from '../../data/designer';
import './Navbar.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(prev => !prev);
  const closeMenu = () => setMobileMenuOpen(false);

  // Close mobile menu on Escape key press & prevent background scroll when open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        closeMenu();
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const whatsappNavUrl = getWhatsAppUrl(
    "Hi Rajabul, I would like to enquire about your interior design & site execution services."
  );

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Brand / Logo */}
        <Link to="/" className="brand-logo" onClick={closeMenu} aria-label={`${DESIGNER_INFO.name} - Home`}>
          <span className="brand-name">{DESIGNER_INFO.name}</span>
          <span className="brand-subtitle">Interiors & Execution • Delhi NCR</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Home
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Projects
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Services
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Contact
          </NavLink>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          <a
            href={whatsappNavUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp header-cta"
            aria-label="Chat with Rajabul Saifi on WhatsApp"
            title="Chat on WhatsApp"
          >
            <WhatsAppIcon size={20} />
            <span className="header-cta-text">WhatsApp</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={toggleMenu}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu}>
          <div
            id="mobile-nav-drawer"
            className="mobile-menu-drawer"
            onClick={e => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            <nav className="mobile-nav-links">
              <NavLink to="/" end className="mobile-link" onClick={closeMenu}>
                Home
              </NavLink>
              <NavLink to="/projects" className="mobile-link" onClick={closeMenu}>
                Projects
              </NavLink>
              <NavLink to="/services" className="mobile-link" onClick={closeMenu}>
                Services
              </NavLink>
              <NavLink to="/about" className="mobile-link" onClick={closeMenu}>
                About
              </NavLink>
              <NavLink to="/contact" className="mobile-link" onClick={closeMenu}>
                Contact
              </NavLink>
            </nav>

            <div className="mobile-cta-wrapper">
              <a
                href={whatsappNavUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp mobile-whatsapp-full"
                onClick={closeMenu}
              >
                <WhatsAppIcon size={22} />
                <span>Chat on WhatsApp</span>
              </a>
              <div className="mobile-area-note">
                Serving: Delhi, Noida, Greater Noida
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
