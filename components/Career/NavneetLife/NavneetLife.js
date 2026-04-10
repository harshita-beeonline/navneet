import Image from "next/image";
import life_at_navneet from "../../../public/images/carrer/life-at-navneet.png";

import styles from "../../../styles/Career/NavneetLife.module.scss";
import Link from "next/link";

export default function NavneetLife() {
  return (
    <section className={styles["navneet-life-section"]}>
      <div className={styles["image-wrapper"]}>
        <Image
          src={life_at_navneet}
          alt="life_at_navneet"
          className={styles["img"]}
        />
      </div>

      <div className={styles["content-section"]}>
        <div className={styles["content"]}>
          <h4 className={styles["heading"]}>
            Navneet has been pioneering employee well-being initiativest
          </h4>
          <p className={styles["info"]}>
            We recognise that our people are the primary source of our
            competitiveness who we have always put first in all the initiatives.
            Gender equality in the workplace – Navneet, which aims to ensure
            everyone, has a fair opportunity to fulfil his or her potential
            according to merit.
          </p>
          <p className={styles["info"]}>
            Several initiatives in Navneet have been undertaken – like Stress
            Management Workshop, Image Management Workshop, Yoga Workshop,
            Business Communication Training, Team Building Workshop, and Health
            Management Workshops among others. Navneet enhances human resource
            management in various areas such as orientation and mentoring for
            new joinees, welfare and benefits improvements with the TOGETHER
            Programme, Feedback initiatives, Employee Committee, Welfare
            Committee, etc., ; knowledge sharing session to build workforce
            capability and a continuous emphasis on feel-good initiatives to
            keep employee morale high.
          </p>
        </div>
      </div>
    </section>
  );
}
