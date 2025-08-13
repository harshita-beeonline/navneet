import React from 'react';
import styles from '../../../styles/StoreNearYou.module.scss';

const StoreNearYou = () => {
  return (
    <div className={styles["store-section-content"]}>
      <div className={styles["image-with-text-content"]}>
        <h2>Excited about our products?</h2>
        <div className={styles["divider-section"]}></div>
        <p>Find a Navneet store near you.</p>
        <button>Navneet eCatalogue</button>
      </div>
    </div>
  )
}

export default StoreNearYou
