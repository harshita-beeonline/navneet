import styles from "../../../styles/Career/JobsPage.module.scss";

import { getAllJobs, getJobsByCategory } from "../../../lib/jobs";
import Link from "next/link";
import JobsClient from "@/components/Career/JobsClient/JobsClient";

export default function JobsPage({ searchParams }) {
  const category = searchParams?.category || null;
  const jobs = category ? getJobsByCategory(category) : getAllJobs();

  return (
    <>
      <main className={styles["job-page"]}>
        {/* Heading */}
        <div className={styles["job-page-heading"]}>Current Openings</div>

        {/* Interactive area is handled by client component */}
        <JobsClient initialJobs={jobs} />
      </main>

      {/* Join Talent pool */}
      <div className={styles["join-talent-pool"]}>
        <div className={styles["heading"]}>Join Talent Pool</div>
        <div className={styles["info"]}>
          Join our talent pool by simply submitting your resume. We’ll inform
          you about the new jobs matching your profile and update you if you are
          the best fit for one of our open positions.
        </div>
        <Link href={"/career/jobs/submit-resume"} className={styles["btn"]}>
          Submit resume
        </Link>
      </div>
    </>
  );
}
