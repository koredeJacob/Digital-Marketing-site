import React from "react"

import rocket from "../../assets/services-images/cta ship.png"
import star from "../../assets/services-images/cta star.png"
import polygon from "../../assets/services-images/polygon 1.png"
import bullseye from "../../assets/homeimages/pattern.png"
import Banner from "../../components/banner/banner"
import Nav from "../../components/navigation/navigation"
import ServicesContainer from "../../components/services-component/services-container"
import Footer from "../../components/footer/footer"
import "./services.css"
import { Link } from "react-router-dom"

function Services(){
    return (
        <div>
            <header className="services-hero" style={{background: "linear-gradient(111.23deg, #CFD4FF 9.95%, #FFFFFD 85.17%)"}}>
                <Nav/>
                <div className="banner-container">
                    <Banner text="Services" bluetext="" first= "#7DFFE8" second="#7CFF99" third="#EDFFBB"/>
                </div>
            </header>
            <ServicesContainer/>
            <div className="services-cta">
                <div className="services-cta-title">
                    Get in touch and <span style={{color: "#5956E8"}}>start growing</span> with us today
                </div>
                <div className="services-cta-buttons">
                    <div className="services-cta-getintouch">
                        <Link to="#">Get In Touch</Link>
                    </div>
                    <div className="services-cta-getstarted">
                        <Link to="#">Get Started</Link>
                    </div>
                </div>
                <div className="services-cta-circle">
                    <div className="cta-circle-bg"></div>
                </div>
                <img className="cta-rocket" src={rocket} />
                <img className="cta-star" src={star} />
                <img className="cta-polygon" src={polygon} />
                <img className="cta-bullseye" src={bullseye} />
            </div>
            <Footer/>
        </div>
    )
}

export default Services