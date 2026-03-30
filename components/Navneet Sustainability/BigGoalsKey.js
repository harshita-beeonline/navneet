"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "../../styles/BigGoalsKey.module.scss";
import goalscard1 from "../../public/images/goalscard1.png";
import goalscard2 from "../../public/images/goalscard2.png";
import goalscard3 from "../../public/images/goalscard3.png";

const BigGoalsKey = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cardData = [
    {
      image: goalscard1.src,
      name: "Environment",
    },
    {
      image: goalscard2.src,
      name: "Social",
    },
    {
      image: goalscard3.src,
      name: "Governance",
    },
  ];

  return (
    <div className={styles["big-goals-cards-section"]}>
      <h2>Big goals and key milestones</h2>
      {mounted ? (
        <Swiper
          modules={[Autoplay]}
          loop
          speed={900}
          grabCursor
          centeredSlides
          autoplay={{
            delay: 2400,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.45,
              spaceBetween: 14,
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
          {cardData.map((item) => (
            <SwiperSlide key={item.name}>
              <article
                className={styles["goals-card"]}
                style={{ "--goal-card-image": `url(${item.image})` }}
              >
                <h5>{item.name}</h5>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className={styles["static-goals-cards"]}>
          {cardData.map((item) => (
            <article
              className={styles["goals-card"]}
              key={item.name}
              style={{ "--goal-card-image": `url(${item.image})` }}
            >
              <h5>{item.name}</h5>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default BigGoalsKey;
