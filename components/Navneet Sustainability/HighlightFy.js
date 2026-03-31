import React from "react";
import Image from "next/image";
import styles from "../../styles/HighlightFy.module.scss";
import ecoimage from "../../public/images/ecoimage.png";

const highlightCards = [
  {
    title: "Energy & Emissions",
    stats: [
      {
        value: "26,284.4 GJ",
        description: "Renewable energy generated",
      },
      {
        value: "51%",
        description: "Overall carbon offset rate",
      },
    ],
  },
  {
    title: "Water",
    stats: [
      {
        value: "ZLD Achieved",
        description: "Across all sites",
      },
      {
        value: "100%",
        description: "Reused for gardening & irrigation",
      },
    ],
  },
  {
    title: "Waste & Circularity",
    stats: [
      {
        value: "53%",
        description: "Recycled paper input",
      },
      {
        value: "93%",
        description: "Waste recovery rate",
      },
    ],
  },
  {
    title: "Health & Safety",
    stats: [
      {
        value: "0.01 LTIFR",
        description: "Lost Time Injury Frequency Rate",
      },
      {
        value: "100% Coverage",
        description: "Occupational Health & Management",
      },
    ],
  },
  {
    title: "Employee Well-being",
    stats: [
      {
        value: "100% Employees Covered",
        description: "Accidental insurance benefits",
      },
    ],
  },
  {
    title: "ISO Certification",
    stats: [
      {
        value: "ISO 9001:2015",
        description: "Quality Management System",
      },
      {
        value: "ISO 14001: 2015",
        description: "Environment Management System",
      },
      {
        value: "ISO 45001: 2018",
        description: "Occupational Health and Safety Management Systems",
      },
    ],
  },
  {
    title: "Giga Guru Recognition",
    stats: [
      {
        value: 'Walmart "Giga Guru"',
        description: "Recognized under Project Gigaton",
      },
    ],
  },
  {
    title: "ESG Disclosure",
    stats: [
      {
        value: "BRSR Compliant",
        description: "Disclosures aligned with SEBI framework",
      },
    ],
  },
  {
    title: "EcoVadis",
    image: ecoimage,
  },
];

const HighlightFy = () => {
  return (
    <div className={styles["highlight-fy-section"]}>
      <h2>Sustainability Highlight FY 24 -25</h2>
      <div className={styles["highlight-data"]}>
        {highlightCards.map((item,index) => (
          <div className={styles["highlight-card"]} key={index}>
            <h4>{item.title}</h4>

            {item.stats ? (
              <div className={styles["highlight-card-content"]}>
                {item.stats.map((stat) => (
                  <div
                    className={styles["highlight-stat-block"]}
                    key={`${item.title}-${stat.value}`}
                  >
                    <h5>{stat.value}</h5>
                    <p>{stat.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles["highlight-image-card"]}>
                <div className={styles["eco-image"]}>
                    <Image src={item.image} alt="EcoVadis rating" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighlightFy;
