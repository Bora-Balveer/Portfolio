import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
// import React1 from "../assets/react1.png";
// import React2 from "../assets/react2.jpg";
import React1 from "../assets/react3.jpg";
import React2 from "../assets/react4.avif";

const AboutContent = () => {
  
    const skills = [
      'HTML',
      'CSS',
      'JavaScript',
      'ReactJS',
      'NodeJS',
      'MongoDB',
      'C++',
      
      // add more skills here
    ];
  return (
    
    <div className="about">
      <div className="left">
        <h1>My Skills</h1>
        <p>
        
        


    <section className="skills">
      {/* <h2>Skills</h2> */}
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <svg viewBox="0 0 24 24">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.4 15.4c-.4.4-1 .4-1.4 0l-4-4c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.3 2.3 6.3-6.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-7 7z" />
            </svg>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </section>


        
        </p>
        
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
