import React from "react";
import Image from "next/image";

// Images

import top_class_info_bg from "../../../public/images/our-business/top-class-info-bg.png";
import checkmar_icon from "../../../public/images/our-business/checkmark-icon.svg";

// Styles
import styles from "../../../styles/Advertise/WhyAdvertise.module.scss";

export default function WhyAdvertise() {
  const leftCardItems = [
    "Brand leader with PAN India presence.",

    "Suitably designed products to provide clutter-free advertising space.",
    
    "Cost-effective way to reach masses with shelf-life of more than 6 months.",
    
    "Since the students carry their books everywhere, your brand will be noticed by them, along with teachers, parents, and associates.",
    
    "Mothers are the ones who buy books and stationery for their children. So the products reach the decision maker",
    
    "Products are designed after intense research to make sure they cover subjects liked by the end users.",
    
    "An excellent infrastructure support with 17 CFAs, 2 manufacturing units, 2 corporate offices, and more than 25 branch offices.",
    
    "More than 1,000 distributors and 50,000 retail outlets to take your brand across the country",
  ];

  const rightCardItems = [
    "Navneet Guides 7 to 18 years",

"Navneet Workbooks 5 to 16 years",

"Navneet 21 Most Likely Question Sets 15 to 18 years",

"Notebook: 4 to 12 years",

"Long book: 12years and above",

"Drawing book: 4 to 5 years",

"TOPScorer Times Magazine: For Teachers",
  ];

  return (
    <main className={styles.mainsection}>
        {/* INFO SECTION */}
        <div className={styles.infoStrip} aria-hidden="true">
          <div className={styles.infoBgWrap}>
            <Image
              src={top_class_info_bg}
              alt=""
              fill
              className={styles.infoBg}
              priority
            />
          </div>

          <div className={styles.infoCards}>
            <div className={styles.infoCard}>
              <h3 className={styles.cardTitle}>
              Why Advertise with Navneet?
              </h3>
              <ul className={styles.checkList}>
                {leftCardItems.map((text, i) => (
                  <li key={i}>
                    <span className={styles.checkIcon}>
                      <Image
                        src={checkmar_icon}
                        alt=""
                        width={24}
                        height={24}
                      />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.cardTitle}>
              Here’s how you can choose the product and target audience
              </h3>
              <ul className={styles.checkList}>
                {rightCardItems.map((text, i) => (
                  <li key={i}>
                    <span className={styles.checkIcon}>
                      <Image
                        src={checkmar_icon}
                        alt=""
                        width={24}
                        height={24}
                      />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    </main>
  );
}
