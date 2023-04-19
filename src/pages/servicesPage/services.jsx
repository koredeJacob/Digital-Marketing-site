import React from "react"
import {motion} from "framer-motion"

import rocket from "../../assets/services-images/cta ship.png"
import star from "../../assets/services-images/cta star.png"
import polygon from "../../assets/services-images/Polygon 1.png"
import bullseye from "../../assets/homeimages/Pattern.png"
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
                <Nav page="services"/>
                <div className="banner-container">
                    <Banner text="Services" bluetext="" first= "#7DFFE8" second="#7CFF99" third="#EDFFBB"/>
                </div>
            </header>
            <ServicesContainer/>
            <div className="services-cta">
                <motion.div className="services-cta-title"
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    viewport={{once:true}}
                    transition={{duration:0.7,ease:"easeOut"}}>
                    Get in touch and <span style={{color: "#5956E8"}}>start growing</span> with us today
                </motion.div>
                <motion.div className="services-cta-buttons"
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    viewport={{once:true}}
                    transition={{duration:0.7,ease:"easeOut"}}>
                    <div className="services-cta-getintouch">
                        <Link to="#">Get In Touch</Link>
                    </div>
                    <div className="services-cta-getstarted">
                        <Link to="#">Get Started</Link>
                    </div>
                </motion.div>
                <div className="services-cta-circle">
                    <div className="cta-circle-bg"></div>
                </div>
                <motion.img 
                    initial={{opacity:0,x:110,y:110}}
                    whileInView={{opacity:1,x:0,y:0}}
                    viewport={{once:true}}
                    transition={{duration:0.5,ease:"easeOut"}}
                    className="cta-rocket" src={rocket} loading="lazy" alt="rocket icon"/>
                <img className="cta-star" src={star} loading="lazy" alt="star icon"/>
                <img className="cta-polygon" src={polygon} />
                <motion.img className="cta-bullseye" src={bullseye} loading="lazy" alt="bulleye icon" 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                viewport={{once:true}}
                transition={{duration:0.7,ease:"easeOut"}}/>
            </div>
            <Footer/>
        </div>
    )
}

export default Services