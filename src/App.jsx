import React from "react";
import ReactDOM from "react-dom";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import "./style.css";

const App = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
