import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import styles from './Projects.module.css';

const PROJECTS_DATA = [
  {
    title: "Perfume Store E-Commerce",
    description: "Full-stack store with admin dashboard, auth, and Nodemailer for order confirmations.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Firebase"],
    github: "#",
    demo: "#",
    color: "cyan"
  },
  {
    title: "Shoe Store E-Commerce",
    description: "Product browsing, cart functionality, and checkout with a clean, modern UI.",
    tech: ["React", "Node.js", "PostgreSQL", "Git"],
    github: "#",
    demo: "#",
    color: "violet"
  },
  {
    title: "Simon Memory Game",
    description: "Interactive browser game with audio/visual feedback based on the classic Simon game.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
    color: "cyan"
  },
  {
    title: "Voice Assistant",
    description: "Speech recognition + TTS for voice-controlled tasks and home automation.",
    tech: ["Python"],
    github: "#",
    demo: "#",
    color: "violet"
  },
  {
    title: "Restaurant Management System",
    description: "Order, inventory & customer management system designed for small restaurants.",
    tech: ["Python"],
    github: "#",
    demo: "#",
    color: "cyan"
  },
  {
    title: "Chat Hub",
    description: "GUI-based real-time chat application built with OOP principles.",
    tech: ["C++"],
    github: "#",
    demo: "#",
    color: "violet"
  },
  {
    title: "Library Management System",
    description: "Book tracking, lending & member management system.",
    tech: ["C++"],
    github: "#",
    demo: "#",
    color: "cyan"
  }
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionHeading}>
          <span className="code-font">// Featured Projects</span>
        </h2>
        
        <div className={styles.grid}>
          {PROJECTS_DATA.map((project, index) => (
            <div key={index} className={`${styles.card} ${styles[project.color]}`}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <div className={styles.cardLinks}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.iconBtn}>
                    <FaGithub />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.iconBtn}>
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              
              <p className={styles.cardDescription}>{project.description}</p>
              
              <div className={styles.techStack}>
                {project.tech.map((tech, i) => (
                  <span key={i} className={`${styles.techPill} code-font`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
