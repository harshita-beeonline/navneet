"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../../styles/MegaMenuContact.module.scss";

const contactMenu = [
  { label: "Get In Touch", href: "/contact" },
  { label: "Advertise With Us", href: "/advertise" },
];

export default function MegaMenuContact() {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // ✅ Detect active route
  const isActive =
    pathname.startsWith("/contact") || pathname.startsWith("/advertise");

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
        href=""
        className={`${styles.triggerLink} ${
          isActive ? styles.activeLink : ""
        }`}
      >
        Contact
      </Link>

      {/* Mega Menu Panel */}
      <div className={`${styles.megaPanel} ${open ? styles.open : ""}`}>
        <div className={styles.megaInner}>
          <div className={styles.column}>
            <ul className={styles.list}>
              {contactMenu.map((item, index) => (
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
