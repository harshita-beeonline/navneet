import React from "react";
import Image from "next/image";
import styles from "../../../styles/Advertise/ShowcaseBrand.module.scss";

// ✅ Static imports (optimized by Next.js)
import slide1 from "../../../public/asset/slide1.png";
import slide2 from "../../../public/asset/slide2.png";
import slide3 from "../../../public/asset/slide3.png";
import slide4 from "../../../public/asset/slide4.png";
import slide5 from "../../../public/asset/slide5.png";
import slide6 from "../../../public/asset/slide6.png";
import slide7 from "../../../public/asset/slide7.png";
import slide8 from "../../../public/asset/slide8.png";

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
