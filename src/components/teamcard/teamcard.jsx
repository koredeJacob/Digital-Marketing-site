import React from "react"
import { motion } from "framer-motion"

import instagram from "../../assets/aboutimages/Instagram.png"
import facebook from "../../assets/aboutimages/Facebook.png"
import twitter from "../../assets/aboutimages/Twitter.png"
import "./teamcard.css"

const TeamCard=({name,role,picture})=>{
    return(
        <motion.div className="team-card"
            initial={{opacity:0,y:110}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{duration:0.7,ease:"easeOut"}}>
            <div className="team-card-image">
                <img src={picture} loading="lazy" alt="image of team member"/>
            </div>
            <div className="blue-line"></div>
            <div className="team-member-info">
                <h3>{name}</h3>
                <p>{role}</p>
            </div>
            <div className="team-socials">
                <img src={facebook} alt="facebook logo" loading="lazy"/>
                <img src={twitter} alt="twitter logo" loading="lazy"/>
                <img src={instagram} alt="instagram logo" loading="lazy"/>
            </div>
        </motion.div>
    )
}

export default TeamCard