// REMOVE "use client" at the top
// app/career/jobs/[slug]/page.js
import { getJobBySlug, getAllJobs } from "@/lib/jobs";
import job_detail_back_arrow from "../../../../public/images/carrer/job-detail-back-arrow.svg";
import styles from "../../../../styles/Career/JobDetail.module.scss";
import Image from "next/image";
import Link from "next/link";
import JobDetailContent from "@/components/Career/JobDetail/JobDetail";

export async function generateStaticParams() {
  const jobs = getAllJobs();
  return jobs.map((j) => ({ slug: j.slug }));
}

export default function JobPage({ params }) {
  const job = getJobBySlug(params.slug);
  if (!job) return <div>Job not found</div>;

  return (
    <main className={styles["job-detail-page"]}>
      {/* Heading Section */}
      <div className={styles["job-detail-heading-section"]}>
        <div className={styles["heading"]}>Current Openings</div>
        <Link href="/career/jobs" className={styles["back"]}>
          <Image src={job_detail_back_arrow} alt="job_detail_back_arrow" />
          <div className={styles["back-text"]}>View all jobs</div>
        </Link>
      </div>

      {/* Job Details Section */}
      <JobDetailContent />
    </main>
  );
}
