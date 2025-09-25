import React from "react";
import Image from "next/image";
import styles from "../../../styles/Advertise/ShowcaseBrand.module.scss";

// ✅ Static imports (optimized by Next.js)
import slide1 from "../../../public/images/advertise/slide1.png";
import slide2 from "../../../public/images/advertise/slide2.png";
import slide3 from "../../../public/images/advertise/slide3.png";
import slide4 from "../../../public/images/advertise/slide4.png";
import slide5 from "../../../public/images/advertise/slide5.png";
import slide6 from "../../../public/images/advertise/slide6.png";
import slide7 from "../../../public/images/advertise/slide7.png";
import slide8 from "../../../public/images/advertise/slide8.png";

const brandImages = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
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
              unoptimized
                src={img}
                alt={`Brand ${index + 1}`}
                className={styles.responsiveImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NextSection;
