"use client"
import { Fragment, useRef, useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Header.module.scss";
import logo from "../../public/images/Logo-Navneet-1.png";
import banner from "../../public/images/banner5.jpg";

const Header = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [stockType, setStockType] = useState("BSE");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // <-- new state

  const slides = [
    {
      image: banner,
      title1: "Colour Blindness",
      title2:"Detection Book",
      text: "Because, some children see colours differently.",
    },
   {
      image: banner,
      title1: "Colour Blindness",
      title2:"Detection Book",
      text: "Because, some children see colours differently.",
    },
  ];

  // SCROLL LISTENER
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
useEffect(() => {
  const interval = setInterval(() => {
    setSlideIndex((prev) => (prev + 1) % slides.length);
  }, 3000);
  return () => clearInterval(interval);
}, [slides.length]);
  const showPrev = () => {
    setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setSlideIndex((prev) => (prev + 1) % slides.length);
  };
const touchStartX = useRef(0);
const touchEndX = useRef(0);

const handleTouchStart = (e) => {
  touchStartX.current = e.changedTouches[0].screenX;
};

const handleTouchEnd = (e) => {
  touchEndX.current = e.changedTouches[0].screenX;
  handleSwipe();
};

const handleSwipe = () => {
  const distance = touchStartX.current - touchEndX.current;
  const threshold = 50; // minimum swipe distance
  if (distance > threshold) {
    // swipe left
    setSlideIndex((prev) => (prev + 1) % slides.length);
  } else if (distance < -threshold) {
    // swipe right
    setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }
};

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
      <section className={styles["banner-slider"]}  onTouchStart={handleTouchStart}
  onTouchEnd={handleTouchEnd}>
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
          >
            <div className={styles["banner-content"]}>
              <div className={styles["heading-wrapper"]}>
                <div className={styles["heading-line"]}></div>
                <h1>{slide.title1}</h1>
                 <h2>{slide.title2}</h2>
              </div>
              <p>{slide.text}</p>
              <a href="#" className={styles["btn"]}>
                Explore Now
              </a>
            </div>
          </div>
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
          <div className={styles["price"]}>
            {stockType === "BSE" ? (
              <p className={styles["bse-price"]}>
                ₹ 142.25
                <br />
                <span>+0.20 (0.18%)</span>
              </p>
            ) : (
              <p className={styles["nse-price"]}>
                ₹ 142.25
                <br />
                <span>+0.20 (0.18%)</span>
              </p>
            )}
          </div>
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
        <div className={styles["price"]}>
          {stockType === "BSE" ? (
            <p className={styles["bse-price"]}>
              ₹ 142.25
              <br />
              <span>+0.20 (0.18%)</span>
            </p>
          ) : (
            <p className={styles["nse-price"]}>₹ 142.25</p>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
