// components/Career/UpcomingVacancies/UpcomingVacancies.js
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Career/UpcomingVacancies.module.scss";

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
    img: "/images/carrer/vacanies-finance.png",
    category: "Finance",
  },
  {
    id: 2,
    title: "Legal",
    img: "/images/carrer/vacanies-legal.png",
    category: "Legal",
  },
  {
    id: 3,
    title: "Manufacturing",
    img: "/images/carrer/vacanies-manufacturing.png",
    category: "Manufacturing",
  },
  {
    id: 4,
    title: "Supply Chain",
    img: "/images/carrer/vacanies-supplychain.png",
    category: "Supplychain",
  },
  {
    id: 5,
    title: "Taxation",
    img: "/images/carrer/vacanies-taxation.png",
    category: "Taxation",
  },
  {
    id: 6,
    title: "Publication",
    img: "/images/carrer/vacanies-publication.png",
    category: "Publication",
  },
  {
    id: 7,
    title: "Marketing",
    img: "/images/carrer/vacanies-marketing.png",
    category: "Marketing / branding",
  },
  {
    id: 8,
    title: "Sales",
    img: "/images/carrer/vacanies-sales.png",
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
