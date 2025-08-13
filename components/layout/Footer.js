"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Footer.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";


// import Instagram from "/images/icons/social-icons/insta.svg";
// import Facebook from "/images/icons/social-icons/facebook.svg";
// import Twitter from "/images/icons/social-icons/twitter.svg";
// import Youtube from "/images/icons/social-icons/youtube.svg";
// import Linkedin from "/images/icons/social-icons/linkedin.svg";
// import Whatsapp from "/images/icons/social-icons/whatsapp.svg";


// const social = [
//   { icon: Facebook, link: "#facebook.com" },
//   { icon: Instagram, link: "#instagram.com" },
//   { icon: Twitter, link: "#twitter.com" },
// ];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubscribe = () => {
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className={styles["footer"]}>
     
        <div className={styles["footer-top"]}>
          <div className={styles["footer-grid"]}>
            {/* About Navneet Section */}
            <div className={styles["footer-col"]}>
              <h3 className={styles["footer-title"]}>About Navneet</h3>
              <ul className={styles["footer-links"]}>
                <li><Link href="#all-about" className={styles["navLink"]}>All About Navneet</Link></li>
                <li><Link href="#leadership" className={styles["navLink"]}>Leadership</Link></li>
                <li><Link href="#customers" className={styles["navLink"]}>Customers</Link></li>
                <li><Link href="#diversity" className={styles["navLink"]}>Diversity</Link></li>
                <li><Link href="#careers" className={styles["navLink"]}>Careers</Link></li>
                <li><Link href="#press" className={styles["navLink"]}>Press</Link></li>
                <li><Link href="#investor" className={styles["navLink"]}>Investor Relations</Link></li>
              </ul>
            </div>

            {/* Our Brands Section */}
            <div className={styles["footer-col"]}>
              <h3 className={styles["footer-title"]}>Our Brands</h3>
            
                <div>
                  <ul className={styles["footer-links"]}>
                    <li><Link href="#navneet" className={styles["navLink"]}>Navneet Digi Book</Link></li>
                       <li><Link href="#grafalco" className={styles["navLink"]}>Grafalco</Link></li>
                    <li><Link href="#youva" className={styles["navLink"]}>YouVa</Link></li>
                    <li><Link href="#vikas" className={styles["navLink"]}>Vikas</Link></li>
                    <li><Link href="#children-book" className={styles["navLink"]}>TopTech</Link></li>
                    <li><Link href="#general-book" className={styles["navLink"]}>Navneet AI</Link></li>
               
                 
                  </ul>
                </div>
              
          
            </div>

  <div className={styles["footer-col"]}>
              <h3 className={styles["footer-title"]}>Contact Us</h3>
            
                <div>
                  <ul className={styles["footer-links"]}>
                    <li><Link href="#navneet" className={styles["navLink"]}>+91 22 66626565</Link></li>
                    <li><Link href="#vikas" className={styles["navLink"]}>inquiry@navneet.com</Link></li>
                   
                  </ul>
                </div>
              
          
            </div>
            {/* Newsletter and Contact Section */}
            <div className={styles["footer-col"]}>
              <div className={styles["title-parent"]}>
                <h3 className={styles["footer-title"]}>Subscribe to our newsletter</h3>
                <div className={styles["newsletter-input"]}>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={handleEmailChange}
                    className={styles["email-input"]}
                  />
                  <button onClick={handleSubscribe} className={styles["subscribe-btn"]}>
                    <FaArrowRightLong />
                  </button>
                </div>
              </div>

             
            </div>
          </div>
     

        {/* Footer Bottom */}
        <div className={styles["footer-bottom"]}>
          <p>© 2025 Navneet. All rights reserved.</p>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;
