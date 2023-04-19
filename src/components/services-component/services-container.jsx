import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./services-container.css"
import mobilephone from "../../assets/services-images/mobilephone.png"
import Startup from "../../assets/services-images/Startup.png"
import Megaphone from "../../assets/services-images/Megaphone.png"
import marketing from "../../assets/services-images/Marketing Plan.png"
import funnel from "../../assets/services-images/funnel.png"
import board from "../../assets/services-images/board.png"
import settings from "../../assets/services-images/settings.png"
import blue from '../../assets/services-images/Vector (1).png'
import ServicesGrid from "../../components/services-component/services-grid"

const ServicesContainer = ()=>{
    return (
        <div className="home-services">
            <div className="wrapper">
                <ServicesHeading titletext="High-impact digital services to take your business to the next level" spantext="01 . SERVICES"
                image={settings} buttontext="Our Services" light={true}/>
                <div className="services-content">
                    <ServicesGrid image={mobilephone} sub='Social Media Marketing' text='Lorem ipsum dolor sit dilimi amet consectetur adipisicing elit. Harum eligendi aliquid doloribus?'/>
                    <ServicesGrid image={Megaphone} sub='Paid Advertising' text='Lorem ipsum dolor sit dilimi amet consectetur adipisicing elit. Harum eligendi aliquid doloribus?'/>
                    <ServicesGrid image={board} sub='Advanced Analytics' text='Lorem ipsum dolor sit dilimi amet consectetur adipisicing elit. Harum eligendi aliquid doloribus?'/>
                    <ServicesGrid image={Startup} sub='SEO Optimization' text='Lorem ipsum dolor sit dilimi amet consectetur adipisicing elit. Harum eligendi aliquid doloribus?'/>
                    <ServicesGrid image={funnel} sub='Funnel Optimization' text='Lorem ipsum dolor sit dilimi amet consectetur adipisicing elit. Harum eligendi aliquid doloribus?'/>
                    <ServicesGrid image={marketing} sub='Content Marketing' text='Lorem ipsum dolor sit dilimi amet consectetur adipisicing elit. Harum eligendi aliquid doloribus?'/>
                </div>
            </div>
        </div>
    )

}

export const ServicesHeading=({titletext, image,buttontext,spantext,light})=>{
    
    return (<motion.div className="services-heading" 
                    initial={{opacity:0,x:"-20%"}} 
                    whileInView={{opacity:1,x:0}}
                    viewport={{once:true}}
                    transition={{duration:0.7,ease:"easeOut"}}>
                    <div className="services-title">
                        <div className="info-div">
                            <img src={image} loading='lazy'/>
                            <div className="title">
                                <p className="title-sub" style={light ?{color:"#d0d0d0"}:{color:"#292930"}}> <span style={light ?{color:"#ffdc60"}:{color:"#5956e8"}}>/ / </span> {spantext}</p>
                                <h2 className="title-text" style={light ?{color:"#fff"}:{color:"#292930"}}>{titletext}</h2>
                            </div>
                        </div>
                        <Link to="#" className={`services-button ${light? "light" : "dark"}`}> 
                            <div>{buttontext}</div>
                            <img src={blue} className="arrow icon"/>
                        </Link>           
                    </div>
                </motion.div>)
}

export default ServicesContainer