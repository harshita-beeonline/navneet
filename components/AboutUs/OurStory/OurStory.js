"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../../../styles/AboutUs/OurStory.module.scss";

// Images
import Img1947 from "../../../public/images/about/Our-Story-1947.png";
import Img1959 from "../../../public/images/about/Our-Story-1959.png";
import Img1964 from "../../../public/images/about/Our-Story-1964.png";
import Img1966 from "../../../public/images/about/Our-Story-1966.png";
import Img1967 from "../../../public/images/about/Our-Story-1967.png";
import Img1972 from "../../../public/images/about/Our-Story-1972.png";
import Img1975 from "../../../public/images/about/Our-Story-1975.png";
import Img1976 from "../../../public/images/about/Our-Story-1976.png";
import Img1983 from "../../../public/images/about/Our-Story-1983.png";
import Img1987 from "../../../public/images/about/Our-Story-1987.png";
import Img1993 from "../../../public/images/about/Our-Story-1993.png";
import Img1994 from "../../../public/images/about/Our-Story-1994.png";
import Img2008 from "../../../public/images/about/Our-Story-2008.png";
import Img2011 from "../../../public/images/about/Our-Story-2011.png";
import Img2013 from "../../../public/images/about/Our-Story-2013.png";
import Img2014 from "../../../public/images/about/Our-Story-2014.png";
import Img2016 from "../../../public/images/about/Our-Story-2016.png";
import Img2017 from "../../../public/images/about/Our-Story-2017.png";
import Img2018 from "../../../public/images/about/Our-Story-2018.png";
import Img2022 from "../../../public/images/about/Our-Story-2022.png";
import Img2025 from "../../../public/images/about/Our-Story-2025.png";

const ITEMS = [
  {
    id: 1,
    img: Img1947,
    year: "1947",
    title: "Gala family Started a Retail Book Store",
  },
  {
    id: 2,
    img: Img1959,
    year: "1959",
    title: "1st Book Published — Marathi / Hindi",
  },
  {
    id: 3,
    img: Img1964,
    year: "1964",
    title: "Separate Maharashtra and Gujarat State Board",
  },
  { id: 4, img: Img1966, year: "1966–69", title: "Started Press at Ahmedabad" },
  {
    id: 5,
    img: Img1967,
    year: "1967–68",
    title: "We started selling 3rd & Std Prashna",
  },
  {
    id: 6,
    img: Img1972,
    year: "1972",
    title: "Workbook concept introduced in Marathi & Hindi",
  },
  {
    id: 7,
    img: Img1975,
    year: "1975",
    title:
      "Published 2/3 Most Likely Questions Sets in Marathi, Hindi & Gujarati",
  },
  { id: 8, img: Img1976, year: "1976", title: "Children Book introduced" },
  {
    id: 9,
    img: Img1983,
    year: "1983",
    title: "Started using Laser Technology",
  },
  {
    id: 10,
    img: Img1987,
    year: "1987",
    title: "We invented printing press in Dantali",
  },
  {
    id: 11,
    img: Img1993,
    year: "1993",
    title: "Started manufacturing Scholastic Stationery",
  },
  {
    id: 12,
    img: Img1994,
    year: "1994",
    title: "First Educational Publisher to be Listed on BSE & NSE",
  },
  {
    id: 13,
    img: Img2008,
    year: "2008",
    title: "Entered B2B Digital Learning Space",
  },
  {
    id: 14,
    img: Img2011,
    year: "2011–12",
    title:
      "Ventured into School Management & started our sales depot and stationery plant at Kharliwade",
  },
  { id: 15, img: Img2013, year: "2013", title: "Started Navneet Foundation" },
  {
    id: 16,
    img: Img2014,
    year: "2014",
    title: "Entered B2C Digital Learning Space",
  },
  {
    id: 17,
    img: Img2016,
    year: "2016",
    title: "Stationery brand 'YOU' launched",
  },
  {
    id: 18,
    img: Img2017,
    year: "2017",
    title: "Milestone Turnover of 1000 crores",
  },
  {
    id: 19,
    img: Img2018,
    year: "2018",
    title: "Introduction of premium stationery brand 'HQ'",
  },
  {
    id: 20,
    img: Img2022,
    year: "2022",
    title: "T.R. for Teacher: An initiative by Navneet",
  },
  { id: 21, img: Img2025, year: "2025", title: "Navneet AI" },
];

export default function OurStory() {
  const scrollerRef = useRef(null);
  const itemRefs = useRef([]);
  const [active, setActive] = useState(0);

  // Continuous autoplay (respects reduced-motion)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let i = 0;
    const id = setInterval(() => {
      i = (i + 1) % ITEMS.length;
      setActive(i);

      const scroller = scrollerRef.current;
      const node = itemRefs.current[i];
      if (scroller && node) {
        scroller.scrollTo({
          left:
            node.offsetLeft - scroller.offsetWidth / 2 + node.offsetWidth / 2,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(id);
  }, []);

  return (
    <section className={styles.section}>
      {/* Intro content */}
      <div className={styles.header}>
        <div className={styles.bar} />
        <div className={styles.copy}>
          <span className={styles.hint}>Our Story</span>
          <p className={styles.text}>
            Navneet has evolved with each passing decade and, in the past 60
            years, has created various sub-brands. Some of our milestones are
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className={styles.timeline}>
        <div className={styles.baseline} aria-hidden />
        <div ref={scrollerRef} className={styles.scroller}>
          {ITEMS.map((item, i) => {
            const isActive = i === active;
            return (
              <div
                key={item.id}
                ref={(el) => (itemRefs.current[i] = el)}
                className={styles.item}
                data-active={isActive ? "true" : "false"}
              >
                {/* Row 1: Year */}
                <div className={styles.yearRow}>
                  {isActive ? (
                    <>
                      <div className={styles.yearPill}>{item.year}</div>
                      <span className={styles.connector} />
                    </>
                  ) : (
                    <p className={styles.yearText}>{item.year}</p>
                  )}
                </div>

                {/* Row 2: Marker (locked to baseline) */}
                <div className={styles.markerRow}>
                  <span className={styles.marker} />
                </div>

                {/* Row 3: Card */}
                <div className={styles.cardRow}>
                  <motion.div
                    className={styles.card}
                    animate={{
                      scale: isActive ? 1.03 : 1,
                      opacity: isActive ? 1 : 0.96,
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className={styles.thumb}>
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        sizes="(max-width: 480px) 120px, (max-width: 1024px) 140px, 160px"
                        className={styles.img}
                        priority={i < 3}
                      />
                    </div>
                    <p className={styles.title}>{item.title}</p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
