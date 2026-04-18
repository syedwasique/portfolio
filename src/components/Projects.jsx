import { FaGithub } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Projects.module.css';

// Project images — correct these paths
import proj1Img from '../assets/pics/dream.jpeg';
import proj2Img from '../assets/pics/shoe.jpeg';
import proj3Img from '../assets/pics/phantom.jpeg';
import proj4ImgA from '../assets/pics/voice.jpeg';
import proj4ImgB from '../assets/pics/voice2.jpeg';
import proj5Img from '../assets/pics/restaurant.jpeg';
import proj6Img from '../assets/pics/facial.jpeg';

const PROJECTS_DATA = [
  {
    title: "Perfume Store E-Commerce",
    description: "Full-stack e-commerce platform with an admin dashboard, Firebase authentication, and Nodemailer integration for automated order confirmation emails.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Firebase", "email.js"],
    github: "https://github.com/FaisalSidd123/dream-ecommerce-",
    color: "cyan",
    images: [proj1Img],
  },
  {
    title: "Shoe Store E-Commerce",
    description: "Feature-rich shoe store with product browsing, cart functionality, and a clean checkout flow. Built with a modern UI and full backend support.",
    tech: ["React", "Node.js", "PostgreSQL", "Git"],
    github: "https://github.com/syedwasique/ecommerce-website",
    color: "violet",
    images: [proj2Img],
  },
  {
    title: "Phantom Gambit",
    description: "A strategic browser-based game with immersive mechanics and engaging gameplay, built collaboratively.",
    tech: ["JavaScript", "HTML", "CSS", "react.js", "email.js", "firebase"],
    github: "https://github.com/FaisalSidd123/Phantom-Gambit-wasique",
    color: "cyan",
    images: [proj3Img],
  },
  {
    title: "Voice Assistant",
    description: "Python-powered voice assistant with speech recognition and TTS capabilities, designed for voice-controlled tasks and home automation.",
    tech: ["Python", "SpeechRecognition", "TTS"],
    github: "https://github.com/syedwasique/virtual-assisstant",
    color: "violet",
    images: [proj4ImgA, proj4ImgB],
  },
  {
    title: "Restaurant Management System",
    description: "Comprehensive order, inventory & customer management system designed for small restaurants, streamlining daily operations.",
    tech: ["Python"],
    github: "https://github.com/syedwasique/resturant",
    color: "cyan",
    images: [proj5Img],
  },
  {
    title: "Facial Recognition System",
    description: "Real-time facial recognition that identifies and tracks faces using computer vision techniques.",
    tech: ["Python", "OpenCV"],
    github: "https://github.com/syedwasique/facial-recog",
    color: "violet",
    images: [proj6Img],
  },
];

// ── Image slider (used in Cards and Modals) ─────────────────────────
const ImageSlider = ({ images, title, isCard = false }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <>
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`${title} screenshot ${i + 1}`}
          className={`${isCard ? styles.cardImage : styles.modalSlideImg} ${images.length > 1 ? (i === current ? styles.slideActive : styles.slideHidden) : ''
            }`}
        />
      ))}
      {images.length > 1 && (
        <div className={styles.slideDots}>
          {images.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                setCurrent(i);
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};

// ── Main component ──────────────────────────────────────────────────
const Projects = () => {
  const [selected, setSelected] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOpenModal = (project) => {
    setIsAnimating(true);
    setSelected({ ...project, index: project.index });
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleCloseModal = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelected(null);
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionHeading}>
          <span>Featured Projects</span>
        </h2>

        <div className={styles.grid}>
          {PROJECTS_DATA.map((project, index) => (
            <div
              key={index}
              className={`${styles.card} ${styles[project.color]}`}
              onClick={() => handleOpenModal({ ...project, index })}
            >
              <div className={styles.cardTopBar} />

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardGithub}
                onClick={(e) => e.stopPropagation()}
                title="View GitHub Repository"
              >
                <FaGithub size={16} />
              </a>

              <div className={styles.imageWrapper}>
                <ImageSlider images={project.images} title={project.title} isCard={true} />
                <div className={styles.hoverOverlay}>
                  <span className={styles.hoverLabel}>View Project</span>
                </div>
              </div>

              <div className={styles.cardBody}>
                <span className={styles.cardNum}>
                  Project {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>
                <div className={styles.techStack}>
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span key={i} className={`${styles.techPill} code-font`}>{tech}</span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className={`${styles.techPill} code-font`}>
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Book-style Modal (Clean Version) ── */}
      {selected && createPortal(
        <div
          className={`${styles.modalBackdrop} ${isAnimating ? styles.backdropAnimating : ''}`}
          onClick={(e) => e.target === e.currentTarget && handleCloseModal()}
        >
          <div
            className={`${styles.modal} ${styles[selected.color]} ${isAnimating ? styles.modalAnimating : ''}`}
          >
            {/* Book fold decorative element */}
            <div className={styles.bookFold}></div>

            {/* Book spine decorative element */}
            <div className={styles.bookSpine}></div>

            {/* sliding image header */}
            <div className={styles.modalImageWrapper}>
              <ImageSlider images={selected.images} title={selected.title} />
            </div>

            {/* close btn */}
            <button className={styles.modalClose} onClick={handleCloseModal}>✕</button>

            {/* content */}
            <div className={styles.modalContent}>
              <div className={styles.projectBadge}>
                <span className={styles.badgeIcon}>📁</span>
                <span className={styles.badgeText}>Project {String(selected.index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className={styles.modalTitle}>{selected.title}</h3>
              <p className={styles.modalDesc}>{selected.description}</p>

              <p className={styles.modalLabel}>
                <span className={styles.labelDot} /> Technologies Used
              </p>
              <div className={styles.techStack}>
                {selected.tech.map((tech, i) => (
                  <span key={i} className={`${styles.techPill} ${styles.techPillModal} ${styles[`techPill${selected.color}`]} code-font`}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.modalActions}>
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.btnGithub} ${styles[`btnGithub${selected.color}`]}`}
                >
                  <FaGithub size={16} /> View Code on GitHub
                </a>
              </div>
            </div>

            {/* Page curl shadow effect */}
            <div className={styles.pageCurl}></div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Projects;