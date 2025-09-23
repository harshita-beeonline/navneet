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

  // <-- ADDED: links for 21 quarters (placeholders). Keep 2025-26 Q2/Q3/Q4 intentionally absent.
  const links = {
    "2025-26": {
      Q1: "https://navneet.com/wp-content/uploads/2025/08/Stand-Conso-Results_SE-1.pdf",
      // Q2, Q3, Q4 intentionally left out (plain text)
    },
    "2024-25": {
      Q1: "https://navneet.com/wp-content/uploads/2024/11/Q1.pdf",
      Q2: "https://navneet.com/wp-content/uploads/2024/11/Results-Q2.pdf",
      Q3: "https://navneet.com/wp-content/uploads/2025/04/Outcome-of-BM.pdf",
      Q4: "https://navneet.com/wp-content/uploads/2025/05/Outcome-of-BM.pdf",
    },
    "2023-24": {
      Q1: "https://navneet.com/wp-content/uploads/2023/08/covering.pdf",
      Q2: "https://navneet.com/wp-content/uploads/2023/11/uploadingdocument-navneet.pdf",
      Q3: "https://navneet.com/wp-content/uploads/2024/02/Financialresults.pdf",
      Q4: "https://navneet.com/wp-content/uploads/2024/11/Q4.pdf",
    },
    "2022-23": {
      Q1: "https://navneet.com/wp-content/uploads/2022/12/June_Final_Results.pdf",
      Q2: "https://navneet.com/wp-content/uploads/2022/12/September_Final_Results.PDF",
      Q3: "https://navneet.com/wp-content/uploads/2022/12/June_Final_Results.pdf",
      Q4: "https://navneet.com/wp-content/uploads/2023/08/1.Financials-Results.pdf",
    },
    "2021-22": {
      Q1: "https://navneet.com/pdfs/Quarterly_Results/Quarter%20Ended%2030th%20June%202021.pdf",
      Q2: "https://navneet.com/pdfs/Quarterly_Results/2nd%20quarter_300921.pdf",
      Q3: "https://navneet.com/pdfs/Quarterly_Results/Quarter%20And%20Nine%20Month%20Ended%2031st%20December%2C%202021%20%28Unaudited%29.pdf",
      Q4: "https://navneet.com/pdfs/Quarterly_Results/results20220518_14192484.pdf",
    },
    "2020-21": {
      Q1: "https://navneet.com/pdfs/Quarterly_Results/Quarter%20Ended%2030th%20June,%202020%209%20(Unaudited).pdf",
      Q2: "https://navneet.com/pdfs/Quarterly_Results/Quarter%20And%20Half%20Year%20Ended%2030th%20September,%202020.PDF",
      Q3: "https://navneet.com/pdfs/Quarter%20And%20Nine%20Month%20Ended%2031st%20December,%202020%20(Unaudited).pdf",
      Q4: "https://navneet.com/pdfs/Quarterly_Results/Audited%20Financial%20Result%2031st%20March,%202021.pdf",
    },
  };

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
                    {/* keep 2025-26 Q2/Q3/Q4 as plain text (unchanged) */}
                    {year === "2025-26" &&
                    (q === "Q2" || q === "Q3" || q === "Q4") ? (
                      <span className={styles.blackText}>{q}</span>
                    ) : (
                      // for all other cells, use the links map and open in new tab
                      <a
                        href={
                          links[year] && links[year][q]
                            ? links[year][q]
                            : `/${year}/${q.toLowerCase()}`
                        }
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