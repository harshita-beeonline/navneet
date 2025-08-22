"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper/modules"; // ✅ Import Autoplay
import "swiper/css";
import "swiper/css/scrollbar";
import styles from "../../../styles/TrendingProducts.module.scss"; // ✅ Changed file name for clarity
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const brands = [
  {
    title: "Navneet Digest - Maharashtra State Board",
    desc: "INR 214.00",
    img: "/images/trend1.png",
    bgColor: "#EEFAE4",
    link: "https://www.navneetstore.com/collections/maharashtra-board?usf_sort=bestselling",
  },
  {
    title: "CBSE Board Practice Paper",
    desc: "INR 400.00",
    img: "/images/trend2.png",
    bgColor: "#F7DACC",
    link: "https://www.navneetstore.com/collections/cbse-board?usf_sort=bestselling&uff_cbwuat_tags=Boards%20Exam%20Preparation%20Book",
  },
  {
    title: "MY STUDY BUDDY - NCERT Digest - CBSE Board",
    desc: "INR 304.00",
    img: "/images/trend3.png",
    bgColor: "#FBF3C4",
    link:" https://www.navneetstore.com/collections/cbse-board?usf_sort=bestselling&uff_cbwuat_tags=NCERT%20Digest"
  },
  {
    title: "Navneet Books - Gujarat State Board",
    desc: "INR 927.00",
    img: "/images/trend4.png",
    bgColor: "#C4EBE6",
    link:"https://www.navneetstore.com/pages/gujarat-board"
  },
    {
    title: "Navneet Digest - Maharashtra State Board",
    desc: "INR 214.00",
    img: "/images/trend1.png",
    bgColor: "#EEFAE4",
    link: "https://www.navneetstore.com/collections/maharashtra-board?usf_sort=bestselling",
  },
  {
    title: "CBSE Board Practice Paper",
    desc: "INR 400.00",
    img: "/images/trend2.png",
    bgColor: "#F7DACC",
    link: "https://www.navneetstore.com/collections/cbse-board?usf_sort=bestselling&uff_cbwuat_tags=Boards%20Exam%20Preparation%20Book",
  },
  {
    title: "MY STUDY BUDDY - NCERT Digest - CBSE Board",
    desc: "INR 304.00",
    img: "/images/trend3.png",
    bgColor: "#FBF3C4",
    link:" https://www.navneetstore.com/collections/cbse-board?usf_sort=bestselling&uff_cbwuat_tags=NCERT%20Digest"
  },
  {
    title: "Navneet Books - Gujarat State Board",
    desc: "INR 927.00",
    img: "/images/trend4.png",
    bgColor: "#C4EBE6",
    link:"https://www.navneetstore.com/pages/gujarat-board"
  },
];

const TrendingProducts = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <div className={styles.trendingProductsSection}>
      <h4>Our Trending Products</h4>
      <p>
        The products on this list are the top trending product categories owing
        to current market needs. Browse the list of our trending products of
        class books and other resources.
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
            0: { slidesPerView: 1.2 },
            540: { slidesPerView: 1.6 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 2.3 },
            992: { slidesPerView: 3 },
            1280: { slidesPerView: 3.6 },
          }}
          className={styles.trendingProductsSwiper}
        >
          {brands.map((brand, idx) => (
            <SwiperSlide key={idx}>
             <Link href={brand.link} style={{textDecoration:"none"}}>
              <div
                className={styles.brandCard}
                style={{ backgroundColor: brand.bgColor }}
              >
                <div className={styles["card-image"]}>
                  <img src={brand.img} alt={brand.title} />
                </div>
                <h6>{brand.title}</h6>
                <p>{brand.desc}</p>
                <button>Buy now</button>
              </div>
             </Link>
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

export default TrendingProducts;
