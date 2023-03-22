import React from "react"
import { Link } from "react-router-dom";

import telephone from "../../assets/aboutimages/phone.png"
import envelope from "../../assets/aboutimages/envelope.png"
import "./office.css"

const Office=({flag, city, address1, address2, email, phone})=>{
    return (
        <div className="office-card">
            <div className="country-flag">
                <img src={flag}/>
            </div>
            <div className="office-address">
                <h3>{city}</h3>
                <p>{address1}<br/>{address2}</p>
            </div>
            <div className="office-contact">
                <div className="office-contact-item">
                    <div className="telephone">
                        <img src={telephone}/>
                    </div>
                    <Link to="#">{phone}</Link>
                </div>
                <div className="office-contact-item">
                    <div className="envelope">
                        <img src={envelope}/>
                    </div>
                    <Link to="#">{email}</Link>
                </div>
            </div>
        </div>
    )
}

export default Office