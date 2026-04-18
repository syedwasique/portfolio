import { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import cvFile from '../assets/cv/wasique-cv.pdf';

const TITLES = [
  "Full Stack Developer",
  "Digital Craftsman",
  "UI/UX Enthusiast",
  "Problem Solver"
];

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

        <h1 className={styles.title} aria-label="I'm Wasique Rizvi">
          {/* "I'm " — plain white, no gradient */}
          <span className={styles.plainPrefix}>I&#39;m&nbsp;</span>

          {/* "Wasique" — cyan→white gradient, letter-by-letter animation */}
          <span className={styles.gradientWord}>
            {"Wasique".split('').map((char, i) => (
              <span
                key={`w-${i}`}
                className={styles.animatedLetter}
                style={{ animationDelay: `${0.15 + i * 0.07}s` }}
              >
                {char}
              </span>
            ))}
          </span>

          <span className={styles.wordGap}>&nbsp;</span>

          {/* "Rizvi" — cyan→white gradient, letter-by-letter animation */}
          <span className={styles.gradientWord}>
            {"Rizvi".split('').map((char, i) => (
              <span
                key={`r-${i}`}
                className={styles.animatedLetter}
                style={{ animationDelay: `${0.65 + i * 0.07}s` }}
              >
                {char}
              </span>
            ))}
          </span>
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