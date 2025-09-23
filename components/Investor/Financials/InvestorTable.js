import styles from "../../../styles/Investor/Financials/QuarterlyTable.module.scss";

export default function InvestorTable({ title, breadcrumb }) {
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
      Q1: "https://navneet.com/wp-content/uploads/2025/08/Investors-Presentation-BM-07-08-2025_Signed.pdf",
      // Q2, Q3, Q4 intentionally left out (plain text)
    },
    "2024-25": {
      Q1: "https://navneet.com/wp-content/uploads/2024/08/Navneet_Investor-Presentation_Q1FY25.pdf",
      Q2: "https://navneet.com/wp-content/uploads/2024/11/Navneet_Investor-Presentation_Q2FY25.pdf",
      Q3: "https://navneet.com/wp-content/uploads/2025/02/Annoucement_Investors-Presentation_Signed.pdf",
      Q4: "https://navneet.com/wp-content/uploads/2025/05/Navneet-Education-Limited-Investor-Presentation-Q4-FY25.pdf",
    },
    "2023-24": {
      Q1: "https://navneet.com/wp-content/uploads/2023/08/Navneet-Education-Limited-Investor-Presentation-Q1FY24.pdf",
      Q2: "https://navneet.com/wp-content/uploads/2023/11/Navneet-Education-Limited-Investor-Presentation-Q2FY24_V1.pdf",
      Q3: "https://navneet.com/wp-content/uploads/2024/02/Navneet-Education-Limited-Investor-Presentation-Q3FY24_V1-1.pdf",
      Q4: "https://navneet.com/wp-content/uploads/2024/05/Navneet-Education-Limited-Investor-Presentation-Q4FY24.pdf",
    },
    "2022-23": {
      Q1: "https://navneet.com/pdfs/Presentations/NEL_Investor%20Presentation_Q1_FINAL.PDF",
      Q2: "https://navneet.com/pdfs/Presentations/Investor-Presentati-n-As-On-30th-September-2022.pdf",
      Q3: "https://navneet.com/pdfs/Presentations/NEL%20Investor%20Presentation%20Q3-31st-december-2022.pdf",
      Q4: "https://navneet.com/pdfs/Presentations/Update%20Q4%20of%20investor%20presentation.pdf",
    },
    "2021-22": {
      Q1: "https://navneet.com/pdfs/Presentations/Investor%20Presentation%20As%20On%2030th%20June,%202021.pdf",
      Q2: "https://navneet.com/pdfs/Presentations/Navneet%20Investor%20Presentation%20Q2FY22.pdf",
      Q3: "https://navneet.com/pdfs/Presentations/Investor%20Presentation%20As%20On%2031st%20December,%202021.pdf",
      Q4: "https://navneet.com/pdfs/Presentations/Navneet%20Education%20Ltd.%20Investor%20PPT%20-%20Final.pdf",
    },
    "2020-21": {
      Q1: "https://navneet.com/",
      Q2: "https://navneet.com/pdfs/Presentations/Investor%20Presentation%20As%20On%2030th%20%20September,%202020.pdf",
      Q3: "https://navneet.com/pdfs/Investor%20Presentation%20As%20On%2031st%20December,%202020.pdf",
      Q4: "https://navneet.com/pdfs/Presentations/Investor%20Presentation%20As%20On%2031st%20March,%202021.pdf",
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