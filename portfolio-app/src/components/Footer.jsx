import React from 'react';
import { Heart } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa6';
import { resumeData } from '../data/resumeData';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3 style={{fontFamily: 'Outfit', fontSize: '1.5rem'}}>{resumeData.personalInfo.name}</h3>
            <p style={{color: 'var(--text-secondary)', marginTop: '0.5rem'}}>{resumeData.personalInfo.title}</p>
          </div>
          
          <div className="footer-socials social-links">
            <a href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github size={20} />
            </a>
            <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div style={{textAlign: 'center', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--card-border)', color: 'var(--text-secondary)', fontSize: '0.9rem'}}>
          <p>© {new Date().getFullYear()} {resumeData.personalInfo.name}. All rights reserved.</p>
          <p style={{marginTop: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>
            Built with <Heart size={14} style={{color: '#ef4444'}} /> using React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
