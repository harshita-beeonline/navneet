import styles from "../../../../../styles/Investor/CompanyAnnouncements/CardSection.module.scss";

const herodata = [
  {
    id: 1,
    title: "Vision",
    text: "To be a market leader in Business by meeting highest level of customer satisfaction and by nurturing a strong Environment, Health and Safety Culture in the company. Integration of EHS into Business strategy ensures sustainability of the Business at national and international level.",
  },
  {
    id: 2,
    title: "Mission",
    text: "The mission is  developing, implementing and administering comprehensive environmental health and safety services, policies, and procedures and to ensure Pollution Free, Ecofriendly Work Practices, Incident Free Workplace And Healthy Work Environment. NEL firmly believes in wellbeing of employees, communities, suppliers and all other stakeholders.",
    highlight: true,
  },
  {
    id: 3,
    title: "Commitment",
    text: "We conduct our business in a manner that meets or exceeds all applicable laws and regulations to minimize risk to our personnel, the public, and the environment. We endeavor to only do business with companies and contractors that share our Health, Safety and Environment commitment and we regularly assess their performance.",
  },
];

export default function CardSection() {
  return (
    <section className={styles["card-section"]}>
      {herodata.map((item) => (
        <div
          key={item.id}
          className={`${styles["card"]} ${
            item.highlight ? styles["highlight"] : ""
          }`}
        >
          <h2 className={styles["card-heading"]}>{item.title}</h2>
          <p className={styles["card-data"]}>{item.text}</p>
        </div>
      ))}
    </section>
  );
}
