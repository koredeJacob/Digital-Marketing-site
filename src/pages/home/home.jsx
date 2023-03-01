import React from "react";
import { Link } from "react-router-dom";

import Nav from "../../components/navigation/navigation"
import monitor from "../../assets/pattern (3).png"
import check from "../../assets/pattern (1).png"
import bullseye from "../../assets/pattern.png"
import star from "../../assets/star.png"
import phoneabout from "../../assets/phoneaboutus.png"
import atsymbol from "../../assets/atsymbol.png"
import abouticon from "../../assets/abouticon.png"
import abouticon2 from "../../assets/abouticon2.png"

import "./home.css"


import ServicesContainer from "../../components/services-component/services-container";

function Home(){
    return(
        <div>
            <div className="hero">
                <Nav/>
                <div className="banner">
                    <div className="banner-content">
                        <p className="agency-text" style={{margin:'0px'}}>
                            <span style={{color:'#fec90c'}}>// </span>
                            AGENCY
                        </p>
                        <h1 style={{margin:'0px'}} className="banner-text">A Fully Integrated Digital 
                            <span style={{color:'#5956e8'}}> Marketing </span>Agency
                        </h1>
                        <p style={{margin:'0px'}} className='dummy-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde autem 
                        mazim mundi debitis deserunt fuga id architecto, quasi iusto eius pluto.</p>
                        <div className="banner-buttons">
                            <Link to="" className="banner-getstarted">Get Started</Link>
                            <Link to="/services" className="banner-services">Services</Link>
                        </div>
                    </div>
                    <div className="banner-image">
                        <img src={monitor} className="monitor" alt="monitor photo"/>
                        <img src={check} className="check" alt="check mark"/>
                        <img src={bullseye} className="bullseye" alt="bullseye"/>
                        <img src={star} className="star" alt="star"/>
                    </div>
                </div>
                <div className="banner-circle"></div>
            </div>
            <ServicesContainer/>
            <div className="home-about">
                <div className="about-image-container">
                    <img className="about-image" src={phoneabout} loading="lazy"/>
                </div>
                <div className="about-container">
                    <div className="about-sub">
                        <img src={atsymbol} className="at-symbol" loading="lazy"/>
                        <div className="about-title">
                            <p className="about-info"> <span>// </span> 02. ABOUT US</p>
                            <h2>The #1  number digital services company</h2>
                        </div>
                    </div>
                    <div style={{width:'100%', border:'1px solid #cfcfcf'}}></div>
                    <p className="about-text"> Lorem ipsum dolor si
                        t amet consectetur adipisicing elit. Facere vel iure natus veritatis doloribus vero quae fugiat odio repellendus, omnis consequatur id sit nihil 
                        accusantium! Cum odit asperiores beatae voluptates 
                        quaerat consectetur? Ullam, iure.
                    </p>
                    <div className="about-point">
                        <div className="points">
                            <img src={abouticon2 }/>
                            <div className="point-container">
                                <h3 className="point-header">Guaranteed Results</h3>
                                <div className="linebreaker"/>
                                <p className="point-text">Lorem ipsum dolor, sit amet consectetur 
                                adipisicing elit. Et eveniet nihil non? Adipisci provident debitis dicta illo.</p>
                            </div>
                        </div>
                        <div className="points" style={{marginTop:'25px'}}>    
                            <img src={abouticon}/>
                            <div className="point-container">
                                <h3 className="point-header">Team Of Industry Experts</h3>
                                <div className="linebreaker"/>
                                <p className="point-text">Lorem ipsum dolor, sit amet consectetur 
                                adipisicing elit. Et eveniet nihil non? Adipisci provident debitis dicta illo.</p>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Home