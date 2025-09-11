import styles from "../../../../styles/Investor/InvestorInformation/HistoricalFinancialSnapshot.module.scss";

const YEARS = ["2021-22", "2020-21", "2019-20", "2018-19"];

const ROWS = [
  { label: "Revenue", highlight: true, values: ["108,071", "81,749", "146,719", "137,992"] },
  { label: "PBDIT", highlight: true, values: ["19,035", "12,585", "34,351", "30,703"] },
  { label: "Interest", values: ["368", "684", "1,307", "1,186"] },
  { label: "PBDT", highlight: true, values: ["18,667", "11,901", "33,044", "29,517"] },
  { label: "Depreciation", values: ["3,270", "3,473", "2,914", "2,446"] },
  { label: "PBT", highlight: true, values: ["15,397", "8,428", "29,514", "27,071"] },
  { label: "Tax", values: ["5,315", "2,265", "7,579", "9,324"] },
  { label: "PAT", highlight: true, values: ["14,662", "6,163", "21,935", "17,747"] },
  { label: "PAT Margin(%)", highlight: true, values: ["9.51", "8.16", "16.39", "13.04"] },
  { label: "No. Equity Shares", values: ["226,213,181", "228,870,500", "228,870,500", "228,870,500"] },
  { label: "Equity Capital", values: ["4,524", "4,577", "4,577", "4,577"] },
  { label: "Book Value", values: ["49.83", "45.4", "42.2", "38.1"] },
  { label: "Dividend", highlight: true, values: ["3,393", "2,289", "6,866", "2,289"] },
  { label: "Dividend(%)", highlight: true, values: ["75", "100", "150", "50"] },
  { label: "Dividend Payout % to Net Profits", values: ["23.1", "44.7", "37.7", "15.5"] },
  { label: "Reserves & Surplus", values: ["108,190", "99,309", "91,995", "82,619"] },
  { label: "Gross Block", values: ["56,280", "54,100", "52,196", "44,372"] },
  { label: "Net Block", values: ["20,487", "21,675", "22,127", "18,698"] },
  { label: "Net Worth", values: ["112,339", "103,887", "96,572", "87,196"] },
  { label: "Return on Net Worth(%)", values: ["0.13", "5.9", "22.7", "20.4"] },
  { label: "EPS (Pre-Tax) (Rs. 2/- per share)", values: ["6.8", "3.7", "12.9", "11.8"] },
  { label: "EPS (Post Tax) (Rs. 2/- per share)", values: ["6.5", "2.7", "9.6", "7.7"] },
  { label: "CEPS (Pre-Tax) (Rs. 2/- per share)", values: ["8.3", "5.2", "14.4", "12.8"] },
  { label: "CEPS (Post Tax) (Rs. 2/- per share)", values: ["7.9", "4.2", "11.1", "8.7"] },
];

export default function HistoricalFinancialSnapshot() {
  return (
    <section className={styles["hfs-section"]}>
      {/* Breadcrumb */}
      <nav className={styles["breadcrumb"]} aria-label="Breadcrumb">
        <span className={styles["crumbStrong"]}>Investor</span>
        <span className={styles["dot"]}></span>
        <span className={styles["crumb"]}>Investor Information</span>
        <span className={styles["dot"]}></span>
        <span className={styles["crumbStrong"]}>Historical Financial Snapshot</span>
      </nav>

      {/* Page Title */}
      <h1 className={styles["pageTitle"]}>Historical Financial Snapshot</h1>

      {/* Card with table */}
      <div className={styles["card"]}>
        <div className={styles["tableHeader"]}>
          5-YEAR FINANCIAL HIGHLIGHTS – STANDALONE (IN INR LACS)
        </div>

        <div className={styles["tableWrap"]}>
          <table className={styles["table"]}>
            <thead>
              <tr>
                <th className={styles["labelCol"]}>#</th>
                {YEARS.map((y) => (
                  <th key={y} className={styles["yearCol"]}>{y}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, idx) => (
                <tr key={idx}>
                  <td className={`${styles["label"]} ${row.highlight ? styles["highlight"] : ""}`}>
                    {row.label}
                  </td>
                  {row.values.map((v, i) => (
                    <td key={i} className={styles["value"]}>
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
