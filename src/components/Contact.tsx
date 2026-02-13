// import React, { useState } from 'react';
// import styles from '../styles/Contact.module.css';

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [showSuccess, setShowSuccess] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // For now, just show success message
//     // In production, connect to email service or backend
//     setShowSuccess(true);
//     setTimeout(() => {
//       setShowSuccess(false);
//       setFormData({ name: '', email: '', message: '' });
//     }, 3000);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div className={styles.contactContainer}>
//       <div className={styles.header}>
//         <h1 className={styles.title}>Get in Touch</h1>
//         <p className={styles.subtitle}>Let's connect and create something amazing together</p>
//       </div>

//       <div className={styles.contentGrid}>
//         {/* Contact Form */}
//         <div className={styles.formWindow}>
//           <div className={styles.windowTitleBar}>
//             <span className={styles.windowTitle}>📧 contact_form.exe</span>
//             <div className={styles.windowControls}>
//               <span>_</span>
//               <span>□</span>
//               <span>×</span>
//             </div>
//           </div>

//           <form className={styles.form} onSubmit={handleSubmit}>
//             <div className={styles.formGroup}>
//               <label htmlFor="name">Name:</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className={styles.input}
//               />
//             </div>

//             <div className={styles.formGroup}>
//               <label htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className={styles.input}
//               />
//             </div>

//             <div className={styles.formGroup}>
//               <label htmlFor="message">Message:</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 rows={6}
//                 className={styles.textarea}
//               />
//             </div>

//             <button type="submit" className={styles.submitButton}>
//               Send Message
//             </button>
//              <p style={{ fontSize: '0.8rem', color: '#666666', marginTop: '1rem', fontStyle: 'italic' }}>
//                   💡 This contact form is currently for aesthetic purposes. Reach out via Email, LinkedIn, or GitHub instead.
//               </p>

//             {showSuccess && (
//               <div className={styles.successMessage}>
//                 ✓ Message sent successfully!
//               </div>
//             )}
//           </form>
//         </div>

//         {/* Contact Info */}
//         <div className={styles.infoWindow}>
//           <div className={styles.windowTitleBar}>
//             <span className={styles.windowTitle}>📋 contact_info.txt</span>
//             <div className={styles.windowControls}>
//               <span>_</span>
//               <span>□</span>
//               <span>×</span>
//             </div>
//           </div>

//           <div className={styles.infoContent}>
//             <div className={styles.infoSection}>
//               <h3>📧 Email</h3>
//               <a href="mailto:cheasoumeng@gmail.com" className={styles.link}>
//                 cheasoumeng@gmail.com
//               </a>
//             </div>

//             <div className={styles.infoSection}>
//               <h3>💼 LinkedIn</h3>
//               <a href="https://www.linkedin.com/in/soumengchea/" target="_blank" rel="noopener noreferrer" className={styles.link}>
//                 https://www.linkedin.com/in/soumengchea/
//               </a>
//             </div>

//             <div className={styles.infoSection}>
//               <h3>🐙 GitHub</h3>
//               <a href="https://github.com/icodealittle?tab=repositories" target="_blank" rel="noopener noreferrer" className={styles.link}>
//                 https://github.com/icodealittle
//               </a>
//             </div>

//             <div className={styles.infoSection}>
//               <h3>📍 Location</h3>
//               <p className={styles.infoText}>Greater Boston Area (Lowell/Waltham), MA</p>
//             </div>

//             <div className={styles.divider}></div>

//             <div className={styles.availability}>
//               <h3>🟢 Status</h3>
//               <p className={styles.statusText}>Available for opportunities</p>
//               <p className={styles.statusSubtext}>
//                 Open to roles in Product Manager, Product Designer, UX/Human Factor Engineer, Data Strategist, Analytics Lead, UX Researcher, Human Factors Specialist, Human-Centered AI Researcher/Designer, Design Strategist
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Quick Links */}
//       <div className={styles.quickLinks}>
//         <h3>Quick Links</h3>
//         <div className={styles.linkGrid}>
//           <a href="/pdfs/Alex_chea_resume.pdf" className={styles.quickLink} target="_blank" rel="noopener noreferrer">
//             📄 Download Resume
//           </a>
//           <a href="/pdfs/Portfolio.pdf" className={styles.quickLink} target="_blank" rel="noopener noreferrer">
//             📁 Portfolio PDF
//           </a>
//           {/* <a href="https://calendly.com/yourlink" className={styles.quickLink} target="_blank" rel="noopener noreferrer">
//             📅 Schedule Meeting
//           </a> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show success message
    // In production, connect to email service or backend
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Get in Touch</h1>
        <p className={styles.subtitle}>Let's connect and create something amazing together</p>
      </div>

      <div className={styles.contentGrid}>
        {/* Contact Form */}
        <div className={styles.formWindow}>
          <div className={styles.windowTitleBar}>
            <span className={styles.windowTitle}><i className="bi bi-envelope"></i> contact_form.exe</span>
            <div className={styles.windowControls}>
              <span>_</span>
              <span>□</span>
              <span>×</span>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className={styles.textarea}
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
             <p style={{ fontSize: '0.8rem', color: '#666666', marginTop: '1rem', fontStyle: 'italic' }}>
                  <i className="bi bi-lightbulb"></i> This contact form is currently for aesthetic purposes. Reach out via Email, LinkedIn, or GitHub instead.
              </p>

            {showSuccess && (
              <div className={styles.successMessage}>
                <i className="bi bi-check-circle"></i> Message sent successfully!
              </div>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className={styles.infoWindow}>
          <div className={styles.windowTitleBar}>
            <span className={styles.windowTitle}><i className="bi bi-clipboard"></i> contact_info.txt</span>
            <div className={styles.windowControls}>
              <span>_</span>
              <span>□</span>
              <span>×</span>
            </div>
          </div>

          <div className={styles.infoContent}>
            <div className={styles.infoSection}>
              <h3><i className="bi bi-envelope"></i> Email</h3>
              <a href="mailto:cheasoumeng@gmail.com" className={styles.link}>
                cheasoumeng@gmail.com
              </a>
            </div>

            <div className={styles.infoSection}>
              <h3><i className="bi bi-linkedin"></i> LinkedIn</h3>
              <a href="https://www.linkedin.com/in/soumengchea/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                https://www.linkedin.com/in/soumengchea/
              </a>
            </div>

            <div className={styles.infoSection}>
              <h3><i className="bi bi-github"></i> GitHub</h3>
              <a href="https://github.com/icodealittle?tab=repositories" target="_blank" rel="noopener noreferrer" className={styles.link}>
                https://github.com/icodealittle
              </a>
            </div>

            <div className={styles.infoSection}>
              <h3><i className="bi bi-geo-alt"></i> Location</h3>
              <p className={styles.infoText}>Greater Boston Area (Lowell/Waltham), MA</p>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.availability}>
              <h3><i className="bi bi-circle-fill" style={{ color: '#28a745' }}></i> Status</h3>
              <p className={styles.statusText}>Available for opportunities</p>
              <p className={styles.statusSubtext}>
                Open to roles in Product Manager, Product Designer, UX/Human Factor Engineer, Data Strategist, Analytics Lead, UX Researcher, Human Factors Specialist, Human-Centered AI Researcher/Designer, Design Strategist
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className={styles.quickLinks}>
        <h3>Quick Links</h3>
        <div className={styles.linkGrid}>
          <a href="/pdfs/Alex_chea_resume.pdf" className={styles.quickLink} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-file-earmark-text"></i> Download Resume
          </a>
          <a href="/pdfs/Portfolio.pdf" className={styles.quickLink} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-folder"></i> Portfolio PDF
          </a>
          {/* <a href="https://calendly.com/yourlink" className={styles.quickLink} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-calendar"></i> Schedule Meeting
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
