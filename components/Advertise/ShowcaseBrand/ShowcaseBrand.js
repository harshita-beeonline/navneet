"use client";
import React from "react";
import Marquee from "react-fast-marquee";
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

const ShowcaseBrand = () => {
  return (
    <section className={styles.nextSection}>
      <Marquee 
        gradient={false} 
        speed={50} 
        pauseOnHover={true}
      >
        {brandImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Brand ${index + 1}`}
            className={styles.brandLogo}
          />
        ))}
      </Marquee>
    </section>
  );
};

export default ShowcaseBrand;
