"use client";
import React from "react";
import styles from "../../../styles/DigibookSection.module.scss";
import digibookimage from "../../../public/images/digibook2image.png";
import digilogo from "../../../public/images/svgsmartbook.svg";
import texticon from "../../../public/images/texticon.png";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import "animate.css";
const DigibookSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  return (
    <div className={styles["digibook-section-content"]}>
      <div className={styles["digi-logo"]}>
        <Image src={digilogo} alt="image" />
      </div>
      <div className={styles["digibook-left-right-content"]}>
        <div
          className={`${styles["digibook-left-content"]} ${
            inView ? "animate__animated animate__zoomIn" : ""
          }`}
          ref={ref}
        >
          <div className={styles["digibook-image"]}>
            <Image src={digibookimage} alt="image" />
          </div>
        </div>
        <div className={styles["digibook-right-content"]}>
          <div className={styles["text-with-icon"]}>
            <div className={styles["icon-type-image"]}>
              <Image src={texticon} alt="image" />
            </div>
            <h2>SMART DigiBookThe smarter way to learn is here!</h2>
          </div>
          <p>
            The SMART DigiBook is a platform that offers free access* to
            interactive DigiBooks. Students can choose from a catalog of 1000+
            titles of academic and non-academic books under Navneet
            Publications.
          </p>
          <p>
            Available for grades pre-primary to 12th for various boards and
            mediums, the digital copies of these books are bundled with
            interactive features & digital resources which are designed to make
            learning fun & you SMARTER.
          </p>
                             <a
            href="https://smartdigibook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <button>Explore now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DigibookSection;
