import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import HeroSection from "./components/Section1/HeroSection";
import Footer from "./components/Footer/Footer";
import SubsSection from "./components/Section10/SubsSection";
import BlogSection from "./components/Section9/BlogSection";
import PreviewSection from "./components/Section7/PreviewSection"
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Section4 from "./components/Section4/Section4";
import SkillsSection from "./components/Section5/SkillsSection";
import Videosection from "./components/Section6/Videosection";
import Titrs from "./components/Section8/Titrs";

function App() {
  return (
    <React.Fragment>
      <Navbar />

      <main>
        <HeroSection />
        <Section2/>
        <Section3/>
        <Section4/>
        <SkillsSection/>
        <Videosection/>
        <PreviewSection/>
        <Titrs/>
        <BlogSection />
        <SubsSection />
      </main>

      <Footer />
    </React.Fragment>
  );
}

export default App;
