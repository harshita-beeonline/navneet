import styles from "../../../styles/AboutUs/About.module.scss";

const About = () => {
  return (
    <section className={styles["about-section"]}>
      <div className={styles["about-section-content"]}>
        <span className={styles["about-section-subheading"]}>About US</span>
        <p className={styles["about-section-heading"]}>
          “Rooted in Trust, Growing with Innovation”
        </p>
        <p className={styles["about-section-para"]}>
          Navneet Education Limited is a purpose-driven organization, doing what
          it takes to move the needle and promulgate knowledge. The Gala Family
          established the brand in 1959 and since then we have been the major
          force in the dissemination of knowledge to the little learners of
          India.
        </p>
      </div>
    </section>
  );
};

export default About;
