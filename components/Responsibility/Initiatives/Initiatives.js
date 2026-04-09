"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../../styles/Responsibility/Initiatives.module.scss";
import responseslide1 from '../../../public/images/responseslide1.jpg';
import responseslide2 from '../../../public/images/responseslide2.jpg';
import responseslide3 from '../../../public/images/responseslide3.jpg';
import responseslide4 from '../../../public/images/responseslide4.jpg';
import responseslide5 from '../../../public/images/responseslide5.jpg';
import responseslide6 from '../../../public/images/responseslide6.jpg';
import responseslide7 from '../../../public/images/responseslide7.jpg';
import responseslide8 from '../../../public/images/responseslide8.jpg';
import responseslide9 from '../../../public/images/responseslide9.jpg';
import responseslide10 from '../../../public/images/responseslide10.jpg';
import responseslide11 from '../../../public/images/responseslide11.jpg';
import responseslide12 from '../../../public/images/responseslide12.png';

const initiatives = [
  "Education",
  "Healthcare",
  "Community Development",
  "Animal Welfare",
  "Environment",
];

const slides = [
  responseslide1,
  responseslide2,
  responseslide3,
  responseslide4,
  responseslide5,
  responseslide6,
  responseslide7,
  responseslide8,
  responseslide9,
  responseslide10,
  responseslide11,
  responseslide12,
];

export default function Initiatives() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.initiativesSection}>
      <div className={styles.initiativesWrapper}>
        {/* LEFT SIDE */}
        <div className={styles.initiativesContent}>
          <h2 className={styles.heading}>Other initiatives:</h2>
          <div className={styles.initiativesList}>
            {initiatives.map((initiative, i) => (
              <div key={i} className={styles.initiativeItem}>
                {initiative}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - CUSTOM SLIDER */}
        <div className={styles.initiativesSlider}>
          <button className={styles.arrow} onClick={prevSlide}>
            &#10094;
          </button>

          <div className={styles.sliderWrapper}>
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`${styles.slide} ${
                  i === current ? styles.active : ""
                }`}
              >
                {i === current && (
                  <Image
                    src={slide}
                    alt={`Initiative slide ${i + 1}`}
                    width={600}
                    height={400}
                    className={styles.sliderImage}
                    style={{
                      display: "block",
                      width: "100%",
                      height: "380px",
                      objectFit: "contain",
                      objectPosition: "center",
                      backgroundColor: "#fff",
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          <button className={styles.arrow} onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}
