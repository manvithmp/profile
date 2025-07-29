import React from 'react';
import styles from './Profile.module.css';

const Contacts = () => (
  <div className={styles.container}>
    <div className={styles.pageContent}>
      <h1 className={styles.gradientTextHeader} style={{ marginTop: "2.5rem" }}>Contacts</h1>
      <div className={styles.sectionCard}>
        <ul className={styles.skillsList}>
          <li>Email: <a href="mailto:manvithmp13@gmail.com" style={{color: "var(--accent2)"}}>manvithmp13@gmail.com</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/manvith-mp-81283431a/" style={{color: "var(--accent2)"}}>https://www.linkedin.com/in/manvith-mp-81283431a/</a></li>
          <li>GitHub: <a href="https://github.com/manvithmp" style={{color: "var(--accent2)"}}>https://github.com/manvithmp</a></li>
          <li>Location: Bangalore, Karnataka</li>
        </ul>
      </div>
    </div>
    <div className={styles.gradientCircle}></div>
    <div className={styles.glassBlur}></div>
  </div>
);

export default Contacts;