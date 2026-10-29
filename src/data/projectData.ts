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

  pdfLink?: string;
  prototypeLink?: string;

  insights?: Section;
  designPhilosophy?: Section;
  buildAnimations?: Section;
  researchTesting?: Section;
  designOutcome?: Section;

  research?: Section;
  analysis?: Section;
  recommendations?: Section;
  design?: Section;
  prototype?: Section;
}

export const projectsData: ProjectDetail[] = [
  /* =========================================================
     HEALTHCARE AI
  ========================================================= */

  {
    id: "healthcare-ai",
    title: "Healthcare AI: Comprehension & Trust Study",
    year: "Jan 2026 – May 2026",
    role: "Co-Project Lead & UX Researcher",
    icon: "bi-heart-pulse",

    brief:
      "Human-centered AI research examining how an AI-enabled healthcare experience influenced comprehension, trust, and users' willingness to rely on digitally generated health information.",

    tags: [
      "Healthcare UX",
      "Human-Centered AI",
      "Usability Testing",
      "User Research",
      "Research Synthesis",
    ],

    overview: {
      title: "Project Overview",
      quote:
        "Trust in healthcare AI depends on more than whether the technology works. Users also need to understand what it is telling them and why.",

      content: [
        "This project examined how people interpret and respond to an AI-enabled healthcare experience. Rather than evaluating AI only from a technical perspective, the study focused on the human factors surrounding comprehension, trust, confidence, and willingness to use AI-supported health information.",
        "The central design problem was that healthcare AI can provide useful information while still creating uncertainty for users. A system may generate a technically plausible recommendation, but users still need enough context to understand the output, judge its credibility, and decide what action to take next.",
        "Our research therefore examined how interface design and information presentation could help users make sense of AI-generated health information without encouraging blind reliance on automation.",
        "As Co-Project Lead, I helped structure the research, facilitate moderated sessions, analyze qualitative and behavioral evidence, and translate findings into recommendations for a clearer and more trustworthy healthcare experience.",
      ],

      subsections: [
        {
          heading: "Research Goals",
          points: [
            "Understand how users interpret AI-generated healthcare information",
            "Identify moments where uncertainty or misunderstanding affects trust",
            "Evaluate whether the experience improves users' understanding of the presented health information",
            "Examine how interface communication influences confidence in AI-supported recommendations",
            "Translate behavioral and qualitative findings into product and design recommendations",
          ],
        },
      ],
    },

    research: {
      title: "Research & Evaluation",

      content: [
        "The study used moderated research sessions to observe how participants interacted with the healthcare AI experience and how their understanding changed throughout the task.",
        "Rather than relying only on satisfaction ratings, the research examined both what participants said and how they reasoned through the information presented to them.",
        "Moderation also allowed us to probe moments of confusion, hesitation, confidence, and mistrust that would have been difficult to understand from quantitative measures alone.",
      ],

      subsections: [
        {
          heading: "Research Activities",
          points: [
            "Conducted 5 moderated research sessions",
            "Observed participant interaction with the healthcare AI experience",
            "Evaluated comprehension before and after interaction",
            "Collected qualitative feedback around trust and perceived usefulness",
            "Examined where participants questioned, accepted, or misunderstood AI-generated information",
            "Synthesized behavioral observations with participant explanations",
          ],
        },
        {
          heading: "Questions We Explored",
          points: [
            "Does the experience help users better understand the health information presented?",
            "What makes an AI-generated explanation feel credible or questionable?",
            "Where do users need additional context or clarification?",
            "How much trust do users place in the system after interacting with it?",
            "What information should remain clearly distinguishable from professional medical guidance?",
          ],
        },
      ],
    },

    analysis: {
      title: "Analysis & Insights",

      content: [
        "The sessions showed that trust was closely connected to comprehension. Participants were more comfortable engaging with the AI experience when they could understand how information related to their situation rather than simply receiving a recommendation without context.",
        "The research also reinforced that high trust is not automatically a positive outcome. In healthcare, an interface should support informed judgment rather than encourage users to treat AI output as unquestionable.",
        "These findings shifted the design conversation from simply making AI responses appear more authoritative toward helping users understand the system's role, limitations, and reasoning.",
      ],

      subsections: [
        {
          heading: "Key Insights",
          points: [
            "Comprehension and trust were strongly connected",
            "Users needed understandable explanations rather than technical detail alone",
            "Clear communication reduced uncertainty during interpretation",
            "Trust should be calibrated rather than maximized",
            "Healthcare AI should support decision-making without replacing appropriate professional judgment",
          ],
        },
      ],

      metrics: [
        {
          label: "Moderated Sessions",
          value: "5",
        },
        {
          label: "Understanding Improvement",
          value: "+4.4 points",
        },
        {
          label: "Maximum Post-Use Trust",
          value: "80%",
        },
        {
          label: "Research Focus",
          value: "Comprehension & Trust",
        },
      ],
    },

    recommendations: {
      title: "Design Recommendations",

      content: [
        "Research findings were translated into recommendations focused on helping users understand not only the AI-generated information itself, but also how they should interpret and act on that information.",
        "The recommendations emphasized transparency, hierarchy, and calibrated trust rather than presenting AI as an unquestionable authority.",
      ],

      subsections: [
        {
          heading: "Experience Recommendations",
          points: [
            "Explain recommendations in plain language before introducing technical detail",
            "Separate AI-generated interpretation from verified clinical information",
            "Make uncertainty and system limitations visible when relevant",
            "Use information hierarchy to distinguish primary recommendations from supporting evidence",
            "Provide clear next-step guidance when professional consultation may be appropriate",
            "Avoid interface patterns that imply certainty where uncertainty remains",
          ],
        },
      ],
    },

    process: {
      title: "",
      content: [],
    },

    outcome: {
      title: "Outcome & Reflection",

      content: [
        "The project demonstrated that healthcare AI experiences should be evaluated as communication systems as much as technical systems. The usefulness of an AI recommendation depends heavily on whether users can understand it, evaluate it, and place an appropriate level of trust in it.",
        "For me, the project strengthened the connection between Human Factors and AI product design. It reinforced that successful AI products require more than accurate outputs. They also require thoughtful communication, transparent interaction patterns, and careful consideration of how people make decisions under uncertainty.",
      ],
    },
  },

  /* =========================================================
     WELCH'S AI ADOPTION
  ========================================================= */

  {
    id: "welchs-ai",
    title: "Welch's AI Adoption Insights",
    year: "Sep 2025 – Dec 2025",
    role: "Graduate Consultant",
    icon: "bi-cpu",

    brief:
      "Organizational research examining barriers to generative AI adoption and translating employee feedback into recommendations for scalable AI adoption.",

    tags: [
      "AI Strategy",
      "Mixed-Methods Research",
      "Stakeholder Interviews",
      "Workflow Analysis",
      "Organizational Change",
    ],

    pdfLink: "/pdfs/Generative_AI_Adoption_Welchs.pdf",

    overview: {
      title: "Project Overview",
      quote:
        "Successful AI adoption is not only a technology problem. It is also a workflow, training, trust, and organizational change problem.",

      content: [
        "Welch's was exploring how generative AI could create value across different parts of the organization. The challenge was not simply determining whether employees had access to AI tools, but understanding why adoption differed between teams and what conditions would make adoption sustainable.",
        "Our graduate consulting team investigated the human and organizational factors influencing generative AI use. The project examined employee behaviors, workflow needs, training gaps, perceived value, and concerns surrounding responsible use.",
        "Instead of recommending organization-wide AI deployment without evidence, we focused on identifying where AI could realistically support existing work and what employees would need before those tools could become part of everyday workflows.",
        "My role centered on stakeholder research, qualitative synthesis, adoption analysis, and translating findings into recommendations that could support more than 200 employees.",
      ],

      subsections: [
        {
          heading: "Project Objectives",
          points: [
            "Understand how employees were currently using or avoiding generative AI",
            "Identify workflow conditions that encouraged or discouraged adoption",
            "Understand differences in adoption across departments",
            "Determine where training, governance, or organizational support was missing",
            "Develop recommendations for phased and responsible AI adoption",
          ],
        },
      ],
    },

    research: {
      title: "Research Approach",

      content: [
        "We used a mixed-methods approach to avoid treating AI adoption as a simple usage-rate problem. Employee interviews provided context around motivations, frustrations, and expectations while available usage information helped us examine broader adoption patterns.",
        "Twelve stakeholders across three departments participated in interviews. Using participants from multiple organizational functions helped us compare how role requirements, technical familiarity, and workflow structure influenced perceptions of generative AI.",
      ],

      subsections: [
        {
          heading: "Methods",
          points: [
            "12 stakeholder interviews",
            "Participants across 3 departments",
            "Semi-structured interview protocol",
            "Thematic coding of qualitative responses",
            "Affinity mapping to identify recurring patterns",
            "Cross-department comparison",
            "Triangulation with available usage analytics",
          ],
        },
        {
          heading: "Research Topics",
          points: [
            "Current generative AI usage",
            "Perceived benefits and limitations",
            "Workflow integration opportunities",
            "Training and support needs",
            "Concerns around accuracy and responsible use",
            "Perceived return on time and effort",
            "Organizational readiness for broader adoption",
          ],
        },
      ],
    },

    analysis: {
      title: "Analysis & Key Findings",

      content: [
        "The research showed that resistance to generative AI was not primarily caused by a lack of interest. Many employees were curious about the technology, but uncertainty about where to use it, how to evaluate its output, and whether the time spent learning it would produce meaningful value limited adoption.",
        "Different departments also had different levels of readiness. This meant that a single organization-wide implementation strategy would likely ignore important differences in workflow, technical confidence, and use cases.",
        "The analysis therefore reframed the adoption challenge from 'How do we get everyone to use AI?' to 'What support, workflows, and safeguards allow specific teams to use AI effectively?'",
      ],

      subsections: [
        {
          heading: "Primary Barriers",
          points: [
            "Limited structured training on practical AI use cases",
            "Unclear productivity return for some employee workflows",
            "Difficulty identifying appropriate tasks for AI assistance",
            "Inconsistent confidence in evaluating AI-generated output",
            "Questions surrounding responsible AI use",
            "Change-management challenges across departments",
          ],
        },
        {
          heading: "Organizational Insight",
          points: [
            "AI maturity differed between teams",
            "Employees needed task-specific examples rather than generic AI demonstrations",
            "Adoption depended on perceived usefulness within existing workflows",
            "Training needed to address both capability and limitations",
            "Governance should evolve alongside experimentation rather than block all early exploration",
          ],
        },
      ],
    },

    recommendations: {
      title: "Strategic Recommendations",

      content: [
        "The final recommendations proposed a phased approach that allowed Welch's to build organizational capability before attempting broad standardization.",
        "The strategy emphasized experimentation, measurable workflow pilots, internal knowledge sharing, and governance that could mature as the organization learned where generative AI created meaningful value.",
      ],

      subsections: [
        {
          heading: "Phase 1: Build AI Literacy",
          points: [
            "Introduce practical AI literacy training",
            "Demonstrate department-specific use cases",
            "Teach employees how to validate AI-generated output",
            "Create a safe environment for structured experimentation",
          ],
        },
        {
          heading: "Phase 2: Test Workflow Pilots",
          points: [
            "Identify repetitive or high-friction workflows",
            "Select measurable departmental pilot projects",
            "Track time savings, quality, usability, and employee confidence",
            "Document failure cases as well as successful use cases",
          ],
        },
        {
          heading: "Phase 3: Scale What Works",
          points: [
            "Establish organization-wide guidance based on pilot evidence",
            "Standardize approved tools where appropriate",
            "Develop reusable workflow templates",
            "Create AI champions who can support peer learning",
            "Continuously evaluate adoption and business value",
          ],
        },
      ],

      metrics: [
        {
          label: "Stakeholder Interviews",
          value: "12",
        },
        {
          label: "Departments",
          value: "3",
        },
        {
          label: "Employees Supported",
          value: "200+",
        },
        {
          label: "Research Approach",
          value: "Mixed Methods",
        },
      ],
    },

    process: {
      title: "",
      content: [],
    },

    outcome: {
      title: "Outcome & Reflection",

      content: [
        "The project produced a set of recommendations designed to help Welch's approach generative AI as an organizational capability rather than simply a new software purchase.",
        "The work reinforced one of my core product principles: adoption problems often reveal product and workflow problems. Understanding why people hesitate, create workarounds, or abandon a tool can be just as important as measuring whether the tool technically functions.",
      ],
    },
  },

  /* =========================================================
     WHISK & WHISPER
  ========================================================= */

  {
    id: "whisk-whisper",
    title: "Whisk & Whisper: Voice-Enabled Cooking Assistant",
    year: "September - December 2025",
    role: "Technical Lead & UX Systems Architect",
    icon: "bi-mic",

    brief:
      "Voice-enabled cooking experience exploring how conversational interaction can reduce friction during hands-busy, attention-intensive tasks.",

    tags: [
      "Voice UX",
      "Human Factors",
      "Conversational AI",
      "Interaction Design",
      "Prototyping",
    ],

    techStack: ["JavaScript", "Node.js", "Express", "OpenAI Voice", "HTML/CSS"],

    prototypeLink: "https://github.com/icodealittle/whisk-whisper",

    overview: {
      title: "Project Overview",
      quote:
        "The best interface in the kitchen may be the one you do not have to touch.",

      content: [
        "Whisk & Whisper explores how voice interaction can support people while they cook. Traditional recipe applications often assume that users can continuously look at and interact with a screen, even when their hands are occupied and their attention is divided between preparation, timing, heat, and multiple ingredients.",
        "The project reframed the recipe experience as a hands-busy interaction problem. Instead of simply placing written recipes behind a voice interface, we explored how recipe information should be structured differently when users navigate through conversation.",
        "As Technical Lead and UX Systems Architect, I translated user needs into feature workflows, interaction logic, system requirements, and the technical handoff between the user interface and voice service.",
      ],

      subsections: [
        {
          heading: "Design Challenge",
          points: [
            "Reduce unnecessary screen interaction during cooking",
            "Help users maintain awareness of their current recipe step",
            "Support interruptions and repeated instructions",
            "Design voice commands that feel predictable and easy to remember",
            "Prevent conversational errors from disrupting the cooking workflow",
          ],
        },
      ],
    },

    research: {
      title: "Understanding the Cooking Workflow",

      content: [
        "The design process focused on moments where conventional recipe interfaces create friction. Cooking requires users to divide their attention between physical actions, timing, preparation, and instructions.",
        "These observations helped us treat cognitive load as a systems problem rather than simply a visual-interface problem. The product needed to provide information at the correct moment without requiring users to remember unnecessary details.",
      ],

      subsections: [
        {
          heading: "Recurring User Needs",
          points: [
            "Hands-free access to instructions",
            "Simple confirmation of the current step",
            "Ability to repeat information without restarting the workflow",
            "Clear timing information",
            "Support for interruptions and task switching",
            "Predictable commands that require minimal learning",
          ],
        },
      ],
    },

    design: {
      title: "Interaction & System Design",

      content: [
        "Recipes were transformed from static blocks of text into structured interaction sequences. Each step became a state within the cooking workflow, allowing the interface to respond differently depending on where the user was in the recipe.",
        "The interaction model prioritized a small number of memorable commands rather than attempting to support unrestricted conversation. This made system behavior easier for users to predict and easier for the prototype to handle reliably.",
      ],

      subsections: [
        {
          heading: "Core Interaction Patterns",
          points: [
            '"Next" advances to the following instruction',
            '"Repeat" restates the current instruction',
            "Timing-related questions provide contextual cooking information",
            "Step state is preserved so users know where they are in the recipe",
            "Ingredient and preparation information is surfaced when relevant",
          ],
        },
        {
          heading: "Human Factors Considerations",
          points: [
            "Minimize memory requirements during multitasking",
            "Reduce visual attention shifts between food and screen",
            "Maintain clear system status",
            "Provide recoverable interactions when speech recognition fails",
            "Avoid overloading users with long spoken instructions",
          ],
        },
      ],
    },

    prototype: {
      title: "Technical Prototype",

      content: [
        "The prototype connected the user-facing cooking experience with a structured recipe system and voice interaction layer. Frontend interactions, recipe state, and voice commands were designed as connected parts of the same system rather than independent features.",
        "Testing focused heavily on failure conditions. Voice systems can misunderstand users, receive incomplete commands, or respond at inappropriate times, so documenting edge cases became an important part of the design process.",
      ],

      subsections: [
        {
          heading: "System Components",
          points: [
            "JavaScript-based interface",
            "Node.js and Express service layer",
            "OpenAI Voice integration",
            "Structured recipe and step logic",
            "Voice command handling",
            "Frontend-to-voice-service handoff",
          ],
        },
        {
          heading: "Failure Cases Evaluated",
          points: [
            "Unrecognized commands",
            "Repeated commands",
            "Unexpected user phrasing",
            "Incorrect step advancement",
            "Interrupted interaction",
            "Voice service and interface state becoming unsynchronized",
          ],
        },
      ],
    },

    outcome: {
      title: "Outcome & Reflection",

      content: [
        "Whisk & Whisper resulted in a functional prototype demonstrating how voice interaction can support a physical task when screen-based interaction becomes inconvenient.",
        "More importantly, the project reinforced that conversational AI needs strong interaction architecture. A natural-sounding voice alone does not create a usable product. The system still needs clear states, predictable behavior, error recovery, and thoughtful information sequencing.",
        "The project strengthened my interest in designing AI products where Human Factors and technical architecture have to work together.",
      ],

      metrics: [
        {
          label: "Project Duration",
          value: "4 months",
        },
        {
          label: "Primary Interaction",
          value: "Voice-first",
        },
        {
          label: "Core Context",
          value: "Hands-busy tasks",
        },
      ],
    },

    process: {
      title: "",
      content: [],
    },
  },

  /* =========================================================
     EASEPATCH
  ========================================================= */

  {
    id: "easepatch",
    title: "EasePatch: Sanofi Device Innovation Challenge",
    year: "May 2025 – Oct 2025",
    role: "Project Manager & UX Designer",
    icon: "bi-bandaid",

    brief:
      "Patient-centered wearable drug-delivery concept designed around comfort, confidence, feedback clarity, discretion, and long-term usability.",

    tags: [
      "Medical Device",
      "Patient Research",
      "Human Factors",
      "Product Strategy",
      "Usability Testing",
    ],

    pdfLink:
      "https://www.figma.com/deck/w5EER5qMAfYm1QdY7cGMXO/Sanofi?node-id=232-1171&t=jfc4DMtvj8gZmeGH-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",

    overview: {
      title: "Project Overview",
      quote: "Care that's easy to wear.",

      content: [
        "EasePatch was developed for the Sanofi Device Innovation Challenge as a concept for improving the experience of large-volume on-body drug delivery.",
        "The project began with a simple observation: medical devices can perform their clinical function correctly while still creating anxiety, uncertainty, discomfort, or embarrassment for the person wearing them.",
        "Our goal was therefore broader than designing a delivery mechanism. We wanted to understand how the physical form, feedback system, attachment method, and overall experience could increase patient confidence while accommodating real everyday behavior.",
        "As Project Manager and UX Designer, I helped coordinate research, product feasibility, usability considerations, cross-functional inputs, and the final product narrative presented to industry judges and Sanofi product leadership.",
      ],

      subsections: [
        {
          heading: "Design Objectives",
          points: [
            "Reduce uncertainty during device use",
            "Improve comfort during extended wear",
            "Make device status immediately understandable",
            "Support different lifestyles and body positions",
            "Balance sustainability with medical-device constraints",
            "Create an experience that feels discreet rather than clinical or intimidating",
          ],
        },
      ],
    },

    researchTesting: {
      title: "Research & Usability Testing",

      content: [
        "The research examined both functional and emotional dimensions of wearable drug delivery. We considered not only whether users could operate the device, but how confident they felt while doing so.",
        "Testing with 10 participants focused on application, comfort, feedback clarity, discretion, and confidence. Participant comments were used alongside rating data to identify where the concept needed refinement.",
        "Feedback repeatedly showed that uncertainty about whether the device was functioning correctly could create unnecessary anxiety. This made system feedback one of the most important design priorities.",
      ],

      subsections: [
        {
          heading: "What We Evaluated",
          points: [
            "Ease of application",
            "Comfort during wear",
            "Understanding of device status",
            "Visibility and discretion",
            "Confidence that delivery was progressing correctly",
            "Preferences for feedback modalities",
          ],
        },
        {
          heading: "Usability Results",
          points: [
            "Ease of Application: 4.7/5",
            "Comfort & Adhesion: 4.6/5",
            "Feedback Clarity: 4.8/5",
            "Discretion: 4.5/5",
            "User Confidence: 4.9/5",
          ],
        },
        {
          heading: "Recurring Insights",
          points: [
            "Users wanted a secure attachment method that still felt comfortable during movement",
            "Low-profile form and neutral appearance supported discretion",
            "LED and haptic feedback reduced uncertainty",
            "Participants wanted device status to be understandable without opening another application",
            "Comfort and emotional reassurance were closely connected",
          ],
        },
      ],
    },

    designOutcome: {
      title: "Design Development",

      content: [
        "Research findings were translated into a two-part wearable concept combining physical comfort with multimodal status feedback.",
        "The feedback system was intentionally simplified so that users could understand the device state quickly. Rather than relying on detailed text, the concept used color and vibration to communicate readiness, active delivery, and error conditions.",
        "The physical concept also evolved in response to usability feedback, including changes to adhesive considerations, wearable attachment, and modular components.",
      ],

      subsections: [
        {
          heading: "Core Product Decisions",
          points: [
            "Medical-grade silicone and skin-conscious material direction",
            "LED status communication",
            "Haptic confirmation for important state changes",
            "Low-profile wearable form",
            "Optional belt-clip configuration",
            "Modular battery concept",
            "Replaceable or recyclable component strategy",
          ],
        },
        {
          heading: "Feedback System",
          points: [
            "Blue: Device ready",
            "Yellow: Delivery active",
            "Red: Attention or error state",
            "Vibration reinforces important state transitions",
          ],
        },
        {
          heading: "Proposed Development Roadmap",
          points: [
            "Months 1-3: Form-factor and interaction prototyping",
            "Months 4-6: Usability testing and adhesive refinement",
            "Months 7-9: Integrated higher-fidelity testing",
            "Months 10-12: Final prototype and pre-regulatory preparation",
          ],
        },
      ],

      metrics: [
        {
          label: "Participants",
          value: "10",
        },
        {
          label: "User Confidence",
          value: "4.9/5",
        },
        {
          label: "Ease of Application",
          value: "4.7/5",
        },
        {
          label: "Feedback Clarity",
          value: "4.8/5",
        },
      ],
    },

    process: {
      title: "",
      content: [],
    },

    outcome: {
      title: "Outcome & Reflection",

      content: [
        "EasePatch demonstrated how Human Factors can shape a medical-device concept beyond basic functionality. Feedback, comfort, discretion, and confidence became product requirements rather than secondary aesthetic considerations.",
        "The project also gave me experience balancing user needs with feasibility, cost, operational constraints, and product-development considerations. That balance is especially important in healthcare, where an ideal user experience must still work within technical and regulatory realities.",
      ],
    },
  },

  /* =========================================================
     HYDRATRIM
  ========================================================= */

  {
    id: "hydratrim",
    title: "Hydra-Trim: L'Oréal Brandstorm 2025",
    year: "November 2024 - April 2025",
    role: "Product Manager & Human Factors Researcher",
    icon: "bi-moisture",

    brief:
      "Connected grooming concept combining hydration sensing, AI-guided feedback, sustainable components, and product strategy for a consumer beauty experience.",

    tags: [
      "Product Management",
      "Human Factors",
      "AI Integration",
      "Consumer Research",
      "Product Strategy",
    ],

    pdfLink:
      "https://drive.google.com/file/d/1I973FS_n5c4PT0BgAC3NwCzkKdiiBhET/view?usp=drive_link",

    overview: {
      title: "Project Overview",
      quote:
        "What if a grooming device could help users understand their skin rather than simply remove hair?",

      content: [
        "Hydra-Trim was developed for L'Oréal Brandstorm as a connected grooming concept combining shaving, hydration sensing, AI-supported guidance, and sustainable product design.",
        "The project explored a shift from single-purpose grooming devices toward connected self-care products. Rather than competing only on shaving performance, Hydra-Trim was positioned around helping users understand hydration and build more informed grooming routines.",
        "My role combined product management and Human Factors research. I worked across customer needs, product positioning, usability, feature direction, cost considerations, and business feasibility.",
        "This required balancing three perspectives at the same time: whether users would understand and value the product, whether the concept differentiated itself from existing grooming products, and whether its positioning could support a realistic market strategy.",
      ],

      subsections: [
        {
          heading: "Product Opportunity",
          points: [
            "Combine grooming and skincare into one connected experience",
            "Make hydration information understandable to non-expert users",
            "Differentiate from conventional premium shavers",
            "Create a sustainability story beyond disposable components",
            "Build a product concept aligned with younger consumers' interest in self-care and connected technology",
          ],
        },
        {
          heading: "Competitive Position",
          points: [
            "Evaluated premium grooming competitors including Gillette Labs, Braun, and Panasonic",
            "Positioned Hydra-Trim between conventional premium grooming and connected personal-care technology",
            "Explored $70-$100 target pricing",
            "Differentiated through hydration sensing, AI-supported guidance, and modular components",
          ],
        },
      ],
    },

    process: {
      title: "Research, Product Strategy & Evaluation",

      content: [
        "The concept was evaluated from both user-experience and commercial perspectives. Research focused on whether the hydration feature was understandable, whether users considered it valuable, and how sustainability affected product perception.",
        "Usability evaluation also examined how easily participants could interpret controls and hydration information without receiving extensive explanation.",
        "In parallel, product analysis considered pricing, competitive positioning, feature differentiation, launch strategy, and metrics that could be used to evaluate adoption.",
      ],

      subsections: [
        {
          heading: "Human Factors Focus",
          points: [
            "Comprehension of hydration feedback",
            "Interpretation of controls",
            "Interaction with the companion experience",
            "Perceived comfort and ergonomics",
            "Understanding of sustainability features",
          ],
        },
        {
          heading: "Product Management Focus",
          points: [
            "Competitive differentiation",
            "Feature prioritization",
            "Target pricing",
            "Cost considerations",
            "Launch and retention metrics",
            "Market-growth assumptions",
          ],
        },
      ],

      metrics: [
        {
          label: "Product Understanding",
          value: "4.7/5",
        },
        {
          label: "Interface Usability",
          value: "4.5/5",
        },
        {
          label: "Comfort & Ergonomics",
          value: "4.4/5",
        },
        {
          label: "Sustainability Value",
          value: "4.6/5",
        },
        {
          label: "Target Price",
          value: "$70-$100",
        },
      ],
    },

    insights: {
      title: "Research Insights",

      content: [
        "Participants generally understood the value of hydration feedback but needed the information presented in a simpler and more immediately interpretable format.",
        "Sustainability also influenced how participants perceived the concept. Modular components and blade-recycling ideas helped position the product as a longer-term system rather than another disposable grooming device.",
        "These findings reinforced that connected products should not expose users to more data simply because sensors can generate it. Information has to be translated into understandable and actionable feedback.",
      ],

      subsections: [
        {
          heading: "Design Iterations",
          points: [
            "Simplified hydration visualization",
            "Introduced clearer status cues",
            "Reduced reliance on technical terminology",
            "Added contextual guidance for unfamiliar functionality",
            "Explored tactile feedback for physical controls",
            "Used familiar icons where possible to reduce interpretation effort",
          ],
        },
      ],
    },

    outcome: {
      title: "Outcome & Reflection",

      content: [
        "Hydra-Trim became more than a smart-device concept. It became an exercise in connecting user value, technical capability, product positioning, pricing, and measurable business outcomes.",
        "The project strengthened my understanding of product management because every feature needed a reason to exist. Sensor technology, AI guidance, sustainability, and companion interactions had to support a coherent customer value proposition rather than exist simply as innovative features.",
      ],

      subsections: [
        {
          heading: "Product Strategy",
          points: [
            "Targeted younger consumers interested in grooming and self-care",
            "Explored influencer-led discovery through social platforms",
            "Connected sustainability to retention through recycling concepts",
            "Defined launch, retention, and market-growth KPIs",
            "Used $70-$100 pricing as a target for balancing feature value and accessibility",
          ],
        },
      ],
    },
  },

  /* =========================================================
     ALEXOS 95
  ========================================================= */

  {
    id: "alexos95",
    title: "AlexOS 95: Retro Desktop Portfolio",
    year: "Oct 2025 – Present",
    role: "Product Designer & Developer",
    icon: "bi-laptop",

    brief:
      "Interactive Windows 95-inspired portfolio combining nostalgic interaction patterns with modern UX, responsive design, and frontend development.",

    tags: [
      "Product Design",
      "UX/UI",
      "Frontend Development",
      "Interaction Design",
      "Responsive Design",
    ],

    techStack: ["React", "TypeScript", "Vite", "React Router", "CSS Modules"],

    prototypeLink: "https://github.com/icodealittle/retro",

    overview: {
      title: "Background & Problem",
      quote:
        "A portfolio should not only show what I designed. The portfolio itself should demonstrate how I think about products and interaction.",

      content: [
        "My earlier portfolio functioned primarily as a digital résumé and project archive. It contained the necessary information, but the experience did not clearly communicate the relationship between my technical background, UX research work, Human Factors education, and product-design interests.",
        "The redesign therefore became a UX project itself. The users were hiring managers, recruiters, designers, researchers, and collaborators who needed to understand my background quickly without losing access to deeper case-study information.",
        "I chose the Windows 95 desktop metaphor because it provided a recognizable interaction model while also giving the portfolio a distinct personality. The challenge was preserving that character without allowing nostalgia to interfere with navigation, readability, responsiveness, or accessibility.",
      ],

      subsections: [
        {
          heading: "Design Problems",
          points: [
            "Project discovery was slower than it should be",
            "UX research work was not immediately visible",
            "Technical and design work appeared disconnected",
            "Long project descriptions were difficult to scan",
            "Visual inconsistency weakened the overall narrative",
            "The site needed a stronger distinction from conventional portfolio templates",
          ],
        },
      ],
    },

    designPhilosophy: {
      title: "Design Philosophy",

      content: [
        "The redesign used the desktop metaphor as a functional information architecture rather than decoration alone. Projects behave like applications, case studies open inside windows, and the taskbar provides persistent access to active content.",
        "The visual system intentionally borrows familiar desktop conventions while adapting them to modern portfolio needs.",
      ],

      subsections: [
        {
          heading: "Core Principles",
          points: [
            "Make important work discoverable before decorative details",
            "Use nostalgia as an interaction framework rather than a visual gimmick",
            "Keep navigation predictable despite unconventional styling",
            "Allow users to explore multiple projects without losing context",
            "Preserve responsive behavior across screen sizes",
            "Make technical implementation part of the design story",
          ],
        },
      ],
    },

    buildAnimations: {
      title: "Interaction & Technical Implementation",

      content: [
        "The portfolio was implemented as a React and TypeScript application using a desktop-window model. Each project can open independently, move across the interface, minimize to the taskbar, and return to the foreground.",
        "This architecture required managing application state, window position, z-index behavior, routing, responsive layouts, and reusable content structures.",
      ],

      subsections: [
        {
          heading: "Technical Architecture",
          points: [
            "React component architecture",
            "TypeScript interfaces for structured project content",
            "React Router for project-level routing",
            "Vite development environment",
            "CSS Modules for scoped styling",
            "Dynamic desktop-window state",
            "Reusable project-detail sections",
          ],
        },
        {
          heading: "Interaction Decisions",
          points: [
            "Projects open like desktop applications",
            "Windows can be moved, minimized, restored, and layered",
            "Taskbar provides persistent project access",
            "Featured projects appear before supporting academic work",
            "Project cards prioritize role, date, context, and key themes",
            "Detailed case studies remain available without overcrowding the homepage",
          ],
        },
      ],
    },

    outcome: {
      title: "Outcome & Reflection",

      content: [
        "The redesigned portfolio reduced the time required for users to locate important work while giving the site a stronger identity that reflects both my technical and UX background.",
        "The project also became an example of how I approach product work: identify the audience, understand where the existing experience creates friction, build a system around those needs, and continue refining it based on how people actually use it.",
      ],

      metrics: [
        {
          label: "Task Time",
          value: "67s → 29s",
        },
        {
          label: "Primary Framework",
          value: "React + TypeScript",
        },
        {
          label: "Interface Model",
          value: "Desktop OS",
        },
      ],
    },

    process: {
      title: "",
      content: [],
    },
  },

  /* =========================================================
     ZERO WASTE
  ========================================================= */

  {
    id: "zero-waste",
    title: "Zero Waste: Behavioral UX Experiment",
    year: "Academic Project",
    role: "UX Researcher & Designer",
    icon: "bi-recycle",

    brief:
      "Behavioral UX experiment examining whether interface design could influence everyday food-waste reduction behaviors.",

    tags: [
      "A/B Testing",
      "Behavioral UX",
      "Figma",
      "User Research",
      "Data Analysis",
    ],

    overview: {
      title: "Project Overview",
      quote:
        "A sustainability interface is only useful if it can influence what people actually do.",

      content: [
        "Zero Waste explored how digital interfaces could encourage users to adopt more sustainable food-management behaviors.",
        "Instead of measuring only whether participants liked an interface, the study focused on behavior. Two alternative high-fidelity designs were created and tested to examine which interaction approach better supported routine changes.",
        "The project combined interface design, A/B testing, user research, and behavioral measurement.",
      ],

      subsections: [
        {
          heading: "Research Question",
          points: [
            "How can interface design encourage food-waste reduction behaviors?",
            "Which interaction approach creates stronger motivation to change routines?",
            "Do stated preferences align with actual behavior?",
          ],
        },
      ],
    },

    process: {
      title: "Experiment Design",

      content: [
        "Two high-fidelity Figma interfaces were developed and compared through an A/B testing approach.",
        "Ten participants interacted with the concepts, and behavior was observed over a five-day period to understand whether the experience translated into changes beyond the initial test session.",
      ],

      subsections: [
        {
          heading: "Methods",
          points: [
            "2 high-fidelity interface concepts",
            "A/B testing",
            "10 participants",
            "5-day evaluation period",
            "Behavior-focused outcome measurement",
          ],
        },
      ],
    },

    outcome: {
      title: "Outcome",

      content: [
        "The experiment found a 20% increase in adoption of the targeted food-waste reduction behaviors.",
        "The project reinforced the importance of distinguishing between usability and behavioral impact. An interface can be easy to use without necessarily changing behavior, so product evaluation should measure outcomes that connect directly to the problem being addressed.",
      ],

      metrics: [
        {
          label: "Participants",
          value: "10",
        },
        {
          label: "Prototype Variants",
          value: "2",
        },
        {
          label: "Study Duration",
          value: "5 days",
        },
        {
          label: "Behavior Adoption",
          value: "+20%",
        },
      ],
    },
  },

  /* =========================================================
     FIGMA MENTAL MODELS
  ========================================================= */

  {
    id: "figma",
    title: "Figma: Prior Knowledge, Schemas & Mental Models",
    year: "Spring 2025",
    role: "UX Researcher",
    icon: "bi-brush",

    brief:
      "Cognitive UX analysis examining how existing knowledge and mental models affect the way users understand a complex professional design tool.",

    tags: [
      "Cognitive Psychology",
      "Mental Models",
      "UX Research",
      "Interface Analysis",
    ],

    pdfLink: "/pdfs/Prior_knoweldge.pdf",

    overview: {
      title: "Research Overview",
      quote:
        "Users rarely approach an interface with a blank mental slate. Previous experiences shape what they expect to happen next.",

      content: [
        "This research examined Figma through the lens of schema theory and mental models. The goal was to understand how prior knowledge influences users' ability to interpret tools, navigation structures, components, and interface conventions.",
        "Figma is particularly interesting because it combines familiar desktop-software conventions with concepts that may be unfamiliar to new users, including reusable components, nested layers, shared resources, and collaborative design systems.",
        "The analysis focused on where Figma successfully activates familiar schemas and where users may need to construct entirely new mental models.",
      ],

      subsections: [
        {
          heading: "Cognitive Framework",
          points: [
            "Schema Theory",
            "Prototype Theory",
            "Exemplar Theory",
            "Mental Models",
            "Semantic Networks",
            "Spreading Activation",
          ],
        },
      ],
    },

    process: {
      title: "Interface Analysis",

      content: [
        "The interface was evaluated across navigation, terminology, hierarchy, reusable components, property controls, and repeated interaction patterns.",
        "Rather than judging the interface only by visual consistency, the analysis considered whether interface structures matched knowledge users were likely to bring from other applications.",
      ],

      subsections: [
        {
          heading: "Findings",
          points: [
            "Layer hierarchies leverage familiar file-organization schemas",
            "Resource categories support semantic association and recognition",
            "Component relationships require new schema development for inexperienced users",
            "Repeated alignment interactions can become procedural knowledge",
            "Consistent controls help experienced users transfer knowledge between tasks",
          ],
        },
      ],
    },

    outcome: {
      title: "Design Implications",

      content: [
        "Figma generally benefits from consistency and reusable interaction patterns, but complex component relationships can create a significant learning barrier for new users.",
        "The analysis suggests that expert tools should not eliminate complexity entirely. Instead, they should scaffold users as their mental models become more sophisticated.",
      ],

      subsections: [
        {
          heading: "Recommendations",
          points: [
            "Introduce contextual explanations for unfamiliar component relationships",
            "Use progressive disclosure for advanced functionality",
            "Provide persistent visual cues during multi-step workflows",
            "Connect unfamiliar concepts to recognizable interaction patterns",
            "Adapt onboarding to different levels of prior design experience",
          ],
        },
      ],
    },
  },

  /* =========================================================
     LINKEDIN
  ========================================================= */

  {
    id: "linkedin",
    title: "LinkedIn Jobs: Pre-Attentive Perception",
    year: "Spring 2025",
    role: "UX Researcher",
    icon: "bi-briefcase",

    brief:
      "Cognitive interface analysis examining how visual hierarchy and pre-attentive processing influence the way users scan job-search information.",

    tags: [
      "Visual Perception",
      "Cognitive Science",
      "Information Architecture",
      "UX Analysis",
    ],

    pdfLink: "/pdfs/Pre_attentive.pdf",

    overview: {
      title: "Research Overview",
      quote:
        "Before users consciously read an interface, their visual system has already begun deciding what deserves attention.",

      content: [
        "This project examined LinkedIn Jobs through the lens of pre-attentive processing: the rapid visual mechanisms that allow people to notice differences in color, position, size, shape, and contrast before deliberate attention occurs.",
        "Job-search interfaces contain dense amounts of information competing for attention. The research therefore asked how LinkedIn's visual hierarchy helps users quickly distinguish primary actions, job information, notifications, and supporting content.",
      ],

      subsections: [
        {
          heading: "Analysis Dimensions",
          points: [
            "Color and salience",
            "Shape and iconography",
            "Proximity",
            "Alignment",
            "Typography",
            "Contrast",
            "Visual grouping",
          ],
        },
      ],
    },

    process: {
      title: "Interface Evaluation",

      content: [
        "The analysis examined how LinkedIn visually prioritizes information before users begin consciously comparing job details.",
        "Particular attention was given to whether visual grouping supported fast scanning or introduced unnecessary competition between interface elements.",
      ],

      subsections: [
        {
          heading: "Strengths",
          points: [
            "Blue action elements create clear visual salience",
            "Notification badges use contrast effectively",
            "Company logos provide recognizable scanning anchors",
            "Vertical alignment supports predictable information grouping",
            "Repeated icon patterns improve recognition",
          ],
        },
        {
          heading: "Opportunities",
          points: [
            "Increase contrast for secondary information",
            "Strengthen separation between dense information groups",
            "Improve prominence of key actions",
            "Use clearer typographic hierarchy for secondary relationships",
            "Provide stronger interaction feedback after user actions",
          ],
        },
      ],
    },

    outcome: {
      title: "Design Recommendations",

      content: [
        "The analysis showed that LinkedIn successfully uses several perceptual principles to organize a high-density environment, but small hierarchy improvements could further reduce visual search effort.",
        "The project reinforced that visual design is not purely aesthetic. Contrast, spacing, alignment, and hierarchy directly influence how efficiently users can locate and interpret information.",
      ],
    },
  },

  /* =========================================================
     LYFT
  ========================================================= */

  {
    id: "lyft",
    title: "Lyft: Cognitive Load & Emotional Design",
    year: "Spring 2025",
    role: "UX Researcher",
    icon: "bi-car-front",

    brief:
      "Human Factors analysis examining how working memory, cognitive load, feedback, and uncertainty affect ride-scheduling interactions.",

    tags: [
      "Cognitive Load",
      "Behavioral Analysis",
      "Interaction Design",
      "Human Factors",
    ],

    pdfLink: "/pdfs/Balance_memory.pdf",

    overview: {
      title: "Research Overview",
      quote:
        "A task can appear simple while still demanding significant mental effort from the person performing it.",

      content: [
        "This project examined the Lyft ride-scheduling experience through working-memory, cognitive-load, and emotional-regulation frameworks.",
        "Ride booking becomes especially sensitive to cognitive friction because users may already be dealing with time pressure, unfamiliar locations, price comparisons, and uncertainty about whether they selected the correct destination or schedule.",
        "The study therefore focused on moments where interface design requires users to remember information that could instead be supported externally by the system.",
      ],
    },

    process: {
      title: "Cognitive Analysis",

      content: [
        "Five important interaction points were analyzed for memory demand, information density, feedback quality, and emotional uncertainty.",
        "Each interaction was evaluated by asking whether the interface reduces cognitive work or transfers unnecessary responsibility to the user's memory.",
      ],

      subsections: [
        {
          heading: "Breakdowns Identified",
          points: [
            "Weak confirmation forces users to remember previous selections",
            "Similar ride options increase comparison demands",
            "Limited grouping raises visual and cognitive load",
            "Inconsistent state cues make users reconstruct earlier decisions",
            "Unclear feedback can increase uncertainty under time pressure",
          ],
        },
      ],
    },

    outcome: {
      title: "Recommendations",

      content: [
        "Recommendations focused on making important state information visible so users do not have to repeatedly remember or verify earlier decisions.",
        "The project demonstrated how reducing unnecessary cognitive work can improve both usability and emotional confidence.",
      ],

      subsections: [
        {
          heading: "Design Opportunities",
          points: [
            "Provide persistent confirmation of important selections",
            "Group similar ride types",
            "Use progressive disclosure for secondary options",
            "Maintain visible trip state across screens",
            "Provide clear transition feedback",
            "Reduce uncertainty with immediate system responses",
          ],
        },
      ],
    },
  },

  /* =========================================================
     MBTA
  ========================================================= */

  {
    id: "mbta",
    title: "MBTA Go: Metacognitive Wayfinding",
    year: "Spring 2025",
    role: "UX Researcher",
    icon: "bi-train-front",

    brief:
      "Human Factors research exploring how digital transit experiences can support planning, monitoring, error recovery, and user confidence during wayfinding.",

    tags: ["Metacognition", "Wayfinding", "Navigation Design", "Human Factors"],

    pdfLink: "/pdfs/Metacognitive_Wayfinding.pdf",

    overview: {
      title: "Research Overview",
      quote:
        "Effective navigation tools should help people manage the journey, not simply display transportation data.",

      content: [
        "This project examined digital transit navigation through metacognitive regulation: the process people use to plan, monitor, evaluate, and adapt their own thinking.",
        "Transit applications are especially dependent on this process because users continuously make decisions about routes, timing, transfers, disruptions, and whether they are still moving toward the correct destination.",
        "The analysis therefore examined whether MBTA interfaces provide enough feedback for users to understand not only what they should do next, but also whether their current strategy is working.",
      ],

      subsections: [
        {
          heading: "Metacognitive Stages",
          points: [
            "Goal formation",
            "Strategy selection",
            "Progress monitoring",
            "Error recognition",
            "Adaptation",
            "Post-task evaluation",
          ],
        },
      ],
    },

    process: {
      title: "Interface Evaluation",

      content: [
        "The MBTA Go experience and related digital interfaces were analyzed for their ability to support planning, flexibility, monitoring, and recovery.",
        "Particular attention was given to moments where users transition between screens or platforms because these transitions can disrupt the mental model of an ongoing journey.",
      ],

      subsections: [
        {
          heading: "Strengths",
          points: [
            "Clear starting actions support initial goal formation",
            "Search and browsing provide alternative route-discovery strategies",
            "Directional controls help users verify trip logic",
            "Service alerts provide information necessary for adaptation",
          ],
        },
        {
          heading: "Gaps",
          points: [
            "Limited progress feedback during trip planning",
            "Weak confirmation of selected departure information",
            "Platform transitions interrupt cognitive continuity",
            "Recovery support is limited when conditions change",
            "Some information requires users to maintain too much state mentally",
          ],
        },
      ],
    },

    outcome: {
      title: "Design Recommendations",

      content: [
        "The recommendations focused on creating a transit experience that actively supports users throughout the entire decision-making cycle.",
        "Instead of treating wayfinding as a sequence of isolated screens, the interface should preserve context, communicate progress, and help users recover when their original plan changes.",
      ],

      subsections: [
        {
          heading: "Metacognitive Scaffolding",
          points: [
            "Strengthen the visual hierarchy of primary trip actions",
            "Provide flexible filtering and route-selection strategies",
            "Maintain visible route and trip status",
            "Add clearer progress indicators",
            "Provide stronger disruption and recovery guidance",
            "Reduce unnecessary app-to-website transitions",
          ],
        },
      ],
    },
  },
];
