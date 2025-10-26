import React from 'react';
import styles from '../styles/OverlayMenu.module.css';

interface OverlayMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: 'home' | 'portfolio' | 'contact') => void;
}

const OverlayMenu: React.FC<OverlayMenuProps> = ({ isOpen, onClose, onNavigate }) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && <div className={styles.backdrop} onClick={onClose} />}

      {/* Menu Panel */}
      <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <div className={styles.menuWindow}>
          {/* Title Bar */}
          <div className={styles.titleBar}>
            <span className={styles.title}>Navigation</span>
            <button className={styles.closeBtn} onClick={onClose}>
              ✕
            </button>
          </div>

          {/* Menu Content */}
          <div className={styles.menuContent}>
            <nav className={styles.navList}>
              <button
                className={styles.navItem}
                onClick={() => onNavigate('home')}
              >
                🏠 Home
              </button>
              <button
                className={styles.navItem}
                onClick={() => onNavigate('portfolio')}
              >
                🎨 Portfolio
              </button>
              <button
                className={styles.navItem}
                onClick={() => onNavigate('contact')}
              >
                💬 Contact
              </button>
            </nav>
          </div>

          {/* Footer */}
          <div className={styles.footer}>
            <p className={styles.footerText}>AlexOS 95</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverlayMenu;
