import React from "react";

const ServicesGrid=({image,sub,text})=>{
    return(<div className="services-card">
                <div className="card-image-circle">
                    <img className="card-image" src={image}/>
                </div>
                <div className="card-info">
                    <h1 className="card-sub">{sub}</h1>
                    <p className="card-text">{text}</p>
                </div>
                <div className="card-button">Read More</div>    
        </div>
    )
}

export default ServicesGrid