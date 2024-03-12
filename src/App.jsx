import React from "react";
import ReactDOM from "react-dom";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import ProjectInfo from "./Components/ProjectInfo";
import HeroSection from "./Components/HeroSection";
import Purpose from "./Components/Purpose";
import "./style.css";

const App = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <ProjectInfo />
      <Purpose />
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
