import Link from "next/link";
import styles from "../../../styles/Investor/Contact/Contact.module.scss";

export default function Contact() {
  return (
    <section className={styles["contact-section"]}>
      {/* ===== Breadcrumb ===== */}
      <div className={styles["breadcrumb"]}>
        <p className={styles["crumbStrong"]}>Investor</p>
        <span className={styles["dot"]}></span>
        <p className={styles["crumb"]}>Investor's Contact</p>
        <span className={styles["dot"]}></span>
        <p className={styles["crumbStrong"]}>Contact</p>
      </div>

      {/* ===== Page Title ===== */}
      <h1 className={styles["pageTitle"]}>Investors Contact</h1>

      {/* ==== Compliance officer ==== */}
      <div>
        <div>Compliance officer</div>
        <p>Company Secretary – Amit Buch</p>
        <p>
          Navneet Education Limited, Bhavani Shankar Road, Dadar (West), Mumbai
          – 400028
        </p>
        <p>Contact Number – 022 66626565</p>
        <p>Email id: secretarial@navneet.com</p>
      </div>

      {/* ==== Investor Relations/ Investor Grievances ==== */}
      <div>
        <div>Investor Relations/ Investor Grievances</div>
        <p>Investor Relations – Mr. Roomy Mistry</p>
        <p>
          Navneet Education Limited, Bhavani Shankar Road, Dadar (West), Mumbai
          – 400028
        </p>
        <p>Contact Number – 022 66626565</p>
        <p>Email id: investors@navneet.com</p>
      </div>

      {/* ==== Registrar & Share Transfer Agent ==== */}
      <div>
        <div>Registrar & Share Transfer Agent</div>
        <p>
          MUFG Intime India Private Limited (Formerly Link Intime India Private
          Limited)
        </p>
        <p>C-101, 247 Park,</p>
        <p>LBS Marg, Vikhroli (West),</p>
        <p>Tel. No. 810 811 6767</p>
        <p>Note – To raise an email query, following is the link</p>
        <p>https://web.in.mpms.mufg.com/Helpdesk/Service_Request.html</p>
        <p>
          Website -{" "}
          <a
            href="https://www.in.mpms.mufg.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.in.mpms.mufg.com
          </a>
        </p>
      </div>
    </section>
  );
}
