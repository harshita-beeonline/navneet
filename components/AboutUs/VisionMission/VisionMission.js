import React from "react";
import Image from "next/image";
import styles from "../../../styles/AboutUs/VisionMission.module.scss";

import vision_mission_bg from "../../../public/images/about/vision_mission_bg.jpg";
import VisionIcon from "../../../public/images/about/vision.png";
import MissionIcon from "../../../public/images/about/mission.png";

export default function VisionMission() {
  return (
    <section className={styles["visionMissionSection"]}>
      <div className={styles["bgWrap"]} aria-hidden>
        <Image
          src={vision_mission_bg}
          alt="bookshelf background"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className={styles["overlay"]} />
      </div>

      <div className={styles["container"]}>
        {/* Vision column */}
        <div className={styles["column"]}>
          <div className={styles["iconWrap"]}>
            <Image
              src={VisionIcon}
              alt="vision icon"
              width={300}
              height={200}
              priority
            />
          </div>

          <h2 className={styles["title"]}>Vision</h2>

          <p className={styles["description"]}>
            To provide the highest quality of educational products and services
            to customers in the language/medium of their choice.
          </p>
        </div>

        <div className={styles["divider"]} />

        {/* Mission column */}
        <div className={styles["column"]}>
          <div className={styles["iconWrap"]}>
            <Image
              src={MissionIcon}
              alt="mission icon"
              width={300}
              height={217}
              priority
            />
          </div>

          <h2 className={styles["title"]}>Mission</h2>

          <ul className={styles["points"]}>
            <li>
              To provide students with best quality supplementary study material
              and curriculum text books at affordable price.
            </li>
            <li>
              To harness the power of Information Technology and bring home its
              wonder to children through a learning
            </li>
            <li>To provide students with scholastic stationery products.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
