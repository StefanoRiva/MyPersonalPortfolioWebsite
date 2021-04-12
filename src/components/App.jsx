import React from "react";
import NavBar from "./NavBar/NavBar";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Skills />
      <About />
      <Contact />
      <Footer/>
    </div>);
}

export default App;
