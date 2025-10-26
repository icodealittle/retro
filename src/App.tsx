import React, { useState, useRef, useEffect } from 'react';
import OverlayMenu from './components/OverlayMenu';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './styles/global.css';
import './styles/retro.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const homeRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="app-container">
      {/* Start Button */}
      <button
        className="start-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        START
      </button>

      {/* Overlay Menu */}
      <OverlayMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={(section: string) => {
          if (section === 'home') scrollToSection(homeRef);
          if (section === 'portfolio') scrollToSection(portfolioRef);
          if (section === 'contact') scrollToSection(contactRef);
        }}
      />

      {/* Main Content */}
      <main className="main-content">
        <section ref={homeRef} className="section home-section">
          <Home />
        </section>

        <section ref={portfolioRef} className="section portfolio-section">
          <Portfolio />
        </section>

        <section ref={contactRef} className="section contact-section">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;