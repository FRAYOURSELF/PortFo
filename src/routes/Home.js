import React from 'react'
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
import Bubble from "../components/bubbleForHome";
import Inspo from "../components/inspo";
import Social from "../components/social";
import Techstack from '../components/techstack';
import Infoathome from '../components/infoathome';


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Bubble/>
      <Inspo/>
      <Infoathome/>
      <Social/>
      
      <Footer/>
    </div>
  )
}

export default Home
