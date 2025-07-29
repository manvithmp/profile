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

const educationData = [
  {
    title: "Bachelor of Engineering (B.E.) - Electronics and Communication",
    subtitle: "Mangalore, Karnataka",
    period: "June 2019 – July 2023",
    bullets: [
      "Gained a strong foundation in core electronics subjects such as circuit analysis, digital systems, microprocessors, and communication technologies.",
      "Developed practical skills through hands-on laboratory work involving analog and digital circuits, embedded systems, and signal processing.",
      "Learned about modern communication systems, wireless technologies, and their real-world applications in fields like telecommunications, networking, and IoT."
    ]
  }
];

function GradientSection({ title, subtitle, period, bullets }) {
  const [hovered, setHovered] = useState(null);
  return (
    <div className={styles.sectionCard}>
      <div className={styles.sectionTitleBlock}>
        <span className={styles.gradientTextHeader}>{title}</span>
        {subtitle && <span className={styles.sectionSub}>{subtitle}</span>}
      </div>
      <div className={styles.sectionInfoRow}>
        {period && <span className={styles.sectionPeriod}>{period}</span>}
      </div>
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

const Education = () => (
  <div className={styles.container}>
    <div className={styles.pageContent}>
      <h1 className={styles.gradientTextHeader} style={{ marginTop: "2.5rem" }}>Education</h1>
      <div className={styles.projectsGrid}>
        {educationData.map((edu, idx) => (
          <GradientSection
            key={idx}
            title={edu.title}
            subtitle={edu.subtitle}
            period={edu.period}
            bullets={edu.bullets}
          />
        ))}
      </div>
    </div>
    <div className={styles.gradientCircle}></div>
    <div className={styles.glassBlur}></div>
  </div>
);

export default Education;