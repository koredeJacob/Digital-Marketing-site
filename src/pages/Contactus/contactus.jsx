import React from "react";

import handshake from "../../assets/aboutimages/handshake.png"
import phone from "../../assets/aboutimages/phone 2.png"
import location from "../../assets/aboutimages/location.png";
import envelope from "../../assets/aboutimages/envelope 2.png"
import Nav from "../../components/navigation/navigation";
import Banner from "../../components/banner/banner";
import Header from "../../components/header/header";
import ContactBox from "../../components/contactbox/contactbox";
import Subscribe from "../../components/subscribe/subscribe"
import Footer from "../../components/footer/footer"
import "./contactus.css"

function ContactUs(){
    return (
        <div>
            <header className="services-hero" style={{background: "linear-gradient(111.23deg, #F5E9FF 9.95%, #FFDBD5 85.17%)"}}>
                <Nav/>
                <div className="banner-container">
                    <Banner text="Let's Talk" bluetext="" first= "#D9D9D9" second="#DDFF7C" third="#FFC4BB"/>
                </div>
            </header>
            <div className="contactus-contact-container">
                <div className="contactus-contact-header">
                    <Header image={handshake} spantext="01 . CONTACT US" content="Let's market awesome together" light={false}/>
                </div>
                <div className="contactus-cards">
                    <ContactBox image={envelope} buttontext="Contact" title="Email" text="nextlevel@marketing.com"/>
                    <ContactBox image={phone} buttontext="Call" title="Phone" text="+1 123 456 789"/>
                    <ContactBox image={location} buttontext="Office" title="Location" text="10 Sunhouse Street, New York, USA."/>
                </div>
            </div>
            <div className="contactus-form">
                <div className="contactus-form-inner">
                    <form onSubmit={(e)=>e.preventDefault()} className="contactus-contact-form">
                        <div className="contactus-formsection">
                            <div className="formsection-child">
                                <label htmlFor="name">Full Name *</label>
                                <input type="text" placeholder="Your Name" name="name"/>
                            </div>
                            <div className="formsection-child">
                                <label htmlFor="email">Your Email *</label>
                                <input type="email" placeholder="example@youreamail.com" name="email"/>
                            </div>
                        </div>
                        <div className="contactus-formsection">
                            <div className="formsection-child">
                                <label htmlFor="company">company *</label>
                                <input type="text" placeholder="Your Company Name" name="company"/>
                            </div>
                            <div className="formsection-child">
                                <label htmlFor="subject">Subject *</label>
                                <input type="text" placeholder="How Can We Help" name="subject"/>
                            </div>
                        </div>
                        <div className="contactus-form-message">
                            <div className="form-message">
                                <label htmlFor="message">Message *</label>
                                <textarea placeholder="Hello there,I would like to talk about how to..." maxLength={5000}/>
                            </div>
                        </div>
                        <div className="contactus-form-button">
                            <input type="submit" value="Send Message" />
                        </div>
                    </form>
                </div>
            </div>
            <Subscribe/>
            <Footer/>
        </div>
    )
}

export default ContactUs