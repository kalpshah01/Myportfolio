import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allProjects, projectsByTech } from '../data.js';
import '../styles/TechProjects.css';

export function TechProjects() {
  const { tech } = useParams();
  const navigate = useNavigate();
  const decodedTech = decodeURIComponent(tech);
  const [searchTerm, setSearchTerm] = React.useState('');

  
  const techKey = decodedTech.toLowerCase();
  const allTechProjects = projectsByTech[techKey] || [];

  
  const projects = allTechProjects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (allTechProjects.length === 0) {
    return (
      <div className="tech-projects">
        <div className="container">
          <button className="back-btn" onClick={() => navigate('/')}>← Back to Home</button>
          <h2 style={{ textAlign: 'center', marginTop: '50px', color: '#667eea' }}>
            No projects found for {decodedTech}
          </h2>
          <p style={{ textAlign: 'center', marginTop: '20px' }}>
            <button className="my-button" onClick={() => navigate('/')}>
              View All Projects
            </button>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="tech-projects">
      <div className="container">
        <button className="back-btn" onClick={() => navigate('/')}>← Back to Home</button>

        <div className="tech-projects-header">
          <h1 className="tech-title">{decodedTech} Projects</h1>
          <p className="tech-description">
            Projects built with {decodedTech} technology
          </p>
          
          
          {/* <div className="search-container">
            <input
              type="text"
              placeholder={`Search ${decodedTech} projects...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div> */}
        </div>

        <div className="tech-projects-grid">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div
                key={project.id}
                className="tech-project-card"
                onClick={() => navigate(`/project/${project.id}`)}
              >
                <div className="card-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="card-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="card-tech">
                    {project.technologies.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-btn">
                    View Project
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No projects match your search for "{searchTerm}"</p>
              <button className="clear-search-btn" onClick={() => setSearchTerm('')}>
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
