import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Bubble from "../components/bubble";
import AboutContent from "../components/AboutContent";
import Scientist from '../components/scientist';
import Disclaimer from '../components/disclaimer';
import Rock from "../components/Rock";
const About = () => {
  return (
    <div>
      <Navbar/>
      <Bubble/>
      <Disclaimer/>
      <Scientist/>
      <Rock/>
      {/* <AboutContent/> */}
      <Footer/>
    </div>
  )
}

export default About
