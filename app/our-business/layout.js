import OurBusinessBreadcrumb from "@/components/OurBusiness/Breadcrumb";
import styles from "@/styles/OurBusiness/Layout.module.scss";

export default function OurBusinessLayout({ children }) {
  return (
    <div className={styles.shell}>
      <OurBusinessBreadcrumb />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
