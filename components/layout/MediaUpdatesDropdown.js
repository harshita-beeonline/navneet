"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/MediaUpdatesDropdown.module.scss";

const mediaUpdatesMenu = [
  { label: "Awards", href: "/media-updates/award" },
  { label: "Media Coverage", href: "/media-updates/coverage" },
];

const MediaUpdatesDropdown = ({ isMobile = false }) => {
  const [activeMobile, setActiveMobile] = useState(null);

  /* --------- Mobile version --------- */
  if (isMobile) {
    return (
      <div className={styles.mobileContainer}>
        {mediaUpdatesMenu.map((item, idx) => (
          <div className={styles.mobileItem} key={idx}>
            <Link href={item.href}>{item.label}</Link>
          </div>
        ))}
      </div>
    );
  }

  /* --------- Desktop version --------- */
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
