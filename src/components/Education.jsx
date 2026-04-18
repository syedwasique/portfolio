import { FaGraduationCap } from 'react-icons/fa';
import styles from './Education.module.css';

const EDUCATION_DATA = [
  {
    institution: "Bahria University Karachi",
    degree: "B.Sc. Computer Science",
    years: "2023–Present"
  },
  {
    institution: "Usman Public School System",
    degree: "HSC, Karachi Board",
    years: "2020–2022"
  },
  {
    institution: "The City School",
    degree: "GCE O-Level, Pre-Medical",
    years: "2019–2020"
  }
];

const Education = () => {
  return (
    <section id="education" className={styles.educationSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionHeading}>
          <span>Education</span>
        </h2>

        <div className={styles.cardsRow}>
          {EDUCATION_DATA.map((edu, index) => (
            <div
              key={index}
              className={`${styles.eduCard} ${index === EDUCATION_DATA.length - 1 ? styles.lastCard : ''}`}
            >
              <div className={styles.iconWrapper}>
                <FaGraduationCap className={styles.icon} />
              </div>
              <h3 className={styles.institution}>{edu.institution}</h3>
              <p className={styles.degree}>{edu.degree}</p>
              <span className={`${styles.years} code-font`}>{edu.years}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;