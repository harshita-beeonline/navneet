"use client";
import React, { useState } from "react";
import styles from "../../../styles/EHSSection.module.scss";
import ehsimage from "../../../public/images/ehsimage.png";
import { FaPlus, FaMinus } from "react-icons/fa";
import Image from "next/image";

const EHSSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Solar and Wind Power Plants",
      answer: "You can return the product within 30 days of purchase.",
    },
    {
      question: "Strict Adherence to EHS Rules",
      answer: "Yes, we ship worldwide with additional charges.",
    },
    {
      question: "Carbon Sequestration",
      answer:
        "Once your order is shipped, we’ll send you a tracking link via email.",
    },
    {
      question: "Adaptation of Energy Efficient Technologies",
      answer: "You can return the product within 30 days of purchase.",
    },
    {
      question: "Accident Investigation, Safety Audits, Workplace Inspections",
      answer: "Yes, we ship worldwide with additional charges.",
    },
    {
      question: "Internal and External EHS trainings",
      answer:
        "Once your order is shipped, we’ll send you a tracking link via email.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles["ehs-section-page-content"]}>
      <div className={styles["ehs-section-left-right-part"]}>
        <div className={styles["ehs-section-left-part"]}>
          <div className={styles["ehs-divider"]}></div>
          <div className={styles["faqContainer"]}>
            <h6>EHS Initiatives</h6>
            {faqs.map((faq, index) => (
              <div key={index} className={styles["faqItem"]}>
                <div
                  className={styles["faqQuestion"]}
                  onClick={() => toggleFAQ(index)}
                >
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                  <h5>{faq.question}</h5>
                </div>
                {openIndex === index && (
                  <div className={styles["faqAnswer"]}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={styles["ehs-section-right-part"]}>
          <div className={styles["ehs-image-box"]}>
            <Image src={ehsimage} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EHSSection;
