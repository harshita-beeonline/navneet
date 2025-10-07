"use client";

import React, { useState } from "react";
import styles from "../../../../styles/Investor/CompanyAnnouncements/UnclamiedandUnpaidAmounts.module.scss";
import {
  MdOutlineKeyboardArrowRight,
  MdKeyboardArrowDown,
} from "react-icons/md";

// Import Data
import { leftColumn, rightColumn, transferredToIEPF, iepf2 } from "./data";

export default function UnclaimedAndUnpaid() {
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
            {/* Toggle button */}
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
              {isOpen ? (
                <MdKeyboardArrowDown
                  className={`${styles["arrow"]} ${styles["arrowActive"]}`}
                />
              ) : (
                <MdOutlineKeyboardArrowRight className={styles["arrow"]} />
              )}
            </button>

            {/* Expandable Panel */}
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
                    const href =
                      typeof item.link?.[idx] === "string"
                        ? item.link[idx]
                        : item.link?.[idx]?.href || "#";

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
        <span className={styles["crumbStrong"]}>
          Unclaimed and Unpaid Amounts
        </span>
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
              <a
                href={item.href}
                className={styles["itemLink"]}
                target="_blank"
                rel="noopener noreferrer"
              >
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
              <a
                href={item.href}
                className={styles["itemLink"]}
                target="_blank"
                rel="noopener noreferrer"
              >
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
