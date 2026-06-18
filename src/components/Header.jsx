import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';

export function Header() {
  const [activeNav, setActiveNav] = React.useState('home');
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleNavClick = (section) => {
    setActiveNav(section);
    setMenuOpen(false);
    if (section === 'home') {
      navigate('/');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 120);
      return;
    }
    
    const isOnHomePage = window.location.pathname === '/';
    if (!isOnHomePage) {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="slider">
        <div className="container">
          <div className="intro">
            <h2 id='t1'>Web Developer <br /> Kalp Shah Portfolio</h2>
          </div>
        </div>
      </div>
      <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        <div className="container1">
          <img src="../logo.jpg" alt="Logo" className="logo" />
          <button
            type="button"
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={menuOpen ? 'open' : ''}>
            <li className={activeNav === 'home' ? 'active' : ''}>
              <a onClick={() => handleNavClick('home')} href="#home">Home</a>
            </li>
            <li className={activeNav === 'aboutme' ? 'active' : ''}>
              <a onClick={() => handleNavClick('aboutme')} href="#aboutme">About</a>
            </li>
            <li className={activeNav === 'skills' ? 'active' : ''}>
              <a onClick={() => handleNavClick('skills')} href="#skills">Skills</a>
            </li>
            <li className={activeNav === 'resume' ? 'active' : ''}>
              <a onClick={() => handleNavClick('resume')} href="#resume">Resume</a>
            </li>
            <li className={activeNav === 'project' ? 'active' : ''}>
              <a onClick={() => handleNavClick('project')} href="#project">Projects</a>
            </li>
            <li className={activeNav === 'contact' ? 'active' : ''}>
              <a onClick={() => handleNavClick('contact')} href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
