import React from "react"
import "./header.css"

const Header=({image,spantext,content})=>{
     return (
        <div className="process-header">
            <img src={image} loading="lazy"/>
            <div className="process-info">
                <p className="process-text">
                    <span style={{color:'#5956e8'}}>// </span>
                    {spantext}
                </p>
                <h2>{content}</h2>
            </div>
        </div>
     )
}

export default Header