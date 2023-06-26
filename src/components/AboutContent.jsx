import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";

import React1 from "../assets/react3.jpg";
import React2 from "../assets/react4.avif";


import htmlImg from '../assets/html.png';
import cssImg from '../assets/css.png';
import jsImg from '../assets/js.png';
import reactImg from '../assets/reactjs.png';
import nodeImg from '../assets/nodejs.jpeg';
import mongoImg from '../assets/mongodb.png';


const AboutContent = () => {
  
  const frontendSkills = [
    { name: 'HTML', img: htmlImg },
    { name: 'CSS', img: cssImg },
    { name: 'JavaScript', img: jsImg }
  ];

  const backendSkills = [
    { name: 'NodeJS', img: nodeImg },
    { name: 'MongoDB', img: mongoImg },
    { name: 'ReactJS', img: reactImg },
  ];

  const renderSkills = (skills) => {
    return (
      <ul className="skills-ul">
        {skills.map((skill, index) => (
          <li key={index} className="skills-li">
            <img className="skills-img" src={skill.img} alt={skill.name} />
            <h1 className="skills-span">{skill.name}</h1>
          </li>
        ))}
      </ul>
    );
  };
  return (

    
    
    <div className="about">
      <div className="left">
        <h1>My Skills</h1>
        <section className="skills">
      <div className="skills-container">
        <div className="skills-column">
        
          {renderSkills(frontendSkills)}
        </div>
        <div className="skills-column">
          
          {renderSkills(backendSkills)}
        </div>
      </div>
    </section>

        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React2} className="img" alt="true" />
            
          </div>

          <div className="img-stack bottom">
            <img src={React1} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;





















