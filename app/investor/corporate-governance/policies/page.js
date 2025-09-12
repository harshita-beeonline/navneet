import styles from "../../../../styles/Investor/CorporateGovernance/Policies.module.scss";

export default function Policies() {
  return (
    <section className={styles["policies-section"]}>
      {/* ===== Breadcrumb ===== */}
      <div className={styles["breadcrumb"]}>
        <p className={styles["crumbStrong"]}>Investor</p>
        <span className={styles["dot"]}></span>
        <p className={styles["crumb"]}>Corporate Governance</p>
        <span className={styles["dot"]}></span>
        <p className={styles["crumbStrong"]}>Policies</p>
      </div>

      {/* ===== Page Title ===== */}
      <h1 className={styles["pageTitle"]}>Corporate Governance Policies</h1>

      {/* ===== Content ===== */}
      <div className={styles["contentWrapper"]}>
        <div className={styles["section"]}>
          <ul>
            <li>Human Rights Policy</li>
            <li>Familiarization programme imparted to Independent Directors</li>
            <li>Nomination and Remuneration Policy</li>
            <li>Policy for determining materiality of event</li>
            <li>Fair Disclosure Code</li>
            <li>CSR policy</li>
            <li>Dividend Distribution Policy</li>
            <li>Whistle Blower Policy</li>
            <li>Policy for determining Material Subsidiaries</li>
            <li>Related Party Transaction Policy</li>
            <li>Terms containing appointment of independent directors</li>
            <li>
              Name and contact details of Key Managerial Personnel under
              Regulation 30(5) of SEBI
            </li>
            <li>Archive Management Policy</li>
            <li>Familiarization Programme for Independent Directors</li>
            <li>Policy on Board Diversity</li>
            <li>Risk Management Policy</li>
            <li>
              Criteria of making payments to Non – Executive Directors
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
