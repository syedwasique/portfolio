import { FaHeart } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className="code-font">
        Designed & Built by Wasique © 2025 
        <span className={styles.heart}> <FaHeart /> </span>
      </p>
    </footer>
  );
};

export default Footer;
