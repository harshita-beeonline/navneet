
import React from "react";
import styles from "../../../styles/EHS/VMCSection.module.scss";

const cards = [
  {
    title: "Vision",
    description:
      "To be a market leader in Business by meeting highest level of customer satisfaction and by nurturing a strong Environment, Health and Safety Culture in the company. Integration of EHS into Business strategy ensures sustainability of the Business at national and international level.",
  },
  {
    title: "Mission",
    description:
      "The mission is  developing, implementing and administering comprehensive environmental health and safety services, policies, and procedures and to ensure Pollution Free, Ecofriendly Work Practices, Incident Free Workplace And Healthy Work Environment. NEL firmly believes in wellbeing of employees, communities, suppliers and all other stakeholders.",
  },
  {
    title: "Commitment",
    description:
      "We conduct our business in a manner that meets or exceeds all applicable laws and regulations to minimize risk to our personnel, the public, and the environment. We endeavor to only do business with companies and contractors that share our Health, Safety and Environment commitment and we regularly assess their performance.",
  },
];

const VMCSection = () => {
  return (
    <section className={styles.pageWrapper}>
      <div className={styles.cardGrid}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VMCSection;
