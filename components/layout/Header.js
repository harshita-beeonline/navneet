"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/Header.module.scss";
import logo from "../../public/images/LogoNavneet.svg";
import Link from "next/link";
import BusinessDropdown from "./BusinessDropdown";
import InvestorDropdown from "./InvestorDropdown";
import MediaUpdatesDropdown from "./MediaUpdatesDropdown ";

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  // for header states
  // const [openInvestor, setOpenInvestor] = useState(false);
  // const [openBusiness, setOpenBusiness] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <>
      <header
        className={`${styles["site-header"]} ${
          scrolled ? styles["scrolled"] : ""
        }`}
      >
        <Link href="/" className={styles["logo-image"]}>
          <Image src={logo} alt="" />
        </Link>
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
          <Link href="/">Home</Link>
          <Link href="/aboutus">Company</Link>

          <div
            className={styles.dropdownParent}
            onMouseEnter={() => setOpenDropdown("investor")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link href="/investor" className={styles.dropdownToggle}>
              Investors
            </Link>
            <div
              className={`${styles["dropdown-open"]} ${
                openDropdown === "investor" ? styles.show : ""
              }`}
            >
              <InvestorDropdown />
            </div>
          </div>

          <div
            className={styles.dropdownParent}
            onMouseEnter={() => setOpenDropdown("business")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link href="/" className={styles.dropdownToggle}>
              Our Businesses
            </Link>
            <div
              className={`${styles["dropdown-open"]} ${
                openDropdown === "business" ? styles.show : ""
              }`}
            >
              <BusinessDropdown />
            </div>
          </div>

          <Link href="/responsibility">Responsibility</Link>
          <Link href="https://navneet.com/ehs/">EHS</Link>

          <div
            className={styles.dropdownParent}
            onMouseEnter={() => setOpenDropdown("media&upadtes")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link href="/" className={styles.dropdownToggle}>
              Media & Updates
            </Link>
            <div
              className={`${styles["dropdown-open"]} ${
                openDropdown === "media&upadtes" ? styles.show : ""
              }`}
            >
              <MediaUpdatesDropdown />
            </div>
          </div>
          
          <Link href="https://www.navneetstore.com/">Shop Now</Link>
          <Link href="https://navneetedu.ai/">Navneet AI</Link>
          <Link href="#">Career</Link>
          <Link href="#">Contact</Link>
        </nav>
      </header>
    </>
  );
}
