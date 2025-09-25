import React from "react";
import Image from "next/image";

import userIcon from "../../../public/asset/user-icon.png";
import mailIcon from "../../../public/asset/mail-icon.png";
import phoneIcon from "../../../public/asset/phone-icon.png";
import contactImg from "../../../public/asset/contact-image.png";

import styles from "../../../styles/Advertise/ContactSection.module.scss";

export default function ContactSection() {
  return (
    <section className={styles.pageWrapper}>
  
      <div className={styles.leftSide}>
      
        <div className={styles.contactHeader}>
          <h2>Contact</h2>
          <p>
            We’re present everywhere and now, you too can be! Advertise with us
            and make your presence felt.
          </p>
        </div>

     
        <div className={styles.contactBoxes}>
        
          <div className={styles.contactBox}>
            <h4>FOR STATIONERY PRODUCTS</h4>
            <div className={styles.contactRow}>
              <Image src={userIcon} alt="user" width={20} height={20} />
              <span>Mr. Amar Kulkarni</span>
            </div>
            <div className={styles.contactRow}>
              <Image src={mailIcon} alt="mail" width={20} height={20} />
              <span>stationery@navneet.com</span>
            </div>
            <div className={styles.contactRow}>
              <Image src={phoneIcon} alt="phone" width={20} height={20} />
              <span>022 6662 6300</span>
            </div>
          </div>
         
          <div className={styles.divider}></div>

        
          <div className={styles.contactBox}>
            <h4>FOR ACADEMIC PRODUCTS</h4>
            <div className={styles.contactRow}>
              <Image src={userIcon} alt="user" width={20} height={20} />
              <span>Mr. Yogesh Dalvi</span>
            </div>
            <div className={styles.contactRow}>
              <Image src={mailIcon} alt="mail" width={20} height={20} />
              <span>inquiry@navneet.com</span>
            </div>
            <div className={styles.contactRow}>
              <Image src={phoneIcon} alt="phone" width={20} height={20} />
              <span>022 6662 6300</span>
            </div>
          </div>
        </div>
      </div>

     
      <div className={styles.rightSide}>
        <Image src={contactImg} alt="Contact" width={459} height={249} />
      </div>
    </section>
  );
}
