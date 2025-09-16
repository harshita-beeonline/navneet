import Image from "next/image";
import indianicaHero from "../../../../public/images/our-business/indiacia-hero.png";
import styles from "../../../../styles/OurBusiness/CBSE/Indianica.module.scss";

export default function Indianica() {
  return (
    <section className={styles["indianicaSection"]}>
      {/* Hero Image */}
      <div className={styles["heroWrapper"]}>
        <Image
          src={indianicaHero}
          alt="Indiannica Learning Hero"
          className={styles["heroImage"]}
          priority
        />
      </div>

      {/* Text Content */}
      <div className={styles["content"]}>
        <p>
          <span>Indiannica Learning Private Limited,</span> a subsidiary of
          Navneet Education Limited, since 1998 has been a pioneer in products
          that promote knowledge and learning.
        </p>

        <p>
          The company has an extensive product catalogue comprising specialized
          curricular learning solutions consisting of textbooks, interactive
          student and teacher resources, teacher training materials,
          educational, instructional, and information products as well as
          technology solutions. We strongly involve ourselves with schools,
          parents, and educators, designing products for the 21st-century
          classroom and today’s home learning environments, while continuing our
          association with global educational publisher, Encyclopædia Britannica
          as exclusive licensee of Encyclopædia Britannica curricular solutions.
        </p>

        <p>
          By partnering with Navneet Education Limited, Indiannica Learning
          plans to expand its products and further accelerate its growth in the
          curriculum business while retaining its core values of spreading
          knowledge and promoting learning without boundaries.
        </p>
      </div>
    </section>
  );
}
