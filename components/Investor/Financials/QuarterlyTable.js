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

  
  const links = {
    "2025-26": {
      Q1: "https://img.modxcomputers.com/navneetpdf/1759730593560-2025-2056-Q1.pdf",
      Q2: "https://img.modxcomputers.com/navneetpdf/1775627745973-2025-2026-Q2.pdf",
      Q3: "https://img.modxcomputers.com/navneetpdf/1775628153740-2025-2026-Q3.pdf",
    },
    "2024-25": {
      Q1: "https://img.modxcomputers.com/navneetpdf/1759730699654-2024-2025-Q1.pdf",
      Q2: "https://img.modxcomputers.com/navneetpdf/1759731207310-2024-2025-Q2.pdf",
      Q3: "https://img.modxcomputers.com/navneetpdf/1759731634662-2024-2025-Q3.pdf",
      Q4: "https://img.modxcomputers.com/navneetpdf/1759732101489-2024-2025-Q4.pdf",
    },
    "2023-24": {
      Q1: "https://img.modxcomputers.com/navneetpdf/1759730825740-2023_2024-Q1.pdf",
      Q2: "https://img.modxcomputers.com/navneetpdf/1759731278809-2023_2024-Q2.pdf",
      Q3: "https://img.modxcomputers.com/navneetpdf/1759731683570-2023_2024-Q3.pdf",
      Q4: "https://img.modxcomputers.com/navneetpdf/1759732152718-2023_2024-Q4.pdf",
    },
    "2022-23": {
      Q1: "https://img.modxcomputers.com/navneetpdf/1759730968656-2022-2023-Q1.pdf",
      Q2: "https://img.modxcomputers.com/navneetpdf/1759731353711-2022-2023-Q2.pdf",
      Q3: "https://img.modxcomputers.com/navneetpdf/1759731758509-2022-2023-Q3.pdf",
      Q4: "https://img.modxcomputers.com/navneetpdf/1759732241799-2022-2023-Q4.pdf",
    },
    "2021-22": {
      Q1: "https://img.modxcomputers.com/navneetpdf/1759731040818-2021-2022-Q1.pdf",
      Q2: "https://img.modxcomputers.com/navneetpdf/1759731438924-2021-2022-Q2.pdf",
      Q3: "https://img.modxcomputers.com/navneetpdf/1759731840564-2021-2022-Q3.pdf",
      Q4: "https://img.modxcomputers.com/navneetpdf/1759732325748-2021-2022-Q4.pdf",
    },
    "2020-21": {
      Q1: "https://img.modxcomputers.com/navneetpdf/1759731094136-2024-2025-Q1.pdf",
      Q2: "https://img.modxcomputers.com/navneetpdf/1759731471939-2020-2021-Q2.pdf",
      Q3: "https://img.modxcomputers.com/navneetpdf/1759731893539-2020-2021-Q3.pdf",
      Q4: "https://img.modxcomputers.com/navneetpdf/1759732396289-2020-2021-Q4.pdf",
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
                    {links[year]?.[q] ? (
                      <a
                        href={links[year][q]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {q}
                      </a>
                    ) : (
                      <span className={styles.blackText}>{q}</span>
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
