// import React, { useState, useEffect } from "react";
// import styles from "../styles/Portfolio.module.css";

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

// interface WindowState {
//   id: string;
//   title: string;
//   x: number;
//   y: number;
//   z: number;
//   minimized: boolean;
// }

// const Portfolio: React.FC = () => {
//   const [windows, setWindows] = useState<WindowState[]>([]);
//   const [dragging, setDragging] = useState<string | null>(null);
//   const [offset, setOffset] = useState({ x: 0, y: 0 });
//   const [showAllProjects, setShowAllProjects] = useState(false);

//   /* ---------------------------
//      Window Z Index
//   --------------------------- */

//   const bringToFront = (id: string) => {
//     setWindows((prev) => {
//       const maxZ = Math.max(...prev.map((w) => w.z), 0);
//       return prev.map((w) => (w.id === id ? { ...w, z: maxZ + 1 } : w));
//     });
//   };

//   /* ---------------------------
//      Open Window
//   --------------------------- */

//   const openWindow = (project: ProjectCard) => {
//     setWindows((prev) => {
//       if (prev.find((w) => w.id === project.id)) return prev;

//       const maxZ = Math.max(...prev.map((w) => w.z), 0);

//       return [
//         ...prev,
//         {
//           id: project.id,
//           title: project.title,
//           x: window.innerWidth / 2 - 360,
//           y: window.innerHeight / 2 - 250,
//           z: maxZ + 1,
//           minimized: false,
//         },
//       ];
//     });
//   };

//   const closeWindow = (id: string) => {
//     setWindows((prev) => prev.filter((w) => w.id !== id));
//   };

//   const toggleMinimize = (id: string) => {
//     setWindows((prev) =>
//       prev.map((w) => (w.id === id ? { ...w, minimized: !w.minimized } : w)),
//     );
//   };

//   /* ---------------------------
//      Dragging Logic
//   --------------------------- */

//   useEffect(() => {
//     const handleMove = (e: MouseEvent) => {
//       if (!dragging) return;

//       setWindows((prev) =>
//         prev.map((w) =>
//           w.id === dragging
//             ? {
//                 ...w,
//                 x: e.clientX - offset.x,
//                 y: e.clientY - offset.y,
//               }
//             : w,
//         ),
//       );
//     };

//     const handleUp = () => setDragging(null);

//     window.addEventListener("mousemove", handleMove);
//     window.addEventListener("mouseup", handleUp);

//     return () => {
//       window.removeEventListener("mousemove", handleMove);
//       window.removeEventListener("mouseup", handleUp);
//     };
//   }, [dragging, offset]);

//   /* ---------------------------
//      Project Data
//   --------------------------- */

//   const projectCards: ProjectCard[] = [
//     {
//       id: "figma",
//       title: "Figma: Prior Knowledge, Schemas, and Mental Models",
//       year: "Spring 2025",
//       brief:
//         "Research exploring how prior knowledge and mental models influence user interactions with design tools.",
//       role: "UX Researcher",
//       icon: "bi-brush",
//       tags: ["Cognitive Psychology", "UX Research", "Interface Analysis"],
//     },
//     {
//       id: "hydratrim",
//       title: "Hydra-Trim: L'Oreal Brandstorm 2025",
//       year: "November 2024 - March 2025",
//       brief:
//         "Sustainability-driven smart shaver concept integrating AI, real-time hydration tracking, and eco-friendly modular design.",
//       role: "Product Manager & Designer",
//       icon: "bi-moisture",
//       tags: [
//         "Product Strategy",
//         "AI Integration",
//         "Sustainability",
//         "User Testing",
//       ],
//     },
//     {
//       id: "welchs-ai",
//       title: "Welch’s AI Adoption Insights",
//       year: "September – December 2025",
//       brief:
//         "Mixed-methods research examining barriers to generative AI adoption within Welch’s organization.",
//       role: "Graduate Consultant",
//       icon: "bi-cpu",
//       tags: [
//         "Mixed Methods Research",
//         "AI Strategy",
//         "Stakeholder Interviews",
//         "Organizational Adoption",
//       ],
//     },
//     {
//       id: "whisk-whisper",
//       title: "Whisk & Whisper: Hands-Free Cooking Assistant",
//       year: "September – December 2025",
//       brief:
//         "Voice-guided cooking assistant designed to reduce cognitive load for novice cooks.",
//       role: "Product Designer & Developer",
//       icon: "bi-mic",
//       tags: ["Voice Interface", "Human Factors", "UX Design", "AI Interaction"],
//       techStack: ["React", "Python", "JSON Recipe Engine", "Voice UI"],
//     },
//     {
//       id: "linkedin",
//       title: "LinkedIn Jobs Interface: Pre-Attentive Perception",
//       year: "Spring 2025",
//       brief:
//         "Analysis of pre-attentive processing and visual organization principles.",
//       role: "UX Researcher",
//       icon: "bi-briefcase",
//       tags: ["Visual Design", "Cognitive Science", "Information Architecture"],
//     },
//     {
//       id: "lyft",
//       title: "Lyft: Balancing Memory, Load, and Emotion",
//       year: "Spring 2025",
//       brief:
//         "Behavioral analysis exploring cognitive load and emotional factors in ride-scheduling.",
//       role: "UX Researcher",
//       icon: "bi-car-front",
//       tags: ["Cognitive Load", "Behavioral Analysis", "UX Design"],
//     },
//     {
//       id: "mbta",
//       title: "MBTA Go App: Metacognitive Wayfinding",
//       year: "Spring 2025",
//       brief:
//         "Research on how metacognitive regulation influences digital wayfinding.",
//       role: "UX Researcher",
//       icon: "bi-train-front",
//       tags: ["Metacognition", "Navigation Design", "Public Transit"],
//     },
//     {
//       id: "easepatch",
//       title: "EasePatch: Sanofi Device Innovation Challenge",
//       year: "May - October 2025",
//       brief: "Patient-centered wearable for on-body drug delivery.",
//       role: "Project Manager & UX Designer",
//       icon: "bi-bandaid",
//       tags: [
//         "Medical Device",
//         "Patient Research",
//         "Human Factors",
//         "Sustainability",
//       ],
//     },
//     {
//       id: "alexos95",
//       title: "AlexOS 95: Retro Desktop Portfolio Redesign",
//       year: "October 2025",
//       brief:
//         "Interactive Windows 95-inspired portfolio combining retro aesthetics with modern UX.",
//       role: "Full-Stack Designer & Developer",
//       icon: "bi-laptop",
//       tags: ["Web Design", "UX/UI", "Frontend Development", "Retro Design"],
//       techStack: ["React", "TypeScript", "Vite", "CSS Modules", "HTML5"],
//     },
//   ];

//   /* ---------------------------
//      Featured Projects
//   --------------------------- */

//   const featuredProjectIds = [
//     "alexos95",
//     "hydratrim",
//     "welchs-ai",
//     "whisk-whisper",
//     "easepatch",
//   ];

//   const sortedProjects = [...projectCards].sort((a, b) => {
//     const indexA = featuredProjectIds.indexOf(a.id);
//     const indexB = featuredProjectIds.indexOf(b.id);

//     if (indexA !== -1 && indexB !== -1) return indexA - indexB;
//     if (indexA !== -1) return -1;
//     if (indexB !== -1) return 1;

//     const extractYear = (yearStr: string) => {
//       const match = yearStr.match(/\d{4}/);
//       return match ? parseInt(match[0]) : 0;
//     };

//     return extractYear(b.year) - extractYear(a.year);
//   });

//   const visibleProjects = showAllProjects
//     ? sortedProjects
//     : sortedProjects.slice(0, 5);

//   return (
//     <div className={styles.portfolioContainer}>
//       <div className={styles.header}>
//         <h1 className={styles.title}>Portfolio</h1>
//         <p className={styles.subtitle}>Selected Work & Projects</p>
//       </div>

//       <div className={styles.projectGrid}>
//         {visibleProjects.map((project) => (
//           <div
//             key={project.id}
//             className={styles.projectCard}
//             onClick={() => openWindow(project)}
//           >
//             <div className={styles.cardHeader}>
//               <i className={`${project.icon} ${styles.icon}`}></i>
//               <span className={styles.year}>{project.year}</span>
//             </div>

//             <h3 className={styles.projectTitle}>{project.title}</h3>
//             <p className={styles.role}>{project.role}</p>
//           </div>
//         ))}
//       </div>

//       <div className={styles.viewMoreContainer}>
//         <button
//           className={styles.viewMoreButton}
//           onClick={() => setShowAllProjects(!showAllProjects)}
//         >
//           {showAllProjects ? "Show Featured Projects" : "View All Projects"}
//         </button>
//       </div>

//       {windows.map((win) =>
//         win.minimized ? null : (
//           <div
//             key={win.id}
//             className={styles.desktopWindow}
//             style={{
//               left: win.x,
//               top: win.y,
//               zIndex: win.z,
//             }}
//           >
//             <div
//               className={styles.windowHeader}
//               onMouseDown={(e) => {
//                 const rect = (
//                   e.currentTarget.parentElement as HTMLElement
//                 ).getBoundingClientRect();

//                 setDragging(win.id);
//                 setOffset({
//                   x: e.clientX - rect.left,
//                   y: e.clientY - rect.top,
//                 });

//                 bringToFront(win.id);
//               }}
//             >
//               <span>{win.title}</span>

//               <div className={styles.windowButtons}>
//                 <button onClick={() => toggleMinimize(win.id)}>_</button>
//                 <button onClick={() => closeWindow(win.id)}>X</button>
//               </div>
//             </div>

//             <iframe
//               src={`/project/${win.id}`}
//               className={styles.projectFrame}
//               title={win.title}
//             />
//           </div>
//         ),
//       )}

//       <div className={styles.taskbar}>
//         {windows.map((win) => (
//           <button
//             key={win.id}
//             className={styles.taskbarItem}
//             onClick={() => toggleMinimize(win.id)}
//           >
//             {win.title}
//           </button>
//         ))}
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
     Open / Close Window
  --------------------------- */

  const openWindow = (project: ProjectCard) => {
    setWindows((prev) => {
      const existingWindow = prev.find((w) => w.id === project.id);

      if (existingWindow) {
        const maxZ = Math.max(...prev.map((w) => w.z), 0);

        return prev.map((w) =>
          w.id === project.id
            ? {
                ...w,
                minimized: false,
                z: maxZ + 1,
              }
            : w,
        );
      }

      const maxZ = Math.max(...prev.map((w) => w.z), 0);

      return [
        ...prev,
        {
          id: project.id,
          title: project.title,
          x: Math.max(window.innerWidth / 2 - 360, 20),
          y: Math.max(window.innerHeight / 2 - 250, 20),
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
    setWindows((prev) => {
      const maxZ = Math.max(...prev.map((w) => w.z), 0);

      return prev.map((w) =>
        w.id === id
          ? {
              ...w,
              minimized: !w.minimized,
              z: maxZ + 1,
            }
          : w,
      );
    });
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
                x: Math.max(0, e.clientX - offset.x),
                y: Math.max(0, e.clientY - offset.y),
              }
            : w,
        ),
      );
    };

    const handleUp = () => {
      setDragging(null);
    };

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
      id: "healthcare-ai",
      title: "Healthcare AI: Comprehension & Trust Study",
      year: "January - May 2026",
      brief:
        "Human-centered AI research examining how an AI-enabled healthcare experience influenced comprehension, trust, and willingness to rely on digital recommendations.",
      role: "Co-Project Lead & UX Researcher",
      icon: "bi-heart-pulse",
      tags: [
        "Healthcare UX",
        "Human-Centered AI",
        "Usability Testing",
        "User Research",
        "Research Synthesis",
      ],
    },
    {
      id: "welchs-ai",
      title: "Welch's AI Adoption Insights",
      year: "September - December 2025",
      brief:
        "Organizational research exploring barriers to generative AI adoption and translating employee feedback into recommendations for enterprise adoption.",
      role: "Graduate Consultant",
      icon: "bi-cpu",
      tags: [
        "Generative AI",
        "Stakeholder Interviews",
        "Mixed-Methods Research",
        "Workflow Analysis",
        "AI Adoption",
      ],
    },
    {
      id: "whisk-whisper",
      title: "Whisk & Whisper: Voice-Enabled Cooking Assistant",
      year: "September - December 2025",
      brief:
        "Voice-enabled cooking experience designed to support hands-free navigation, reduce interaction friction, and explore conversational AI in everyday tasks.",
      role: "Technical Lead & UX Systems Architect",
      icon: "bi-mic",
      tags: [
        "Voice UX",
        "Conversational AI",
        "Human Factors",
        "Interaction Design",
        "Prototyping",
      ],
      techStack: [
        "JavaScript",
        "Node.js",
        "Express",
        "OpenAI Voice",
        "HTML/CSS",
      ],
    },
    {
      id: "alexos95",
      title: "AlexOS 95: Retro Desktop Portfolio",
      year: "October 2025",
      brief:
        "Interactive Windows 95-inspired portfolio that combines nostalgic visual design with modern interaction patterns and responsive frontend development.",
      role: "Product Designer & Developer",
      icon: "bi-laptop",
      tags: [
        "Interaction Design",
        "UX/UI",
        "Frontend Development",
        "Responsive Design",
        "Prototyping",
      ],
      techStack: ["React", "TypeScript", "Vite", "CSS Modules", "HTML5"],
    },
    {
      id: "easepatch",
      title: "EasePatch: Sanofi Device Innovation Challenge",
      year: "May - October 2025",
      brief:
        "Patient-centered wearable drug-delivery concept developed through human factors research, usability evaluation, feasibility analysis, and product strategy.",
      role: "Project Manager & UX Designer",
      icon: "bi-bandaid",
      tags: [
        "Medical Device",
        "Human Factors",
        "Product Strategy",
        "User Research",
        "Usability Testing",
      ],
    },
    {
      id: "hydratrim",
      title: "Hydra-Trim: L'Oréal Brandstorm",
      year: "November 2024 - April 2025",
      brief:
        "Connected grooming concept combining hydration sensing, AI-guided feedback, sustainable components, and product strategy for a consumer beauty experience.",
      role: "Product Manager & Human Factors Researcher",
      icon: "bi-moisture",
      tags: [
        "Product Management",
        "Human Factors",
        "AI Integration",
        "Consumer Research",
        "Product Strategy",
      ],
    },
    {
      id: "zero-waste",
      title: "Zero Waste: Behavioral UX Experiment",
      year: "2024",
      brief:
        "Behavioral UX study comparing interface concepts through A/B testing to understand how product design could encourage food-waste reduction behaviors.",
      role: "UX Researcher & Designer",
      icon: "bi-recycle",
      tags: [
        "A/B Testing",
        "Behavioral UX",
        "Figma",
        "Usability Research",
        "Data Analysis",
      ],
    },
    {
      id: "figma",
      title: "Figma: Prior Knowledge, Schemas & Mental Models",
      year: "Spring 2025",
      brief:
        "Cognitive UX research examining how prior knowledge, schemas, and mental models shape how users understand and navigate a professional design tool.",
      role: "UX Researcher",
      icon: "bi-brush",
      tags: [
        "Cognitive Psychology",
        "Mental Models",
        "UX Research",
        "Interface Analysis",
      ],
    },
    {
      id: "linkedin",
      title: "LinkedIn Jobs: Pre-Attentive Perception",
      year: "Spring 2025",
      brief:
        "Interface analysis examining how visual hierarchy and pre-attentive processing influence how users scan and interpret job-search information.",
      role: "UX Researcher",
      icon: "bi-briefcase",
      tags: [
        "Visual Perception",
        "Cognitive Science",
        "Information Architecture",
        "UX Analysis",
      ],
    },
    {
      id: "lyft",
      title: "Lyft: Cognitive Load & Emotional Design",
      year: "Spring 2025",
      brief:
        "Behavioral analysis of ride-scheduling interactions exploring how memory demands, cognitive load, and emotional design influence the user experience.",
      role: "UX Researcher",
      icon: "bi-car-front",
      tags: [
        "Cognitive Load",
        "Behavioral Analysis",
        "Interaction Design",
        "Human Factors",
      ],
    },
    {
      id: "mbta",
      title: "MBTA Go: Metacognitive Wayfinding",
      year: "Spring 2025",
      brief:
        "Human factors analysis exploring how metacognitive awareness and interface cues influence navigation and decision-making during public transit journeys.",
      role: "UX Researcher",
      icon: "bi-train-front",
      tags: [
        "Wayfinding",
        "Metacognition",
        "Navigation Design",
        "Human Factors",
      ],
    },
  ];

  /* ---------------------------
     Featured Projects
  --------------------------- */

  const featuredProjectIds = [
    "healthcare-ai",
    "whisk-whisper",
    "welchs-ai",
    "easepatch",
    "hydratrim",
  ];

  const sortedProjects = [...projectCards].sort((a, b) => {
    const indexA = featuredProjectIds.indexOf(a.id);
    const indexB = featuredProjectIds.indexOf(b.id);

    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }

    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;

    const extractLatestYear = (yearString: string) => {
      const years = yearString.match(/\d{4}/g);

      if (!years) return 0;

      return Math.max(...years.map(Number));
    };

    return extractLatestYear(b.year) - extractLatestYear(a.year);
  });

  const visibleProjects = showAllProjects
    ? sortedProjects
    : sortedProjects.slice(0, 5);

  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Portfolio</h1>

        <p className={styles.subtitle}>
          Product Design · UX Research · Human Factors · AI
        </p>
      </div>

      <div className={styles.projectGrid}>
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className={styles.projectCard}
            onClick={() => openWindow(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                openWindow(project);
              }
            }}
          >
            <div className={styles.cardHeader}>
              <i className={`${project.icon} ${styles.icon}`} />

              <span className={styles.year}>{project.year}</span>
            </div>

            <h3 className={styles.projectTitle}>{project.title}</h3>

            <p className={styles.role}>{project.role}</p>

            <p className={styles.brief}>{project.brief}</p>

            <div className={styles.tags}>
              {project.tags.slice(0, 3).map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.viewMoreContainer}>
        <button
          className={styles.viewMoreButton}
          onClick={() => setShowAllProjects((prev) => !prev)}
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
            onMouseDown={() => bringToFront(win.id)}
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
                <button
                  type="button"
                  aria-label={`Minimize ${win.title}`}
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={() => toggleMinimize(win.id)}
                >
                  _
                </button>

                <button
                  type="button"
                  aria-label={`Close ${win.title}`}
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={() => closeWindow(win.id)}
                >
                  X
                </button>
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

      {windows.length > 0 && (
        <div className={styles.taskbar}>
          {windows.map((win) => (
            <button
              key={win.id}
              className={styles.taskbarItem}
              onClick={() => {
                if (win.minimized) {
                  toggleMinimize(win.id);
                } else {
                  bringToFront(win.id);
                }
              }}
            >
              {win.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Portfolio;