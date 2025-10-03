"use client";
import { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import styles from "../../../styles/Responsibility/Webinar.module.scss";

const videos = [
  "https://www.youtube.com/embed/3mY0KO619rM",
  "https://www.youtube.com/embed/XSd3pLKwLW8",
  "https://www.youtube.com/embed/H43RhYzmsgM",
  "https://www.youtube.com/embed/SZsnNouvzTY",
  "https://www.youtube.com/embed/TyysDoh67gs",
  "https://www.youtube.com/embed/FyDIpfZQp28",
  "https://www.youtube.com/embed/0hNlm9du9Z0",
  "https://www.youtube.com/embed/co_98fSaZEU",
];


export default function Webinar() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.webinarSection}>
      <h1 className={styles.heading}>Webinar for Teachers Training</h1>

      <div className={styles.slider}>
        {/* Desktop arrows (side) */}
        <button className={`${styles.nav} ${styles.left}`} onClick={prevSlide}>
          <SlArrowLeft />
        </button>

        <div className={styles.videoWrapper}>
          <iframe
            key={current}
            className={styles.videoFrame}
            src={videos[current]}
            title="YouTube webinar video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <button className={`${styles.nav} ${styles.right}`} onClick={nextSlide}>
          <SlArrowRight />
        </button>
      </div>

      {/* Mobile arrows (below video) */}
      <div className={styles.mobileNav}>
        <button className={styles.nav} onClick={prevSlide}>
          <SlArrowLeft />
        </button>
        <button className={styles.nav} onClick={nextSlide}>
          <SlArrowRight />
        </button>
      </div>
    </section>
  );
}
