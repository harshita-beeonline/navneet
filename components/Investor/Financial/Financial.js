import React from "react";
import styles from "../../../styles/Investor/Financial.module.scss";

const YEARS = ["2021-22", "2020-21", "2019-20", "2018-19", "2017-18"];

const ROWS = [
  { label: "Revenue", highlight: true, values: ["108,071", "81,749", "146,719", "137,992", "116,145"] },
  { label: "PBDIT", highlight: true, values: ["19,035", "12,585", "34,351", "30,703", "26,392"] },
  { label: "Interest", values: ["368", "684", "1,307", "1,186", "597"] },
  { label: "PBDT", highlight: true, values: ["18,667", "11,901", "33,044", "29,517", "25,794"] },
  { label: "Depreciation", values: ["3,270", "3,473", "2,914", "2,446", "2,349"] },
  { label: "PBT", highlight: true, values: ["15,397", "8,428", "31,109", "27,071", "23,445"] },
  { label: "Tax", values: ["5,315", "2,265", "14,720", "9,324", "8,124"] },
  { label: "PAT", highlight: true, values: ["14,662", "6,163", "16,389", "17,747", "15,322"] },
  { label: "PAT Margin(%)", highlight: true, values: ["9.51", "8.16", "", "13.04", "13.53"] },
  { label: "No. Equity Shares", values: ["226,213,181", "228,870,500", "228,870,500", "228,870,500", "233,558,000"] },
  { label: "Equity Capital", values: ["4,524", "4,577", "4,577", "4,577", "4,671"] },
  { label: "Book Value", values: ["49.83", "45.4", "42.2", "38.1", "34.6"] },
  { label: "Dividend", highlight: true, values: ["3,393", "2,289", "6,866", "2,289", "3,503"] },
  { label: "Dividend(%)", highlight: true, values: ["75", "100", "150", "50", "75"] },
  { label: "Dividend Payout % to Net Profits", values: ["23.1", "44.7", "37.7", "15.5", "27.5"] },
  { label: "Reserves & Surplus", values: ["108,190", "99,309", "91,995", "82,619", "76,170"] },
  { label: "Gross Block", values: ["56,280", "54,100", "52,196", "44,372", "43,193"] },
  { label: "Net Block", values: ["20,487", "21,675", "22,127", "18,698", "17,724"] },
  { label: "Net Worth", values: ["112,339", "103,887", "96,572", "87,196", "80,841"] },
  { label: "Return on Net Worth(%)", values: ["0.13", "5.9", "22.7", "20.4", "19.0"] },
  { label: "EPS (Pre-Tax) (Rs. 2/- per share)", values: ["6.8", "3.7", "12.9", "11.8", "10"] },
  { label: "EPS (Post Tax) (Rs. 2/- per share)", values: ["6.5", "2.7", "9.6", "7.7", "6.6"] },
  { label: "CEPS (Pre-Tax) (Rs. 2/- per share)", values: ["8.3", "5.2", "14.4", "12.8", "11.0"] },
  { label: "CEPS (Post Tax) (Rs. 2/- per share)", values: ["7.9", "4.2", "11.1", "8.7", "7.6"] },
];

export default function Financial() {
  return (
    <section className={styles.financialsSection}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Financials</h2>

        <p className={styles.tagline}>
          We believe in being transparent with all our stakeholders and sharing
          correct data year by year so that you can partner in our growth story.
          Here are 5 Years Financial Highlights – Standalone (INR in Lacs).
        </p>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>
            5-year financial highlights – standalone (in INR lacs)
          </h3>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.labelCol}>#</th>
                  {YEARS.map((y) => (
                    <th key={y} className={styles.yearCol}>{y}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, idx) => (
                  <tr key={`${row.label}-${idx}`}>
                    <td className={`${styles.label} ${row.highlight ? styles.highlight : ""}`}>
                      {row.label}
                    </td>
                    {row.values.map((v, i) => (
                      <td key={`${row.label}-${i}`} className={styles.value}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
