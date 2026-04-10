import working_schedule from "../../../public/images/carrer/working-schedule.svg";
import working_friendly from "../../../public/images/carrer/working-friendly.svg";
import working_food from "../../../public/images/carrer/working-food.svg";

import styles from "../../../styles/Career/NavnnetWorking.module.scss";
import Image from "next/image";

const workingData = [
  {
    id: 1,
    img: working_schedule,
    heading: "Health and well-being",
    text: "We ensure our work environment has a time schedules that is suitable for every employee working in. This arrangement allows the employees working within the time span. There is no overtime required for employees  to pursue work.",
  },
  {
    id: 2,
    img: working_friendly,
    heading: "Ensuring access to nutritious food",
    text: "We ensure our work environment has a time schedules that is suitable for every employee working in. This arrangement allows the employees working within the time span. There is no overtime required for employees  to pursue work.",
  },
  {
    id: 3,
    img: working_food,
    heading: "Families and celebrations",
    text: "To engage its workforce Navneet includes celebrations of professional and personal milestones, reward and recognition events and team get-togethers.",
  },
];

export default function NavnnetWorking() {
  return (
    <div className={styles["working-section"]}>
      <div className={styles["text-wrapper"]}>
        <h1 className={styles["heading"]}>Joy of working at Navneet</h1>
        <p>Navneet has an employee strength of over 2600 enterprise-wide.</p>
        <p>
          At Navneet, people are our greatest pride, resource and are central to
          growth strategy. Our focus lies in giving opportunities with freedom
          to inspire ideas and be inspired, opportunities to take up leadership
          roles early in your career, freedom to experiment and be innovative.
          If you have what it takes to become an integral part of an
          organization that is built and driven by people, then you are the
          person we are looking for. Simply access the “Careers” section to post
          your resume on our site. It could be your first step towards getting
          closer to an organization full of self-driven people.
        </p>
      </div>

      <div className={styles["working-info"]}>
        {workingData.map((data) => (
          <div key={data.id} className={styles["working-box"]}>
            <div className={styles["heading-section"]}>
              <div className={styles["icon-wrapper"]}>
                <Image
                  src={data.img}
                  className={styles["img"]}
                  alt={data.heading}
                />
              </div>
              <div className={styles["heading"]}>{data.heading}</div>
            </div>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
