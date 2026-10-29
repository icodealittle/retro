import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  projectsData,
  ProjectDetail as ProjectDetailType,
} from "../data/projectData";
import styles from "../styles/Projectdetail.module.css";

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

  // Welch's AI final presentation is not publicly available.
  const isRestrictedProject = project.id === "welchs-ai";

  /* =========================================================
     Project-specific navigation tabs
  ========================================================= */

  const getTabConfig = (projectId: string) => {
    const configs: Record<
      string,
      {
        tabs: string[];
        icons: Record<string, string>;
      }
    > = {
      /* ---------------------------
         Healthcare AI
      --------------------------- */

      "healthcare-ai": {
        tabs: [
          "overview",
          "research",
          "analysis",
          "recommendations",
          "outcome",
        ],
        icons: {
          overview: "bi-book",
          research: "bi-search",
          analysis: "bi-bar-chart",
          recommendations: "bi-lightbulb",
          outcome: "bi-stars",
        },
      },

      /* ---------------------------
         EasePatch
      --------------------------- */

      easepatch: {
        tabs: ["overview", "researchTesting", "designOutcome", "outcome"],
        icons: {
          overview: "bi-book",
          researchTesting: "bi-eyedropper",
          designOutcome: "bi-stars",
          outcome: "bi-check2-circle",
        },
      },

      /* ---------------------------
         Hydra-Trim
      --------------------------- */

      hydratrim: {
        tabs: ["overview", "process", "insights", "outcome"],
        icons: {
          overview: "bi-book",
          process: "bi-gear",
          insights: "bi-lightbulb",
          outcome: "bi-stars",
        },
      },

      /* ---------------------------
         AlexOS 95
      --------------------------- */

      alexos95: {
        tabs: ["overview", "designPhilosophy", "buildAnimations", "outcome"],
        icons: {
          overview: "bi-book",
          designPhilosophy: "bi-palette",
          buildAnimations: "bi-lightning",
          outcome: "bi-stars",
        },
      },

      /* ---------------------------
         Welch's AI
      --------------------------- */

      "welchs-ai": {
        tabs: [
          "overview",
          "research",
          "analysis",
          "recommendations",
          "outcome",
        ],
        icons: {
          overview: "bi-book",
          research: "bi-search",
          analysis: "bi-bar-chart",
          recommendations: "bi-lightbulb",
          outcome: "bi-stars",
        },
      },

      /* ---------------------------
         Whisk & Whisper
      --------------------------- */

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

  /* =========================================================
     Tab labels
  ========================================================= */

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

  /* =========================================================
     Retrieve section content
  ========================================================= */

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

  /* =========================================================
     Previous / Next project navigation
  ========================================================= */

  const currentIndex = projectsData.findIndex((p) => p.id === id);

  const hasPrevious = currentIndex > 0;

  const hasNext = currentIndex >= 0 && currentIndex < projectsData.length - 1;

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
      {/* =====================================================
          Project Header
      ====================================================== */}

      <div className={styles.header}>
        <button
          type="button"
          className={styles.backBtn}
          onClick={() => navigate("/portfolio")}
        >
          <i className="bi bi-arrow-left"></i>
          Back to Portfolio
        </button>

        <div className={styles.titleSection}>
          <i className={`${project.icon} ${styles.icon}`}></i>

          <div>
            <h1 className={styles.title}>{project.title}</h1>

            <p className={styles.meta}>
              {project.year} • {project.role}
            </p>

            {project.brief && (
              <p className={styles.caseNotice}>{project.brief}</p>
            )}
          </div>
        </div>
      </div>

      {/* =====================================================
          Windows 95 Project Notepad
      ====================================================== */}

      <div className={styles.notepad}>
        {/* ---------------------------
            Tab Navigation
        --------------------------- */}

        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`${styles.tab} ${
                activeSection === tab ? styles.active : ""
              }`}
              onClick={() => setActiveSection(tab)}
            >
              <i className={`bi ${tabIcons[tab]} ${styles.tabLabel}`}></i>

              <span>{getTabLabel(tab)}</span>
            </button>
          ))}
        </div>

        {/* ---------------------------
            Project Content
        --------------------------- */}

        <div className={styles.sectionContainer}>
          <div className={`${styles.section} ${styles[activeSection] || ""}`}>
            {currentSection?.title && (
              <h2 className={styles.sectionTitle}>{currentSection.title}</h2>
            )}

            {/* Featured Quote */}

            {currentSection?.quote && (
              <blockquote className={styles.quote}>
                “{currentSection.quote}”
              </blockquote>
            )}

            {/* Main Paragraphs */}

            {currentSection?.content && currentSection.content.length > 0 && (
              <div className={styles.content}>
                {currentSection.content.map(
                  (paragraph: string, idx: number) => (
                    <p key={idx} className={styles.paragraph}>
                      {paragraph}
                    </p>
                  ),
                )}
              </div>
            )}

            {/* ---------------------------
                Subsections
            --------------------------- */}

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

            {/* ---------------------------
                Metrics
            --------------------------- */}

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

            {/* ---------------------------
                Links / Case Study Material
            --------------------------- */}

            {(project.pdfLink ||
              project.prototypeLink ||
              isRestrictedProject) && (
              <div className={styles.viewButtonContainer}>
                {/* Welch's AI Notice */}

                {isRestrictedProject && (
                  <p className={styles.caseNotice}>
                    Final presentation materials are not publicly available.
                  </p>
                )}

                {/* Public Case Study */}

                {!isRestrictedProject && project.pdfLink && (
                  <a
                    href={project.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.viewButton}
                  >
                    <i className="bi bi-file-earmark-text"></i>
                    View Full Case Study
                  </a>
                )}

                {/* Prototype / Code */}

                {project.prototypeLink && (
                  <a
                    href={project.prototypeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.viewButton}
                  >
                    <i className="bi bi-rocket"></i>
                    View Code
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* =====================================================
          Project Navigation Footer
      ====================================================== */}

      <div className={styles.footer}>
        <button
          type="button"
          className={styles.navBtn}
          onClick={goToPrevious}
          disabled={!hasPrevious}
        >
          <i className="bi bi-arrow-left"></i>
          Previous Project
        </button>

        <div className={styles.progress}>
          {currentIndex + 1} / {projectsData.length}
        </div>

        <button
          type="button"
          className={styles.navBtn}
          onClick={goToNext}
          disabled={!hasNext}
        >
          Next Project
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default ProjectDetail;
