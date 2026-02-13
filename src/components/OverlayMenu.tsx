// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import styles from '../styles/OverlayMenu.module.css';

// interface OverlayMenuProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const OverlayMenu: React.FC<OverlayMenuProps> = ({ isOpen, onClose }) => {
//   const location = useLocation();

//   // ✅ Added Resume button
//   const menuItems = [
//     { path: '/', label: 'Home', icon: '🏠' },
//     { path: '/portfolio', label: 'Portfolio', icon: '📁' },
//     { path: '/contact', label: 'Contact', icon: '📧' },
//     { path: '/pdfs/Alex_chea_resume.pdf', label: 'Resume', icon: '📄', external: true }
//   ];

//   const handleNavigation = () => {
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <>
//       {/* Backdrop */}
//       <div className={styles.backdrop} onClick={onClose} />

//       {/* Menu Window */}
//       <div className={styles.menuWindow}>
//         {/* Title Bar */}
//         <div className={styles.titleBar}>
//           <span className={styles.titleText}>
//             <span className={styles.titleIcon}>🪟</span>
//             AlexOS 95 - Navigation
//           </span>
//           <button className={styles.closeBtn} onClick={onClose} aria-label="Close menu">
//             ×
//           </button>
//         </div>

//         {/* Menu Content */}
//         <div className={styles.menuContent}>
//           {/* Sidebar */}
//           <div className={styles.menuSidebar}>
//             <div className={styles.sidebarBanner}>
//               <div className={styles.bannerText}>Alex OS</div>
//               <div className={styles.bannerSubtext}>95</div>
//             </div>
//           </div>

//           {/* Main Menu */}
//           <div className={styles.menuMain}>
//             <nav className={styles.menuNav}>
//               {menuItems.map((item) =>
//                 item.external ? (
//                   <a
//                     key={item.label}
//                     href={item.path}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`${styles.menuItem}`}
//                     onClick={handleNavigation}
//                   >
//                     <span className={styles.menuIcon}>{item.icon}</span>
//                     <span className={styles.menuLabel}>{item.label}</span>
//                   </a>
//                 ) : (
//                   <Link
//                     key={item.path}
//                     to={item.path}
//                     className={`${styles.menuItem} ${location.pathname === item.path ? styles.active : ''}`}
//                     onClick={handleNavigation}
//                   >
//                     <span className={styles.menuIcon}>{item.icon}</span>
//                     <span className={styles.menuLabel}>{item.label}</span>
//                     {location.pathname === item.path && (
//                       <span className={styles.activeIndicator}>●</span>
//                     )}
//                   </Link>
//                 )
//               )}
//             </nav>

//             {/* Footer */}
//             <div className={styles.menuFooter}>
//               <div className={styles.systemInfo}>
//                 <span>💾 System Status: Online</span>
//                 <span>🖥️ Display: Retro Mode</span>
//                 <span>⚡ Performance: Excellent</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className={styles.bottomBar}>
//           <div className={styles.versionInfo}>Version 1.0.0</div>
//           <button className={styles.shutdownBtn} onClick={onClose}>
//             Close Menu
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default OverlayMenu;
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/OverlayMenu.module.css';

interface OverlayMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const OverlayMenu: React.FC<OverlayMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Home', icon: 'bi-house' },
    { path: '/portfolio', label: 'Portfolio', icon: 'bi-folder' },
    { path: '/contact', label: 'Contact', icon: 'bi-envelope' },
    { path: '/pdfs/Alex_chea_resume.pdf', label: 'Resume', icon: 'bi-file-earmark-text', external: true }
  ];

  const handleNavigation = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className={styles.backdrop} onClick={onClose} />

      {/* Menu Window */}
      <div className={styles.menuWindow}>
        {/* Title Bar */}
        <div className={styles.titleBar}>
          <span className={styles.titleText}>
            <i className={`bi bi-window ${styles.titleIcon}`}></i>
            AlexOS 95 - Navigation
          </span>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close menu">
            ×
          </button>
        </div>

        {/* Menu Content */}
        <div className={styles.menuContent}>
          {/* Sidebar */}
          <div className={styles.menuSidebar}>
            <div className={styles.sidebarBanner}>
              <div className={styles.bannerText}>Alex OS</div>
              <div className={styles.bannerSubtext}>95</div>
            </div>
          </div>

          {/* Main Menu */}
          <div className={styles.menuMain}>
            <nav className={styles.menuNav}>
              {menuItems.map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.menuItem}`}
                    onClick={handleNavigation}
                  >
                    <i className={`${item.icon} ${styles.menuIcon}`}></i>
                    <span className={styles.menuLabel}>{item.label}</span>
                  </a>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`${styles.menuItem} ${location.pathname === item.path ? styles.active : ''}`}
                    onClick={handleNavigation}
                  >
                    <i className={`${item.icon} ${styles.menuIcon}`}></i>
                    <span className={styles.menuLabel}>{item.label}</span>
                    {location.pathname === item.path && (
                      <i className={`bi bi-circle-fill ${styles.activeIndicator}`}></i>
                    )}
                  </Link>
                )
              )}
            </nav>

            {/* Footer */}
            <div className={styles.menuFooter}>
              <div className={styles.systemInfo}>
                <span><i className="bi bi-hdd"></i> System Status: Online</span>
                <span><i className="bi bi-display"></i> Display: Retro Mode</span>
                <span><i className="bi bi-lightning"></i> Performance: Excellent</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.versionInfo}>Version 1.0.0</div>
          <button className={styles.shutdownBtn} onClick={onClose}>
            Close Menu
          </button>
        </div>
      </div>
    </>
  );
};

export default OverlayMenu;
