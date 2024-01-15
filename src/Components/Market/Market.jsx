import React from "react";
import styles from "./Market.module.css";
import Markeydata from "./Marketapi";
import { useState } from "react";
const Market = () => {
  const [fnum, setfnum] = useState(0);
  const [snum, setsnum] = useState(10);

  const Limitcoin = Markeydata.slice(fnum, snum);
  const first = () => {
    setfnum(0)
    setsnum(10)
  }
  const second = () => {
    setfnum(10)
    setsnum(20)
  }
  const thirs = () => {
    setfnum(20)
    setsnum(30)
  }
  const fourth = () => {
    setfnum(30)
    setsnum(40)
  }
  const fifth = () => {
    setfnum(40)
    setsnum(50)
  }

  return (
    <div className={styles.section}>
      <h1 className={styles.head}>Market Update</h1>
      <div className={styles.wrapper}>
        <table>
          <thead>
            <tr className={styles.headrow}>
              <th>Coin</th>
              <th>Price</th>
              <th>24Change</th>
              <th>Market Cap</th>
            </tr>
          </thead>
        </table>
        {Limitcoin.map((Limitcoins) => (
          <tr className={styles.row}>
            <td className={styles.rowtext}>{Limitcoins.name}</td>

            <td>{Limitcoins.price_usd}</td>

            <td>{Limitcoins.percent_change_24h}</td>
            <td>{Limitcoins.market_cap_usd}</td>
          </tr>
        ))}

        <div className={styles.page}>
          <div onClick={first} className={ snum === 10 ? styles.pagenums :styles.pagenum}>
            <span className={styles.num}>1</span>
          </div>
          <div onClick={second} className={snum === 20  ? styles.pagenums :styles.pagenum}>
            <span className={styles.num}>2</span>
          </div>
          <div onClick={thirs} className={snum === 30  ? styles.pagenums :styles.pagenum}>
            <span className={styles.num}>3</span>
          </div>
          <div onClick={fourth} className={snum === 40   ?  styles.pagenums :styles.pagenum}>
            <span className={styles.num}>4</span>
          </div>
          <div onClick={fifth} className={snum  === 50 ? styles.pagenums :styles.pagenum}>
            <span className={styles.num}>5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
