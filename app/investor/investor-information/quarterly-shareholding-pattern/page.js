import styles from "../../../../styles/Investor/InvestorInformation/QuarterlyShareholdingPattern.module.scss";

const qspdata = [
  {
    id: 1,
    text: "Share Holding Pattern As on 30th June 2025",
    link: "#",
  },
  {
    id: 2,
    text: "Share Holding Pattern As on 31st March 2025",
    link: "#",
  },
  {
    id: 3,
    text: "Share Holding Pattern As on 31st Dec 2024",
    link: "#",
  },
];

export default function QuarterlyShareholdingPattern() {
  return (
    <section className={styles["qsp-section"]}>
      {/* Breadcrumb */}
      <div className={styles["qsp-breadcrumb"]}>
        <p className={styles["qsp-heading"]}>Investor</p>
        <div className={styles["qsp-dot"]}></div>
        <p className={styles["qsp-subheading"]}>Investor Information</p>
        <div className={styles["qsp-dot"]}></div>
        <p className={styles["qsp-data"]}>Quarterly Share Holding Pattern</p>
      </div>

      {/* Section Title */}
      <div className={styles["qsp-title"]}>Quarterly Share Holding Pattern</div>

      {/* Ordered List */}
      <div className={styles["qsp-list"]}>
        <ol>
          {qspdata.map((item) => (
            <li key={item.id}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.text}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
