"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "../../styles/BigGoalsKey.module.scss";
import goalscard1 from "../../public/images/goalscard1.png";
import goalscard2 from "../../public/images/goalscard2.png";
import goalscard3 from "../../public/images/goalscard3.png";

const BigGoalsKey = () => {
  const [mounted, setMounted] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cardData = [
    {
      image: goalscard1.src,
      name: "Environment",
      list: [
        {
          title: "Renewable energy:",
          detail: "60% reduction in Scope 2 emissions via wind and solar",
        },
        {
          title: "Emission reduction:",
          detail: "5,770 MT CO₂ offset through renewables and biodiversity initiatives",
        },
        {
          title: "Waste recovery:",
          detail: "93% recovery with zero-landfill operations",
        },
        {
          title: "Water management:",
          detail: "100% Zero Liquid Discharge and active rainwater harvesting",
        },
        {
          title: "Materials:",
          detail: "53% recycled paper usage",
        },
      ],
    },
    {
      image: goalscard2.src,
      name: "Social",
      list: [
        {
          title: "Training:",
          detail: "3.72 hours per employee across safety, ethics, and operations",
        },
        {
          title: "Safety:",
          detail: "Zero high-consequence incidents reported",
        },
        {
          title: "Attrition:",
          detail: "12.01% employee turnover",
        },
        {
          title: "Education:",
          detail: "21,079 beneficiaries reached",
        },
        {
          title: "Healthcare:",
          detail: "2,56,326 beneficiaries supported",
        },
      ],
    },
    {
      image: goalscard3.src,
      name: "Governance",
      list: [
        {
          title: "Compliance:",
          detail: "BRSR-aligned disclosures under the SEBI framework",
        },
        {
          title: "Assessment:",
          detail: "EcoVadis sustainability assessment completed (FY 2025–26)",
        },
        {
          title: "Policies:",
          detail: "EHS, ESG, Code of Code of Conduct, Materiality Assessment, Supplier Code of Conduct & Site Assessments",
        },
        {
          title: "Governance:",
          detail: "Transparent governance and CSR collaboration mechanisms",
        },
      ],
    },
  ];

  const minLoopSlides = 6;
  const repeatCount = Math.max(1, Math.ceil(minLoopSlides / cardData.length));
  const swiperCardData = Array.from({ length: repeatCount }, (_, repeatIndex) =>
    cardData.map((item) => ({
      ...item,
      key: `${item.name}-${repeatIndex}`,
    })),
  ).flat();

  const restartAutoplay = (swiper) => {
    if (!swiper) {
      return;
    }

    swiper.update();

    if (swiper.autoplay && !swiper.autoplay.running) {
      swiper.autoplay.start();
    }
  };

  useEffect(() => {
    if (!mounted || !swiperRef.current) {
      return;
    }

    restartAutoplay(swiperRef.current);
  }, [mounted]);

  const renderGoalCard = (item, key) => (
    <article
      className={styles["goals-card"]}
      key={key}
      style={{ "--goal-card-image": `url(${item.image})` }}
    >
      <div className={styles["goals-card-content"]}>
        <h5>{item.name}</h5>
        <ul className={styles["goals-card-list"]}>
          {item.list.map((point) => (
            <li key={point.title}>
              <span className={styles["goals-card-list-title"]}>
                {point.title}
              </span>{" "}
              <span className={styles["goals-card-list-detail"]}>
                {point.detail}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );

  return (
    <div className={styles["big-goals-cards-section"]}>
      <h2>Big goals and key milestones</h2>
      {mounted ? (
        <Swiper
          modules={[Autoplay]}
          rewind
          speed={900}
          grabCursor
          centeredSlides
          watchOverflow={false}
          observer
          observeParents
          autoplay={{
            delay: 2400,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            stopOnLastSlide: false,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            restartAutoplay(swiper);
          }}
          onBreakpoint={restartAutoplay}
          onAutoplayStop={restartAutoplay}
          onReachEnd={(swiper) => {
            swiper.slideTo(0);
            restartAutoplay(swiper);
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
              centeredSlides: true,
            },
            480: {
              slidesPerView: 1.7,
              spaceBetween: 16,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 20,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
              centeredSlides: false,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 32,
              centeredSlides: false,
            },
          }}
          className={styles["all-goals-cards"]}
        >
          {swiperCardData.map((item, index) => (
            <SwiperSlide key={`${item.key}-${index}`}>
              {renderGoalCard(item)}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className={styles["static-goals-cards"]}>
          {cardData.map((item) => renderGoalCard(item, item.name))}
        </div>
      )}
    </div>
  );
};

export default BigGoalsKey;
