import React from "react";

import Nav from "../../components/navigation/navigation"
import Banner from "../../components/banner/banner"
import Stats from "../../components/stats/stats"
import "./about.css"

function AboutUs(){
    return (
        <div>
            <header className="services-hero">
                <Nav/>
                <Banner/>
            </header>
            <div className="about-stats">
                <div className="wrapper"><Stats addborder={false}/></div>
            </div>
        </div>
    )
}

export default AboutUs