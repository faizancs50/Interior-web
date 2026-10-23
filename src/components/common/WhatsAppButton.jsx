import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import { getWhatsAppUrl } from '../../data/designer';
import './WhatsAppButton.css';

/**
 * Floating WhatsApp CTA Button
 * Enables direct 1-click messaging from any page/screen.
 */
export default function WhatsAppButton() {
  const whatsappUrl = getWhatsAppUrl(
    "Hi Rajabul, I came across your interior portfolio and would like to discuss a project in Delhi NCR."
  );

  return (
    <aside aria-label="Quick WhatsApp Contact" className="whatsapp-floating-container">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-floating-btn"
        aria-label="Chat directly with Rajabul Saifi on WhatsApp"
        title="Chat directly with Rajabul Saifi on WhatsApp"
      >
        <span className="whatsapp-pulse" aria-hidden="true"></span>
        <WhatsAppIcon size={28} className="whatsapp-icon" />
        <span className="whatsapp-label">Chat on WhatsApp</span>
      </a>
    </aside>
  );
}
