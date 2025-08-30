import React from "react";
import Image from "next/image";
import styles from "../../../styles/AboutUs/CodeConduct.module.scss";

import Collegues_Working from "../../../public/images/about/Collegues_Working.jpg";

const CodeOfConduct = () => {
  return (
    <section className={styles["codeConduct"]}>
      <div className={styles["container"]}>
        {/* Left Section */}
        <div className={styles["left"]}>
          <div className={styles["headingWrapper"]}>
            <span className={styles["verticalBar"]}></span>
            <h2 className={styles["heading"]}>The Navneet code of conduct</h2>
          </div>

          <p className={styles["para"]}>
            Navneet is a law-abiding Corporate and has been doing business in
            the most ethical manner. As one more step in the direction of
            increased transparency, the company has adopted this Code of Conduct
            for its Directors and Senior Management Personnel.
          </p>

          <p className={styles["para"]}>
            To comply with the applicable rules of the Stock Exchanges where the
            securities of the Company are listed like The Bombay Stock Exchange
            Ltd. & The National Stock Exchange of India Limited.
          </p>
        </div>

        {/* Right Section */}
        <div className={styles["right"]}>
          <Image
            src={Collegues_Working}
            alt="Code of Conduct"
            className={styles["image"]}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default CodeOfConduct;
