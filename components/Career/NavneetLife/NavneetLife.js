import Image from "next/image";
import life_at_navneet from "../../../public/images/carrer/life-at-navneet.png";

import styles from "../../../styles/Career/NavneetLife.module.scss";
import Link from "next/link";

export default function NavneetLife() {
  return (
    <section className={styles["navneet-life-section"]}>
      <div className={styles["image-wrapper"]}>
        <Image src={life_at_navneet} alt="life_at_navneet" className={styles["img"]} />
      </div>

      <div className={styles["content-section"]}>
        <div className={styles["content"]}>
          <h4 className={styles["heading"]}>Life at Navneet</h4>
          <p className={styles["info"]}>
            Navneet has employee strength of over 2600 enterprise-wide. At
            Navneet, people are our greatest pride, resource and are central to
            growth strategy. Our focus lies in giving opportunities with freedom
            to inspire ideas and be inspired, opportunities to take up
            leadership roles early in your career, freedom to experiment and be
            innovative.
          </p>
          <Link href="#" className={styles["link"]}>
            View More
          </Link>
        </div>

        <div className={styles["line"]}></div>

        <div className={styles["content"]}>
          <h4 className={styles["heading"]}>
            What we provide for our employees
          </h4>
          <p className={styles["info"]}>
            We recognize that our people are the primary source of our
            competitiveness that we have always put first in all the
            initiatives. Gender equality in the workplace – Navneet, which aims
            to ensure everyone, has a fair opportunity to fulfil his or her
            potential according to merit.
          </p>
          <Link href="#" className={styles["link"]}>
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}
