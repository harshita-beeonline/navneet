"use client";
import React from "react";
import styles from "../../../styles/NavneetAiSection.module.scss";

const paratext = ` Navneet AI, from Navneet Education Limited, is India's first custom
            AI education model. It offers “Magic Tools” like auto-generated
            lesson materials (presentations, quizzes, flashcards, summaries), an
            AI-powered Magic Board, 3D interactive models, educational games,
            and simulations. Teachers also benefit from a conversational “Magic
            Bot” co-pilot to enhance teaching.`;

const NavneetAiSection = () => {
  return (
    <div className={styles["navneet-ai-section-content"]}>
      <div className={styles["navneet-ai-left-right-content"]}>
        <div className={styles["navneet-ai-left-content"]}>
          <h2>ELEVATING Learning, ENHANCING TRUST</h2>
          <p>{paratext}</p>
          <a
            href="https://navneetedu.ai/"
            target="_blank"
            rel="noopener noreferrer"
            style={{textDecoration:"none"}}
          >
            <button>Explore Navneet AI</button>
          </a>
        </div>

        <div className={styles["navneet-ai-right-content"]}>
          <div className={styles["navneet-ai-video"]}>
            <video
              src="https://navneetedu.ai/images/Navneet%20AI_Final%20Product%20Video%202.mp4" //  <-- just use path, no import
              autoPlay
              muted
              loop
              playsInline
              className={styles["navneet-ai-video"]}
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavneetAiSection;
