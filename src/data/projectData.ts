export interface Subsection {
  heading: string;
  points: string[];
}

export interface Metric {
  label: string;
  value: string;
}

export interface Section {
  title: string;
  quote?: string;
  content: string[];
  subsections?: Subsection[];
  metrics?: Metric[];
}

export interface ProjectDetail {
  id: string;
  title: string;
  year: string;
  role: string;
  icon: string;
  brief: string;
  tags: string[];
  techStack?: string[];
  overview: Section;
  process: Section;
  outcome: Section;
  // New optional fields for custom projects
  pdfLink?: string;
  prototypeLink?: string;
  insights?: Section;
  designPhilosophy?: Section;
  buildAnimations?: Section;
  researchTesting?: Section;
  designOutcome?: Section;
}

export const projectsData: ProjectDetail[] = [
  {
    id: 'hydratrim',
    title: 'Hydra-Trim: L\'Oreal Brandstorm 2025',
    year: 'November 2024 - March 2025',
    role: 'Product Manager & Designer',
    icon: '🪒',
    brief: 'Sustainability-driven smart shaver concept integrating AI, real-time hydration tracking, and eco-friendly modular design for Gen Z consumers.',
    tags: ['Product Strategy', 'AI Integration', 'Sustainability', 'User Testing'],
    pdfLink: 'https://drive.google.com/file/d/1I973FS_n5c4PT0BgAC3NwCzkKdiiBhET/view?usp=drive_link',
    overview: {
      title: 'Project Overview',
      quote: 'Shaving reimagined for sustainability and self-care.',
      content: [
        'HydraTrim introduces the world\'s first hydration-tracking smart shaver designed for Gen Z men, merging grooming technology, AI, and environmental responsibility.',
        'The primary objectives were to integrate smart sensing for personalized skincare feedback, reduce environmental impact through modular design, and build a market-ready product with measurable scalability.'
      ],
      subsections: [
        {
          heading: 'SWOT Analysis',
          points: [
            'Strengths: Innovative hydration-tracking sensor, sustainable materials, AI-powered personalization',
            'Weaknesses: High initial production costs, requires strong technical partnerships',
            'Opportunities: Growing Gen Z focus on self-care and sustainability, influencer-driven positioning',
            'Threats: Intense competition in men\'s grooming tech, market saturation in premium devices'
          ]
        },
        {
          heading: 'Competitive Position',
          points: [
            'Positioned between luxury and innovative segments competing with Gillette Labs, Braun, Panasonic',
            'Moderate pricing ($70-$100) captures half the market with advanced features',
            'Key differentiators: bio-impedance sensors, Bluetooth AI chip, modular blade system'
          ]
        }
      ]
    },
    process: {
      title: 'Process',
      content: [
        'A usability study was conducted with 8 participants across three experience levels: frequent shavers, tech adopters, and eco-conscious users.',
        'Participants engaged with the digital prototype interface and mock hardware model to evaluate clarity, comfort, and ease of use.'
      ],
      subsections: [
        {
          heading: 'Key Focus Areas',
          points: [
            'Sensor feedback comprehension',
            'Blade recycling workflow understanding',
            'User interaction with the companion app'
          ]
        },
        {
          heading: 'Data Analysis Results',
          points: [
            'Ease of navigation: 92% success rate identifying key controls',
            'Feedback clarity: 85% found hydration data understandable',
            'Sustainability awareness: 78% cited blade recycling as purchase motivator',
            'Perceived innovation: 95% rated smart sensing as "highly differentiating"'
          ]
        }
      ],
      metrics: [
        { label: 'Product Understanding', value: '4.7/5' },
        { label: 'Interface Usability', value: '4.5/5' },
        { label: 'Comfort & Ergonomics', value: '4.4/5' },
        { label: 'Sustainability Value', value: '4.6/5' },
        { label: 'Purchase Likelihood', value: '4.3/5' }
      ]
    },
    insights: {
      title: 'Insights',
      content: [
        'Users appreciated hydration feedback but desired simplified UI visualization. Sustainability features strongly influenced brand perception and trust.',
        'Clearer onboarding and contextual cues improved user confidence. Participants viewed HydraTrim as a holistic lifestyle product, not just a grooming tool.'
      ],
      subsections: [
        {
          heading: 'Redesigns Based on Feedback',
          points: [
            'Simplified hydration-level UI with visual color cues (dry to hydrated range)',
            'Added tooltip guidance in the app for new users',
            'Enhanced tactile feedback on power and mode buttons',
            'Replaced textual status indicators with universal icons to reduce cognitive load'
          ]
        }
      ]
    },
    outcome: {
      title: 'Outcome',
      content: [
        'HydraTrim bridges tech innovation and sustainable design, redefining grooming for a new generation. Its success lies in combining user-centered design, environmental ethics, and measurable market scalability.',
        'The project demonstrates how cognitive UX research and product strategy can align with brand missions to deliver solutions that are both meaningful and future-ready.'
      ],
      subsections: [
        {
          heading: 'Marketing Strategy',
          points: [
            'Influencer partnerships targeting Gen Z men through TikTok and YouTube',
            'Loyalty and recycling reward program to promote sustainable habits',
            'AI-powered app recommendations for skincare and blade maintenance',
            '$15M marketing allocation across influencer, e-commerce, and social media'
          ]
        }
      ]
    }
  },
  {
    id: 'easepatch',
    title: 'EasePatch: Sanofi Device Innovation Challenge',
    year: 'May - October 2025',
    role: 'Project Manager & UX Designer',
    icon: '🩹',
    brief: 'Patient-centered wearable for on-body drug delivery. Integrated comfort, discretion, and smart feedback to reduce anxiety and improve adherence.',
    tags: ['Medical Device', 'Patient Research', 'Human Factors', 'Sustainability'],
    pdfLink: 'https://www.figma.com/deck/w5EER5qMAfYm1QdY7cGMXO/Sanofi?node-id=232-1171&t=jfc4DMtvj8gZmeGH-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    overview: {
      title: 'Project Overview',
      quote: 'Care that\'s easy to wear.',
      content: [
        'EasePatch was created for the Sanofi 2025 Device Innovation Challenge to reimagine large-volume on-body drug delivery systems (OBDS).',
        'The goal was to design a connected, comfortable, and sustainable device that improves patient confidence, usability, and adherence to self-injection treatments.',
        'EasePatch integrates patient-centered design, engineering, and empathy to make drug delivery effortless and dignified.'
      ],
      subsections: [
        {
          heading: 'Objectives',
          points: [
            'Increase user trust and reduce anxiety through clear feedback systems',
            'Create an adaptable, discreet wearable for diverse users',
            'Use sustainable, biocompatible materials suitable for long-term production',
            'Integrate digital connectivity for real-time feedback and adherence tracking'
          ]
        }
      ]
    },
    researchTesting: {
      title: 'Research & Testing',
      content: [
        'Chronic disease patients often face emotional and physical discomfort during drug delivery. Existing OBDS devices focus on function over empathy. EasePatch aims to bridge this gap.',
        'Research highlights: 1 in 3 self-injecting patients report anxiety during application. Key pain points include discomfort, visibility, adhesive irritation, and uncertainty.',
        'Interviews with 10 participants revealed three recurring needs: reduced pain and skin irritation, confidence through feedback and easy guidance, and discreet, lightweight form for daily wear.'
      ],
      subsections: [
        {
          heading: 'Usability Testing Results',
          points: [
            'Ease of Application: 4.7/5 average rating',
            'Comfort & Adhesion: 4.6/5 average rating',
            'Feedback Clarity: 4.8/5 average rating',
            'Discretion: 4.5/5 average rating',
            'User Confidence: 4.9/5 average rating'
          ]
        },
        {
          heading: 'Key Insights from Testing',
          points: [
            'Adhesion: Users desired breathable, secure grip suitable for movement',
            'Discretion: Preference for neutral tones and low-profile design',
            'Feedback Clarity: LED and vibration cues reduced anxiety by confirming correct usage',
            'Quote from participant: "I liked knowing it was working — the light and vibration gave me peace of mind"'
          ]
        }
      ]
    },
    designOutcome: {
      title: 'Design & Outcome',
      content: [
        'EasePatch is a two-part wearable system that merges technology, ergonomics, and sustainability. The design features medical-grade silicone, smart LED and vibration feedback, and adaptive comfort options.',
        'Based on usability data, we implemented simplified LED feedback (Blue = Ready, Yellow = Active, Red = Error), softer temperature-adaptive adhesives, updated belt clasp for adjustable fit, and a modular battery component for easy replacement.',
        'EasePatch positions itself as a lifestyle-friendly healthcare device. Marketing strategy focuses on trust, comfort, and design empathy through patient community partnerships.'
      ],
      subsections: [
        {
          heading: 'Core Features',
          points: [
            'Bio-safe design: Medical-grade silicone and antibacterial mesh materials',
            'Smart feedback: LED and vibration system reduces uncertainty',
            'Adaptive comfort: Belt clip option for active users',
            'Sustainability: Modular and recyclable components',
            'Inclusivity: Fits various skin tones and body types'
          ]
        },
        {
          heading: 'Development Roadmap',
          points: [
            'Months 1-3: Concept prototyping (form factor, LED/haptic testing)',
            'Months 4-6: User testing and adhesive refinement',
            'Months 7-9: Integrated device testing with higher-fidelity prototypes',
            'Months 10-12: Final prototype and pre-regulatory preparation'
          ]
        }
      ],
      metrics: [
        { label: 'User Confidence Rating', value: '4.9/5' },
        { label: 'Development Timeline', value: '12 months' },
        { label: 'Projected Budget', value: '$255K-$450K' },
        { label: 'Sustainability Impact', value: 'Modular design' }
      ]
    },
    process: { title: '', content: [] },
    outcome: { title: '', content: [] }
  },
  {
    id: 'alexos95',
    title: 'AlexOS 95: Retro Desktop Portfolio Redesign',
    year: 'October 2025',
    role: 'Full-Stack Designer & Developer',
    icon: '💻',
    brief: 'Interactive Windows 95-inspired portfolio combining retro aesthetics with modern UX. Built with React, TypeScript, and Vite.',
    tags: ['Web Design', 'UX/UI', 'Frontend Development', 'Retro Design'],
    techStack: ['React', 'TypeScript', 'Vite', 'React Router', 'CSS Modules'],
    prototypeLink: 'https://github.com/icodealittle/retro',
    overview: {
      title: 'Background & Problem',
      quote: 'A portfolio should not just show what you\'ve made — it should embody how you think.',
      content: [
        'My earlier portfolio website served as an online résumé and project archive. While it functioned technically, it didn\'t fully communicate my UX research identity or capability to build systems grounded in human-centered design.',
        'After receiving feedback from ten UX professionals, including four senior researchers, I learned that the site\'s layout and information flow did not clearly reflect my ability to translate research into experience design.'
      ],
      subsections: [
        {
          heading: 'Pain Points Identified (from 4/10 expert reviews)',
          points: [
            'Design felt "developer-centric" — heavy on structure, light on storytelling',
            'Inconsistent background colors caused pages to feel like unrelated micro-sites',
            'Recruiters struggled to locate UX research case studies quickly',
            'Content lacked emotional pacing and measurable outcomes',
            'Limited accessibility and visual hierarchy reduced scan efficiency on mobile'
          ]
        },
        {
          heading: 'Research Methods',
          points: [
            'Heuristic Evaluation: Identified 6 moderate and 2 severe usability issues',
            'Cognitive Walkthrough: 60% failed to find UX research project under 60 seconds',
            'Expert Review Interviews (n=10): 4 emphasized lack of design maturity',
            'Competitive Benchmarking: Studied 5 graduate-level UX portfolios for best practices'
          ]
        }
      ]
    },
    designPhilosophy: {
      title: 'Design Philosophy',
      content: [
        'Five key design principles emerged from research insights to guide the redesign, focusing on creating a cohesive narrative that bridges technical skill with design empathy.'
      ],
      subsections: [
        {
          heading: 'Core Principles Derived from Insights',
          points: [
            'Narrative Cohesion: Unify pages with consistent grid, typography rhythm, and accent palette',
            'Emotional Continuity: Align color transitions with tone — calm intro, vibrant portfolio, focused research',
            'Evidence Visibility: Display metrics and visual artifacts prominently in project cards',
            'Accessibility First: Ensure WCAG 2.1 AA contrast, responsive typography, clear focus states',
            'Information Hierarchy: Scannable sections — Who I Am → What I Do → How I Think → Let\'s Connect'
          ]
        }
      ]
    },
    buildAnimations: {
      title: 'Build & Animations',
      content: [
        'Created three visual prototypes exploring minimalist vs. modular grid structures. Conducted A/B preference testing with 12 peers and recruiters, with 83% preferring the version with consistent header/nav bar.',
        'Implemented GSAP micro-animations for page transitions to maintain engagement while reducing visual overload. Integrated clear metrics in project cards and optimized navigation labels using card-sorting insights.'
      ],
      subsections: [
        {
          heading: 'Technical Implementation',
          points: [
            'React 18 with TypeScript for type safety and component composition',
            'React Router v6 for client-side routing and deep linking to projects',
            'CSS Modules for scoped, maintainable component styling',
            'Vite for optimized build performance and fast development server',
            'VT323 monospace font for authentic terminal aesthetic'
          ]
        },
        {
          heading: 'Design Decisions & Iterations',
          points: [
            'Windows 95-style START button and taskbar for consistent navigation',
            'Notepad-inspired project detail views with tabbed sections (Overview/Process/Outcome)',
            'Raised/sunken border styles recreating authentic retro window chrome',
            'Responsive breakpoints maintaining retro feel across devices',
            'Performance optimization: Lighthouse scores 95+ across all metrics'
          ]
        }
      ]
    },
    outcome: {
      title: 'Outcomes & Reflection',
      content: [
        'Through user-centered research and iteration, I transformed the portfolio from a static showcase into an experience that tells my story with clarity, empathy, and credibility.',
        'This project reminded me that designing for myself is still designing for users — in this case, hiring managers and collaborators. The older design reflected my technical side; the new version communicates my analytical empathy, bridging research and design.'
      ],
      metrics: [
        { label: 'Task Time Reduction', value: '67s → 29s' },
        { label: 'Professionalism Rating', value: '3.1 → 4.6/5' },
        { label: 'Narrative Clarity', value: '2.8 → 4.5/5' },
        { label: 'Bounce Rate', value: '62% → 28%' },
        { label: 'Lighthouse Performance', value: '95+' }
      ]
    },
    process: { title: '', content: [] }
  },
  {
  id: 'figma',
  title: 'Figma: Prior Knowledge, Schemas, and Mental Models',
  year: 'Spring 2025',
  role: 'UX Researcher',
  icon: '🖌️',
  brief: 'Research exploring how prior knowledge and mental models influence user interactions with design tools. Analyzed Figma\'s interface for schema theory alignment.',
  tags: ['Cognitive Psychology', 'UX Research', 'Interface Analysis'],
  pdfLink: '/pdfs/Prior Knowledge Final Draft.pdf',
  overview: {
    title: 'Project Overview',
    quote: 'Human interaction with digital systems is shaped by top-down processing—cognitive mechanisms informed by long-term memory.',
    content: [
      'This research analyzes how Schema Theory influences users\' ability to process and navigate Figma\'s interface. The study focuses on whether Figma\'s design supports or conflicts with users\' schema-driven expectations and categorization strategies.',
      'Drawing from Bartlett (1932) and Rumelhart (1980), the analysis examines how organized mental frameworks help users interpret and categorize new information based on past experiences, reducing cognitive load through pattern recognition.',
      'The research investigates three key areas: structured memory and schema activation, categorization and interconnected memory, and cognitive adaptation through schema evolution.'
    ],
    subsections: [
      {
        heading: 'Research Framework',
        points: [
          'Schema theory as foundation for understanding user navigation patterns',
          'Categorization models (Prototype Theory, Exemplar Theory) for information structure',
          'Mental models and affordances guiding user expectations',
          'Semantic networks and spreading activation for memory retrieval'
        ]
      }
    ]
  },
  process: {
    title: 'Analysis & Methodology',
    content: [
      'The research examined Figma\'s interface through multiple cognitive lenses, analyzing how visual organization, labeling conventions, and component structures align with established cognitive frameworks.',
      'Specific focus areas included: sidebar layer organization for hierarchical navigation schemas, resource library categorization supporting semantic networks, component browser structure requiring schema accommodation for new users, and property panels promoting procedural memory development.'
    ],
    subsections: [
      {
        heading: 'Key Cognitive Findings',
        points: [
          'Layer panel terminology evokes familiar hierarchical schemas but lacks contextual cues',
          'Resource headings enable prototype-based categorization and spreading activation',
          'Component structures require accommodation for users unfamiliar with atomic design',
          'Repeated interactions with alignment tools develop motor memory and reduce cognitive demand',
          'Mobile interface leverages mental models through familiar icons and raised button styling'
        ]
      }
    ]
  },
  outcome: {
    title: 'Findings & Recommendations',
    content: [
      'Figma demonstrates strong alignment with schema theory in many areas, particularly through consistent structure and reusable components that promote fluency for experienced users.',
      'However, opportunities exist to better support first-time users through clearer labeling, contextual cues, and adaptive onboarding that scaffolds schema development.',
      'The research identified specific design improvements: enhanced tooltips for component relationships, progressive disclosure of complex features, visual memory aids for multi-step workflows, and role-specific scaffolding for users transitioning from traditional design tools.'
    ],
    subsections: [
      {
        heading: 'Design Implications',
        points: [
          'Support schema tuning through contextual help and onboarding',
          'Reduce cognitive load with persistent confirmations and visual cues',
          'Bridge mental models between traditional file systems and component-based design',
          'Provide explicit feedback to support metacognitive monitoring'
        ]
      }
    ]
  }
},

{
  id: 'linkedin',
  title: 'LinkedIn Jobs Interface: Pre-Attentive Perception',
  year: 'Spring 2025',
  role: 'UX Researcher',
  icon: '💼',
  brief: 'Analysis of pre-attentive processing and visual organization principles. Evaluated how color, proximity, and alignment guide user attention.',
  tags: ['Visual Design', 'Cognitive Science', 'Information Architecture'],
  pdfLink: '/pdfs/Pre-attentive, Early-Stage Perceptual Organization.pdf',
  overview: {
    title: 'Research Overview',
    quote: 'The human perceptual system is adept at rapidly and unconsciously organizing complex visual information.',
    content: [
      'This study examines how pre-attentive, early-stage perceptual organization enables users to detect and group patterns based on color, shape, proximity, and motion—all within 200-250 milliseconds before conscious attention.',
      'The research explores neurological processing from retinal ganglion cells through the lateral geniculate nucleus (LGN) to visual cortex areas V1 and V2, demonstrating how the brain constructs organized visual frameworks.',
      'LinkedIn Jobs serves as a case study for evaluating how high-density information interfaces can leverage these principles to reduce cognitive load and support efficient decision-making.'
    ],
    subsections: [
      {
        heading: 'Theoretical Foundation',
        points: [
          'Feature Integration Theory: Simple visual features processed automatically in parallel',
          'Guided Search Model: Pre-attentive cues organize information before conscious attention',
          'Neurological pathways: Saccadic movements → retinal encoding → V1/V2 processing',
          'Evolutionary advantage: Rapid threat recognition and environmental navigation'
        ]
      }
    ]
  },
  process: {
    title: 'Visual Analysis Framework',
    content: [
      'The analysis evaluated LinkedIn\'s Jobs interface across six key dimensions: color and hue differentiation, shape and iconography grouping, proximity and alignment principles, motion and feedback cues, typographic hierarchy, and luminance contrast.',
      'Each element was assessed for its effectiveness in supporting pre-attentive processing—the ability to perceive and group information without conscious effort or focused attention.'
    ],
    subsections: [
      {
        heading: 'Perceptual Strengths Identified',
        points: [
          'Blue action buttons and links immediately attract attention through color salience',
          'Red notification badges leverage high contrast for urgency signaling',
          'Consistent company logos provide uniform visual cues for differentiation',
          'Vertical stacking creates clear visual clusters through proximity',
          'Category icons (Remote, Top Startups) enable rapid visual categorization'
        ]
      },
      {
        heading: 'Areas for Enhancement',
        points: [
          'Grey secondary links show low luminance contrast against white backgrounds',
          'Insufficient white space between sections creates visual competition',
          'Save/Apply buttons could be larger for improved pre-attentive detection',
          'Motion feedback on interactions could reinforce perceptual grouping',
          'Alumni connections need stronger typographic differentiation'
        ]
      }
    ]
  },
  outcome: {
    title: 'Findings & Design Recommendations',
    content: [
      'LinkedIn Jobs effectively implements several pre-attentive principles, particularly in color differentiation, iconography, and spatial alignment. These design choices support rapid visual parsing in a dense information environment.',
      'However, refinements in contrast, spacing, motion feedback, and typographic hierarchy could further optimize the interface for early-stage perceptual processing.',
      'The research demonstrates that even minor adjustments—such as increasing button size, enhancing contrast ratios, or adding subtle animations—can significantly improve users\' ability to scan, group, and process job information efficiently.'
    ],
    subsections: [
      {
        heading: 'Recommended Improvements',
        points: [
          'Increase contrast of grey secondary text to improve saliency during initial scans',
          'Add subtle animation feedback on Save/Apply actions to reinforce perceptual links',
          'Expand white space between job clusters to strengthen perceptual boundaries',
          'Enlarge key action buttons to elevate pre-attentive prominence',
          'Refine typographic weight to optimize visual scanning paths'
        ]
      }
    ],
    metrics: [
      { label: 'Pre-attentive Window', value: '<250ms' },
      { label: 'Interface Sections Analyzed', value: '6 dimensions' },
      { label: 'Visual Grouping Principles', value: 'Color, Proximity, Shape' },
      { label: 'Processing Stages', value: 'Retina → LGN → V1/V2' }
    ]
  }
},

{
  id: 'lyft',
  title: 'Lyft: Balancing Memory, Load, and Emotion',
  year: 'Spring 2025',
  role: 'UX Researcher',
  icon: '🚘',
  brief: 'Behavioral analysis exploring cognitive load, working memory, and emotional factors in ride-scheduling. Identified design barriers increasing mental effort.',
  tags: ['Cognitive Load', 'Behavioral Analysis', 'UX Design'],
  pdfLink: '/pdfs/Balancing Memory, Load, and Emotion (Reviewed).pdf',
  overview: {
    title: 'Research Overview',
    quote: 'Even routine tasks can become cognitively demanding when design introduces unnecessary friction.',
    content: [
      'This research examines the cognitive and emotional demands placed on users during ride-booking tasks in the Lyft mobile application. While these interactions appear routine, they often require users to manage substantial invisible complexity.',
      'Drawing on working memory theory (Baddeley, 2000; Cowan, 2001), cognitive load theory (Sweller, 1988), and emotional regulation frameworks (Pessoa, 2009), the study identifies how interface design either supports or exceeds human behavioral constraints.',
      'The analysis reveals that interfaces overlooking working memory limitations, cognitive load management, and emotional regulation increase the risk of user error, anxiety, and system mistrust—particularly under time pressure.'
    ],
    subsections: [
      {
        heading: 'Theoretical Framework',
        points: [
          'Working Memory: Limited to ~4 chunks; requires external scaffolding for complex tasks',
          'Cognitive Load Theory: Intrinsic vs. extraneous load; split-attention and redundancy effects',
          'Emotional Regulation: Anxiety competes for cognitive resources; Control-Value Theory',
          'Trust in Automation: Situation awareness, feedback loops, and system transparency'
        ]
      }
    ]
  },
  process: {
    title: 'Interface Analysis',
    content: [
      'The study analyzed five critical interaction points in Lyft\'s ride-scheduling flow: destination selection without confirmation feedback, ride comparison with limited memory support, expanded ride type lists with minimal categorization, departure time selection lacking visual cues, and arrival time scheduling without continuity indicators.',
      'Each interaction was evaluated against established cognitive and emotional frameworks to identify where design choices create unnecessary mental burden or emotional strain.'
    ],
    subsections: [
      {
        heading: 'Key Cognitive Breakdowns',
        points: [
          'Drop-off selection lacks persistent confirmation, forcing reliance on internal memory',
          'Multiple similar ride options exceed working memory capacity (~4 chunks)',
          'Uniform visual presentation creates extraneous load through split-attention',
          'Redundant icons and text drain cognitive resources without adding value',
          'Departure/arrival time screens lack state continuity, forcing mental reconstruction',
          'Ambiguous feedback triggers anxiety and uncertainty under time pressure'
        ]
      },
      {
        heading: 'Emotional Impact',
        points: [
          'Missing feedback creates uncertainty about whether actions were registered',
          'Time pressure amplifies emotional strain when interface cues are unclear',
          'Control-Value Theory: Users feel high stakes but lack perceived control',
          'Anxiety weakens attentional control and working memory performance',
          'Trust calibration erodes when system responses are delayed or absent'
        ]
      }
    ]
  },
  outcome: {
    title: 'Findings & Recommendations',
    content: [
      'The research identified that Lyft\'s interface places substantial cognitive and emotional demands on users through poor feedback mechanisms, inadequate visual grouping, and insufficient state management.',
      'Recommended improvements focus on five areas: explicit confirmation feedback for all selections, visual grouping and progressive disclosure for ride options, persistent memory aids showing current selections, dynamic progress indicators for multi-step workflows, and enhanced emotional support through transparent system behavior.',
      'These changes would reduce working memory burden, lower cognitive load, support emotional regulation, and strengthen trust—ultimately creating a more reliable and less stressful booking experience.'
    ],
    subsections: [
      {
        heading: 'Design Solutions',
        points: [
          'Add persistent summary cues (e.g., "Drop-off set at 125 Summer St")',
          'Group and categorize ride options to reduce comparison burden',
          'Implement collapsible sections with filtering tools for ride types',
          'Provide visual anchors and confirmation states for time selections',
          'Create transitional aids between departure and arrival screens',
          'Use real-time feedback to reduce uncertainty and support trust calibration'
        ]
      }
    ],
    metrics: [
      { label: 'Working Memory Limit', value: '~4 chunks' },
      { label: 'Interaction Points Analyzed', value: '5 critical moments' },
      { label: 'Cognitive Frameworks Applied', value: '4 theories' },
      { label: 'NASA-TLX Score', value: '58/100 (mod-high load)' }
    ]
  }
},

{
  id: 'mbta',
  title: 'MBTA Go App: Metacognitive Wayfinding',
  year: 'Spring 2025',
  role: 'UX Researcher',
  icon: '🚆',
  brief: 'Research on how metacognitive regulation influences digital wayfinding. Proposed design strategies supporting user self-regulation and confidence.',
  tags: ['Metacognition', 'Navigation Design', 'Public Transit'],
  pdfLink: '/pdfs/Metacognitive + Wayfinding.pdf',
  overview: {
    title: 'Research Overview',
    quote: 'Successfully navigating digital transit systems requires more than reading maps—it demands active management of cognitive processes.',
    content: [
      'This research examines how metacognitive regulation—the deliberate coordination of planning, monitoring, and adaptive problem-solving—underpins successful digital wayfinding in public transit applications.',
      'Drawing from Flavell (1979) and Nelson & Narens (1990), metacognition involves reflecting upon and regulating one\'s thinking through goal formulation, strategy selection, progress monitoring, and outcome evaluation.',
      'The MBTA Go app and MBTA.com website serve as case studies for evaluating how digital transit platforms support—or hinder—these self-directed cognitive processes during navigation tasks.'
    ],
    subsections: [
      {
        heading: 'Cognitive Framework',
        points: [
          'Metacognitive Regulation: Goal-setting, strategy selection, monitoring, evaluation',
          'Executive Function: Working memory, attentional control, mental flexibility (Miyake et al., 2000)',
          'Wayfinding as Cognitive Skill: Cognitive maps, allocentric vs. egocentric navigation',
          'Spatial Knowledge Development: Landmark → Route → Survey-level understanding (Siegel & White, 1975)'
        ]
      }
    ]
  },
  process: {
    title: 'Evaluation Methodology',
    content: [
      'The analysis evaluated the MBTA Go mobile app and MBTA.com website across four metacognitive regulation stages: task initiation and goal framing, strategy selection and cognitive flexibility, progress monitoring and error awareness, and reflective feedback and cognitive closure.',
      'Each interface element was assessed for its ability to scaffold users\' metacognitive processes—supporting self-directed thinking rather than simply presenting information.'
    ],
    subsections: [
      {
        heading: 'Interface Strengths',
        points: [
          'Homepage presents clear task entry points (Buy Tickets, Schedules)',
          'Route list offers dual strategies: scrollable browsing and direct search',
          'Directional toggles support basic verification of trip logic',
          'Ticket history provides simple post-task confirmation feedback',
          'Alert icons indicate service disruptions on commuter rail lines'
        ]
      },
      {
        heading: 'Metacognitive Gaps Identified',
        points: [
          'Weak visual hierarchy on homepage undermines goal-setting clarity',
          'Limited filtering/sorting options constrain strategic flexibility',
          'Lack of dynamic progress indicators during trip planning',
          'Missing visual cues for departure time confirmation',
          'Platform switching (app → website) breaks cognitive continuity',
          'Insufficient scaffolding for error recovery and route adjustment'
        ]
      }
    ]
  },
  outcome: {
    title: 'Design Recommendations',
    content: [
      'The research identified five key opportunities to enhance metacognitive support: enhance goal framing through bolder visual hierarchy, expand strategy selection with advanced filtering, improve monitoring through dynamic route highlights and real-time updates, strengthen reflection with color-coded history and completion badges, and eliminate cross-platform disruptions with mobile-native schedule integration.',
      'These improvements would actively scaffold users\' thinking processes—not just display information—by supporting goal clarity, strategic flexibility, progress awareness, and post-task learning.',
      'Effective wayfinding interfaces must offer more than data—they must support metacognitive regulation through embedded cues, dynamic feedback, and flexible task flows that adapt to users\' cognitive needs.'
    ],
    subsections: [
      {
        heading: 'Metacognitive Scaffolding Strategies',
        points: [
          'Goal-setting: Make core actions prominent with bold icons and clear labels',
          'Strategy selection: Provide filtering by zone, time, direction for varied preferences',
          'Monitoring: Add progress animations, "You are here" indicators, and status markers',
          'Evaluation: Include trip history summaries, success feedback, and recent route shortcuts',
          'Continuity: Integrate schedules natively with contextual alerts and severity indicators'
        ]
      }
    ],
    metrics: [
      { label: 'Interface Screens Analyzed', value: '5 key interactions' },
      { label: 'Metacognitive Stages', value: '4 regulation phases' },
      { label: 'Platform Disruptions', value: 'App → Website redirect' },
      { label: 'Scaffolding Opportunities', value: '5 major areas' }
    ]
  }
}
];