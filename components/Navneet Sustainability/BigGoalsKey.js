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

  const minLoopSlides = 6;
  const repeatCount = Math.max(1, Math.ceil(minLoopSlides / cardData.length));
  const swiperCardData = Array.from({ length: repeatCount }, (_, repeatIndex) =>
    cardData.map((item) => ({
      ...item,
      key: `${item.name}-${repeatIndex}`,
    }))
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
              slidesPerView: 1.55,
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
