import Image from "next/image";
import rise_hero1 from "../../../../public/images/our-business/rise-hero1.png";
import rise_hero2 from "../../../../public/images/our-business/rise-hero2.png";
import rise_subject from "../../../../public/images/our-business/rise-subject.png";
import rise_bg from "../../../../public/images/our-business/rise-bg.png";
import rise_subject_crosslefttop from "../../../../public/images/our-business/rise-subject-crosslefttop.png";
import rise_subject_crossrightbottom from "../../../../public/images/our-business/rise-subject-crossrightbottom.png";

import styles from "../../../../styles/OurBusiness/CBSE/Rise.module.scss";
import Link from "next/link";

const FEATURES = [
  "Book follows known to unknown method of learning",
  "Application based learning related to living world",
  "Integration of social and emotional learning (SEL) aspects",
  "Inter subject and inter disciplinary learning",
  "Fully illustrated with many fun and exciting activities",
  "Digital content powered by Smart Digibook",
  "Accompanied with RISE School Software",
  "Comprehensive teacher’s resource book",
];

export default function Rise() {
  return (
    <section className={styles.riseSection} aria-labelledby="rise-heading">
      {/* Desktop hero */}
      <div className={styles.heroDesktop}>
        <div className={styles.heroWrapperDesktop}>
          <Image
            src={rise_hero1}
            alt="RISE hero image"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>

      {/* Mobile hero */}
      <div className={styles.heroMobile}>
        <div className={styles.heroWrapperMobile}>
          <Image
            src={rise_hero2}
            alt="RISE hero image mobile"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>

      {/* Intro */}
      <div className={styles.intro}>
        <h2 id="rise-heading" className={styles.title}>
          Rise
        </h2>

        <p className={styles.desc}>
          Books for grades K to 12 which are based on the CBSE and ICSE
          curriculum. These books are aligned to the vision of NEP 2020, NCF-FS
          2022 and NCF-SE 2023. Objective of the series is to introduce vital
          concepts in an interactive and engaging manner. Well researched and
          reviewed content developed by renowned CBSE authors.
        </p>
      </div>

      {/* Subjects (uses rise_bg as background) */}
      <div
        className={styles.subjectsSection}
        style={{ "--bg-image": `url(${rise_bg.src})` }}
        aria-labelledby="subjects-heading"
      >
        <div className={styles.subjectsInner}>
          <h3 id="subjects-heading" className={styles.sectionTitle}>
            Subjects
          </h3>

          <div className={styles.subjectsGrid}>
            <div className={styles.subjectImage}>
              {/* Left Top Cross */}
              <div className={styles.crossLeftTop} aria-hidden="true">
                <Image
                  src={rise_subject_crosslefttop}
                  alt=""
                  width={100}
                  height={100}
                  className={styles.crossImg}
                  priority
                />
              </div>

              {/* Subject Illustration */}
              <Image
                src={rise_subject}
                alt="School subjects illustration"
                width={400}
                height={250}
                className={styles.subjectMain}
                priority
              />

              {/* Right Bottom Cross */}
              <div className={styles.crossRightBottom} aria-hidden="true">
                <Image
                  src={rise_subject_crossrightbottom}
                  alt=""
                  width={140}
                  height={140}
                  className={styles.crossImg}
                  priority
                />
              </div>
            </div>

            <div className={styles.subjectLists}>
              <ul>
                <li>English</li>
                <li>Hindi</li>
                <li>Science</li>
                <li>Mathematics</li>
                <li>Social Studies</li>
                <li>Environmental Studies</li>
                <li>Information Technology</li>
              </ul>

              <ul>
                <li>General Knowledge</li>
                <li>Physical Education</li>
                <li>Computer Science</li>
                <li>Artificial Intelligence</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className={styles.featuresSection}>
        <h3 className={styles.sectionTitle}>Features</h3>

        <ul className={styles.featuresGrid}>
          {FEATURES.map((f, idx) => (
            <li key={idx} className={styles.featureItem}>
              {f}
            </li>
          ))}
        </ul>

        <div className={styles.ctaWrap}>
          <Link href={"https://ecatalogue.navneet.com/brand/rise/"} target="_blank" className={styles.ctaBtn}>
            Know More Details
          </Link>
        </div>
      </div>
    </section>
  );
}
