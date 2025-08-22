import React from "react";
import styles from "../../../styles/NavneetCBSESection.module.scss";
import cbseimage from "../../../public/images/cbseimage.png";
import Image from "next/image";
import Link from "next/link";

const text1 = `Navneet’s Trusted Legacy, Now for CBSE Excellence`;
const text2 = `  Backed by Navneet’s legacy of quality and trust, our CBSE offerings
            provide students, teachers, and parents with reliable, innovative,
            and result-oriented resources—making success in the CBSE curriculum
            more accessible than ever`;
const NavneetCBSESection = () => {
  return (
    <div className={styles["navneet-cbse-section-content"]}>
      <div className={styles["cbse-section-left-right-content"]}>
        <div className={styles["cbse-section-left-content"]}>
          <h2>{text1}</h2>
          <p>
            We have a dedicated range of solutions for CBSE students, including
            RISE, Indiannica, Study Buddy and Learnsmart series. Designed by
            experts, these products focus on conceptual clarity, exam readiness,
            and skill-based learning to help students achieve their academic
            goals.
          </p>
          <p>{text2}</p>
         <Link href={"https://www.navneetstore.com/collections/cbse-board?usf_sort=bestselling"}><button>Know More</button></Link>
        </div>
        <div className={styles["cbse-section-right-content"]}>
          <div className={styles["cbse-image"]}>
            <Image src={cbseimage} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavneetCBSESection;
