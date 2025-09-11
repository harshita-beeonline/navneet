import styles from "../../../../../styles/Investor/CompanyAnnouncements/Pillars.module.scss";
import pillar1 from "../../../../../public/images/InvestorsLandingPage/pillar1.png";
import pillar2 from "../../../../../public/images/InvestorsLandingPage/pillar2.png";
import pillar3 from "../../../../../public/images/InvestorsLandingPage/pillar3.png";
import pillar4 from "../../../../../public/images/InvestorsLandingPage/pillar4.png";
import pillar5 from "../../../../../public/images/InvestorsLandingPage/pillar5.png";

/* Pillars.jsx — content area (keep imports & top header as-is) */
export default function Pillars() {
  return (
    <section className={styles.pillarsSection}>
      <div className={styles.topBox}>Environment, Health & Safety Pillars</div>

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

      {/* ---------- CONTENT: grid-based alternating blocks ---------- */}
      <div className={styles["pillarsContent"]}>
        {/* Pillar 1 (image left, text right) */}
        <div className={styles["pillarBlock"]}>
          <div className={styles["pillarImage"]}>
            <img src={pillar1.src} alt="Pillar 1" />
          </div>
          <div className={styles["pillarText"]}>
            <span className={styles["pillarHeading"]}>Leading by Example</span>
            <ul>
              <li>
                EHS Culture is a Top to Bottom approach. Effective leaders
                integrate EHS into the business strategy and demonstrate it
                through their actions.
              </li>
              <li>
                When leadership leads by example, it sends powerful message that
                EHS is non-negotiable.
              </li>
              <li>
                Creating a culture of safety involves instilling the value of
                safety in the organization’s DNA.
              </li>
            </ul>

            <span className={styles["pillarHeading"]}>
              Communication and Transparency
            </span>
            <ul>
              <li>
                Communication with the stakeholders on EHS progress is the key
                to success.
              </li>
              <li>
                Nurturing of EHS responsibility in the mindset of employees is
                instrumental for the shift of company’s EHS culture.
              </li>
              <li>
                Transparent reporting of incidents and concerns encourages
                everyone to contribute to a safer environment.
              </li>
            </ul>
          </div>
        </div>

        {/* Pillar 2 (text left, image right) */}
        <div className={styles["pillarBlock"]}>
          <div className={styles["pillarText"]}>
            <span className={styles["pillarHeading"]}>
              Pillar 2: Fulfilling Compliance Requirements
            </span>
            <p>
              Compliance Requirements includes adherence to Local Laws,
              fulfilling Customer Requirements, Abiding by the Corporate
              requirements and fulfilling Stakeholders’ expectations. Timely
              identification and fulfilling the compliance requirements ensure
              long term survival in the domestic as well as international
              market.
            </p>
          </div>
          <div className={styles["pillarImage"]}>
            <img src={pillar2.src} alt="Pillar 2" />
          </div>
        </div>

        {/* Pillar 3 (image left, text right) */}
        <div className={styles["pillarBlock"]}>
          <div className={styles["pillarImage"]}>
            <img src={pillar3.src} alt="Pillar 3" />
          </div>
          <div className={styles["pillarText"]}>
            <span className={styles["pillarHeading"]}>
              Pillar 3: Employee Training and Empowerment
            </span>

            <div>
              <span className={styles["pillarSubheading"]}>
                Skill Development
              </span>
              <p>
                Empowering employees with necessary skills and knowledge are
                vital for ensuring safety at workplace. Proper training ensures
                that everyone is equipped to handle any workplace related unsafe
                condition and unsafe act.
              </p>
            </div>

            <div>
              <span className={styles["pillarSubheading"]}>
                Promoting Safety Responsibility
              </span>
              <p>
                Employees must understand that they share the responsibility for
                safety, where everyone feels accountable.
              </p>
            </div>

            <div>
              <span className={styles["pillarSubheading"]}>
                Empowering Employees
              </span>
              <p>
                Empowerment involves giving employees the authority to stop work
                if they believe that the activity is life threatening. This
                encourages proactiveness in addressing safety concerns.
              </p>
            </div>
          </div>
        </div>

        {/* Pillar 4 (text left, image right) */}
        <div className={styles["pillarBlock"]}>
          <div className={styles["pillarText"]}>
            <span className={styles["pillarHeading"]}>
              Pillar 4: Safety Control Measures
            </span>
            <div>
              <span className={styles["pillarSubheading"]}>
                Preventative Measures
              </span>
              <p>
                Preventative Measures, such as Hazard Identification and Risk
                Assessment, Safe Operating Procedures, Permit to Work, PPEs,
                Effluent Treatment, Responsible Waste disposal, Emission Control
                measures, etc. are implemented to prevent the accidents and to
                keep the Environment free from pollution.
              </p>
            </div>
          </div>
          <div className={styles["pillarImage"]}>
            <img src={pillar4.src} alt="Pillar 4" />
          </div>
        </div>

        {/* Pillar 5 (image left, text right) */}
        <div className={styles["pillarBlock"]}>
          <div className={styles["pillarImage"]}>
            <img src={pillar5.src} alt="Pillar 5" />
          </div>
          <div className={styles["pillarText"]}>
            <span className={styles["pillarHeading"]}>
              Pillar 5: Performance Monitoring and Continual Improvement
            </span>

            <div>
              <span className={styles["pillarSubheading"]}>
                Auditing and Evaluation
              </span>
              <p>
                Navneet goes through Customer Audits, Certification Audits,
                Financial Audits and many other internal and external
                inspections on time-to-time basis.
              </p>
            </div>

            <div>
              <span className={styles["pillarSubheading"]}>
                Learning from Accidents
              </span>
              <p>
                NEL understands that the accidents are the Grave to the company
                and must be taken seriously to Prevent happening in future by
                adapting various corrective and preventive actions.
              </p>
            </div>

            <div>
              <span className={styles["pillarSubheading"]}>
                Implementing Changes
              </span>
              <p>
                Adapting to changing circumstances and implementing necessary
                changes is vital for continuous improvement in Environment,
                Health and Safety culture.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ---------- end content ---------- */}
    </section>
  );
}
