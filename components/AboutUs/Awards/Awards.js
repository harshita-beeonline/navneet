import React from "react";
import styles from "../../../styles/AboutUs/Awards.module.scss";
import Award1 from "../../../public/images/awards/image_1.png";
import Award2 from "../../../public/images/awards/image_2.png";
import Award3 from "../../../public/images/awards/image_3.png";
import Award4 from "../../../public/images/awards/image_4.png";
import Image from "next/image";

const awardsData = [
  {
    id: 1,
    img: Award1,
    title: "Lorem Ipsum is simply",
    year: 2019,
    name: "Function name",
  },
  {
    id: 2,
    img: Award2,
    title: "Lorem Ipsum is simply",
    year: 2018,
    name: "Function name",
  },
  {
    id: 3,
    img: Award3,
    title: "Lorem Ipsum is simply",
    year: 2017,
    name: "Function name",
  },
  {
    id: 4,
    img: Award4,
    title: "Lorem Ipsum is simply",
    year: 2016,
    name: "Function name",
  },
];

const Awards = () => {
  return (
    <section
      className={styles["awards-section"]}
      aria-labelledby="awards-heading"
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles["awards-section-text"]}>
          <h2 id="awards-heading" className={styles["awards-section-heading"]}>
            Awards & accolades
          </h2>
          <p className={styles["awards-section-para"]}>
            Our Awards, our pride – The awards section determines the goodwill
            of Navneet and its products. It shows the year-by-year Navneet’s
            progress.
          </p>
        </div>

        {/* Awards Cards */}
        <div className={styles["awards-section-data"]}>
          {awardsData.map((award) => (
            <article key={award.id} className={styles.award}>
              <div className={styles["award-image"]}>
                <Image
                  src={award.img}
                  alt={award.title}
                  fill
                  sizes="(max-width: 480px) 240px, (max-width: 1024px) 280px, 220px"
                  style={{ objectFit: "contain" }}
                  priority={false}
                />
              </div>
              <div className={styles["award-data"]}>
                <p className={styles["award-title"]}>{award.title}</p>
                <p className={styles["award-year"]}>{award.year}</p>
                <p className={styles["award-name"]}>{award.name}</p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <div className={styles["cta-wrapper"]}>
          <button
            className={styles["awards-section-button"]}
            aria-label="View more awards"
          >
            View more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Awards;
