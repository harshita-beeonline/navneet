
import React from "react";
import Image from "next/image";
import styles from "../../../../styles/OurBusiness/Othersk12/Management.module.scss";

import herodesktop from "../../../../public/images/our-business/management-bg.png";
import heromobile from "../../../../public/images/our-business/management-bg-mobile.png";
import desktopBg from "../../../../public/images/our-business/bluebg-desktop.png";
import mobileBg from "../../../../public/images/our-business/bluebg-mobile.png";


export default function SchoolSolutions() {
  return (
    <section className={styles["pageWrapper"]}>
      {/* HERO */}
      <div className={styles["heroDesktop"]}>
        {/* Desktop Hero */}
        <div className={styles["heroWrapperDesktop"]}>
          <Image
            src={herodesktop}
            alt="School Solutions - Hero (Desktop)"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Mobile Hero */}
      <div className={styles["heroMobile"]}>
        <div className={styles["heroWrapperMobile"]}>
          <Image
            src={heromobile}
            alt="School Solutions - Hero (Mobile)"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      {/* INTRO (white bg) */}
      <div className={styles["intro"]}>
        <h2 className={styles["title"]}>
          Educational support services and solutions for schools
        </h2>
        <p className={styles["desc"]}>
          K12 Techno Services Pvt. Ltd by Navneet is a leading education service
          provider in India, offering a dynamic suite of support services and
          solutions to schools. The education sector has evolved in the last
          decade and there is a need to align schools with parents’ expectations
          from schools.
        </p>
      </div>

      {/* BUTTONS SECTION */}
      <div className={styles["buttonsSection"]}>
        <h3 className={styles["title"]}>School Solutions</h3>

        <div className={styles["buttonsGrid"]}>
          {/* Left column */}
          <div className={styles["csrColumn"]}>
            {[
              "Academic Support",
              "Books",
              "Study Material",
              "Student Counselling",
              "Career Counselling",
              "Specialized Training",
              "Transport Support",
            ].map((btn, idx) => (
              <div key={idx} className={styles["buttonItem"]}>
                {btn}
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className={styles["csrColumn"]}>
            {[
              "School Property Management",
              "Training / Workshops",
              "Technology / Admin Solutions",
              "Administrative Solutions",
              "Assessment Solutions",
              "Teacher Solutions",
              "Marketing Solutions",
            ].map((btn, idx) => (
              <div key={idx} className={styles["buttonItem"]}>
                {btn}
              </div>
            ))}
          </div>
        </div>

        {/* Centered remaining button */}
        <div className={styles["centerButton"]}>
          <div className={styles["buttonItem"]}>
            Safety and Security Solutions
          </div>
        </div>
      </div>

      {/* BLUE BACKGROUND SECTION */}
      <div className={styles["blueBgSection"]}>
        <p>
          The Company provides various safety and security solutions for the
          schools namely installation of CCTV Cameras in the schools and the
          school buses; appointment of security agencies where both male and
          female guards are appointed to ensure that the safety and security of
          the schools are not compromised; installing of fire extinguishers and
          conducting various sessions for safety evacuation etc.
        </p>
      </div>

      <div className={styles["bottomSpacer"]} />
    </section>
  );
}
