import { CiSearch } from "react-icons/ci";
import styles from "../../../styles/Career/JobsPage.module.scss";
import JobCard from "@/components/Career/JobCard/JobCard";

import { getAllJobs, getJobsByCategory } from "../../../lib/jobs";
import Link from "next/link";

export default function JobsPage({ searchParams }) {
  const category = searchParams?.category || null;
  const jobs = category ? getJobsByCategory(category) : getAllJobs();

  return (
    <>
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

        {/* Job Listing */}
        <div className={styles["job-header"]}>
          <div>Role</div>
          <div>Location</div>
          <div>Job Type</div>
        </div>

        {jobs.map((job) => (
          <JobCard job={job} key={job.id} />
        ))}
      </main>

      {/* Join Talent pool */}
      <div className={styles["join-talent-pool"]}>
        <div className={styles["heading"]}>Join Talent Pool</div>
        <div className={styles["info"]}>
          Join our talent pool by simply submitting your resume. We’ll inform
          you about the new jobs matching your profile and update you if you are
          the best fit for one of our open positions.
        </div>
        <Link href={"/"} className={styles["btn"]}>Submit resume</Link>
      </div>
    </>
  );
}
