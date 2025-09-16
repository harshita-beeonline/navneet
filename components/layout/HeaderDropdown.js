import React, { useState } from "react";
import styles from "../../styles/HeaderDropdown.module.scss";
import Link from "next/link";

const HeaderDropdown = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    {
      label: "Financials",
      subMenu: [
        { label: "Quarterly Financial Results", href: "#" },
        { label: "Investor Presentations", href: "#" },
        { label: "Annual Reports", href: "#" },
        { label: "Earnings Call Transcripts", href: "#" },
        { label: "Investors Contact", href: "#" },
      ],
    },
    {
      label: "Company Announcements",
      subMenu: [
        { label: "Submissions under Regulation 30", href: "#" },
        { label: "Notice of Board Meeting", href: "#" },
        { label: "AGM Notices", href: "#" },
        { label: "Circular in the form of Advertisement inviting Deposits", href: "#" },
        { label: "Result of e-Voting and Polling at AGM ", href: "#" },
        { label: "EGM Details", href: "#" },
        { label: "Unclaimed and Unpaid Amounts", href: "#" },
        { label: "Buyback 2024", href: "#" },
        { label: "Others", href: "#" },
      ],
    },
    {
      label: "Investor Information",
      subMenu: [
        { label: "Quarterly Shareholding Pattern", href: "#" },
        { label: "Historical Financial Snapshot", href: "#" },
        { label: "Stock Information FY 22-23", href: "#" },
      ],
    },
    {
      label: "Corporate Governance",
      subMenu: [
        { label: "Board of Directors and its commitees", href: "#" },
        { label: "Code of Conduct", href: "#" },
        { label: "Policies", href: "#" },
      ],
    },
    { label: "Investor Contact", href: "#" },
  ];

  return (
    <div
      className={styles["dropdown-container-box"]}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className={styles.dropdownWrapper}>
        <ul className={styles.leftMenu}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => setActiveMenu(index)} // open submenu
            >
              {item.label}
              {item.subMenu && (
                <>
                  <span className={styles.arrow}>
                    <svg
                      width="6"
                      height="8"
                      viewBox="0 0 6 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.33398 6.91602L5.50065 3.99935L1.33398 0.666016"
                        stroke="#F9F9F9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  {activeMenu === index && (
                    <ul className={styles.rightMenu}>
                      {item.subMenu.map((sub, i) => (
                        <li key={i}>
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

export default HeaderDropdown;
