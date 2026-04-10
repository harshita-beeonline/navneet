import Image from "next/image";

import styles from "../../../styles/Career/NavneetLife.module.scss";
import careerslide1 from "../../../public/images/careerslide1.png";
import careerslide2 from "../../../public/images/careerslide2.png";
import careerslide3 from "../../../public/images/careerslide3.png";
import careerslide4 from "../../../public/images/careerslide4.png";
import careerslide5 from "../../../public/images/careerslide5.png";
import careerslide6 from "../../../public/images/careerslide6.png";
import careerslide7 from "../../../public/images/careerslide7.png";

const slides = [
  { src: careerslide1, alt: "Life at Navneet slide 1" },
  { src: careerslide2, alt: "Life at Navneet slide 2" },
  { src: careerslide3, alt: "Life at Navneet slide 3" },
  { src: careerslide4, alt: "Life at Navneet slide 4" },
  { src: careerslide5, alt: "Life at Navneet slide 5" },
  { src: careerslide6, alt: "Life at Navneet slide 6" },
  { src: careerslide7, alt: "Life at Navneet slide 7" },
];

export default function NavneetLife() {
  return (
    <section className={styles["navneet-life-section"]}>
      <div
        className={styles["image-wrapper"]}
        aria-label="Life at Navneet highlights"
      >
        {slides.map((slide, index) => (
          <div
            key={slide.alt}
            className={styles["slide"]}
            style={{ animationDelay: `${index * 4}s` }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="(max-width: 1024px) 100vw, 52vw"
              className={styles["img"]}
            />
          </div>
        ))}
      </div>

      <div className={styles["content-section"]}>
        <div className={styles["content"]}>
          <h4 className={styles["heading"]}>
            Navneet has been pioneering employee well-being initiatives
          </h4>

          <p className={styles["info"]}>
            We recognise that our people are the primary source of our
            competitiveness, which is why we have always put them first in every
            initiative. Gender equality in the workplace at Navneet aims to
            ensure everyone has a fair opportunity to fulfil their potential
            based on merit.
          </p>

          <p className={styles["info"]}>
            Several initiatives at Navneet include Stress Management Workshop,
            Image Management Workshop, Yoga Workshop, Business Communication
            Training, Team Building Workshop, and Health Management Workshops.
            Navneet also strengthens human resource management through
            orientation and mentoring for new joinees, welfare and benefits
            improvements with the TOGETHER Programme, feedback initiatives,
            employee and welfare committees, knowledge-sharing sessions, and
            continuous feel-good initiatives to keep employee morale high.
          </p>
        </div>
      </div>
    </section>
  );
}
