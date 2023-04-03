import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import Popcorn from "./projectsName/Popcorn";
import Delivery from "./projectsName/Delivery";
import Secure from "./projectsName/secure";
import Mrq from "./projectsName/mrque";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/poPCorn" element={<Popcorn/>} />
        <Route path="/delivery" element={<Delivery/>} />
        <Route path="/mrq" element={<Mrq/>} />
        <Route path="/secure" element={<Secure/>} />
      </Routes>
    </>
  );
}

export default App