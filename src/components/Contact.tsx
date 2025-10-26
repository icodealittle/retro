import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <footer className={styles.contactSection}>
      <div className={styles.contactWindow}>
        {/* Title Bar */}
        <div className={styles.titleBar}>
          <span className={styles.title}>📧 Contact.txt</span>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <div className={styles.header}>
            <h2>Get In Touch</h2>
            <p>Let's chat about design, tech, or anything in between.</p>
          </div>

          <div className={styles.grid}>
            {/* Quick Links */}
            <div className={styles.quickLinks}>
              <h3>Quick Links</h3>
              <a href="mailto:cheasoumeng@gmail.com" className={styles.link}>
                Email
              </a>
              <a href="https://www.linkedin.com/in/soumengchea/" target="_blank" rel="noreferrer" className={styles.link}>
                LinkedIn
              </a>
              <a href="https://github.com/icodealittle?tab=repositories" target="_blank" rel="noreferrer" className={styles.link}>
                GitHub
              </a>
              {/* <a href="https://twitter.com" target="_blank" rel="noreferrer" className={styles.link}>
                🐦 Twitter
              </a> */}
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name..."
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  required
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                SEND MESSAGE
              </button>

              {submitted && <p className={styles.successMsg}>✓ Message sent!</p>}

              <p style={{ fontSize: '0.8rem', color: '#666666', marginTop: '1rem', fontStyle: 'italic' }}>
                  💡 This contact form is currently for aesthetic purposes. Reach out via Email, LinkedIn, or GitHub instead.
                </p>
              
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className={styles.footerBar}>
        <p>&copy; 2024 AlexOS 95. All rights reserved.</p>
        {/* <p>Made with ❤️ and pixels</p> */}
      </div>
    </footer>
  );
};

export default Contact;
