"use client";

import React, { useState } from "react";
import styles from "../../../../styles/Investor/CompanyAnnouncements/UnclamiedandUnpaidAmounts.module.scss";
import {
  MdOutlineKeyboardArrowRight,
  MdKeyboardArrowDown,
} from "react-icons/md";

// Data
const leftColumn = [
  {
    id: 1,
    title: "Unclaimed Dividend Amount as on 31st March 2014",
    children: [
      "Final Dividend 2007-08",
      "Interim Dividend 2007-08",
      "Final Dividend 2008-09",
      "Interim Dividend 2009-10",
      "Interim Dividend 2010-11",
      "Final Dividend 2010-11",
      "Interim Dividend 2011-12",
      "Final Dividend 2011-12",
      "Final Dividend 2012-13",
    ],
    link: [
      "https://navneet.com/pdfs/Unclalmed_Unpaid_Amount/As_on_31st_March_2014/Final%20Dividend%202007-08.pdf",
      "https://navneet.com/pdfs/Unclalmed_Unpaid_Amount/As_on_31st_March_2014/Interim%20Dividend%202007-08.pdf",
      "https://navneet.com/pdfs/Unclalmed_Unpaid_Amount/As_on_31st_March_2014/Final%20Dividend%202008-09.pdf",
      "https://navneet.com/pdfs/Unclalmed_Unpaid_Amount/As_on_31st_March_2014/Interim%20Dividend%202009-10.pdf",
      "https://navneet.com/",
      "https://navneet.com/pdfs/Unclalmed_Unpaid_Amount/As_on_31st_March_2014/Final%20Dividend%202010-11.pdf",
      "https://navneet.com/pdfs/Unclalmed_Unpaid_Amount/As_on_31st_March_2014/Interim%20Dividend%202011-12.pdf",
      "https://navneet.com/pdfs/Unclalmed_Unpaid_Amount/As_on_31st_March_2014/Final%20Dividend%202011-12.pdf",
      "https://navneet.com/pdfs/Unclalmed_Unpaid_Amount/As_on_31st_March_2014/Final%20Dividend%202012-13.pdf",
    ],
  },
  {
    id: 2,
    title: "Unclaimed Dividend Amount as on 23rd August 2016",
    children: [
      "Interim Dividend 2009-2010",
      "Interim Dividend 2010-2011",
      "Final Dividend 2010-2011",
      "Interim Dividend 2011-2012",
      "Final Dividend 2011-2012",
      "Final Dividend 2012-2013",
      "Final Dividend 2013-2014",
      "Final Dividend 2014-2015",
      "Interim Dividend 2015-2016",
    ],
  },
  {
    id: 3,
    title: "Unclaimed Dividend Amount as on 03rd August 2017",
    children: [
      "Interim Dividend 2010-2011",
      "Final Dividend 2010-2011",
      "Interim Dividend 2011-2012",
      "Final Dividend 2011-2012",
      "Final Dividend 2012-2013",
      "Final Dividend 2013-2014",
      "Final Dividend 2014-2015",
      "Interim Dividend 2015-2016",
    ],
  },
  {
    id: 4,
    title: "Unclaimed Dividend Amount as on 31st March 2018",
    children: [
      "Final Dividend 2010-2011",
      "Final Dividend 2011-2012",
      "Final Dividend 2012-2013",
      "Final Dividend 2013-2014",
      "Final Dividend 2014-2015",
      "Final Dividend 2016-2017",
      "Interim Dividend 2011-2012",
      "Interim Dividend 2015-2016",
    ],
    link: [
      "https://navneet.com/pdfs/Unclalmed_Unpaid_Amount/As_on_31st_march_2018/Final%20Dividend_2010-2011.pdf",
      "https://navneet.com/pdfs/Unclalmed_Unpaid_Amount/As_on_31st_march_2018/Final%20Dividend_2011-2012.pdf",
      "https://navneet.com/pdfs/Unclalmed_Unpaid_Amount/As_on_31st_march_2018/Final%20Dividend_2012-2013.pdf",
      "https://navneet.com/pdfs/Unclalmed_Unpaid_Amount/As_on_31st_march_2018/Final%20Dividend_2013-2014.pdf",
      "https://navneet.com/pdfs/Unclalmed_Unpaid_Amount/As_on_31st_march_2018/Final%20Dividend_2014-2015.pdf",
      "https://navneet.com/pdfs/Unclalmed_Unpaid_Amount/As_on_31st_march_2018/Final%20Dividend_2016-2017.pdf",
      "https://navneet.com/pdfs/Unclalmed_Unpaid_Amount/As_on_31st_march_2018/Interim%20Dividend_2011-2012.pdf",
      "https://navneet.com/pdfs/Unclalmed_Unpaid_Amount/As_on_31st_march_2018/Interim%20Dividend_2015-2016.pdf",
    ],
  },
  {
    id: 5,
    title: "Transfer of Shares to IEPF dated 16th February, 2019",
    children: ["Interim Dividend 2011-12"],
  },
];

const rightColumn = [
  {
    id: 6,
    title: "Unclaimed Dividend Amount as on 25th September 2015",
    children: [
      "Final Dividend 2008-2009",
      "Interim Dividend 2009-2010",
      "Interim Dividend 2010-2011",
      "Final Dividend 2010-2011",
      "Interim Dividend 2011-2012",
      "Final Dividend 2011-2012",
      "Final Dividend 2012-2013",
      "Final Dividend 2013-2014",
    ],
  },
  {
    id: 7,
    title: "Fractional Bonus Amount for year 2009 as on 31/03/2017",
    children: ["NEL Fractional Bonus 2009 IEPF-1"],
  },
  {
    id: 8,
    title: "Transfer of Shares to IEPF dated 12th December 2017",
    children: ["Transfer of Shares to IEPF Dated"],
  },
  {
    id: 9,
    title: "Transfer of Shares to IEPF dated 5th February, 2019",
    children: ["Final Dividend – 10-11"],
  },
];

const transferredToIEPF = [
  { id: 1, title: "Final Dividend 2014-2015", href: "https://navneet.com/pdfs/UDATTI/Final%20Dividend_1415_Unpaid%20Dividend_amount%20_IEPF-1.pdf" },
];

const iepf2 = [{ id: 1, title: "IEPF 2 – 2023-2024", href: "#" }];

// Code starts
export default function UnclamiedandUnpaidAmounts() {
  const [openId, setOpenId] = useState(null);

  const toggleItem = (id) => setOpenId(openId === id ? null : id);

  const renderList = (items) => (
    <ul className={styles["list"]} aria-label="Expandable list">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `panel-${item.id}`;

        return (
          <li
            key={item.id}
            className={`${styles["item"]} ${isOpen ? styles["active"] : ""}`}
          >
            {/* Button controls expand/collapse (accessible) */}
            <button
              type="button"
              className={styles["itemButton"]}
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className={styles["itemLeft"]}>
                <span className={styles["bullet"]} aria-hidden="true" />
                <span className={styles["itemText"]}>{item.title}</span>
              </span>

              {/* Arrow: right when closed, down when open */}
              {isOpen ? (
                <MdKeyboardArrowDown
                  className={`${styles["arrow"]} ${styles["arrowActive"]}`}
                />
              ) : (
                <MdOutlineKeyboardArrowRight className={styles["arrow"]} />
              )}
            </button>

            {/* Smooth expanding panel */}
            <div
              id={panelId}
              className={`${styles["subListWrapper"]} ${
                isOpen ? styles["open"] : ""
              }`}
              role="region"
              aria-hidden={!isOpen}
            >
              {item.children?.length > 0 && (
                <ul className={styles["subList"]}>
                  {item.children.map((child, idx) => {
                    // Check if item.link exists and get correct href
                    const href = item.link?.[idx] || "#";

                    return (
                      <li key={idx} className={styles["subItem"]}>
                        <span
                          className={styles["bulletSmall"]}
                          aria-hidden="true"
                        />
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles["subText"]}
                        >
                          {child}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );

  return (
    <section className={styles["section"]}>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className={styles["breadcrumb"]}>
        <span className={styles["crumbStrong"]}>Investor</span>
        <span className={styles["dot"]} />
        <span className={styles["crumb"]}>Company Announcements</span>
        <span className={styles["dot"]} />
        <span className={styles["crumbStrong"]}>EGM Details</span>
      </nav>

      {/* Page heading */}
      <h1 className={styles["pageTitle"]}>Unclaimed and Unpaid Amounts</h1>

      {/* Two-column layout */}
      <div className={styles["lists"]}>
        {renderList(leftColumn)}
        {renderList(rightColumn)}
      </div>

      {/* Bottom block 1 */}
      <div className={styles["block"]}>
        <h2 className={styles["blockTitle"]}>
          Unclaimed Dividend Amount transferred to IEPF
        </h2>
        <ul className={styles["listSingle"]}>
          {transferredToIEPF.map((item) => (
            <li key={item.id} className={styles["itemSingle"]}>
              <a href={item.href} className={styles["itemLink"]}>
                <span className={styles["bullet"]} aria-hidden="true" />
                <span className={styles["itemTextSingle"]}>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom block 2 */}
      <div className={styles["block"]}>
        <h2 className={styles["blockTitle"]}>IEPF 2</h2>
        <ul className={styles["listSingle"]}>
          {iepf2.map((item) => (
            <li key={item.id} className={styles["itemSingle"]}>
              <a href={item.href} className={styles["itemLink"]}>
                <span className={styles["bullet"]} aria-hidden="true" />
                <span className={styles["itemTextSingle"]}>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
