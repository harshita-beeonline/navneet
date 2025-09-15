import styles from "../../../styles/Investor/Financials/QuarterlyTable.module.scss";

export default function QuarterlyTable({ title, breadcrumb }) {
  const years = [
    "2025-26",
    "2024-25",
    "2023-24",
    "2022-23",
    "2021-22",
    "2020-21",
  ];
  const quarters = ["Q1", "Q2", "Q3", "Q4"];

  return (
    <div>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <tbody>
            {years.map((year, yIndex) => (
              <tr key={yIndex}>
                <td>{year}</td>
                {quarters.map((q, qIndex) => (
                  <td key={qIndex}>
                    {yIndex === 0 &&
                    (q === "Q2" || q === "Q3" || q === "Q4") ? (
                      <span className={styles.blackText}>{q}</span>
                    ) : (
                      <a
                        href={`/${year}/${q.toLowerCase()}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {q}
                      </a>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
