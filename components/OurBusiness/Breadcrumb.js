"use client";

import React from "react";
import { usePathname } from "next/navigation";
import styles from "@/styles/OurBusiness/Breadcrumb.module.scss";

const SEGMENT_LABELS = {
  "state-board-curriculum": "State Board Curriculum",
  overview: "Overview",
  "navneet-digest-21mlq-sets": "Navneet Digest & 21 MLQ Sets",
  "vikas-workbook": "Vikas Workbooks",
  "non-curriculum": "Non Curriculum",
  "children-books": "Children Books",
  "general-books": "General Books",
  cbse: "CBSE",
  indianica: "Indianica",
  rise: "Rise",
  companion: "Companion",
  grafalco: "Grafalco",
  stationary: "Stationery",
  domestic: "Domestic",
  exports: "Exports",
  edtech: "EdTech",
  "top-tech": "NAVNEET TOP TECH",
  "top-school": "TopSchool",
  "top-class": "TopClass",
  "top-scorer": "TopScorer",
  "others-k12": "Others",
  "school-management-bussiness": "K12, School Management Business",
};

function formatSegment(segment) {
  if (SEGMENT_LABELS[segment]) {
    return SEGMENT_LABELS[segment];
  }

  return segment
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export default function OurBusinessBreadcrumb() {
  const pathname = usePathname();

  const businessSegments = pathname
    .split("/")
    .filter(Boolean)
    .slice(1)
    .map(formatSegment);

  const crumbs = ["Our Businesses", ...businessSegments];

  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumbWrap}>
      <div className={styles.breadcrumb}>
        {crumbs.map((crumb, index) => {
          const isStrong = index === 0 || index === crumbs.length - 1;

          return (
            <React.Fragment key={`${crumb}-${index}`}>
              {index > 0 ? <span className={styles.dot}></span> : null}
              <p className={isStrong ? styles.crumbStrong : styles.crumb}>
                {crumb}
              </p>
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}
