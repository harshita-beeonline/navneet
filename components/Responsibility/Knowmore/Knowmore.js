"use client";

import Image from "next/image";
import responsibility_info_bg from "../../../public/images/responsibility/responsibility-info-bg.png";
import styles from "../../../styles/Responsibility/Knowmore.module.scss";

export default function Knowmore() {
  return (
    <section className={styles.knowmoreSection}>
      {/* Background image */}
      <div className={styles.bgWrapper}>
        <Image
          src={responsibility_info_bg}
          alt="Responsibility background"
          fill
          priority
          className={styles.bgImage}
        />
      </div>

      {/* Overlay text */}
      <div className={styles.textWrapper}>
        <p>
          To know more, call on{" "}
          <span className={styles.underline}>+91 22 6662 6565</span> or email{" "}
          <span className={styles.underline}>info@navneetfoundation.in</span>
        </p>
      </div>
    </section>
  );
}
