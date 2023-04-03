import React from "react"

import ring from "../../assets/blogimages/ring.png"
import twirl from "../../assets/blogimages/twirl.png"
import megaphone from "../../assets/services-images/megaphone.png"
import rocket from "../../assets/services-images/startup.png"
import star from "../../assets/homeimages/star.png"
import bullseye from "../../assets/homeimages/pattern.png"
import "./subscribe.css"

const Subscribe=()=>{
    return(
        <div className="subscribe-container">
            <div className="subscribe-title">
                <h2>Subscribe to our <span className="subscribe-title-span">newsletter</span></h2>
            </div>
            <div className="subscribe-form-wrapper">
                <form className="subscribe-component-form" onSubmit={(e)=>e.preventDefault()}>
                    <input className="form-text" type="text" placeholder="Enter Your Email..."/>
                    <input className="form-submit" type="submit" value="Subscribe"/>
                </form>
            </div>
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