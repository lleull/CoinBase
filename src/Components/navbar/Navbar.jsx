import React from "react";
import styles from "./Navbar.module.css";
import close from "./icon-close.svg"
import twiter from "./../twitter (1).png"
import logo from "./icon-hamburger.svg"
import bit from "./../bitcoin.png"
import { useState } from "react";
const Navbar = () => {
  const [toggle, settoggle] = useState(false)
  return (
  <div className={styles.nav}>
  <div className={styles.navbar}>
    <h1 className={styles.head}><img className={styles.imglogo} src={bit} alt="as" />  COINLIFE</h1>
    <ul className={styles.unorder}>
        <li className={styles.list}>Home</li>
        <li className={styles.list}>Market</li>
        <li className={styles.list}>Choose Us</li>
        <li className={styles.list}>Join</li>
  
    </ul>
    
    <div className={styles.btns}>
    <img className={styles.img} src={twiter} alt="s"/>

    </div>
    <img className={styles.hamburger} onClick={() => settoggle(true)} src={logo} alt='sd'/>
    {toggle ? <div className={toggle ? styles.toggle : styles.toggles}>
        <div className={styles.mobilemenu}>
          <div className={styles.menulogo}>
          <img onClick={() => settoggle(false)} src={close} alt='ds'/>
          </div>
        <div className={styles.toggletext}>
          <h6 className={styles.totext}>Home</h6>
          <h6 className={styles.totext}>About</h6>
          <h6 className={styles.totext}>Choose Us</h6>
          <h6 className={styles.totext}>Join</h6>
       
        </div>
        
       
        
        </div>
            
           </div> :""}
  </div>
    </div>
  );
};

export default Navbar;
