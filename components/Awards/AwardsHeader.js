"use client";
import React, { useState } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { useAwards } from "./AwardsContext";
import styles from "../../styles/awards.module.scss";

export default function AwardsHeader() {
  const { sortOrder, setSortOrder } = useAwards(); 
  const [open, setOpen] = useState(false);

  const handleSelect = (order) => {
   
    if (order !== sortOrder || sortOrder === "initial") {
      setSortOrder(order);
    }
    setOpen(false);
  };


  const getSortDisplayText = () => {
    if (sortOrder === "initial") return "Sort by (Default)"; 
    return `Sort by (${sortOrder === "asc" ? "Ascending" : "Descending"})`;
  };

  return (
    <header className={styles.headerSection}>
      <div className={styles.headerLeft}>
        <p className={styles.subHeading}>Lorem Ipsum</p>
        <h1 className={styles.mainHeading}>Awards & accolades</h1>
        <p className={styles.description}>
          Our Awards, our pride – The awards section determines the goodwill of Navneet and its products. It shows the year-by-year Navneet’s progress. 
        </p>
      </div>
      <div className={styles.sortWrapper}>
        <div className={styles.sortBy} onClick={() => setOpen((prev) => !prev)}>
          <FaBars className={styles.sortIcon} />
          <span className={styles.sortText}> {getSortDisplayText()} </span>
          <FaChevronDown className={styles.sortArrow} />
        </div>
        {open && (
          <div className={styles.sortDropdown}>
            <div className={styles.sortOption} onClick={() => handleSelect("asc")}>
              Ascending
            </div>
            <div className={styles.sortOption} onClick={() => handleSelect("desc")}>
              Descending
            </div>
          </div>
        )}
      </div>
    </header>
  );
}