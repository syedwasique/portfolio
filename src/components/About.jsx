import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionHeading}>
          <span className="code-font">&lt; About Me /&gt;</span>
        </h2>
        
        <div className={styles.grid}>
          <div className={styles.avatarWrapper}>
            <div className={styles.hexagonBox}>
              <div className={styles.hexagonInner}>
                <span className={styles.avatarInitials}>WR</span>
              </div>
              <div className={styles.hexagonGlow}></div>
            </div>
          </div>
          
          <div className={styles.textContent}>
            <p className={styles.bio}>
              Full stack web developer with a broad skill set. I bring hands-on experience in affiliate marketing and content creation, complemented by strong communication skills. Proven ability to design and implement engaging digital solutions, manage marketing campaigns, and effectively collaborate with teams.
            </p>
            
            <div className={styles.statsRow}>
              <div className={styles.statCard}>
                <h3 className={styles.statNumber}>6+</h3>
                <p className="code-font">Years Teaching</p>
              </div>
              <div className={styles.statCard}>
                <h3 className={styles.statNumber}>7+</h3>
                <p className="code-font">Projects Built</p>
              </div>
              <div className={styles.statCard}>
                <h3 className={styles.statNumber}>3</h3>
                <p className="code-font">Languages Mastered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
