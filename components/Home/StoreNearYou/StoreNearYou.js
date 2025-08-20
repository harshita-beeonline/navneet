import React from "react";
import styles from "../../../styles/StoreNearYou.module.scss";
import Image from "next/image";
import storeimage from "../../../public/images/storeimage.png";
import Link from "next/link";

const StoreNearYou = () => {
  return (
    <>
      <div className={styles["store-section-content-desktop"]}>
        <div className={styles["store-section-left-right-part"]}>
          <div className={styles["store-left-part"]}>
            <Image src={storeimage} alt="image" />
          </div>
          <div className={styles["store-right-part"]}>
            <div className={styles["image-with-text-content"]}>
              <h2>Excited about our products?</h2>
              <div className={styles["divider-section"]}></div>
              <p>Find a Navneet store near you.</p>
                   <a
            href="https://ecatalogue.navneet.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Navneet eCatalogue</button>
          </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["store-section-content"]}>
        <div className={styles["image-with-text-content"]}>
          <h2>Excited about our products?</h2>
          <div className={styles["divider-section"]}></div>
          <p>Find a Navneet store near you.</p>
          <a
            href="https://ecatalogue.navneet.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Navneet eCatalogue</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default StoreNearYou;
