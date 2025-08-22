"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper/modules"; // ✅ Import Autoplay
import "swiper/css";
import "swiper/css/scrollbar";
import styles from "../../../styles/OurBrands.module.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const brands = [
  {
    title: "NavneetAI",
    desc: "India’s first custom AI-powered education model offering personalized, adaptive, & innovative learning experiences for students",
    img: "/images/brand2.png",
  },
  {
    title: "Navneet Digest",
    desc: "Navneet Digest is a one-stop resource for students, offering all textbook-relevant content in a clear, easy-to-understand format",
    img: "/images/brand4.png",
  },
  {
    title: "Navneet Digibook",
    desc: "Navneet DigiBook is the smart version of your favourite Navneet Books. It is a web based platform/app.",
    img: "/images/smartdigibook.png",
  },
  {
    title: "21 MLQ Sets",
    desc: "Question Paper Sets are specially prepared to help students appearing for the Board Exams (X & XII).",
    img: "/images/21mcq.png",
  },
  {
    title: "Youva",
    desc: "Youva enables all of us, thinkers and doers of the world, to start on a fresh page, to create a brave new world.",
    img: "/images/Youva.svg",
  },
  {
    title: "Grafalco",
    desc: "A premium brand of ICSE and CBSE school books introduced in 2009 with 24 titles for kindergarten.",
    img: "/images/brand1.png",
  },
  {
    title: "TOPTECH",
    desc: "Among India’s top EdTech firms, it rapidly leads in LMS software, offering digital solutions to schools.",
    img: "/images/brand6.png",
  },
  {
    title: "Vikas",
    desc: "Vikas, trusted by students and teachers, offers smart study companions during exams to help achieve outstanding marks.",
    img: "/images/brand3.png",
  },
];

const OurBrands = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <div className={styles.ourBrandsSection}>
      <h4>Our Brands</h4>
      <p>
        Over the years, Navneet Education has been the pioneer in the
        Publication, Stationery & EdTech Sector. The other brands of Navneet too
        have been the highlights and have been trusted all over India.
      </p>

      <div className={styles.swiperWrapperCustom}>
        <button
          className={`${styles.customArrow} ${styles.left}`}
          onClick={handlePrev}
        >
          <FaArrowLeft />
        </button>

        <Swiper
          modules={[Scrollbar, Autoplay]} // ✅ Added Autoplay
          slidesPerView={4}
          spaceBetween={30}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 2000, // Time between slides (ms)
            disableOnInteraction: false, // Keep autoplay after user interaction
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            0: { slidesPerView: 1.3 },
            540: { slidesPerView: 1.7 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 2.3 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className={styles.ourBrandsSwiper}
        >
          {brands.map((brand, idx) => (
            <SwiperSlide key={idx}>
              <div className={styles.brandCard}>
                <img
                  src={brand.img}
                  alt={brand.title}
                  className={styles.brandImg}
                />
                <h6>{brand.title}</h6>
                <p>{brand.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className={`${styles.customArrow} ${styles.right}`}
          onClick={handleNext}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default OurBrands;
