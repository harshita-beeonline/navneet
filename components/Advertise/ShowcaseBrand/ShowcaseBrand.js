import React from "react";
import styles from "../../../styles/Advertise/ShowcaseBrand.module.scss";
import slide1 from "../../../public/images/advertise/slide1.png";
import slide2 from "../../../public/images/advertise/slide2.png";
import slide3 from "../../../public/images/advertise/slide3.png";
import slide4 from "../../../public/images/advertise/slide4.png";
import slide5 from "../../../public/images/advertise/slide5.png";
import slide6 from "../../../public/images/advertise/slide6.png";
import slide7 from "../../../public/images/advertise/slide7.png";
import slide8 from "../../../public/images/advertise/slide8.png";

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
          {brandImages.concat(brandImages).map((src, index) => (
            <img key={index} src={src} alt={`Brand ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NextSection;
