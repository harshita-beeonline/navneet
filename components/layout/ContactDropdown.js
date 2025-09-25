"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/ContactDropdown.module.scss";

const contactMenu = [
  { label: "Get In Touch", href: "/contact" },
  { label: "Advertise With Us", href: "/advertise" },
];

const ContactDropdown = ({ isMobile = false }) => {
  const [activeMobile, setActiveMobile] = useState(null);

  /* --------- Mobile version --------- */
  if (isMobile) {
    return (
      <div className={styles.mobileContainer}>
        {contactMenu.map((item, idx) => (
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
          {contactMenu.map((item, idx) => (
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

export default ContactDropdown;
