import React from "react";
import styles from "../../../styles/Investor/Demat.module.scss";

export default function Demat() {
  return (
    <section className={styles["demat-section"]}>
      <div className={styles["demat-container"]}>
        {/* Left Title */}
        <div className={styles["demat-title"]}>
          <h2>DEMAT</h2>
        </div>

        {/* Overview */}
        <div className={styles["demat-card"]}>
          <h3 className={styles["card-heading"]}>Overview</h3>
          <p className={styles["card-text"]}>
            98.99% of the total paid up share capital has been demated until 31st March, 2021.
          </p>
        </div>

        {/* Paid-Up Equity Shares */}
        <div className={styles["demat-card"]}>
          <h3 className={styles["card-heading"]}>Paid-Up Equity Shares:</h3>
          <p className={styles["card-text"]}>
            22,88,70,500 Equity Shares of Rs.2/- each Details of last Annual General Meeting.
          </p>
        </div>

        {/* Annual General Meeting */}
        <div className={styles["demat-card"]}>
          <h3 className={styles["card-heading"]}>35th Annual General Meeting</h3>
          <p className={styles["card-text"]}>
            <span className={styles["label"]}>Date &amp; Time :</span> Wednesday, 29th September, 2021 | 11:30AM <br />
            <span className={styles["label"]}>Venue :</span> Virtual AGM through Video Conference / Other Audio Visual Means
          </p>
        </div>
      </div>
    </section>
  );
}
