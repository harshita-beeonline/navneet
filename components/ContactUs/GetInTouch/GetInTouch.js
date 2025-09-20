import React from "react";
import styles from "../../../styles/ContactUs/GetInTouch.module.scss";
import phone from "../../../public/images/contact/mobile-icon.png";
import gmail from "../../../public/images/contact/gmail-icon.png";

export default function GetInTouch() {
  return (
    <>
      <section className={styles.getInTouchSection}>
        <div className={styles.cardsWrapper}>
          <h2 className={styles.title}>Get in Touch</h2>
        </div>

        <div className={styles.cardsWrapper}>
          {/* Mumbai Office */}
          <div className={styles.card}>
            <div className={styles.cardContent}>
              {/* Left: Office Info */}
              <div className={styles.info}>
                <h3>Mumbai Office</h3>
                <p>
                  Navneet Bhavan, <br />
                  Bhavani Shankar Road, <br />
                  Dadar (West), Mumbai - 400028 <br />
                  India
                </p>
                <div className={styles.contactItem}>
                  <img src="/images/contact/mobile-icon.png" alt="Phone" />
                  <span>(+91 22 66626565)</span>
                </div>
                <div className={styles.contactItem}>
                  <img src="/images/contact/gmail-icon.png" alt="Email" />
                  <span>+91 22 66626470</span>
                </div>
                <div className={styles.contactItem}>
                  <span>CIN : L22200MH1984PLC034055</span>
                </div>
              </div>

              {/* Right: Google Map */}
              <div className={styles.mapWrapper}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11610107947!2d72.74109979888467!3d19.082197839710263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63dfd3bdc9b%3A0xdea0b8b0f5f7c50!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1695100000000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Ahmedabad Office */}
          <div className={styles.card}>
            <div className={styles.cardContent}>
              {/* Left: Office Info */}
              <div className={styles.info}>
                <h3>Ahmedabad Office</h3>
                <p>
                Navneet House,<br/>
Gurukul Memnagar,<br/>
Ahmedabad - 3800582. <br/>
India
<br />
          
                </p>
                <div className={styles.contactItem}>
                  <img src="/images/contact/mobile-icon.png" alt="Phone" />
                  <span>(+91 79 27494444)</span>
                </div>
                <div className={styles.contactItem}>
                  <img src="/images/contact/gmail-icon.png" alt="Email" />
                  <span>info@navneet.com</span>
                </div>
                <div className={styles.contactItem}>
                  <span>CIN : L22200MH1984PLC034055</span>
                </div>
              </div>

              {/* Right: Google Map */}
              <div className={styles.mapWrapper}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.385988810281!2d72.52932421533836!3d23.033013184947454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f6d72e1b7d%3A0x9b1cf0f0d4a1d08!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1695100000000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White Background Section */}
      <section className={styles.whiteBackgroundSection}>
        {/* This section provides white space after the GetInTouch section */}
      </section>
    </>
  );
}
