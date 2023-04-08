import React from "react";
import { Link } from "react-router-dom";

import "./blogcard.css"

const BlogCard = ({image ,buttontext,title}) =>{
    return (
        <div className="blog-card">
            <div className="blog-card-image">
                <img src={image} loading="lazy"/>
            </div>
            <div className="blog-card-meta">
                <Link>{buttontext}</Link>
                <p>MARCH 13, 2023</p>
            </div>
            <div className="blog-card-title">
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default BlogCard