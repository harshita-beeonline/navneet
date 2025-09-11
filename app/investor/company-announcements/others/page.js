import CardSection from "@/components/Investor/CompanyAnnouncement/Others/CardSection/CardSection";
import styles from "../../../../styles/Investor/CompanyAnnouncements/Others.module.scss";
import Pillars from "@/components/Investor/CompanyAnnouncement/Others/Pillars/Pillars";

export default function Others() {
  return (
    <section className={styles["others-section"]}>
      <nav aria-label="Breadcrumb" className={styles["breadcrumb"]}>
        <span className={styles["crumbStrong"]}>Investor</span>
        <span className={styles["dot"]} />
        <span className={styles["crumb"]}>Company Announcements</span>
        <span className={styles["dot"]} />
        <span className={styles["crumbStrong"]}>
          EHS - Environemnt Health Safety
        </span>
      </nav>

      <h1 className={styles["pageTitle"]}>EHS - Environment Health Safety</h1>

      <CardSection/>
      <Pillars/>
    </section>
  );
}
