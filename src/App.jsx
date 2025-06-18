
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./portfolio/Navbar";
import Home from "./portfolio/Home";
import About from "./portfolio/About";
import Resume from "./portfolio/Resume";
import Skills from "./portfolio/Skills";
import Project from "./portfolio/Project";
import Contact from "./portfolio/Contact";
import Footer from "./portfolio/Footer";



function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main >
      <Navbar />
      <Home/>
      <About/>
      <Resume/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>

    </main>
  );
}

export default App;


