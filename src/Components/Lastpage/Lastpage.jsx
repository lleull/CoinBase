import React from "react";
import styles from "./Last.module.css";
import image from "./../1298510091.png"
import cos from "./../cos.png"
import tw from "./icons8-twitter-squared-50.png"
import fb from "./icons8-facebook-50.png"
import yt from "./icons8-youtube-50.png"
const Lastpage = () => {
  return (
    <div className={styles.section}>
      <div className={styles.image}>
        <img className={styles.img} src={image} alt="s" />
      </div>
      <div className={styles.about}>
        <div className={styles.logo}>
          <img className={styles.log}  src={tw} alt="s" />
          <img className={styles.log} src={fb} alt="s" />
          <img className={styles.log} src={yt} alt="s" />
        </div>
        <div className={styles.text}>
          <p className={styles.ptext}>Privacy</p>
          <p className={styles.ptext}>Terms</p>
        </div>
      </div>
      <div className={styles.images}>
        <img className={styles.img} src={cos} alt="s" />
      </div>
    </div>
  );
};

export default Lastpage;
