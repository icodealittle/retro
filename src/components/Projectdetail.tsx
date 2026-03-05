// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { projectsData, ProjectDetail as ProjectDetailType } from '../data/projectData';
// import styles from '../styles/ProjectDetail.module.css';

// const ProjectDetail: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();
//   const [project, setProject] = useState<ProjectDetailType | null>(null);
//   const [activeSection, setActiveSection] = useState<string>('overview');

//   useEffect(() => {
//     const foundProject = projectsData.find((p) => p.id === id);
//     if (foundProject) {
//       setProject(foundProject);
//       setActiveSection('overview');
//     } else {
//       navigate('/portfolio');
//     }
//   }, [id, navigate]);

//   if (!project) {
//     return <div className={styles.loading}>Loading...</div>;
//   }

//   // Conditional tab configuration based on project ID
//   const getTabConfig = (projectId: string) => {
//     const configs: Record<string, { tabs: string[]; icons: Record<string, string> }> = {
//       easepatch: {
//         tabs: ['overview', 'researchTesting', 'designOutcome'],
//         icons: {
//           overview: '📖',
//           researchTesting: '🔬',
//           designOutcome: '✨'
//         }
//       },
//       hydratrim: {
//         tabs: ['overview', 'process', 'insights', 'outcome'],
//         icons: {
//           overview: '📖',
//           process: '🔧',
//           insights: '💡',
//           outcome: '✨'
//         }
//       },
//       alexos95: {
//         tabs: ['overview', 'designPhilosophy', 'buildAnimations', 'outcome'],
//         icons: {
//           overview: '📖',
//           designPhilosophy: '🎨',
//           buildAnimations: '⚡',
//           outcome: '✨'
//         }
//       }
//     };

//     // Default configuration for all other projects
//     return configs[projectId] || {
//       tabs: ['overview', 'process', 'outcome'],
//       icons: {
//         overview: '📖',
//         process: '🔧',
//         outcome: '✨'
//       }
//     };
//   };

//   const tabConfig = getTabConfig(project.id);
//   const tabs = tabConfig.tabs;
//   const tabIcons = tabConfig.icons;

//   // Get human-readable tab labels
//   const getTabLabel = (tab: string): string => {
//     const labels: Record<string, string> = {
//       overview: 'Overview',
//       process: 'Process',
//       outcome: 'Outcome',
//       researchTesting: 'Research & Testing',
//       designOutcome: 'Design & Outcome',
//       insights: 'Insights',
//       designPhilosophy: 'Design Philosophy',
//       buildAnimations: 'Build & Animations'
//     };
//     return labels[tab] || tab;
//   };

//   // Get section content based on tab name
//   const getSectionContent = (tab: string) => {
//     const sectionMap: Record<string, any> = {
//       overview: project.overview,
//       process: project.process,
//       outcome: project.outcome,
//       researchTesting: project.researchTesting,
//       designOutcome: project.designOutcome,
//       insights: project.insights,
//       designPhilosophy: project.designPhilosophy,
//       buildAnimations: project.buildAnimations
//     };
//     return sectionMap[tab];
//   };

//   const currentSection = getSectionContent(activeSection);

//   // Navigation helpers
//   const currentIndex = projectsData.findIndex((p) => p.id === id);
//   const hasPrevious = currentIndex > 0;
//   const hasNext = currentIndex < projectsData.length - 1;

//   const goToPrevious = () => {
//     if (hasPrevious) {
//       navigate(`/project/${projectsData[currentIndex - 1].id}`);
//     }
//   };

//   const goToNext = () => {
//     if (hasNext) {
//       navigate(`/project/${projectsData[currentIndex + 1].id}`);
//     }
//   };

//   return (
//     <div className={styles.detailContainer}>
//       {/* Header */}
//       <div className={styles.header}>
//         <button className={styles.backBtn} onClick={() => navigate('/portfolio')}>
//           ← Back to Portfolio
//         </button>
//         <div className={styles.titleSection}>
//           <span className={styles.icon}>{project.icon}</span>
//           <div>
//             <h1 className={styles.title}>{project.title}</h1>
//             <p className={styles.meta}>{project.year} • {project.role}</p>
//           </div>
//         </div>
//       </div>

//       {/* Notepad Container */}
//       <div className={styles.notepad}>
//         {/* Section Tabs */}
//         <div className={styles.tabs}>
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               className={`${styles.tab} ${activeSection === tab ? styles.active : ''}`}
//               onClick={() => setActiveSection(tab)}
//             >
//               <span className={styles.tabLabel}>{tabIcons[tab]}</span>
//               {getTabLabel(tab)}
//             </button>
//           ))}
//         </div>

//         {/* Section Content */}
//         <div className={styles.sectionContainer}>
//           <div className={`${styles.section} ${styles[activeSection]}`}>
//             <h2 className={styles.sectionTitle}>{currentSection?.title}</h2>

//             {/* Quote */}
//             {currentSection?.quote && (
//               <blockquote className={styles.quote}>
//                 "{currentSection.quote}"
//               </blockquote>
//             )}

//             {/* Content Paragraphs */}
//             <div className={styles.content}>
//               {currentSection?.content?.map((paragraph: string, idx: number) => (
//                 <p key={idx} className={styles.paragraph}>
//                   {paragraph}
//                 </p>
//               ))}
//             </div>

//             {/* Subsections */}
//             {currentSection?.subsections && currentSection.subsections.length > 0 && (
//               <div className={styles.subsections}>
//                 {currentSection.subsections.map((subsection: any, idx: number) => (
//                   <div key={idx} className={styles.subsection}>
//                     <h4 className={styles.subsectionHeading}>{subsection.heading}</h4>
//                     <ul className={styles.subsectionList}>
//                       {subsection.points.map((point: string, pidx: number) => (
//                         <li key={pidx} className={styles.subsectionItem}>
//                           {point}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* Metrics */}
//             {currentSection?.metrics && currentSection.metrics.length > 0 && (
//               <div className={styles.metrics}>
//                 {currentSection.metrics.map((metric: any, idx: number) => (
//                   <div key={idx} className={styles.metric}>
//                     <strong>{metric.label}</strong>
//                     <span>{metric.value}</span>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* View Full Case Study / Prototype Buttons */}
//             {(project.pdfLink || project.prototypeLink) && (
//               <div className={styles.viewButtonContainer}>
//                 {project.pdfLink && (
//                   <a
//                     href={project.pdfLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={styles.viewButton}
//                   >
//                     📄 View Full Case Study
//                   </a>
//                 )}
//                 {project.prototypeLink && (
//                   <a
//                     href={project.prototypeLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={styles.viewButton}
//                   >
//                     🚀 View Code
//                   </a>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Navigation Footer */}
//       <div className={styles.footer}>
//         <button
//           className={styles.navBtn}
//           onClick={goToPrevious}
//           disabled={!hasPrevious}
//         >
//           ← Previous Project
//         </button>
//         <div className={styles.progress}>
//           {currentIndex + 1} / {projectsData.length}
//         </div>
//         <button
//           className={styles.navBtn}
//           onClick={goToNext}
//           disabled={!hasNext}
//         >
//           Next Project →
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetail;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  projectsData,
  ProjectDetail as ProjectDetailType,
} from "../data/projectData";
import styles from "../styles/ProjectDetail.module.css";

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<ProjectDetailType | null>(null);
  const [activeSection, setActiveSection] = useState<string>("overview");

  useEffect(() => {
    const foundProject = projectsData.find((p) => p.id === id);
    if (foundProject) {
      setProject(foundProject);
      setActiveSection("overview");
    } else {
      navigate("/portfolio");
    }
  }, [id, navigate]);

  if (!project) {
    return <div className={styles.loading}>Loading...</div>;
  }

  const isRestrictedProject = project.id === "welchs-ai";

  const getTabConfig = (projectId: string) => {
    const configs: Record<
      string,
      { tabs: string[]; icons: Record<string, string> }
    > = {
      easepatch: {
        tabs: ["overview", "researchTesting", "designOutcome"],
        icons: {
          overview: "bi-book",
          researchTesting: "bi-eyedropper",
          designOutcome: "bi-stars",
        },
      },

      hydratrim: {
        tabs: ["overview", "process", "insights", "outcome"],
        icons: {
          overview: "bi-book",
          process: "bi-gear",
          insights: "bi-lightbulb",
          outcome: "bi-stars",
        },
      },

      alexos95: {
        tabs: ["overview", "designPhilosophy", "buildAnimations", "outcome"],
        icons: {
          overview: "bi-book",
          designPhilosophy: "bi-palette",
          buildAnimations: "bi-lightning",
          outcome: "bi-stars",
        },
      },

      "welchs-ai": {
        tabs: ["overview", "research", "analysis", "recommendations"],
        icons: {
          overview: "bi-book",
          research: "bi-search",
          analysis: "bi-bar-chart",
          recommendations: "bi-lightbulb",
        },
      },

      "whisk-whisper": {
        tabs: ["overview", "research", "design", "prototype", "outcome"],
        icons: {
          overview: "bi-book",
          research: "bi-search",
          design: "bi-palette",
          prototype: "bi-cpu",
          outcome: "bi-stars",
        },
      },
    };

    return (
      configs[projectId] || {
        tabs: ["overview", "process", "outcome"],
        icons: {
          overview: "bi-book",
          process: "bi-gear",
          outcome: "bi-stars",
        },
      }
    );
  };

  const tabConfig = getTabConfig(project.id);
  const tabs = tabConfig.tabs;
  const tabIcons = tabConfig.icons;

  const getTabLabel = (tab: string): string => {
    const labels: Record<string, string> = {
      overview: "Overview",
      process: "Process",
      outcome: "Outcome",
      researchTesting: "Research & Testing",
      designOutcome: "Design & Outcome",
      insights: "Insights",
      designPhilosophy: "Design Philosophy",
      buildAnimations: "Build & Animations",

      research: "Research",
      analysis: "Analysis",
      recommendations: "Recommendations",
      design: "Design",
      prototype: "Prototype",
    };

    return labels[tab] || tab;
  };

  const getSectionContent = (tab: string) => {
    const sectionMap: Record<string, any> = {
      overview: project.overview,
      process: project.process,
      outcome: project.outcome,
      researchTesting: project.researchTesting,
      designOutcome: project.designOutcome,
      insights: project.insights,
      designPhilosophy: project.designPhilosophy,
      buildAnimations: project.buildAnimations,

      research: project.research,
      analysis: project.analysis,
      recommendations: project.recommendations,
      design: project.design,
      prototype: project.prototype,
    };

    return sectionMap[tab];
  };

  const currentSection = getSectionContent(activeSection);

  const currentIndex = projectsData.findIndex((p) => p.id === id);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < projectsData.length - 1;

  const goToPrevious = () => {
    if (hasPrevious) {
      navigate(`/project/${projectsData[currentIndex - 1].id}`);
    }
  };

  const goToNext = () => {
    if (hasNext) {
      navigate(`/project/${projectsData[currentIndex + 1].id}`);
    }
  };

  return (
    <div className={styles.detailContainer}>
      <div className={styles.header}>
        <button
          className={styles.backBtn}
          onClick={() => navigate("/portfolio")}
        >
          <i className="bi bi-arrow-left"></i> Back to Portfolio
        </button>

        <div className={styles.titleSection}>
          <i className={`${project.icon} ${styles.icon}`}></i>
          <div>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.meta}>
              {project.year} • {project.role}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.notepad}>
        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`${styles.tab} ${activeSection === tab ? styles.active : ""}`}
              onClick={() => setActiveSection(tab)}
            >
              <i className={`${tabIcons[tab]} ${styles.tabLabel}`}></i>
              {getTabLabel(tab)}
            </button>
          ))}
        </div>

        <div className={styles.sectionContainer}>
          <div className={`${styles.section} ${styles[activeSection]}`}>
            <h2 className={styles.sectionTitle}>{currentSection?.title}</h2>

            {currentSection?.quote && (
              <blockquote className={styles.quote}>
                "{currentSection.quote}"
              </blockquote>
            )}

            <div className={styles.content}>
              {currentSection?.content?.map(
                (paragraph: string, idx: number) => (
                  <p key={idx} className={styles.paragraph}>
                    {paragraph}
                  </p>
                ),
              )}
            </div>

            {currentSection?.subsections &&
              currentSection.subsections.length > 0 && (
                <div className={styles.subsections}>
                  {currentSection.subsections.map(
                    (subsection: any, idx: number) => (
                      <div key={idx} className={styles.subsection}>
                        <h4 className={styles.subsectionHeading}>
                          {subsection.heading}
                        </h4>
                        <ul className={styles.subsectionList}>
                          {subsection.points.map(
                            (point: string, pidx: number) => (
                              <li key={pidx} className={styles.subsectionItem}>
                                {point}
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    ),
                  )}
                </div>
              )}

            {currentSection?.metrics && currentSection.metrics.length > 0 && (
              <div className={styles.metrics}>
                {currentSection.metrics.map((metric: any, idx: number) => (
                  <div key={idx} className={styles.metric}>
                    <strong>{metric.label}</strong>
                    <span>{metric.value}</span>
                  </div>
                ))}
              </div>
            )}

            {(project.pdfLink ||
              project.prototypeLink ||
              isRestrictedProject) && (
              <div className={styles.viewButtonContainer}>
                {isRestrictedProject && (
                  <p className={styles.caseNotice}>
                    Final presentation materials are not publicly available.
                  </p>
                )}

                {!isRestrictedProject && project.pdfLink && (
                  <a
                    href={project.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.viewButton}
                  >
                    <i className="bi bi-file-earmark-text"></i> View Full Case
                    Study
                  </a>
                )}

                {project.prototypeLink && (
                  <a
                    href={project.prototypeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.viewButton}
                  >
                    <i className="bi bi-rocket"></i> View Code
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <button
          className={styles.navBtn}
          onClick={goToPrevious}
          disabled={!hasPrevious}
        >
          <i className="bi bi-arrow-left"></i> Previous Project
        </button>

        <div className={styles.progress}>
          {currentIndex + 1} / {projectsData.length}
        </div>

        <button
          className={styles.navBtn}
          onClick={goToNext}
          disabled={!hasNext}
        >
          Next Project <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default ProjectDetail;