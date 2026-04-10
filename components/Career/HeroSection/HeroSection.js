import Image from "next/image";
import career_hero1 from "../../../public/images/carrer/career-hero1.png";
import career2 from "../../../public/images/carrer/career2.png";
import career_hero3 from "../../../public/images/carrer/career-hero3.jpg";

import styles from "../../../styles/Career/HeroSection.module.scss";

export default function HeroSection() {
  return (
    <section className={styles["hero-section"]}>
      <div className={styles["text-wrapper"]}>
        <div className={styles["heading"]}>Careers at Navneet</div>
        <div className={styles["heading-info"]}>
          At Navneet, it is a never ending journey – Where Knowledge is Wealth
        </div>
      </div>

      <div className={styles["images-content"]}>
        {/* Left Big Image */}
        <div className={styles["image-left"]}>
          <Image
            src={career_hero1}
            alt="Team"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Right Two Images */}
        <div className={styles["image-right"]}>
          <div className={styles["image-hero2"]}>
            <Image
              src={career2}
              alt="Meeting"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles["image-hero3"]}>
            <Image
              src={career_hero3}
              alt="Employee"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
