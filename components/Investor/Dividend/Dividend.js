import React from "react";
import styles from "../../../styles/Investor/Dividend.module.scss";

const DATA = [
  { year: "2019 - 2020", dividend: "146,719", details: "25%" },
  { year: "2019 - 2020", dividend: "146,719", details: "50%" },
  { year: "2018 - 2019", dividend: "146,719", details: "125%" },
  { year: "2017 - 2018", dividend: "146,719", details: "85%" },
  { year: "2016 - 2017", dividend: "146,719", details: "90%" },
  { year: "2015 - 2016", dividend: "146,719", details: "100%" },
];

export default function Dividend() {
  return (
    <section className={styles.dividend}>
      <div className={styles.text}>
        <h2>Dividend paid in the last 5 years</h2>
        <p>
          We believe in being transparent with all our stakeholders and sharing
          correct data year by year so that you can partner in our growth story.{" "}
          Here are 5 Years Financial Highlights – Standalone (INR in Lacs).
        </p>
      </div>
      <div className={styles.tableWrapper}>
        <table>
          <thead>
            <tr>
              <th>YEAR</th>
              <th>DIVIDEND</th>
              <th>DETAILS</th>
            </tr>
          </thead>
          <tbody>
            {DATA.map((row, idx) => (
              <tr key={idx}>
                <td>{row.year}</td>
                <td>{row.dividend}</td>
                <td>{row.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
