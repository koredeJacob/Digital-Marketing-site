import React from "react";
import {motion} from "framer-motion"

import handshake from "../../assets/aboutimages/handshake.png"
import phone from "../../assets/aboutimages/phone 2.png"
import location from "../../assets/aboutimages/location.png";
import envelope from "../../assets/aboutimages/envelope 2.png"
import faq from "../../assets/aboutimages/faq.png"
import Nav from "../../components/navigation/navigation";
import Banner from "../../components/banner/banner";
import Header from "../../components/header/header";
import ContactBox from "../../components/contactbox/contactbox";
import Subscribe from "../../components/subscribe/subscribe"
import Footer from "../../components/footer/footer"
import "./contactus.css"
import Accordion from "../../components/accordion/accordion";


const accordion_items=[{header:"Can i cancel or change my order?",text:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit veritatis sit ipsum possimus, consectetur ipsam aliquid sint nisi, voluptatum minima mollitia."},
                        {header:"What's your support line to call to ask questions?",text:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit veritatis sit ipsum possimus, consectetur ipsam aliquid sint nisi, voluptatum minima mollitia."},
                        {header:"I have a promotional or discount code?",text:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit veritatis sit ipsum possimus, consectetur ipsam aliquid sint nisi, voluptatum minima mollitia."},
                        {header:"Can i integrate my store with Facebook?",text:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit veritatis sit ipsum possimus, consectetur ipsam aliquid sint nisi, voluptatum minima mollitia."},
                        {header:"Where is my order? Quisque molestie",text:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit veritatis sit ipsum possimus, consectetur ipsam aliquid sint nisi, voluptatum minima mollitia."}
                    ]

function ContactUs(){
    return (
        <div>
            <header className="services-hero" style={{background: "linear-gradient(111.23deg, #F5E9FF 9.95%, #FFDBD5 85.17%)"}}>
                <Nav page="contact"/>
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
            <motion.div className="contactus-form"
                initial={{opacity:0,y:110}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                transition={{duration:0.7,ease:"easeOut"}}>
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
            </motion.div>
            <Subscribe/>
            <div className="contactus-accordion-container">
               <Header image={faq} spantext="02 . FAQ" light={false} content="Frequently Asked Questions"/>
               <motion.div
                initial={{opacity:0,y:110}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                transition={{duration:0.7,ease:"easeOut"}}>
                    <Accordion items={accordion_items} light={true}/>
                </motion.div>
            </div>
            <Footer/>
        </div>
    )
}

export default ContactUs