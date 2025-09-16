import Image from "next/image";
import companion_hero from "../../../../public/images/our-business/companion-hero.png";
import companion_bg from "../../../../public/images/our-business/companion-bg.png";
import companion_science from "../../../../public/images/our-business/companion-science.png";
import companion_maths from "../../../../public/images/our-business/companion-maths.png";

import styles from "../../../../styles/OurBusiness/CBSE/Companion.module.scss";

const FEATURES = [
  "All questions of NCERT textbook plus additional questions for practice",
  "Includes important questions of NCERT Exemplar",
  "Topical worksheets mapped to NCERT content",
  "Test papers for examination based on validated patterns",
  "Encourages enquiry based approach along with reinforcement of concepts learnt",
  "Supports 21st century skills and develops holistic learning",
  "Integration of social and emotional learning (SEL) aspects",
  " Integrated with 17 sustainable development goals (SDG’s) provided by United Nations",
  " Digital content powered by Smart DigiBook",
  "Comprehensive teacher’s resource book",
];

export default function Companion() {
  return (
    <section className={styles.companionSection} aria-labelledby="companion-heading">
      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.heroWrapper}>
          <Image
            src={companion_hero}
            alt="Companion series hero"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>

      {/* INTRO */}
      <div className={styles.intro}>
        <h2 id="companion-heading" className={styles.title}>Companion</h2>

        <p className={styles.desc}>
          NCERT Companion for Practice books for students in grades 6 to 10 that are meticulously crafted to align with the NCERT syllabus and adhere to the guidelines of NCF and NEP 2020. The books are designed to enhance students’ problem-solving abilities and foster self-assessment, evaluation and additional practice. Moreover, these books are thoughtfully integrated with Social and Emotional Learning (SEL) and 17 Sustainable Development Goals (SDGs).
        </p>
      </div>

      {/* SUBJECTS - full-bleed background */}
      <div
        className={styles.subjectsSection}
        style={{ "--bg-image": `url(${companion_bg.src})` }}
        aria-labelledby="companion-subjects"
      >
        {/* decorative faint icons in background (left & right) */}
        <div className={styles.subjectIconLeft} aria-hidden="true">
          <Image src={companion_science} alt="" width={200} height={200} style={{ width: "100%", height: "auto" }} priority />
        </div>

        <div className={styles.subjectIconRight} aria-hidden="true">
          <Image src={companion_maths} alt="" width={200} height={200} style={{ width: "100%", height: "auto" }} priority />
        </div>

        <div className={styles.subjectsInner}>
          <h3 id="companion-subjects" className={styles.sectionTitle}>Subjects</h3>

          <div className={styles.subjectsContent}>
            <ul className={styles.subjectList}>
              <li className={styles.subjectItem}>Do and Learn Science</li>
              <li className={styles.subjectItem}>Do and Learn Mathematics</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className={styles.featuresSection}>
        <h3 className={styles.sectionTitle}>Features</h3>

        <ul className={styles.featuresGrid}>
          {FEATURES.map((item, i) => (
            <li className={styles.featureItem} key={i}>
              {item}
            </li>
          ))}
        </ul>

        <div className={styles.ctaWrap}>
          <a href="#" className={styles.ctaBtn}>Know More Details</a>
        </div>
      </div>
    </section>
  );
}
