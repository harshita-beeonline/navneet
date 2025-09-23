import styles from "../../../../styles/Investor/Financials/QuarterlyTable.module.scss";
import InvestorTable from "../../../../components/Investor/Financials/InvestorTable";

export default function InvestorPresentationsPage() {
  return (
    <section className={styles["investor-section"]}>
      {/* Breadcrumb */}
      <div className={styles["heading-data"]}>
        <p className={styles["heading"]}>Investor</p>
        <div className={styles["dot"]}></div>
        <p className={styles["heading"]}>Financials</p>
        <div className={styles["dot"]}></div>
        <p className={styles["data"]}>Investor Presentations</p>
      </div>

      {/* Section Title */}
      <div className={styles["data-heading"]}>Investor Presentations</div>

      {/* Table */}
      <InvestorTable
        title="Investor Presentations"
        breadcrumb={[
          { label: "Investor", href: "#" },
          { label: "Financials", href: "#" },
          { label: "Investor Presentations", href: "#" },
        ]}
      />
    </section>
  );
}