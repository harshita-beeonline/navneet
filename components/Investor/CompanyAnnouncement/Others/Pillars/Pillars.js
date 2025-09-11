import styles from "../../../../../styles/Investor/CompanyAnnouncements/Pillars.module.scss";

export default function Pillars() {
  return (
    <section className={styles.pillarsSection}>
      <div className={styles.topBox}>
        Environment, Health & Safety Pillars
      </div>

      <div className={styles.connector}></div>

      <div className={styles.pillarsWrapper}>
        <div className={styles.pillar}>
          <h3>Pillar 1</h3>
          <p>Leadership & Commitment</p>
        </div>
        <div className={styles.pillar}>
          <h3>Pillar 2</h3>
          <p>Fulfilling Compliance</p>
        </div>
        <div className={styles.pillar}>
          <h3>Pillar 3</h3>
          <p>Training & Empowerment</p>
        </div>
        <div className={styles.pillar}>
          <h3>Pillar 4</h3>
          <p>Safety Control Measures</p>
        </div>
        <div className={styles.pillar}>
          <h3>Pillar 5</h3>
          <p>Performance Monitoring</p>
        </div>
      </div>
    </section>
  );
}
