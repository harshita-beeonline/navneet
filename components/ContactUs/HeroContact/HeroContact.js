import Image from "next/image";
import styles from "../../../styles/ContactUs/HeroContact.module.scss";

import bigImage from "../../../public/images/contact/big-img.png";
import smallImage from "../../../public/images/contact/small-img.png";

export default function HeroContact() {
  return (
    <section className={styles.heroContact}>
      {/* LEFT SIDE - Text Content */}
      <div className={styles.textContent}>
        <span className={styles.blueText}>Contact Us</span>
        <h1 className={styles.heading}>
          At Navneet, our purpose is to do what it takes to move the needle and
          promulgate knowledge.
        </h1>
        <button className={styles.ctaButton}>More about our history</button>
      </div>

      {/* RIGHT SIDE - Images */}
      <div className={styles.imageContent}>
        <Image
          src={bigImage}
          alt="Contact us - Navneet Education"
          width={562}
          height={515}
          className={styles.bigImage}
          priority
        />
        <Image
          src={smallImage}
          alt="Educational materials and books"
          width={288}
          height={288}
          className={styles.smallImage}
        />
      </div>
    </section>
  );
}