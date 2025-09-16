import React from "react";
import Image from "next/image";

import grafalco_hero1 from "../../../../public/images/our-business/grafalco-hero1.png"; // DESKTOP banner
import grafalco_hero2 from "../../../../public/images/our-business/grafalco-hero2.png"; // MOBILE banner
import a from "../../../../public/images/our-business/rise-bg.png";
import grafalco_crossleftbottom from "../../../../public/images/our-business/grafalco-crossleftbottom.png";
import grafalco_crossrighttop from "../../../../public/images/our-business/grafalco-crossrighttop.png";
import grafalco_statictics from "../../../../public/images/our-business/grafalco-statictics.jpg";

import styles from "../../../../styles/OurBusiness/CBSE/Grafalco.module.scss";

export default function Grafalco() {
  return (
    <section
      className={styles.grafalcoSection}
      aria-labelledby="grafalco-heading"
    >
      {/* ---------- Hero (Desktop uses grafalco_hero1) ---------- */}
      <div className={styles.heroDesktop}>
        <div className={styles.heroWrapperDesktop}>
          <Image
            src={grafalco_hero1}
            alt="Grafalco desktop banner"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>

      {/* ---------- Hero (Mobile uses grafalco_hero2) ---------- */}
      <div className={styles.heroMobile}>
        <div className={styles.heroWrapperMobile}>
          <Image
            src={grafalco_hero2}
            alt="Grafalco mobile banner"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>

      {/* ---------- Intro ---------- */}
      <div className={styles.intro}>
        <h2 id="grafalco-heading" className={styles.title}>
          Quality content at reasonable prices
        </h2>

        <p className={styles.desc}>
          Grafalco is a premium brand of school books under Navneet Education
          Limited that caters to ICSE and CBSE schools across India. It was
          introduced in the year 2009 with 24 titles for Kindergarten. It then
          went on to mark its presence in major cities like Mumbai, Pune,
          Nagpur, Delhi, Dehradun, and Lucknow.
        </p>
      </div>

      {/* ---------- Statistics ---------- */}
      <div
        className={styles.statsSection}
        style={{ "--bg-image": `url(${a.src})` }}
      >
        {/* ✅ Heading moved above inner content */}
        <h3 id="stats-heading" className={styles.sectionTitleTop}>
          Staggering statistics
        </h3>

        <div className={styles.statsInner}>
          <div className={styles.statsGraphic}>
            <div className={styles.crossLeft} aria-hidden="true">
              <Image
                src={grafalco_crossleftbottom}
                alt=""
                width={120}
                height={120}
                className={styles.crossImg}
                priority
              />
            </div>

            <div className={styles.graphWrap}>
              <Image
                src={grafalco_statictics}
                alt="Grafalco statistics"
                width={420}
                height={300}
                className={styles.graphImg}
                priority
              />
            </div>

            <div className={styles.crossRight} aria-hidden="true">
              <Image
                src={grafalco_crossrighttop}
                alt=""
                width={120}
                height={120}
                className={styles.crossImg}
                priority
              />
            </div>
          </div>

          <div className={styles.statsList}>
            <ul className={styles.bullets}>
              <li>
                Nearly 150 titles in Kindergarten, Primary and Secondary school
                sections combined.
              </li>
              <li>Being prescribed by over 4000 schools across India.</li>
              <li>
                A distribution channel of more than 400 distributors and school
                parties.
              </li>
              <li>
                In last 9 years of successful selling, Grafalco has gained
                immense popularity especially in Kindergarten section. Titles
                like Grafalco Pre-school Patterns, Grafalco Pre-school Phonic
                Primer Reader, Grafalco Pre-school GK &amp; Conversation,
                Grafalco Pre-school Phonic (5) Picture Book, Grafalco Hindi
                Akshar Lekhan etc. are few of the best-selling titles.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
