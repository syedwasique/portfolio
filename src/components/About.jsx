import { useState } from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FiUser, FiBriefcase, FiMapPin, FiMail, FiCalendar } from 'react-icons/fi';
import styles from './About.module.css';
import profilePhoto from '../assets/pics/wasique.jpeg'; // ← correct this path

const EXPERIENCE_DATA = [
  {
    title: "O-Level Instructor",
    company: "Udemy",
    date: "Jun 2019 – Present",
    description: "Designed and delivered O-Level courses, creating comprehensive curriculum and engaging learning materials for students worldwide.",
    color: "cyan",
    icon: "📚"
  },
  {
    title: "Content Creator",
    company: "Self-Employed",
    date: "2021 – Present",
    description: "Video content & reels for social media growth. Created engaging content that reached millions of viewers across platforms.",
    color: "violet",
    icon: "🎬"
  },
  {
    title: "Affiliate Marketer",
    company: "Freelance",
    date: "2021 – 2023",
    description: "Managed campaigns to optimize traffic and conversions. Developed strategies that increased ROI by 40% within first year.",
    color: "cyan",
    icon: "📈"
  },
  {
    title: "Research Analyst",
    company: "SilverLight Research",
    date: "Feb – Sep 2025",
    description: "Connected subject matter experts for client projects. Facilitated knowledge exchange between industry leaders and clients.",
    color: "violet",
    icon: "🔬"
  }
];

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionHeading}>
          <span>About Me</span>
        </h2>

        <div className={styles.grid}>
          {/* Left Side - Profile Card */}
          <div className={styles.profileCard}>
            <div className={styles.profileImageWrapper}>
              <div className={styles.circleBorder}>
                <div className={styles.circleInner}>
                  <img
                    src={profilePhoto}
                    alt="Wasique Rizvi"
                    className={styles.profilePhoto}
                  />
                </div>
              </div>
            </div>

            <div className={styles.profileInfo}>
              <h3 className={styles.profileName}>Wasique Rizvi</h3>
              <p className={styles.profileTagline}>Full Stack Developer & CS Student</p>

              <div className={styles.profileDetails}>
                <div className={styles.detailItem}>
                  <FiMapPin className={styles.detailIcon} />
                  <span>Pakistan</span>
                </div>
                <div className={styles.detailItem}>
                  <FiMail className={styles.detailIcon} />
                  <span> syedmuhammadw86@gmail.com</span>
                </div>
                <div className={styles.detailItem}>
                  <FiCalendar className={styles.detailIcon} />
                  <span>Available for opportunities</span>
                </div>
              </div>

              <button 
                className={styles.connectBtn}
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <FiMail className={styles.btnIcon} />
                Let's Connect
              </button>

              <div className={styles.socialLinks}>
                <a href="https://github.com/syedwasique" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/wasique-rizvi-00ba86182/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://wa.me/923002072477" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="WhatsApp">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Tabs Content */}
          <div className={styles.contentCard}>
            <div className={styles.tabsContainer}>
              <button
                className={`${styles.tab} ${activeTab === 'about' ? styles.tabActive : ''}`}
                onClick={() => setActiveTab('about')}
              >
                <FiUser className={styles.tabIcon} />
                About Me
              </button>
              <button
                className={`${styles.tab} ${activeTab === 'journey' ? styles.tabActive : ''}`}
                onClick={() => setActiveTab('journey')}
              >
                <FiBriefcase className={styles.tabIcon} />
                My Journey
              </button>
            </div>

            <div className={styles.tabContent}>
              {activeTab === 'about' ? (
                <div className={styles.aboutContent}>
                  <p className={styles.bio}>
                    I'm a passionate <span className={styles.highlight}>Full Stack Developer</span> and <span className={styles.highlight}>Computer Science student </span>
                    dedicated to building innovative digital solutions. With a unique blend of technical expertise and creative thinking,
                    I transform ideas into seamless, user-friendly applications.
                  </p>
                  <p className={styles.bio}>
                    My journey in tech started with a curiosity for how things work, which evolved into a deep passion for coding and
                    problem-solving. I believe in writing clean, efficient code and creating experiences that make a difference.
                  </p>

                  <div className={styles.interestGrid}>
                    <div className={styles.interestItem}>
                      <span className={styles.interestIcon}>💻</span>
                      <span>Web Development</span>
                    </div>
                    <div className={styles.interestItem}>
                      <span className={styles.interestIcon}>🚀</span>
                      <span>Problem Solving</span>
                    </div>
                    <div className={styles.interestItem}>
                      <span className={styles.interestIcon}>🎨</span>
                      <span>UI/UX Design</span>
                    </div>

                  </div>

                  <div className={styles.quoteBox}>
                    <span className={styles.quoteIcon}>"</span>
                    <p>Code is poetry written in logic. Every line tells a story of problem-solving and creativity.</p>
                  </div>
                </div>
              ) : (
                <div className={styles.journeyContent}>
                  <div className={styles.timeline}>
                    {EXPERIENCE_DATA.map((item, index) => (
                      <div key={index} className={`${styles.timelineItem} ${styles[item.color]}`}>
                        <div className={styles.timelineIcon}>
                          <span>{item.icon}</span>
                        </div>
                        <div className={styles.timelineContent}>
                          <div className={styles.timelineHeader}>
                            <div>
                              <h4 className={styles.timelineTitle}>{item.title}</h4>
                              <span className={styles.timelineCompany}>{item.company}</span>
                            </div>
                            <span className={styles.timelineDate}>{item.date}</span>
                          </div>
                          <p className={styles.timelineDescription}>{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>


                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;