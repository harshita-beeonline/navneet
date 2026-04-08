import styles from "../../../styles/Investor/Contact/Contact.module.scss";

const complianceWhatsapp = "https://wa.me/912266626565";
const mufgHelpdeskUrl =
  "https://web.in.mpms.mufg.com/Helpdesk/Service_Request.html";

export default function Contact() {
  return (
    <section className={styles["contact-section"]}>
      <div className={styles["breadcrumb"]}>
        <p className={styles["crumbStrong"]}>Investor</p>
        <span className={styles["dot"]}></span>
        <p className={styles["crumb"]}>Investor&apos;s Contact</p>
        <span className={styles["dot"]}></span>
        <p className={styles["crumbStrong"]}>Contact</p>
      </div>

      <h1 className={styles["pageTitle"]}>Investors Contact</h1>

      <div>
        <div>Compliance officer</div>
        <p>Company Secretary - Amit Buch</p>
        <p>
          Navneet Education Limited, Bhavani Shankar Road, Dadar (West), Mumbai
          - 400028
        </p>
        <p>
          Contact Number -{" "}
          <a
            href={complianceWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            022 66626565
          </a>
        </p>
        <p>
          Email id: <a href="mailto:secretarial@navneet.com">secretarial@navneet.com</a>
        </p>
      </div>

      <div>
        <div>Investor Relations/ Investor Grievances</div>
        <p>Investor Relations - Mr. Roomy Mistry</p>
        <p>
          Navneet Education Limited, Bhavani Shankar Road, Dadar (West), Mumbai
          - 400028
        </p>
        <p>
          Contact Number -{" "}
          <a
            href={complianceWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            022 66626565
          </a>
        </p>
        <p>
          Email id: <a href="mailto:investors@navneet.com">investors@navneet.com</a>
        </p>
      </div>

      <div>
        <div>Registrar & Share Transfer Agent</div>
        <p>
          MUFG Intime India Private Limited (Formerly Link Intime India Private
          Limited)
        </p>
        <p>C-101, 247 Park,</p>
        <p>LBS Marg, Vikhroli (West),</p>
        <p>
          Tel. No. <a href="tel:+918108116767">810 811 6767</a>
        </p>
        <p>Note - To raise an email query, following is the link</p>
        <p>
          <a href={mufgHelpdeskUrl} target="_blank" rel="noopener noreferrer">
            {mufgHelpdeskUrl}
          </a>
        </p>
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
