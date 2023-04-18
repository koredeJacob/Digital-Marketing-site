import React from "react"
import { Link } from "react-router-dom"
import {motion} from "framer-motion"

import "./contactbox.css"

const ContactBox = ( {buttontext,image,title,text} ) =>{
    return (
        <motion.div className="contact-card"
            initial={{opacity:0,y:110}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{duration:0.7,ease:"easeOut"}}>
            <div className="contact-card-inner"> 
                <div className="contact-card-button">
                    <Link to="#">{buttontext}</Link>
                </div>
                <div className="contact-card-lower">
                    <img src={image} loading="lazy"/>
                    <div className="contact-card-text">
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ContactBox