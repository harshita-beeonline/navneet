"use client";

import styles from "@/styles/Career/SubmitResume.module.scss";
import ApplyForm from "@/components/Career/ApplyForm/ApplyForm";
import Link from "next/link";
import Image from "next/image";
import backArrow from "../../../../public/images/carrer/job-detail-back-arrow.svg";

export default function SubmitResumePage() {
  return (
    <main className={styles["submit-resume-page"]}>
      {/* Header Section */}
      <div className={styles["header"]}>
        <div className={styles["heading"]}>Join Talent Pool</div>

        <Link href="/career/jobs" className={styles["back"]}>
          <Image src={backArrow} alt="Back arrow" />
          <span>Back to Jobs</span>
        </Link>
      </div>

      {/* Info Section */}
      <section className={styles["intro"]}>
        <p>
          Join our talent pool by submitting your resume below. We’ll notify you
          when jobs matching your skills become available.
        </p>
      </section>

      {/* Apply Form */}
      <section className={styles["form-section"]}>
        <ApplyForm />
      </section>
    </main>
  );
}
