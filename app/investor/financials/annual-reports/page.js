import styles from "../../../../styles/Investor/Financials/AnnualReports.module.scss";

export default function AnnualReports() {
  const years = [
    "2023-24",
    "2022-23",
    "2021-22",
    "2020-21",
    "2019-20",
    "2018-19",
  ];

  return (
    <section className={styles["annual-section"]}>
      {/* Breadcrumb */}
      <div className={styles["heading-data"]}>
        <p className={styles["heading"]}>Investor</p>
        <div className={styles["dot"]}></div>
        <p className={styles["heading"]}>Financials</p>
        <div className={styles["dot"]}></div>
        <p className={styles["data"]}>Annual Reports</p>
      </div>

      {/* Section Title */}
      <div className={styles["data-heading"]}>Annual Reports</div>

      {/* Report List */}
      <div className={styles["list-wrapper"]}>
        <ul className={styles["report-list"]}>
          {years.map((year, index) => (
            <li key={index}>
              <a href={`/${year}`} target="_blank" rel="noopener noreferrer">
                <span>{year}</span>
                <span className={styles["icon"]}>↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
