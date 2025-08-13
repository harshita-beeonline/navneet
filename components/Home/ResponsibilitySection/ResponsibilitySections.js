import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Responsibility.module.scss";
import { IoPlayOutline } from "react-icons/io5";

const ResponsibilitySection = () => {
  return (
    <div className={styles["giving-section"]}>
      <div className={styles["image-box"]}>
        <div className={styles["content-wrapper"]}>
          <div className={styles["main-content"]}>
            <div className={styles["header-wrapper"]}>
              <Image
                src="/images/foundation.png"
                alt="Navneet Foundation Logo"
                className={styles["logo"]}
                width={160}
                height={80}
              />
              <p className={styles["responsibility"]}>Responsibility</p>
              <h2>“For it is in giving that we receive”</h2>
            </div>
            <p className={styles["desc"]}>
              The Navneet Foundation has been constantly redefining its
              philosophy. What has always remained constant is the belief system
              – that true wealth is received only through the act of comforting
              and nurturing the lives of fellow beings
            </p>
            <div className={styles["buttons"]}>
              <button className={styles["btn-blue"]}>
                Read more
              </button>
              <Link href="#" className={styles["watch-video"]}>
                <IoPlayOutline size={20} className={styles["thick-icon"]} /> &nbsp; Watch video
              </Link>
            </div>
          </div>

          {/* Desktop Initiatives */}
          <div className={`${styles["initiatives-box"]} ${styles["desktop-only"]}`}>
            <h5>Other Initiatives</h5>
            <ul>
             <li>Navneet Chhas Kendra</li>
          <li>Animal Welfare</li>
          <li>Tribal Welfare</li>
          <li>A Village for children</li>
          <li>Care for Environment</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Initiatives */}
      <div className={`${styles["initiatives-box"]} ${styles["mobile-only"]}`}>
        <h5>Other Initiatives</h5>
        <ul>
          <li>Navneet Chhas Kendra</li>
          <li>Animal Welfare</li>
          <li>Tribal Welfare</li>
          <li>A Village for children</li>
          <li>Care for Environment</li>
        </ul>
      </div>
    </div>
  );
};

export default ResponsibilitySection;
