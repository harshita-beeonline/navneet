// components/Career/JobCard/JobCard.jsx
"use client";

import Link from "next/link";
import styles from "../../../styles/Career/JobCard.module.scss";

export default function JobCard({ job }) {
  return (
    <div className={styles.card} role="listitem">
      <div className={styles.role}>{job.description}</div>

      <div className={styles.location}>
        {Array.isArray(job.location) ? job.location.join(", ") : job.location}
      </div>

      <div className={styles.action}>
        <div className={styles.jobType}>{job.jobType || "Full Time"}</div>
        <Link href={`/career/jobs/${job.slug}`} className={styles.viewBtn} aria-label={`View job ${job.description}`}>
          View Job
        </Link>
      </div>
    </div>
  );
}
