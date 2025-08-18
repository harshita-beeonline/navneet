
"use client";
import { Fragment, useRef, useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Header.module.scss";
import logo from "../../public/images/Logo-Navneet-1.png";

import Banner1Desktop from "../../public/images/Banner1Desktop.jpg";
import Banner2Desktop from "../../public/images/Banner2Desktop.jpg";
import Banner3Desktop from "../../public/images/banner3desktop.jpg";

import Banner1Mobile from "../../public/images/banner1mobile.jpg";
import Banner2Mobile from "../../public/images/Banner2Mobile.jpg";
import Banner3Mobile from "../../public/images/banner1mobile.jpg";

const Header = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // desktop version
  const desktopSlides = [
    { image: Banner1Desktop },
    { image: Banner2Desktop },
    { image: Banner3Desktop },
  ];
  // mobile version
  const mobileSlides = [
    { image: Banner1Mobile },
    { image: Banner2Mobile },
    { image: Banner3Mobile },
  ];

  // final slides shown in the UI
  const [slides, setSlides] = useState(desktopSlides);

  // detect screen width
  useEffect(() => {
    const setCorrectSlides = () => {
      if (window.innerWidth <= 768) {
        setSlides(mobileSlides);
      } else {
        setSlides(desktopSlides);
      }
    };

    // call at first render
    setCorrectSlides();

    // listen for resize changes
    window.addEventListener("resize", setCorrectSlides);
    return () => {
      window.removeEventListener("resize", setCorrectSlides);
    };
  }, []);

  // SCROLL LISTENER
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides]);

  const showPrev = () => {
    setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };
  const showNext = () => {
    setSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) =>
    (touchStartX.current = e.changedTouches[0].screenX);
  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    if (touchStartX.current - touchEndX.current > 50) {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }
    if (touchStartX.current - touchEndX.current < -50) {
      setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };
const [stockType, setStockType] = useState("BSE");
const [stockPrice, setStockPrice] = useState(null);

useEffect(() => {
  const fetchStockPrice = async () => {
    try {
      const res = await fetch(
        `/api/stock-price?type=${stockType}`
      );
      const data = await res.json();
      setStockPrice(data?.price);
    } catch (error) {
      console.error("Error fetching stock price:", error);
    }
  };

  fetchStockPrice();
}, [stockType]);


  return (
    <Fragment>
      {/* HEADER */}
      <header
        className={`${styles["site-header"]} ${
          scrolled ? styles["scrolled"] : ""
        }`}
      >
        <div className={styles["logo"]}>
          <Image src={logo} alt="Logo" />
        </div>
        <div
          className={styles["menu-toggle"]}
          onClick={() => setMenuOpen(true)}
        >
          &#9776;
        </div>
        <nav
          className={`${styles["nav-menu"]} ${
            menuOpen ? styles["active"] : ""
          }`}
        >
          <div
            className={styles["close-menu"]}
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </div>
          <a href="#">Home</a>
          <a href="#">Company</a>
          <a href="#">Investor</a>
          <a href="#">Our Businesses</a>
          <a href="#">Responsibility</a>
          <a href="#">EHS</a>
          <a href="#">Media & Updates</a>
          <a href="#">Shop Now</a>
          <a href="#">Navneet AI</a>
          <a href="#">Career</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* SLIDER */}
      <section
        className={styles["banner-slider"]}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`${styles["slide"]} ${
              idx === slideIndex ? styles["active"] : ""
            }`}
            style={{
              backgroundImage: `url(${slide.image.src})`,
              left: `${(idx - slideIndex) * 100}%`,
            }}
          />
        ))}

        <div
          className={`${styles["arrow"]} ${styles["prev"]}`}
          onClick={showPrev}
        >
          &#10094;
        </div>
        <div
          className={`${styles["arrow"]} ${styles["next"]}`}
          onClick={showNext}
        >
          &#10095;
        </div>

        <div className={`${styles["stock-box"]} ${styles["desktop-only"]}`}>
          <h3>Stock Price</h3>
          <div className={styles["toggle"]}>
            <button
              className={`${styles["bse"]} ${
                stockType === "BSE" ? styles["active"] : ""
              }`}
              onClick={() => setStockType("BSE")}
            >
              BSE
            </button>
            <button
              className={`${styles["nse"]} ${
                stockType === "NSE" ? styles["active"] : ""
              }`}
              onClick={() => setStockType("NSE")}
            >
              NSE
            </button>
          </div>
          <p>₹ {stockPrice ? stockPrice : "loading..."}</p>
        </div>
      </section>

      <div className={`${styles["stock-box"]} ${styles["mobile-only"]}`}>
        <h3>Stock Price</h3>
        <div className={styles["toggle"]}>
          <button
            className={`${styles["bse"]} ${
              stockType === "BSE" ? styles["active"] : ""
            }`}
            onClick={() => setStockType("BSE")}
          >
            BSE
          </button>
          <button
            className={`${styles["nse"]} ${
              stockType === "NSE" ? styles["active"] : ""
            }`}
            onClick={() => setStockType("NSE")}
          >
            NSE
          </button>
        </div>
          <p>₹ {stockPrice ? stockPrice : "loading..."}</p>
      </div>
    </Fragment>
  );
};

export default Header;
