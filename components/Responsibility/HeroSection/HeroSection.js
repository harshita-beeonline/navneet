import Image from "next/image";
import responsibilityHeroDesktop from "../../../public/images/responsibility/responsibility-hero-dekstop.png";
import responsibilityHeroMobile from "../../../public/images/responsibility/responsibility-hero-mobile.png";

import styles from "../../../styles/Responsibility/HeroSection.module.scss";

export default function HeroSection() {
  return (
    <section
      className={styles.heroSection}
      aria-labelledby="responsibility-hero-title"
    >
      <div className={styles.container}>
        {/* HERO */}
        <div className={styles.heroWrapper}>
          <div className={styles.desktopHero}>
            <div className={styles.heroFill}>
              <Image
                src={responsibilityHeroDesktop}
                alt="responsibilityHeroDesktop"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1600px"
                className={styles.heroImage}
              />
            </div>
          </div>
          <div className={styles.mobileHero}>
            <Image
              src={responsibilityHeroMobile}
              alt="responsibilityHeroMobile"
              width={1200}
              height={800}
              priority
              sizes="100vw"
            />
          </div>
        </div>

        {/* text */}
        <div className={styles.textWrap}>
          <h1 id="responsibility-hero-title" className={styles.heroTitle}>
            Empowering children through play and community
          </h1>

          <p className={styles.heroSubtitle}>
            The Navneet Foundation has been constantly redefining its
            philosophy. What has always remained constant is the belief system –
            that true wealth is received only through the act of comforting and
            nurturing the lives of fellow beings.In existence since 2013, the
            Navneet Foundation has played a leadership role in the fields of
            healthcare, disaster relief, affordable housing, education, tribal
            welfare, and other areas of public service. Going a step beyond
            donations and charity, programs at the Foundation are built around
            reducing the carbon footprint, helping downtrodden communities, and
            creating affordable housing for the needy through the construction
            of schools, rehabilitation centres, hospitals, and animal shelters.
          </p>
        </div>
      </div>
    </section>
  );
}
