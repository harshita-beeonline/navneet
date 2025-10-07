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

  
  const links = {
    "2023-24": "https://img.modxcomputers.com/navneetpdf/1759739790344-annual-report-24-25.pdf",
    "2022-23": "https://img.modxcomputers.com/navneetpdf/1759739857238-annual-report-23-24.pdf",
    "2021-22": "https://img.modxcomputers.com/navneetpdf/1759739957258-annualreport-2022-23.pdf",
    "2020-21": "https://img.modxcomputers.com/navneetpdf/1759739994557-Navneet_AR-2021-22_Annual_Report.pdf",
    "2019-20": "https://img.modxcomputers.com/navneetpdf/1759752597686-annual-report-20-21_compressed.pdf",
    "2018-19": "https://img.modxcomputers.com/navneetpdf/1759740425343-Annual_Report_2018-2019.pdf",
  };

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
              {links[year] ? (
                <a href={links[year]} target="_blank" rel="noopener noreferrer">
                  <span>{year}</span>
                  <span className={styles["icon"]}>↗</span>
                </a>
              ) : (
                <span>{year}</span> 
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}