import React from "react"
import { Link } from "react-router-dom"

import excluded from "../../assets/homeimages/excluded.png"
import included from "../../assets/homeimages/included.png"
import "./pricingcomponent.css"

const Pricing=({items, index})=>{
    return(
        <div className="pricing-card" style={index===1?{backgroundColor:"#292930",color:"#fff"}:{backgroundColor:"#f7f7f7",color:"#555"}}>
            <div className="pricing-card-header" style={index===1?{color:"#fff"}:{color:"#292930"}}>
                <div className="pricing-card-image">
                    <img src={items.image} loading="lazy" alt="pricing icon"/>
                </div>
                <div className="pricing-card-title">
                    <p>{items.plan}</p>
                    <h3>${items.price} <sub className="pricing-subscript">/Per Month</sub></h3>
                </div>
            </div>
            <div className="pricing-points">{items.pricing_content.map((item,i)=>{
                return(
                    <div key={i} className="pricing-point-item">
                        <img src={item.selected?included:excluded} loading="lazy" alt="option included"/>
                        <p>{item.description}</p>
                    </div>)
            })}</div>
            <div>
                <Link to="#" className={`pricing-button ${index===1?"popular":"unpopular"}`} >Purchase Plan</Link>
            </div>
        </div>
    )
}

export default Pricing