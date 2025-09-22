"use client";

import styles from "../../../styles/Career/JobCard.module.scss";

export default function JobCard({ job }) {
  return (
    <div className={styles.card}>
      <div className={styles.role}>{job.description}</div>
      <div className={styles.location}>{job.location?.join(", ")}</div>
      <div className={styles.action}>
        <div className={styles.jobType}>{job.jobType}</div>
        <a href={`/career/jobs/${job.slug}`} className={styles.viewBtn}>
          View Job
        </a>
      </div>
    </div>
  );
}
