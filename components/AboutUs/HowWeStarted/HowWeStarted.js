import React from "react";
import Image from "next/image";
import styles from "../../../styles/AboutUs/HowWeStarted.module.scss";
import HowWeStartedBg from "../../../public/images/about/How-We-Started-Bg.png";

const HowWeStarted = () => {
  // Pass the Next optimized src into CSS as a custom property
  const bgStyle = {
    "--howwe-bg": `url(${HowWeStartedBg.src})`,
  };

  return (
    <section
      className={styles["howwestarted-section"]}
      style={bgStyle}
      aria-labelledby="howwe-title"
    >
      <div className={styles["howwestarted-section-content"]}>
        <div className={styles["vertical-bar"]} aria-hidden="true" />

        <div className={styles["text-block"]}>
          <h2 id="howwe-title" className={styles["howwestarted-subheading"]}>
            How We Started
          </h2>

          <p className={styles["howwestarted-para1"]}>
            If you have spent your childhood in India, Navneet books surely form
            a part of your childhood nostalgia! The story of Navneet’s birth
            begins in pre-independent India.
          </p>

          <p className={styles["howwestarted-para2"]}>
            A youth with dreams in his eyes travelled from Kutch to Mumbai and
            set up a humble grocery store at Walkeshwar. With the passage of
            time, he realized the business potential of school books. While
            literary books had to be marketed well in order to be sold off the
            shelves, school books were demanded by the customers themselves—
            there was a ready and eager market for them. In 1959, he opened a
            shop in Dhobi Talao called the College Book Depot, which went on to
            become part of the school books business folklore. And what is today
            the Navneet Publications conglomerate owned by the Gala family.
          </p>

          <p className={styles["howwestarted-para3"]}>
            A story of brilliant human enterprise with a happy bit of luck, and
            a serious amount of hard work—our history is as illustrious as the
            books we publish. But most importantly, it is a story of immensely
            strong family values and an investment in the right talent to create
            a legacy of excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeStarted;
