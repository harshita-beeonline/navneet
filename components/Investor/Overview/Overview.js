import React from "react";
import Image from "next/image";
import styles from "../../../styles/Investor/Overview.module.scss";

import chartImage from "../../../public/images/InvestorsLandingPage/overview.png";

export default function Overview() {
  return (
    <section className={styles["overview"]} aria-labelledby="overview-title">
      <div className={styles["inner"]}>
        <h2 id="overview-title" className={styles["title"]}>
          Overview
        </h2>

        <p className={styles["subtitle"]}>
          In the financial year 2019-20, the Company’s revenue grew by 6.32%
          from INR 1,37,992 Lakh to INR 1,46,719 Lakh.
        </p>

        <div className={styles["growthRow"]}>
          <article className={styles["growthBox"]}>
            <h3 className={styles["growthHeading"]}>Stationery growth</h3>
            <div className={styles["growthBody"]}>
              <div className={styles["percentage"]}>35.10%</div>
              <div className={styles["separator"]} />
              <p className={styles["growthNote"]}>
                With a turnover of <strong>₹ 1,06,052 Lacs</strong> as compared
                to <strong>₹ 80,297 Lacs</strong> in the previous FY 2020-21.
              </p>
            </div>
          </article>

          <article className={styles["growthBox"]}>
            <h3 className={styles["growthHeading"]}>Publication growth</h3>
            <div className={styles["growthBody"]}>
              <div className={styles["percentage"]}>26.09%</div>
              <div className={styles["separator"]} />
              <p className={styles["growthNote"]}>
                With a turnover of <strong>₹ 1,06,052 Lacs</strong> as compared
                to <strong>₹ 80,297 Lacs</strong> in the previous FY 2020-21.
              </p>
            </div>
          </article>
        </div>

        <div className={styles["divider"]} />

        {/* Chart Card */}
        <div className={styles["chartSection"]}>
          <div className={styles["chartCard"]}>
            <h4 className={styles["chartTitle"]}>TOTAL REVENUE (₹ in Lakhs)</h4>
            <Image
              src={chartImage}
              alt="Total revenue chart for FY2016 to FY2020"
              className={styles["chartImage"]}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
