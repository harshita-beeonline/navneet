import { notFound } from "next/navigation";
import { announcementData } from "../data";
import styles from "../../../../styles/Investor/CompanyAnnouncements/AnnouncementSection.module.scss";
import AnnouncementList from "@/components/Investor/CompanyAnnouncement/AnnouncementList";

export default function AnnouncementPage({ params }) {
  const data = announcementData[params.slug];

  if (!data) {
    return notFound();
  }

  return (
    <>
      <section className={styles["announcement-section"]}>
        <div className={styles["heading-data"]}>
          <p className={styles["heading"]}>Investor</p>
          <div className={styles["dot"]}></div>
          <p className={styles["sub-heading"]}>Company Announcements</p>
          <div className={styles["dot"]}></div>
          <p className={styles["data"]}>{data.title}</p>
        </div>

        <div className={styles["data-heading"]}>{data.title}</div>

        <AnnouncementList items={data.items} />
      </section>
    </>
  );
}
