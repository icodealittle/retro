# Alex Chea - Retro Desktop Portfolio

A Windows 95-inspired interactive portfolio built with **React**, **TypeScript**, and **Vite**. Combines retro desktop aesthetics with modern UX practices.

## 🎨 Features

- **Retro Windows 95 Design** - Authentic visual language with modern interaction patterns
- **Interactive Components**
  - Home section with bio and profile image
  - Portfolio showcase with 7 project cards (expandable)
  - Sticky note resume widget with tabbed interface (Experience, Projects, Skills, Achievements)
  - Contact section with quick links
  - Overlay menu navigation

- **Responsive Design** - Optimized for desktop, tablet, and mobile
- **Accessibility** - Semantic HTML, keyboard navigation support
- **Performance** - Optimized with Vite for fast dev and build

## 🛠 Tech Stack

- **React 19.1.1** - UI framework
- **TypeScript** - Type-safe development
- **Vite 7.1.7** - Build tool & dev server
- **CSS Modules** - Scoped styling with retro theming
- **Google Fonts** - Press Start 2P & VT323 monospace fonts

## 📦 Project Structure

```
src/
├── components/
│   ├── App.tsx           # Main app wrapper
│   ├── Home.tsx          # Bio & profile section
│   ├── Portfolio.tsx     # Project showcase
│   ├── Contact.tsx       # Contact form & footer
│   ├── OverlayMenu.tsx   # Navigation menu
│   └── StickyNoteResume.tsx # Resume widget
├── styles/
│   ├── global.css        # Global styles & scrollbar fix
│   ├── retro.css         # Windows 95 theme
│   ├── Home.module.css
│   ├── Portfolio.module.css
│   └── Contact.module.css
├── App.tsx
└── main.tsx
public/
└── assets/
    └── images/
        └── profile.jpg
```

## 📝 Key Sections

**Home** - Professional bio highlighting background in data science, product management, and human-centered design. Integrated dual degree focus (MS CS + MBA/MS HCI).

**Portfolio** - 7 projects showcasing UX research, product strategy, and device innovation work. Expandable cards with role, timeline, brief, and tech stack.

**Resume Widget** - Sticky note interface with:

- Experience: Past internships and roles
- Projects: Welch's AI, Hydra-Trim, Sanofi, MBTA, Figma, LinkedIn research
- Skills: Organized by category (Research, Design, Data, Collaboration, Emerging Tech)
- Achievements: Scholarships, honors, and recognition

**Contact** - Quick links to Email, LinkedIn, GitHub. (Form aesthetic only—use quick links for now.)

## 🎯 Design Decisions

- **Retro Aesthetic** - Windows 95 visual language creates distinctive personal brand
- **Sticky Note Components** - Tab-based resume widget mirrors OS windows metaphor
- **Modular CSS** - CSS Modules prevent style conflicts while maintaining global theme
- **Full-Width Sections** - Portfolio moves to full width below bio for readability
- **Fixed Footer** - Copyright notice stays at page bottom during scroll

## 📋 Notes

- Profile image served from `public/assets/images/profile.jpg`
- Form is aesthetic only—use Contact quick links for real outreach
- Portfolio section under reconstruction—PDFs/case studies available upon request
- All components built from scratch with TypeScript for type safety

## 🎓 Built By

Alex - Product Manager, UX Engineer, Human Factors Researcher

---

For questions or collaboration: [Contact](cheasoumeng@gmail.com)
