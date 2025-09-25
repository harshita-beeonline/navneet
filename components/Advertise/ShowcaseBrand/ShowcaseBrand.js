import React from "react";
import Image from "next/image";
import styles from "../../../styles/Advertise/ShowcaseBrand.module.scss";

const brandImages = [
  "/images/advertise/slide1.png",
  "/images/advertise/slide2.png",
  "/images/advertise/slide3.png",
  "/images/advertise/slide4.png",
  "/images/advertise/slide5.png",
  "/images/advertise/slide6.png",
  "/images/advertise/slide7.png",
  "/images/advertise/slide8.png",
];

const NextSection = () => {
  return (
    <section className={styles.nextSection}>
      <div className={styles.marquee}>
        <div className={styles.marqueeInner}>
          {/* Duplicate array for seamless looping effect */}
          {brandImages.concat(brandImages).map((img, index) => (
            <div key={index} className={styles.brandLogo}>
              <Image
                src={img} // string path from public
                alt={`Brand ${index + 1}`}
                className={styles.responsiveImage}
                width={200} // must provide width & height when using string paths
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NextSection;
