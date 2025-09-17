import Image from "next/image";
import styles from "../../../../styles/OurBusiness/StateBoard/VikasWorkbook.module.scss";

import VikasBG from "../../../../public/images/our-business/vikasbg-desktop.png";
import Vikasbg from "../../../../public/images/our-business/vikasbg-mobile.png";

export default function VikasWorkbookPage() {
  return (
    <div className={styles["pageWrapper"]}>
      {/* === Hero Section === */}
      <section className={styles["heroSection"]}>
        {/* Desktop Hero */}
        <div className={styles["heroDesktop"]}>
          <div className={styles["heroWrapperDesktop"]}>
            <Image
              src={VikasBG}
              alt="Vikas background desktop"
              fill
              priority
              className={styles["heroBg"]}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Mobile Hero */}
        <div className={styles["heroMobile"]}>
          <div className={styles["heroWrapperMobile"]}>
            <Image
              src={Vikasbg}
              alt="Vikas background mobile"
              fill
              priority
              className={styles["heroBgMobile"]}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* === Intro Section === */}
      <section className={styles["intro"]}>
        <h2 className={styles["title"]}>
          Your undisputed companion in exam preparations
        </h2>
        <p className={styles["desc"]}>
          Vikas is friendly and known name amongst students and teachers. Come
          exams, and Vikas books act as a smart study companion to score
          outstanding marks. One of the best-selling products of Vikas includes
          the Smart Workbooks. Smart Workbooks are based on the Continuous
          Comprehensive Evaluation (CCE) – a newly introduced system of
          evaluation. Meticulous research on the new system has been done before
          preparing these books for the students.
        </p>
        <p className={styles["desc"]}>
          Each book gives detailed information on the new evaluation system, on
          the changed learning focus and examination pattern. The Smart
          Workbooks ensure that the students as well as their parents become
          fully conversant with the new system. Explore other products and adapt
          to the ever-updating system of education with confidence!
        </p>
      </section>
    </div>
  );
}
