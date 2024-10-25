import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import Market from "./Components/Market/Market";
import Choose from "./Components/ChooseUs/Choose";
import Joinus from "./Components/Joinus/Joinus";
import axios from "axios";
import Lastpage from "./Components/Lastpage/Lastpage";
import { useState, useMemo } from "react";
const App = () => {
  const [dark, setDark] = useState(false)
  const [number, setnumber] = useState(10)

  const ThemeConfiguration = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  }



  const doubler = useMemo(() => { return sumNumbers(number) }, [number])


  return (
    <div style={ThemeConfiguration} className="app">
      <button style={ThemeConfiguration} onClick={() => setDark(!dark)}>Change Theme</button>

      <div className="section">
        <Navbar />
        <Market />
        <Choose />
        <Joinus />
      </div>
      <Lastpage />
      <input type="number" onChange={(e) => setnumber(e.target.value)} />
      <h1 style={{ color: "red" }}>{doubler}</h1>
    </div>
  );
};

export default App;


function sumNumbers(num) {
  return num * 2
}