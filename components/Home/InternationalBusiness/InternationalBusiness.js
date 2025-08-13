import React from "react";
import styles from "../../../styles/InternationalBusiness.module.scss";
import internationalimage from "../../../public/images/internationalimage.png";
import Image from "next/image";

const text1 = `            Navneet’s International Business has established itself as a quality
            supplier of paper stationery products constantly thriving to achieve
            customer satisfaction.`;
const InternationalBusiness = () => {
  return (
    <div className={styles["international-business-section-content"]}>
      <div className={styles["international-business-left-right-part"]}>
        <div className={styles["international-business-left-part"]}>
          <div className={styles["left-part-image"]}>
            <Image src={internationalimage} alt="image" />
          </div>
        </div>
        <div className={styles["international-business-right-part"]}>
          <h6>International business</h6>
          <h2>Pioneers of Global Business Environment</h2>
          <p>
            We stand today with 50 years of experience in books and stationery
            and more than 20 years of experience in international business. Over
            the years, we have evolved as one of the major suppliers of
            scholastic & office stationery products across the world. With more
            than 500 stock keeping units, Navneet is one of the largest paper
            stationery brands in India with a leadership position in premiere
            stationery markets such as India, Middle East, parts of Africa, USA,
            and Europe.
          </p>
          <p>{text1}</p>
          <button>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default InternationalBusiness;
