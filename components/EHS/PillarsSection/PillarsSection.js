import styles from "../../../styles/EHS/PillarsSection.module.scss";



/* Pillars.jsx — content area (keep imports & top header as-is) */
export default function Pillars() {
  return (
    <section className={styles.pillarsSection}>
      <div className={styles.topBox}>Environment, Health & Safety Pillars</div>

      <div className={styles.connector}></div>

      <div className={styles.pillarsWrapper}>
        <div className={styles.pillar}>
          <h3>Pillar 1</h3>
          <p>Leadership &
            <br/> Commitment</p>
        </div>
        <div className={styles.pillar}>
          <h3>Pillar 2</h3>
          <p>Fulfilling <br/>Compliance</p>
        </div>
        <div className={styles.pillar}>
          <h3>Pillar 3</h3>
          <p>Training &<br/> Empowerment</p>
        </div>
        <div className={styles.pillar}>
          <h3>Pillar 4</h3>
          <p>Safety Control<br/> Measures</p>
        </div>
        <div className={styles.pillar}>
          <h3>Pillar 5</h3>
          <p>Performance<br/> Monitoring</p>
        </div>
      </div>

     
    </section>
  );
}
