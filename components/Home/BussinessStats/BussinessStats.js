import React from "react";
import styles from "../../../styles/BussinessStats.module.scss";

const stats = [
  { icon: "/images/icons/products.svg", value: "1000+", label: "Products" },
  { icon: "/images/icons/brands.svg", value: "10+", label: "Brands" },
  { icon: "/images/icons/experience.svg", value: "60", label: "Years of experience" },
  { icon: "/images/icons/locations.svg", value: "16", label: "Locations" },
];

const LeaderSection = () => {
  return (
    <div className={styles["businessStatsSection-container"]}>
      <div className={styles["businessStatsSection"]}>
        <div className={styles["content"]}>
          <h2 className={styles["title"]}>
            Leader in educational based content
          </h2>
          <p className={styles["description"]}>
           Navneet has grown to become a Publication conglomerate from a small bookstore in Mumbai. The company has made its mark as a premium and trusted brand in Indian households and has been part of important phases in every person’s life, from your classroom to the boardroom. It is a purpose-driven organization doing what it takes to move the needle and spread knowledge. 
          </p>
        </div>

        <div className={styles["statContainer"]}>
          {stats.map((stat, index) => (
            <div key={index} className={styles["statBox"]}>
              <div className={styles["icon"]}>
                <img
                  src={stat.icon}
                  alt={stat.label}
                  className={styles["statImage"]}
                />
              </div>
              <div>
                <h4 className={styles["statValue"]}>{stat.value}</h4>
                <p className={styles["statLabel"]}>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderSection;
