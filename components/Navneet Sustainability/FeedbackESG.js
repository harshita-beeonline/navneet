import React from "react";
import styles from "../../styles/FeedbackESG.module.scss";
const FeedbackESG = () => {
  const emailCard = [
    {
      name: "Grievance Redressal:",
      detail: "For sustainability or ethics concerns",
      email: "grievance@navneet.com",
    },
    {
      name: "ESG Collaboration:",
      detail: "For partnerships, contact",
      email: "brsr@navneet.com",
    },
  ];
  return (
    <div className={styles["feedback-esg-section"]}>
      <div className={styles["feedback-content"]}>
        <h2>Feedback & Engagement</h2>
        <h6>We Listen. We Act. We Improve</h6>
        <div className={styles["all-email-cards"]}>
          {emailCard.map((item, index) => (
            <div className={styles["email-card"]} key={index}>
              <h4>{item.name}</h4>
              <p>{item.detail}</p>
              <div className={styles["icon-email"]}>
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM10 9L2 4V14H18V4L10 9ZM10 7L18 2H2L10 7ZM2 4V2V14V4Z"
                    fill="#1E1E1E"
                  />
                </svg>
                <h5>{item.email}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackESG;
