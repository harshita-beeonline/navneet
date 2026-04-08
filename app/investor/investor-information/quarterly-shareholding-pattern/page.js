import styles from "../../../../styles/Investor/InvestorInformation/QuarterlyShareholdingPattern.module.scss";

const qspdata = [
  {
    text: "Share Holding Pattern As on 31th Dec 2025",
    link: "https://img.modxcomputers.com/navneetpdf/1769519470142-Share-Holding-Pattern-as-on-31st-Dec-2025.pdf",
  },
  {
    text: "Share Holding Pattern As on 31st Sept 2025",
    link: "https://img.modxcomputers.com/navneetpdf/1775634250975-Share-Holding-Pattern-as-on-30th-Sept-2025.pdf",
  },
  {
    text: "Share Holding Pattern As on 30th June 2025",
    link: "https://img.modxcomputers.com/navneetpdf/1759752201088-Share-Holding-Pattern-as-on-30th-June-2025.pdf",
  },
  {
    text: "Share Holding Pattern As on 31st March 2025",
    link: "https://img.modxcomputers.com/navneetpdf/1759752894223-Share-Holding-Pattern-as-on-31st-Mar-2025.pdf",
  },
  {
    text: "Share Holding Pattern As on 31st Dec 2024",
    link: "https://img.modxcomputers.com/navneetpdf/1759753124287-Share-Holding-Pattern-as-on-31st-Dec-2024.pdf",
  },
  {
    text: "Share Holding Pattern as on 30th Sept 2024",
    link: "https://img.modxcomputers.com/navneetpdf/1759753177742-Share-Holding-Pattern-as-on-30th-Sept-2024.pdf",
  },
  {
    text: "Share Holding Pattern As on 30th June 2024",
    link: "https://img.modxcomputers.com/navneetpdf/1759753216134-Share-Holding-Pattern-as-on-30th-June-2024.pdf",
  },
  {
    text: "Share Holding Pattern As on 31st Mar 2024",
    link: "https://img.modxcomputers.com/navneetpdf/1759753309897-Share-Holding-Pattern-as-on-31st-Mar-2024.pdf",
  },
  {
    text: "Share Holding Pattern As on 31st Dec 2023",
    link: "https://img.modxcomputers.com/navneetpdf/1759753434732-Share-Holding-Pattern-as-on-31s-Dec-2023.pdf",
  },
  {
    text: "Share Holding Pattern As on 30th September 2023",
    link: "https://img.modxcomputers.com/navneetpdf/1759753506090-Share-Holding-Pattern-as-on-30th-Sept-2023.pdf",
  },
  {
    text: "Share Holding Pattern As on 30th June 2023",
    link: "https://img.modxcomputers.com/navneetpdf/1759753546175-Share-Holding-Pattern-as-on-30th-June-2023.pdf",
  },
  {
    text: "Share Holding Pattern As on 31st March 2023",
    link: "https://img.modxcomputers.com/navneetpdf/1759753585806-Share-Holding-Pattern-as-on-31st-Mar-2023.pdf",
  },
  {
    text: "Share Holding Pattern As on 31st December 2022",
    link: "https://img.modxcomputers.com/navneetpdf/1759753649029-Share-Holding-Pattern-as-on-31st-Dec-2022.pdf",
  },
  {
    text: "Share Holding Pattern As on 30th September 2022",
    link: "https://img.modxcomputers.com/navneetpdf/1759753693454-Share-Holding-Pattern-as-on-30th-Sept-2022.pdf",
  },
  {
    text: "Share Holding Pattern As on 30 June 2022",
    link: "https://img.modxcomputers.com/navneetpdf/1759753850930-Share-Holding-Pattern-as-on-30th-June-2022.pdf",
  },
  {
    text: "Share Holding Pattern as on 31st March 2022",
    link: "https://img.modxcomputers.com/navneetpdf/1759753890283-Share-Holding-Pattern-as-on-31st-Mar-2022.pdf",
  },
  {
    text: "Share Holding Pattern as on 31st December 2021",
    link: "https://img.modxcomputers.com/navneetpdf/1759753925881-Share-Holding-Pattern-as-on-31st-Dec-2021.pdf",
  },
  {
    text: "Share Holding Pattern As On 30th September 2021",
    link: "https://img.modxcomputers.com/navneetpdf/1759754009861-Share-Holding-Pattern-as-on-30th-September-2021.pdf",
  },
  {
    text: "Share Holding Pattern As On 30th June 2021",
    link: "https://img.modxcomputers.com/navneetpdf/1759754156677-Share-Holding-Pattern-As-On-30th-June-2021.pdf",
  },
  {
    text: "Share Holding Pattern as on 31st March 2021",
    link: "https://img.modxcomputers.com/navneetpdf/1759754235355-Share-Holding-Pattern-As-on-31-March-2021.pdf",
  },
  {
    text: "Share Holding Pattern as on 31st December 2020",
    link: "https://img.modxcomputers.com/navneetpdf/1759754540726-Share-Holding-Pattern-As-On-31st-December-2020.pdf",
  },
  {
    text: "Share  Holding  Pattern As on 30th September 2020",
    link: "https://img.modxcomputers.com/navneetpdf/1759754582077-Share-Holding-Pattern-as-on-30th-Sept-2020.pdf",
  },
  {
    text: "Share  Holding  Pattern As on 30th June 2020",
    link: "https://img.modxcomputers.com/navneetpdf/1759754755903-Share-Holding-Pattern-as-on-30th-June-2020.pdf",
  },
  {
    text: "Share Holding Pattern As On 31st March 2020",
    link: "https://img.modxcomputers.com/navneetpdf/1759754819547-Share-Holding-Pattern-As-On-31st-March-2020.pdf",
  },
  {
    text: "Share Holding Pattern as on 31st December 2019",
    link: "https://img.modxcomputers.com/navneetpdf/1759754897549-Share-Holding-Pattern-as-on-31st-Dec-2019.pdf",
  },
  {
    text: "Share Holding Pattern As on 30th September 2019",
    link: "https://img.modxcomputers.com/navneetpdf/1759756901610-Share_Holding_Pattern_30_Sept_2019.pdf",
  },
  {
    text: "Share Holding Pattern As on 30th June 2019",
    link: "https://img.modxcomputers.com/navneetpdf/1759754992433-SHARE-HOLDING-PATTERN-AS-ON-30TH-JUNE-2019.pdf",
  },
  {
    text: "Share Holding Pattern As on 31st March 2019",
    link: "https://img.modxcomputers.com/navneetpdf/1759755048088-Share_Holding_Pattern_As_On_31st_March_2019.pdf",
  },
  {
    text: "Share Holding Pattern As on 31st December 2018",
    link: "https://img.modxcomputers.com/navneetpdf/1759755184195-Share_Holding_Pattern_As_On_31_Dec_2018.pdf",
  },
  {
    text: "Share Holding Pattern As on 30th September 2018",
    link: "https://img.modxcomputers.com/navneetpdf/1759755234628-Share_Holding_Pattern_30_Sept_2018.pdf",
  },
  {
    text: "Share Holding Pattern as on 30TH JUNE 2018",
    link: "https://img.modxcomputers.com/navneetpdf/1759755288938-SHARE-HOLDING-PATTERN-AS-ON-30TH-JUNE-2018.pdf",
  },
  {
    text: "Share Holding Pattern as on 31ST MARCH 2018",
    link: "https://img.modxcomputers.com/navneetpdf/1759755335268-SHARE-HOLDING-PATTERN-AS-ON-31ST-MARCH-2018.pdf",
  },
  {
    text: "Share Holding Pattern as on 31ST December 2017",
    link: "https://img.modxcomputers.com/navneetpdf/1759755772589-SHARE-HOLDING-PATTERN-AS-ON-31ST-DECEMBER-2017.pdf",
  },
  {
    text: "Share Holding Pattern as on 30TH September 2017",
    link: "https://img.modxcomputers.com/navneetpdf/1759756121725-SHARE-HOLDING-PATTERN-AS-ON-30TH-SEPTEMBER-2017.pdf",
  },
  {
    text: "Share Holding Pattern as on 30TH JUNE 2017",
    link: "https://img.modxcomputers.com/navneetpdf/1759756217892-SHARE-HOLDING-PATTERN-AS-ON-30TH-JUNE-2017.pdf",
  },
  {
    text: "Share Holding Pattern as on 31ST March 2017.",
    link: "https://img.modxcomputers.com/navneetpdf/1759756290366-SHARE-HOLDING-PATTERN-AS-ON-31ST-MARCH-2017.pdf",
  },
  {
    text: "Share Holding Pattern as on 20TH January 2017.",
    link: "https://img.modxcomputers.com/navneetpdf/1759756337927-share-holding-pattern-as-on-20th-january-2017.pdf",
  },
  {
    text: "Share Holding Pattern as on 30TH September 2016.",
    link: "https://img.modxcomputers.com/navneetpdf/1759756381431-Share-Holding-Pattern-as-on-30-Sept-2016.pdf",
  },
  {
    text: "Share Holding Pattern as on 30TH June 2016.",
    link: "https://img.modxcomputers.com/navneetpdf/1759756487498-Share-Holding-Pattern-30-June-2016.pdf",
  },
  {
    text: "Share Holding Pattern as on 31st March 2016",
    link: "https://img.modxcomputers.com/navneetpdf/1759756540629-SHARE-HOLDING-PATTERN-AS-ON-31ST-MARCH-2016.pdf",
  },
  {
    text: "Share Holding Pattern as on 31st December 2015",
    link: "hhttps://img.modxcomputers.com/navneetpdf/1759756611122-Share-Holding-pattern-as-on-31st-december-2015.pdf",
  },
  {
    text: "Share Holding Pattern as on 30th September 2015",
    link: "https://img.modxcomputers.com/navneetpdf/1759756662851-SHARE-HOLDING-PATTERN-AS-ON-30TH-SEPTEMBER-2015.pdf",
  },
  {
    text: "Share Holding Pattern as on 30th June 2015",
    link: "https://img.modxcomputers.com/navneetpdf/1759756710243-SHARE-HOLDING-PATTERN-AS-ON-30-JUNE-2015.pdf",
  },
  {
    text: "Share Holding Pattern as on 31st March 2015",
    link: "https://img.modxcomputers.com/navneetpdf/1759756751665-SHARE-HOLDING-PATTERN-AS-ON-31-ST-MARCH-2015.pdf",
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
