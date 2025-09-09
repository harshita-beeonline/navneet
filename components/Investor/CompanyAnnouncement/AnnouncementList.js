import styles from "../../../styles/Investor/CompanyAnnouncements/AnnouncementList.module.scss";

export default function AnnouncementList({ items }) {
  return (
    <div className={styles["announcement-list"]}>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
