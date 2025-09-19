import Image from "next/image";
import responsibility_info_bg from "../../../public/images/responsibility/responsibility-info-bg.png";
import styles from "../../../styles/Responsibility/Information.module.scss";

export default function Information() {
  return (
    <section className={styles.informationSection}>
      {/* Background image */}
      <div className={styles.bgWrapper}>
        <Image
          src={responsibility_info_bg}
          alt="Responsibility background"
          fill
          priority
          className={styles.bgImage}
        />
      </div>

      {/* Overlay text */}
      <div className={styles.textWrapper}>
        <p>
          Navneet Foundation is committed to creating sustainable, long-term
          impact through its initiatives. By fostering partnerships that
          prioritise enduring social change, the Foundation ensures that every
          project delivers lasting value for all its stakeholders. Beyond merely
          meeting CSR compliance, the Foundation collaborates with local NGOs
          and communities whose work is deeply rooted in sustainability,
          ensuring that programmes are designed to have a lasting effect on
          communities and the environment. By creating a collaborative platform,
          the Foundation brings together like-minded businesses, local NGOs, and
          communities to implement innovative, sustainable developmental
          programmes and deliver impactful solutions with lasting value.
        </p>
      </div>
    </section>
  );
}
