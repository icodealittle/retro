import React from 'react';
import StickyNoteResume from './StickyNoteResume';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.contentWrapper}>
        {/* Profile Section */}
        <div className={styles.profileSection}>
          <div className={styles.profileFrame}>
            <img
              src="/assets/images/profile.jpg"
              alt="Alex"
              className={styles.profileImage}
            />
          </div>
          <h1 className={styles.intro}>Hi, I'm Alex</h1>
          <p className={styles.subtitle}>Product Manager & UX Engineer</p>
        </div>

        {/* Bio Section */}
        <div className={styles.bioSection}>
          <p className={styles.bioText}>
            I'm a tech-driven problem solver passionate about leveraging AI, data, and human-centered design to create impactful solutions. With a Master's in Computer Science (focusing on data science and human-centered AI) from Northeastern University and currently pursuing a dual MBA/MS in Human Factors in Information Design at Bentley University, I approach innovation from both technical and human perspectives—balancing data-driven strategy with empathy, accessibility, and design ethics.
          </p>
          
          <p className={styles.bioText}>
            My experience spans building dashboards and automated workflows that improved data accuracy and efficiency by 20%, 
            designing Python and SQL pipelines for enterprise reporting, and translating complex data into actionable insights that help teams act quickly and confidently.
          </p>

          <p className={styles.bioSubtitle}>
            <strong>Ideal Roles:</strong> Product Manager, Product Designer, UX/Human Factor Engineer, Data Strategist, Analytics Lead, UX Researcher, 
            Human Factors Specialist, Human-Centered AI Researcher/Designer, Design Strategist
          </p>
        </div>

        {/* Sticky Note Resume Widget */}
        <div className={styles.stickyNoteContainer}>
          <StickyNoteResume />
        </div>
      </div>

      {/* Desktop Background Elements (decorative) */}
      <div className={styles.backgroundElements}>
        <div className={styles.decorIcon}>📁</div>
        <div className={styles.decorIcon} style={{ right: '10%', top: '30%' }}>
          💾
        </div>
        <div className={styles.decorIcon} style={{ left: '5%', bottom: '15%' }}>
          🖥️
        </div>
      </div>
    </div>
  );
};

export default Home;