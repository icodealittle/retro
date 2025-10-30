import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import OverlayMenu from './OverlayMenu';
import styles from '../styles/Layout.module.css';

const Layout: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={styles.layoutContainer}>
      {/* START Button - Fixed at bottom left */}
      <button
        className={styles.startButton}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={styles.startIcon}>🪟</span>
        START
      </button>

      {/* Overlay Menu */}
      <OverlayMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      {/* Main Content Area */}
      <main className={styles.mainContent}>
        <Outlet />
      </main>

      {/* Taskbar */}
      <div className={styles.taskbar}>
        <div className={styles.taskbarLeft}>
          <span className={styles.startIcon}>🪟</span>
          <span className={styles.taskbarText}>AlexOS 95</span>
        </div>

        <div className={styles.taskbarCenter}>
          <p className={styles.copyRight}>
            &copy; {new Date().getFullYear()} AlexOS 95. All rights reserved.
          </p>
        </div>

        <div className={styles.taskbarRight}>
          <span className={styles.systemTime}>
            {new Date().toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
              hour12: true
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Layout;
