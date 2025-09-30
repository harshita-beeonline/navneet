import styles from "../../../styles/EHS/Pillars.module.scss";
import pillar1 from "../../../public/images/ehs/pillar1.png";
import pillar2 from "../../../public/images/InvestorsLandingPage/pillar2.png";
import pillar3 from "../../../public/images/InvestorsLandingPage/pillar3.png";
import pillar4 from "../../../public/images/ehs/pillar4.png";
import pillar5 from "../../../public/images/ehs/pillar5.png";

const pillarsData = [
  {
    title: "Pillar 1: Leadership and Commitment",
    img: pillar1,
    text: (
      <>
        <h3>Leading by Example</h3>
        <ul>
          <li>
            EHS Culture is a Top to Bottom approach. Effective leaders integrate
            EHS into the business strategy and demonstrate it through their
            actions.
          </li>
          <li>
            When leadership leads by example, it sends a powerful message that
            EHS is non-negotiable.
          </li>
          <li>
            Creating a culture of safety involves instilling the value of safety
            in the organization&#39;s DNA.
          </li>
        </ul>
        <h3>NEL Leadership is Committed to </h3>
        <ul>
          <li>Communicating with stakeholders on EHS Issues and progress</li>
          <li>Nurturing EHS responsibility in the mindset of employees</li>
          <li>
            Transparent reporting of incidents and timely improvement in the
            system with respect to corrective and preventive actions.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Pillar 2: Fulfilling Compliance Requirements",
    img: pillar2,
    text: (
      <>
        <p>
          Compliance Requirements includes adherence to Local Laws, fulfilling
          Customer Requirements, Abiding by the Corporate requirements and
          fulfilling Stakeholders’ expectations.
        </p>
        <p>
          Timely identification and fulfilling the compliance requirements
          ensure long term survival in the domestic as well as international
          market.
        </p>
      </>
    ),
    reverse: true,
  },
  {
    title: "Pillar 3: Employee Training and Empowerment",
    img: pillar3,
    text: (
      <>
        <h3>Skill Development</h3>
        <p>
          Empowering employees with necessary skills and knowledge are vital for
          ensuring safety at workplace. Proper training ensures that everyone is
          equipped to handle any workplace related unsafe condition and unsafe
          act.
        </p>
        <h3>Promoting Safety Responsibility</h3>
        <p>
          Employees must understand that they share the responsibility for
          safety, where everyone feels accountable.
        </p>
        <h3>Empowering Employees</h3>
        <p>
          Empowerment involves giving employees the authority to stop work if
          they believe that the activity is life threatening. This encourages
          proactiveness in addressing safety concerns.
        </p>
      </>
    ),
  },
  {
    title: "Pillar 4: Safety Control Measures",
    img: pillar4,
    text: (
      <>
        <h3>Preventative Measures</h3>
        <p>
          Preventative Measures, such as  Hazard Identification and Risk
          Assessment, Safe Operating Procedures, Permit to Work, PPEs, Effluent
          Treatment, Responsible Waste disposal, Emission Control measures, etc.
          are implemented to prevent the accidents and to keep the Environment
          free from pollution.
        </p>
      </>
    ),
    reverse: true,
  },
  {
    title: "Pillar 5:  Performance Monitoring and Continual Improvement",
    img: pillar5,
    text: (
      <>
        <h3>Auditing and Evaluation</h3>
        <p>
          Navneet goes through Customer Audits, Certification Audits, Financial
          Audits and many other internal and external inspections on
          time-to-time basis.
        </p>
        <h3>Learning from Accidents</h3>
        <p>
          NEL understands that the accidents are the Grave to the company and
          must be taken seriously to Prevent happening in future by adapting
          various corrective and preventive actions.
        </p>
        <h3>Implementing Changes</h3>
        <p>
          Adapting to changing circumstances and implementing necessary changes
          is vital for continuous improvement in Environment, Health and Safety
          culture.
        </p>
      </>
    ),
  },
];

export default function Pillars() {
  return (
    <section className={styles.pillarsSection}>
      {pillarsData.map((pillar, index) => (
        <div key={index}>
          <h2 className={styles.title}>{pillar.title}</h2>
          <div
            className={`${styles.pillarBlock} ${
              pillar.reverse ? styles.reverse : ""
            }`}
          >
            <div className={styles.pillarImage}>
              <img src={pillar.img.src} alt={pillar.title} />
            </div>
            <div className={styles.pillarText}>{pillar.text}</div>
          </div>
        </div>
      ))}
    </section>
  );
}
