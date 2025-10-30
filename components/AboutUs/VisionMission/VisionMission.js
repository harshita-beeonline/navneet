"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // 👈 added
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
        <motion.div
          className={styles["column"]}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }} 
        >
          <motion.div
            className={styles["iconWrap"]}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false, amount: 0.3 }} 
          >
            <Image
              src={VisionIcon}
              alt="vision icon"
              width={300}
              height={200}
              priority
            />
          </motion.div>

          <motion.h2
            className={styles["title"]}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }} 
          >
            Vision
          </motion.h2>

          <motion.p
            className={styles["description"]}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: false, amount: 0.3 }} 
          >
            To provide the highest quality of educational products and services
            to customers in the language/medium of their choice.
          </motion.p>
        </motion.div>

        <div className={styles["divider"]} />

        {/* Mission column */}
        <motion.div
          className={styles["column"]}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }} 
        >
          <motion.div
            className={styles["iconWrap"]}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false, amount: 0.3 }} 
          >
            <Image
              src={MissionIcon}
              alt="mission icon"
              width={300}
              height={217}
              priority
            />
          </motion.div>

          <motion.h2
            className={styles["title"]}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }} 
          >
            Mission
          </motion.h2>

          <motion.ul
            className={styles["points"]}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: false, amount: 0.3 }} 
          >
            <li>
              To provide students with best quality supplementary study material
              and curriculum text books at affordable price.
            </li>
            <li>
              To harness the power of Information Technology and bring home its
              wonder to children through a learning
            </li>
            <li>To provide students with scholastic stationery products.</li>
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
