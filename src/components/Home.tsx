// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import styles from '../styles/Home.module.css';

// const Home: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<'experience' | 'projects' | 'skills' | 'achievements'>('experience');

//   const resumeData = {
//     experience: [
//       {
//         role: 'Digital Content & Analytics Intern',
//         company: 'Bentley University – University Communication Advancement',
//         period: "August'25 - Present",
//         details:
//           'Designing analytics dashboards and automating content reporting to support digital engagement strategies. Collaborating with marketing and IT teams to track KPIs and optimize university-wide communications using Power BI and SQL.',
//       },
//       {
//         role: 'Data Analyst Intern',
//         company: 'Bentley University – University Communication Advancement',
//         period: "June - August'25",
//         details:
//           'Developed interactive Power BI dashboards and performed exploratory data analysis on campaign engagement metrics. Identified trends that informed new content strategies, improving reach and conversion rates by 15%.',
//       },
//       {
//         role: 'Data Engineer Freelance Consultant',
//         company: 'UCare Pharmacy',
//         period: "June'23 - August'22",
//         details:
//           'Built Python-based data pipelines for customer analytics and pharmacy operations. Automated reporting workflows to improve data accuracy and delivery speed by 20%, supporting better decision-making and patient care insights.',
//       },
//       {
//         role: 'UX Freelance Consultant',
//         company: 'Dawn Café',
//         period: "February - July'22",
//         details:
//           'Led UX redesign for a local café’s digital ordering system. Conducted user interviews and usability tests to identify friction points, resulting in a 25% improvement in task completion time and higher customer satisfaction.',
//       },
//       {
//         role: 'Student Recruitment Ambassador',
//         company: 'Northeastern University - Khoury College of Computer Sciences',
//         period: "April'21 - August'22",
//         details:
//           'Supported prospective students through one-on-one sessions and campus tours. Shared insights about the Align program and promoted diversity in computing by mentoring new entrants from non-technical backgrounds.',
//       },
//       {
//         role: 'UX Designer Extern',
//         company: 'Innsure, Inc.',
//         period: "February - May'22",
//         details:
//           'Collaborated with cross-functional teams to prototype a B2B insurance tech product. Delivered wireframes and usability feedback loops that enhanced navigation flow and improved stakeholder engagement during product demos.',
//       },
//     ],
//     projects: [
//       '🪒 HydraTrim - Smart grooming innovation (L\'Oreal Brandstorm)',
//       '🩹 EasePatch - Wearable drug delivery (Sanofi Challenge)',
//       '🖌️ Figma Research - Mental models & schema analysis',
//       '💼 LinkedIn Analysis - Pre-attentive perception study',
//       '🚘 Lyft Study - Cognitive load & emotional design',
//       '🚆 MBTA Research - Metacognitive wayfinding',
//       '💻 AlexOS 95 - Retro portfolio with modern UX',
//     ],
//     skills: {
//       research: ['User Interviews', 'Usability Testing', 'Cognitive Analysis', 'Heuristic Evaluation'],
//       design: ['Figma', 'Adobe XD', 'Prototyping', 'Visual Design', 'Information Architecture'],
//       data: ['Python', 'R', 'SPSS', 'Excel', 'Qualitative Coding'],
//       development: ['React', 'TypeScript', 'HTML/CSS', 'Git', 'Vite'],
//       collaboration: ['Agile', 'Product Strategy', 'Stakeholder Management', 'Design Systems'],
//     },
//     achievements: [
//       '🏆 Merit Scholar – Bentley University',
//       '🎓 Ruth Marie & Align Scholarships – Northeastern University',
//       '⭐ UXPA Member',
//       '🏅 Cum Laude Graduate – UMass Lowell',
//       '📜 Dean\'s List – Multiple Semesters',
//       '🎖️ National Honors: Pi Sigma Alpha (National Political Science Honors Society), Pi Delta Phi (National French Honors Society)',
//       '💰 Dean Nina Coppens Endowed Scholarship Fund – UMass Lowell (Sep 2017)',
//       '💰 Charles E. Goodell Endowed Scholarship Fund – UMass Lowell (Sep 2016)',
//     ],
//   };

//   return (
//     <div className={styles.homeContainer}>
//       {/* 🖥️ Hero Section */}
//       <div className={styles.hero}>
//         <div className={styles.heroWindow}>
//           <div className={styles.windowTitleBar}>
//             <span className={styles.windowTitle}>💻 welcome.exe</span>
//             <div className={styles.windowControls}>
//               <span>_</span>
//               <span>□</span>
//               <span>×</span>
//             </div>
//           </div>

//           {/* ✅ Side-by-Side Intro Layout */}
//           <div className={styles.heroContent}>
//             <div className={styles.heroIntroRow}>
//               {/* Profile */}
//               <div className={styles.profileFrame}>
//                 <img
//                   src="/assets/images/profile.jpg"
//                   alt="Alex"
//                   className={styles.profileImage}
//                 />
//               </div>

//               {/* Text */}
//               <div className={styles.introText}>
//                 <h1 className={styles.heroTitle}>
//                   <span className={styles.glitch}>Hi, I'm Alex</span>
//                 </h1>
//                 <p className={styles.heroSubtitle}>
//                   UX Researcher · Product Designer · Human Factors Specialist
//                 </p>
//                 <p className={styles.heroDescription}>
//                   I'm a tech-driven problem solver passionate about leveraging AI, data, and human-centered design to create impactful solutions. With a Master's in Computer Science (focusing on data science and human-centered AI) from Northeastern University and currently pursuing a dual MBA/MS in Human Factors in Information Design at Bentley University, I approach innovation from both technical and human perspectives.
//                 </p>
//                 <p className={styles.heroDescription}>
//                   My experience spans building dashboards and automated workflows that improved data accuracy and efficiency by 20%, designing Python and SQL pipelines for enterprise reporting, and translating complex data into actionable insights that help teams act quickly and confidently.
//                 </p>

//                 {/* Buttons */}
//                 <div className={styles.heroButtons}>
//                   <Link to="/portfolio" className={styles.primaryButton}>
//                     View Portfolio →
//                   </Link>
//                   <Link to="/contact" className={styles.secondaryButton}>
//                     Get in Touch
//                   </Link>
//                   <a
//                     href="/pdfs/Alex_chea_resume.pdf"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={styles.primaryButton}
//                   >
//                     View Resume
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* 🧾 Resume Widget */}
//       <div className={styles.resumeWidget}>
//         <div className={styles.widgetTitleBar}>
//           <span className={styles.widgetIcon}>📄</span>
//           <span className={styles.widgetTitle}>resume.txt - Notepad</span>
//           <div className={styles.windowControls}>
//             <span>_</span>
//             <span>□</span>
//             <span>×</span>
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className={styles.tabs}>
//           {(['experience', 'projects', 'skills', 'achievements'] as const).map((tab) => (
//             <button
//               key={tab}
//               className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab === 'experience' && '💼'}
//               {tab === 'projects' && '🚀'}
//               {tab === 'skills' && '⚡'}
//               {tab === 'achievements' && '🏆'}
//               <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
//             </button>
//           ))}
//         </div>

//         {/* Content */}
//         <div className={styles.widgetContent}>
//           {activeTab === 'experience' && (
//             <div className={styles.experienceList}>
//               {resumeData.experience.map((exp, idx) => (
//                 <div key={idx} className={styles.experienceItem}>
//                   <h3>{exp.role}</h3>
//                   <p className={styles.company}>{exp.company} · {exp.period}</p>
//                   <p className={styles.details}>{exp.details}</p>
//                 </div>
//               ))}
//             </div>
//           )}

//           {activeTab === 'projects' && (
//             <ul className={styles.projectList}>
//               {resumeData.projects.map((project, idx) => (
//                 <li key={idx}>{project}</li>
//               ))}
//             </ul>
//           )}

//           {activeTab === 'skills' && (
//             <div className={styles.skillsGrid}>
//               {Object.entries(resumeData.skills).map(([category, skills]) => (
//                 <div key={category} className={styles.skillCategory}>
//                   <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
//                   <div className={styles.skillTags}>
//                     {skills.map((skill, idx) => (
//                       <span key={idx} className={styles.skillTag}>{skill}</span>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {activeTab === 'achievements' && (
//             <ul className={styles.achievementList}>
//               {resumeData.achievements.map((achievement, idx) => (
//                 <li key={idx}>{achievement}</li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'projects' | 'skills' | 'achievements'>('experience');

  const resumeData = {
    experience: [
      {
        role: 'Digital Content & Analytics Intern',
        company: 'Bentley University – University Communication Advancement',
        period: "August'25 - Present",
        details:
          'Designing analytics dashboards and automating content reporting to support digital engagement strategies. Collaborating with marketing and IT teams to track KPIs and optimize university-wide communications using Power BI and SQL.',
      },
      {
        role: 'Data Analyst Intern',
        company: 'Bentley University – University Communication Advancement',
        period: "June - August'25",
        details:
          'Developed interactive Power BI dashboards and performed exploratory data analysis on campaign engagement metrics. Identified trends that informed new content strategies, improving reach and conversion rates by 15%.',
      },
      {
        role: 'Data Engineer Freelance Consultant',
        company: 'UCare Pharmacy',
        period: "June'23 - August'22",
        details:
          'Built Python-based data pipelines for customer analytics and pharmacy operations. Automated reporting workflows to improve data accuracy and delivery speed by 20%, supporting better decision-making and patient care insights.',
      },
      {
        role: 'UX Freelance Consultant',
        company: 'Dawn Café',
        period: "February - July'22",
        details:
          'Led UX redesign for a local café s digital ordering system. Conducted user interviews and usability tests to identify friction points, resulting in a 25% improvement in task completion time and higher customer satisfaction.',
      },
      {
        role: 'Student Recruitment Ambassador',
        company: 'Northeastern University - Khoury College of Computer Sciences',
        period: "April'21 - August'22",
        details:
          'Supported prospective students through one-on-one sessions and campus tours. Shared insights about the Align program and promoted diversity in computing by mentoring new entrants from non-technical backgrounds.',
      },
      {
        role: 'UX Designer Extern',
        company: 'Innsure, Inc.',
        period: "February - May'22",
        details:
          'Collaborated with cross-functional teams to prototype a B2B insurance tech product. Delivered wireframes and usability feedback loops that enhanced navigation flow and improved stakeholder engagement during product demos.',
      },
    ],
    projects: [
      { text: 'HydraTrim - Smart grooming innovation (L\'Oreal Brandstorm)', icon: 'bi-moisture' },
      { text: 'EasePatch - Wearable drug delivery (Sanofi Challenge)', icon: 'bi-bandaid' },
      { text: 'Figma Research - Mental models & schema analysis', icon: 'bi-brush' },
      { text: 'LinkedIn Analysis - Pre-attentive perception study', icon: 'bi-briefcase' },
      { text: 'Lyft Study - Cognitive load & emotional design', icon: 'bi-car-front' },
      { text: 'MBTA Research - Metacognitive wayfinding', icon: 'bi-train-front' },
      { text: 'AlexOS 95 - Retro portfolio with modern UX', icon: 'bi-laptop' },
    ],
    skills: {
      research: ['User Interviews', 'Usability Testing', 'Cognitive Analysis', 'Heuristic Evaluation'],
      design: ['Figma', 'Adobe XD', 'Prototyping', 'Visual Design', 'Information Architecture'],
      data: ['Python', 'R', 'SPSS', 'Excel', 'Qualitative Coding'],
      development: ['React', 'TypeScript', 'HTML/CSS', 'Git', 'Vite'],
      collaboration: ['Agile', 'Product Strategy', 'Stakeholder Management', 'Design Systems'],
    },
    achievements: [
      { text: 'Merit Scholar – Bentley University', icon: 'bi-trophy' },
      { text: 'Ruth Marie & Align Scholarships – Northeastern University', icon: 'bi-mortarboard' },
      { text: 'UXPA Member', icon: 'bi-star' },
      { text: 'Cum Laude Graduate – UMass Lowell', icon: 'bi-award' },
      { text: 'Dean\'s List – Multiple Semesters', icon: 'bi-journal-text' },
      { text: 'National Honors: Pi Sigma Alpha (National Political Science Honors Society), Pi Delta Phi (National French Honors Society)', icon: 'bi-patch-check' },
      { text: 'Dean Nina Coppens Endowed Scholarship Fund – UMass Lowell (Sep 2017)', icon: 'bi-cash' },
      { text: 'Charles E. Goodell Endowed Scholarship Fund – UMass Lowell (Sep 2016)', icon: 'bi-cash' },
    ],
  };

  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroWindow}>
          <div className={styles.windowTitleBar}>
            <span className={styles.windowTitle}><i className="bi bi-laptop"></i> welcome.exe</span>
            <div className={styles.windowControls}>
              <span>_</span>
              <span>□</span>
              <span>×</span>
            </div>
          </div>

          {/* Side-by-Side Intro Layout */}
          <div className={styles.heroContent}>
            <div className={styles.heroIntroRow}>
              {/* Profile */}
              <div className={styles.profileFrame}>
                <img
                  src="/assets/images/profile.jpg"
                  alt="Alex"
                  className={styles.profileImage}
                />
              </div>

              {/* Text */}
              <div className={styles.introText}>
                <h1 className={styles.heroTitle}>
                  <span className={styles.glitch}>Hi, I'm Alex</span>
                </h1>
                <p className={styles.heroSubtitle}>
                  UX Researcher · Product Designer · Human Factors Specialist
                </p>
                <p className={styles.heroDescription}>
                  I'm a tech-driven problem solver passionate about leveraging AI, data, and human-centered design to create impactful solutions. With a Master's in Computer Science (focusing on data science and human-centered AI) from Northeastern University and currently pursuing a dual MBA/MS in Human Factors in Information Design at Bentley University, I approach innovation from both technical and human perspectives.
                </p>
                <p className={styles.heroDescription}>
                  My experience spans building dashboards and automated workflows that improved data accuracy and efficiency by 20%, designing Python and SQL pipelines for enterprise reporting, and translating complex data into actionable insights that help teams act quickly and confidently.
                </p>

                {/* Buttons */}
                <div className={styles.heroButtons}>
                  <Link to="/portfolio" className={styles.primaryButton}>
                    View Portfolio →
                  </Link>
                  <Link to="/contact" className={styles.secondaryButton}>
                    Get in Touch
                  </Link>
                  <a
                    href="/pdfs/Alex_chea_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primaryButton}
                  >
                    View Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Widget */}
      <div className={styles.resumeWidget}>
        <div className={styles.widgetTitleBar}>
          <span className={styles.widgetIcon}><i className="bi bi-file-earmark-text"></i></span>
          <span className={styles.widgetTitle}>resume.txt - Notepad</span>
          <div className={styles.windowControls}>
            <span>_</span>
            <span>□</span>
            <span>×</span>
          </div>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          {(['experience', 'projects', 'skills', 'achievements'] as const).map((tab) => (
            <button
              key={tab}
              className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'experience' && <i className="bi bi-briefcase"></i>}
              {tab === 'projects' && <i className="bi bi-rocket"></i>}
              {tab === 'skills' && <i className="bi bi-lightning"></i>}
              {tab === 'achievements' && <i className="bi bi-trophy"></i>}
              <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className={styles.widgetContent}>
          {activeTab === 'experience' && (
            <div className={styles.experienceList}>
              {resumeData.experience.map((exp, idx) => (
                <div key={idx} className={styles.experienceItem}>
                  <h3>{exp.role}</h3>
                  <p className={styles.company}>{exp.company} · {exp.period}</p>
                  <p className={styles.details}>{exp.details}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'projects' && (
            <ul className={styles.projectList}>
              {resumeData.projects.map((project, idx) => (
                <li key={idx}>
                  <i className={project.icon}></i> {project.text}
                </li>
              ))}
            </ul>
          )}

          {activeTab === 'skills' && (
            <div className={styles.skillsGrid}>
              {Object.entries(resumeData.skills).map(([category, skills]) => (
                <div key={category} className={styles.skillCategory}>
                  <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                  <div className={styles.skillTags}>
                    {skills.map((skill, idx) => (
                      <span key={idx} className={styles.skillTag}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'achievements' && (
            <ul className={styles.achievementList}>
              {resumeData.achievements.map((achievement, idx) => (
                <li key={idx}>
                  <i className={achievement.icon}></i> {achievement.text}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
