"use client";

import React from "react";
import Link from "next/link";
import styles from "../../styles/MediaUpdatesDropdown.module.scss";

const ehsEsgMenu = [
  { label: "EHS", href: "/ehs" },
  { label: "ESG", href: "/esg" },
];

const EhsEsgDropdown = ({ isMobile = false }) => {
  if (isMobile) {
    return (
      <div className={styles.mobileContainer}>
        {ehsEsgMenu.map((item) => (
          <div className={styles.mobileItem} key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={styles["dropdown-container-box"]}>
      <div className={styles.dropdownWrapper}>
        <ul className={styles.leftMenu}>
          {ehsEsgMenu.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={styles.label}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EhsEsgDropdown;
