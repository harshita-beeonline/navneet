/* ==================================================
File: components/Header/InvestorDropdown.jsx
================================================== */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/InvestorDropdown.module.scss";
import MenuIcon_Arrow from "../../public/images/menuicon-arrow.svg";
import Image from "next/image";

const investorMenu = [
  {
    label: "Financials",
    subMenu: [
      {
        label: "Quarterly Financial Results",
        href: "/investor/financials/quarterly-financial-results",
      },
      {
        label: "Investor Presentations",
        href: "/investor/financials/investor-presentations",
      },
      { label: "Annual Reports", href: "/investor/financials/annual-reports" },
      {
        label: "Earnings Call Transcripts",
        href: "/investor/financials/transcripts-of-earnings",
      },
    ],
  },
  {
    label: "Company Announcements",
    subMenu: [
      {
        label: "Submissions under Regulation 30",
        href: "/investor/company-announcements/submission-under-regulation-30",
      },
      {
        label: "Notice of Board Meeting",
        href: "/investor/company-announcements/notice-of-board-meetings",
      },
      {
        label: "AGM Notices",
        href: "/investor/company-announcements/agm-notices",
      },
      {
        label: "Circular in the form of Advertisement inviting Deposits",
        href: "/investor/company-announcements/circular-inviting-deposits",
      },
      {
        label: "Result of e-Voting and Polling at AGM",
        href: "/investor/company-announcements/result-of-evoting-and-poll",
      },
      {
        label: "EGM Details",
        href: "/investor/company-announcements/egm-details",
      },
      {
        label: "Unclaimed and Unpaid Amounts",
        href: "/investor/company-announcements/unclaimed-and-unpaid-amounts",
      },
      {
        label: "Buyback 2024",
        href: "/investor/company-announcements/buyback-2024",
      },
      { label: "Others", href: "/investor/company-announcements/others" },
    ],
  },
  {
    label: "Investor Information",
    subMenu: [
      {
        label: "Quarterly Shareholding Pattern",
        href: "/investor/investor-information/quarterly-shareholding-pattern",
      },
      {
        label: "Historical Financial Snapshot",
        href: "/investor/investor-information/historical-financial-snapshot",
      },
      {
        label: "Stock Information FY 22-23",
        href: "/investor/investor-information/stock-information",
      },
    ],
  },
  {
    label: "Corporate Governance",
    subMenu: [
      {
        label: "Board of Directors and its committees",
        href: "/investor/corporate-governance/board-of-directors-committee",
      },
      {
        label: "Code of Conduct",
        href: "/investor/corporate-governance/code-of-conduct",
      },
      { label: "Policies", href: "/investor/corporate-governance/policies" },
    ],
  },
  { label: "Investor Contact", href: "/investor/contact" },
];

const InvestorDropdown = ({ isMobile = false }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  /* --------- Mobile accordion version --------- */
  if (isMobile) {
    return (
      <div className={styles.mobileContainer}>
        {investorMenu.map((section, i) => {
          const isOpen = activeMenu === i;
          return (
            <div className={styles.mobileSection} key={i}>
              <button
                className={styles.mobileSectionHeader}
                onClick={() => setActiveMenu(isOpen ? null : i)}
              >
                {section.href ? (
                  <Link href={section.href}>{section.label}</Link>
                ) : (
                  <span>{section.label}</span>
                )}
                {section.subMenu && (
                  <Image
                    src={MenuIcon_Arrow}
                    alt="chevron"
                    width={10}
                    height={10}
                    className={`${styles.arrow} ${isOpen ? styles.open : ""}`}
                  />
                )}
              </button>

              {section.subMenu && isOpen && (
                <ul className={styles.mobileList}>
                  {section.subMenu.map((s, idx) => (
                    <li key={idx}>
                      <Link href={s.href}>{s.label}</Link>
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
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className={styles.dropdownWrapper}>
        <ul className={styles.leftMenu}>
          {investorMenu.map((item, idx) => (
            <li key={idx} onMouseEnter={() => setActiveMenu(idx)}>
              {item.href ? (
                <Link href={item.href} className={styles.label}>
                  {item.label}
                </Link>
              ) : (
                <span className={styles.label}>{item.label}</span>
              )}

              {item.subMenu && (
                <>
                  <span className={styles.arrow}>
                    <Image
                      src={MenuIcon_Arrow}
                      alt="chevron"
                      width={10}
                      height={10}
                      style={{
                        transform: "rotate(0deg)",
                      }}
                    />
                  </span>
                  {activeMenu === idx && (
                    <ul className={styles.rightMenu}>
                      {item.subMenu.map((sub, sIdx) => (
                        <li key={sIdx}>
                          <Link href={sub.href}>{sub.label}</Link>
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

export default InvestorDropdown;
