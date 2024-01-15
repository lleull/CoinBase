import React from "react";
import styles from "./Choose.module.css";
import hand from "./../mgrab.png"
const Choose = () => {
  return (
    <div className={styles.section}>
      <h1 className={styles.whytext}>
        Why <span className={styles.whyspan}>Choose Us</span>
      </h1>
      <div className={styles.wrapper}>
        <div className={styles.cards}>
            <div className={styles.card}>
              
                <h2 className={styles.text}>CHOOSE YOUR WALLET</h2>
                <p className={styles.para}>Use Trust Wallet, Metamask or to connect to the app</p>
            </div>
            <div className={styles.card}>
                
                <h2 className={styles.text}>SELECT YOUR QUALITY</h2>
                <p className={styles.para}>Upload your crypto and set a title, description and price</p>
            </div>
            <div className={styles.card}>
                
                <h2 className={styles.text}>CONFIRM TRANSACTION</h2>
                <p className={styles.para}>Earn by selling your crypto in our marketplace</p>
            </div>
        </div>
        {/* imaeg */}
        <div className={styles.imgs}>
            <img className={styles.img} src={hand} alt="s"/>
        </div>
        <div className={styles.cardss}>
            <div className={styles.card}>
              
                <h2 className={styles.text}>RECIEVE YOUR OWN NET</h2>
                <p className={styles.para}>Invest all your crypto at one place on one platform</p>
            </div>
            <div className={styles.card}>
               
                <h2 className={styles.text}>TAKE A MARKET TO SELL</h2>
                <p className={styles.para}>Discover and collect the right crypto collection to buy and sell</p>
            </div>
            <div className={styles.card}>
                
                <h2 className={styles.text}>DRIVE YOUR COLLECTION</h2>
                <p className={styles.para}>Make it easy to discover. invest and manage</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
