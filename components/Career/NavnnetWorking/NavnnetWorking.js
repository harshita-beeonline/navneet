import working_schedule from "../../../public/images/carrer/working-schedule.svg";
import working_friendly from "../../../public/images/carrer/working-friendly.svg";
import working_food from "../../../public/images/carrer/working-food.svg";

import styles from "../../../styles/Career/NavnnetWorking.module.scss";
import Image from "next/image";

const workingData = [
  {
    id: 1,
    img: working_schedule,
    heading: "Flexible schedules",
    text: "We ensure our work environment has a time schedules that is suitable for every employee working in. This arrangement allows the employees working within the time span. There is no overtime required for employees  to pursue work.",
  },
  {
    id: 2,
    img: working_friendly,
    heading: "Friendly atmosphere",
    text: "To engage its workforce Navneet includes celebrations of professional and personal milestones, reward and recognition events and team get-togethers.",
  },
  {
    id: 3,
    img: working_food,
    heading: "Nutritious food at workspace",
    text: "At the employee canteens, we have taken steps to ensure consistency in the quality of food at all our canteens. We also provide specialized training to canteen staff to improve service levels and have committees in place that are responsible for continuous improvement. ",
  },
];

export default function NavnnetWorking() {
  return (
    <div className={styles["working-section"]}>
      <div className={styles["text-wrapper"]}>
        <h1 className={styles["heading"]}>Joy of working at Navneet</h1>
        <p>
          The secret of running a successful organization is keeping the
          atmosphere at work happy and motivated. The secret of motivation at
          work is found by searching for the answers to the questions.
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
