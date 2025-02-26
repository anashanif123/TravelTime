import React, { useEffect } from "react";

import "aos/dist/aos.css";
import AOS from "aos";
import Navbar from "./components/Navbar/Nabar";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Animation happens only once on scroll
      easing: "ease-out", // Smooth easing
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;