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


const social = [
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 11.8307C24 5.29356 18.6274 -0.00585938 12 -0.00585938C5.37258 -0.00585938 0 5.29356 0 11.8307C0 17.7387 4.38825 22.6356 10.125 23.5236V15.2523H7.07812V11.8307H10.125V9.22299C10.125 6.25644 11.9165 4.61781 14.6576 4.61781C15.9705 4.61781 17.3438 4.849 17.3438 4.849V7.76191H15.8306C14.3399 7.76191 13.875 8.6743 13.875 9.61036V11.8307H17.2031L16.6711 15.2523H13.875V23.5236C19.6118 22.6356 24 17.7387 24 11.8307Z" fill="white"/>
</svg>, link: "#instagram.com" },
  { icon: <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 0.921875C18.623 0.921875 24 6.19347 24 12.6866C24 19.1797 18.623 24.4513 12 24.4513C5.37703 24.4513 0 19.1797 0 12.6866C0 6.19347 5.37703 0.921875 12 0.921875ZM9.88636 18.9438C15.1965 18.9438 18.1 14.63 18.1 10.8913C18.1 10.7681 18.1 10.6448 18.094 10.5274C18.6567 10.1283 19.1476 9.62941 19.5368 9.06011C19.0219 9.28313 18.4651 9.43575 17.8785 9.50616C18.4771 9.154 18.9321 8.6023 19.1476 7.93911C18.5909 8.2619 17.9743 8.49664 17.3157 8.62578C16.7889 8.07408 16.0406 7.73369 15.2085 7.73369C13.616 7.73369 12.3229 9.00142 12.3229 10.5626C12.3229 10.7857 12.3469 11.0028 12.4007 11.2082C10.0001 11.0909 7.87486 9.96397 6.45009 8.25014C6.20461 8.66687 6.06094 9.154 6.06094 9.6705C6.06094 10.6506 6.56981 11.5193 7.34808 12.024C6.87511 12.0123 6.43209 11.8832 6.04298 11.6719V11.7071C6.04298 13.0805 7.03673 14.2191 8.35978 14.4833C8.12034 14.5478 7.86291 14.583 7.59952 14.583C7.41389 14.583 7.23431 14.5654 7.05473 14.5302C7.41989 15.6571 8.4855 16.4729 9.74869 16.4964C8.76089 17.2535 7.5157 17.7055 6.1627 17.7055C5.92922 17.7055 5.70173 17.6937 5.47425 17.6644C6.73744 18.4743 8.25802 18.9438 9.88636 18.9438Z" fill="white"/>
</svg>, link: "#twitter.com" },
  { icon: <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 0.921875C18.623 0.921875 24 6.19347 24 12.6866C24 19.1797 18.623 24.4513 12 24.4513C5.37703 24.4513 0 19.1797 0 12.6866C0 6.19347 5.37703 0.921875 12 0.921875Z" fill="white"/>
<path d="M18.6555 8.62578C18.1426 8.02801 17.1956 7.78418 15.3871 7.78418H8.82214C6.97221 7.78418 6.00919 8.04374 5.4982 8.68015C5 9.30065 5 10.2149 5 11.4803V13.892C5 16.3435 5.59111 17.5881 8.82214 17.5881H15.3871C16.9555 17.5881 17.8245 17.3729 18.3868 16.8454C18.9634 16.3045 19.2094 15.4212 19.2094 13.892V11.4803C19.2094 10.1458 19.1708 9.22619 18.6555 8.62578ZM14.1225 13.0191L11.1413 14.5466C11.0747 14.5808 11.0018 14.5977 10.929 14.5977C10.8466 14.5977 10.7644 14.576 10.6915 14.5327C10.5544 14.4513 10.4707 14.3055 10.4707 14.1483V11.1032C10.4707 10.9462 10.5542 10.8006 10.691 10.7191C10.8279 10.6376 10.9982 10.632 11.1403 10.7044L14.1214 12.222C14.2731 12.2992 14.3683 12.4527 14.3686 12.6202C14.3687 12.7878 14.2739 12.9416 14.1225 13.0191Z" fill="#2F6DB2"/>
</svg>, link: "#youtube.com" },
{ icon: <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0.921875C18.6277 0.921875 24 6.18952 24 12.6866C24 19.1837 18.6277 24.4513 12 24.4513C5.37217 24.4513 0 19.1836 0 12.6866C0 6.1896 5.37225 0.921875 12 0.921875Z" fill="white"/>
<path d="M6.76203 17.087H9.00905V9.74434H6.76203V17.087ZM15.5161 9.49C14.4255 9.49 13.4498 9.88043 12.7576 10.7422V9.72019H10.5023V17.0871H12.7576V13.1033C12.7576 12.2613 13.5444 11.44 14.5298 11.44C15.5153 11.44 15.7584 12.2613 15.7584 13.0827V17.0864H18.0054V12.9187C18.0053 10.0238 16.6073 9.49 15.5161 9.49ZM7.87503 9.01056C8.49604 9.01056 9.00007 8.51642 9.00007 7.90758C9.00007 7.29875 8.49604 6.80469 7.87503 6.80469C7.25402 6.80469 6.75 7.29883 6.75 7.90766C6.75 8.5165 7.25402 9.01056 7.87503 9.01056Z" fill="#2F6DB2"/>
</svg>, link:"#linkedIn.com"},


];

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
  <li>
    <a
      href="https://navneet.com/about/"
      className={styles["navLink"]}
      target="_blank"
      rel="noopener noreferrer"
    >
      All About Navneet
    </a>
  </li>
  <li>
    <a
      href="https://navneet.com/board-of-directors"
      className={styles["navLink"]}
      target="_blank"
      rel="noopener noreferrer"
    >
      Leadership
    </a>
  </li>
  <li>
    <a
      href="https://www.navneet.com/pdfs/Corporate_Governance_Policies/Policy%20on%20Board%20Diversity.pdf"
      className={styles["navLink"]}
      target="_blank"
      rel="noopener noreferrer"
    >
      Diversity
    </a>
  </li>
  <li>
    <a
      href="https://navneet.com/careers/"
      className={styles["navLink"]}
      target="_blank"
      rel="noopener noreferrer"
    >
      Careers
    </a>
  </li>
  <li>
    <a
      href="https://navneet.com/press-release/"
      className={styles["navLink"]}
      target="_blank"
      rel="noopener noreferrer"
    >
      Press
    </a>
  </li>
  <li>
    <a
      href="https://navneet.com/investors/"
      className={styles["navLink"]}
      target="_blank"
      rel="noopener noreferrer"
    >
      Investor Relations
    </a>
  </li>
</ul>

            </div>

            {/* Our Brands Section */}
            <div className={styles["footer-col"]}>
              <h3 className={styles["footer-title"]}>Our Brands</h3>
            
                <div>
                <ul className={styles["footer-links"]}>
  <li>
    <a
      href="https://smartdigibook.com/"
      className={styles["navLink"]}
      target="_blank"
      rel="noopener noreferrer"
    >
      Navneet Digi Book
    </a>
  </li>
  <li>
    <a
      href="https://navneet.com/grafalco/"
      className={styles["navLink"]}
      target="_blank"
      rel="noopener noreferrer"
    >
      Grafalco
    </a>
  </li>
  <li>
    <a
      href="https://www.navneetstore.com/pages/youva"
      className={styles["navLink"]}
      target="_blank"
      rel="noopener noreferrer"
    >
      YouVa
    </a>
  </li>
  <li>
    <a
      href="https://navneet.com/vikas/"
      className={styles["navLink"]}
      target="_blank"
      rel="noopener noreferrer"
    >
      Vikas
    </a>
  </li>
  <li>
    <a
      href="https://navneet.com/navneet-toptech/"
      className={styles["navLink"]}
      target="_blank"
      rel="noopener noreferrer"
    >
      TopTech
    </a>
  </li>
  <li>
    <a
      href="https://navneetedu.ai/"
      className={styles["navLink"]}
      target="_blank"
      rel="noopener noreferrer"
    >
      Navneet AI
    </a>
  </li>
</ul>

                </div>
              
          
            </div>

  <div className={styles["footer-col"]}>
              <h3 className={styles["footer-title"]}>Contact Us</h3>
            
                <div>
                  <ul className={styles["footer-links"]}>
                    <li><Link href="#navneet" className={styles["navLink"]}><div className={styles["navLink-icon"]}><svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.24275 4.18982C2.47999 3.80471 3.78712 2.40396 4.71991 2.44625C4.99875 2.4689 5.24523 2.63427 5.4455 2.82608C5.90535 3.26631 7.22172 4.93135 7.29644 5.28173C7.47822 6.14106 6.43375 6.63641 6.7534 7.50254C7.56834 9.45755 8.97253 10.8341 10.9675 11.6323C11.8502 11.9457 12.3555 10.9217 13.2321 11.1007C13.5887 11.1739 15.2879 12.4644 15.737 12.9152C15.9318 13.1108 16.1013 13.3532 16.1244 13.6266C16.1591 14.5893 14.6417 15.8889 14.3459 16.055C13.648 16.5444 12.7376 16.536 11.6276 16.0301C8.5304 14.7668 3.58069 10.0058 2.26817 6.85464C1.76596 5.77256 1.73129 4.87396 2.24275 4.18982Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>+91 22 66626565</div></Link></li>
                    <li><Link href="#vikas" className={styles["navLink"]}><div className={styles["navLink-icon"]}><svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.9507 7.52539L9.75162 10.0506C9.14621 10.5159 8.29753 10.5159 7.69212 10.0506L4.46558 7.52539" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.1659 3.43555H12.2368C13.2564 3.44676 14.2268 3.86932 14.922 4.60481C15.6172 5.34031 15.9766 6.32454 15.9165 7.32828V12.1282C15.9766 13.1319 15.6172 14.1162 14.922 14.8517C14.2268 15.5872 13.2564 16.0097 12.2368 16.0209H5.1659C2.97597 16.0209 1.5 14.2743 1.5 12.1282V7.32828C1.5 5.1822 2.97597 3.43555 5.1659 3.43555Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
inquiry@navneet.com</div></Link></li>
                   
                  </ul>
                </div>
              
          <div className={styles["social-icons"]}>
            {social.map((icon, index) => (
              <div className={styles["social-icons-item"]} key={index}>
                {icon.icon}
</div>
            ))}
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
