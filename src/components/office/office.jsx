import React from "react"
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

import telephone from "../../assets/aboutimages/phone.png"
import envelope from "../../assets/aboutimages/envelope.png"
import "./office.css"

const Office=({flag, city, address1, address2, email, phone})=>{
    return (
        <motion.div className="office-card"
            initial={{opacity:0,y:110}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{duration:0.7,ease:"easeOut"}}>
            <div className="country-flag">
                <img src={flag} loading="lazy" alt="country flag"/>
            </div>
            <div className="office-address">
                <h3>{city}</h3>
                <p>{address1}<br/>{address2}</p>
            </div>
            <div className="office-contact">
                <div className="office-contact-item">
                    <div className="telephone">
                        <img src={telephone} alt="telephone icon"/>
                    </div>
                    <Link to="#">{phone}</Link>
                </div>
                <div className="office-contact-item">
                    <div className="envelope">
                        <img src={envelope} alt="envelope icon"/>
                    </div>
                    <Link to="#">{email}</Link>
                </div>
            </div>
        </motion.div>
    )
}

export default Office