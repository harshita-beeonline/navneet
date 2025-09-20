import vacanies_finance from "../../../public/images/carrer/vacanies-finance.png";
import vacanies_legal from "../../../public/images/carrer/vacanies-legal.png";
import vacanies_manufacturing from "../../../public/images/carrer/vacanies-manufacturing.png";
import vacanies_supplychain from "../../../public/images/carrer/vacanies-supplychain.png";
import vacanies_taxation from "../../../public/images/carrer/vacanies-taxation.png";
import vacanies_publication from "../../../public/images/carrer/vacanies-publication.png";
import vacanies_marketing from "../../../public/images/carrer/vacanies-marketing.png";
import vacanies_sales from "../../../public/images/carrer/vacanies-sales.png";

import styles from "../../../styles/Career/UpcomingVacancies.module.scss";
import Image from "next/image";

const vacanies = [
  { id: 1, img: vacanies_legal },
  { id: 2, img: vacanies_legal },
  { id: 3, img: vacanies_manufacturing },
  { id: 4, img: vacanies_supplychain },
  { id: 5, img: vacanies_taxation },
  { id: 6, img: vacanies_publication },
  { id: 7, img: vacanies_marketing },
  { id: 8, img: vacanies_sales },
];

export default function UpcomingVacancies() {
  return (
    <section className={styles["vacanies-section"]}>
      <div className={styles.heading}>Upcoming Vacancies</div>

      <div className={styles["vacancy-cards"]}>
        {vacanies.map((vacany) => (
          <div key={vacany.id} className={styles.card}>
            <Image src={vacany.img} alt="vacancy" />
          </div>
        ))}
      </div>

      <div className={styles["button-wrapper"]}>
        <button className={styles.btn}>Load More</button>
      </div>
    </section>
  );
}
