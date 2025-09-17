// File: TopScorer.jsx
import React from "react";
import Image from "next/image";

// Images
import top_scorer_hero_dekstop from "../../../../../public/images/our-business/top-scorer-hero-dekstop.png";
import top_scorer_hero_mobile from "../../../../../public/images/our-business/edtech-toptech-mobile-hero.png";
import edtech_toptech_topclass_logo from "../../../../../public/images/our-business/edtech-toptech-topclass-logo.png";
import checkmar_icon from "../../../../../public/images/our-business/checkmark-icon.svg";

// styles
import styles from "../../../../../styles/OurBusiness/EdTech/TopScorer.module.scss";

const features = [
  { text: "Authorised Curriculum" },
  { text: "Real-time Reports" },
  { text: "Interesting and Fun Learning" },
  { text: "Relevant Analytics" },
  { text: "Exciting AR Content", fullWidth: true },
];

const studentItems = [
  { text: "Online Learning" },
  { text: "Online Homework" },
  { text: "Online Tests" },
  { text: "Regular Performance Results" },
];

export default function TopScorer() {
  return (
    <main className={styles.main}>
      {/* HERO */}
      <section className={styles.hero} aria-hidden="true">
        <div className={styles.desktopHero}>
          <div className={styles.heroFill}>
            <Image
              src={top_scorer_hero_dekstop}
              alt="TopScorer hero desktop"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1600px"
              className={styles.heroImage}
            />
          </div>
        </div>

        <div className={styles.mobileHero}>
          <Image
            src={top_scorer_hero_mobile}
            alt="TopScorer hero mobile"
            width={1200}
            height={600}
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* BRAND LOGO */}
      <div className={styles.logoWrap} aria-hidden>
        <Image
          src={edtech_toptech_topclass_logo}
          alt="TopTech logo"
          width={220}
          height={64}
        />
      </div>

      {/* INTRO */}
      <section className={styles.intro} aria-labelledby="topscorer-heading">
        <div className={styles.brandLogo}></div>

        <p className={styles.description}>
          TopScorer provides teachers with the access and ability to control
          online learning like never before with deep controls and analytics for
          principals and school owners. Assignments in the form of videos,
          documents, essays or worksheets can be offered to students with the
          TopScorer application. Teachers can assign them anytime and anywhere
          from the app and use those assignments to measure their students'
          performance.
        </p>
      </section>

      {/* FEATURE STRIP */}
      <section className={styles.featureStrip}>
        <div className={styles.featureWrap}>
          <h3 className={styles.featureHeading}>
            It’s a treat for teachers and school admins with
          </h3>

          <div className={styles.featureGrid}>
            {features.map((f, i) => (
              <div
                key={i}
                className={`${styles.featureCard} ${
                  f.fullWidth ? styles.full : ""
                }`}
              >
                <span className={styles.bullet} aria-hidden>
                  •
                </span>
                <span>{f.text}</span>
              </div>
            ))}
          </div>

          <a
            className={styles.visitBtn}
            href="https://www.navneettoptech.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
        </div>
      </section>

      {/* BLUE BENEFITS BAR */}
      <section className={styles.blueBar} aria-hidden>
        <div className={styles.blueInner}>
          <h3 className={styles.blueTitle}>
            It also makes studies simple for students with
          </h3>

          <ul className={styles.studentList}>
            {studentItems.map((item, i) => (
              <li key={i} className={styles.studentItem}>
                <span className={styles.icon} aria-hidden>
                  <Image
                    src={checkmar_icon}
                    alt=""
                    width={16}
                    height={16}
                  />
                </span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta} aria-labelledby="contact-head">
        <p id="contact-head" className={styles.ctaText}>
          For a Free Demo call :{" "}
          <a href="tel:18002666676" className={styles.phone}>
            1800 266 6676
          </a>
        </p>

        <a href="mailto:info@navneet.com" className={styles.emailBtn}>
          Email Us
        </a>
      </section>
    </main>
  );
}
