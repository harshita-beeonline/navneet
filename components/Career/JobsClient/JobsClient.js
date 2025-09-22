// components/Career/JobsClient/JobsClient.jsx
"use client";

import React, { useMemo, useState } from "react";
import { CiSearch } from "react-icons/ci";
import styles from "../../../styles/Career/JobsPage.module.scss";
import JobCard from "../JobCard/JobCard";

export default function JobsClient({ initialJobs = [] }) {
  // UI state
  const [query, setQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All Location");
  const [selectedType, setSelectedType] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // build location & jobType options from data
  const locations = useMemo(() => {
    const set = new Set();
    initialJobs.forEach((j) => {
      if (Array.isArray(j.location)) {
        j.location.forEach((l) => set.add(l));
      } else if (j.location) {
        set.add(j.location);
      }
    });
    return ["All Location", ...Array.from(set).sort()];
  }, [initialJobs]);

  const jobTypes = useMemo(() => {
    const set = new Set();
    initialJobs.forEach((j) => {
      if (j.jobType) set.add(j.jobType);
    });
    return ["All", ...Array.from(set).sort()];
  }, [initialJobs]);

  // Filtering logic
  const filteredJobs = useMemo(() => {
    const q = query.trim().toLowerCase();
    return initialJobs.filter((job) => {
      // match query against title/description/role fields whichever you have.
      const hay = (
        (job.title || "") +
        " " +
        (job.description || "") +
        " " +
        (job.role || "")
      ).toLowerCase();

      if (q && !hay.includes(q)) return false;

      if (
        selectedLocation &&
        selectedLocation !== "All Location" &&
        job.location
      ) {
        // job.location might be array
        const locArr = Array.isArray(job.location) ? job.location : [job.location];
        if (!locArr.map((l) => l.toLowerCase()).includes(selectedLocation.toLowerCase()))
          return false;
      }

      if (selectedType && selectedType !== "All") {
        if ((job.jobType || "").toLowerCase() !== selectedType.toLowerCase())
          return false;
      }

      return true;
    });
  }, [initialJobs, query, selectedLocation, selectedType]);

  // Pagination math
  const totalJobs = filteredJobs.length;
  const totalPages = Math.max(1, Math.ceil(totalJobs / pageSize));

  // clamp currentPage
  if (currentPage > totalPages) setCurrentPage(1);

  const start = (currentPage - 1) * pageSize;
  const displayedJobs = filteredJobs.slice(start, start + pageSize);

  // generate small pager (show up to 5 numbers centered around current)
  const pager = useMemo(() => {
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
    const pages = [];
    for (let p = startPage; p <= endPage; p++) pages.push(p);
    return pages;
  }, [currentPage, totalPages]);

  // handlers
  function handleSearchSubmit(e) {
    e?.preventDefault();
    setCurrentPage(1);
    // query is already bound to input state, so filteredJobs will update.
  }

  function handleLocationChange(e) {
    setSelectedLocation(e.target.value);
    setCurrentPage(1);
  }
  function handleTypeChange(e) {
    setSelectedType(e.target.value);
    setCurrentPage(1);
  }
  function handlePageSizeChange(e) {
    setPageSize(Number(e.target.value));
    setCurrentPage(1);
  }

  return (
    <>
      <div className={styles["search-bar-section"]}>
        <div className={styles["open-jobs"]}>{totalJobs} Open Jobs</div>

        <form className={styles["search-bar"]} onSubmit={handleSearchSubmit}>
          <CiSearch className={styles["search-icon"]} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Enter keywords to search"
            className={styles["search-input"]}
            aria-label="Search jobs"
          />
          <button type="submit" className={styles["search-btn"]}>
            Search
          </button>
        </form>
      </div>

      {/* Filters */}
      <div className={styles["filters-section"]}>
        <div className={styles["filter-box"]}>
          <label>Location</label>
          <div className={styles["select-wrapper"]}>
            <select value={selectedLocation} onChange={handleLocationChange}>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles["filter-box"]}>
          <label>Employment Type</label>
          <div className={styles["select-wrapper"]}>
            <select value={selectedType} onChange={handleTypeChange}>
              {jobTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Header row */}
      <div className={styles["job-header"]}>
        <div>Role</div>
        <div>Location</div>
        <div>Job Type</div>
      </div>

      {/* Job list */}
      {displayedJobs.map((job) => (
        <JobCard job={job} key={job.id || job.slug || JSON.stringify(job)} />
      ))}

      {/* Pagination */}
      <div className={styles["pagination-wrap"]}>
        <div className={styles["pager"]}>
          <button
            className={`${styles["page-item"]} ${currentPage === 1 ? styles["disabled"] : ""}`}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            aria-label="Previous page"
            disabled={currentPage === 1}
          >
            ◀
          </button>

          {pager[0] > 1 && (
            <>
              <button className={styles["page-item"]} onClick={() => setCurrentPage(1)}>
                1
              </button>
              {pager[0] > 2 && <div className={styles["dots"]}>…</div>}
            </>
          )}

          {pager.map((p) => (
            <button
              key={p}
              className={`${styles["page-item"]} ${p === currentPage ? styles["active"] : ""}`}
              onClick={() => setCurrentPage(p)}
              aria-current={p === currentPage ? "page" : undefined}
            >
              {p}
            </button>
          ))}

          {pager[pager.length - 1] < totalPages && (
            <>
              {pager[pager.length - 1] < totalPages - 1 && <div className={styles["dots"]}>…</div>}
              <button className={styles["page-item"]} onClick={() => setCurrentPage(totalPages)}>
                {totalPages}
              </button>
            </>
          )}

          <button
            className={`${styles["page-item"]} ${currentPage === totalPages ? styles["disabled"] : ""}`}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            aria-label="Next page"
            disabled={currentPage === totalPages}
          >
            ▶
          </button>
        </div>

        <div className={styles["page-size"]}>
          <select value={pageSize} onChange={handlePageSizeChange}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </div>
      </div>
    </>
  );
}
