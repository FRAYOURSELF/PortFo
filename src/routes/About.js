import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Bubble from "../components/bubble";
import AboutContent from "../components/AboutContent";
import Scientist from '../components/scientist';
import NotInvented from './../components/notInvented';
import Disclaimer from '../components/disclaimer';
const About = () => {
  return (
    <div>
      <Navbar/>
      <Bubble/>
      
      <NotInvented/>
      <Disclaimer/>
      <Scientist/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
