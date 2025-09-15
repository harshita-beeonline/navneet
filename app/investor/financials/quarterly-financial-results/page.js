import styles from "../../../../styles/Investor/Financials/QuarterlyTable.module.scss";
import QuarterlyTable from "@/components/Investor/Financials/QuarterlyTable";

export default function QuarterlyResultsPage() {
  return (
    <section className={styles["investor-section"]}>
      {/* Breadcrumb */}
      <div className={styles["heading-data"]}>
        <p className={styles["heading"]}>Investor</p>
        <div className={styles["dot"]}></div>
        <p className={styles["heading"]}>Financials</p>
        <div className={styles["dot"]}></div>
        <p className={styles["data"]}>Quarterly Financial Results</p>
      </div>

      {/* Section Title */}
      <div className={styles["data-heading"]}>Quarterly Financial Results</div>

      {/* Table */}
      <QuarterlyTable
        title="Quarterly Financial Results"
        breadcrumb={[
          { label: "Investor", href: "#" },
          { label: "Financials", href: "#" },
          { label: "Quarterly Financial Results", href: "#" },
        ]}
      />
    </section>
  );
}
