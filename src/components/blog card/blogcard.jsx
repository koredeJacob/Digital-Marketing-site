import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import "./blogcard.css"

const BlogCard = ({image ,buttontext,title}) =>{
    return (
        <motion.div className="blog-card"
            initial={{opacity:0,y:110}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{duration:0.7,ease:"easeOut"}}>
            <div className="blog-card-image">
                <img src={image} loading="lazy" alt="blog image"/>
            </div>
            <div className="blog-card-meta">
                <Link>{buttontext}</Link>
                <p>MARCH 13, 2023</p>
            </div>
            <div className="blog-card-title">
                <h3>{title}</h3>
            </div>
        </motion.div>
    )
}

export default BlogCard