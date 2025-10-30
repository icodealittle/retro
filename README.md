# AlexOS 95 - Retro Desktop Portfolio

A Windows 95-inspired interactive portfolio built with **React**, **TypeScript**, and **Vite**. This redesign transforms my portfolio from a developer-centric showcase into a narrative-driven experience that embodies my UX research identity.

## 🎯 The Redesign Journey

This portfolio represents a complete UX research-driven redesign of my previous site. After receiving feedback from 10 UX professionals (including 4 senior researchers), I learned that my original design didn't clearly communicate my ability to translate research into experience design.

**Previous Portfolio:** [New_Site_Construction](https://github.com/icodealittle/New_Site_Construction)  
**Current Portfolio:** You're looking at it! 🎉

### Key Changes from Original Design

| Aspect | Old Design | New Design (AlexOS 95) |
|--------|-----------|------------------------|
| Visual Identity | Developer-centric, inconsistent colors | Cohesive retro Windows 95 theme |
| Navigation | Unclear hierarchy, micro-sites feel | Unified START menu & taskbar navigation |
| Project Display | Basic cards | Tabbed notepad-style project details |
| Storytelling | Structure-focused | Narrative-driven with emotional pacing |
| Accessibility | Limited mobile optimization | WCAG 2.1 AA compliant, fully responsive |
| Performance | Standard | Lighthouse 95+ scores |

### Research Methods Used in Redesign

- **Heuristic Evaluation:** Identified 6 moderate and 2 severe usability issues
- **Cognitive Walkthrough:** 60% of users failed to find UX research projects in under 60s
- **Expert Review Interviews (n=10):** 4 emphasized lack of design maturity
- **Competitive Benchmarking:** Studied 5 graduate-level UX portfolios
- **A/B Preference Testing:** 83% preferred new design with consistent navigation

**Outcome:** Task time reduced from 67s → 29s | Professionalism rating improved 3.1 → 4.6/5

---

## 🎨 Features

- **Retro Windows 95 Design** - Authentic visual language with modern interaction patterns
- **Interactive Components**
  - Home section with bio and sticky note resume widget
  - Portfolio showcase with 7 project cards (expandable on click)
  - Detailed project pages with custom tab configurations
  - Overlay START menu navigation
  - Contact section with quick links

- **Custom Project Detail Pages**
  - **EasePatch (Sanofi):** Overview / Research & Testing / Design & Outcome
  - **Hydra-Trim (L'Oréal):** Overview / Process / Insights / Outcome
  - **AlexOS 95:** Overview / Design Philosophy / Build & Animations / Outcome
  - **Other Projects:** Standard Overview / Process / Outcome tabs

- **Responsive Design** - Optimized for desktop, tablet, and mobile
- **Accessibility** - WCAG 2.1 AA compliant, keyboard navigation, semantic HTML
- **Performance** - Lighthouse 95+ scores across all metrics

## 🛠 Tech Stack

- **React 18.2.0** - UI framework with hooks
- **TypeScript 5.2.2** - Type-safe development
- **Vite 5.0.8** - Lightning-fast build tool & dev server
- **React Router 6.20.0** - Client-side routing for project navigation
- **CSS Modules** - Scoped styling with retro Windows 95 theming
- **Google Fonts** - VT323 monospace for authentic terminal aesthetic

## 📦 Project Structure

```
alexos95-portfolio/
├── public/
│   ├── pdfs/
│   │   ├── Sanofi.pdf
│   │   └── Loreal.pdf
│   └── assets/
│       └── images/
│           └── profile.jpg
├── src/
│   ├── components/
│   │   ├── Layout.tsx           # Main layout with START button & taskbar
│   │   ├── OverlayMenu.tsx      # Navigation overlay menu
│   │   ├── Home.tsx             # Bio section with sticky note resume
│   │   ├── Portfolio.tsx        # Project grid showcase
│   │   ├── ProjectDetail.tsx    # Individual project pages with tabs
│   │   └── Contact.tsx          # Contact section with links
│   ├── data/
│   │   └── projectData.ts       # Centralized project content
│   ├── styles/
│   │   ├── global.css           # Global styles & CSS variables
│   │   ├── retro.css            # Windows 95 design tokens
│   │   ├── Layout.module.css
│   │   ├── Home.module.css
│   │   ├── Portfolio.module.css
│   │   ├── ProjectDetail.module.css
│   │   └── Contact.module.css
│   ├── App.tsx                  # Router configuration
│   └── main.tsx                 # App entry point
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```


## 📋 Key Sections

### Home

Professional bio highlighting my background in cognitive psychology, UX research, product management, and human-centered design. Integrated dual degree focus (MS CS + MBA/MS HCI).

**Sticky Note Resume Widget** includes:

- **Experience:** Past internships and roles (Product, UX, Data)
- **Projects:** Featured work from Sanofi, L'Oréal, MBTA, and research studies
- **Skills:** Research Methods, Design Tools, Data Analysis, Collaboration, Emerging Tech
- **Achievements:** Scholarships, honors, and academic recognition

### Portfolio

7 projects showcasing UX research, product strategy, medical device innovation, and cognitive analysis:

1. **Figma** - Mental models & schema theory research
2. **Hydra-Trim** - L'Oréal Brandstorm 2025 smart shaver concept
3. **LinkedIn** - Pre-attentive perception analysis
4. **Lyft** - Cognitive load & emotional design study
5. **MBTA** - Metacognitive wayfinding research
6. **EasePatch** - Sanofi 2025 wearable drug delivery device
7. **AlexOS 95** - This portfolio's UX research case study

Each project card expands to show brief, role, timeline, and tags. Clicking opens a detailed tabbed view.

### Contact

Quick links to Email, LinkedIn, and GitHub for direct outreach.

## 🎯 Design Decisions

### Visual Design

- **Windows 95 Aesthetic:** Creates distinctive personal brand while demonstrating design range
- **Notepad-Style Project Pages:** Tabbed interface mirrors classic OS window metaphor
- **Raised/Sunken Borders:** Authentic 3D button styling with proper inset/outset effects
- **VT323 Monospace Font:** Terminal-style typography for nostalgic consistency
- **Color Palette:** Teal (#214F4B), blue (#235789), tan (#D9B888), light blue (#ADD9F4)

### UX Decisions

- **START Button Navigation:** Fixed bottom-left position mimics Windows 95 taskbar
- **Overlay Menu:** Full-screen navigation reduces cognitive load vs. dropdown
- **Expandable Cards:** Progressive disclosure keeps portfolio page scannable
- **Custom Tab Structures:** Each major project has unique tab configuration based on content
- **PDF/Prototype Links:** External resource buttons for deep-dive materials

### Technical Decisions

- **React Router:** Client-side routing enables deep linking to projects
- **CSS Modules:** Prevents style conflicts while maintaining global theme tokens
- **TypeScript:** Ensures type safety across component props and data structures
- **Centralized Data:** `projectData.ts` makes content updates easy without touching components
- **Responsive Breakpoints:** 1024px, 768px, 480px for tablet and mobile optimization

## 🎨 Retro Design System

### Color Variables (from `global.css`)

```css
--color-primary: #214F4B;     /* Teal - primary text & borders */
--color-secondary: #235789;   /* Blue - accents & links */
--color-accent: #D9B888;      /* Tan - highlights & active states */
--color-light: #ADD9F4;       /* Light blue - backgrounds */
--color-background: #C0C0C0;  /* Classic Windows gray */
```

### Border Styles

- **Raised:** `border-color: #FFFFFF #000000 #000000 #FFFFFF` (light top-left, dark bottom-right)
- **Sunken:** `border-color: #000000 #FFFFFF #FFFFFF #000000` (inverted for pressed state)

## 📊 Performance Metrics

- **Lighthouse Performance:** 95+
- **Lighthouse Accessibility:** 95+
- **Lighthouse Best Practices:** 95+
- **Lighthouse SEO:** 95+
- **First Contentful Paint:** <1.5s
- **Time to Interactive:** <2.5s

## 📚 Case Study

This portfolio itself is a UX research case study! Read the full **AlexOS 95** project details within the site to learn about:

- Research methods (heuristic evaluation, cognitive walkthroughs, expert interviews)
- Design principles derived from user feedback
- A/B testing results and iteration process
- Quantitative improvements in task completion and user satisfaction

## 🎓 Built By

**Alex Chea** - UX Researcher | Product Designer | Human Factors Specialist

Dual Degree Student: MS Computer Science + MBA/MS Human-Computer Interaction  
Passionate about cognitive psychology, behavioral design, and building products people love.

### Previous Work

- **Original Portfolio:** [New_Site_Construction](https://github.com/icodealittle/New_Site_Construction) (2024)
- **Current Portfolio:** AlexOS 95 - Redesigned from the ground up based on UX research

---

## 📫 Contact

- **Email:** <cheasoumeng@gmail.com>
- **LinkedIn:** [linkedin.com/in/alexchea](https://linkedin.com/in/alexchea)
- **GitHub:** [github.com/icodealittle](https://github.com/icodealittle)

---

**Note:** Portfolio section references full case studies available in PDF format. Contact me for detailed documentation of any project.
