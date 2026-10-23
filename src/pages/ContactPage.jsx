import React, { useState } from 'react';
import { Phone, MapPin } from 'lucide-react';
import WhatsAppIcon from '../components/common/WhatsAppIcon';
import { DESIGNER_INFO, getWhatsAppUrl } from '../data/designer';
import './ContactPage.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    location: 'Noida',
    propertyType: '3BHK Apartment',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const formattedMessage = `Hi Rajabul, my name is ${formData.name || 'a client'}. I have a ${formData.propertyType} in ${formData.location}. ${formData.message ? `Details: ${formData.message}` : 'I would like to discuss interior work.'}`;
    window.open(getWhatsAppUrl(formattedMessage), '_blank');
  };

  const directWhatsApp = getWhatsAppUrl("Hi Rajabul, I would like to schedule an interior design consultation.");

  return (
    <div className="contact-page">
      {/* Header Banner */}
      <section className="page-header-wrapper" aria-label="Contact header">
        <div className="container">
          <div className="page-header-inner">
            <span className="badge">Contact & Enquiries</span>
            <h1 className="page-main-title">Start Your Interior Project</h1>
            <p className="page-main-desc">
              Connect directly with Rajabul Saifi for site visits, material discussions, and estimates across Delhi, Noida, and Greater Noida.
            </p>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="contact-layout-grid">
          {/* Contact Info Card */}
          <div className="contact-info-card">
            <h2 className="contact-info-title">Direct Reach</h2>

            <div className="contact-methods-list">
              <div className="contact-method-item">
                <div className="contact-method-icon-wa" aria-hidden="true">
                  <WhatsAppIcon size={24} />
                </div>
                <div>
                  <div className="contact-method-label">WhatsApp (Fastest Response)</div>
                  <a
                    href={directWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-method-val-wa"
                    aria-label="Chat directly on WhatsApp with Rajabul Saifi"
                  >
                    Chat Directly on WhatsApp
                  </a>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="contact-method-icon-phone" aria-hidden="true">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="contact-method-label">Phone Call</div>
                  <a
                    href={`tel:${DESIGNER_INFO.contact.phone.replace(/\s+/g, '')}`}
                    className="contact-method-val-phone"
                    aria-label={`Call Rajabul Saifi at ${DESIGNER_INFO.contact.phone}`}
                  >
                    {DESIGNER_INFO.contact.phone}
                  </a>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="contact-method-icon-map" aria-hidden="true">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="contact-method-label">Service Locations</div>
                  <div className="contact-method-val-loc">
                    Delhi, Noida, Greater Noida & Delhi NCR
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-note-box">
              <div className="contact-note-title">
                On-Site Consultations:
              </div>
              <p className="contact-note-desc">
                Site measurements and initial discussions can be arranged directly at your property at a mutually convenient time.
              </p>
            </div>
          </div>

          {/* WhatsApp Assisted Form */}
          <form
            onSubmit={handleWhatsAppSubmit}
            className="enquiry-form-card"
            aria-label="Send project enquiry via WhatsApp"
          >
            <div>
              <h2 className="enquiry-form-title">Send Project Enquiry</h2>
              <p className="enquiry-form-desc">
                Fills a pre-formatted message and opens directly in your WhatsApp.
              </p>
            </div>

            <div className="form-group">
              <label htmlFor="contact-name" className="form-label">
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Amit Sharma"
                required
                className="form-input"
              />
            </div>

            <div className="form-grid-two">
              <div className="form-group">
                <label htmlFor="contact-location" className="form-label">
                  Location
                </label>
                <select
                  id="contact-location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="Noida">Noida</option>
                  <option value="Greater Noida">Greater Noida</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Other Delhi NCR">Other Delhi NCR</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="contact-property-type" className="form-label">
                  Space Type
                </label>
                <select
                  id="contact-property-type"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="2BHK Apartment">2BHK Apartment</option>
                  <option value="3BHK Apartment">3BHK Apartment</option>
                  <option value="4BHK+ Apartment">4BHK+ Apartment</option>
                  <option value="Independent House / Villa">Villa / House</option>
                  <option value="Commercial / Office">Office / Commercial</option>
                  <option value="Modular Kitchen Only">Modular Kitchen Only</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-message" className="form-label">
                Requirements or Notes (Optional)
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Mention specific needs like false ceiling, woodwork, possession date, etc."
                className="form-textarea"
              />
            </div>

            <button
              type="submit"
              className="btn btn-whatsapp enquiry-submit-btn"
              aria-label="Connect with Rajabul Saifi on WhatsApp"
            >
              <WhatsAppIcon size={24} />
              <span>Connect on WhatsApp</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
