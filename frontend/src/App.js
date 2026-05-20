import React from "react";
import "./App.css";
import Header from "./components/Header";
import NewHero from "./components/NewHero";
import NewAbout from "./components/NewAbout";
import Experience from "./components/Experience";
import NewProjects from "./components/NewProjects";
import NewSkills from "./components/NewSkills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App relative">
      <Header />
      <NewHero />
      <NewAbout />
      <Experience />
      <NewProjects />
      <NewSkills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
