// import React, { useState, useEffect } from 'react';
// import { Outlet } from 'react-router-dom';
// import OverlayMenu from './OverlayMenu';
// import styles from '../styles/Layout.module.css';

// const Layout: React.FC = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [currentTime, setCurrentTime] = useState(
//     new Date().toLocaleTimeString('en-US', {
//       hour: '2-digit',
//       minute: '2-digit',
//       hour12: true
//     })
//   );

//   useEffect(() => {
//     // Update the clock every minute
//     const timer = setInterval(() => {
//       setCurrentTime(
//         new Date().toLocaleTimeString('en-US', {
//           hour: '2-digit',
//           minute: '2-digit',
//           hour12: true
//         })
//       );
//     }, 60000);

//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === 'Escape') setMenuOpen(false);
//     };
//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//       clearInterval(timer);
//     };
//   }, []);

//   return (
//     <div className={styles.layoutContainer}>
//       {/* 🪟 Start Button - Always visible */}
//       <button
//         className={`${styles.startButton} ${menuOpen ? styles.active : ''}`}
//         onClick={() => setMenuOpen(!menuOpen)}
//         aria-label="Toggle menu"
//       >
//         <span className={styles.startIcon}>🪟</span>
//         AlexOS 95
//       </button>

//       {/* 📂 Overlay Start Menu */}
//       <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

//       {/* 🧩 Main Content */}
//       <main className={styles.mainContent}>
//         <Outlet />
//       </main>

//       {/* 🧱 Taskbar (Simplified) */}
//       <div className={styles.taskbar}>
//         <div className={styles.taskbarCenter}>
//           <p className={styles.copyRight}>
//             &copy; {new Date().getFullYear()} AlexOS 95. All rights reserved.
//           </p>
//         </div>

//         <div className={styles.taskbarRight}>
//           <span className={styles.systemTime}>{currentTime}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import OverlayMenu from './OverlayMenu';
import styles from '../styles/Layout.module.css';

const Layout: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
  );

  useEffect(() => {
    // Update the clock every minute
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        })
      );
    }, 60000);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={styles.layoutContainer}>
      {/* Start Button - Always visible */}
      <button
        className={`${styles.startButton} ${menuOpen ? styles.active : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <i className={`bi bi-window ${styles.startIcon}`}></i>
        AlexOS 95
      </button>

      {/* Overlay Start Menu */}
      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Main Content */}
      <main className={styles.mainContent}>
        <Outlet />
      </main>

      {/* Taskbar (Simplified) */}
      <div className={styles.taskbar}>
        <div className={styles.taskbarCenter}>
          <p className={styles.copyRight}>
            &copy; {new Date().getFullYear()} AlexOS 95. All rights reserved.
          </p>
        </div>

        <div className={styles.taskbarRight}>
          <span className={styles.systemTime}>{currentTime}</span>
        </div>
      </div>
    </div>
  );
};

export default Layout;
