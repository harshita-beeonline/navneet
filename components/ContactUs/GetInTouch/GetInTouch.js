import React from "react";
import styles from "../../../styles/ContactUs/GetInTouch.module.scss";
import phone from "../../../public/images/contact/mobile-icon.png";
import gmail from "../../../public/images/contact/gmail-icon.png";

const offices = [
  {
    name: "Mumbai Office",
    address: [
      "Navneet Bhavan,",
      "Bhavani Shankar Road,",
      "Dadar (West), Mumbai - 400028",
      "India",
    ],
    contacts: [
      { icon: phone, text: "(+91 22 66626565)" },
      { icon: gmail, text: "+91 22 66626470" },
    ],
    cin: "CIN : L22200MH1984PLC034055",
    map:  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.0489793734066!2d72.83743617483754!3d19.02066205351913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf2d2a89c3c7%3A0x8c891f7a94ef4a1c!2sNavneet%20Bhavan%2C%20Bhavani%20Shankar%20Rd%2C%20Dadar%20West%2C%20Mumbai%2C%20Maharashtra%20400028!5e0!3m2!1sen!2sin!4v1695100000000!5m2!1sen!2sin",

  },
  {
    name: "Ahmedabad Office",
    address: [
      "Navneet House,",
      "Gurukul Memnagar,",
      "Ahmedabad - 3800582.",
      "India",
    ],
    contacts: [
      { icon: phone, text: "(+91 79 27494444)" },
      { icon: gmail, text: "info@navneet.com" },
    ],
    cin: "CIN : L22200MH1984PLC034055",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.3908854959303!2d72.524736874837!3d23.03301797916539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f6b64c6c6f%3A0xa0176a63f9d07a5c!2sNavneet%20House%2C%20Gurukul%20Rd%2C%20Memnagar%2C%20Ahmedabad%2C%20Gujarat%20380052!5e0!3m2!1sen!2sin!4v1695100000000!5m2!1sen!2sin",

  },
];

export default function GetInTouch() {
  return (
    <>
      <section className={styles.getInTouchSection}>
        <h2 className={styles.title}>Get in Touch</h2>

        <div className={styles.cardsWrapper}>
          {offices.map((office, idx) => (
            <div className={styles.card} key={idx}>
              <div className={styles.cardContent}>
                {/* LEFT: Info */}
                <div className={styles.info}>
                  <h3>{office.name}</h3>
                  <p>
                    {office.address.map((line, i) => (
                      <React.Fragment key={i}>
                        {line} <br />
                      </React.Fragment>
                    ))}
                  </p>

                  {office.contacts.map((c, i) => (
                    <div className={styles.contactItem} key={i}>
                      <img src={c.icon.src} alt="icon" />
                      <span>{c.text}</span>
                    </div>
                  ))}

                  <div className={styles.contactItem}>
                    <span>{office.cin}</span>
                  </div>
                </div>

                {/* RIGHT: Map */}
                <div className={styles.mapWrapper}>
                  <iframe
                    src={office.map}
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* White Background Section */}
      <section className={styles.whiteBackgroundSection}></section>
    </>
  );
}