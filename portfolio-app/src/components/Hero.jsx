import React from 'react';
import { motion } from 'framer-motion';
import { Download, Send } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa6';
import { resumeData } from '../data/resumeData';
import profilePic from '../01.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      
      <div className="container">
        <div className="hero-layout">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-greeting">Hello, I'm</span>
            <h1 className="hero-title">{resumeData.personalInfo.name}</h1>
            <h2 className="hero-subtitle">
              <span>{resumeData.personalInfo.title}</span>
            </h2>
            <p className="hero-description">
              I build exceptional and accessible digital experiences for the web. Specialized in creating premium, high-performance applications from front to back, leveraging AI to accelerate software development.
            </p>
            
            <div className="hero-btns">
              <a href="#contact" className="btn btn-primary">
                <Send size={18} /> Let's Talk
              </a>
              <a href="/resume.docx" download="BAIRI_SAIKUMAR_RESUME.docx" className="btn btn-outline">
                <Download size={18} /> Download Resume
              </a>
            </div>
            
            <div className="social-links">
              <a href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-icon">
                <Github size={20} />
              </a>
              <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-image-wrapper glass">
              <img 
                src={profilePic} 
                alt={resumeData.personalInfo.name} 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
