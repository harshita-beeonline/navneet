import { CiSearch } from "react-icons/ci";
import styles from "../../../styles/Career/JobsPage.module.scss";
import JobCard from "@/components/Career/JobCard/JobCard";

import { getAllJobs, getJobsByCategory } from "../../../lib/jobs";

export default function JobsPage({ searchParams }) {
  const category = searchParams?.category || null;
  const jobs = category ? getJobsByCategory(category) : getAllJobs();

  return (
    <main className={styles["job-page"]}>
      {/* Heading */}
      <div className={styles["job-page-heading"]}>Current Openings</div>

      {/* Search Section */}
      <div className={styles["search-bar-section"]}>
        <div className={styles["open-jobs"]}>40 Open Jobs</div>

        <div className={styles["search-bar"]}>
          <CiSearch className={styles["search-icon"]} />
          <input
            type="text"
            placeholder="Enter keywords to search"
            className={styles["search-input"]}
          />
          <button className={styles["search-btn"]}>Search</button>
        </div>
      </div>

      {/* Filters */}
      <div className={styles["filters-section"]}>
        <div className={styles["filter-box"]}>
          <label>Location</label>
          <div className={styles["select-wrapper"]}>
            <select>
              <option>All Location</option>
            </select>
          </div>
        </div>
        <div className={styles["filter-box"]}>
          <label>Employment Type</label>
          <div className={styles["select-wrapper"]}>
            <select>
              <option>All</option>
            </select>
          </div>
        </div>
      </div>

      {/* job listing */}
      <div className={styles["job-header"]}>
        <div>Role</div>
        <div>Location</div>
        <div>Job Type</div>
      </div>

      {jobs.map((job) => (
        <JobCard job={job} key={job.id} />
      ))}
    </main>
  );
}
