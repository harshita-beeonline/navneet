import React from "react";
import styles from "../../../styles/JourneySection.module.scss";
import journey from "../../../public/images/journey.png"
import Image from "next/image";
import { Diversity1Outlined } from "@mui/icons-material";
const JourneySection = ({ imageSrc = "/images/Our-journey-right.png" }) => {
  return (
    <div className={`${styles["journey-section"]}`}>
  
        <div className={`${styles["journey-section-background"]}`}>
          {/* Left Column */}
          <div className={`${styles["journey-section-left"]}`}>
            <div className={styles["journey-title-wrapper"]}>
              <p className={styles["text-primary-title"]}>Our journey</p>
              <h2 className={styles["text-Building-title"]}>
                <span className={styles["text-Building-title-blue"]}>
                  Building a better education
                </span>{" "}
                medium to the little learners since 1959
              </h2>
            </div>

            <p className={styles["text-para"]}>
              Navneet has been a common name throughout your childhood, whether it is nursery rhymes or Navneet digest or work books, Navneet has always been part of your studies.
              A youth with dreams in his eyes travelled from Kutch to Mumbai and set up a humble grocery store at Walkeshwar.
            </p>

            <button className={styles["btn-read-more"]}>Read more</button>
          </div>

          {/* Right Column */}
          <div className="">
            <Image
              src={journey}
              alt="Journey visual"
              className={`img-fluid ${styles["journey-image"]}`}
            />
          </div>
        </div>
   
    </div>
  );
};

export default JourneySection;
