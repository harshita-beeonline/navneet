import React from "react";
import Image from "next/image";
import styles from "../../../styles/Investor/HeroSection.module.scss";

import hero1 from "../../../public/images/InvestorsLandingPage/hero1.png";
import hero2 from "../../../public/images/InvestorsLandingPage/hero2.png";

export default function HeroSection() {
  return (
    <section className={styles["heroSection"]}>
      <div className={styles["container"]}>
        {/* Text */}
        <div className={styles["textRow"]}>
          <span className={styles["tag"]}>Investor</span>
          <h1 className={styles["heading"]}>
            An investment in <br /> knowledge pays the <br /> best interest.
          </h1>
        </div>

        {/* Images */}
        <div className={styles["imagesRow"]}>
          {/* Stock card */}
          <div className={styles["stockCard"]}>
            <div className={styles["cardImage"]}>
              <Image
                src={hero1}
                alt="Stock Market"
                width={406}
                height={504}
                priority
              />
              <div className={styles["overlay"]}>
                <h2 className={styles["price"]}>₹ 112.75</h2>
                <p className={styles["change"]}>Change: 0.07 (0.10)</p>
                <p className={styles["volume"]}>Volume: 4,459,000</p>
                <a href="#" className={styles["link"]}>
                  View stock chart
                </a>
              </div>
            </div>
          </div>

          {/* Team photo (desktop only) */}
          <div className={styles["teamCard"]}>
            <Image src={hero2} alt="Team working" width={600} height={400} />
          </div>
        </div>
      </div>
    </section>
  );
}
