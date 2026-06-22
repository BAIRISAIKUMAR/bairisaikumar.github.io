import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Briefcase } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa6';
import { resumeData } from '../data/resumeData';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        
        <div className="experience-grid">
          {resumeData.experience.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className="experience-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="experience-header">
                <span className="experience-date">{exp.duration}</span>
                <h3 className="experience-title">{exp.role}</h3>
                <h4 className="experience-subtitle">
                  <Briefcase size={16} style={{display: 'inline', marginRight: '5px', color: 'var(--accent-color)'}}/> 
                  {exp.company}
                </h4>
              </div>
              <div className="experience-body">
                <div className="experience-project">{exp.project}</div>
                <ul className="experience-desc">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
              <div className="experience-tech">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
