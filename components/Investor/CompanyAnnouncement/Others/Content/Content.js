import styles from "../../../../../styles/Investor/CompanyAnnouncements/Content.module.scss";
import policy1 from "../../../../../public/images/InvestorsLandingPage/policy1.png";
import policy2 from "../../../../../public/images/InvestorsLandingPage/policy2.png";
import policy3 from "../../../../../public/images/InvestorsLandingPage/policy3.png";
import policy4 from "../../../../../public/images/InvestorsLandingPage/policy4.png";
import certificate1 from "../../../../../public/images/InvestorsLandingPage/certificate1.png";
import certificate2 from "../../../../../public/images/InvestorsLandingPage/certificate2.png";
import certificate3 from "../../../../../public/images/InvestorsLandingPage/certificate3.png";
import Image from "next/image";

export default function Content() {
  return (
    <section className={styles["content-section"]}>
      {/* ===== Policies Grid ===== */}
      <div className={styles["policy-grid"]}>
        <Image src={policy1} alt="Policy 1" className={styles["policy-img"]} />
        <Image src={policy2} alt="Policy 2" className={styles["policy-img"]} />
        <Image src={policy3} alt="Policy 3" className={styles["policy-img"]} />
        <Image src={policy4} alt="Policy 4" className={styles["policy-img"]} />
      </div>

      {/* ===== Certificates Slider ===== */}
      <div className={styles.certificates}>
        <Image src={certificate1} alt="Certificate 1" className={styles["certificate-img"]} />
        <Image src={certificate2} alt="Certificate 2" className={styles["certificate-img"]} />
        <Image src={certificate3} alt="Certificate 3" className={styles["certificate-img"]} />
      </div>
    </section>
  );
}
