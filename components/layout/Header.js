"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import styles from "../../styles/Header.module.scss";
import logo from "../../public/images/LogoNavneet.svg";
import MenuIcon_Arrow from "../../public/images/menuicon-arrow.svg";
import BusinessDropdown from "./BusinessDropdown";
import InvestorDropdown from "./InvestorDropdown";
import MediaUpdatesDropdown from "./MediaUpdatesDropdown";
import ContactDropdown from "./ContactDropdown";
import { usePathname } from "next/navigation";
import headernavneet from "../../public/images/headernavneet.svg";
import MegaMenuInvestor from "./MegaMenuInvestor";
import MegaMenuBusiness from "./MegaMenuBusiness";
import MegaMenuContact from "./MegaMenuContact";
import MegaMenuMedia from "./MegaMenuMedia";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({});
  const pathname = usePathname();
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setMobileDropdownOpen({});
    setOpenDropdown(null);
  }, [pathname]);

  // prevent background scroll when menu open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
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
    if (href === "/") return pathname === "/";
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

        <div>
          <MegaMenuInvestor />
        </div>

        <div>
          <MegaMenuBusiness />
        </div>

        <Link
          href="/responsibility"
          className={isActive("/responsibility") ? styles.activeLink : ""}
        >
          Responsibility
        </Link>

        <Link href="/ehs" className={isActive("/ehs") ? styles.activeLink : ""}>
          EHS
        </Link>

        <div>
          <MegaMenuMedia/>
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
          Navneet <Image src={headernavneet} alt="svg" />
        </a>
        <Link
          href="/career"
          className={isActive("/career") ? styles.activeLink : ""}
        >
          Career
        </Link>

        {/* <div
          className={styles.dropdownParent}
          onMouseEnter={() => setOpenDropdown("contact")}
          onMouseLeave={() => setOpenDropdown(null)}
          onFocus={() => setOpenDropdown("contact")}
          onBlur={() => setOpenDropdown(null)}
        >
          <Link
            href="/"
            className={`${styles.dropdownToggle} ${
              isActive("/contact") ? styles.activeLink : ""
            }`}
            aria-haspopup="true"
            aria-expanded={openDropdown === "contact"}
          >
            <button>Contact</button>
          </Link>

          <div
            className={`${styles.dropdownOpen} ${
              openDropdown === "contact" ? styles.show : ""
            }`}
            role="menu"
            aria-hidden={openDropdown !== "contact"}
          >
            <ContactDropdown />
          </div>
        </div> */}
        <div>
          <MegaMenuContact/>
        </div>
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
                <Image
                  src={MenuIcon_Arrow}
                  alt="chevron"
                  width={10}
                  height={10}
                />
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
                <Image
                  src={MenuIcon_Arrow}
                  alt="chevron"
                  width={10}
                  height={10}
                />
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

          <Link href="/ehs" onClick={() => setIsMenuOpen(false)}>
            EHS
          </Link>

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
                <Image
                  src={MenuIcon_Arrow}
                  alt="chevron"
                  width={10}
                  height={10}
                />
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

          <div className={styles.mobileAccordion}>
            <button
              className={styles.accordionToggle}
              onClick={() => toggleMobileDropdown("contact")}
              aria-expanded={!!mobileDropdownOpen.contact}
            >
              Contact
              <span
                className={`${styles.chev} ${
                  mobileDropdownOpen["contact"] ? styles.open : ""
                }`}
              >
                <Image
                  src={MenuIcon_Arrow}
                  alt="chevron"
                  width={10}
                  height={10}
                />
              </span>
            </button>

            {mobileDropdownOpen["contact"] && (
              <div className={styles.accordionPanel}>
                <ContactDropdown isMobile />
              </div>
            )}
          </div>
        </div>
      </aside>
    </header>
  );
}
