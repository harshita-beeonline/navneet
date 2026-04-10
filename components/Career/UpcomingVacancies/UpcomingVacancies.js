// components/Career/UpcomingVacancies/UpcomingVacancies.js
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Career/UpcomingVacancies.module.scss";
import upcomeing1 from '../../../public/images/upcomeing1.png';
import upcomeing2 from '../../../public/images/upcomeing2.png'
import upcomeing3 from '../../../public/images/upcomeing3.png'
import upcomeing4 from '../../../public/images/upcomeing4.png'
import upcomeing5 from '../../../public/images/upcomeing5.png'
import upcomeing6 from '../../../public/images/upcomeing6.png'
import upcomeing7 from '../../../public/images/upcomeing7.png'
import upcomeing8 from '../../../public/images/upcomeing8.png'
/**
 * Each vacancy includes:
 *  - id
 *  - title (displayed, alt)
 *  - img (path in /public)
 *  - category (used to filter jobs list)
 */
const vacancies = [
  {
    id: 1,
    title: "Finance & accounts",
    img: upcomeing1,
    category: "Finance",
  },
  {
    id: 2,
    title: "Legal",
    img: upcomeing2,
    category: "Legal",
  },
  {
    id: 3,
    title: "Manufacturing",
    img: upcomeing3,
    category: "Manufacturing",
  },
  {
    id: 4,
    title: "Supply Chain",
    img: upcomeing4,
    category: "Supplychain",
  },
  {
    id: 5,
    title: "Taxation",
    img: upcomeing5,
    category: "Taxation",
  },
  {
    id: 6,
    title: "Publication",
    img: upcomeing6,
    category: "Publication",
  },
  {
    id: 7,
    title: "Marketing",
    img: upcomeing7,
    category: "Marketing / branding",
  },
  {
    id: 8,
    title: "Sales",
    img: upcomeing8,
    category: "Sales",
  },
];

export default function UpcomingVacancies() {
  return (
    <section className={styles["vacancies-section"]}>
      <h2 className={styles.heading}>Upcoming Vacancies</h2>

      <div className={styles["vacancy-cards"]}>
        {vacancies.map((v) => (
          <Link
            key={v.id}
            href={`/career/jobs?category=${encodeURIComponent(v.category)}`}
          >
            <div className={styles.card} title={`View ${v.title} jobs`}>
              <Image
                src={v.img}
                alt={v.title}
                width={290}
                height={290}
                style={{ objectFit: "contain" }}
                priority={false}
              />
              <div className={styles.overlay}>
                <span className={styles.text}>{v.title}</span>
                <span className={styles.arrow}>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className={styles["button-wrapper"]}>
        <Link href="/career/jobs">
          <button className={styles.btn}>Load More</button>
        </Link>
      </div>
    </section>
  );
}
