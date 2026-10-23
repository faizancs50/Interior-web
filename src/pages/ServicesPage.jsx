import React from 'react';
import { CheckCircle2, Hammer } from 'lucide-react';
import WhatsAppIcon from '../components/common/WhatsAppIcon';
import { SERVICES } from '../data/services';
import { getWhatsAppUrl } from '../data/designer';
import './ServicesPage.css';

export default function ServicesPage() {
  return (
    <div className="services-page">
      {/* Header Banner */}
      <section className="page-header-wrapper" aria-label="Services header">
        <div className="container">
          <div className="page-header-inner">
            <span className="badge">Capabilities</span>
            <h1 className="page-main-title">Interior Services & Labour Execution</h1>
            <p className="page-main-desc">
              From single-room carpentry and false ceilings to full-home turnkey interior execution across Delhi, Noida, and Greater Noida.
            </p>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="services-list-grid" aria-label="Execution services list">
          {SERVICES.map(service => {
            const serviceWhatsAppUrl = getWhatsAppUrl(
              `Hi Rajabul, I would like to enquire about "${service.title}" services for my site.`
            );

            return (
              <div key={service.id} className="service-detail-card">
                <div className="service-detail-icon" aria-hidden="true">
                  <Hammer size={22} />
                </div>

                <h2 className="service-detail-title">{service.title}</h2>
                <p className="service-detail-desc">{service.description}</p>

                <div className="service-scope-wrapper">
                  <div className="service-scope-heading">
                    Execution Scope:
                  </div>
                  <ul className="service-scope-items">
                    {service.scope.map((item, idx) => (
                      <li key={idx} className="service-scope-item">
                        <CheckCircle2 size={16} className="service-check-icon" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={serviceWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp service-card-btn"
                  aria-label={`Enquire with Rajabul Saifi about ${service.title}`}
                >
                  <WhatsAppIcon size={22} />
                  <span>Enquire About This Service</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
