import Image from "next/image";
import styles from "../../../../styles/OurBusiness/StateBoard/BussinessOverview.module.scss";

// Images
import overviewbg_dekstop from "../../../../public/images/our-business/overviewbg.png";
import books from "../../../../public/images/our-business/overview-books.png";
import overviewbg_mobile from "../../../../public/images/our-business/overviewbg-mobile.png";

export default function AcademicProgress() {
  return (
    <section className={styles.academicProgress}>
      {/* Desktop & Tablet Hero */}
      <div className={styles.heroDesktop}>
        <Image
          src={overviewbg_dekstop}
          alt="Desktop Hero Background"
          className={styles.heroBg}
          priority
        />
        <div className={styles.heroContent}>
          <div className={styles.textBlock}>
            <h1>Academic Progress Made Easy</h1>
            <h3>With Navneet</h3>
          </div>
          <div className={styles.bookImage}>
            <Image src={books} alt="Books" priority />
          </div>
        </div>
      </div>

      {/* Mobile Hero */}
      <div className={styles.heroMobile}>
        <Image
          src={overviewbg_mobile}
          alt="Mobile Hero Background"
          className={styles.heroBg}
          priority
        />
      </div>

      {/* Text Area */}
      <div className={styles.textArea}>
        <p>
          Navneet is in the business of publication of syllabus based
          supplementary books for State Board school students in Western India
          and other non-syllabus based books for schools across India. Books are
          the medium of delivering content created by the reputed authors.
          Navneet has always enjoyed the leadership position in the publication
          of supplementary academic books due to our strong content team of 225+
          authors.
        </p>
        <p>
          In 2016-17, we acquired Encyclopedia Britannica (India) Pvt. Ltd.
          which has a PAN India presence for CBSE focusing on marketing in its
          core States of Gujarat and Maharashtra along with other States.
        </p>
        <p>
          Navneet is a dominant player in Western India for syllabus based
          supplementary books. Workbooks, Guides and Last-Minute Revision books
          form the portfolio for Navneet’s Syllabus based publications. For
          FY17, Navneet’s publication segment alone contributed INR 5,959
          million which is about 54% of Company’s revenue.
        </p>
      </div>
    </section>
  );
}
