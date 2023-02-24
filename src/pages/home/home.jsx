import React from "react";
import { Link } from "react-router-dom";

import Nav from "../../components/navigation/navigation"
import monitor from "../../assets/pattern (3).png"
import check from "../../assets/pattern (1).png"
import bullseye from "../../assets/pattern.png"
import star from "../../assets/star.png"
import mobilephone from "../../assets/services-images/mobilephone.png"
import Startup from "../../assets/services-images/Startup.png"
import Megaphone from "../../assets/services-images/Megaphone.png"
import marketing from "../../assets/services-images/Marketing Plan.png"
import funnel from "../../assets/services-images/funnel.png"
import board from "../../assets/services-images/board.png"
import settings from "../../assets/services-images/settings.png"
import blue from '../../assets/services-images/vector (1).png'

import "./home.css"
import ServicesGrid from "../../components/services-component/services-grid"

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
            <div className="home-services">
                <div className="services-heading">
                    <div className="services-title">
                        <img src={settings} loading='lazy'/>
                        <div className="title">
                            <p className="title-sub"> <span>/ / </span> 01 . SERVICES</p>
                            <h2 className="title-text">High-impact digital services to take your business to the next level</h2>
                        </div>
                        <Link to="#" className="services-button"> 
                            <div>Our Services</div>
                            <img src={blue}/>
                        </Link>           
                    </div>
                </div>
                
                <div className="services-content">
                    <ServicesGrid image={mobilephone} sub='Social Media Marketing' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eligendi aliquid doloribus?'/>
                    <ServicesGrid image={Megaphone} sub='Paid Advertising' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eligendi aliquid doloribus?'/>
                    <ServicesGrid image={board} sub='Advanced Analytics' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eligendi aliquid doloribus?'/>
                    <ServicesGrid image={Startup} sub='SEO Optimization' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eligendi aliquid doloribus?'/>
                    <ServicesGrid image={funnel} sub='Funnel Optimization' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eligendi aliquid doloribus?'/>
                    <ServicesGrid image={marketing} sub='Content Marketing' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eligendi aliquid doloribus?'/>
                </div>
            </div>
        </div>
    )
}

export default Home