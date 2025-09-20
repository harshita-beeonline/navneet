"use client";

import React from "react";
import Link from "next/link";
import styles from "../../styles/MediaUpdatesDropdown.module.scss";

const mediaUpdatesMenu = [
  { label: "Awards", href: "/media&updates/award" },
  { label: "Media Coverage", href: "/media&updates/coverage" },
];

const MediaUpdatesDropdown = () => {
  return (
    <div className={styles["dropdown-container-box"]}>
      <div className={styles.dropdownWrapper}>
        <ul className={styles.leftMenu}>
          {mediaUpdatesMenu.map((item, idx) => (
            <li key={idx}>
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

export default MediaUpdatesDropdown;
