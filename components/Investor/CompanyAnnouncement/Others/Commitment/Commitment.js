import styles from "../../../../../styles/Investor/CompanyAnnouncements/Commitment.module.scss";

export default function Commitment() {
  return (
    <section className={styles.commitmentSection}>
      <h2 className={styles.heading}>Commitment</h2>
      <ul className={styles.list}>
        <li>
          Solar and Wind Power plants: Leading to 55% of energy from the
          Renewable Resources, progressing ahead of India’s target of Carbon
          Neutrality by year 2030
        </li>
        <li>Strict Adherence to the EHS Rules and Regulations</li>
        <li>Carbon Sequestration from Green Cover of the company</li>
        <li>
          Adaptation of Energy efficient technologies, Solar Water heaters,
          Solar powered street and lane lighting
        </li>
        <li>
          Accident Investigation, Safety Audits, Workplace EHS inspection, MIS
        </li>
        <li>
          Internal and External EHS trainings, POSH Committee training, Employee
          Feedbacks, Grievance Mechanism for employees, customers, stakeholders,
          suppliers etc.
        </li>
      </ul>
    </section>
  );
}
