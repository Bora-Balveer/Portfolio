import "./HeroImgStyles.css";

import React from 'react';
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";


const HeroImg = () => {
  return (
    <div className="hero">

    <div className="mask">
    <img className="into-img " src={IntroImg} alt="introImg"/>
    </div>
    <div className="content">
    <p>HI.., I'M Balveer Singh</p>
    <h1>Web Developer</h1>    
    <div>
        <button className="btn"><Link to="/project">Projects </Link></button>
        <button className="btn-light"><Link to="/contact" >Contact</Link></button>
    </div>

    </div>
      
    </div>
  )
}

export default HeroImg;
