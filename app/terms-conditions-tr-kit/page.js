import styles from "../../styles/Terms&Conditions/Terms&Conditions.module.scss";

export default function TermsConditionsForKit(){
    return(
        <section className={styles["pageWrapper"]}>

          <h1 className={styles["pageTitle"]}>Terms and Conditions for Tr for Teacher Kit</h1>
          <div className={styles["contentWrapper"]}>
          <div className={styles["section"]}>
          <p>1. Only teachers in India will be eligible for the kit.</p>
          <p>2. Only one kit will be sent to each teacher.</p>
          <p>3. Please ensure City and Pin code is mentioned, if the address is incomplete, the kit will not be shipped.</p>
          <p>4. Kit delivery depends on production and courier time – If all of the information is correctly filled out, you should receive the kit within 10-15 working days</p>
          <p>5. The kit will be available for a limited time, depending on material availability.</p>
          <p>6. The filled information will be used to send marketing communication.</p>
          <h1 className={styles["sideTitle"]}>T&C APPLY</h1>
          </div>
          </div>
          </section>
    )}