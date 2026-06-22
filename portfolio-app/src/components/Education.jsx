import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Education & Certifications
        </motion.h2>
        
        <div className="contact-container"> {/* Reusing grid layout */}
          <div>
            <h3 style={{fontSize: '1.8rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <GraduationCap style={{color: 'var(--accent-color)'}}/> Education
            </h3>
            <div className="timeline">
              {resumeData.education.map((edu, index) => (
                <motion.div 
                  key={edu.id}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-content glass">
                    <span className="timeline-date">{edu.duration}</span>
                    <h3 className="timeline-title">{edu.degree}</h3>
                    <h4 className="timeline-subtitle">{edu.university}</h4>
                    <p className="timeline-desc">{edu.college}</p>
                    {edu.percentage && (
                      <p className="timeline-desc" style={{ marginTop: '0.5rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>
                        Score: {edu.percentage}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{fontSize: '1.8rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <Award style={{color: 'var(--accent-color)'}}/> Certifications
            </h3>
            <div className="timeline">
              {resumeData.certifications.map((cert, index) => (
                <motion.div 
                  key={cert.id}
                  className="timeline-item"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-content glass">
                    <h3 className="timeline-title">{cert.title}</h3>
                    <h4 className="timeline-subtitle">{cert.provider}</h4>
                    <p className="timeline-desc">{cert.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
