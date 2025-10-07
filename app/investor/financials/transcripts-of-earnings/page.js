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

  
  const links = {
    "FY 2025-26": {
      Q1: "https://img.modxcomputers.com/navneetpdf/1759745752216-Transcript-of-Earning-Call-2025-2026-Q1.pdf",
    },
    "FY 2024-25": {
      Q1: "https://img.modxcomputers.com/navneetpdf/1759745816921-Transcript-of-Earning-Call-2024-2025-Q1.pdf",
      Q2: "https://img.modxcomputers.com/navneetpdf/1759746335163-Transcript-of-Earning-Call-2024-2025-Q2.pdf",
      Q3: "https://img.modxcomputers.com/navneetpdf/1759746816046-Transcript-of-Earning-Call-2024-2025-Q3.pdf",
      Q4: "https://img.modxcomputers.com/navneetpdf/1759747031507-Transcript-of-Earning-Call-2024-2025-Q4.pdf",
    },
    "FY 2023-24": {
      Q1: "https://img.modxcomputers.com/navneetpdf/1759745920960-Transcript-of-Earning-Call-2023-2024-Q1.pdf",
      Q2: "https://img.modxcomputers.com/navneetpdf/1759746543324-Transcript-of-Earning-Call-2023-2024-Q2.pdf",
      Q3: "https://img.modxcomputers.com/navneetpdf/1759746880327-Transcript-of-Earning-Call-2023-2024-Q3.pdf",
      Q4: "https://img.modxcomputers.com/navneetpdf/1759747092326-Transcript-of-Earning-Call-2023-2024-Q4.pdf",
    },
    "FY 2022-23": {
      Q1: "https://img.modxcomputers.com/navneetpdf/1759746237487-Transcript-of-Earning-Call-2022-2023-Q1.pdf",
      Q2: "https://img.modxcomputers.com/navneetpdf/1759746642210-Transcript-of-Earning-Call-2022-2023-Q2.pdf",
      Q3: "https://img.modxcomputers.com/navneetpdf/1759746925820-Transcript-of-Earning-Call-2022-2023-Q3.pdf",
      Q4: "https://img.modxcomputers.com/navneetpdf/1759747155933-Transcript-of-Earning-Call-2022-2023-Q4.pdf",
    },
    "FY 2021-22": {
      Q1: "https://img.modxcomputers.com/navneetpdf/1759746199767-Transcript-of-Earning-Call-2021-2022-Q1.pdf",
      Q2: "https://img.modxcomputers.com/navneetpdf/1759746717333-Transcript-of-Earning-Call-2021-2022-Q2.pdf",
      Q3: "https://img.modxcomputers.com/navneetpdf/1759746954881-Transcript-of-Earning-Call-2021-2022-Q3.pdf",
      Q4: "https://img.modxcomputers.com/navneetpdf/1759747188080-Transcript-of-Earning-Call-2021-2022-Q4.pdf",
    },
  };

  
  const recordings = [
    {
      title: "Audio Recording Of Earnings Call Held on 04th August, 2023",
      url: "https://img.modxcomputers.com/navneetpdf/1759745192568-Audio-Recording-Of-Earnings-Call-Held-on-04th-August-2023.mp3",
    },
    {
      title: "Audio Recording Of Investor Meet Held on 10th February, 2023",
      url: "https://img.modxcomputers.com/navneetpdf/1759745313133-Audio-Recording-Of-Investor-Meet-Held-on-10th-February-2023.mp3",
    },
    {
      title: "Audio Recording Of Investor Meet Held on 11th November, 2022",
      url: "https://img.modxcomputers.com/navneetpdf/1759745417018-Audio-Recording-Of-Investor-Meet-Held-On-11th-November-2022.mp3",
    },
    {
      title: "Audio Recording Of Investor Meet Held on 03th August, 2022",
      url: "https://img.modxcomputers.com/navneetpdf/1759745607293-Audio-Recording-Of-Investor-Meet-Held-on-3th-February-2022.mp3",
    },
    {
      title: "Audio Recording Of Investor Meet Held on 19th May, 2022",
      url: "https://img.modxcomputers.com/navneetpdf/1759745541137-Audio-Recording-Of-Investor-Meet-Held-on-19th-February-2022.mp3",
    },
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
                    {links[year] && links[year][q] ? (
                      <a
                        href={links[year][q]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles["plain-link"]}
                      >
                        Transcript
                      </a>
                    ) : (
                      <span className={styles["blackText"]}>Transcript</span>
                    )}
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
              <a
                href={rec.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles["plain-link"]}
              >
                {rec.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}