import React from "react";
import styles from "./join.module.css";
import bit from "./../bitcoin.png"
import ver from "./../cs.jpg"
const Joinus = () => {
  return (
    <div className={styles.section}>
      <div className={styles.wrap}>
        <img className={styles.img} src={bit} alt="s" />
        <div className={styles.textwrap}>
          <h1 className={styles.head}>JOIN US VIA</h1>
          <p className={styles.headpara}>DISCORD</p>
        </div>
        <img className={styles.img} src={ver} alt="s" />
      </div>
      
      <p className={styles.para}>Invest and manage all your crypto at one place</p>
      <div className={styles.btns}>

      <button className={styles.btn}>Join Via Discord</button>
      </div>
    </div>
  );
};

export default Joinus;
