import React from "react";
import styles from "../../../styles/AboutUs/VisionMission.module.scss";

// Import SVGs directly (works better for background)
import VisionBg from "../../../public/images/about/Vision.svg";
import MissionBg from "../../../public/images/about/Mission.svg";

const VisionMission = () => {
  return (
    <section className={styles["visionMissionSection"]}>
      <div className={styles["container"]}>

        {/* Vision Card */}
        <div className={styles["card"]}>
          <div className={styles["headingWrapper"]}>
            <h2 className={styles["subTitle"]}>Vision</h2>
            <img
              src={VisionBg.src}
              alt="Vision Background"
              className={styles["bgIcon"]}
            />
          </div>
          <ul className={styles["list"]}>
            <li>
              To provide the highest quality of educational products and
              services to customers in the language/medium of their choice.
            </li>
          </ul>
        </div>

        {/* Mission Card */}
        <div className={styles["card"]}>
          <div className={styles["headingWrapper"]}>
            <h2 className={styles["subTitle"]}>Mission</h2>
            <img
              src={MissionBg.src}
              alt="Mission Background"
              className={styles["bgIcon"]}
            />
          </div>
          <ul className={styles["list"]}>
            <li>
              To provide students with best quality supplementary study material
              and curriculum text books at affordable price.
            </li>
            <li>
              To harness the power of Information Technology and bring home its
              wonder to children through a learning.
            </li>
            <li>
              To provide students with scholastic stationery products.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
