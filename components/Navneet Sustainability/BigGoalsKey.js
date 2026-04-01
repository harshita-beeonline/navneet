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
  const [activeIndex, setActiveIndex] = useState(-1);
  const [shouldAutoReveal, setShouldAutoReveal] = useState(false);
  const swiperRef = useRef(null);
  const revealTimeoutRef = useRef(null);

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
          detail:
            "5,770 MT CO₂ offset through renewables and biodiversity initiatives",
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
          detail:
            "3.72 hours per employee across safety, ethics, and operations",
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
          detail:
            "EHS, ESG, Code of Code of Conduct, Materiality Assessment, Supplier Code of Conduct & Site Assessments",
        },
        {
          title: "Governance:",
          detail: "Transparent governance and CSR collaboration mechanisms",
        },
      ],
    },
  ];

  const repeatCount = 3;
  const swiperCardData = Array.from({ length: repeatCount }, (_, repeatIndex) =>
    cardData.map((item) => ({
      ...item,
      key: `${item.name}-${repeatIndex}`,
      realIndex: cardData.findIndex((card) => card.name === item.name),
    })),
  ).flat();

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const updateRevealMode = () => {
      const enableAutoReveal = window.innerWidth <= 1024;
      setShouldAutoReveal(enableAutoReveal);

      if (!enableAutoReveal) {
        setActiveIndex(-1);
        if (revealTimeoutRef.current) {
          clearTimeout(revealTimeoutRef.current);
          revealTimeoutRef.current = null;
        }
        return;
      }

      const currentIndex =
        typeof swiperRef.current?.realIndex === "number"
          ? swiperRef.current.realIndex % cardData.length
          : 0;
      setActiveIndex(currentIndex);
    };

    updateRevealMode();
    window.addEventListener("resize", updateRevealMode);

    return () => {
      window.removeEventListener("resize", updateRevealMode);
    };
  }, [cardData.length]);

  useEffect(() => {
    return () => {
      if (revealTimeoutRef.current) {
        clearTimeout(revealTimeoutRef.current);
      }
    };
  }, []);

  const triggerReveal = (index) => {
    if (!shouldAutoReveal) {
      return;
    }

    if (revealTimeoutRef.current) {
      clearTimeout(revealTimeoutRef.current);
    }

    setActiveIndex(-1);
    revealTimeoutRef.current = setTimeout(() => {
      setActiveIndex(index % cardData.length);
      revealTimeoutRef.current = null;
    }, 700);
  };

  const handleSwiperReady = (swiper) => {
    swiperRef.current = swiper;
    triggerReveal(
      typeof swiper.realIndex === "number"
        ? swiper.realIndex
        : swiper.activeIndex,
    );
  };

  const handleSlideChange = (swiper) => {
    triggerReveal(
      typeof swiper.realIndex === "number"
        ? swiper.realIndex
        : swiper.activeIndex,
    );
  };

  const renderGoalCard = (item, index, key) => (
    <article
      className={`${styles["goals-card"]} ${
        shouldAutoReveal && activeIndex === index
          ? styles["goals-card-active"]
          : ""
      }`}
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
          loop={swiperCardData.length > 1}
          loopAdditionalSlides={cardData.length}
          loopPreventsSliding={false}
          speed={900}
          grabCursor
          centeredSlides
          watchOverflow={false}
          observer
          observeParents
          autoplay={{
            delay: 2600,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            waitForTransition: true,
          }}
          onSwiper={handleSwiperReady}
          onSlideChange={handleSlideChange}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
              centeredSlides: true,
            },
            480: {
              slidesPerView: 1.35,
              spaceBetween: 16,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 1.75,
              spaceBetween: 20,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 2.25,
              spaceBetween: 24,
              centeredSlides: true,
            },
            1180: {
              slidesPerView: 3,
              spaceBetween: 24,
              centeredSlides: true,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 30,
              centeredSlides: true,
            },
          }}
          className={styles["all-goals-cards"]}
        >
          {swiperCardData.map((item, index) => (
            <SwiperSlide key={`${item.key}-${index}`}>
              {renderGoalCard(item, item.realIndex)}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className={styles["static-goals-cards"]}>
          {cardData.map((item, index) =>
            renderGoalCard(item, index, item.name),
          )}
        </div>
      )}
    </div>
  );
};

export default BigGoalsKey;
