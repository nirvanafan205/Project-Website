import ReactDOM from "react-dom";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import "./style.css";

const App = () => {
  return (
    <>
      <AboutUs />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
