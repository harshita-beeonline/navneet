"use client";

import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

import styles from "../../../styles/Career/Contact.module.scss";
import { useRouter } from "next/navigation";

const socialMedia = [
  {
    id: 1,
    icon: <FaFacebook />,
    link: "https://www.facebook.com/Navneet.India/",
  },
  {
    id: 2,
    icon: <RiInstagramFill />,
    link: "https://www.instagram.com/navneet.education/?hl=en",
  },
  {
    id: 3,
    icon: <AiFillTwitterCircle />,
    link: "https://twitter.com/navneetpublish",
  },
  {
    id: 4,
    icon: <FaLinkedin />,
    link: "https://in.linkedin.com/company/navneet-education-ltd-",
  },
];

export default function Contact() {
  const router = useRouter();

  return (
    <section className={styles["contact-section"]}>
      <div className={styles.contact}>
        <h1 className={styles.heading}>Contact us</h1>
        <p className={styles.info}>
          Get in touch with Navneet team and know more about what we offer
        </p>
        <button onClick={() => router.push("/contact")} className={styles.btn}>
          View More
        </button>
      </div>

      {/* ✅ Vertical bar visible only on desktop */}
      <div className={styles["vertical-bar"]}></div>

      <div className={styles.contact}>
        <h1 className={styles.heading}>Connect with us</h1>
        <p className={styles.info}>
          We are always looking forward to hear from you.
        </p>
        <div className={styles["social-media-section"]}>
          {socialMedia.map((item) => (
            <button
              key={item.id}
              className={styles["social-btn"]}
              onClick={() => window.open(item.link, "_blank")} // 👈 external links open in new tab
            >
              {item.icon}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
