"use client";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import styles from "../../../styles/HomeBanner.module.scss";
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
  const [mounted, setMounted] = useState(false); // track client mount
  const [scrolled, setScrolled] = useState(false);
  const [stockType, setStockType] = useState("BSE");
  const [stockPrice, setStockPrice] = useState(null);

  // Mark component as mounted (client-side only)
  useEffect(() => {
    setMounted(true);
  }, []);

  const getVisibleSlides = useCallback(() => {
    if (typeof window === "undefined") return [];
    return window.innerWidth > 820
      ? document.querySelectorAll(`.${styles["desktop-banner"]}`)
      : document.querySelectorAll(`.${styles["mobile-banner"]}`);
  }, []);

  const showSlide = useCallback((i) => {
    const slides = getVisibleSlides();
    slides.forEach((slide, idx) => {
      slide.style.left = (idx - i) * 100 + "%";
    });
  }, [getVisibleSlides]);

  // Scroll effect for scrolled header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Slide show on load and resize
  useEffect(() => {
    showSlide(index);
    const onResize = () => {
      setIndex(0);
      showSlide(0);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [index, showSlide]);

  // Stock price toggle buttons
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

  // Slide navigation
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

  // Auto slide effect
  useEffect(() => {
    let timer;
    const isSpecialSlide = index === 0;
    const delay = isSpecialSlide ? 10000 : 4000;

    timer = setTimeout(() => {
      const slides = getVisibleSlides();
      const newIndex = (index + 1) % slides.length;
      setIndex(newIndex);
      showSlide(newIndex);
    }, delay);

    return () => clearTimeout(timer);
  }, [index, showSlide]);

  // Header scroll effect
  useEffect(() => {
    const header = document.querySelector(`.${styles["site-header"]}`);
    const onScroll = () => {
      if (window.scrollY > 50) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fetch stock price
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

  // ------------------- JSX -------------------
  if (!mounted) return null; // only hide rendering on server, hooks remain intact

  return (
    <div>
      <section className={styles["banner-slider"]}>
        <div className={`${styles["slide"]} ${styles["desktop-banner"]} ${styles["active"]}`}>
          <Image src={NewBannerDesktop1} fill alt="Banner Desktop 1" />
        </div>
        <div className={`${styles["slide"]} ${styles["desktop-banner"]}`}>
          <Image src={Banner1Desktop} fill alt="Banner Desktop 1" />
        </div>
        <div className={`${styles["slide"]} ${styles["desktop-banner"]}`}>
          <Image src={Banner2Desktop} fill alt="Banner Desktop 2" />
        </div>
        <div className={`${styles["slide"]} ${styles["desktop-banner"]}`}>
          <Image src={Banner3Desktop} fill alt="Banner Desktop 3" />
        </div>
        <div className={`${styles["slide"]} ${styles["mobile-banner"]}`}>
          <Image src={NewBannerMobile1} fill alt="Banner Mobile 1" />
        </div>
        <div className={`${styles["slide"]} ${styles["mobile-banner"]} ${styles["active"]}`}>
          <Image src={Banner1Mobile} fill alt="Banner Mobile 1" />
        </div>
        <div className={`${styles["slide"]} ${styles["mobile-banner"]}`}>
          <Image src={Banner2Mobile} fill alt="Banner Mobile 2" />
        </div>
        <div className={`${styles["slide"]} ${styles["mobile-banner"]}`}>
          <Image src={Banner3Mobile} fill alt="Banner Mobile 3" />
        </div>

        <div className={`${styles["arrow"]} ${styles["prev"]}`} onClick={handlePrev}>
          &#10094;
        </div>
        <div className={`${styles["arrow"]} ${styles["next"]}`} onClick={handleNext}>
          &#10095;
        </div>

        <div className={`${styles["stock-box"]} ${styles["desktop-only"]}`}>
          <h3>Stock Price</h3>
          <div className={styles["toggle"]}>
            <button
              className={`${styles["bse"]} ${stockType === "BSE" ? styles["active"] : ""}`}
              onClick={() => setStockType("BSE")}
            >
              BSE
            </button>
            <button
              className={`${styles["nse"]} ${stockType === "NSE" ? styles["active"] : ""}`}
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
            className={`${styles["bse"]} ${stockType === "BSE" ? styles["active"] : ""}`}
            onClick={() => setStockType("BSE")}
          >
            BSE
          </button>
          <button
            className={`${styles["nse"]} ${stockType === "NSE" ? styles["active"] : ""}`}
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
