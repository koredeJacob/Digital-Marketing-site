import React from "react"
import { motion } from "framer-motion"

import "./header.css"

const Header=({image,spantext,content ,light})=>{
     return (
        <motion.div className="process-header"
            initial={{opacity:0,y:110}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{duration:0.7,ease:"easeOut"}}>
            <img src={image} alt="header icon" loading="lazy"/>
            <div className="process-info">
                <p className="process-text" style={light ?{color :"#d0d0d0"}:{color:"#292930"}}>
                    <span style={{color:'#5956e8'}}>// </span>
                    {spantext}
                </p>
                <h2 style={light ?{color :"#fff"}:{color:"#292930"}}>{content}</h2>
            </div>
        </motion.div>
     )
}

export default Header