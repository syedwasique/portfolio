import styles from './Experience.module.css';

const EXPERIENCE_DATA = [
  {
    title: "O-Level Instructor",
    company: "Udemy",
    date: "Jun 2019 \u2013 Present",
    description: "Designed and delivered O-Level courses",
    color: "violet"
  },
  {
    title: "Content Creator",
    company: "Self-Employed",
    date: "2021 \u2013 Present",
    description: "Video content & reels for social media growth",
    color: "cyan"
  },
  {
    title: "Affiliate Marketer",
    company: "Freelance",
    date: "2021 \u2013 2023",
    description: "Managed campaigns to optimize traffic and conversions",
    color: "violet"
  },
  {
    title: "Research Analyst",
    company: "SilverLight Research",
    date: "Feb \u2013 Sep 2025",
    description: "Connected subject matter experts for client projects",
    color: "cyan"
  }
];

const Experience = () => {
  return (
    <section id="experience" className={styles.experienceSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionHeading}>
          <span className="code-font">experience.timeline</span>
        </h2>
        
        <div className={styles.timeline}>
          {EXPERIENCE_DATA.map((item, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={`${styles.timelineDot} ${styles[item.color]}`}></div>
              <div className={`${styles.timelineContent} ${styles[item.color]}`}>
                <div className={styles.timelineHeader}>
                  <h3 className={styles.title}>{item.title} \u2013 <span className={styles.company}>{item.company}</span></h3>
                  <span className={`${styles.date} code-font`}>{item.date}</span>
                </div>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
