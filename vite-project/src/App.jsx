import React from "react"
import Navbar from "./components/Navbar/Navbar"
import "./App.css"
import HeroSection from "./components/Section1/HeroSection"
function App() {
 

  return (
    <React.Fragment>
    <header>
    <Navbar/>
    </header>
    
    <main>
      <HeroSection/>
    </main>
    </React.Fragment>
  )
}

export default App
