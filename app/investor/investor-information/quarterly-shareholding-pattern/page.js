import styles from "../../../../styles/Investor/InvestorInformation/QuarterlyShareholdingPattern.module.scss";

const qspdata = [
  {
    text: "Share Holding Pattern As on 30th June 2025",
    link: "https://navneet.com/wp-content/uploads/2025/08/Newspaper-Advertisement_Q126_Signed.pdf",
  },
  {
    text: "Share Holding Pattern As on 31st March 2025",
    link: "https://navneet.com/wp-content/uploads/2025/04/Share-Holding-Pattern-as-on-31st-Mar-2025.pdf",
  },
  {
    text: "Share Holding Pattern As on 31st Dec 2024",
    link: "https://navneet.com/wp-content/uploads/2025/01/Share-Holding-Pattern-as-on-31st-Dec-2024.pdf",
  },
  {
    text: "Share Holding Pattern as on 30th Sept 2024",
    link: "https://navneet.com/wp-content/uploads/2024/10/Share-Holding-Pattern-as-on-30th-Sept-2024.pdf",
  },
  {
    text: "Share Holding Pattern As on 30th June 2024",
    link: "https://navneet.com/wp-content/uploads/2024/07/Share-Holding-Pattern-as-on-30th-June-2024.pdf",
  },
  {
    text: "Share Holding Pattern As on 31st Mar 2024",
    link: "https://navneet.com/wp-content/uploads/2024/04/Share-Holding-Pattern-as-on-31st-Mar-2024.pdf",
  },
  {
    text: "Share Holding Pattern As on 31st Dec 2023",
    link: "https://navneet.com/pdfs/Shareholding_Pattern/Share-Holding-Pattern-as-on-31s-Dec-2023.pdf",
  },
  {
    text: "Share Holding Pattern As on 30th September 2023",
    link: "https://navneet.com/pdfs/Shareholding_Pattern/Share-Holding-Pattern-as-on-30th-Sept-2023.pdf",
  },
  {
    text: "Share Holding Pattern As on 30th June 2023",
    link: "https://navneet.com/pdfs/Shareholding_Pattern/Share-Holding-Pattern-as-on-30th-June-2023.pdf",
  },
  {
    text: "Share Holding Pattern As on 31st March 2023",
    link: "https://navneet.com/pdfs/Shareholding_Pattern/Share%20Holding%20Pattern%20as%20on%2031st%20Mar%202023.pdf",
  },
  {
    text: "Share Holding Pattern As on 31st December 2022",
    link: "https://navneet.com/pdfs/Shareholding_Pattern/Share-Holding-Pattern-as-on-31st-Dec-2022.pdf",
  },
  {
    text: "Share Holding Pattern As on 30th September 2022",
    link: "https://navneet.com/pdfs/Shareholding_Pattern/Share-Holding-Pattern-as-on-30th-Sept-2022.pdf",
  },
  {
    text: "Share Holding Pattern As on 30 June 2022",
    link: "https://navneet.com/pdfs/Shareholding_Pattern/Share%20Holding%20Pattern%20as%20on%2030th%20June%202022.pdf",
  },
  {
    text: "Share Holding Pattern as on 31st March 2022",
    link: "https://navneet.com/pdfs/Shareholding_Pattern/Share%20Holding%20Pattern%20as%20on%2031st%20Mar%202022.pdf",
  },
  {
    text: "Share Holding Pattern as on 31st December 2021",
    link: "https://navneet.com/pdfs/Shareholding_Pattern/Share%20Holding%20Pattern%20as%20on%2031st%20Dec%202021.pdf",
  },
  {
    text: "Share Holding Pattern As On 30th September 2021",
    link: "https://navneet.com/pdfs/Shareholding_Pattern/Share-Holding-Pattern-as-on-30th-September-2021.pdf",
  },
  {
    text: "Share Holding Pattern As On 30th June 2021",
    link: "https://navneet.com/pdfs/Shareholding_Pattern/Share-Holding-Pattern-As-On-30th-June-2021.pdf",
  },
  {
    text: "Share Holding Pattern as on 31st March 2021",
    link: "https://navneet.com/pdfs/Shareholding_Pattern/Share-Holding-Pattern-As-on-31-March-2021.pdf",
  },
  {
    text: "Share Holding Pattern as on 31st December 2020",
    link: "https://navneet.com/pdfs/Shareholding_Pattern/Share-Holding-Pattern-As-On-31st-December-2020.pdf",
  },
  {
    text: "Share  Holding  Pattern As on 30th September 2020",
    link: "https://navneet.com/pdfs/Shareholding_Pattern/Share%20Holding%20Pattern%20as%20on%2030th%20Sept%202020.pdf",
  },
  {
    text: "Share  Holding  Pattern As on 30th June 2020",
    link: "https://navneet.com/pdfs/Shareholding_Pattern/Share%20Holding%20Pattern%20as%20on%2030th%20June%202020.pdf",
  },
  {
    text: "Share Holding Pattern As On 31st March 2020",
    link: "https://navneet.com/wp-content/uploads/2025/02/Reg-30-disclosure-Order-Passed.pdf",
  },
  {
    text: "Share Holding Pattern as on 31st December 2019",
    link: "https://navneet.com/wp-content/uploads/2025/02/Disclousure-of-Credit-Ratings_Signed.pdf",
  },
  {
    text: "Share Holding Pattern As on 30th September 2019",
    link: "#",
  },
  {
    text: "Share Holding Pattern As on 30th June 2019",
    link: "https://navneet.com/pdfs/Shareholding_Pattern/SHARE-HOLDING-PATTERN-AS-ON-30TH-JUNE-2019.pdf",
  },
  {
    text: "Share Holding Pattern As on 31st March 2019",
    link: "https://navneet.com/pdfs/Shareholding_Pattern/Share_Holding_Pattern_As_On_31st_March_2019.pdf",
  },
  {
    text: "Share Holding Pattern As on 31st December 2018",
    link: "https://navneet.com/wp-content/uploads/2025/01/Trading-Window-Closure-Q3_31122024.pdf",
  },
  {
    text: "Share Holding Pattern As on 30th September 2018",
    link: "https://navneet.com/pdfs/Shareholding_Pattern/Share_Holding_Pattern_30_Sept_2018.pdf",
  },
  {
    text: "Share Holding Pattern as on 30TH JUNE 2018",
    link: "https://navneet.com/pdfs/Shareholding_Pattern/SHARE%20HOLDING%20PATTERN%20AS%20ON%2030TH%20JUNE%202018.pdf",
  },
  {
    text: "Share Holding Pattern as on 31ST MARCH 2018",
    link: "https://navneet.com/pdfs/Shareholding_Pattern/SHARE%20HOLDING%20PATTERN%20AS%20ON%2031ST%20MARCH%202018.pdf",
  },
  {
    text: "Share Holding Pattern as on 31ST December 2017",
    link: "https://navneet.com/pdfs/Shareholding_Pattern/SHARE-HOLDING-PATTERN-AS-ON-31ST-DECEMBER-2017-.pdf",
  },
  {
    text: "Share Holding Pattern as on 30TH September 2017",
    link: "https://navneet.com/pdfs/Shareholding_Pattern/SHARE-HOLDING-PATTERN-AS-ON-30TH-SEPTEMBER-2017.pdf",
  },
  {
    text: "Share Holding Pattern as on 30TH JUNE 2017",
    link: "https://navneet.com/pdfs/Shareholding_Pattern/SHARE-HOLDING-PATTERN-AS-ON-30TH-JUNE-2017.pdf",
  },
  {
    text: "Share Holding Pattern as on 31ST March 2017.",
    link: "https://navneet.com/pdfs/Shareholding_Pattern/SHARE-HOLDING-PATTERN-AS-ON-31ST-MARCH-2017-.pdf",
  },
  {
    text: "Share Holding Pattern as on 20TH January 2017.",
    link: "https://navneet.com/pdfs/Shareholding_Pattern/share-holding-pattern-as-on-20th-january-2017.pdf",
  },
  {
    text: "Share Holding Pattern as on 30TH September 2016.",
    link: "https://navneet.com/wp-content/uploads/2024/07/Impact-Assessment-2023-24.pdf",
  },
  {
    text: "Share Holding Pattern as on 30TH June 2016.",
    link: "https://navneet.com/pdfs/Shareholding_Pattern/Share%20Holding%20Pattern%2030%20June%202016.pdf",
  },
  {
    text: "Share Holding Pattern as on 31st March 2016",
    link: "https://navneet.com/pdfs/Shareholding_Pattern/SHARE%20HOLDING%20PATTERN%20AS%20ON%2031ST%20MARCH%202016.pdf",
  },
  {
    text: "Share Holding Pattern as on 31st December 2015",
    link: "https://navneet.com/pdfs/Shareholding_Pattern/Share-Holding-pattern-as-on-31st-december-2015.pdf",
  },
  {
    text:"Share Holding Pattern as on 30th September 2015",
    link:"https://navneet.com/pdfs/Shareholding_Pattern/SHARE%20HOLDING%20PATTERN%20AS%20ON%2030TH%20SEPTEMBER%202015.pdf"
  },
  {
    text:"Share Holding Pattern as on 30th June 2015",
    link:"https://navneet.com/wp-content/uploads/2024/05/IntimationLetterC.pdf"
  },
  {
    text:"Share Holding Pattern as on 31st March 2015",
    link:"https://navneet.com/wp-content/uploads/2024/05/cancellation.pdf"
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
          {qspdata.map((item, index) => (
            <li key={index}>
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
