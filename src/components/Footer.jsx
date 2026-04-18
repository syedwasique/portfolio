import { FaHeart, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import styles from './Footer.module.css';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' }
];

const Footer = () => {
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const el = document.getElementById(href.substring(1));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>

          <div className={styles.brandSection}>
            <a href="#home" className={styles.logo} aria-label="Wasique Rizvi" onClick={(e) => handleLinkClick(e, '#home')}>
              <span className={styles.logoMark}>
                <span className={styles.logoW}>W</span>
                <span className={styles.logoR}>R</span>
              </span>
            </a>
            <p className={styles.tagline}>
              Building digital experiences that live on the edge of design and engineering.
            </p>
          </div>

          <div className={styles.linksSection}>
            <h3 className={styles.heading}>Quick Links</h3>
            <ul className={styles.navLinks}>
              {navLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.socialSection}>
            <h3 className={styles.heading}>Connect</h3>
            <div className={styles.socialIcons}>
              <a href="https://github.com/syedwasique" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/wasique-rizvi-00ba86182/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://wa.me/923002072477" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>

        </div>

        <div className={styles.bottomBar}>
          <p className="code-font">
            Designed & Built by Wasique © 2026
            <span className={styles.heart}> <FaHeart /> </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
