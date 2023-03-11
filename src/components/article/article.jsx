import React from "react"
import { Link } from "react-router-dom"

import vector from "../../assets/services-images/vector (1).png"
import "./article.css"

const Article=({image,date,title,background,reverse})=>{
    return(
        <div className="article-container" style={{backgroundColor:background}}>
            <div className="article-image" style={reverse?{order:2}:{}}>
                <img className="cover-image" src={image} alt="article cover"/>
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
        </div>
    )
}

export default Article