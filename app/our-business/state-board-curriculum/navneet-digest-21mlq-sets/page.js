import Image from "next/image";
import styles from "../../../../styles/OurBusiness/StateBoard/navneetDigest.module.scss";

// Import images

import heroBg from "../../../../public/images/our-business/digestbg.png";
import heroBook from "../../../../public/images/our-business/digest-hero-book.png";
import mobileBG from "../../../../public/images/our-business/digest-bg-mobile.png";
import digestBook from "../../../../public/images/our-business/digest-img1.png";
import setsBook from "../../../../public/images/our-business/digest-img2.png";
import arrowIcon from "../../../../public/images/our-business/tick-icon.png";

export default function DigestPage() {
  return (
    <div className={styles["aboutPage"]}>
      {/* === Hero Section (Desktop) === */}
      <div className={styles["heroDesktop"]}>
        <div className={styles["heroWrapperDesktop"]}>
          <Image
            src={heroBg}
            alt="Digest Background"
            fill
            style={{ objectFit: "cover" }}
            priority
            className={styles["heroBg"]}
          />

          {/* Overlay Content */}
          <div className={styles["heroContent"]}>
            {/* Left text */}
            <div className={styles["title"]}>
              <h1 className={styles["heading"]}>
                Your Getaway to <br /> Exams Preparation
              </h1>
            </div>

            {/* Right image */}
            <div className={styles["booksWrapper"]} aria-hidden="true">
              <Image
                src={heroBook}
                alt="Stack of books"
                width={420}
                height={340}
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* === Hero Section (Mobile) === */}
      <div className={styles["heroMobile"]}>
        <div className={styles["heroWrapperMobile"]}>
          <Image
            src={mobileBG}
            alt="Digest Background Mobile"
            width={500}
            height={600}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            priority
          />
        </div>
      </div>

      {/* === Section 1: Image Left + Text Right === */}
      <section className={`${styles["section"]} ${styles["noMarginTop"]}`}>
        <div className={styles["sectionImage"]}>
          <Image src={digestBook} alt="Digest Book" />
        </div>
        <div className={styles["sectionText"]} style={{ padding: 0 }}>
          <h2>Digest - Your ready reference guide</h2>
          <p>
            Navneet Digest is the best companion for students. It is a single
            source where they can find all that is relevant to textbook lessons
            in an easy-to-understand format.
          </p>
          <h2>Why Navneet Digests?</h2>
          <ul className={styles["tickList"]}>
            <li>
              <Image src={arrowIcon} alt="tick" width={24} height={24} />
              <span>Independent study material</span>
            </li>
            <li>
              <Image src={arrowIcon} alt="tick" width={24} height={24} />
              <span>Ready reference book</span>
            </li>
            <li>
              <Image src={arrowIcon} alt="tick" width={24} height={24} />
              <span>User-friendly educational aid</span>
            </li>
            <li>
              <Image src={arrowIcon} alt="tick" width={24} height={24} />
              <span>Easy and lucid explanation</span>
            </li>
          </ul>
        </div>
      </section>

      {/* === Section 2: Text Left + Image Right === */}
      <section className={`${styles["section"]} ${styles["reverse"]}`}>
        <div className={styles["sectionImage"]}>
          <Image src={setsBook} alt="Navneet 21 Sets" />
        </div>
        <div className={styles["sectionText"]}>
          <h2>21 Sets - Synonymous with exam success for the past 35 years!</h2>
          <p>
            Question Paper Sets are specially prepared to help students
            appearing for the Board Exams (X & XII). 21 Most Likely Question
            Sets is the one book which everyone closely associates with Navneet.
          </p>
          <h2>Why 21 Most Likely Question Sets?</h2>
          <ul className={styles["tickList"]}>
            <li>
              <Image src={arrowIcon} alt="tick" width={24} height={24} />
              <span>Effective skills of writing answers</span>
            </li>
            <li>
              <Image src={arrowIcon} alt="tick" width={24} height={24} />
              <span>Intelligent methods of studying in a limited time</span>
            </li>
            <li>
              <Image src={arrowIcon} alt="tick" width={24} height={24} />
              <span>Precise ways of presenting answers</span>
            </li>
            <li>
              <Image src={arrowIcon} alt="tick" width={24} height={24} />
              <span>
                Prioritizing and categorizing topics for efficient learning
              </span>
            </li>
            <li>
              <Image src={arrowIcon} alt="tick" width={24} height={24} />
              <span>Special tips on each question type</span>
            </li>
            <li>
              <Image src={arrowIcon} alt="tick" width={24} height={24} />
              <span>Model answers to important questions</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
