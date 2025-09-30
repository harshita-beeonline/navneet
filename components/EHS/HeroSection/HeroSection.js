import React from "react";
import styles from "../../../styles/EHS/HeroSection.module.scss";
import Image from "next/image";
import heroBgDesktop from "../../../public/images/ehs/ehs-herobg-desktop.png";
import heroBgMobile from "../../../public/images/ehs/ehs-herobg-mobile.png";
const HeroSection = () => {
  return (
    <div className={styles.pageWrapper}>
      {/* Desktop/Tablet Image */}
      <div className={styles.heroBgDesktop}>
        <Image
          src={heroBgDesktop}
          alt="Hero Background"
          className={styles.heroImg}
          priority
        />
        <div className={styles.heroTitle}>EHS-Environment Health Safety</div>
      </div>

      {/* Mobile Image */}
      <div className={styles.heroBgMobile}>
        <Image
          src={heroBgMobile}
          alt="Hero Background"
          className={styles.heroImg}
          priority
        />
        <div className={styles.heroTitle}>EHS-Environment Health Safety</div>
      </div>
    </div>
  );
};

export default HeroSection;