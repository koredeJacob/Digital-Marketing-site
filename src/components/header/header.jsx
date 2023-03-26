import React from "react"
import "./header.css"

const Header=({image,spantext,content ,light})=>{
     return (
        <div className="process-header">
            <img src={image} loading="lazy" alt="header icon"/>
            <div className="process-info">
                <p className="process-text" style={light ?{color :"#fff"}:{color:"#292930"}}>
                    <span style={{color:'#5956e8'}}>// </span>
                    {spantext}
                </p>
                <h2 style={light ?{color :"#fff"}:{color:"#292930"}}>{content}</h2>
            </div>
        </div>
     )
}

export default Header