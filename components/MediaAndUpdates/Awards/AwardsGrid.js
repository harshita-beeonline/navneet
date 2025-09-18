"use client";
import Image from "next/image";
import { useMemo } from "react";
import { useAwards } from "./AwardsContext";
import styles from "../../../styles/MediaAndUpdates/Award/AwardPage.module.scss";

// Images
import award1 from "../../../public/images/awards/award1.png";
import award2 from "../../../public/images/awards/award2.png";
import award3 from "../../../public/images/awards/award3.png";
import award4 from "../../../public/images/awards/award4.png";
import award5 from "../../../public/images/awards/award5.png";
import award6 from "../../../public/images/awards/award6.png";
import award7 from "../../../public/images/awards/award7.png";
import award8 from "../../../public/images/awards/award8.png";

import cert1 from "../../../public/images/awards/certificate1.png";
import cert2 from "../../../public/images/awards/certificate2.png";
import cert3 from "../../../public/images/awards/certificate3.png";
import cert4 from "../../../public/images/awards/certificate4.png";
import trophy from "../../../public/images/awards/trophy.png";

// Data
const awardsData = [
  { id: 1, title: "Awards Navneet 01 Transparent", year: 2019, fn: "Function name", image: award1 },
  { id: 2, title: "Navneet Award", year: 2018, fn: "Function name", image: award2 },
  { id: 3, title: "FMB Award", year: 2017, fn: "Function name", image: award3 },
  { id: 4, title: "CSR Leadership Award", year: 2016, fn: "Function name", image: award4 },
  { id: 5, title: "Service Excellence Award", year: 2016, fn: "Function name", image: award5 },
  { id: 6, title: "CII - 5S Excellence Award", year: 2016, fn: "Function name", image: award6 },
  { id: 7, title: "CII - 5S Excellence Award", year: 2016, fn: "Function name", image: award7 },
  { id: 8, title: "CII National Excellence Awards", year: 2016, fn: "Function name", image: award8 },

  { id: 9, title: "ISO 9001 - 2015", year: 2016, fn: "Function name", background: cert1, overlay: trophy },
  { id: 10, title: "ISO 14001 - 2015", year: 2015, fn: "Function name", background: cert2, overlay: trophy },
  { id: 11, title: "Warex Certificate Khaniwade", year: 2015, fn: "Function name", background: cert3, overlay: trophy },
  { id: 12, title: "Warex Certificate Khaniwade", year: 2010, fn: "Function name", background: cert4, overlay: trophy },
];

function Card({ item }) {
  return (
    <article className={styles.award}>
      <div className={styles.imageWrapper}>
        {item.background ? (
          <div className={styles.certWrapper}>
            <Image src={item.background} alt={item.title} className={styles.bgImg} />
            <Image src={item.overlay} alt="Trophy" className={styles.trophyImg} />
          </div>
        ) : (
          <Image src={item.image} alt={item.title} className={styles.singleImg} />
        )}
      </div>

      <div className={styles.awardData}>
        <h3 className={styles.awardTitle}>{item.title}</h3>
        {/* <p className={styles.awardYear}>{item.year}</p>
        <p className={styles.awardName}>{item.fn}</p> */}
      </div>
    </article>
  );
}

export default function AwardsGrid() {
  const { sortOrder } = useAwards();

  const sorted = useMemo(() => {
    if (sortOrder === "initial") return awardsData;
    return [...awardsData].sort((a, b) =>
      sortOrder === "asc" ? a.year - b.year : b.year - a.year
    );
  }, [sortOrder]);

  // Split into 3 rows for mobile (≈4 items per row with 12 items)
  const mobileRows = useMemo(() => {
    const perRow = Math.ceil(sorted.length / 3);
    const rows = [];
    for (let i = 0; i < sorted.length; i += perRow) rows.push(sorted.slice(i, i + perRow));
    return rows;
  }, [sorted]);

  return (
    <section className={styles.awardsSection}>
      {/* Desktop/Tablet: true grid */}
      <div className={styles.awardsGridDesktop}>
        {sorted.map((item) => (
          <Card key={`desk-${item.id}`} item={item} />
        ))}
      </div>

      {/* Mobile: 3 horizontal rows (carousels) */}
      <div className={styles.awardsRowsMobile}>
        {mobileRows.map((row, idx) => (
          <div className={styles.awardsRow} key={`row-${idx}`}>
            {row.map((item) => (
              <Card key={`mob-${item.id}`} item={item} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
