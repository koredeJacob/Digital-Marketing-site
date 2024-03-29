import React from "react"
import { Link } from "react-router-dom"
import {motion} from "framer-motion"

import logo from "../../assets/homeimages/logo white.png"
import megaphone from "../../assets/homeimages/megaphonefooter.png"
import utilities from "../../assets/homeimages/utilities.png"
import phone from "../../assets/homeimages/phone.png"
import location from "../../assets/homeimages/location.png"
import follows from "../../assets/homeimages/follows.png"
import pages from "../../assets/homeimages/pages.png"

import "./footer.css"

const Footer=()=>{
    return (
        <div className="footer-container">
            <motion.div className="subscribe-box"
                initial={{opacity:0,y:110}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                transition={{duration:0.7,ease:"easeOut"}}>
                <div className="footer-logo">
                    <img src={logo} loading="lazy" alt="company logo"/>
                </div>
                <div className="footer-megaphone">
                    <img src={megaphone} loading="lazy" alt="megaphone icon"/>
                </div>
                <div className="subscribenow">
                    <h3>Subscribe Now</h3>
                    <p>We assists in all aspects to let your page in first.</p>
                </div>
                <div>
                    <form onSubmit={(e)=>e.preventDefault()} className="footer-form">
                        <input type="text" placeholder="Enter Your Email..." className="text-input"/>
                        <input type="submit" value="Subscribe" className="form-button"/>
                    </form>
                </div>
            </motion.div>
            <div className="footer-content">
                <motion.div className="contact-info"
                    initial={{opacity:0,y:110}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once:true}}
                    transition={{duration:0.7,ease:"easeOut"}}>
                    <div className="phone">
                        <div className="phone-header">
                            <img src={phone} alt="phone" loading="lazy"/>
                            <h3>Get in touch with us</h3>
                        </div>
                        <Link className="number">+1 123 456 789</Link>
                        <p>promote@marketing.com</p>
                    </div>
                    <div className="address">
                        <div className="address-header">
                            <img src={location} alt="location icon" loading="lazy"/>
                            <h3>Location</h3>
                        </div>
                        <p className="office-address">10 Sun House, 65 Riving 2nd street, New York, USA.</p>
                        <p>Location</p>
                    </div>
                </motion.div>
                <div className="features">
                    <motion.div className="pages"
                        initial={{opacity:0,y:110}}
                        whileInView={{opacity:1,y:0}}
                        viewport={{once:true}}
                        transition={{duration:0.7,ease:"easeOut"}}>
                        <div className="section-header">
                            <img src={pages} alt="pages icon" loading="lazy"/>
                            <h3>Pages</h3>
                        </div>
                        <div className="items-list">
                            <Link to="#">Home</Link>
                            <Link to="#">About</Link>
                            <Link to="#">Blog</Link>
                            <Link to="#">Case Study</Link>
                            <Link to="#">Services</Link>
                            <Link to="#">Contact</Link>
                        </div>
                    </motion.div>
                    <motion.div className="utilities"
                        initial={{opacity:0,y:110}}
                        whileInView={{opacity:1,y:0}}
                        viewport={{once:true}}
                        transition={{duration:0.7,ease:"easeOut"}}>
                        <div className="section-header">
                            <img src={utilities} alt="utilities icon" loading="lazy"/>
                            <h3>Utility Pages</h3>
                        </div>
                        <div className="items-list">
                            <Link to="#">Styleguide</Link>
                            <Link to="#">Licenses</Link>
                            <Link to="#">Changelog</Link>
                            <Link to="#">Not Found</Link>
                            <Link to="#">Password Protected</Link>
                        </div>
                    </motion.div>
                    <motion.div className="follows"
                        initial={{opacity:0,y:110}}
                        whileInView={{opacity:1,y:0}}
                        viewport={{once:true}}
                        transition={{duration:0.7,ease:"easeOut"}}>
                        <div className="section-header">
                            <img src={follows} alt="follows" loading="lazy"/>
                            <h3>Follows</h3>
                        </div>
                        <div className="items-list">
                            <Link to="#">Facebook</Link>
                            <Link to="#">Twitter</Link>
                            <Link to="#">Instagram</Link>
                            <Link to="#">LinkedIn</Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )

}

export default Footer