import React, { useRef, useState } from 'react';
import styles from './Profile.module.css';

const descriptionText = `I'm Manvith, a passionate full stack developer skilled in the MERN stack. I completed an intensive MERN certification from Cuvette, mastering HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB. My projects include a CRM system, restaurant management platform, notebook app, and a real-time news website, all built with a focus on user experience and functionality. I enjoy solving real-world problems through code and thrive in collaborative environments.`;

function getWordSpans(text, highlightIndex) {
  const words = text.split(/(\s+)/); 
  return words.map((word, i) =>
    word.trim() ? (
      <span
        key={i}
        className={highlightIndex === i ? styles.gradientTextActive : styles.gradientTextInactive}
        data-index={i}
      >
        {word}
      </span>
    ) : (
      <span key={i}>{word}</span>
    )
  );
}

const Profile = () => {
  const [hoveredWord, setHoveredWord] = useState(null);

  const handleMouseOver = (e) => {
    const idx = e.target.dataset.index;
    if (idx !== undefined) setHoveredWord(Number(idx));
  };

  const handleMouseLeave = () => setHoveredWord(null);

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>MyProfile</div>
        <ul className={styles.navLinks}>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/education">Education</a></li>
          <li><a href="/certifications">Certifications</a></li>
          <li><a href="/contacts">Contacts</a></li>
        </ul>
      </nav>
      <div className={styles.profilePicCard}>
        <div className={styles.profilePicAnimated}>
          <span className={styles.ring1}></span>
          <span className={styles.ring2}></span>
          <span className={styles.ring3}></span>
          <div className={styles.profilePic}>
            <img src="" alt="Profile" />
          </div>
        </div>
      </div>
      <div className={styles.descriptionCard}>
        <h1>
          <span className={styles.gradientTextHeader}>Manvith M P</span>
        </h1>
        <p
          className={styles.cursorColorText}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseLeave}
        >
          {getWordSpans(descriptionText, hoveredWord)}
        </p>
      </div>
      <div className={styles.gradientCircle}></div>
      <div className={styles.glassBlur}></div>
    </div>
  );
};

export default Profile;