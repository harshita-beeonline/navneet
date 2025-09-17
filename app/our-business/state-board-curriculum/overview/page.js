import Image from "next/image";
import styles from "../../../../styles/OurBusiness/StateBoard/BussinessOverview.module.scss";

// Importing images
import OVERVIEWBG from "../../../../public/images/our-business/overviewbg.png";
import books from "../../../../public/images/our-business/overview-books.png";
import overviewbg from "../../../../public/images/our-business/overviewbg-mobile.png";

export default function AcademicProgress() {
  return (
    <section className={styles.pageWrapper}>
      {/* === Hero Section === */}
      <div
        className={styles.heroSection}
        aria-label="Overview: Academic Progress Made Easy"
      >
        {/* Desktop Hero */}
        <div className={styles.heroDesktop}>
          <div className={styles.heroWrapperDesktop}>
            <Image
              src={OVERVIEWBG}
              alt="Overview background"
              fill
              priority
              className={styles.heroBg}
              style={{ objectFit: "cover" }}
            />

            {/* Books image */}
            <div className={styles.booksWrapper} aria-hidden="true">
              <Image
                src={books}
                alt="stack of books"
                width={400}
                height={320}
                priority
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>

        {/* Mobile Hero */}
        <div className={styles.heroMobile}>
          <div className={styles.heroWrapperMobile}>
            <Image
              src={overviewbg}
              alt="Overview background mobile"
              fill
              priority
              className={styles.heroBgMobile}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* === Text Section === */}
      <div className={styles.intro}>
        <p className={styles.desc}>
          Navneet is in the business of publication of syllabus-based
          supplementary books for State Board school students in Western India
          and other non-syllabus based books for schools across India. Books are
          the medium of delivering content created by the reputed authors.
          Navneet has always enjoyed the leadership position in the publication
          of supplementary academic books due to our strong content team of 225+
          authors.
        </p>
        <p className={styles.desc}>
          In 2016-17, we acquired Encyclopedia Britannica (India) Pvt. Ltd.
          which has a PAN India presence for CBSE focusing on marketing in its
          core States of Gujarat and Maharashtra along with other States.
        </p>
        <p className={styles.desc}>
          Navneet is a dominant player in Western India for syllabus-based
          supplementary books. Workbooks, Guides, and Last-Minute Revision books
          form the portfolio for Navneet’s syllabus-based publications. For
          FY17, Navneet’s publication segment alone contributed INR 5,959
          million which is about 54% of Company’s revenue.
        </p>
      </div>
    </section>
  );
}
