import React from "react";
import "./Navbar.css";
import $ from 'jquery';
/* eslint-disable jsx-a11y/anchor-is-valid */
// deploy

const Navbar = () => {

    return (
        <div className="navbar">
            
            <div className="myLogoDiv">
                <img src="Manish Kumar1_white.gif" alt="my_logo" />
            </div>

            <div className="menu">
                <i className="material-icons">menu</i>
            </div>

            <div className="leftNavbar">

                <div className="childDiv">
                    <div>
                        <a href="#about">
                            <img src="about.png" alt="about_logo"/>
                        </a>
                    </div>

                    <div className="textDiv">
                        <a href="#about">About</a>
                    </div>
                    
                </div>

                <div className="childDiv">
                    <div>
                        <a href="#mainDiv">
                            <img src="Skills.png" alt="skills_logo"/>
                        </a>
                    </div>

                    <div className="textDiv">
                        <a href="#mainDiv">Skills</a>
                    </div>
                    
                </div>

                <div className="childDiv">
                    <div>
                        <a href="#projects">
                            <img src="Projects.png" alt="projects_logo"/>
                        </a>
                    </div>

                    <div className="textDiv">
                        <a href="#projects">Projects</a>
                    </div>
                    
                </div>

                <div className="childDiv">
                    <div>
                        <a href="#contact">
                            <img src="Contact.png" alt="contact_logo"/>
                        </a>
                    </div>

                    <div className="textDiv">
                        <a href="#contact">Contact</a>
                    </div>
                    
                </div>

                <div className="childDiv">
                    <div>
                        <a href="https://drive.google.com/file/d/1t7DrAtCDUFzA-4vWzKTk2VPd9v0sTyrG/view?usp=sharing" target="_blank" rel="noreferrer">
                            <img src="Resume.png" alt="resume_logo"/>
                        </a>
                    </div>

                    <div className="textDiv">
                        <a href="https://drive.google.com/file/d/1t7DrAtCDUFzA-4vWzKTk2VPd9v0sTyrG/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

$(function() {
    $(".menu").click(function() {
        $(".leftNavbar").slideToggle(500);
    });
})

export default Navbar;