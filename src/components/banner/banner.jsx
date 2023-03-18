import React from "react"

import "./banner.css"

const Banner=({first,second,third})=>{
    return (
        <div className="banner-overlay">
            <div className="banner-center-circle">
                <h1 className="banner-circle-text">About <span style={{color:"#5956e8"}}>Us</span></h1>
            </div>
            <div className="banner-circle-first" style={{ backgroundColor:"#FFFA76"}}></div>
            <div className="banner-circle-second" style={{ backgroundColor:"#E326AE"}}></div>
            <div className="banner-circle-third" style={{   backgroundColor:"#ffc4bb"}}></div>
        </div>
    )
}

export default Banner