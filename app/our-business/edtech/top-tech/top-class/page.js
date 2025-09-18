import React from "react";
import Image from "next/image";

// Images
import top_class_hero_dekstop from "../../../../../public/images/our-business/top-class-hero-dekstop.png";
import top_class_hero_mobile from "../../../../../public/images/our-business/edtech-toptech-mobile-hero.png";
import top_class_info_bg from "../../../../../public/images/our-business/top-class-info-bg.png";
import edtech_toptech_topclass_logo from "../../../../../public/images/our-business/edtech-toptech-topclass-logo.png";
import checkmar_icon from "../../../../../public/images/our-business/checkmark-icon.svg";

// Styles
import styles from "../../../../../styles/OurBusiness/EdTech/TopClass.module.scss";

export default function TopClass() {
  const stats = [
    { num: "2000+", label: "Institutions using TOPClass" },
    { num: "10000+", label: "Teachers trained" },
    { num: "1000000+", label: "Students learnt" },
    { num: "150+", label: "Team of authors and illustrators" },
    { num: "50000+", label: "Minutes of animated content" },
  ];

  const leftCardItems = [
    "Unique assignments for each chapter",
    "Mapped to globally recognized domain (21st century)",
    "Skills and life competencies",
    "Facilitates cognitive, psychomotor and effective domain skills",
    "Follows NEP 2020 guidelines",
    "Application of conceptual knowledge in real-life situations",
  ];

  const rightCardItems = [
    "In-depth concept explanation",
    "Experiments, examples, activities",
    "Classic 2D-3D animations",
    "NCERT Syllabus",
  ];

  return (
    <main className={styles.mainsection}>
      <section
        className={styles.topClassSection}
        aria-labelledby="topclass-heading"
      >
        {/* HERO */}
        <div className={styles.heroWrapper}>
          <div className={styles.desktopHero}>
            <div className={styles.heroFill}>
              <Image
                src={top_class_hero_dekstop}
                alt="TopClass hero desktop"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1600px"
                className={styles.heroImage}
              />
            </div>
          </div>
          <div className={styles.mobileHero}>
            <Image
              src={top_class_hero_mobile}
              alt="TopClass hero mobile"
              width={1200}
              height={800}
              priority
              sizes="100vw"
            />
          </div>
        </div>

        {/* STATS (overlay) */}
        <div
          className={styles.statsCard}
          role="list"
          aria-label="TopClass key metrics"
        >
          {stats.map((s, idx) => (
            <div className={styles.stat} role="listitem" key={idx}>
              <div className={styles.number}>{s.num}</div>
              <div className={styles.label}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* LOGO */}
        <div className={styles.logoWrapper}>
          <Image
            src={edtech_toptech_topclass_logo}
            alt="TopClass logo"
            width={220}
            height={64}
            className={styles.heroLogo}
            priority
          />
        </div>

        {/* INTRO */}
        <div className={styles.intro}>
          <h2 className={styles.title}>Smart Teaching beyond Chalk and Talk</h2>
          <p className={styles.lead}>
            Keeping the curriculum consistent with generation ‘Z’, NAVNEET
            TOPTECH has been redefining the teaching and learning experience
            with TopClass. An eLearning solution that focuses on simplifying the
            teaching process and enhances the learning experience in schools.
            TopClass builds a world beyond the Chalk and Talk method and
            stimulates the teaching and learning experience, thus making
            teaching and learning easier and faster.
          </p>
        </div>

        {/* INFO SECTION */}
        <div className={styles.infoStrip} aria-hidden="true">
          <div className={styles.infoBgWrap}>
            <Image
              src={top_class_info_bg}
              alt=""
              fill
              className={styles.infoBg}
              priority
            />
          </div>

          <div className={styles.infoCards}>
            <div className={styles.infoCard}>
              <h3 className={styles.cardTitle}>
                Extended Learning Assignments
              </h3>
              <ul className={styles.checkList}>
                {leftCardItems.map((text, i) => (
                  <li key={i}>
                    <span className={styles.checkIcon}>
                      <Image
                        src={checkmar_icon}
                        alt=""
                        width={24}
                        height={24}
                      />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.cardTitle}>
                Digital Classroom Solutions for Stateboard
              </h3>
              <ul className={styles.checkList}>
                {rightCardItems.map((text, i) => (
                  <li key={i}>
                    <span className={styles.checkIcon}>
                      <Image
                        src={checkmar_icon}
                        alt=""
                        width={24}
                        height={24}
                      />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className={styles.callSection}>
          <p>
            For a Free Demo call :{" "}
            <a href="tel:18002666676" className={styles.phone}>
              1800 266 6676
            </a>
          </p>
          <a href="mailto:info@navneet.com" className={styles.emailBtn}>
            Email Us
          </a>
        </div>
      </section>
    </main>
  );
}
