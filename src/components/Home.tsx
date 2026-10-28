import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "experience" | "projects" | "skills" | "achievements"
  >("experience");

  const resumeData = {
    experience: [
      {
        role: "Student Intern, Division for Family Health Data & Analytics",
        company: "Massachusetts Department of Public Health",
        period: "February'26 - June'26",
        details:
          "Designed a REDCap-based workflow supporting six public health programs by translating stakeholder needs into structured intake, ownership, validation, and delivery processes. Evaluated workflow bottlenecks, defined lifecycle states and validation controls, and documented implementation requirements to improve consistency and traceability across teams.",
      },
      {
        role: "Digital Content & Analytics Intern",
        company: "Bentley University: University Communications & Marketing",
        period: "August'25 - May'26",
        details:
          "Analyzed digital product and campaign performance using Excel and Power BI to identify engagement trends, performance gaps, and opportunities for improvement. Combined quantitative findings with qualitative feedback to develop recommendations that supported stakeholder decision-making and digital communication strategy.",
      },
      {
        role: "Accounting Research Assistant",
        company: "Bentley University",
        period: "November'25 - February'26",
        details:
          "Developed a GitHub API data pipeline that processed more than 3 million records for accounting research. Built multi-stage matching, validation, and documentation workflows to improve data quality, reduce manual review, and support scalable downstream analysis.",
      },
      {
        role: "Data Engineer, Contract",
        company: "UCare Pharmacy",
        period: "June'23 - August'24",
        details:
          "Built and automated Python-based reporting workflows for pharmacy operations, reducing manual effort by approximately 40%. Investigated recurring data discrepancies through stakeholder requirements, monitoring, and root-cause analysis while strengthening validation controls and reporting reliability.",
      },
      {
        role: "UX Consultant, Contract",
        company: "Dawn Café",
        period: "February'23 - July'23",
        details:
          "Evaluated the digital ordering and onboarding experience through structured interviews and workflow walkthroughs, identifying eight usability issues across three customer journeys. Translated those findings into mobile experience improvements associated with 20% higher engagement and 15% growth in online orders.",
      },
      {
        role: "Student Recruitment Ambassador",
        company:
          "Northeastern University – Khoury College of Computer Sciences",
        period: "April'21 - August'22",
        details:
          "Supported prospective students through one-on-one conversations, program presentations, and admissions-related outreach. Helped applicants understand the Align program, graduate computer science pathways, and the transition into computing from non-technical academic backgrounds.",
      },
      {
        role: "UX Designer Extern",
        company: "Innsure, Inc.",
        period: "February'22 - May'22",
        details:
          "Designed high-fidelity Figma prototypes for climate-risk analysts as part of a four-person design team. Used customer journey mapping, human-centered design, and usability testing to translate user needs into interface concepts for specialized insurance and climate-risk workflows.",
      },
    ],
    projects: [
      {
        text: "Healthcare AI - Comprehension, trust & human-centered AI research",
        icon: "bi-heart-pulse",
      },
      {
        text: "Whisk & Whisper - Voice-enabled AI product experience",
        icon: "bi-mic",
      },
      {
        text: "Welch's AI Adoption - Enterprise workflow & adoption research",
        icon: "bi-diagram-3",
      },
      {
        text: "EasePatch - Wearable drug delivery concept (Sanofi Challenge)",
        icon: "bi-bandaid",
      },
      {
        text: "HydraTrim - AI-enabled smart grooming concept (L'Oréal Brandstorm)",
        icon: "bi-moisture",
      },
      {
        text: "Zero Waste - Behavioral UX research & A/B testing",
        icon: "bi-recycle",
      },
      {
        text: "AlexOS 95 - Retro-inspired portfolio with modern UX",
        icon: "bi-laptop",
      },
    ],
    skills: {
      research: [
        "User Research",
        "Usability Testing",
        "Stakeholder Interviews",
        "Mixed-Methods Research",
        "Research Synthesis",
        "User Journey Mapping",
        "Workflow Walkthroughs",
        "A/B Testing",
      ],
      design: [
        "Figma",
        "High-Fidelity Prototyping",
        "Wireframing",
        "Interaction Design",
        "Information Architecture",
        "User Flows",
        "Human-Centered Design",
        "Systems Thinking",
      ],
      data: [
        "Python",
        "SQL",
        "Excel",
        "Power BI",
        "Google Analytics",
        "Data Visualization",
        "Behavioral Analytics",
        "Data Validation",
      ],
      development: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML/CSS",
        "Node.js",
        "Git/GitHub",
        "APIs",
        "Vite",
      ],
      collaboration: [
        "Agile Development",
        "Product Management",
        "Requirements Gathering",
        "Workflow Mapping",
        "Backlog Prioritization",
        "Stakeholder Collaboration",
        "Cross-Functional Collaboration",
        "Research Documentation",
      ],
    },
    achievements: [
      { text: "Merit Scholar – Bentley University", icon: "bi-trophy" },
      {
        text: "Ruth Marie & Align Scholarships – Northeastern University",
        icon: "bi-mortarboard",
      },
      { text: "UXPA Member", icon: "bi-star" },
      { text: "Cum Laude Graduate – UMass Lowell", icon: "bi-award" },
      { text: "Dean's List – Multiple Semesters", icon: "bi-journal-text" },
      {
        text: "National Honors: Pi Sigma Alpha (National Political Science Honors Society), Pi Delta Phi (National French Honors Society)",
        icon: "bi-patch-check",
      },
      {
        text: "Dean Nina Coppens Endowed Scholarship Fund – UMass Lowell (Sep 2017)",
        icon: "bi-cash",
      },
      {
        text: "Charles E. Goodell Endowed Scholarship Fund – UMass Lowell (Sep 2016)",
        icon: "bi-cash",
      },
    ],
  };

  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroWindow}>
          <div className={styles.windowTitleBar}>
            <span className={styles.windowTitle}>
              <i className="bi bi-laptop"></i> welcome.exe
            </span>
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
                  Product Designer · UX Researcher · Human Factors Specialist
                </p>

                <p className={styles.heroDescription}>
                  I&apos;m a product designer and UX researcher who works at the
                  intersection of human-centered design, technology, and data. I
                  hold a Master&apos;s in Computer Science from Northeastern
                  University, with a focus on data science, machine learning,
                  and human-centered AI, and I&apos;m currently pursuing an MBA
                  and MS in Human Factors in Information Design at Bentley
                  University. This combination helps me approach product
                  problems from both the human and technical sides, from
                  understanding user behavior to evaluating feasibility and
                  business impact.
                </p>

                <p className={styles.heroDescription}>
                  My work spans healthcare, AI-enabled products, digital
                  experiences, and analytics. I&apos;ve conducted user research
                  and usability studies, mapped complex workflows, designed and
                  tested interactive prototypes, built data pipelines processing
                  more than 3 million records, and automated reporting workflows
                  that reduced manual effort by approximately 40%. Across these
                  projects, I focus on turning complex user and stakeholder
                  needs into clearer experiences, better product decisions, and
                  measurable improvements.
                </p>

                <p className={styles.heroDescription}>
                  I&apos;m especially interested in products where technology
                  has to work well for real people, particularly in healthcare,
                  AI, and other complex systems. My approach combines research,
                  systems thinking, prototyping, analytics, and technical
                  collaboration to understand the problem before deciding what
                  should be built.
                </p>

                {/* Buttons */}
                <div className={styles.heroButtons}>
                  {/* <Link to="/pdfs/Alex_Chea_Portfolio.pdf" className={styles.primaryButton}>
                    View Portfolio Deck
                  </Link> */}
                  <a
                    href="/pdfs/Alex_Chea_Portfolio.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primaryButton}
                  >
                    View Portfolio Deck
                  </a>
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
          <span className={styles.widgetIcon}>
            <i className="bi bi-file-earmark-text"></i>
          </span>
          <span className={styles.widgetTitle}>resume.txt - Notepad</span>
          <div className={styles.windowControls}>
            <span>_</span>
            <span>□</span>
            <span>×</span>
          </div>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          {(["experience", "projects", "skills", "achievements"] as const).map(
            (tab) => (
              <button
                key={tab}
                className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "experience" && <i className="bi bi-briefcase"></i>}
                {tab === "projects" && <i className="bi bi-rocket"></i>}
                {tab === "skills" && <i className="bi bi-lightning"></i>}
                {tab === "achievements" && <i className="bi bi-trophy"></i>}
                <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
              </button>
            ),
          )}
        </div>

        {/* Content */}
        <div className={styles.widgetContent}>
          {activeTab === "experience" && (
            <div className={styles.experienceList}>
              {resumeData.experience.map((exp, idx) => (
                <div key={idx} className={styles.experienceItem}>
                  <h3>{exp.role}</h3>
                  <p className={styles.company}>
                    {exp.company} · {exp.period}
                  </p>
                  <p className={styles.details}>{exp.details}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "projects" && (
            <ul className={styles.projectList}>
              {resumeData.projects.map((project, idx) => (
                <li key={idx}>
                  <i className={project.icon}></i> {project.text}
                </li>
              ))}
            </ul>
          )}

          {activeTab === "skills" && (
            <div className={styles.skillsGrid}>
              {Object.entries(resumeData.skills).map(([category, skills]) => (
                <div key={category} className={styles.skillCategory}>
                  <h4>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h4>
                  <div className={styles.skillTags}>
                    {skills.map((skill, idx) => (
                      <span key={idx} className={styles.skillTag}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "achievements" && (
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
