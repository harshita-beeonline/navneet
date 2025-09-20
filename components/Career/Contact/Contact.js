import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

import styles from "../../../styles/Career/Contact.module.scss";

const socialMedia = [
  { id: 1, icon: <FaFacebook /> },
  { id: 2, icon: <RiInstagramFill /> },
  { id: 3, icon: <AiFillTwitterCircle /> },
  { id: 4, icon: <FaLinkedin /> },
];

export default function Contact() {
  return (
    <section className={styles["contact-section"]}>
      <div className={styles.contact}>
        <h1 className={styles.heading}>Contact us</h1>
        <p className={styles.info}>
          Get in touch with Navneet team and know more about what we offer
        </p>
        <button className={styles.btn}>View More</button>
      </div>

      {/* ✅ Vertical bar visible only on desktop */}
      <div className={styles["vertical-bar"]}></div>

      <div className={styles.contact}>
        <h1 className={styles.heading}>Connect with us</h1>
        <p className={styles.info}>
          We are always looking forward to hear from you.
        </p>
        <div className={styles["social-media-section"]}>
          {socialMedia.map((icon) => (
            <button key={icon.id} className={styles["social-btn"]}>
              {icon.icon}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
