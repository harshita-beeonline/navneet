"use client";
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
  {
    icon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.9532 10.111V8.22525V7.94336L16.6657 7.94432L14.7422 7.951L14.7495 10.1182L16.9532 10.111Z"
          fill="white"
        />
        <path
          d="M11.9403 15.1168C13.2064 15.1168 14.2371 14.1073 14.2371 12.866C14.2371 12.3763 14.0744 11.9224 13.8019 11.5531C13.3853 10.9864 12.7064 10.6143 11.9403 10.6143C11.1743 10.6143 10.4964 10.9864 10.0787 11.5531C9.80632 11.9224 9.64453 12.3763 9.64453 12.866C9.64453 14.1073 10.6743 15.1168 11.9403 15.1168Z"
          fill="white"
        />
        <path
          d="M12.0005 0.921875C5.37281 0.921875 0 6.18838 0 12.6861C0 19.1838 5.37281 24.4513 12.0005 24.4513C18.6272 24.4513 24 19.1838 24 12.6861C24 6.18838 18.6267 0.921875 12.0005 0.921875ZM18.4639 11.5528V16.7897C18.4639 18.1523 17.3324 19.2607 15.9425 19.2607H7.93811C6.54776 19.2607 5.41715 18.1523 5.41715 16.7897V11.5528V8.94227C5.41715 7.57918 6.54776 6.47074 7.93811 6.47074H15.9425C17.3324 6.47074 18.4639 7.57918 18.4639 8.94227V11.5528Z"
          fill="white"
        />
        <path
          d="M15.5067 12.8657C15.5067 14.7935 13.9068 16.363 11.9395 16.363C9.9721 16.363 8.37317 14.7935 8.37317 12.8657C8.37317 12.4008 8.46723 11.9588 8.63487 11.5527H6.6875V16.7896C6.6875 17.4652 7.24793 18.0146 7.93701 18.0146H15.9414C16.6305 18.0146 17.1909 17.4652 17.1909 16.7896V11.5527H15.2426C15.4117 11.9588 15.5067 12.4013 15.5067 12.8657Z"
          fill="white"
        />
      </svg>
    ),
    link: "https://www.instagram.com/#",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 11.8307C24 5.29356 18.6274 -0.00585938 12 -0.00585938C5.37258 -0.00585938 0 5.29356 0 11.8307C0 17.7387 4.38825 22.6356 10.125 23.5236V15.2523H7.07812V11.8307H10.125V9.22299C10.125 6.25644 11.9165 4.61781 14.6576 4.61781C15.9705 4.61781 17.3438 4.849 17.3438 4.849V7.76191H15.8306C14.3399 7.76191 13.875 8.6743 13.875 9.61036V11.8307H17.2031L16.6711 15.2523H13.875V23.5236C19.6118 22.6356 24 17.7387 24 11.8307Z"
          fill="white"
        />
      </svg>
    ),
    link: "https://www.facebook.com/Navneet.India/",
  },
  {
    icon: (
   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="23.53" rx="11.765" fill="white"/>
<path d="M13.1759 10.695L10.1847 6.50125C10.15 6.45253 10.1041 6.41281 10.051 6.38541C9.99781 6.35801 9.93886 6.34373 9.87905 6.34375H8.3003C8.23149 6.34384 8.16403 6.36286 8.1053 6.39873C8.04658 6.4346 7.99886 6.48594 7.96736 6.54712C7.93587 6.6083 7.92182 6.67697 7.92674 6.7456C7.93167 6.81424 7.95539 6.88019 7.9953 6.93625L11.8247 12.305M13.1759 10.695L17.0053 16.0638C17.0452 16.1198 17.0689 16.1858 17.0739 16.2544C17.0788 16.323 17.0647 16.3917 17.0332 16.4529C17.0017 16.5141 16.954 16.5654 16.8953 16.6013C16.8366 16.6371 16.7691 16.6562 16.7003 16.6562H15.1216C15.0617 16.6563 15.0028 16.642 14.9496 16.6146C14.8965 16.5872 14.8506 16.5475 14.8159 16.4987L11.8247 12.305M13.1759 10.695L16.8272 6.34375M11.8247 12.305L8.17343 16.6562" stroke="#2F6DB2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    ),
    link: "#https://x.com/navneet_edu",
  },
  {
    icon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 0.921875C18.623 0.921875 24 6.19347 24 12.6866C24 19.1797 18.623 24.4513 12 24.4513C5.37703 24.4513 0 19.1797 0 12.6866C0 6.19347 5.37703 0.921875 12 0.921875Z"
          fill="white"
        />
        <path
          d="M18.6555 8.62578C18.1426 8.02801 17.1956 7.78418 15.3871 7.78418H8.82214C6.97221 7.78418 6.00919 8.04374 5.4982 8.68015C5 9.30065 5 10.2149 5 11.4803V13.892C5 16.3435 5.59111 17.5881 8.82214 17.5881H15.3871C16.9555 17.5881 17.8245 17.3729 18.3868 16.8454C18.9634 16.3045 19.2094 15.4212 19.2094 13.892V11.4803C19.2094 10.1458 19.1708 9.22619 18.6555 8.62578ZM14.1225 13.0191L11.1413 14.5466C11.0747 14.5808 11.0018 14.5977 10.929 14.5977C10.8466 14.5977 10.7644 14.576 10.6915 14.5327C10.5544 14.4513 10.4707 14.3055 10.4707 14.1483V11.1032C10.4707 10.9462 10.5542 10.8006 10.691 10.7191C10.8279 10.6376 10.9982 10.632 11.1403 10.7044L14.1214 12.222C14.2731 12.2992 14.3683 12.4527 14.3686 12.6202C14.3687 12.7878 14.2739 12.9416 14.1225 13.0191Z"
          fill="#2F6DB2"
        />
      </svg>
    ),
    link: "https://www.youtube.com/@navneetindia?feature=shared",
  },
  {
    icon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 0.921875C18.6277 0.921875 24 6.18952 24 12.6866C24 19.1837 18.6277 24.4513 12 24.4513C5.37217 24.4513 0 19.1836 0 12.6866C0 6.1896 5.37225 0.921875 12 0.921875Z"
          fill="white"
        />
        <path
          d="M6.76203 17.087H9.00905V9.74434H6.76203V17.087ZM15.5161 9.49C14.4255 9.49 13.4498 9.88043 12.7576 10.7422V9.72019H10.5023V17.0871H12.7576V13.1033C12.7576 12.2613 13.5444 11.44 14.5298 11.44C15.5153 11.44 15.7584 12.2613 15.7584 13.0827V17.0864H18.0054V12.9187C18.0053 10.0238 16.6073 9.49 15.5161 9.49ZM7.87503 9.01056C8.49604 9.01056 9.00007 8.51642 9.00007 7.90758C9.00007 7.29875 8.49604 6.80469 7.87503 6.80469C7.25402 6.80469 6.75 7.29883 6.75 7.90766C6.75 8.5165 7.25402 9.01056 7.87503 9.01056Z"
          fill="#2F6DB2"
        />
      </svg>
    ),
    link: "https://www.linkedin.com/company/navneet-education-ltd-/",
  },
  {
    icon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 0.921875C18.6277 0.921875 24 6.18952 24 12.6866C24 19.1837 18.6277 24.4513 12 24.4513C5.37217 24.4513 0 19.1836 0 12.6866C0 6.1896 5.37225 0.921875 12 0.921875Z"
          fill="white"
        />
        <g clip-path="url(#clip0_270_3732)">
          <path
            d="M5 19.5497L6.204 16.0088C5.59307 15.0014 5.24138 13.8257 5.24138 12.5686C5.24138 8.84383 8.32138 5.82422 12.1207 5.82422C15.92 5.82422 19 8.84383 19 12.5686C19 16.2935 15.92 19.3131 12.1207 19.3131C10.9647 19.3131 9.8761 19.0322 8.92 18.5385L5 19.5497Z"
            fill="#2F6DB2"
          />
          <path
            d="M16.5115 14.8129C16.1939 14.2244 15.0225 13.5513 15.0225 13.5513C14.7574 13.4032 14.4376 13.3866 14.2865 13.6507C14.2865 13.6507 13.9058 14.0982 13.8091 14.1626C13.3668 14.4563 12.9572 14.4449 12.5437 14.0396L11.5828 13.0975L10.6219 12.1554C10.2084 11.75 10.1968 11.3484 10.4964 10.9149C10.562 10.82 11.0185 10.4468 11.0185 10.4468C11.2879 10.2984 11.271 9.98509 11.1199 9.72525C11.1199 9.72525 10.4334 8.57681 9.83306 8.26538C9.57768 8.13286 9.26413 8.17924 9.05992 8.37944L8.63557 8.79547C7.2894 10.1152 7.95223 11.6052 9.2984 12.9249L10.5287 14.1311L11.759 15.3373C13.1052 16.6571 14.6249 17.3069 15.9711 15.9872L16.3954 15.5711C16.5996 15.3704 16.6467 15.063 16.5115 14.8129Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_270_3732">
            <rect
              width="14"
              height="13.7255"
              fill="white"
              transform="translate(5 5.82422)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    link: "/",
  },
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
                <li>
                  <Link href="#navneet" className={styles["navLink"]}>
                    <div className={styles["navLink-icon"]}>
                      <svg
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2.24275 4.18982C2.47999 3.80471 3.78712 2.40396 4.71991 2.44625C4.99875 2.4689 5.24523 2.63427 5.4455 2.82608C5.90535 3.26631 7.22172 4.93135 7.29644 5.28173C7.47822 6.14106 6.43375 6.63641 6.7534 7.50254C7.56834 9.45755 8.97253 10.8341 10.9675 11.6323C11.8502 11.9457 12.3555 10.9217 13.2321 11.1007C13.5887 11.1739 15.2879 12.4644 15.737 12.9152C15.9318 13.1108 16.1013 13.3532 16.1244 13.6266C16.1591 14.5893 14.6417 15.8889 14.3459 16.055C13.648 16.5444 12.7376 16.536 11.6276 16.0301C8.5304 14.7668 3.58069 10.0058 2.26817 6.85464C1.76596 5.77256 1.73129 4.87396 2.24275 4.18982Z"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      +91 22 66626565
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#vikas" className={styles["navLink"]}>
                    <div className={styles["navLink-icon"]}>
                      <svg
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.9507 7.52539L9.75162 10.0506C9.14621 10.5159 8.29753 10.5159 7.69212 10.0506L4.46558 7.52539"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.1659 3.43555H12.2368C13.2564 3.44676 14.2268 3.86932 14.922 4.60481C15.6172 5.34031 15.9766 6.32454 15.9165 7.32828V12.1282C15.9766 13.1319 15.6172 14.1162 14.922 14.8517C14.2268 15.5872 13.2564 16.0097 12.2368 16.0209H5.1659C2.97597 16.0209 1.5 14.2743 1.5 12.1282V7.32828C1.5 5.1822 2.97597 3.43555 5.1659 3.43555Z"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      inquiry@navneet.com
                    </div>
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles["social-icons"]}>
              {social.map((icon, index) => (
                <div className={styles["social-icons-item"]} key={index}>
                 <Link href={icon.link}> {icon.icon}</Link>
                </div>
              ))}
            </div>
          </div>
          {/* Newsletter and Contact Section */}
          <div className={styles["footer-col"]}>
            <div className={styles["title-parent"]}>
              <h3 className={styles["footer-title"]}>
                Subscribe to our newsletter
              </h3>
              <div className={styles["newsletter-input"]}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={handleEmailChange}
                  className={styles["email-input"]}
                />
                <button
                  onClick={handleSubscribe}
                  className={styles["subscribe-btn"]}
                >
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
