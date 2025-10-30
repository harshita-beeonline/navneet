import React from "react";
import Image from "next/image";
import styles from "../../../../styles/OurBusiness/EdTech/Toptech.module.scss";

// Images
import edtech_toptech_dekstop_hero from "../../../../public/images/our-business/edtech-toptech-dekstop-hero.png";
import edtech_toptech_mobile_hero from "../../../../public/images/our-business/edtech-toptech-mobile-hero.png";
import edtech_toptech_info from "../../../../public/images/our-business/edtech-toptech-info.png";
import edtech_toptech_topclass_logo from "../../../../public/images/our-business/edtech-toptech-topclass-logo.png";
import companion_bg from "../../../../public/images/our-business/companion-bg.png";
import Link from "next/link";

export default function Toptech() {
  return (
    <main className={styles.mainsection}>
      <section
        className={styles.toptechSection}
        aria-labelledby="toptech-heading"
      >
        {/* ================= HERO ================= */}
        <div className={styles.heroWrapper}>
          {/* Desktop Hero */}
          <div className={styles.desktopHero}>
            <div className={styles.heroFill}>
              <Image
                src={edtech_toptech_dekstop_hero}
                alt="Navneet Toptech Hero"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1600px"
                className={styles.heroImage}
              />
            </div>
          </div>

          {/* Mobile Hero */}
          <div className={styles.mobileHero}>
            <Image
              src={edtech_toptech_mobile_hero}
              alt="Navneet Toptech Hero Mobile"
              width={1200}
              height={800}
              priority
              sizes="100vw"
            />
          </div>
        </div>

        {/* ================= INTRO ================= */}
        <div className={styles.intro}>
          <p>
            NAVNEET TOPTECH is an evolving EdTech committed towards equipping
            educational institutions with excellent digital solutions. Founded
            in 2008, NAVNEET TOPTECH is a Navneet FutureTech initiative which is
            a 100% subsidiary of Navneet Education Limited. Our aim is to go
            beyond traditional teaching methods and stimulate the right learning
            environment for schools in India. We have worked with 4000+ schools
            across CBSE, Maharashtra and Gujarat boards. By integrating
            technology with learning we aim to impact the lives of students,
            teachers and educators across India.
          </p>

          <a
            href="https://www.navneettoptech.com"
            target="_blank"
            rel="noreferrer"
            className={styles.visitBtn}
          >
            Visit Website
          </a>
        </div>

        {/* ================= STATS STRIP ================= */}
        <div className={styles.statsWrapper} aria-hidden="true">
          {/* Background */}
          <Image
            src={edtech_toptech_info}
            alt=""
            fill
            className={styles.infoBg}
            priority
          />

          {/* Stats */}
          <div
            className={styles.statsCard}
            role="list"
            aria-label="Key metrics"
          >
            <div className={styles.stat} role="listitem">
              <div className={styles.number}>18000+</div>
              <div className={styles.label}>Schools Reached</div>
            </div>

            <div className={styles.stat} role="listitem">
              <div className={styles.number}>1500000+</div>
              <div className={styles.label}>Students Impacted</div>
            </div>

            <div className={styles.stat} role="listitem">
              <div className={styles.number}>75000+</div>
              <div className={styles.label}>Teachers Trained</div>
            </div>

            <div className={styles.stat} role="listitem">
              <div className={styles.number}>4000+</div>
              <div className={styles.label}>Active Schools</div>
            </div>
          </div>
        </div>

        {/* ================= CARDS ================= */}
        <div className={styles.cardsSection}>
          {/* For Schools (Blue card) */}
          <div className={`${styles.card} ${styles.blueCard}`}>
            <div className={styles.cardHeader}>
              <h3>For Schools</h3>
              <Image
                src={edtech_toptech_topclass_logo}
                alt="TopClass Logo"
                width={279}
                height={81}
                className={styles.cardLogo}
              />
            </div>
            <p>
              TopSchool, a smart and simple Learning Management System (LMS)
              with an intuitive and interactive learning platform that is NEP
              2020 compliant. The platform comes preloaded with lesson plans,
              curriculum and a self-updating syllabus system.
            </p>
            <Link href="/our-business/edtech/top-tech/top-school" target="_blank" className={styles.knowMore}>
              Know More
            </Link>
          </div>

          {/* For Students (White card) */}
          <div className={`${styles.card} ${styles.whiteCard}`}>
            <div className={styles.cardHeader}>
              <h3>For Students</h3>
              <Image
                src="/images/our-business/edtech-toptech-topclass-logo.png"
                alt="TopClass Logo"
                width={279}
                height={81}
                className={styles.cardLogo}
              />
            </div>
            <p>
              By modernising the educational process with new-age digital
              learning, TOPClass enhances the educational experience at the
              classroom level. Our goal is to accelerate and simplify both
              learning and teaching for students and educators.
            </p>
            <Link
              href="https://navneettoptech.com/topclass-digital-classroom"
              target="_blank"
              className={styles.knowMore}
            >
              Know More
            </Link>
          </div>
        </div>

        {/* ================= CALL TO ACTION ================= */}
        <div
          className={styles.callSection}
          style={{ ["--call-bg"]: `url(${companion_bg.src})` }}
        >
          <div className={styles.callContent}>
            <p>
              For a Free Demo call:{" "}
              <a href="tel:18002666676" className={styles.phone}>
                1800 266 6676
              </a>
            </p>
            <a href="mailto:info@navneettoptech.com" className={styles.emailBtn}>
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
