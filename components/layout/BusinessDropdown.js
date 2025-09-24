/* ==================================================
File: components/Header/BusinessDropdown.jsx
================================================== */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/BusinessDropdown.module.scss";

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
            href: "/our-business/edtech/top-tech/top-class",
          },
          {
            label: "TopClass",
            href: "/our-business/edtech/top-tech/top-school",
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

const BusinessDropdown = ({ isMobile = false }) => {
  const [activeMenu, setActiveMenu] = useState(null); // desktop: top-level
  const [activeSub, setActiveSub] = useState(null); // desktop: second-level
  const [openMobile, setOpenMobile] = useState(null); // mobile accordion

  /* --------- Mobile accordion version --------- */
  if (isMobile) {
    return (
      <div className={styles.mobileContainer}>
        {businessMenu.map((section, i) => {
          const isOpen = openMobile === i;
          return (
            <div className={styles.mobileSection} key={i}>
              <button
                className={styles.mobileSectionHeader}
                onClick={() => setOpenMobile(isOpen ? null : i)}
              >
                <span>{section.label}</span>
                {section.subMenu && (
                  <svg
                    className={`${styles.arrow} ${isOpen ? styles.open : ""}`}
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                )}
              </button>

              {section.subMenu && isOpen && (
                <ul className={styles.mobileList}>
                  {section.subMenu.map((s, idx) => (
                    <li key={idx}>
                      {s.href ? (
                        <Link href={s.href}>{s.label}</Link>
                      ) : (
                        <span>{s.label}</span>
                      )}

                      {/* Deep submenu for EdTech */}
                      {s.subMenu && (
                        <ul className={styles.mobileDeepList}>
                          {s.subMenu.map((d, di) => (
                            <li key={di}>
                              <Link href={d.href}>{d.label}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  /* --------- Desktop hover dropdown version --------- */
  return (
    <div
      className={styles["dropdown-container-box"]}
      onMouseLeave={() => {
        setActiveMenu(null);
        setActiveSub(null);
      }}
    >
      <div className={styles.dropdownWrapper}>
        <ul className={styles.leftMenu}>
          {businessMenu.map((item, idx) => (
            <li
              key={idx}
              onMouseEnter={() => {
                setActiveMenu(idx);
                setActiveSub(null);
              }}
            >
              <span className={styles.label}>{item.label}</span>

              {item.subMenu && (
                <>
                  <span className={styles.arrow}>
                    <svg width="6" height="8" viewBox="0 0 6 8" fill="none">
                      <path
                        d="M1.33398 6.91602L5.50065 3.99935L1.33398 0.666016"
                        stroke="#F9F9F9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  {activeMenu === idx && (
                    <ul className={styles.rightMenu}>
                      {item.subMenu.map((sub, sIdx) => (
                        <li key={sIdx} onMouseEnter={() => setActiveSub(sIdx)}>
                          {sub.href ? (
                            <Link href={sub.href}>{sub.label}</Link>
                          ) : (
                            <span>{sub.label}</span>
                          )}

                          {sub.subMenu && (
                            <span className={styles.arrow}>
                              <svg
                                width="6"
                                height="8"
                                viewBox="0 0 6 8"
                                fill="none"
                              >
                                <path
                                  d="M1.33398 6.91602L5.50065 3.99935L1.33398 0.666016"
                                  stroke="#F9F9F9"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          )}

                          {sub.subMenu && activeSub === sIdx && (
                            <ul className={styles.deepMenu}>
                              {sub.subMenu.map((deep, dIdx) => (
                                <li key={dIdx}>
                                  <Link href={deep.href}>{deep.label}</Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BusinessDropdown;
