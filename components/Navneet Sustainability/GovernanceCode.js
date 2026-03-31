"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import styles from "../../styles/GovernanceCode.module.scss";

const GovernanceCode = () => {
  const codeCards = [
    {
      mb: "PDF , 9MB",
      title: "ESG Policy",
    },
    {
      mb: "PDF , 9MB",
      title: "Code of Conduct & ethics",
    },
    {
      mb: "PDF , 9MB",
      title: "Supplier Code of Conduct",
    },
    {
      mb: "PDF , 9MB",
      title: "POSH Policy",
    },
        {
      mb: "PDF , 9MB",
      title: "ESG Policy",
    },
    {
      mb: "PDF , 9MB",
      title: "Code of Conduct & ethics",
    },
    {
      mb: "PDF , 9MB",
      title: "Supplier Code of Conduct",
    },
    {
      mb: "PDF , 9MB",
      title: "POSH Policy",
    },
  ];
  return (
    <div className={styles["governance-code-section"]}>
      <h2>Governance, Policies & Codes</h2>
      <Swiper
        className={styles["all-codes-cards"]}
        style={{ display: "block" }}
        modules={[Scrollbar, Autoplay]}
        slidesPerView={3.6}
        spaceBetween={30}
        grabCursor
        loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.1,
            spaceBetween: 16,
          },
          576: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3.6,
            spaceBetween: 30,
          },
        }}
      >
        {codeCards.map((item,index) => (
          <SwiperSlide key={index} style={{ height: "auto" }}>
            <div className={styles["code-card"]}>
              <h6>{item.mb}</h6>
              <div className={styles["download-part"]}>
                <h4>{item.title}</h4>
                <div className={styles["download-icon-text"]}>
                  <h5>Download Document</h5>
                  <button>
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.75 11.2953V12.2083C0.75 12.9377 1.03973 13.6372 1.55546 14.1529C2.07118 14.6686 2.77065 14.9583 3.5 14.9583H12.6667C13.396 14.9583 14.0955 14.6686 14.6112 14.1529C15.1269 13.6372 15.4167 12.9377 15.4167 12.2083V11.2917M8.08333 0.75V10.8333M8.08333 10.8333L11.2917 7.625M8.08333 10.8333L4.875 7.625"
                        stroke="#2F6DB2"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GovernanceCode;
