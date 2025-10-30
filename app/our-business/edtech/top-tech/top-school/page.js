import React from "react";
import Image from "next/image";
import top_school_hero_dekstop from "../../../../../public/images/our-business/top-school-hero-dekstop.png";
import top_school_hero_mobile from "../../../../../public/images/our-business/edtech-toptech-mobile-hero.png";
import top_school_info_bg from "../../../../../public/images/our-business/top-school-info-bg.jpg";
import edtech_toptech_topclass_logo from "../../../../../public/images/our-business/edtech-toptech-topclass-logo.png";
import checkmar_icon from "../../../../../public/images/our-business/checkmark-icon.svg";
import companion_bg from "../../../../../public/images/our-business/companion-bg.png";

import styles from "../../../../../styles/OurBusiness/EdTech/TopSchool.module.scss";

export default function TopSchool() {
  return (
    <main className={styles.mainsection}>
      <section
        className={styles.topSchoolSection}
        aria-labelledby="topschool-heading"
      >
        {/* HERO */}
        <div className={styles.heroWrapper}>
          <div className={styles.desktopHero}>
            <div className={styles.heroFill}>
              <Image
                src={top_school_hero_dekstop}
                alt="TopSchool hero desktop"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1600px"
                className={styles.heroImage}
              />
            </div>
          </div>
          <div className={styles.mobileHero}>
            <Image
              src={top_school_hero_mobile}
              alt="TopSchool hero mobile"
              width={1200}
              height={800}
              priority
              sizes="100vw"
            />
          </div>
        </div>

        {/* SINGLE LOGO (centered) */}
        <div className={styles.logoWrapper}>
          <Image
            src={edtech_toptech_topclass_logo}
            alt="TopSchool / TopClass logo"
            width={220}
            height={64}
            className={styles.heroLogo}
            priority
          />
        </div>

        {/* INTRO */}
        <div className={styles.intro}>
          <p>
            Simplicity is a smart step towards success. Presenting TopSchool, a
            smart and simple LMS system built with ultimate sophistication.
            TopSchool simplifies studies with an intuitive and interactive
            learning platform.
          </p>
          <p>
            The curriculum becomes convenient when it’s engaging. TopSchool
            addresses this idea with a platform that will help teachers and
            users to create, communicate, administer, and analyze. Its
            accessible interface gives administrators, teachers, and students
            access to timetables and content curriculum 24×7.{" "}
          </p>{" "}
          <p>
            The platform comes preloaded with the latest lesson plans,
            curriculum, and a self-updating syllabus system. It’s further
            equipped with learning through 2D and 3D content. By automating the
            learning process, TopSchool even provides economical leverage to the
            educational institutions
          </p>
        </div>

        {/* INFO BACKGROUND + TWO CARDS */}
        <div className={styles.infoStrip} aria-hidden="true">
          <div className={styles.infoBgWrap}>
            <Image
              src={top_school_info_bg}
              alt=""
              fill
              className={styles.infoBg}
              priority
            />
          </div>

          <div className={styles.infoCards}>
            <div className={styles.infoCard}>
              <ul className={styles.checkList}>
                <li>
                  <span className={styles.checkIcon}>
                    <Image src={checkmar_icon} alt="" width={24} height={24} />
                  </span>
                  Compatible and compliant with National Education Policy (NEP
                  2020)
                </li>
                <li>
                  <span className={styles.checkIcon}>
                    <Image src={checkmar_icon} alt="" width={24} height={24} />
                  </span>
                  Available grades 1 to 10
                </li>
                <li>
                  <span className={styles.checkIcon}>
                    <Image src={checkmar_icon} alt="" width={24} height={24} />
                  </span>
                  Complete curriculum with lesson plans
                </li>
                <li>
                  <span className={styles.checkIcon}>
                    <Image src={checkmar_icon} alt="" width={24} height={24} />
                  </span>
                  Classic 2D-3D animations
                </li>
                <li>
                  <span className={styles.checkIcon}>
                    <Image src={checkmar_icon} alt="" width={24} height={24} />
                  </span>
                  Online assessments
                </li>
                <li>
                  <span className={styles.checkIcon}>
                    <Image src={checkmar_icon} alt="" width={24} height={24} />
                  </span>
                  Easily accessible, analytical and academic reports
                </li>
              </ul>
            </div>

            <div className={styles.infoCard}>
              <ul className={styles.checkList}>
                <li>
                  <span className={styles.checkIcon}>
                    <Image src={checkmar_icon} alt="" width={24} height={24} />
                  </span>
                  Extended learning assignments
                </li>
                <li>
                  <span className={styles.checkIcon}>
                    <Image src={checkmar_icon} alt="" width={24} height={24} />
                  </span>
                  Online and offline usage
                </li>
                <li>
                  <span className={styles.checkIcon}>
                    <Image src={checkmar_icon} alt="" width={24} height={24} />
                  </span>
                  Apps available for assistance
                </li>
                <li>
                  <span className={styles.checkIcon}>
                    <Image src={checkmar_icon} alt="" width={24} height={24} />
                  </span>
                  360° report card with skills and competencies
                </li>
                <li>
                  <span className={styles.checkIcon}>
                    <Image src={checkmar_icon} alt="" width={24} height={24} />
                  </span>
                  Workload indicator for students and teachers
                </li>
                <li>
                  <span className={styles.checkIcon}>
                    <Image src={checkmar_icon} alt="" width={24} height={24} />
                  </span>
                  Create interactive videos, timelines & flash cards with
                  virtual studios
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CALL TO ACTION */}
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
