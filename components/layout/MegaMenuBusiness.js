"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../../styles/MegaMenuBusiness.module.scss";

const businessMenu = [
  {
    label: "State Board Curriculum",
    subMenu: [
      {
        label: "Overview",
        href: "/our-business/state-board-curriculum/overview",
      },
      {
        label: "Navneet Digest & 21 MLQ Sets",
        href: "/our-business/state-board-curriculum/navneet-digest-21mlq-sets",
      },
      {
        label: "Vikas Workbooks",
        href: "/our-business/state-board-curriculum/vikas-workbook",
      },
    ],
  },
  {
    label: "Non Curriculum",
    subMenu: [
      {
        label: "Children Books",
        href: "/our-business/non-curriculum/children-books",
      },
      {
        label: "General Books",
        href: "/our-business/non-curriculum/general-books",
      },
    ],
  },
  {
    label: "CBSE",
    subMenu: [
      { label: "Indianica", href: "/our-business/cbse/indianica" },
      { label: "Rise", href: "/our-business/cbse/rise" },
      { label: "Companion", href: "/our-business/cbse/companion" },
      { label: "Grafalco", href: "/our-business/cbse/grafalco" },
    ],
  },
  {
    label: "Stationery",
    subMenu: [
      { label: "Domestic", href: "/our-business/stationary/domestic" },
      { label: "Exports", href: "/our-business/stationary/exports" },
    ],
  },
  {
    label: "EdTech",
    subMenu: [
      {
        label: "NAVNEET TOP TECH",
        href: "/our-business/edtech/top-tech",
        subMenu: [
          {
            label: "TopSchool",
            href: "/our-business/edtech/top-tech/top-school",
          },
          {
            label: "TopClass",
            href: "/our-business/edtech/top-tech/top-class",
          },
          {
            label: "TopScorer",
            href: "/our-business/edtech/top-tech/top-scorer",
          },
        ],
      },
    ],
  },
  {
    label: "Others",
    subMenu: [
      {
        label: "K12, School Management Business",
        href: "/our-business/others-k12/school-management-bussiness",
      },
    ],
  },
];

export default function MegaMenuBusiness() {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/our-business")) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [pathname]);

  const isActive = pathname.startsWith("/our-business");

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 100);
  };

  return (
    <div
      className={styles.megaWrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href=""
        className={`${styles.triggerLink} ${isActive ? styles.activeLink : ""}`}
      >
        Our Businesses
      </Link>

      <div className={`${styles.megaPanel} ${open ? styles.open : ""}`}>
        <div className={styles.megaInner}>
          {businessMenu.map((col, index) => (
            <div key={index} className={styles.column}>
              <h4 className={styles.heading}>{col.label}</h4>

              {/* ✅ Handle First Level */}
              {col.subMenu ? (
                <ul className={styles.list}>
                  {col.subMenu.map((item, i) => (
                    <li key={i} className={styles.listItem}>
                      <Link href={item.href}>{item.label}</Link>

                      {/* ✅ Handle Nested Submenu for NAVNEET TOP TECH */}
                      {item.subMenu && (
                        <ul
                          style={{
                            paddingTop: "5px",
                            listStyleType: "none",
                            paddingLeft: "10px",
                            margin: 0,
                          }}
                        >
                          {item.subMenu.map((sub, j) => (
                            <li
                              key={j}
                              style={{
                                paddingTop: "5px",
                                listStyleType: "none",
                                paddingLeft: "0px",
                                margin: 0,
                              }}
                            >
                              <Link href={sub.href}>{sub.label}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className={styles.listItem}>
                  <Link href={col.href}>{col.label}</Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
