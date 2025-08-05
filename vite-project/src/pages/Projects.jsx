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
          {links.website && (
            <a href={links.website} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
              🌐 Website
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

const projectsData = [
  {
    title: "CRM System",
    subtitle: "React.js, Express.js, MongoDB",
    period: "May 2025",
    location: "",
    bullets: [
      "Built a CRM app using the MERN stack with separate dashboards for admins and employees. Admins can log in, add or delete leads and employees, view analytical data, and update their own credentials. The interface ensures smooth management of company operations and maintains secure access control across users.",
      "Employees log in to their dashboard to manage work activities efficiently. They can check in, take breaks, and check out using dedicated buttons. Employees also view assigned leads, update their status, schedule follow-ups, and change their passwords, all within a user-friendly interface designed for streamlined daily workflow and productivity.",
      "The CRM app promotes organized business processes by clearly separating admin and employee functionalities. Admins manage users and data insights, while employees handle lead tasks and time tracking. Built with MongoDB, Express, React, and Node, the app delivers responsive performance, secure operations, and an efficient digital solution for workplace management."
    ],
    links: {
      website: "https://crm-sable-beta.vercel.app/",
      github: "https://github.com/manvithmp/crm"
    }
  },
  {
    title: "Restaurant Management System",
    subtitle: "React.js, Express.js, MongoDB",
    period: "June 2025",
    location: "",
    bullets: [
      "Developed a full-stack Restaurant Management System using React.js for the frontend, Express.js for the backend, and MongoDB for the database, enabling real-time management of tables, orders, and menus.",
      "Designed an interactive admin dashboard to display key analytics such as total revenue, customer count, ongoing/completed orders, number of chefs, and table availability, improving decision-making and operational visibility.",
      "Implemented dynamic features including table reservation, dish management, and order placement with dine-in and takeaway options—fully integrated with a live database for seamless updates and tracking."
    ],
    links: {
      website: "https://hotel-management-woad.vercel.app/",
      github: "https://github.com/manvithmp/hotel_management"
    }
  },
  {
    title: "Note Book APP",
    subtitle: "React.js",
    period: "February 2025",
    location: "",
    bullets: [
      "Designed and developed a fully functional Notebook App using React.js, enabling users to create, save, and manage multiple notes seamlessly.",
      "Implemented a dark mode feature to enhance user experience, improve accessibility, and provide a comfortable viewing experience in various lighting conditions."
    ],
    links: {
      website: "https://note-book-omega.vercel.app/",
      github: "https://github.com/manvithmp/note_book"
    }
  },
  {
    title: "News Website",
    subtitle: "Next.js",
    period: "January 2025",
    location: "",
    bullets: [
      "Developed a dynamic News Website using Next.js, integrating the GNews API to fetch real-time news articles with features such as category-based filtering, search functionality, pagination, and dark mode.",
      "Implemented seamless user experience enhancements, including a full article redirection, ensuring intuitive navigation and accessibility while optimizing performance with Next.js capabilities."
    ],
    links: {
      website: "https://news-website-beige-six.vercel.app/",
      github: "https://github.com/manvithmp/news-website"
    }
  }
];

const Projects = () => (
  <div className={styles.container}>
    <div className={styles.pageContent}>
      <h1 className={styles.gradientTextHeader} style={{ marginTop: "2.5rem" }}>Projects</h1>
      <div className={styles.projectsGrid}>
        {projectsData.map((proj, idx) => (
          <GradientSection
            key={idx}
            title={proj.title}
            subtitle={proj.subtitle}
            period={proj.period}
            location={proj.location}
            bullets={proj.bullets}
            links={proj.links}
          />
        ))}
      </div>
    </div>
    <div className={styles.gradientCircle}></div>
    <div className={styles.glassBlur}></div>
  </div>
);

export default Projects;