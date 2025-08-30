"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../../styles/Header.module.scss";
import NewBannerDesktop1 from "../../../public/images/newbannerdesktop1.jpg";
import Banner1Desktop from "../../../public/images/Banner1Desktop.jpg";
import Banner2Desktop from "../../../public/images/newbannerdesktop2.jpg";
import Banner3Desktop from "../../../public/images/newbannerdesktop3.jpg";

import NewBannerMobile1 from "../../../public/images/newbannermobile1.jpg";
import Banner1Mobile from "../../../public/images/banner1mobile.jpg";
import Banner2Mobile from "../../../public/images/newbannermobile2.jpg";
import Banner3Mobile from "../../../public/images/newbannermobile3.jpg";

const HomeBanner = () => {
  const [index, setIndex] = useState(0);

  // Update slides (desktop or mobile) based on breakpoint
  const getVisibleSlides = () => {
    if (typeof window === "undefined") return [];

    return window.innerWidth > 820
      ? document.querySelectorAll(`.${styles["desktop-banner"]}`)
      : document.querySelectorAll(`.${styles["mobile-banner"]}`);
  };

  // Show slide
  const showSlide = (i) => {
    const slides = getVisibleSlides();
    slides.forEach((slide, idx) => {
      slide.style.left = (idx - i) * 100 + "%";
    });
  };

  // Handle scroll (header transparent → white)
  // useEffect(() => {
  //   const header = document.querySelector(".site-header");

  //   const onScroll = () => {
  //     if (window.scrollY > 50) {
  //       header.classList.add("scrolled");
  //     } else {
  //       header.classList.remove("scrolled");
  //     }
  //   };

  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show first slide on load + resize
  useEffect(() => {
    showSlide(index);

    const onResize = () => {
      setIndex(0);
      showSlide(0);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [index]);

  // STOCK PRICE TOGGLE
  useEffect(() => {
    const bseBtns = document.querySelectorAll(".bse");
    const nseBtns = document.querySelectorAll(".nse");
    const bsePrices = document.querySelectorAll(".bse-price");
    const nsePrices = document.querySelectorAll(".nse-price");

    const showBSE = () => {
      bseBtns.forEach((b) => b.classList.add("active"));
      nseBtns.forEach((n) => n.classList.remove("active"));
      bsePrices.forEach((p) => (p.style.display = "inline"));
      nsePrices.forEach((p) => (p.style.display = "none"));
    };

    const showNSE = () => {
      nseBtns.forEach((n) => n.classList.add("active"));
      bseBtns.forEach((b) => b.classList.remove("active"));
      bsePrices.forEach((p) => (p.style.display = "none"));
      nsePrices.forEach((p) => (p.style.display = "inline"));
    };

    bseBtns.forEach((btn) => btn.addEventListener("click", showBSE));
    nseBtns.forEach((btn) => btn.addEventListener("click", showNSE));

    return () => {
      bseBtns.forEach((btn) => btn.removeEventListener("click", showBSE));
      nseBtns.forEach((btn) => btn.removeEventListener("click", showNSE));
    };
  }, []);

  // MOBILE MENU
  useEffect(() => {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const closeMenu = document.getElementById("close-menu");

    const openMenu = () => navMenu.classList.add("active");
    const close = () => navMenu.classList.remove("active");

    menuToggle.addEventListener("click", openMenu);
    closeMenu.addEventListener("click", close);

    return () => {
      menuToggle.removeEventListener("click", openMenu);
      closeMenu.removeEventListener("click", close);
    };
  }, []);

  const handlePrev = () => {
    const slides = getVisibleSlides();
    const newIndex = (index - 1 + slides.length) % slides.length;
    setIndex(newIndex);
    showSlide(newIndex);
  };

  const handleNext = () => {
    const slides = getVisibleSlides();
    const newIndex = (index + 1) % slides.length;
    setIndex(newIndex);
    showSlide(newIndex);
  };
  useEffect(() => {
    let timer;

    // Check if current slide is the "special" banner
    const isSpecialSlide = index === 0; // both desktop & mobile first slide are index 0

    const delay = isSpecialSlide ? 10000 : 4000; // 10s for first, 4s for others

    timer = setTimeout(() => {
      const slides = getVisibleSlides();
      const newIndex = (index + 1) % slides.length;
      setIndex(newIndex);
      showSlide(newIndex);
    }, delay);

    return () => clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    const header = document.querySelector(`.${styles["site-header"]}`);
    console.log("header =>", header);

    const onScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const [stockType, setStockType] = useState("BSE");
  const [stockPrice, setStockPrice] = useState(null);

  useEffect(() => {
    const fetchStockPrice = async () => {
      try {
        const res = await fetch(`/api/stock-price?type=${stockType}`);
        const data = await res.json();
        setStockPrice(data?.price);
      } catch (error) {
        console.error("Error fetching stock price:", error);
      }
    };

    fetchStockPrice();
  }, [stockType]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const menuToggle = document.getElementById("menu-toggle");
    const closeMenu = document.getElementById("close-menu");

    const openMenu = () => setIsMenuOpen(true);
    const close = () => setIsMenuOpen(false);

    menuToggle.addEventListener("click", openMenu);
    closeMenu.addEventListener("click", close);

    return () => {
      menuToggle.removeEventListener("click", openMenu);
      closeMenu.removeEventListener("click", close);
    };
  }, []);
  return (
    <div>
      <section className={styles["banner-slider"]}>
        <div
          className={`${styles["slide"]} ${styles["desktop-banner"]} ${styles["active"]}`}
        >
          <Image src={NewBannerDesktop1} fill alt="Banner Desktop 1" />
        </div>
        <div className={`${styles["slide"]} ${styles["desktop-banner"]} `}>
          <Image src={Banner1Desktop} fill alt="Banner Desktop 1" />
        </div>
        <div className={`${styles["slide"]} ${styles["desktop-banner"]}`}>
          <Image src={Banner2Desktop} fill alt="Banner Desktop 2" />
        </div>
        <div className={`${styles["slide"]} ${styles["desktop-banner"]}`}>
          <Image src={Banner3Desktop} fill alt="Banner Desktop 3" />
        </div>
        <div className={`${styles["slide"]} ${styles["mobile-banner"]} `}>
          <Image src={NewBannerMobile1} fill alt="Banner Mobile 1" />
        </div>
        <div
          className={`${styles["slide"]} ${styles["mobile-banner"]} ${styles["active"]}`}
        >
          <Image src={Banner1Mobile} fill alt="Banner Mobile 1" />
        </div>
        <div className={`${styles["slide"]} ${styles["mobile-banner"]}`}>
          <Image src={Banner2Mobile} fill alt="Banner Mobile 2" />
        </div>
        <div className={`${styles["slide"]} ${styles["mobile-banner"]}`}>
          <Image src={Banner3Mobile} fill alt="Banner Mobile 3" />
        </div>

        <div
          className={`${styles["arrow"]} ${styles["prev"]}`}
          onClick={handlePrev}
        >
          &#10094;
        </div>
        <div
          className={`${styles["arrow"]} ${styles["next"]}`}
          onClick={handleNext}
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
    </div>
  );
};

export default HomeBanner;
