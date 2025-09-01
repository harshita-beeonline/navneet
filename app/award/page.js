"use client";
import React from "react";
import AwardsHeader from "../../components/Awards/AwardsHeader";
import AwardsGrid from "../../components/Awards/AwardsGrid";
import { AwardsProvider } from "../../components/Awards/AwardsContext";
import styles from "../../styles/awards.module.scss";

export default function AwardsPage() {
  return (
    <AwardsProvider>
      <div className={styles.pageWrapper}>
        <AwardsHeader />
        <AwardsGrid />
      </div>
    </AwardsProvider>
  );
}
