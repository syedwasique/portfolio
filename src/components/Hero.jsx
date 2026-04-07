import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

const TITLES = [
  "Full Stack Developer",
  "React & Node.js Expert",
  "UI/UX Enthusiast",
  "Problem Solver"
];

const HERO_NAME = ["WASIQUE", "RIZVI"];

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
          {HERO_NAME.map((word, wordIndex) => (
            <span key={word} className={styles.nameWord}>
              {word.split('').map((char, charIndex) => {
                const globalIndex = HERO_NAME.slice(0, wordIndex).reduce((acc, w) => acc + w.length, 0) + charIndex;
                return (
                  <span
                    key={`${word}-${charIndex}`}
                    className={styles.animatedLetter}
                    style={{ animationDelay: `${globalIndex * 0.07}s` }}
                  >
                    {char}
                  </span>
                );
              })}
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
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="/cv.pdf" target="_blank" className="btn-outline">Download CV</a>
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
