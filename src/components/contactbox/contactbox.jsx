import React from "react"
import { Link } from "react-router-dom"

import "./contactbox.css"

const ContactBox = ( {buttontext,image,title,text} ) =>{
    return (
        <div className="contact-card">
            <div className="contact-card-inner"> 
                <div className="contact-card-button">
                    <Link to="#">{buttontext}</Link>
                </div>
                <div className="contact-card-lower">
                    <img src={image}/>
                    <div className="contact-card-text">
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactBox