import "./FooterStyles.css";
import { Link } from "react-router-dom";
import React from 'react'
import {  FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>

                <div>
                    <p>Bandiya Bhatta, Kichha</p>
                    <p>Uttarakhand.</p>
                </div>
            </div>

            <div className="phone">
            <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>+91 8076524697</h4>
            
            </div>

            <div className="email">
            <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>balveersingh55626@gmail.com</h4>
            
            </div>


        </div>

        <div className="right">
            <h4>About Me</h4>
            <p>I'm a web developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest! if you're looking for a developer to add to your team, I'd love to hear from you!</p>

            <div className="social"> 
            <Link to="https://www.linkedin.com/in/balveer-singh-a73001222/">
            <FaLinkedin  size={30} style={{color:"#fff", marginRight:"1rem"}} />
            </Link>

            <Link to="https://github.com/Tech-Balveer">
            <FaGithub size={30} style={{color:"#fff", marginRight:"1rem" }}/>
            </Link>
            
            <Link to="https://www.instagram.com/bal_veer._.singh_/">
            <FaInstagram size={30} style={{color:"#fff", marginRight:"1rem"}}/>
            </Link>

            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Footer
