"use client"

import Image from "next/image";
import { useState } from "react";
import styles from "../../../../styles/OurBusiness/NonCurricullum/ChildrenBooks.module.scss";

// Import images
import mobilebg from "../../../../public/images/our-business/children-book-bg.png";
import heroBg from "../../../../public/images/our-business/child-hero-bg.png";
import booksImg from "../../../../public/images/our-business/child-book.png";
import youtubeBg from "../../../../public/images/our-business/child-youtube-bg.png";
import youtubeIcon from "../../../../public/images/our-business/child-youtube-stroke.png";

const images = [booksImg, booksImg, booksImg];

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
            src={heroBg}
            alt="children books hero background"
            fill
            style={{ objectFit: "cover" }}
            priority
            className={styles.heroBg}
          />
          <div className={styles.heroContent}>
            <div className={styles.title}>
              <h1 className={styles.heading}>Children&apos;s</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile hero */}
      <div className={styles.heroMobile}>
        <div className={styles.heroWrapperMobile}>
          <Image
            src={mobilebg}
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
          <p className={styles.desc}>
            Children are naturally curious — curious to know more about
            everything, whether it&apos;s colors, objects, or language. To help
            satiate this curiosity, Navneet has a treasure trove of beautifully
            produced books for children.
          </p>
          <p className={styles.desc}>
            Children can pick from a wide spectrum, ranging from coloring,
            drawing, art, craft, and magic painting to science topics like
            planets and the human body. There is an exciting range of story
            books which will give children the joy of reading and enrich their
            minds with moral values while enlightening them about culture.
          </p>
          <p className={styles.desc}>
            Navneet plans to keep on adding new books to its popular, existing
            range. It is Navneet&apos;s firm belief that the citizens of
            tomorrow need to be nurtured well.
          </p>
          <h3 className={styles.textstrong}>LEARN TODAY. LEAD TOMORROW.</h3>
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
        <Image
          src={youtubeBg}
          alt="YouTube background"
          className={styles.bgImg}
        />
        <div className={styles.youtubeOverlay}>
          <Image src={youtubeIcon} alt="Play Button" />
        </div>
      </section>
    </div>
  );
}
