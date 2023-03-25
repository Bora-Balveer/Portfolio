import "./FooterStyles.css";

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
                    <p>123 Housing Society</p>
                    <p>Uttarakhand.</p>
                </div>
            </div>

            <div className="phone">
            <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>1-2323-343-23</h4>
            
            </div>

            <div className="email">
            <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>ballu@gmail.com</h4>
            
            </div>


        </div>

        <div className="right">
            <h4>About the Company </h4>
            <p>this is ballu . the fronend devloper .
            I am a student and i am currentry doing new thing</p>

            <div className="social"> 

            <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/>

            <FaGithub size={30} style={{color:"#fff", marginRight:"1rem"}}/>

            <FaInstagram size={30} style={{color:"#fff", marginRight:"1rem"}}/>

            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Footer
