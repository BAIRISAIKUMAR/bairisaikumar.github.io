import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Cpu, Layout, Sparkles } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const About = () => {
  return (
    <section id="about" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <div className="about-content premium-about">
          <motion.div 
            className="about-text glass"
            style={{ padding: '3rem', borderRadius: '2rem' }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Passionate Developer
            </h3>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>{resumeData.summary}</p>
            
            <div className="about-stats" style={{ marginTop: '3rem' }}>
              <div className="stat-item" style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                <div className="stat-number">2+</div>
                <div className="stat-label">Years Coding</div>
              </div>
              <div className="stat-item" style={{ background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                <div className="stat-number">{resumeData.projects.length}+</div>
                <div className="stat-label">Projects Built</div>
              </div>
              <div className="stat-item" style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <div className="stat-number">2</div>
                <div className="stat-label">Internships</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-visuals"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="premium-cards-stack">
              <div className="premium-card card-1 glass">
                <Layout size={32} style={{ color: 'var(--accent-color)' }} />
                <h4>Frontend Magic</h4>
                <p>Creating beautiful, responsive UI/UX with React & modern CSS.</p>
              </div>
              <div className="premium-card card-2 glass">
                <Database size={32} style={{ color: '#8b5cf6' }} />
                <h4>Robust Backend</h4>
                <p>Building scalable APIs and databases using Node.js & Java.</p>
              </div>
              <div className="premium-card card-3 glass">
                <Sparkles size={32} style={{ color: '#10b981' }} />
                <h4>AI Integration</h4>
                <p>Leveraging AI tools to optimize and accelerate workflows.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
