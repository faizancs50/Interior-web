import React, { useState } from 'react';
import { MapPin, CheckCircle } from 'lucide-react';
import WhatsAppIcon from '../components/common/WhatsAppIcon';
import { PROJECTS, PROJECT_CATEGORIES } from '../data/projects';
import { getWhatsAppUrl } from '../data/designer';
import './ProjectsPage.css';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="projects-page">
      {/* Header Banner */}
      <section className="page-header-wrapper" aria-label="Portfolio header">
        <div className="container">
          <div className="page-header-inner">
            <span className="badge">Portfolio</span>
            <h1 className="page-main-title">Completed Interior Projects</h1>
            <p className="page-main-desc">
              Real site executions managed and supervised directly by Rajabul Saifi across Delhi, Noida, and Greater Noida.
            </p>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Category Filter */}
        <div className="category-filter-bar" role="tablist" aria-label="Filter projects by category">
          {PROJECT_CATEGORIES.map(category => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
              className={`btn category-filter-btn ${selectedCategory === category ? 'btn-primary' : 'btn-outline'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="portfolio-grid" aria-label="Projects list">
          {filteredProjects.map(project => {
            const projectWhatsAppUrl = getWhatsAppUrl(
              `Hi Rajabul, I saw your project "${project.title}" in ${project.location} on your website and would like similar work done.`
            );

            return (
              <article key={project.id} className="portfolio-card">
                <div className="portfolio-card-media">
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

                <div className="portfolio-card-body">
                  <div className="portfolio-card-meta">
                    <MapPin size={14} aria-hidden="true" />
                    <span>{project.location}</span>
                  </div>

                  <h2 className="portfolio-card-title">{project.title}</h2>
                  <p className="portfolio-card-desc">{project.summary}</p>

                  <div className="portfolio-highlights-box">
                    <div className="portfolio-highlights-title">
                      Key Execution Highlights:
                    </div>
                    <ul className="portfolio-highlights-list">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="portfolio-highlights-item">
                          <CheckCircle size={15} className="highlight-check-icon" aria-hidden="true" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={projectWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp portfolio-card-cta"
                    aria-label={`Enquire with Rajabul Saifi about ${project.title}`}
                  >
                    <WhatsAppIcon size={22} />
                    <span>Enquire About Similar Work</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
