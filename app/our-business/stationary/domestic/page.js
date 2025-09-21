// Domestic.jsx
import React from "react";
import Image from "next/image";

import styles from "../../../../styles/OurBusiness/Stationary/Domestic.module.scss";

// Images
import domesticHero from "../../../../public/images/our-business/domestic-hero.png";
import domesticCore from "../../../../public/images/our-business/domestic-core.jpg";
import domesticBg from "../../../../public/images/our-business/rise-bg.png";

const PRODUCTS = [
  "Notebooks",
  "Drawing books",
  "Pencils",
  "Color pencils",
  "Wax crayons",
  "Sharpeners",
  "Erasers",
  "Geometry boxes",
  "Glue",
  "Clay – all this, and a lot more",
];

export default function Domestic() {
  const half = Math.ceil(PRODUCTS.length / 2);
  const left = PRODUCTS.slice(0, half);
  const right = PRODUCTS.slice(half);

  return (
    <section
      className={styles.domesticSection}
      aria-labelledby="domestic-heading"
    >
      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.heroWrapper}>
          <Image
            src={domesticHero}
            alt="Youva - hero"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>

      {/* INTRO */}
      <div className={styles.intro}>
        <h2 id="domestic-heading" className={styles.title}>
          A little something about us
        </h2>

        <p className={styles.desc}>
          We are Youva, those who constantly learn, always evolving as we grow
          upwards and onwards. Youva is you — always restless, never settling.
          Youva enables all of us, thinkers and doers of the world, to start on
          a fresh page and create a brave new world.
        </p>

        <div className={styles.ctaWrap}>
          <a href="#" className={styles.ctaBtn}>
            Visit Website
          </a>
        </div>
      </div>

      {/* PRODUCT RANGE */}
      <div className={styles.productsSection}>
        <div className={styles.productsInner}>
          <h3 id="products-heading" className={styles.sectionTitle}>
            The product range includes
          </h3>

          <div className={styles.productGrid}>
            <ul className={styles.productColumn}>
              {left.map((p, i) => (
                <li key={i} className={styles.productItem}>
                  {p}
                </li>
              ))}
            </ul>

            <ul className={styles.productColumn}>
              {right.map((p, i) => (
                <li key={i} className={styles.productItem}>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* INSPIRING STRIP */}
      <div
        className={styles.creatorSection}
        aria-hidden="true"
        style={{ "--bg-image": `url(${domesticBg.src})` }}
      >
        <div className={styles.creatorInner}>
          Enabling &amp; inspiring the creator in you.
        </div>
      </div>

      {/* CORE VIDEO */}
      <div className={styles.coreSection}>
        <h3 className={styles.sectionTitle}>What’s in our core?</h3>

        <p className={styles.coreText}>
          It’s change. It’s in our DNA, in our every nucleus to upgrade and
          match the evolving needs of this youthful, creative universe. We want
          to inspire YOU to tap into that limitless potential that lies within
          you, and let it pour out in all forms of creativity — with us, through
          us.
        </p>

        <div className={styles.videoWrap}>
          <iframe
            src="https://www.youtube.com/embed/O2juCM4DiW0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.coreVideo}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
