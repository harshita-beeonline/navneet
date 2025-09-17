import Image from "next/image";
import styles from "../../../../styles/OurBusiness/NonCurricullum/ChildrenBooks.module.scss";

// Import images
import mobilebg from "../../../../public/images/our-business/children-book-bg.png";
import heroBg from "../../../../public/images/our-business/child-hero-bg.png";
import booksImg from "../../../../public/images/our-business/child-book.png";
import youtubeBg from "../../../../public/images/our-business/child-youtube-bg.png";
import youtubeIcon from "../../../../public/images/our-business/child-youtube-stroke.png";

export default function ChildrenBooksPage() {
  return (
    <div className={styles["pageWrapper"]}>
      {/* Hero Section */}
      {/* Desktop hero */}
      <div className={styles["heroDesktop"]}>
        <div className={styles["heroWrapperDesktop"]}>
          {/* background image */}
          <Image
            src={heroBg}
            alt="digest background"
            fill
            style={{ objectFit: "cover" }}
            priority
            className={styles["heroBg"]}
          />

          {/* overlay content */}
          <div className={styles["heroContent"]}>
            {/* Left text */}
            <div className={styles["title"]}>
              <h1 className={styles["heading"]}>children's</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile hero */}
      <div className={styles["heroMobile"]}>
        <div className={styles["heroWrapperMobile"]}>
          <Image
            src={mobilebg}
            alt="Overview background mobile"
            fill
            style={{ objectFit: "cover" }}
            priority
            className={styles["heroBg"]}
          />
        </div>
      </div>

      {/* Content Section */}
      <section className={styles["contentSection"]}>
        <div className={styles["textWrapper"]}>
          <p className={styles["desc"]}>
            Children are naturally curious. Curious to know more about
            everything— be it colors, objects, or a language. To help satiate
            this curiosity, Navneet has a treasure trove of beautifully produced
            books for children.
          </p>

          <p className={styles["desc"]}>
            Children can pick from a wide spectrum, ranging from coloring,
            drawing, art, craft, and magic painting to science topics like
            planets and the human body. There are exciting range of story books
            which will give children the joy of reading and enrich their minds
            with moral values and enlighten them about the culture.
          </p>

          <p className={styles["desc"]}>
            Navneet plans to keep on adding new books to its popular, existing
            range. It is Navneet’s firm belief that the citizens of tomorrow
            need to be nurtured well.
          </p>

          <h3 className={styles["textstrong"]}>LEARN TODAY. LEAD TOMORROW.</h3>
        </div>

        <div className={styles["sectionImage"]}>
          <Image src={booksImg} alt="child book" />
        </div>
      </section>

      {/* YouTube Section */}
      <section className={styles["youtubeSection"]}>
        <Image
          src={youtubeBg}
          alt="YouTube Background"
          className={styles["bgImg"]}
        />
        <div className={styles["youtubeOverlay"]}>
          <Image src={youtubeIcon} alt="Play Button" />
        </div>
      </section>
    </div>
  );
}
