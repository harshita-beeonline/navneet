// File: components/Investor/CorporateGovernance/BoardDirectorsCommittee.jsx
import React from "react";
import styles from "../../../../styles/Investor/CorporateGovernance/BoardDirectorsCommittee.module.scss";

const directors = [
  { id: 1, name: "Mr. Kamlesh Shivji Vikamsey", designation: "Chairperson" },
  { id: 2, name: "Mr. Gnanesh Dungarshi Gala", designation: "Managing Director" },
  { id: 3, name: "Mr. Raju Harakhchand Gala", designation: "Joint Managing Director" },
  { id: 4, name: "Mr. Anil Dungarshi Gala", designation: "Whole time Director" },
  { id: 5, name: "Mr. Shailendra Jitendrabhai Gala", designation: "Whole time Director" },
  { id: 6, name: "Mr. Dilip Chatrabhuj Sampat", designation: "Whole time Director" },
  { id: 7, name: "Mr. Anil Swarup", designation: "Non-Executive – Non Independent Director" },
  { id: 8, name: "Mr. Krishnamurthy Ilango Viswanathan", designation: "Independent Director" },
  { id: 9, name: "Mr. Hemal Madhubhai Patel", designation: "Independent Director" },
  { id: 10, name: "Mrs. Nirma Anil Bhandari", designation: "Independent Director" },
  { id: 11, name: "Mrs. Drushti Rahul Desai", designation: "Independent Director" },
];

const committees = [
  {
    title: "Audit Committee",
    rows: [
      { id: 1, name: "Mrs. Drushti Rahul Desai", category: "Chairperson" },
      { id: 2, name: "Mrs. Nirma Anil Bhandari", category: "Member" },
      { id: 3, name: "Mr. Hemal Madhubhai Patel", category: "Member" },
      { id: 4, name: "Mr. Krishnamurthy Ilango Viswanathan", category: "Member" },
    ],
  },
  {
    title: "Nomination & Remuneration Committee",
    rows: [
      { id: 1, name: "Mr. Hemal Madhubhai Patel", category: "Chairperson" },
      { id: 2, name: "Mrs. Nirma Anil Bhandari", category: "Member" },
      { id: 3, name: "Mrs. Kamlesh Shivji Vikamsey", category: "Member" },
    ],
  },
  {
    title: "Stakeholders Relationship Committee",
    rows: [
      { id: 1, name: "Mrs. Drushti Rahul Desai", category: "Chairperson" },
      { id: 2, name: "Mrs. Nirma Anil Bhandari", category: "Member" },
      { id: 3, name: "Mr. Gnanesh Dungarshi Gala", category: "Member" },
    ],
  },
  {
    title: "Corporate Social Responsibility Committee",
    rows: [
      { id: 1, name: "Mrs. Nirma Anil Bhandari", category: "Chairperson" },
      { id: 2, name: "Mr. Anil Dungarshi Gala", category: "Member" },
      { id: 3, name: "Mr. Krishnamurthy Ilango Viswanathan", category: "Member" },
    ],
  },
  {
    title: "Risk Management Committee",
    rows: [
      { id: 1, name: "Mr. Gnanesh Dungarshi Gala", category: "Chairperson" },
      { id: 2, name: "Mr. Shailendra Jitendrabhai Gala", category: "Member" },
      { id: 3, name: "Mrs. Nirma Anil Bhandari", category: "Member" },
      { id: 4, name: "Mr. Anil Swarup", category: "Member" },
    ],
  },
];

function InfoTable({ headers = [], rows = [], caption = "" }) {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.infoTable}>
        {/* {caption && <caption className={styles.tableCaption}>{caption}</caption>} */}
        <thead>
          <tr>
            {headers.map((h, idx) => (
              <th key={idx}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id}>
              <td className={styles.srno}>{r.id}</td>
              <td className={styles.name}>{r.name}</td>
              <td className={styles.designation}>{r.designation ?? r.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function BoardDirectorsCommittee() {
  return (
    <section className={styles["board-section"]}>
      <div className={styles.breadcrumb}>
        <p className={styles.crumbStrong}>Investor</p>
        <span className={styles.dot}></span>
        <p className={styles.crumb}>Corporate Governance</p>
        <span className={styles.dot}></span>
        <p className={styles.crumbStrong}>Board Of Directors & Committees</p>
      </div>

      <h1 className={styles.pageTitle}>Board of Directors</h1>

      <InfoTable
        headers={["Sr.No.", "Name", "Designation"]}
        rows={directors}
        caption="Board of Directors"
      />

      <h1 className={styles.pageTitle}>Committees of the Board</h1>

      {committees.map((c) => (
        <div key={c.title} className={styles.committeeBlock}>
          <h2 className={styles.sectionTitle}>{c.title}</h2>
          <InfoTable
            headers={["Sr.No.", "Name", "Category"]}
            rows={c.rows}
            caption={c.title}
          />
        </div>
      ))}
    </section>
  );
}

