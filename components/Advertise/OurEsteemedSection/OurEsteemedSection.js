import React from "react";
import styles from "../../../styles/Advertise/OurEsteemedSection.module.scss";

const OurEsteemedSection = () => {
    return (
      <section className={styles.pageWrapper}>
        <h2 className={styles.sectionTitle}>OUR ESTEEMED CLIENTELE</h2>
  
        <div className={styles.clienteleGrid}>
          {/* Desktop order → row 1 */}
          <div className={`${styles.clientBox} ${styles.imgBoxLeft}`}>
            <img src="/images/advertise/imgbox1.png" alt="Main Client Image" />
          </div>
          <div className={`${styles.clientBox} ${styles.stationaryBox}`}>
          <h3 className={styles.subHeading}>STATIONERY</h3>
            <img src="/images/advertise/stationary-box.png" alt="Stationery Clients" />
          </div>
  
          {/* Desktop order → row 2 */}
          <div className={`${styles.clientBox} ${styles.publicationBox}`}>
            <img src="/images/advertise/production-box.png" alt="Publications Clients" />
          </div>
          <div className={`${styles.clientBox} ${styles.imgBoxRight}`}>
            <img src="/images/advertise/imgbox2.png" alt="Main Client Image 2" />
          </div>
        </div>
      </section>
    );
  };
  
  export default OurEsteemedSection;