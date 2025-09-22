"use client";

import { useRef, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import styles from "../../../styles/Career/JobDetail.module.scss";
import ApplyForm from "../ApplyForm/ApplyForm";

export default function JobDetailContent() {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const handleApplyClick = () => {
    setShowForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100); // slight delay so form mounts first
  };

  return (
    <div className={styles["job-details-content"]}>
      {/* Top Section */}
      <section className={styles["top-section"]}>
        <div className={styles["job-heading"]}>
          Requirement of Quality Officer in our Manufacturing – Stationery Plant
          (Virar) (QUA00007)
        </div>

        <div className={styles["job-location"]}>
          <CiLocationOn className={styles["location-icon"]} />
          <span className={styles["locations"]}>
            Vasai, Virar, Boisar, Bhayandar, Palghar
          </span>
        </div>

        <button className={styles["apply-btn"]} onClick={handleApplyClick}>
          Apply Now
        </button>
      </section>

      {/* About Us Section */}
      <section className={styles["aboutus"]}>
        <h2>About Us</h2>
        <p>
          Navneet Education Limited was founded by Gala Group in 1959; and since
          then has been India’s most loved educational content provider. Navneet
          also manufactures stationery, general books and children’s books in
          multiple Indian and foreign languages making it a dominant player in
          the field of publishing.
        </p>
        <p>
          Vikas, Gala, Grafalco, YOUVA, TOPClass and TOPScorer are prominent
          brands owned by Navneet that are much loved by students and teachers
          alike. In December 2016, we acquired Encyclopaedia Britannica (India)
          Pvt. Ltd.’s Indian curriculum division for publishing CBSE textbooks.
          With this acquisition, Navneet will focus on serving the regional
          teaching and learning needs with supplemental digital solutions.
        </p>
        <p>
          At Navneet, people are our greatest pride, resource and are central to
          growth strategy. Our focus lies in giving opportunities with freedom
          to inspire ideas and be inspired, opportunities to take up leadership
          roles early in your career, freedom to experiment and be innovative.
          If you have what it takes to become an integral part of an
          organization that is built and driven by people, then you are the
          person we are looking for.
        </p>
        <p>
          At Navneet, it is a never ending journey – Where Knowledge is Wealth.
        </p>
      </section>

      {/* Job Description */}
      <section className={styles["job-description"]}>
        <h2>Job Description</h2>
        <p>
          Hello, <br />
          We have Good Opportunity in our Manufacturing – Stationery Plant as
          Officer.
        </p>
        <p>
          <b>Designation:</b> Quality Officer <br />
          <b>Qualification:</b> Any BE / B.Tech / Graduate <br />
          <b>Experience:</b> 2–5 Yrs
        </p>

        <h3>Duty & Responsibilities:</h3>
        <ul>
          <li>To maintain quality data of Poly file folder</li>
          <li>
            Adherence of quality standard as per SOP of Poly View ring binder
            and Poly file folder
          </li>
          <li>
            Monitoring defect analysis and actionable improvement on the same
          </li>
          <li>
            To maintain tool dye validation of Poly folder and Poly view ring
            binder
          </li>
          <li>
            To identify failure mode during process and act on same for new
            product
          </li>
          <li>Strong Analytical & Problem Solving Skills</li>
          <li>To prepare MIS related to Poly Item and support team</li>
          <li>To carry out process audit</li>
        </ul>

        <p>
          <b>Facilities from Company:</b> Pick-Drop Service, Duty Meal, PF, ESIC
          etc.
        </p>
        <p>
          Interested candidate can share updated CV on contact:{" "}
          <b>8237520115</b> or Mail on{" "}
          <a href="mailto:hr.khaniwade@navneet.com">
            hr.khaniwade@navneet.com
          </a>
          . <br />
          If not suitable kindly share your reference who are Interested for
          this position.
        </p>
        <p>
          Thanks & Regards, <br />
          <b>Mayuri</b> <br />
          (8237520115)
        </p>
      </section>

      {/* Job Requirement */}
      <section className={styles["job-requirement"]}>
        <h2>Job Requirement</h2>
        <h3>Required Skill:</h3>
        <ul>
          <li>
            Need to co-ordinate with Planning Team / Product Development /
            Productions
          </li>
          <li>Quality planning and quality control processes</li>
          <li>Quality Technicians in a manufacturing plant</li>
          <li>Good Interpersonal Skills</li>
          <li>Good in Advanced Excel</li>
          <li>Strong Analytical & Problem Solving Skills</li>
          <li>To prepare MIS related to Poly Item and support team</li>
          <li>Ability to meet Deadlines & Commitment</li>
        </ul>
      </section>

      {/* Apply Form */}
      {showForm && (
        <div ref={formRef}>
          <ApplyForm />
        </div>
      )}
    </div>
  );
}
