"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/Investors.module.scss";

const Investors = () => {
  const [activeExchange, setActiveExchange] = useState("BSE");

  return (
    <div className={styles["investors-section-main"]}>
      <div className={styles["container"]}>
        <h2 className={styles["investors-section-title"]}>Investors</h2>
        <p className={styles["investors-description"]}>
          We believe in being transparent with all our stakeholders and sharing
          correct data year by year so that you can partner in our growth story.
        </p>

        <div className={styles["investors-grid"]}>
          {/* Left Column */}
          <div className={styles["left-column"]}>
            <div className={styles["grid-item"]}>
              <div className={`${styles["investor-card"]} ${styles["yellow"]}`}>
                <p className={styles["card-type"]}>Quartely Report</p>
                <h5 className={styles["card-title"]}>
                  Navneet announces fourth quarter and annual results on April
                  14, 2021
                </h5>
                <a
  href="https://www.business-standard.com/markets/capital-market-news/navneet-education-consolidated-net-profit-declines-77-67-in-the-june-2025-quarter-125080701267_1.html"
  className={styles["card-link"]}
  target="_blank"
  rel="noopener noreferrer"
>
  View more
</a>

              </div>
            </div>

            <div className={styles["grid-item"]}>
              <div className={`${styles["investor-card"]} ${styles["blue"]}`}>
                <p className={styles["blue-card-type"]}>Annual Report</p>
                <h5 className={styles["blue-card-title"]}>
                  Download Annual Report 2021
                </h5>
               <a
  href="https://navneet.com/annual-report-23-24.pdf"
  className={styles["blue-card-link"]}
  target="_blank"
  rel="noopener noreferrer"
>
 Download
</a>
              </div>
            </div>

            <div className={styles["grid-item"]}>
              <div className={`${styles["investor-card"]} ${styles["blue"]}`}>
                <p className={styles["blue-card-type"]}>Annual Report 2024</p>
                <h5 className={styles["blue-card-title"]}>
                  Creating Value Through Learning, Adapting & Progress

                </h5>
                             <a
  href="https://navneet.com/annual-report-23-24.pdf"
  className={styles["blue-card-link"]}
  target="_blank"
  rel="noopener noreferrer"
>
                  Read report
                </a>
              </div>
            </div>

            <div className={styles["grid-item"]}>
              <div className={`${styles["investor-card"]} ${styles["yellow"]}`}>
                <p className={styles["card-type"]}>Financial & Filings</p>
                <h5 className={styles["card-title"]}>
                  View the complete financial highlights for the last three
                  years
                </h5>
               <a
  href="https://www.moneycontrol.com/news/business/earnings/navneet-education-q4-pat-seen-up-7-8-yoy-to-rs-51-7-cr-pl-capital-12994250.html"
  className={styles["card-link"]}
  target="_blank"
  rel="noopener noreferrer"
>
 View more
</a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles["right-column"]}>
            <div className={styles["right-annual-card"]}>
              <div className={styles["right-annual-card-content"]}>
                <div
                  className={`${styles["right-annual-card-switch"]} ${
                    activeExchange === "BSE"
                      ? styles["active-bse"]
                      : styles["active-nse"]
                  }`}
                >
                  <div className={styles["switch-highlight"]} />
                  <div
                    className={`${styles["switch-segment"]} ${
                      activeExchange === "BSE" ? styles.active : ""
                    }`}
                    onClick={() => setActiveExchange("BSE")}
                  >
                    BSE
                  </div>
                  <div
                    className={`${styles["switch-segment"]} ${
                      activeExchange === "NSE" ? styles.active : ""
                    }`}
                    onClick={() => setActiveExchange("NSE")}
                  >
                    NSE
                  </div>
                </div>
                <div className={styles["right-annual-card-price"]}>₹ 142.25</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investors;
