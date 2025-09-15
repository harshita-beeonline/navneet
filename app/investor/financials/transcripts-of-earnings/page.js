import styles from "../../../../styles/Investor/Financials/Transcripts.module.scss";

export default function Transcripts() {
  const years = [
    "FY 2025-26",
    "FY 2024-25",
    "FY 2023-24",
    "FY 2022-23",
    "FY 2021-22",
  ];
  const quarters = ["Q1", "Q2", "Q3", "Q4"];
  const recordings = [
    "Audio Recording Of Earnings Call Held on 04th August, 2023",
    "Audio Recording Of Investor Meet Held on 10th February, 2023",
    "Audio Recording Of Investor Meet Held on 11th November, 2022",
    "Audio Recording Of Investor Meet Held on 03th August, 2022",
    "Audio Recording Of Investor Meet Held on 19th May, 2022",
  ];

  return (
    <section className={styles["transcripts-section"]}>
      {/* Breadcrumb */}
      <div className={styles["heading-data"]}>
        <p className={styles["heading"]}>Investor</p>
        <div className={styles["dot"]}></div>
        <p className={styles["heading"]}>Financials</p>
        <div className={styles["dot"]}></div>
        <p className={styles["data"]}>Transcripts</p>
      </div>

      {/* Section Title */}
      <div className={styles["data-heading"]}>Transcripts</div>

      {/* Table */}
      <div className={styles["table-wrapper"]}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Financial Year</th>
              {quarters.map((q, index) => (
                <th key={index}>{q}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {years.map((year, yIndex) => (
              <tr key={yIndex}>
                <td>{year}</td>
                {quarters.map((q, qIndex) => (
                  <td key={qIndex}>
                    <a
                      href={`/${year}/${q.toLowerCase()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Transcript
                    </a>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Audio Recordings */}
      <div className={styles["audio-section"]}>
        <h3 className={styles["audio-title"]}>Audio Recordings</h3>
        <ul className={styles["audio-list"]}>
          {recordings.map((rec, index) => (
            <li key={index} className={styles["audio-item"]}>
              {rec}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
