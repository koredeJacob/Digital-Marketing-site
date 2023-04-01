import React from "react"

import "./subscribe.css"

const Subscribe=()=>{
    return(
        <div className="subscribe-container">
            <div className="subscribe-title">
                <h3>Subscribe to our <span>newsletter</span></h3>
            </div>
            <div className="subscribe-component-form">
                <form>
                    <input type="text" placeholder="Enter Your Email..."/>
                    <input type="submit"/>
                </form>
            </div>
            <img/>
        </div>
    )
}

export default Subscribe