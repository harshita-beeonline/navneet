import Image from "next/image";
import styles from "../../../../styles/OurBusiness/NonCurricullum/GeneralBooks.module.scss";

// Import images from /public
import heroBg from "../../../../public/images/our-business/general-bg.png";
import herobgmobile from "../../../../public/images/our-business/general-bg-mobile.png";
import beautyBook from "../../../../public/images/our-business/beauty-book.png";

export default function GeneralBooksPage() {
  const categories = [
    "Art",
    "Cookery",
    "Health & Hygiene",
    "Mehndi",
    "Baby Names",
    "Tailoring & Embroidery",
    "Gift, Party, Festivals",
    "General Knowledge & Quiz",
    "English Speaking",
    "Dictionary",
    "Learning Computers",
    "Books on India",
  ];

  return (
    <main className={styles["pageWrapper"]}>
      {/* === Hero Section === */}
      {/* Desktop Hero */}
      <div className={styles["heroDesktop"]}>
        <div className={styles["heroWrapperDesktop"]}>
          <Image
            src={heroBg}
            alt="Hero Background"
            fill
            priority
            className={styles["heroBg"]}
          />
        </div>
      </div>

      {/* Mobile Hero with Title */}
      <div className={styles["heroMobile"]}>
        <div className={styles["heroWrapperMobile"]}>
          <Image
            src={herobgmobile}
            alt="Hero Background Mobile"
            fill
            priority
            className={styles["heroBg"]}
          />
          <h1 className={styles["heroTitle"]}>General Book</h1>
        </div>
      </div>

      {/* === Book Section === */}
      <section className={styles["bookSection"]}>
        <p className={styles["desc"]}>
          The general book category will give you an overall view of our
          prestigious publications which are useful in day-to-day life. These
          categories include
        </p>

        <div className={styles["contentWrapper"]}>
          {/* Left: Image */}
          <div className={styles["imageWrapper"]}>
            <Image
              src={beautyBook}
              alt="Beauty Recipes"
              className={styles["bookImage"]}
              width={518}
              height={252}
              priority
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 400px, 518px"
            />
          </div>

          {/* Right: List */}
          <div className={styles["listWrapper"]}>
            <ul className={styles["list"]}>
              {categories.map((item, index) => (
                <li key={index} className={styles["listItem"]}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
