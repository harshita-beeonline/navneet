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
