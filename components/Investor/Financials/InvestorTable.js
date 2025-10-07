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

  const links = {
    "2025-26": {
      Q1: "https://img.modxcomputers.com/navneetpdf/1759733342592-2025-2026-Q1.pdf",
      
    },
    "2024-25": {
      Q1: "https://img.modxcomputers.com/navneetpdf/1759733400022-2024-2025-Q1.pdf",
      Q2: "https://img.modxcomputers.com/navneetpdf/1759733742817-2024-2025-Q2.pdf",
      Q3: "https://img.modxcomputers.com/navneetpdf/1759734050886-2024-2025-Q3.pdf",
      Q4: "https://img.modxcomputers.com/navneetpdf/1759734411355-2024-2025-Q4.pdf",
    },
    "2023-24": {
      Q1: "https://img.modxcomputers.com/navneetpdf/1759733504871-2023-2024-Q1.pdf",
      Q2: "https://img.modxcomputers.com/navneetpdf/1759733800716-2023-2024-Q2.pdf",
      Q3: "https://img.modxcomputers.com/navneetpdf/1759734103179-2023-2024-Q3.pdf",
      Q4: "https://img.modxcomputers.com/navneetpdf/1759734470917-2023-2024-Q4.pdf",
    },
    "2022-23": {
      Q1: "https://img.modxcomputers.com/navneetpdf/1759733553594-2022-2023-Q1.pdf",
      Q2: "https://img.modxcomputers.com/navneetpdf/1759733884549-2022-2023-Q2.pdf",
      Q3: "https://img.modxcomputers.com/navneetpdf/1759734184978-2022-2023-Q3.pdf",
      Q4: "https://img.modxcomputers.com/navneetpdf/1759735200474-2022-2023-Q4.pdf",
    },
    "2021-22": {
      Q1: "https://img.modxcomputers.com/navneetpdf/1759733596607-2021-2022-Q1.pdf",
      Q2: "https://img.modxcomputers.com/navneetpdf/1759733928602-2021-2022-Q2.pdf",
      Q3: "https://img.modxcomputers.com/navneetpdf/1759734275860-2021-2022-Q3.pdf",
      Q4: "https://img.modxcomputers.com/navneetpdf/1759735252170-2021-2022-Q4.pdf",
    },
    "2020-21": {
      Q1: "https://navneet.com/",
      Q2: "https://img.modxcomputers.com/navneetpdf/1759733968777-2020-2021-Q2.pdf",
      Q3: "https://img.modxcomputers.com/navneetpdf/1759734312895-2020-2021-Q3.pdf",
      Q4: "https://img.modxcomputers.com/navneetpdf/1759735290537-2020-2021-Q4.pdf",
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
                  
                    {year === "2025-26" &&
                    (q === "Q2" || q === "Q3" || q === "Q4") ? (
                      <span className={styles.blackText}>{q}</span>
                    ) : (
                      
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