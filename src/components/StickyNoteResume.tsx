import React, { useState, useEffect } from 'react';
import styles from '../styles/StickyNote.module.css';

type TabType = 'experience' | 'projects' | 'skills' | 'achievements';

const StickyNoteResume: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('experience');
  const [wiggle, setWiggle] = useState(false);

  useEffect(() => {
    const wiggleInterval = setInterval(() => {
      setWiggle(true);
      setTimeout(() => setWiggle(false), 600);
    }, 5000);

    return () => clearInterval(wiggleInterval);
  }, []);

  const tabContent = {
    experience: [
      { title: 'Digital Content & Analytics Intern', company: 'Bentley University - University Communication Advancement', 
        duration: 'August 2025 - Present' },
      { title: 'Data Analyst Intern', company: 'Bentley University - University Communication Advancement', 
        duration: 'June 2025 - August 2025' },
      { title: 'UX Consultant', company: 'Dawn Café', 
        duration: 'February - July 2023' },
      { title: 'Student Recruitment Ambassador', company: 'Northeastern University - Khoury College of Computer Sciences', 
        duration: 'April 2021 - August 2022' },
      { title: 'UX Designer Externship', company: 'Innsure, Inc.', 
        duration: 'February - May 2022' }
    ],
    projects: [
      {
        title: 'Welch\'s AI Adoption Insights',
        role: 'Graduate Student Consultant',
        company: 'Bentley University',
        details: [
          'Mixed-methods research on AI adoption in consumer goods',
          'Identified trust, transparency, usability as adoption barriers',
          'Delivered executive report with strategic recommendations'
        ]
      },
      {
        title: 'Hydra-Trim Product',
        role: 'Product Manager & Human Factors Researcher',
        company: 'L\'Oréal Brandstorm Competition',
        details: [
          'Defined AI-enabled product requirements with sustainability principles',
          'Created competitive analyses and go-to-market frameworks',
          'Positioned for Gen Z adoption through ethical AI'
        ]
      },
      {
        title: 'AI Drug Delivery System',
        role: 'Product & UX Analyst',
        company: 'Sanofi HealthTech Challenge',
        details: [
          'Co-led participatory design aligned with FDA usability standards',
          'Synthesized user feedback into actionable design guidelines',
          'Human-in-the-loop system development'
        ]
      },
      {
        title: 'MBTA UX Case Study',
        role: 'UX Research',
        details: [
          'Conducted usability evaluation of MBTA Go app',
          'Identified navigation and labeling breakdowns',
          'Proposed IA redesigns reducing wayfinding friction'
        ]
      },
      {
        title: 'Zero Waste Food Tracker',
        role: 'Human-Centered Researcher & Designer',
        details: [
          'Designed mobile app with sustainability features',
          'Anomaly detection to reduce food waste',
          '20% retention improvement through iterative design'
        ]
      }
    ],
    skills: [
      // Research & Human Factors
      'Usability Testing',
      'Interviews & Surveys',
      'Card Sorting',
      'Mixed-Methods Research',
      'Cognitive Task Analysis',
      'Journey Mapping',
      'Accessibility (UDL)',
      // Design & Visualization
      'Wireframing',
      'Prototyping',
      'Visual Storyboarding',
      'Data Visualization',
      'Figma',
      'Adobe Illustrator',
      'Photoshop',
      // Data & Analytics
      'Excel',
      'Tableau',
      'SQL',
      'Python (pandas, NumPy)',
      'Power BI',
      'A/B Testing',
      'Data Modeling',
      // Collaboration
      'Agile/Scrum',
      'Stakeholder Communication',
      'Research Documentation',
      'Cross-Functional Coordination',
      // Emerging Tech
      'AI Research Tools',
      'Human–AI Interaction',
      'Workflow Automation',
      'Generative AI Prototyping',
      'AR/VR Interface Exploration'
    ],
    achievements: [
      '🏆 Merit Scholar – Bentley University',
      '🎓 Ruth Marie & Align Scholarships – Northeastern University',
      '⭐ UXPA Member',
      '🏅 Cum Laude Graduate – UMass Lowell',
      '📜 Dean\'s List – Multiple Semesters',
      '🎖️ National Honors: Pi Sigma Alpha (National Political Science Honors Society), Pi Delta Phi (National French Honors Society)'
    ],
  };

  return (
    <div className={`${styles.stickyNote} ${wiggle ? styles.wiggle : ''}`}>
      <div className={styles.titleBar}>
        <span className={styles.title}>📋 Resume.txt</span>
        <div className={styles.controls}>
          <button className={styles.minBtn}>_</button>
          <button className={styles.maxBtn}>□</button>
          <button className={styles.closeBtn}>×</button>
        </div>
      </div>

      <div className={styles.tabNav}>
        {(['experience', 'projects', 'skills', 'achievements'] as const).map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className={styles.content}>
        <div className={styles.contentScroll}>
          {activeTab === 'experience' && (
            <div>
              {tabContent.experience.map((exp, idx) => (
                <div key={idx} className={styles.item}>
                  <h4>{exp.title}</h4>
                  <p className={styles.company}>{exp.company}</p>
                  <p className={styles.duration}>{exp.duration}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'projects' && (
            <div>
              {tabContent.projects.map((proj, idx) => (
                <div key={idx} className={styles.item}>
                  <h4>{proj.title}</h4>
                  <p className={styles.company}>{proj.role}</p>
                  {proj.company && <p className={styles.company}>{proj.company}</p>}
                  <ul style={{ marginLeft: '1rem', marginTop: '0.5rem', paddingLeft: 0 }}>
                    {proj.details.map((detail, i) => (
                      <li key={i} style={{ fontSize: '0.85rem', marginBottom: '0.3rem', listStylePosition: 'inside' }}>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'skills' && (
            <div className={styles.skillsList}>
              {tabContent.skills.map((skill, idx) => (
                <div key={idx} className={styles.skillTag}>
                  {skill}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'achievements' && (
            <div>
              {tabContent.achievements.map((achievement, idx) => (
                <div key={idx} className={styles.achievement}>
                  {achievement}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={styles.scrollbar}>
        <div className={styles.scrollThumb}></div>
      </div>
    </div>
  );
};

export default StickyNoteResume;