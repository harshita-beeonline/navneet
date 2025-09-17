// Exports.jsx
import React from "react";
import Image from "next/image";

import exports_hero_desktop from "../../../../public/images/our-business/exports-hero-desktop.png";
import exports_hero_mobile_top from "../../../../public/images/our-business/exports-hero-mobile-top.png";
import exports_hero_mobile_girl from "../../../../public/images/our-business/exports-hero-mobile-girl.png";
import exports_hero_mobile_bg from "../../../../public/images/our-business/exports-hero-mobile-bg.png";
import exports_hero_mobile_bag from "../../../../public/images/our-business/exports-hero-mobile-bag.png";

import styles from "../../../../styles/OurBusiness/Stationary/Exports.module.scss";

const CSR_SOCIAL = [
  "Skill enhancement training program",
  "Women Empowerment",
  "Medical & Scholarship support for under-privileged",
  "4% of our corporate profit is donated",
];

const CSR_ENV = [
  "Rain Water Harvesting",
  "Green Field Plantation",
  "Continuous Energy Saving (Windmill & Solar)",
  "Waste reduction program & 100% Waste Recovery",
];

export default function Exports() {
  return (
    <section
      className={styles.exportsSection}
      aria-labelledby="exports-heading"
    >
      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.heroWrapper}>
          {/* Desktop hero (single image) */}
          <div className={styles.desktopHero}>
            <Image
              src={exports_hero_desktop}
              alt="International Business - hero (desktop)"
              fill
              priority
              className={styles.heroImage}
            />
          </div>

          {/* Mobile hero (layered images) */}
          <div className={styles.mobileHero} aria-hidden>
            {/* blue background */}
            <div
              className={styles.mobileBg}
              style={{ backgroundImage: `url(${exports_hero_mobile_bg.src})` }}
              aria-hidden
            />

            {/* yellow top wave */}
            <div
              className={styles.mobileTop}
              style={{ backgroundImage: `url(${exports_hero_mobile_top.src})` }}
              aria-hidden
            />

            {/* bag */}
            <img
              src={exports_hero_mobile_bag.src}
              alt="bag"
              className={styles.mobileBagImg}
              loading="eager"
            />

            {/* girl */}
            <img
              src={exports_hero_mobile_girl.src}
              alt="girl"
              className={styles.mobileGirlImg}
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* INTRO */}
      <div className={styles.intro}>
        <h2 id="exports-heading" className={styles.title}>
          Pioneers of Global Business Environment
        </h2>

        <p className={styles.desc}>
          We stand today with 50 years of experience in books and stationery and
          more than 20 years of experience in international business. Over the
          years, we have evolved as one of the major suppliers of scholastic &
          office stationery products across the world. With more than 500 stock
          keeping units, Navneet is one of the largest paper stationery brands
          in India with a leadership position in premiere stationery markets
          such as India, Middle East, parts of Africa, USA, and Europe.
        </p>
      </div>

      {/* TWO INFO CARDS */}
      <div className={styles.infoGrid}>
        <article className={styles.cardPrimary}>
          <h3>Supply Chain Efficiency</h3>
          <p className={styles.cardText}>
            We have two dedicated factories in and around Mumbai - the
            commercial capital of India - dedicated to stationery division:
          </p>
          <ul>
            <li>
              Silvassa Production Facility: 100 miles from Mumbai &amp; 125
              miles from JNPT port
            </li>
            <li>
              LSS Khaniwade (Logistics/Sampling/Short Run) Facility: 35 miles
              from Mumbai &amp; 58 miles from JNPT port
            </li>
          </ul>
        </article>

        <article className={styles.cardSecondary}>
          <h3>Production Efficiency</h3>
          <p className={styles.cardText}>
            Our production factories are equipped with state-of-the-art
            machinery capable of producing diverse categories of paper
            stationery products &amp; are Warex certified. In-house printing,
            finishing and a product development team allow us to produce
            tailor-made premium effects like glitter, metallic, flocking and
            embossing.
          </p>
        </article>
      </div>

      {/* Accreditation */}
      <div className={styles.accreditationWrap}>
        <h3 className={styles.subheading}>Accreditation</h3>
        <p className={styles.accreditText}>
          Our factories are certified by Forest Stewardship Council for using
          FSC certified raw-material.
        </p>
        <p className={styles.accreditText}>
          Our plants have been accredited with certifications by major retail
          chains from Europe and United States for our ethical and social
          conduct.
        </p>
      </div>

      {/* CSR Activities */}
      <div className={styles.csrSection}>
        <h3 className={styles.sectionTitle}>CSR Activities</h3>

        <div className={styles.csrGrid}>
          <div className={styles.csrColumn}>
            <h4>Social responsibility</h4>
            <ul className={styles.csrList}>
              {CSR_SOCIAL.map((item, idx) => (
                <li key={idx} className={styles.productItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.csrColumn}>
            <h4>Environmental responsibility</h4>
            <ul className={styles.csrList}>
              {CSR_ENV.map((item, idx) => (
                <li key={idx} className={styles.productItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottomSpacer} />
    </section>
  );
}
