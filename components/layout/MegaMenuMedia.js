"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../../styles/MegaMenuMedia.module.scss";

const mediaUpdatesMenu = [
  { label: "Awards", href: "/media-updates/award" },
  { label: "Media Coverage", href: "/media-updates/coverage" },
];

export default function MegaMenuMedia() {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);
  const pathname = usePathname();

  // ✅ Detect active route
  const isActive =
    pathname.startsWith("/media-updates");

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 400);
  };

  return (
    <div
      className={styles.megaWrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Link */}
      <Link
        href="/"
        className={`${styles.triggerLink} ${
          isActive ? styles.activeLink : ""
        }`}
      >
        Media & Upadtes
      </Link>

      {/* Mega Menu Panel */}
      <div className={`${styles.megaPanel} ${open ? styles.open : ""}`}>
        <div className={styles.megaInner}>
          <div className={styles.column}>
            <ul className={styles.list}>
              {mediaUpdatesMenu.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  <Link
                    href={item.href}
                    className={`${styles.itemLink} ${
                      pathname === item.href ? styles.activeSubLink : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
