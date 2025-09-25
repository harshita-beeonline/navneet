import React from "react";
import Image from "next/image";
import styles from "../../../styles/Advertise/OurEsteemedSection.module.scss";

// Static imports → optimized by Next.js
import img1 from "../../../public/images/advertise/imgbox1.png";
import img2 from "../../../public/images/advertise/imgbox2.png";
import stationary from "../../../public/images/advertise/stationary-box.png";
import production from "../../../public/images/advertise/production-box.png";

const OurEsteemedSection = () => {
  return (
    <section className={styles.pageWrapper}>
      <h2 className={styles.sectionTitle}>OUR ESTEEMED CLIENTELE</h2>

      <div className={styles.clienteleGrid}>
        {/* Desktop order → row 1 */}
        <div className={`${styles.clientBox} ${styles.imgBoxLeft}`}>
          <Image
            src={img1}
            alt="Main Client Image"
            className={styles.responsiveImage}
            priority
          />
        </div>

        <div className={`${styles.clientBox} ${styles.stationaryBox}`}>
          <h3 className={styles.subHeading}>STATIONERY</h3>
          <Image
            src={stationary}
            alt="Stationery Clients"
            className={styles.responsiveImage}
          />
        </div>

        {/* Desktop order → row 2 */}
        <div className={`${styles.clientBox} ${styles.publicationBox}`}>
          <Image
            src={production}
            alt="Publications Clients"
            className={styles.responsiveImage}
          />
        </div>

        <div className={`${styles.clientBox} ${styles.imgBoxRight}`}>
          <Image
            src={img2}
            alt="Main Client Image 2"
            className={styles.responsiveImage}
          />
        </div>
      </div>
    </section>
  );
};

export default OurEsteemedSection;
