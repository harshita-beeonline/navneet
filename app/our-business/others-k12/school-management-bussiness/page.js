import React from "react";
import Image from "next/image";
import styles from "../../../../styles/OurBusiness/Othersk12/Management.module.scss";

import herodesktop1 from "../../../../public/images/our-business/management-bg1.png";
import herodesktop2 from "../../../../public/images/our-business/management-bg2.png";
import herodesktop3 from "../../../../public/images/our-business/management-bg3.png";
import heromobile from "../../../../public/images/our-business/management-bg-mobile.png";
import desktopBg from "../../../../public/images/our-business/bluebg-desktop.png";
import mobileBg from "../../../../public/images/our-business/bluebg-mobile.png";

export default function SchoolSolutions() {
  return (
    <section className={styles["pageWrapper"]}>
      <div className={styles.heroDesktop}>
        <div className={styles.heroWrapperDesktop}>
          {/* Three images side by side */}
          <div className={styles.heroImagesRow}>
            <Image
              src={herodesktop1}
              alt="Hero Image 1"
              width={346}
              height={400}
              priority
            />
            <Image
              src={herodesktop2}
              alt="Hero Image 2"
              width={324}
              height={400}
              priority
            />
            <Image
              src={herodesktop3}
              alt="Hero Image 3"
              width={610}
              height={400}
              priority
            />
          </div>
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
        <div className={styles["blueBgContent"]}>
          <p>
            The Company provides various safety and security solutions for the
            schools namely installation of CCTV Cameras in the schools and the
            school buses; appointment of security agencies where both male and
            female guards are appointed to ensure that the safety and security
            of the schools are not compromised; installing of fire extinguishers
            and conducting various sessions for safety evacuation etc.
          </p>
        </div>
      </div>

      <div className={styles["bottomSpacer"]} />
    </section>
  );
}
