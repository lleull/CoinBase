import React from "react";
import styles from "./Market.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Markeydata from "./Marketapi";
const Market = () => {
  const [coindata, setcoindata] = useState([]);
  const [fnum, setfnum] = useState(0);
  const [snum, setsnum] = useState(10);
  
  const options = {
    method: "GET",
    mode: "nocors",
    url: "https://coinranking1.p.rapidapi.com/coins",
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      "tiers[0]": "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "50",
      offset: "0",
    },
    headers: {
      "X-RapidAPI-Key": "36e79fec5bmsh0641910c952cbeep1afb1ejsn132bcc2ba3cc",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
  const fetchdata = async () => {
    try {
      const response = await axios.request(options);
      const onlydata = response.data;
      setcoindata(onlydata.data.coins);
      console.log(coindata);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);
  const first = () => {
    setfnum(0);
    setsnum(10);
  };
  const second = () => {
    setfnum(10);
    setsnum(20);
  };
  const thirs = () => {
    setfnum(20);
    setsnum(30);
  };
  const fourth = () => {
    setfnum(30);
    setsnum(40);
  };
  const fifth = () => {
    setfnum(40);
    setsnum(50);
  };
  const Limitcoin = coindata.slice(fnum, snum);
  

  return (
    <div className={styles.section}>
      <h1 className={styles.head}>Market Update</h1>
      <div className={styles.wrapper}>
        <table>
          <thead>
            <tr className={styles.headrow}>
              <th>Coin</th>
              <th className={styles.width}>Price</th>
              <th  >24Change</th>
              <th>Market Cap</th>
            </tr>
          </thead>
        {Limitcoin.map((Limitcoins) => (
          <tr key={Limitcoins.uuid} className={styles.row}>
            <t className={styles.header}>
             <img src={Limitcoins.iconUrl} alt="s" className={styles.icon}/>
              <span className={styles.coinname}>{Limitcoins.symbol}</span> 
            </t>

            <td className={styles.price}>{(Limitcoins.price * 10000).toFixed(0) / 10000}</td>

            <td className={Limitcoins.change.includes("-")? styles.red :styles.green}>{Limitcoins.change}</td>
            <td>{Limitcoins.marketCap}</td>
          </tr>
        ))}

          </table>
        <div className={styles.page}>
          <div
            onClick={first}
            className={snum === 10 ? styles.pagenums : styles.pagenum}
            >
            <span className={styles.num}>1</span>
          </div>
          <div
            onClick={second}
            className={snum === 20 ? styles.pagenums : styles.pagenum}
            >
            <span className={styles.num}>2</span>
          </div>
          <div
            onClick={thirs}
            className={snum === 30 ? styles.pagenums : styles.pagenum}
          >
            <span className={styles.num}>3</span>
          </div>
          <div
            onClick={fourth}
            className={snum === 40 ? styles.pagenums : styles.pagenum}
          >
            <span className={styles.num}>4</span>
          </div>
          <div
            onClick={fifth}
            className={snum === 50 ? styles.pagenums : styles.pagenum}
          >
            <span className={styles.num}>5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
