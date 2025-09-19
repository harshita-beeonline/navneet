"use client";

import React, { useState } from "react";
import Image from "next/image";

import responsibility_initiative_eduaction from "../../../public/images/responsibility/responsibility-initiative-eduaction.png";
import styles from "../../../styles/Responsibility/Initiatives.module.scss";

const initiatives = [
  "Education",
  "Healthcare",
  "Community Development",
  "Animal Welfare",
  "Environment",
];

export default function Initiatives() {
  const [current, setCurrent] = useState(0);
  const slides = new Array(5).fill(responsibility_initiative_eduaction);

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
