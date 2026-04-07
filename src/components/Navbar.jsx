import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [activeSegment, setActiveSegment] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      let currentLoc = '';
      for (const section of navLinks) {
        const el = document.getElementById(section.href.substring(1));
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentLoc = section.href;
          }
        }
      }
      if (currentLoc && currentLoc !== activeSegment) {
        setActiveSegment(currentLoc);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSegment]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#home" className={styles.logo} aria-label="Wasique Rizvi - Home">
          <span className={styles.logoMark} aria-hidden="true">
            <span className={styles.logoW}>W</span>
            <span className={styles.logoR}>R</span>
          </span>
        </a>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className={`${styles.navLink} ${activeSegment === link.href ? styles.active : ''}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
