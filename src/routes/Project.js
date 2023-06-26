import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import PricingCard from "../components/PricingCard";
import Work from "../components/Work";
import "./project.css";


const Project = () => {
  return <div>
    <Navbar/>
    <HeroImg2 heading = "PROJECTS" text = "Some of my Projects" />
    <div className="sum">
      <p>Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>
    </div>
    {/* <p>Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</p> */}
    <Work/>
    {/* <PricingCard/> */}
    <Footer/>
  </div>;
};

export default Project;
