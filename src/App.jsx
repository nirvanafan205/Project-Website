import React, { useRef } from "react";
import ReactDOM from "react-dom";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import ProjectInfo from "./Components/ProjectInfo";
import HeroSection from "./Components/HeroSection";
import Purpose from "./Components/Purpose";
import Gallery from "./Components/Gallery";
import Navbar from "./Components/Navbar";
import "./style.css";

const App = () => {
  const aboutUsRef = useRef(null);
  const galleryRef = useRef(null);
  const purposeRef = useRef(null);
  const projectInfoRef = useRef(null);

  const scrollToRef = (ref) => () =>
    ref.current.scrollIntoView({ behavior: "smooth" });

  return (
    <>
    <Navbar scrollToRefs={{
        scrollToGallery: scrollToRef(galleryRef),
        scrollToAboutUs: scrollToRef(aboutUsRef),
        scrollToPurpose: scrollToRef(purposeRef),
        scrollToProjectInfo: scrollToRef(projectInfoRef),
      }} />
      <HeroSection />
      <AboutUs ref={aboutUsRef} />
      <Purpose ref={purposeRef} />
      <Gallery ref={galleryRef} />
      <ProjectInfo ref={projectInfoRef} />
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
