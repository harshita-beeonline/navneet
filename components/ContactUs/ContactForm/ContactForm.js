import React from "react";
import styles from "../../../styles/ContactUs/ContactForm.module.scss";

const ContactSection = () => {
  return (
    <>
    <section className={styles.contactSection}>
      <div className={styles.contactWrapper}>
        {/* LEFT COLUMN */}
        <div className={styles.contactLeft}>
          <h3 className={styles.contactLeftTitle}>
            If you would like to know more about us, please fill the form below.
          </h3>
          <p>
            We create educational content, mob apps and great digital
            experiences for students. Connect with us to know more.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className={styles.contactRight}>
          <form className={styles.contactForm}>
            <input type="text" placeholder="First Name*" required />
            <input type="text" placeholder="Last Name*" required />
            <input type="tel" placeholder="Mobile Number*" required />
            <input type="email" placeholder="Email Address*" required />
            <input type="text" placeholder="Department*" required />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
     <section className={styles.whiteBackgroundSection}>
     {/* This section provides white space after the GetInTouch section */}
   </section>
   </>
  );
};

export default ContactSection;
