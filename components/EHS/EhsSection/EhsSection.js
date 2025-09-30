import React from "react";
import Image from "next/image";
import styles from "../../../styles/EHS/EhsSection.module.scss";
import EhsBG from "../../../public/images/ehs/ehs-bg.png";

const EhsSection = () => {
  return (
    <section className={styles.pageWrapper}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/ehs/ehs-bg.png"
          alt="EHS background"
          layout="fill"
          objectFit="cover"
          className={styles.bgImage}
          priority
        />
      </div>

      <div className={styles.contentBox}>
        <h2>EHS Initiatives</h2>
        <ul>
          <li>Solar and Wind Power Plants</li>
          <li>Strict Adherence to EHS Rules</li>
          <li>Carbon Sequestration</li>
          <li>Adoption of Energy Efficient Technology</li>
          <li>Ancient Investigation, Safety Audits, words...</li>
          <li>Internal and External EHS Training</li>
        </ul>
      </div>
    </section>
  );
};

export default EhsSection;
