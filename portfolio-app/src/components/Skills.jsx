import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Wrench, Sparkles } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const SkillCategory = ({ title, icon: Icon, skills, delay }) => (
  <motion.div 
    className="skill-category glass"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
  >
    <h3 className="skill-category-title">
      <Icon className="text-accent" style={{ color: 'var(--accent-color)' }} /> {title}
    </h3>
    <div className="skill-list">
      {skills.map((skill, index) => (
        <span key={index} className="skill-tag">{skill}</span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>
        
        <div className="skills-grid">
          <SkillCategory 
            title="Programming Languages" 
            icon={Code2} 
            skills={resumeData.skills.programming} 
            delay={0.1} 
          />
          <SkillCategory 
            title="Frameworks & Libraries" 
            icon={Server} 
            skills={resumeData.skills.frameworks} 
            delay={0.2} 
          />
          <SkillCategory 
            title="Databases" 
            icon={Database} 
            skills={resumeData.skills.databases} 
            delay={0.3} 
          />
          <SkillCategory 
            title="Tools & Technologies" 
            icon={Wrench} 
            skills={resumeData.skills.tools} 
            delay={0.4} 
          />
          <SkillCategory 
            title="AI Tools" 
            icon={Sparkles} 
            skills={resumeData.skills.aiTools} 
            delay={0.5} 
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
