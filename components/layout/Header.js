"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import styles from "../../styles/Header.module.scss";
import logo from "../../public/images/LogoNavneet.svg";
import BusinessDropdown from "./BusinessDropdown";
import InvestorDropdown from "./InvestorDropdown";
import MediaUpdatesDropdown from "./MediaUpdatesDropdown";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // desktop hover/focus dropdown key
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({}); // mobile accordion
  const pathname = usePathname();
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setMobileDropdownOpen({});
    setOpenDropdown(null);
  }, [pathname]);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href) => {
    if (!pathname) return false;

    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(href + "/");
  };

  const toggleMobileDropdown = (key) => {
    setMobileDropdownOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      role="banner"
    >
      <div className={styles.brandWrap}>
        <Link href="/" className={styles.logoLink} aria-label="Navneet Home">
          <Image src={logo} alt="Navneet" width={126} height={68} priority />
        </Link>
      </div>

      {/* Desktop navigation */}
      <nav className={styles.navDesktop} aria-label="Primary navigation">
        <Link href="/" className={isActive("/") ? styles.activeLink : ""}>
          Home
        </Link>

        <Link
          href="/aboutus"
          className={isActive("/aboutus") ? styles.activeLink : ""}
        >
          Company
        </Link>

        <div
          className={styles.dropdownParent}
          onMouseEnter={() => setOpenDropdown("investor")}
          onMouseLeave={() => setOpenDropdown(null)}
          onFocus={() => setOpenDropdown("investor")}
          onBlur={() => setOpenDropdown(null)}
        >
          <Link
            href="/investor"
            className={`${styles.dropdownToggle} ${
              isActive("/investor") ? styles.activeLink : ""
            }`}
            aria-haspopup="true"
            aria-expanded={openDropdown === "investor"}
          >
            Investors
          </Link>

          <div
            className={`${styles.dropdownOpen} ${
              openDropdown === "investor" ? styles.show : ""
            }`}
            role="menu"
            aria-hidden={openDropdown !== "investor"}
          >
            <InvestorDropdown />
          </div>
        </div>

        <div
          className={styles.dropdownParent}
          onMouseEnter={() => setOpenDropdown("business")}
          onMouseLeave={() => setOpenDropdown(null)}
          onFocus={() => setOpenDropdown("business")}
          onBlur={() => setOpenDropdown(null)}
        >
          <Link
            href="/"
            className={`${styles.dropdownToggle} ${
              isActive("/our-business") ? styles.activeLink : ""
            }`}
            aria-haspopup="true"
            aria-expanded={openDropdown === "business"}
          >
            Our Businesses
          </Link>

          <div
            className={`${styles.dropdownOpen} ${
              openDropdown === "business" ? styles.show : ""
            }`}
            role="menu"
            aria-hidden={openDropdown !== "business"}
          >
            <BusinessDropdown />
          </div>
        </div>

        <Link
          href="/responsibility"
          className={isActive("/responsibility") ? styles.activeLink : ""}
        >
          Responsibility
        </Link>

        <a
          href="https://navneet.com/ehs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          EHS
        </a>

        <div
          className={styles.dropdownParent}
          onMouseEnter={() => setOpenDropdown("media")}
          onMouseLeave={() => setOpenDropdown(null)}
          onFocus={() => setOpenDropdown("media")}
          onBlur={() => setOpenDropdown(null)}
        >
          <Link
            href="/"
            className={`${styles.dropdownToggle} ${
              isActive("/media-updates") ? styles.activeLink : ""
            }`}
            aria-haspopup="true"
            aria-expanded={openDropdown === "media"}
          >
            Media & Updates
          </Link>

          <div
            className={`${styles.dropdownOpen} ${
              openDropdown === "media" ? styles.show : ""
            }`}
            role="menu"
            aria-hidden={openDropdown !== "media"}
          >
            <MediaUpdatesDropdown />
          </div>
        </div>

        <a
          href="https://www.navneetstore.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop Now
        </a>
        <a
          href="https://navneetedu.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Navneet AI
        </a>
        <Link
          href="/career"
          className={isActive("/career") ? styles.activeLink : ""}
        >
          Career
        </Link>
        <Link
          href="/contact"
          className={isActive("/contact") ? styles.activeLink : ""}
        >
          Contact
        </Link>
      </nav>

      {/* Mobile menu button */}
      <button
        className={styles.menuToggle}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((s) => !s)}
      >
        <RiMenu3Line />
      </button>

      {/* Mobile drawer/menu */}
      <aside
        className={`${styles.navMenu} ${isMenuOpen ? styles.active : ""}`}
        role={isMenuOpen ? "dialog" : "region"}
        aria-modal={isMenuOpen}
        aria-label="Mobile menu"
      >
        <button
          className={styles.closeBtn}
          aria-label="Close menu"
          onClick={() => setIsMenuOpen(false)}
          ref={closeBtnRef}
        >
          ×
        </button>

        <div className={styles.mobileLinks}>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/aboutus" onClick={() => setIsMenuOpen(false)}>
            Company
          </Link>

          {/* Mobile accordion for Investors */}
          <div className={styles.mobileAccordion}>
            <button
              className={styles.accordionToggle}
              onClick={() => toggleMobileDropdown("investor")}
              aria-expanded={!!mobileDropdownOpen.investor}
            >
              Investors
              <span
                className={`${styles.chev} ${
                  mobileDropdownOpen["investor"] ? styles.open : ""
                }`}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>

            {mobileDropdownOpen["investor"] && (
              <div className={styles.accordionPanel}>
                <InvestorDropdown isMobile />
              </div>
            )}
          </div>

          {/* Mobile accordion for Businesses */}
          <div className={styles.mobileAccordion}>
            <button
              className={styles.accordionToggle}
              onClick={() => toggleMobileDropdown("business")}
              aria-expanded={!!mobileDropdownOpen.business}
            >
              Our Businesses
              <span
                className={`${styles.chev} ${
                  mobileDropdownOpen["business"] ? styles.open : ""
                }`}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>

            {mobileDropdownOpen["business"] && (
              <div className={styles.accordionPanel}>
                <BusinessDropdown isMobile />
              </div>
            )}
          </div>

          <Link href="/responsibility" onClick={() => setIsMenuOpen(false)}>
            Responsibility
          </Link>
          <a
            href="https://navneet.com/ehs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            EHS
          </a>

          <div className={styles.mobileAccordion}>
            <button
              className={styles.accordionToggle}
              onClick={() => toggleMobileDropdown("media")}
              aria-expanded={!!mobileDropdownOpen.media}
            >
              Media & Updates
              <span
                className={`${styles.chev} ${
                  mobileDropdownOpen["media"] ? styles.open : ""
                }`}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>

            {mobileDropdownOpen["media"] && (
              <div className={styles.accordionPanel}>
                <MediaUpdatesDropdown isMobile />
              </div>
            )}
          </div>

          <a
            href="https://www.navneetstore.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop Now
          </a>
          <a
            href="https://navneetedu.ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Navneet AI
          </a>
          <Link href="/career" onClick={() => setIsMenuOpen(false)}>
            Career
          </Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </aside>
    </header>
  );
}
