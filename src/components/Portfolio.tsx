import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { projectsData } from '../data/projectData';
import styles from '../styles/Portfolio.module.css';

interface ProjectCard {
  id: string;
  title: string;
  year: string;
  brief: string;
  role: string;
  icon: string;
  tags: string[];
  techStack?: string[];
}

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  // Create brief summaries for portfolio cards
  const projectCards: ProjectCard[] = [
    {
      id: 'figma',
      title: 'Figma: Prior Knowledge, Schemas, and Mental Models',
      year: 'Spring 2025',
      brief: 'Research exploring how prior knowledge and mental models influence user interactions with design tools. Analyzed Figma\'s interface for schema theory alignment.',
      role: 'UX Researcher',
      icon: '🖌️',
      tags: ['Cognitive Psychology', 'UX Research', 'Interface Analysis']
    },
    {
      id: 'hydratrim',
      title: 'Hydra-Trim: L\'Oreal Brandstorm 2025',
      year: 'November 2024 - March 2025',
      brief: 'Sustainability-driven smart shaver concept integrating AI, real-time hydration tracking, and eco-friendly modular design for Gen Z consumers.',
      role: 'Product Manager & Designer',
      icon: '🪒',
      tags: ['Product Strategy', 'AI Integration', 'Sustainability', 'User Testing']
    },
    {
      id: 'linkedin',
      title: 'LinkedIn Jobs Interface: Pre-Attentive Perception',
      year: 'Spring 2025',
      brief: 'Analysis of pre-attentive processing and visual organization principles. Evaluated how color, proximity, and alignment guide user attention.',
      role: 'UX Researcher',
      icon: '💼',
      tags: ['Visual Design', 'Cognitive Science', 'Information Architecture']
    },
    {
      id: 'lyft',
      title: 'Lyft: Balancing Memory, Load, and Emotion',
      year: 'Spring 2025',
      brief: 'Behavioral analysis exploring cognitive load, working memory, and emotional factors in ride-scheduling. Identified design barriers increasing mental effort.',
      role: 'UX Researcher',
      icon: '🚘',
      tags: ['Cognitive Load', 'Behavioral Analysis', 'UX Design']
    },
    {
      id: 'mbta',
      title: 'MBTA Go App: Metacognitive Wayfinding',
      year: 'Spring 2025',
      brief: 'Research on how metacognitive regulation influences digital wayfinding. Proposed design strategies supporting user self-regulation and confidence.',
      role: 'UX Researcher',
      icon: '🚆',
      tags: ['Metacognition', 'Navigation Design', 'Public Transit']
    },
    {
      id: 'easepatch',
      title: 'EasePatch: Sanofi Device Innovation Challenge',
      year: 'May - October 2025',
      brief: 'Patient-centered wearable for on-body drug delivery. Integrated comfort, discretion, and smart feedback to reduce anxiety and improve adherence.',
      role: 'Project Manager & UX Designer',
      icon: '🩹',
      tags: ['Medical Device', 'Patient Research', 'Human Factors', 'Sustainability']
    },
    {
      id: 'alexos95',
      title: 'AlexOS 95: Retro Desktop Portfolio Redesign',
      year: 'October 2025',
      brief: 'Interactive Windows 95-inspired portfolio combining retro aesthetics with modern UX. Built with React, TypeScript, and Vite. Features sticky note resume widget and responsive design.',
      role: 'Full-Stack Designer & Developer',
      icon: '💻',
      tags: ['Web Design', 'UX/UI', 'Frontend Development', 'Retro Design'],
      techStack: ['React', 'TypeScript', 'Vite', 'CSS Modules', 'HTML5']
    }
  ];

  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Portfolio</h1>
        <p className={styles.subtitle}>Selected Work & Projects</p>
        <div className={styles.reconstructionNotice}>
          <p>🚧 This section is under reconstruction.</p>
          <p>Contact me for full project scope and detailed case studies.</p>
        </div>
      </div>

      <div className={styles.projectGrid}>
        {projectCards.map((project) => (
          <Link key={project.id} to={`/project/${project.id}`} className={styles.projectLink}>
            <div
              className={`${styles.projectCard} ${selectedProject === project.id ? styles.active : ''}`}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
            <div className={styles.cardHeader}>
              <span className={styles.icon}>{project.icon}</span>
              <span className={styles.year}>{project.year}</span>
            </div>

            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.role}>{project.role}</p>

            {selectedProject === project.id && (
              <div className={styles.expandedContent}>
                <p className={styles.brief}>{project.brief}</p>
                {project.techStack && (
                  <div className={styles.techStack}>
                    <strong>Tech:</strong>
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className={styles.tech}>{tech}</span>
                    ))}
                  </div>
                )}
                <div className={styles.tags}>
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.footer}>
        <p>💡 Click on a project to see more details</p>
      </div>
    </div>
  );
};

export default Portfolio;