// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// // import { projectsData } from '../data/projectData';
// import styles from '../styles/Portfolio.module.css';

// interface ProjectCard {
//   id: string;
//   title: string;
//   year: string;
//   brief: string;
//   role: string;
//   icon: string;
//   tags: string[];
//   techStack?: string[];
// }

// const Portfolio: React.FC = () => {
//   const [selectedProject, setSelectedProject] = useState<string | null>(null);

//   // Create brief summaries for portfolio cards
//   const projectCards: ProjectCard[] = [
//     {
//       id: 'figma',
//       title: 'Figma: Prior Knowledge, Schemas, and Mental Models',
//       year: 'Spring 2025',
//       brief: 'Research exploring how prior knowledge and mental models influence user interactions with design tools. Analyzed Figma\'s interface for schema theory alignment.',
//       role: 'UX Researcher',
//       icon: '🖌️',
//       tags: ['Cognitive Psychology', 'UX Research', 'Interface Analysis']
//     },
//     {
//       id: 'hydratrim',
//       title: 'Hydra-Trim: L\'Oreal Brandstorm 2025',
//       year: 'November 2024 - March 2025',
//       brief: 'Sustainability-driven smart shaver concept integrating AI, real-time hydration tracking, and eco-friendly modular design for Gen Z consumers.',
//       role: 'Product Manager & Designer',
//       icon: '🪒',
//       tags: ['Product Strategy', 'AI Integration', 'Sustainability', 'User Testing']
//     },
//     {
//       id: 'linkedin',
//       title: 'LinkedIn Jobs Interface: Pre-Attentive Perception',
//       year: 'Spring 2025',
//       brief: 'Analysis of pre-attentive processing and visual organization principles. Evaluated how color, proximity, and alignment guide user attention.',
//       role: 'UX Researcher',
//       icon: '💼',
//       tags: ['Visual Design', 'Cognitive Science', 'Information Architecture']
//     },
//     {
//       id: 'lyft',
//       title: 'Lyft: Balancing Memory, Load, and Emotion',
//       year: 'Spring 2025',
//       brief: 'Behavioral analysis exploring cognitive load, working memory, and emotional factors in ride-scheduling. Identified design barriers increasing mental effort.',
//       role: 'UX Researcher',
//       icon: '🚘',
//       tags: ['Cognitive Load', 'Behavioral Analysis', 'UX Design']
//     },
//     {
//       id: 'mbta',
//       title: 'MBTA Go App: Metacognitive Wayfinding',
//       year: 'Spring 2025',
//       brief: 'Research on how metacognitive regulation influences digital wayfinding. Proposed design strategies supporting user self-regulation and confidence.',
//       role: 'UX Researcher',
//       icon: '🚆',
//       tags: ['Metacognition', 'Navigation Design', 'Public Transit']
//     },
//     {
//       id: 'easepatch',
//       title: 'EasePatch: Sanofi Device Innovation Challenge',
//       year: 'May - October 2025',
//       brief: 'Patient-centered wearable for on-body drug delivery. Integrated comfort, discretion, and smart feedback to reduce anxiety and improve adherence.',
//       role: 'Project Manager & UX Designer',
//       icon: '🩹',
//       tags: ['Medical Device', 'Patient Research', 'Human Factors', 'Sustainability']
//     },
//     {
//       id: 'alexos95',
//       title: 'AlexOS 95: Retro Desktop Portfolio Redesign',
//       year: 'October 2025',
//       brief: 'Interactive Windows 95-inspired portfolio combining retro aesthetics with modern UX. Built with React, TypeScript, and Vite. Features sticky note resume widget and responsive design.',
//       role: 'Full-Stack Designer & Developer',
//       icon: '💻',
//       tags: ['Web Design', 'UX/UI', 'Frontend Development', 'Retro Design'],
//       techStack: ['React', 'TypeScript', 'Vite', 'CSS Modules', 'HTML5']
//     }
//   ];

//   return (
//     <div className={styles.portfolioContainer}>
//       <div className={styles.header}>
//         <h1 className={styles.title}>Portfolio</h1>
//         <p className={styles.subtitle}>Selected Work & Projects</p>
//         <div className={styles.reconstructionNotice}>
//           <p>🚧 This section is under reconstruction.</p>
//           <p>Contact me for full project scope and detailed case studies.</p>
//         </div>
//       </div>

//       <div className={styles.projectGrid}>
//         {projectCards.map((project) => (
//           <Link key={project.id} to={`/project/${project.id}`} className={styles.projectLink}>
//             <div
//               className={`${styles.projectCard} ${selectedProject === project.id ? styles.active : ''}`}
//               onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
//             >
//             <div className={styles.cardHeader}>
//               <span className={styles.icon}>{project.icon}</span>
//               <span className={styles.year}>{project.year}</span>
//             </div>

//             <h3 className={styles.projectTitle}>{project.title}</h3>
//             <p className={styles.role}>{project.role}</p>

//             {selectedProject === project.id && (
//               <div className={styles.expandedContent}>
//                 <p className={styles.brief}>{project.brief}</p>
//                 {project.techStack && (
//                   <div className={styles.techStack}>
//                     <strong>Tech:</strong>
//                     {project.techStack.map((tech, idx) => (
//                       <span key={idx} className={styles.tech}>{tech}</span>
//                     ))}
//                   </div>
//                 )}
//                 <div className={styles.tags}>
//                   {project.tags.map((tag, idx) => (
//                     <span key={idx} className={styles.tag}>
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             )}
//             </div>
//           </Link>
//         ))}
//       </div>
//       <div className={styles.footer}>
//         <p>💡 Click on a project to see more details</p>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;

import React, { useState, useEffect } from "react";
import styles from "../styles/Portfolio.module.css";

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

interface WindowState {
  id: string;
  title: string;
  x: number;
  y: number;
  z: number;
  minimized: boolean;
}

const Portfolio: React.FC = () => {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [dragging, setDragging] = useState<string | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [showAllProjects, setShowAllProjects] = useState(false);

  /* ---------------------------
     Window Z Index
  --------------------------- */

  const bringToFront = (id: string) => {
    setWindows((prev) => {
      const maxZ = Math.max(...prev.map((w) => w.z), 0);
      return prev.map((w) => (w.id === id ? { ...w, z: maxZ + 1 } : w));
    });
  };

  /* ---------------------------
     Open Window
  --------------------------- */

  const openWindow = (project: ProjectCard) => {
    setWindows((prev) => {
      if (prev.find((w) => w.id === project.id)) return prev;

      const maxZ = Math.max(...prev.map((w) => w.z), 0);

      return [
        ...prev,
        {
          id: project.id,
          title: project.title,
          x: window.innerWidth / 2 - 360,
          y: window.innerHeight / 2 - 250,
          z: maxZ + 1,
          minimized: false,
        },
      ];
    });
  };

  const closeWindow = (id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  const toggleMinimize = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, minimized: !w.minimized } : w)),
    );
  };

  /* ---------------------------
     Dragging Logic
  --------------------------- */

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!dragging) return;

      setWindows((prev) =>
        prev.map((w) =>
          w.id === dragging
            ? {
                ...w,
                x: e.clientX - offset.x,
                y: e.clientY - offset.y,
              }
            : w,
        ),
      );
    };

    const handleUp = () => setDragging(null);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [dragging, offset]);

  /* ---------------------------
     Project Data
  --------------------------- */

  const projectCards: ProjectCard[] = [
    {
      id: "figma",
      title: "Figma: Prior Knowledge, Schemas, and Mental Models",
      year: "Spring 2025",
      brief:
        "Research exploring how prior knowledge and mental models influence user interactions with design tools.",
      role: "UX Researcher",
      icon: "bi-brush",
      tags: ["Cognitive Psychology", "UX Research", "Interface Analysis"],
    },
    {
      id: "hydratrim",
      title: "Hydra-Trim: L'Oreal Brandstorm 2025",
      year: "November 2024 - March 2025",
      brief:
        "Sustainability-driven smart shaver concept integrating AI, real-time hydration tracking, and eco-friendly modular design.",
      role: "Product Manager & Designer",
      icon: "bi-moisture",
      tags: [
        "Product Strategy",
        "AI Integration",
        "Sustainability",
        "User Testing",
      ],
    },
    {
      id: "welchs-ai",
      title: "Welch’s AI Adoption Insights",
      year: "September – December 2025",
      brief:
        "Mixed-methods research examining barriers to generative AI adoption within Welch’s organization.",
      role: "Graduate Consultant",
      icon: "bi-cpu",
      tags: [
        "Mixed Methods Research",
        "AI Strategy",
        "Stakeholder Interviews",
        "Organizational Adoption",
      ],
    },
    {
      id: "whisk-whisper",
      title: "Whisk & Whisper: Hands-Free Cooking Assistant",
      year: "September – December 2025",
      brief:
        "Voice-guided cooking assistant designed to reduce cognitive load for novice cooks.",
      role: "Product Designer & Developer",
      icon: "bi-mic",
      tags: ["Voice Interface", "Human Factors", "UX Design", "AI Interaction"],
      techStack: ["React", "Python", "JSON Recipe Engine", "Voice UI"],
    },
    {
      id: "linkedin",
      title: "LinkedIn Jobs Interface: Pre-Attentive Perception",
      year: "Spring 2025",
      brief:
        "Analysis of pre-attentive processing and visual organization principles.",
      role: "UX Researcher",
      icon: "bi-briefcase",
      tags: ["Visual Design", "Cognitive Science", "Information Architecture"],
    },
    {
      id: "lyft",
      title: "Lyft: Balancing Memory, Load, and Emotion",
      year: "Spring 2025",
      brief:
        "Behavioral analysis exploring cognitive load and emotional factors in ride-scheduling.",
      role: "UX Researcher",
      icon: "bi-car-front",
      tags: ["Cognitive Load", "Behavioral Analysis", "UX Design"],
    },
    {
      id: "mbta",
      title: "MBTA Go App: Metacognitive Wayfinding",
      year: "Spring 2025",
      brief:
        "Research on how metacognitive regulation influences digital wayfinding.",
      role: "UX Researcher",
      icon: "bi-train-front",
      tags: ["Metacognition", "Navigation Design", "Public Transit"],
    },
    {
      id: "easepatch",
      title: "EasePatch: Sanofi Device Innovation Challenge",
      year: "May - October 2025",
      brief: "Patient-centered wearable for on-body drug delivery.",
      role: "Project Manager & UX Designer",
      icon: "bi-bandaid",
      tags: [
        "Medical Device",
        "Patient Research",
        "Human Factors",
        "Sustainability",
      ],
    },
    {
      id: "alexos95",
      title: "AlexOS 95: Retro Desktop Portfolio Redesign",
      year: "October 2025",
      brief:
        "Interactive Windows 95-inspired portfolio combining retro aesthetics with modern UX.",
      role: "Full-Stack Designer & Developer",
      icon: "bi-laptop",
      tags: ["Web Design", "UX/UI", "Frontend Development", "Retro Design"],
      techStack: ["React", "TypeScript", "Vite", "CSS Modules", "HTML5"],
    },
  ];

  /* ---------------------------
     Featured Projects
  --------------------------- */

  const featuredProjectIds = [
    "alexos95",
    "hydratrim",
    "welchs-ai",
    "whisk-whisper",
    "easepatch",
  ];

  const sortedProjects = [...projectCards].sort((a, b) => {
    const indexA = featuredProjectIds.indexOf(a.id);
    const indexB = featuredProjectIds.indexOf(b.id);

    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;

    const extractYear = (yearStr: string) => {
      const match = yearStr.match(/\d{4}/);
      return match ? parseInt(match[0]) : 0;
    };

    return extractYear(b.year) - extractYear(a.year);
  });

  const visibleProjects = showAllProjects
    ? sortedProjects
    : sortedProjects.slice(0, 5);

  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Portfolio</h1>
        <p className={styles.subtitle}>Selected Work & Projects</p>
      </div>

      <div className={styles.projectGrid}>
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className={styles.projectCard}
            onClick={() => openWindow(project)}
          >
            <div className={styles.cardHeader}>
              <i className={`${project.icon} ${styles.icon}`}></i>
              <span className={styles.year}>{project.year}</span>
            </div>

            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.role}>{project.role}</p>
          </div>
        ))}
      </div>

      <div className={styles.viewMoreContainer}>
        <button
          className={styles.viewMoreButton}
          onClick={() => setShowAllProjects(!showAllProjects)}
        >
          {showAllProjects ? "Show Featured Projects" : "View All Projects"}
        </button>
      </div>

      {windows.map((win) =>
        win.minimized ? null : (
          <div
            key={win.id}
            className={styles.desktopWindow}
            style={{
              left: win.x,
              top: win.y,
              zIndex: win.z,
            }}
          >
            <div
              className={styles.windowHeader}
              onMouseDown={(e) => {
                const rect = (
                  e.currentTarget.parentElement as HTMLElement
                ).getBoundingClientRect();

                setDragging(win.id);
                setOffset({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                });

                bringToFront(win.id);
              }}
            >
              <span>{win.title}</span>

              <div className={styles.windowButtons}>
                <button onClick={() => toggleMinimize(win.id)}>_</button>
                <button onClick={() => closeWindow(win.id)}>X</button>
              </div>
            </div>

            <iframe
              src={`/project/${win.id}`}
              className={styles.projectFrame}
              title={win.title}
            />
          </div>
        ),
      )}

      <div className={styles.taskbar}>
        {windows.map((win) => (
          <button
            key={win.id}
            className={styles.taskbarItem}
            onClick={() => toggleMinimize(win.id)}
          >
            {win.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;