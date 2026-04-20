"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../../styles/MegaMenuMedia.module.scss";

const ehsEsgMenu = [
  { label: "EHS", href: "/ehs" },
  { label: "ESG", href: "/esg" },
];

export default function MegaMenuEhsEsg() {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive =
    pathname.startsWith("/ehs") || pathname.startsWith("/esg");

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
      <Link
        href="/ehs"
        className={`${styles.triggerLink} ${isActive ? styles.activeLink : ""}`}
      >
        EHS & ESG
      </Link>

      <div className={`${styles.megaPanel} ${open ? styles.open : ""}`}>
        <div className={styles.megaInner}>
          <div className={styles.column}>
            <ul className={styles.list}>
              {ehsEsgMenu.map((item) => (
                <li key={item.href} className={styles.listItem}>
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
