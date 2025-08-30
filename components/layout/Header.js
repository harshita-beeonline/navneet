"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/Header.module.scss";
import logo from "../../public/images/LogoNavneet.png";
// import NewBannerDesktop1 from "../../public/images/newbannerdesktop1.jpg";
// import Banner1Desktop from "../../public/images/Banner1Desktop.jpg";
// import Banner2Desktop from "../../public/images/newbannerdesktop2.jpg";
// import Banner3Desktop from "../../public/images/newbannerdesktop3.jpg";

// import NewBannerMobile1 from "../../public/images/newbannermobile1.jpg";
// import Banner1Mobile from "../../public/images/banner1mobile.jpg";
// import Banner2Mobile from "../../public/images/newbannermobile2.jpg";
// import Banner3Mobile from "../../public/images/newbannermobile3.jpg";
export default function HomePage() {
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
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const slides = getVisibleSlides();
  //     const newIndex = (index + 1) % slides.length;
  //     setIndex(newIndex);
  //     showSlide(newIndex);
  //   }, 4000); // change slide every 4 seconds

  //   return () => clearInterval(interval);
  // }, [index]);
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
    <>
      <header
        className={`${styles["site-header"]} ${
          scrolled ? styles["scrolled"] : ""
        }`}
      >
        <div className={styles["logo-image"]}>
          <Image src={logo} alt="" />
        </div>

        <div className={styles["menu-toggle"]} id="menu-toggle">
          <svg
            width="24"
            height="10"
            viewBox="0 0 24 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.5293 1.59953C23.5293 1.09111 23.1171 0.678955 22.6087 0.678955H1.52369C1.01527 0.678955 0.603113 1.09111 0.603113 1.59953C0.603113 2.10795 1.01527 2.52011 1.52369 2.52011H22.6087C23.1171 2.52011 23.5293 2.10795 23.5293 1.59953Z"
              fill="#000"
            />
            <path
              d="M23.5303 8.96403C23.5303 8.45561 23.1181 8.04346 22.6097 8.04346H7.77726C7.26884 8.04346 6.85669 8.45561 6.85669 8.96403C6.85669 9.47246 7.26884 9.88461 7.77726 9.88461H22.6097C23.1181 9.88461 23.5303 9.47246 23.5303 8.96403Z"
              fill="#000"
            />
          </svg>
        </div>

        <nav
          className={`${styles["nav-menu"]} ${
            isMenuOpen ? styles["active"] : ""
          }`}
          id="nav-menu"
        >
          <div className={styles["close-menu"]} id="close-menu">
            &times;
          </div>

          <a href="/">Home</a>
          <a href="/aboutus">Company</a>
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
    </>
  );
}
