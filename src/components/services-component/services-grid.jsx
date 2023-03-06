import React, { useState } from "react";
import './services-grid.css'
import blue from '../../assets/services-images/vector (1).png'
import grey from '../../assets/services-images/vector.png'

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServicesGrid=({image,sub,text})=>{
    const [hover, sethover]=useState(false)

    return(<motion.div 
        className="services-card" 
        initial={{opacity:0,y:110}} 
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        transition={{duration:0.7,ease:"easeOut"}}>
                <div className="card-image-circle">
                    <img className="card-image" src={image}/>
                </div>
                <div className="card-info">
                    <h3 className="card-sub">{sub}</h3>
                    <p className="card-text">{text}</p>
                </div>
                <Link to="#" className="card-button" onMouseEnter={()=>sethover(!hover)} onMouseLeave={()=>sethover(!hover)}>
                    <div>View Services</div>
                    <img src={hover?blue:grey}/>
                </Link>    
        </motion.div>
    )
}

export default ServicesGrid