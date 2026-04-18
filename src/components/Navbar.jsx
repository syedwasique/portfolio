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
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleLinkClick = (href) => {
    setMenuOpen(false);
    // Give menu time to close before scrolling
    setTimeout(() => {
      const el = document.getElementById(href.substring(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#home" className={styles.logo} aria-label="Wasique Rizvi" onClick={() => setMenuOpen(false)}>
          <span className={styles.logoMark}>
            <span className={styles.logoW}>W</span>
            <span className={styles.logoR}>R</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Main navigation">
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

        {/* Hamburger button */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul className={styles.mobileNavList}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`${styles.mobileNavLink} ${activeSegment === link.href ? styles.mobileActive : ''}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Navbar;
