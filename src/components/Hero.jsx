import { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import cvFile from '../assets/cv/wasique-cv.pdf';

const TITLES = [
  "Full Stack Developer",
  "Digital Craftsman",
  "UI/UX Enthusiast",
  "Problem Solver"
];

<<<<<<< HEAD
const HERO_NAME = ["WASIQUE RIZVI"];
=======
const HERO_NAME = ["Wasique", "Rizvi"];
>>>>>>> 7fde50d (Updated project files)

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentFullText = TITLES[titleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % TITLES.length);
      } else {
        setCurrentText((prev) =>
          isDeleting
            ? currentFullText.substring(0, prev.length - 1)
            : currentFullText.substring(0, prev.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex]);

  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.backgroundGlow}></div>

      <div className={styles.content}>
        <h1 className={styles.title} aria-label="Wasique Rizvi">
<<<<<<< HEAD
          {HERO_NAME.map((line, lineIndex) => (
            <span key={line} className={styles.nameLine}>
              {line.split('').map((char, charIndex) => (
                char === ' ' ? (
                  <span
                    key={`${line}-${charIndex}`}
                    className={styles.nameSpace}
                    aria-hidden="true"
                  >&nbsp;</span>
                ) : (
                  <span
                    key={`${line}-${charIndex}`}
                    className={styles.animatedLetter}
                    style={{ animationDelay: `${lineIndex * 0.45 + charIndex * 0.08}s` }}
                  >
                    {char}
                  </span>
                )
=======
          {HERO_NAME.map((word, wordIndex) => (
            <span key={word} className={styles.nameWord}>
              {word.split('').map((char, charIndex) => (
                <span
                  key={`${word}-${charIndex}`}
                  className={styles.animatedLetter}
                  style={{ animationDelay: `${wordIndex * 0.3 + charIndex * 0.08}s` }}
                >
                  {char}
                </span>
>>>>>>> 7fde50d (Updated project files)
              ))}
              {wordIndex < HERO_NAME.length - 1 && <span className={styles.space}>&nbsp;</span>}
            </span>
          ))}
        </h1>

        <h2 className={styles.subtitle}>
          <span className={styles.typewriter}>{currentText}</span>
          <span className={styles.cursor}></span>
        </h2>

        <p className={styles.tagline}>
          Building digital experiences that live on the edge of design and engineering.
        </p>

        <div className={styles.ctaGroup}>
          <a 
            href="#projects" 
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View My Work
          </a>
          <a href={cvFile} download="wasique-cv.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">
            Download CV
          </a>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <div className={styles.arrows}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
