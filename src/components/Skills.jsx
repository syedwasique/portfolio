import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiCplusplus, SiExpress, SiJsonwebtokens, SiMysql, SiPostgresql, SiFirebase, SiCanva, SiNextdotjs } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import styles from './Skills.module.css';

const SKILLS_DATA = [
  {
    category: "Languages",
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
    category: "Frameworks & Libraries",
    items: [
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
      { name: "Express.js", icon: <SiExpress color="#FFF" /> },
      { name: "JWT", icon: <SiJsonwebtokens color="#000000" /> },
      { name: "NextAuth.js", icon: <SiNextdotjs color="#FFF" /> }
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
      { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> }
    ]
  },
  {
    category: "Tools & Platforms",
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
    category: "Services",
    items: [
      { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
      { name: "Nodemailer", icon: null },
      { name: "EmailJS", icon: null },
      { name: "Resend", icon: null }
    ]
  },
  {
    category: "Design & Soft Skills",
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
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionHeading}>
          <span className="code-font">skills.map(s =&gt; &lt;Tag /&gt;)</span>
        </h2>
        
        <div className={styles.skillsWrapper}>
          {SKILLS_DATA.map((group, index) => (
            <div key={index} className={styles.skillGroup}>
              <h3 className={styles.groupTitle}>{group.category}</h3>
              <div className={styles.tagsContainer}>
                {group.items.map((skill, i) => (
                  <div key={i} className={styles.tagPill}>
                    {skill.icon && <span className={styles.icon}>{skill.icon}</span>}
                    <span className="code-font">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
