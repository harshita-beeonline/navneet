"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "../../../styles/StoreNearYou.module.scss";
import Image from "next/image";
import storeimage from "../../../public/images/storeimage.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const StoreNearYou = () => {
  return (
    <>
      {/* ✅ Desktop Section */}
      <div className={styles["store-section-content-desktop"]}>
        <div className={styles["store-section-left-right-part"]}>
          {/* 🖼️ Image animation */}
          <motion.div
            className={styles["store-left-part"]}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Image src={storeimage} alt="image" />
          </motion.div>

          {/* 🧾 Text animation group */}
          <motion.div
            className={styles["store-right-part"]}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className={styles["image-with-text-content"]}>
              <motion.h2
                variants={fadeUp}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Excited about our products?
              </motion.h2>

              <motion.div
                className={styles["divider-section"]}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: 0.3 }}
              ></motion.div>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Explore our eCatagolue
              </motion.p>

              <motion.a
                href="https://ecatalogue.navneet.com/"
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <button>Navneet eCatalogue</button>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ✅ Mobile Section */}
      <div className={styles["store-section-content"]}>
        <motion.div
          className={styles["image-with-text-content"]}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Excited about our products?
          </motion.h2>

          <motion.div
            className={styles["divider-section"]}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          ></motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Explore our eCatagolue
          </motion.p>

          <motion.a
            href="https://ecatalogue.navneet.com/"
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <button>Navneet eCatalogue</button>
          </motion.a>
        </motion.div>
      </div>
    </>
  );
};

export default StoreNearYou;
