import React from "react";
import Image from "next/image"; 
import styles from "../../../styles/Advertise/HeroSection.module.scss";
import heroBg from "../../../public/images/advertise/herobg-desktop.png"; 
import heroBgMobile from "../../../public/images/advertise/herobg-mobile.png"; 

const HeroSection = () => {
  return (
    <section className={styles.pageWrapper}>
      <div className={styles.heroSection}>
        {/* Desktop Background */}
        <Image
          src={heroBg}
          alt="Advertise with us"
          className={styles.heroDesktop}
          priority // ensures hero image loads fast
          unoptimized
        />

        {/* Mobile Background */}
        <Image
          src={heroBgMobile}
          alt="Advertise with us mobile"
          className={styles.heroMobile}
          unoptimized
        />
      </div>
    </section>
  );
};

export default HeroSection;
