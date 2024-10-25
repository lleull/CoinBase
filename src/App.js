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


  return (
    <div style={ThemeConfiguration} className="app">

      <div className="section">
        <Navbar />
        <Market />
        <Choose />
        <Joinus />
      </div>
      <Lastpage />

    </div>
  );
};

export default App;


function sumNumbers(num) {
  return num * 2
}