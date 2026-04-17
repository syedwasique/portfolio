import { useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiCplusplus, SiExpress, SiJsonwebtokens, SiMysql, SiPostgresql, SiFirebase, SiCanva, SiNextdotjs } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { FiDatabase, FiTool, FiGrid, FiCode, FiLayers, FiUsers } from 'react-icons/fi';
import styles from './Skills.module.css';

const SKILLS_DATA = [
  {
    id: "all",
    category: "All Skills",
    icon: <FiGrid />,
    items: [
      { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
      { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
      { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
      { name: "SQL", icon: <SiMysql color="#4479A1" /> },
      { name: "Python", icon: <FaPython color="#3776AB" /> },
      { name: "C++", icon: <SiCplusplus color="#00599C" /> },
      { name: "Java", icon: <FaJava color="#007396" /> },
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
      { name: "Express.js", icon: <SiExpress color="#FFF" /> },
      { name: "JWT", icon: <SiJsonwebtokens color="#000000" /> },
      { name: "NextAuth.js", icon: <SiNextdotjs color="#FFF" /> },
      { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
      { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
      { name: "VS Code", icon: <VscVscode color="#007ACC" /> },
      { name: "Git", icon: <FaGithub color="#F05032" /> },
      { name: "GitHub", icon: <FaGithub color="#FFF" /> },
      { name: "Postman", icon: null },
      { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
      { name: "Nodemailer", icon: null },
      { name: "Canva", icon: <SiCanva color="#00C4CC" /> },
      { name: "UI/UX", icon: null },
    ]
  },
  {
    id: "languages",
    category: "Languages",
    icon: <FiCode />,
    items: [
      { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
      { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
      { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
      { name: "SQL", icon: <SiMysql color="#4479A1" /> },
      { name: "Python", icon: <FaPython color="#3776AB" /> },
      { name: "C++", icon: <SiCplusplus color="#00599C" /> },
      { name: "Java", icon: <FaJava color="#007396" /> }
    ]
  },
  {
    id: "frameworks",
    category: "Frameworks & Libraries",
    icon: <FiLayers />,
    items: [
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
      { name: "Express.js", icon: <SiExpress color="#FFF" /> },
      { name: "JWT", icon: <SiJsonwebtokens color="#000000" /> },
      { name: "NextAuth.js", icon: <SiNextdotjs color="#FFF" /> }
    ]
  },
  {
    id: "databases",
    category: "Databases",
    icon: <FiDatabase />,
    items: [
      { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
      { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> }
    ]
  },
  {
    id: "tools",
    category: "Tools & Platforms",
    icon: <FiTool />,
    items: [
      { name: "VS Code", icon: <VscVscode color="#007ACC" /> },
      { name: "Git", icon: <FaGithub color="#F05032" /> },
      { name: "GitHub", icon: <FaGithub color="#FFF" /> },
      { name: "Postman", icon: null },
      { name: "PyCharm", icon: null },
      { name: "Cursor", icon: null }
    ]
  },
  {
    id: "services",
    category: "Services",
    icon: <FiGrid />,
    items: [
      { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
      { name: "Nodemailer", icon: null },
      { name: "EmailJS", icon: null },
      { name: "Resend", icon: null }
    ]
  },
  {
    id: "softskills",
    category: "Design & Soft Skills",
    icon: <FiUsers />,
    items: [
      { name: "Canva", icon: <SiCanva color="#00C4CC" /> },
      { name: "UI/UX", icon: null },
      { name: "Problem-Solving", icon: null },
      { name: "Leadership", icon: null },
      { name: "Team Collaboration", icon: null },
      { name: "Adaptability", icon: null }
    ]
  }
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [visibleSkills, setVisibleSkills] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentSkills = SKILLS_DATA.find(skill => skill.id === activeTab) || SKILLS_DATA[0];

  useEffect(() => {
    setIsAnimating(true);

    // Animate skills coming in like a train
    const timer = setTimeout(() => {
      setVisibleSkills([]);

      currentSkills.items.forEach((_, index) => {
        setTimeout(() => {
          setVisibleSkills(prev => [...prev, index]);
        }, index * 80);
      });

      setIsAnimating(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionHeading}>
          <span>Technical Expertise</span>
        </h2>

        {/* Horizontal Tabs */}
        <div className={styles.tabsContainer}>
          {SKILLS_DATA.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className={styles.tabIcon}>{tab.icon}</span>
              <span className={styles.tabText}>{tab.category}</span>
              {activeTab === tab.id && <span className={styles.tabGlow} />}
            </button>
          ))}
        </div>

        {/* Skills Train Container */}
        <div className={styles.skillsTrainWrapper}>
          <div className={`${styles.skillsTrain} ${isAnimating ? styles.trainPause : styles.trainRun}`}>
            {currentSkills.items.map((skill, index) => (
              <div
                key={index}
                className={`${styles.skillCard} ${visibleSkills.includes(index) ? styles.skillVisible : styles.skillHidden}`}
              >
                <div className={styles.skillCardInner}>
                  <div className={styles.skillIconWrapper}>
                    {skill.icon ? (
                      <span className={styles.skillIcon}>{skill.icon}</span>
                    ) : (
                      <span className={styles.skillIconPlaceholder}>⚡</span>
                    )}
                  </div>
                  <div className={styles.skillInfo}>
                    <h4 className={styles.skillName}>{skill.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;