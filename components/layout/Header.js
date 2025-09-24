"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMenu3Line } from "react-icons/ri";

import styles from "../../styles/Header.module.scss";
import logo from "../../public/images/LogoNavneet.svg";
import BusinessDropdown from "./BusinessDropdown";
import InvestorDropdown from "./InvestorDropdown";
import MediaUpdatesDropdown from "./MediaUpdatesDropdown";

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mobile menu toggle
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

  // Helper to check if link is active
  const isActive = (href) => {
    return pathname === href;
  };

  return (
    <header
      className={`${styles["site-header"]} ${scrolled ? styles["scrolled"] : ""}`}
    >
      <Link href="/" className={styles["logo-image"]}>
        <Image src={logo} alt="Logo" />
      </Link>

      <div className={styles["menu-toggle"]} id="menu-toggle">
        {/* <svg width="24" height="10" viewBox="0 0 24 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M23.5293 1.59953C23.5293 1.09111 23.1171 0.678955 22.6087 0.678955H1.52369C1.01527 0.678955 0.603113 1.09111 0.603113 1.59953C0.603113 2.10795 1.01527 2.52011 1.52369 2.52011H22.6087C23.1171 2.52011 23.5293 2.10795 23.5293 1.59953Z"
            fill="#000"
          />
          <path
            d="M23.5303 8.96403C23.5303 8.45561 23.1181 8.04346 22.6097 8.04346H7.77726C7.26884 8.04346 6.85669 8.45561 6.85669 8.96403C6.85669 9.47246 7.26884 9.88461 7.77726 9.88461H22.6097C23.1181 9.88461 23.5303 9.47246 23.5303 8.96403Z"
            fill="#000"
          />
        </svg> */}
        <RiMenu3Line/>
      </div>

      <nav className={`${styles["nav-menu"]} ${isMenuOpen ? styles["active"] : ""}`} id="nav-menu">
        <div className={styles["close-menu"]} id="close-menu">&times;</div>

        <Link href="/" className={isActive("/") ? styles.activeLink : ""}>Home</Link>
        <Link href="/aboutus" className={isActive("/aboutus") ? styles.activeLink : ""}>Company</Link>

        <div
          className={styles.dropdownParent}
          onMouseEnter={() => setOpenDropdown("investor")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <Link
            href="/investor"
            className={`${styles.dropdownToggle} ${pathname.startsWith("/investor") ? styles.activeLink : ""}`}
          >
            Investors
          </Link>
          <div className={`${styles["dropdown-open"]} ${openDropdown === "investor" ? styles.show : ""}`}>
            <InvestorDropdown />
          </div>
        </div>

        <div
          className={styles.dropdownParent}
          onMouseEnter={() => setOpenDropdown("business")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <Link
            href="/business"
            className={`${styles.dropdownToggle} ${pathname.startsWith("/business") ? styles.activeLink : ""}`}
          >
            Our Businesses
          </Link>
          <div className={`${styles["dropdown-open"]} ${openDropdown === "business" ? styles.show : ""}`}>
            <BusinessDropdown />
          </div>
        </div>

        <Link href="/responsibility" className={isActive("/responsibility") ? styles.activeLink : ""}>Responsibility</Link>
        <Link href="https://navneet.com/ehs/" target="_blank">EHS</Link>

        <div
          className={styles.dropdownParent}
          onMouseEnter={() => setOpenDropdown("media&updates")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <Link
            href="/media-updates"
            className={`${styles.dropdownToggle} ${pathname.startsWith("/media-updates") ? styles.activeLink : ""}`}
          >
            Media & Updates
          </Link>
          <div className={`${styles["dropdown-open"]} ${openDropdown === "media&updates" ? styles.show : ""}`}>
            <MediaUpdatesDropdown />
          </div>
        </div>

        <Link href="https://www.navneetstore.com/" target="_blank">Shop Now</Link>
        <Link href="https://navneetedu.ai/" target="_blank">Navneet AI</Link>
        <Link href="/career" className={isActive("/career") ? styles.activeLink : ""}>Career</Link>
        <Link href="/contact" className={isActive("/contact") ? styles.activeLink : ""}>Contact</Link>
      </nav>
    </header>
  );
}
