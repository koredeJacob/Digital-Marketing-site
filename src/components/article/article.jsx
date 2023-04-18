import React from "react"
import { Link } from "react-router-dom"
import {motion} from "framer-motion"

import vector from "../../assets/services-images/vector (1).png"
import "./article.css"

const Article=({image,date,title,background,reverse})=>{
    return(
        <motion.div className="article-container" style={{backgroundColor:background}}
            initial={{opacity:0,y:110}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{duration:0.7,ease:"easeOut"}}>
            <div className="article-image" style={reverse?{order:2}:{}}>
                <img className="cover-image" src={image} alt="article cover" loading="lazy"/>
            </div>
            <div className="article-content" style={reverse?{order:1}:{}}>
                <div className="article-meta">
                    <Link style={{fontSize:"18px"}}>Content</Link>
                    <p>{date}</p> 
                </div>
                <div className="article-info">
                    <h4>{title}</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Odit, nemo totam. Corporis neque vero nihil distinctio veritatis 
                        architecto nemo laborum pariatur.
                    </p>
                </div>
                <div className="article-button">
                    <Link >
                        <p>View More</p>
                        <img src={vector} style={{width:"14px",height:"14px"}}/>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default Article