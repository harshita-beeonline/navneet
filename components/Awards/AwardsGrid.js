"use client";
import React, { useMemo } from "react";
import { useAwards } from "./AwardsContext";
import styles from "../../styles/awards.module.scss";
// import award1 from '../../public/images/awards/'

export default function AwardsGrid() {
  const { sortOrder } = useAwards();
  const COLS = 4;
  const data = [
    { id: 1, title: "Awards Navneet 01 Transparent", year: 2019, functionName: "Function name", image: "/images/awards/award1.png" },
    { id: 2, title: "Navneet Award", year: 2018, functionName: "Function name", image: "/images/awards/award2.png" },
    { id: 3, title: "FMB Award", year: 2017, functionName: "Function name", image: "/images/awards/award3.png" },
    { id: 4, title: "CSR Leadership Award", year: 2017, functionName: "Function name", image: "/images/awards/award4.png" },
    { id: 5, title: "Service Excellence Award", year: 2016, functionName: "Function name", image: "/images/awards/award5.png" },
    { id: 6, title: "CII - SS Excellence Award", year: 2016, functionName: "Function name", image: "/images/awards/award6.png" },
    { id: 7, title: "Navneet Award - 2016", year: 2016, functionName: "Function name", image: "/images/awards/award7.png" },
    { id: 8, title: "Another Award", year: 2015, functionName: "Function name", image: "/images/awards/award8.png" },
   
    { id: 9, title: "ISO 9001 - 2015", year: 2016, functionName: "Function name", background: "/images/awards/certificate1.png", overlay: "/images/awards/trophy.png" },
    { id: 10, title: "ISO 14001 - 2015", year: 2015, functionName: "Function name", background: "/images/awards/certificate2.png", overlay: "/images/awards/trophy.png" },
    { id: 11, title: "Warex Certificate", year: 2015, functionName: "Function name", background: "/images/awards/certificate3.png", overlay: "/images/awards/trophy.png" },
    { id: 12, title: "Best Education Supplier", year: 2017, functionName: "Function name", background: "/images/awards/certificate4.png", overlay: "/images/awards/trophy.png" },
  ];

 
  const sortedData = useMemo(() => {
    if (sortOrder === "initial") {
      return data;
    }
    return [...data].sort((a, b) =>
      sortOrder === "asc" ? a.year - b.year : b.year - a.year
    );
  }, [sortOrder, data]);

  return (
    <section className={styles.grid}>
      {sortedData.map((item) => { 
       
        const hasBackgroundAndOverlay = item.background && item.overlay;

        return (
          <article key={item.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              {hasBackgroundAndOverlay ? (
                <>
                  <img src={item.background} alt={`${item.title} certificate`} className={styles.bgImg} />
                  <img src={item.overlay} alt={`${item.title} trophy`} className={styles.overlayImg} />
                </>
              ) : (
                
                <img src={item.image || "/awards/placeholder.png"} alt={item.title} className={styles.singleImg} />
              )}
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardYear}>{item.year}</p>
            <p className={styles.cardFunction}>{item.functionName}</p>
          </article>
        );
      })}
    </section>
  );
}