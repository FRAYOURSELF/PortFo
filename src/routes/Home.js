import React from 'react'
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
import Bubble from "../components/bubbleForHome";
import Inspo from "../components/inspo";
import Social from "../components/social";
import Spots from "../components/spotschase";
import Selfimage from '../components/selfimage';
import Rock from "../components/Rock";
import Disclaimer from '../components/disclaimer';
import Hippo from '../components/hippo';
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
      <Disclaimer/>
      <Hippo/>
      <Rock/>
      <Selfimage/>
      <Spots/>
      {/* <HeroImage/> */}
      
      <Footer/>
    </div>
  )
}

export default Home
