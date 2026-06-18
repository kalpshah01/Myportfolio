import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allProjects } from '../data.js';
import '../styles/ProjectDetail.css';

// ── Mint tech badge palette ──────────────────────────────────
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
  const s = techColors[tech] || { bg: '#f0ece4', color: '#5c4a28' };
  return (
    <span className="pd-tech-badge" style={{ background: s.bg, color: s.color }}>
      {tech}
    </span>
  );
}

function getIcon(technologies) {
  if (technologies.includes('PHP'))    return '🖥️';
  if (technologies.includes('ASP.NET')) return '🌐';
  if (technologies.includes('C') && !technologies.includes('CSS')) return '⚙️';
  if (technologies.includes('React'))  return '⚛️';
  if (technologies.includes('JavaScript')) return '🟨';
  return '💻';
}

export function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = allProjects.find((p) => p.id === id);

  const handleBack = () => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById('project');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

  if (!project) {
    return (
      <div className="pd-notfound">
        <span className="pd-notfound__icon">🔍</span>
        <h2>Project Not Found</h2>
        <p>The project you're looking for doesn't exist or has been moved.</p>
        <button className="pd-back-pill--gold" onClick={handleBack}>← Back to Portfolio</button>
      </div>
    );
  }

  return (
    <div className="pd-page">

      
      <div className="pd-hero">
      
        <div
          className="pd-hero__accent"
          style={{ background: `radial-gradient(ellipse at 70% 50%, ${project.accentColor}60 0%, transparent 70%)` }}
        />
      
        <div className="pd-hero__dots" />

        <div className="pd-hero__inner">
      
          <button className="pd-back-pill" onClick={handleBack}>
            ← Back to Portfolio
          </button>

      
          <div className="pd-hero__content">
      
            <div
              className="pd-hero__icon-wrap"
              style={{
                background: `${project.accentColor}22`,
                border: `2px solid ${project.accentColor}55`,
              }}
            >
              {getIcon(project.technologies)}
            </div>

            {/* Text */}
            <div className="pd-hero__text">
              <span
                className="pd-hero__cat"
                style={{
                  background: `${project.accentColor}28`,
                  color: project.accentColor === '#c49a2a' ? '#e8c96a' : project.accentColor,
                  border: `1px solid ${project.accentColor}40`,
                }}
              >
                {project.categoryLabel}
              </span>

              <h1 className="pd-hero__title">{project.title}</h1>
              <p className="pd-hero__short">{project.shortDesc}</p>

              <div className="pd-hero__chips">
                {project.technologies.map((t) => (
                  <span key={t} className="pd-hero__chip">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══ BODY ══ */}
      <div className="pd-body">

        {/* ── Demo Video ── */}
        <section className="pd-card">
          <h2 className="pd-card__title">
            <span>🎬</span> Demo Video
          </h2>
          {project.hasVideo ? (
            <>
              <div className="pd-video-shell">
                <video className="pd-video" controls preload="metadata">
                  <source src={project.videoSrc} type="video/mp4" />
                  Your browser doesn't support HTML5 video.
                </video>
              </div>
              <p className="pd-video-note">▶ Press play to watch the project demo (no autoplay)</p>
            </>
          ) : (
            <div className="pd-empty-box">
              <span>📹</span>
              <p>No demo video available for this project.</p>
            </div>
          )}
        </section>

        {/* ── Description ── */}
        <section className="pd-card">
          <h2 className="pd-card__title">
            <span>📋</span> Project Description
          </h2>
          <p className="pd-desc">{project.description}</p>
        </section>

        {/* ── Key Features ── */}
        <section className="pd-card">
          <h2 className="pd-card__title">
            <span>✨</span> Key Features
          </h2>
          <ul className="pd-features">
            {project.features.map((f, i) => (
              <li key={i} className="pd-feature">
                <span
                  className="pd-feature__check"
                  style={{ color: project.accentColor }}
                >✓</span>
                {f}
              </li>
            ))}
          </ul>
        </section>

        {/* ── Technologies ── */}
        <section className="pd-card">
          <h2 className="pd-card__title">
            <span>🛠️</span> Technologies Used
          </h2>
          <div className="pd-tech-row">
            {project.technologies.map((t) => (
              <TechBadge key={t} tech={t} />
            ))}
          </div>
        </section>

        {/* ── Links ── */}
        <section className="pd-card pd-card--dark">
          <h2 className="pd-card__title">
            <span>🔗</span> Project Links
          </h2>

          <div className="pd-actions">
            {/* GitHub */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pd-btn pd-btn--gh"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>

            {/* Live or notice */}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pd-btn pd-btn--live"
                style={{
                  background: `linear-gradient(135deg, ${project.accentColor}, ${project.accentColor}bb)`,
                }}
              >
                🚀 Live Demo
              </a>
            ) : (
              <div className="pd-no-live">
                <span>ℹ️</span>
                <div>
                  <strong>Live demo not available.</strong>
                  <p>Please view the demo video and source code on GitHub.</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── Back button ── */}
        <div className="pd-footer">
          <button className="pd-back-pill--gold" onClick={handleBack}>
            ← Back to Portfolio
          </button>
        </div>

      </div>
    </div>
  );
}
