import React from "react"
import { Link } from "react-router-dom"

import logo from "../../assets/logo white.png"
import megaphone from "../../assets/megaphonefooter.png"
import "./footer.css"

const Footer=()=>{
    return (
        <div className="footer-container">
            <div className="subscribe-box">
                <div className="footer-logo">
                    <img src={logo} loading="lazy" alt="company logo"/>
                </div>
                <div className="footer-megaphone">
                    <img src={megaphone} loading="lazy" alt="megaphone"/>
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
            </div>
            <div className="footer-content">
                <div className="contact-info">
                    <div className="phone">
                        <div className="phone-header">
                            <img/>
                            <h3>Get in touch with us</h3>
                        </div>
                        <Link className="umber">+1 123 456 789</Link>
                        <p>promote@marketing.com</p>
                    </div>
                    <div className="address">
                        <div className="address-header">
                            <img/>
                            <h3>Location</h3>
                        </div>
                        <p className="office-address">10 Sun House, 65 Riving 2nd street, New York, USA.</p>
                        <p>Location</p>
                    </div>
                </div>
                <div className="features">
                    <div className="pages">
                        <div className="pages-header">
                            <img/>
                            <h3>Pages</h3>
                        </div>
                        <div className="pages-list">
                            <Link to="#">Home</Link>
                            <Link to="#">About</Link>
                            <Link to="#">Blog</Link>
                            <Link to="#">Case Study</Link>
                            <Link to="#">Services</Link>
                            <Link to="#">Contact</Link>
                        </div>
                    </div>
                    <div className="utilities">
                        <div className="utilities-header">
                            <img/>
                            <h3>Utility Pages</h3>
                        </div>
                        <div className="utilities-list">
                            <Link to="#">Styleguide</Link>
                            <Link to="#">Licenses</Link>
                            <Link to="#">Changelog</Link>
                            <Link to="#">Not Found</Link>
                            <Link to="#">Password Protected</Link>
                        </div>
                    </div>
                    <div className="follows">
                        <div className="follows-header">
                            <img/>
                            <h3>Follows</h3>
                        </div>
                        <div className="follows-list">
                            <Link to="#">Facebook</Link>
                            <Link to="#">Twitter</Link>
                            <Link to="#">Instagram</Link>
                            <Link to="#">LinkedIn</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Footer