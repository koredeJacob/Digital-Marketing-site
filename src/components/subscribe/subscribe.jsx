import React from "react"
import {motion} from "framer-motion"

import ring from "../../assets/blogimages/ring.png"
import twirl from "../../assets/blogimages/twirl.png"
import megaphone from "../../assets/services-images/Megaphone.png"
import rocket from "../../assets/services-images/Startup.png"
import star from "../../assets/homeimages/star.png"
import bullseye from "../../assets/homeimages/Pattern.png"
import "./subscribe.css"

const Subscribe=()=>{
    return(
        <div className="subscribe-container">
            <motion.div className="subscribe-title"
                initial={{opacity:0,y:110}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                transition={{duration:0.7,ease:"easeOut"}}>
                <h2>Subscribe to our <span className="subscribe-title-span">newsletter</span></h2>
            </motion.div>
            <motion.div className="subscribe-form-wrapper"
                initial={{opacity:0,y:110}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                transition={{duration:0.7,ease:"easeOut"}}>
                <form className="subscribe-component-form" onSubmit={(e)=>e.preventDefault()}>
                    <input className="form-text" type="text" placeholder="Enter Your Email..."/>
                    <input className="form-submit" type="submit" value="Subscribe"/>
                </form>
            </motion.div>
            <img  className="subscribe-megaphone" src={megaphone} alt="megaphone icon" loading="lazy"/>
            <img  className="subscribe-rocket" src={rocket} alt="rocket icon" loading="lazy"/>
            <img  className="subscribe-bullseye" src={bullseye} alt="bullseye icon" loading="lazy"/>
            <img  className="subscribe-star" src={star} alt="star icon" loading="lazy"/>
            <img  className="subscribe-twirl" src={twirl} alt="twirl icon" loading="lazy"/>
            <img  className="subscribe-ring" src={ring} alt="ring icon" loading="lazy"/>
        </div>
    )
}

export default Subscribe