import React from "react";
import { Link } from "react-router-dom";

import social2 from "../../assets/blogimages/socials 2.png"
import "./blogcard.css"

const BlogCard = ({image ,buttontext,title}) =>{
    return (
        <div className="blog-card">
            <div className="blog-card-image">
                <img src={image  || social2}/>
            </div>
            <div className="blog-card-meta">
                <Link>{buttontext || "content"}</Link>
                <p>MARCH 13, 2023</p>
            </div>
            <div className="blog-card-title">
                <h3>{title || "The Best 4 Types Of Marketing Strategies For Small Businesses"}</h3>
            </div>
        </div>
    )
}

export default BlogCard