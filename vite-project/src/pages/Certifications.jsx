import React, { useState } from 'react';
import styles from './Profile.module.css';

function getWordSpans(text, highlightIndex, styles) {
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

const certifications = [
  {
    title: "Cuvette",
    subtitle: "MERN Stack Course",
    period: "July 2025",
    location: "",
    bullets: [
      "Completed comprehensive training on the MERN stack, including in-depth study of HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB.",
      "Developed strong front-end skills in building responsive and interactive applications with React.",
      "Gained hands-on experience in back-end development, REST API creation, and database management.",
      "Demonstrated the ability to design and deploy full-stack web applications using modern JavaScript technologies."
    ],
    links: {
      certification: "https://drive.google.com/file/d/1afZoNKrVgGDSNt2SeCdQxVcv4rZBRsdk/view?usp=drive_link",
      github: "https://github.com/manvithmp"
    }
  },
  {
    title: "Q-Spiders",
    subtitle: "Internship",
    period: "August 2022– September 2022",
    location: "Mangalore, Karnataka",
    bullets: [
      "Completed an internship at QSpiders, gaining hands-on experience in C programming and Java, focusing on software development fundamentals."
    ],
    links: {
      certification: "#",
      github: "https://github.com/manvithmp"
    }
  }
  
];

function GradientSection({ title, subtitle, period, location, bullets, links }) {
  const [hovered, setHovered] = useState(null);
  return (
    <div className={styles.sectionCard}>
      <div className={styles.sectionTitleBlock}>
        <span className={styles.gradientTextHeader}>{title}</span>
        {subtitle && <span className={styles.sectionSub}>{subtitle}</span>}
      </div>
      <div className={styles.sectionInfoRow}>
        {period && <span className={styles.sectionPeriod}>{period}</span>}
        {location && <span className={styles.sectionLocation}>{location}</span>}
      </div>
      {links && (
        <div className={styles.projectLinks}>
          {links.certification && (
            <a href={links.certification} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
              📜 Certification Link
            </a>
          )}
          {links.github && (
            <a href={links.github} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
              💻 GitHub
            </a>
          )}
        </div>
      )}
      <ul
        className={styles.sectionBullets}
        onMouseOver={e => {
          const idx = e.target.dataset.index;
          if (idx !== undefined) setHovered(Number(idx));
        }}
        onMouseOut={() => setHovered(null)}
      >
        {bullets.map((text, idx) => (
          <li key={idx} className={styles.sectionBullet}>
            {getWordSpans(text, hovered, styles)}
          </li>
        ))}
      </ul>
    </div>
  );
}

const Certifications = () => (
  <div className={styles.container}>
    <div className={styles.pageContent}>
      <h1 className={styles.gradientTextHeader} style={{ marginTop: "2.5rem" }}>Certifications / Internships</h1>
      <div className={styles.projectsGrid}>
        {certifications.map((cert, idx) => (
          <GradientSection
            key={idx}
            title={cert.title}
            subtitle={cert.subtitle}
            period={cert.period}
            location={cert.location}
            bullets={cert.bullets}
            links={cert.links}
          />
        ))}
      </div>
    </div>
    <div className={styles.gradientCircle}></div>
    <div className={styles.glassBlur}></div>
  </div>
);

export default Certifications;