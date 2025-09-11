import styles from "../../../../styles/Investor/InvestorInformation/StockInformation.module.scss";

const ROWS = [
  { label: "Mkt cap", value: "2.61T Cr" },
  { label: "P/E ratio", value: "12.24" },
  { label: "Div yield", value: "1.30%" },
  { label: "52-wk high", value: "151.00" },
  { label: "52-wk low", value: "83.00" },
];

export default function StockInformation() {
  return (
    <section className={styles.stockSection}>
      {/* ===== Breadcrumb ===== */}
      <div className={styles.breadcrumb}>
        <p className={styles.crumbStrong}>Investor</p>
        <span className={styles.dot}></span>
        <p className={styles.crumb}>Investor Information</p>
        <span className={styles.dot}></span>
        <p className={styles.crumbStrong}>Stock Information FY 2022-23</p>
      </div>

      {/* ===== Title ===== */}
      <h1 className={styles.pageTitle}>Stock Information FY 2022-23</h1>

      {/* ===== Company Info ===== */}
      <p className={styles.companyInfo}>
        <span>Navneet Education LTD.</span> NSE:{" "}
        <span className={styles.symbol}>NAVNETEDUL</span>
      </p>

      {/* ===== Table ===== */}
      <div className={styles.tableWrapper}>
        <table className={styles.infoTable}>
          <tbody>
            {ROWS.map((row, index) => (
              <tr key={index}>
                <td className={styles.label}>{row.label}</td>
                <td className={styles.value}>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
