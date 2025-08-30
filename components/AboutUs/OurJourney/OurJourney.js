import React from "react";
import styles from "../../../styles/AboutUs/OurJourney.module.scss";
import Navneet_Founders from "../../../public/images/about/Navneet-Founders.png";
import Image from "next/image";

const OurJourney = () => {
  return (
    <section className={styles["ourjourney-section"]}>
      <div className={styles["ourjourney-inner"]}>
        {/* Text column */}
        <div className={styles["ourjourney-section-content"]}>
          <div className={styles["vertical-bar"]} aria-hidden="true" />

          <div className={styles["text-block"]}>
            <span className={styles["ourjourney-subheading"]}>Our journey</span>

            <h2 className={styles["ourjourney-heading"]}>
              <span className={styles["accent"]}>Building a better</span>{" "}
              education <span className={styles["accent-dark"]}>medium</span> to
              the little learners since 1959
            </h2>

            <p className={styles["ourjourney-para"]}>
              Navneet has been a common name throughout your childhood, whether
              it is nursery rhymes or Navneet digest or work books, Navneet has
              always been part of your studies. A youth with dreams in his eyes
              travelled from Kutch to Mumbai and set up a humble grocery store
              at Walkeshwar.
            </p>

            <button
              className={styles["ourjourney-button"]}
              aria-label="Read more"
            >
              Read more
            </button>
          </div>
        </div>

        {/* Image column */}
        <div className={styles["imageWrapper"]}>
          {/* Next/Image will output an <img> with the className applied to it, so our CSS will target it */}
          <Image
            src={Navneet_Founders}
            alt="Navneet founders"
            className={styles["image"]}
            priority={false}
          />
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
