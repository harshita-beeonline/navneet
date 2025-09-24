import React from "react";
import styles from "../../../styles/Advertise/ShowcaseBrand.module.scss";
import Imagemobile from "../../../public/images/advertise/brand-img-mobile.png";
import Imagedesktop from "../../../public/images/advertise/brand-img-desktop.png";


const NextSection = () => {
  return (
    <section className={styles.nextSection}>
      {/* Desktop Background */}
      <img
        src="/images/advertise/brand-img-desktop.png"
        alt="Next Section Desktop"
        className={styles.desktopBg}
      />

      {/* Mobile Background */}
      <img
        src="/images/advertise/brand-img-mobile.png"
        alt="Next Section Mobile"
        className={styles.mobileBg}
      />
    </section>
  );
};

export default NextSection;
