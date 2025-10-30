"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ Import for route detection
import styles from "../../styles/MegaMenu.module.scss";

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

export default function MegaMenuInvestor() {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);
  const pathname = usePathname(); // ✅ detect current URL

  // ✅ Automatically open the menu when on any /investor route
  useEffect(() => {
    if (pathname.startsWith("/investor")) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [pathname]);

  // ✅ Detect active route
  const isActive = pathname.startsWith("/investor");

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
      {/* Active state applied here */}
      <Link
        href="/investor"
        className={`${styles.triggerLink} ${isActive ? styles.activeLink : ""}`}
      >
        Investors
      </Link>

      <div className={`${styles.megaPanel} ${open ? styles.open : ""}`}>
        <div className={styles.megaInner}>
          {investorMenu.map((col, index) => (
            <div key={index} className={styles.column}>
              {col.href ? (
                <Link href={col.href} className={styles.headingLink}>
                  <h4 className={styles.heading}>{col.label}</h4>
                </Link>
              ) : (
                <h4 className={styles.heading}>{col.label}</h4>
              )}
              {col.subMenu ? (
                <ul className={styles.list}>
                  {col.subMenu.map((item, i) => (
                    <li key={i} className={styles.listItem}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className={styles.listItem}>
                  {/* <Link href={col.href}>{col.label}</Link> */}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
