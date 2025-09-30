
import React from "react";
import styles from "../../../styles/EHS/PoliciesSection.module.scss";
import Image from "next/image";
import OwnerImg from "../../../public/images/ehs/owner-img.png";
import Icon from "../../../public/images/ehs/pdf-icon.png";

const policies = [
  "Alcohol and Substance Abuse Policy",
  "Corporate Quality & Environment, Health & Safety Policy",
  "Safe Driving Policy",
  "Sexual Harassment Policy",
];

const PoliciesSection = () => {
  return (
    <section className={styles.pageWrapper}>
      <h2 className={styles.title}>Health, Safety & Environment Policies</h2>

      <div className={styles.container}>
        {/* LEFT SIDE (Policies List) */}
        <div className={styles.left}>
          <ul className={styles.policyList}>
            {policies.map((policy, index) => (
              <li key={index}>
                <Image
                  src="/images/ehs/pdf-icon.png" // replace with your image path
                  alt="policy icon"
                  width={20}
                  height={20}
                  className={styles.icon}
                />
                {policy}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE (Photo + Subtitle) */}
        <div className={styles.right}>
          <Image
            src="/images/ehs/owner-img.png" // replace with actual image
            alt="Director"
            width={280}
            height={419}
            className={styles.director}
          />
        </div>
      </div>
      <p className={styles.subtitle}>
            All EHS Policies are Approved by the Board of Directors
          </p>
    </section>
  );
};

export default PoliciesSection;
