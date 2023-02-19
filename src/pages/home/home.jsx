import React from "react";
import { Link } from "react-router-dom";

import Nav from "../../components/navigation/navigation"
import monitor from "../../assets/pattern (3).png"
import check from "../../assets/pattern (1).png"
import bullseye from "../../assets/pattern.png"

import "./home.css"

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
                    </div>
                </div>
                <div className="banner-circle"></div>
            </div>
        </div>
    )
}

export default Home