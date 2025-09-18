import Image from "next/image";
import mediaCoverageDesktop from "../../../../public/images/media-and-updates/media-coverage-dekstop.png";
import mediaCoverageMobile from "../../../../public/images/media-and-updates/media-coverage-mobile.png";

import styles from "../../../../styles/MediaAndUpdates/Coverage/HeroSection.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroWrapper}>
        {/* Desktop Hero */}
        <div className={styles.desktopHero}>
          <Image
            src={mediaCoverageDesktop}
            alt="Media Coverage Desktop"
            fill
            priority
            className={styles.heroImage}
          />
        </div>

        {/* Mobile Hero */}
        <div className={styles.mobileHero}>
          <Image
            src={mediaCoverageMobile}
            alt="Media Coverage Mobile"
            width={1200}
            height={800}
            priority
          />
        </div>
      </div>
    </section>
  );
}
