"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import vectorBar from "../../public/images/awards/Vector.svg";
import { FaChevronDown } from "react-icons/fa";
import { useAwards } from "./AwardsContext";
import styles from "../../styles/Award/AwardPage.module.scss";

export default function AwardsHeader() {
  const { sortOrder, setSortOrder } = useAwards();
  const [open, setOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(`.${styles.sortWrapper}`)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const label =
    sortOrder === "asc"
      ? "Sort by"
      : sortOrder === "desc"
      ? "Sort by"
      : "Sort by";

  return (
    <header className={styles.headerSection}>
      <div>
        <p className={styles.subHeading}>Awards</p>
        <h1 className={styles.mainHeading}>Awards & accolades</h1>
        <p className={styles.description}>
          Our Awards, our pride – The awards section determines the goodwill of
          Navneet and its products. It shows the year-by-year Navneet’s
          progress.
        </p>
      </div>

      <div className={styles.sortWrapper}>
        <button
          type="button"
          className={styles.sortBy}
          onClick={() => setOpen((p) => !p)}
          aria-expanded={open}
          aria-haspopup="listbox"
        >
          {/* Replace FaBars with Vector icon */}
          <Image
            src={vectorBar}
            alt="Sort Icon"
            className={styles.sortIcon}
            width={16}
            height={16}
          />
          <span>{label}</span>
          <FaChevronDown
            className={`${styles.sortArrow} ${open ? styles.open : ""}`}
          />
        </button>

        {open && (
          <div className={styles.sortDropdown} role="listbox">
            <div
              className={styles.sortOption}
              role="option"
              onClick={() => {
                setSortOrder("asc");
                setOpen(false);
              }}
            >
              Ascending
            </div>
            <div
              className={styles.sortOption}
              role="option"
              onClick={() => {
                setSortOrder("desc");
                setOpen(false);
              }}
            >
              Descending
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
