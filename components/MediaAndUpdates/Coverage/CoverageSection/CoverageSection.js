"use client";
import { useState } from "react";
import styles from "../../../../styles/MediaAndUpdates/Coverage/CoverageSection.module.scss";
import CardSlider from "../CoverageComponents/CardSlider/CardSlider";
import Articles from "../CoverageComponents/Articles/Articles";

export default function CoverageSection() {
  const [activeButton, setActiveButton] = useState("Videos");
  const buttons = ["Videos", "Interviews", "Articles", "Show All"];

  const videos = [
    "https://youtu.be/e06NKzDHIwI",
    "https://youtu.be/hUB08HKrVxM",
    "https://youtu.be/SbR-zJPhKL4",
    "https://youtu.be/EDjOW6swYSc",
    "https://youtu.be/AXEtbauFeoI",
  ];

  const interviews = [
    "https://youtu.be/hYjdCUjK05Y",
    "https://youtu.be/R9FWLczA62w",
    "https://youtu.be/rX8r9V58Gz8",
    "https://youtu.be/QdDwUf1hIhM",
    "https://youtu.be/Z1-6mi9Tq4o",
  ];

  return (
    <div className={styles.coverageWrapper}>
      {/* Buttons */}
      <div className={styles.CoverageSection}>
        {buttons.map((btn) => (
          <button
            key={btn}
            className={`${styles.btn} ${
              activeButton === btn ? styles.active : ""
            }`}
            onClick={() => setActiveButton(btn)}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Content */}
      <div>
        {activeButton === "Videos" && <CardSlider videos={videos} />}
        {activeButton === "Interviews" && <CardSlider videos={interviews} />}
        {activeButton === "Articles" && <Articles />}
        {activeButton === "Show All" && (
          <div className={styles.showAllWrapper}>
            <div className={styles.section}>
              <h2>Videos</h2>
              <CardSlider videos={videos} />
            </div>

            <div className={styles.section}>
              <h2>Interviews</h2>
              <CardSlider videos={interviews} />
            </div>

            <div className={styles.section}>
              <h2>Articles</h2>
              <Articles />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
