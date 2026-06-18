import React from 'react';
import { useNavigate } from 'react-router-dom';
import { projectsByCategory } from '../data.js';
import '../styles/Projects.css';


const techColors = {
  PHP:                   { bg: '#0d2b2b', color: '#5eead4' },
  MySQL:                 { bg: '#0d2b25', color: '#34d399' },
  'ASP.NET':             { bg: '#162032', color: '#7dd3fc' },
  'C#':                  { bg: '#1a1f2e', color: '#a5b4fc' },
  'SQL Server':          { bg: '#172028', color: '#93c5fd' },
  C:                     { bg: '#102b22', color: '#6ee7b7' },
  React:                 { bg: '#0d2929', color: '#2dd4bf' },
  JWT:                   { bg: '#0d2b2b', color: '#5eead4' },
  Axios:                 { bg: '#1a1a2e', color: '#a5b4fc' },
  Firebase:              { bg: '#1f1810', color: '#fb923c' },
  HTML:                  { bg: '#1f1208', color: '#fdba74' },
  CSS:                   { bg: '#0d2929', color: '#5eead4' },
  CSS3:                  { bg: '#0d2929', color: '#5eead4' },
  JavaScript:            { bg: '#1f1a08', color: '#fde68a' },
  Bootstrap:             { bg: '#1a1520', color: '#c4b5fd' },
  'REST API':            { bg: '#0d2b25', color: '#34d399' },
  LocalStorage:          { bg: '#1f1810', color: '#fdba74' },
  'React Router':        { bg: '#0d2929', color: '#2dd4bf' },
  'React Hooks':         { bg: '#0d2929', color: '#5eead4' },
  'CSS Animations':      { bg: '#201025', color: '#e879f9' },
  'Responsive Design':   { bg: '#0d2929', color: '#5eead4' },
  'Data Structures':     { bg: '#102b22', color: '#6ee7b7' },
  'File Handling':       { bg: '#102b22', color: '#4ade80' },
  'Structured Programming': { bg: '#102b22', color: '#34d399' },
  'Node.js':             { bg: '#0d2b1e', color: '#4ade80' },
};

function TechBadge({ tech }) {
  const s = techColors[tech] || { bg: '#1e293b', color: '#94a3b8' };
  return (
    <span className="prj-badge" style={{ background: s.bg, color: s.color }}>
      {tech}
    </span>
  );
}

function ProjectCard({ project, featured, index }) {
  const navigate = useNavigate();

  const go = () => {
    navigate(`/project/${project.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <article
      className={`prj-card${featured ? ' prj-card--featured' : ''}`}
      style={{ '--accent': project.accentColor }}
      onClick={go}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && go()}
      aria-label={`View details for ${project.title}`}
    >
      {featured && (
        <div className="prj-card__ribbon">⭐ Featured</div>
      )}

      {/* Project image */}
      <div className="prj-card__thumb">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="prj-card__img"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        
        <div
          className="prj-card__fallback"
          style={{
            display: project.image ? 'none' : 'flex',
            background: `${project.accentColor}18`,
          }}
        >
          <span className="prj-card__fallback-icon">💻</span>
        </div>
        <div className="prj-card__thumb-overlay" style={{ background: `${project.accentColor}22` }} />
        <span className="prj-card__year" style={{ color: project.accentColor }}>
          {project.year}
        </span>
      </div>

      
      <div className="prj-card__stripe" style={{ background: project.accentColor }} />

      <div className="prj-card__body">
        <h4 className="prj-card__title">{project.title}</h4>
        <p className="prj-card__desc">{project.shortDesc}</p>

        <div className="prj-card__badges">
          {project.technologies.slice(0, 4).map((t) => (
            <TechBadge key={t} tech={t} />
          ))}
          {project.technologies.length > 4 && (
            <span className="prj-badge prj-badge--more">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        <div className="prj-card__cta" style={{ color: project.accentColor }}>
          View Details <span className="prj-card__arrow">→</span>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const fullstack = projectsByCategory.find((c) => c.category === 'fullstack');
  const react     = projectsByCategory.find((c) => c.category === 'react');
  const frontend  = projectsByCategory.find((c) => c.category === 'frontend');

  return (
    <section className="prj-section" id="project">
      <div className="prj-wrap">

        
        <header className="prj-head">
          <span className="prj-head__eyebrow">Portfolio</span>
          <h2 className="prj-head__title">My Projects</h2>
          <p className="prj-head__sub">
            From full-stack systems to React apps and creative frontend designs
          </p>
          <div className="prj-head__line" />
        </header>

        
        <div className="cat-wrap cat-wrap--dark">
          <div className="cat-bar cat-bar--dark">
            <div className="cat-bar__left">
              <span className="cat-bar__icon">🏆</span>
              <div>
                <h3 className="cat-bar__title cat-bar__title--light">{fullstack.label}</h3>
                <p className="cat-bar__sub cat-bar__sub--light">
                  End-to-end systems — databases, auth &amp; admin dashboards
                </p>
              </div>
            </div>
            <span className="cat-bar__count cat-bar__count--dark">
              {fullstack.projects.length} Projects
            </span>
          </div>
          <div className="prj-grid prj-grid--2">
            {fullstack.projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} featured index={i} />
            ))}
          </div>
        </div>

        
        <div className="cat-wrap">
          <div className="cat-bar">
            <div className="cat-bar__left">
              <span className="cat-bar__icon">⚛️</span>
              <div>
                <h3 className="cat-bar__title">{react.label}</h3>
                <p className="cat-bar__sub">Component-driven UIs, hooks, state management &amp; APIs</p>
              </div>
            </div>
            <span className="cat-bar__count">{react.projects.length} Projects</span>
          </div>
          <div className="prj-grid prj-grid--3">
            {react.projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} featured={false} index={i} />
            ))}
          </div>
        </div>


        <div className="cat-wrap">
          <div className="cat-bar">
            <div className="cat-bar__left">
              <span className="cat-bar__icon">🎨</span>
              <div>
                <h3 className="cat-bar__title">{frontend.label}</h3>
                <p className="cat-bar__sub">Animations, creative UI, landing pages &amp; clones</p>
              </div>
            </div>
            <span className="cat-bar__count">{frontend.projects.length} Projects</span>
          </div>
          <div className="prj-grid prj-grid--3">
            {frontend.projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} featured={false} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
