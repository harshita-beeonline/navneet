"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "../../../../styles/OurBusiness/NonCurricullum/ChildrenBooks.module.scss";

// Import images
import mobilebg from "../../../../public/images/our-business/children-book-bg.png";
import heroBg from "../../../../public/images/our-business/child-hero-bg.png";
import children_books_slider_1 from "../../../../public/images/our-business/children-books-slider-1.jpg";
import children_books_slider_2 from "../../../../public/images/our-business/children-books-slider-2.jpg";
import children_books_slider_3 from "../../../../public/images/our-business/children-books-slider-3.jpg";
import youtubeIcon from "../../../../public/images/our-business/child-youtube-stroke.png";
import childbannerdesktop from "../../../../public/images/childbannerdesktop.jpg";
import childbannermobile from "../../../../public/images/childbannermobile.jpg";
const images = [
  children_books_slider_1,
  children_books_slider_2,
  children_books_slider_3,
];

export default function ChildrenBooksPage() {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <div className={styles.heroDesktop}>
        <div className={styles.heroWrapperDesktop}>
          <Image
            src={childbannerdesktop}
            alt="children books hero background"
            priority
            className={styles.heroDesktopImage}
            sizes="(max-width: 1024px) 100vw, 1200px"
          />
          <div className={styles.heroContent}>
            <div className={styles.title}>
              {/* <h1 className={styles.heading}>Children&apos;s</h1> */}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile hero */}
      <div className={styles.heroMobile}>
        <div className={styles.heroWrapperMobile}>
          <Image
            src={childbannermobile}
            alt="children books hero background mobile"
            fill
            style={{ objectFit: "cover" }}
            priority
            className={styles.heroBg}
          />
        </div>
      </div>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <div className={styles.textWrapper}>
          <h3 className={styles.textstrong}>
            Nurturing Curiosity. Inspiring Learning.
          </h3>
          <p className={styles.desc}>
            At Navneet, we believe every child’s curiosity is the spark that
            leads to lifelong learning. Our books are designed to turn that
            spark into wonder -transforming everyday discovery into joyful
            exploration.
          </p>
          <p className={styles.desc}>
            From art and craft to science and stories, every Navneet book blends
            creativity, knowledge, and values. Beautifully illustrated and
            thoughtfully developed, our collection inspires children to imagine,
            question, and grow. For over six decades, Navneet has been a trusted
            partner to parents, educators, and schools - committed to shaping
            confident, curious learners who are ready for tomorrow.
          </p>
          <h3 className={styles.textstrong} style={{ marginTop: "20px" }}>
            Navneet - Turning curiosity into lifelong learning.
          </h3>
        </div>

        {/* Carousel */}
        <div className={styles.sectionImage}>
          <div className={styles.carousel}>
            <button
              type="button"
              onClick={handlePrev}
              className={styles.prev}
              aria-label="Previous slide"
            >
              ‹
            </button>

            <div className={styles.slide}>
              {/* NOTE: no fill → fixed responsive image, not cropped */}
              <Image
                src={images[current]}
                alt="children books showcase"
                className={styles.carouselImage}
              />
            </div>

            <button
              type="button"
              onClick={handleNext}
              className={styles.next}
              aria-label="Next slide"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className={styles.youtubeSection}>
        <video
          src="/videos/Childrens-book-Navneet-YT-Video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className={styles.bgImg}
        />
      </section>
    </div>
  );
}
