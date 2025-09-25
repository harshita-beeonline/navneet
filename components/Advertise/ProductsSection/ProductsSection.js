import React from "react";
import Image from "next/image";

// Icons
// import checkIcon from "../../../public/images/our-business/checkmark-icon.svg";
// import checkIconWhite from "../../../public/images/advertise/checkmark-white-icon.png";

// Styles
import styles from "../../../styles/Advertise/ProductsSection.module.scss";

export default function ProductsSection() {
  const academicBooks = [
    "Navneet Guides",
    "Navneet Workbooks",
    "21 Most Likely Question Sets",
  ];

  const stationery = ["Note books", "Long books", "Drawing books"];

  const eLearning = ["TOPScorer Time Magazine"];

  return (
    <section className={styles.pageWrapper}>
      <div className={styles.cardsRow}>
        {/* Academic Books */}
        <div className={styles.productCard}>
          <h3 className={styles.cardTitle}>ACADEMIC BOOKS</h3>
          <ul className={styles.checkList}>
            {academicBooks.map((text, i) => (
              <li key={i}>
                <span className={styles.checkIcon}>
                  <Image src="/images/our-business/checkmark-icon.svg" alt="" width={20} height={20} />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Stationery Products */}
        <div className={styles.productCard}>
          <h3 className={styles.cardTitle}>STATIONERY PRODUCTS</h3>
          <ul className={styles.checkList}>
            {stationery.map((text, i) => (
              <li key={i}>
                <span className={styles.checkIcon}>
                  <Image src="/images/advertise/checkmark-white-icon.png" alt="" width={20} height={20} />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* E-Learning Products */}
        <div className={styles.productCard}>
          <h3 className={styles.cardTitle}>E-LEARNING PRODUCTS</h3>
          <ul className={styles.checkList}>
            {eLearning.map((text, i) => (
              <li key={i}>
                <span className={styles.checkIcon}>
                  <Image src="/images/our-business/checkmark-icon" alt="" width={20} height={20} />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
