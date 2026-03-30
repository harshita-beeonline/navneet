import React from "react";
import styles from "../../styles/Sustainability.module.scss";
import sustainabilityleftimage from "../../public/images/sustainabilityleftimage.png";
import sustainabilityvision from "../../public/images/sustainabilityvision.png";
import Image from "next/image";
const SustainabilityBanner = () => {
  return (
    <>
      <div className={styles["sustainability-banner-section"]}>
        <div className={styles["banner-left-right-content"]}>
          <div className={styles["banner-left-content"]}>
            <div className={styles["person-image"]}>
              <Image src={sustainabilityleftimage} alt="img" />
            </div>
            <div className={styles["person-details"]}>
              <h5>Mr. Gnanesh Gala</h5>
              <h6>Managing Director</h6>
              <h6>Navneet Education Ltd</h6>
            </div>
          </div>
          <div className={styles["banner-right-content"]}>
            <h2>At Navneet, sustainability is not an initiative — </h2>
            <h4>
              it’s an integral part of how we do business. We are continuously
              working towards reducing our environmental footprint and creating
              long-term value for all stakeholders.
            </h4>
          </div>
        </div>
      </div>
      <div className={styles["sustainability-vision-section"]}>
        <div className={styles["vision-left-right-content"]}>
          <div className={styles["vision-left-content"]}>
            <div className={styles["vision-image"]}>
                <Image src={sustainabilityvision} alt="img" />
            </div>
          </div>
          <div className={styles["vision-right-content"]}>
            <h4>Vision</h4>
            <h6>
              To be a global leader in the stationery business through
              creativity, innovation & sustainability
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default SustainabilityBanner;
