import React from 'react'
import  "./App.css"
import Navbar from './Components/navbar/Navbar'
import Market from './Components/Market/Market'
import Choose from './Components/ChooseUs/Choose'
import Joinus from './Components/Joinus/Joinus'
import Lastpage from './Components/Lastpage/Lastpage'
const App = () => {
  return (
    <div className="app">
      <div className="section">
        <Navbar/>
        <Market/>
        <Choose/>
        <Joinus/>
      </div>
      <Lastpage/>
    </div>
  )
}

export default App