import React, { useEffect } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Reports from "./Components/Reports";
import Contact from "./Components/Contact";
import Report from "./Components/Report";
import Footer from "./Components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/reports" element={<Reports />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/report" element={<Report />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
