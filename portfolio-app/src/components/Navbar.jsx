import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Navbar = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  return (
    <>
      <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
      <nav className="navbar glass-nav">
        <div className="container nav-container" style={{ display: 'flex', alignItems: 'center' }}>
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu" style={{ zIndex: 1002 }}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <a href="#home" className="logo" onClick={() => setIsMenuOpen(false)} style={{ zIndex: 1002, margin: '0 auto 0 1rem' }}>
            {resumeData.personalInfo.name}
          </a>
          
          <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>Skills</a>
              <a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#experience" className="nav-link" onClick={() => setIsMenuOpen(false)}>Experience</a>
              <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>

            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme" style={{ zIndex: 1002, margin: 0 }}>
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
