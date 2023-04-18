import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import desktop from "../../assets/aboutimages/desktop.png"
import atsymbol from "../../assets/homeimages/atsymbol.png"
import bullseye from "../../assets/homeimages/pattern.png"
import megaphone from "../../assets/services-images/megaphone.png"
import handshake from "../../assets/aboutimages/handshake.png"
import america from "../../assets/aboutimages/america.png"
import canada from "../../assets/aboutimages/canada.png"
import person1 from "../../assets/aboutimages/person1.jpg"
import person2 from "../../assets/aboutimages/person2.jpg"
import person3 from "../../assets/aboutimages/person3.jpg"
import office from "../../assets/aboutimages/office icon.png"
import verified from "../../assets/aboutimages/verified.png"
import blue from "../../assets/services-images/Vector (1).png"
import Nav from "../../components/navigation/navigation"
import Banner from "../../components/banner/banner"
import Header from "../../components/header/header"
import Stats from "../../components/stats/stats"
import TeamCard from "../../components/teamcard/teamcard"
import Office from "../../components/office/office" 
import { ServicesHeading } from "../../components/services-component/services-container"
import Footer from "../../components/footer/footer"

import "./about.css"
import CarouselContainer from "../../components/carousel/carousel"

function AboutUs(){
    return (
        <div >
            <header className="services-hero" style={{   background: "linear-gradient(111.23deg, #F9F6DA 9.95%, #E2D5FF 85.17%)"}}>
                <Nav page="about"/>
                <div className="banner-container">
                    <Banner text="About" bluetext="us" first="#FFFA76" second="#E326AE" third="#ffc4bb"/>
                </div>
            </header>
            <div className="about-stats">
                <div className="wrapper"><Stats addborder={false}/></div>
            </div>
            <div className="aboutus-about-wrapper">
                <div className="aboutus-about-content">
                    <div className="desktop">
                        <motion.img src={desktop} loading="lazy"
                        initial={{opacity:0,x:-110}}
                        whileInView={{opacity:1,x:0}}
                        viewport={{once:true}}
                        transition={{duration:0.7,ease:"easeOut"}}/>
                    </div>
                    <motion.div className="aboutus-about-words"
                        initial={{opacity:0,x:110}}
                        whileInView={{opacity:1,x:0}}
                        viewport={{once:true}}
                        transition={{duration:0.7,ease:"easeOut"}}>
                        <div className="aboutus-about-header">
                            <div className="atsymbol">
                                <img src={atsymbol} loading="lazy"/>
                            </div>
                            <div className="aboutus-about-main">
                                <p className="aboutus-about-info"><span>//</span> 01. ABOUT US</p>
                                <h2>The #1 digital marketing services company</h2>
                            </div>
                        </div>
                        <div className="aboutus-about-subcontent">
                            <div className="aboutus-button-container">
                                <div className="aboutus-about-button">
                                    <img src={bullseye}/>
                                    <h3>Development Scale</h3>
                                </div>
                                <div className="aboutus-about-button">
                                    <img src={megaphone}/>
                                    <h3>Research & Strategy</h3>
                                </div>
                            </div>
                            <div className="aboutus-about-text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis minima quis tempore 
                                    placeat commodi debitis. Quaerat velit impedit sunt quod assumenda hic, necessitatibus eos 
                                    explicabo asperiores illum iste, odio, vitae repellendus sequi qui maxime ipsa.
                                </p>
                                <div className="getintouch">
                                    <Link>Get In Touch</Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="aboutus-services">
                <Header spantext=" 02 . OUR VALUES " image={verified} content="The core values behind our work" light={true}/>
                <CarouselContainer/>
                <motion.div className="aboutus-services-buttons"
                    initial={{opacity:0,y:110}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once:true}}
                    transition={{duration:0.7,ease:"easeOut"}}>
                    <div className="aboutus-getintouch">
                        <Link to="#">Get In Touch</Link>
                    </div>
                    <div className="aboutus-ourservices">
                        <Link to="#">
                            <div>Our Services</div>
                            <img src={blue}/>
                        </Link>
                    </div>
                </motion.div>
            </div>
            <div className="aboutus-team">
                <Header spantext=" O3 . OUR TEAM" image={handshake} content="Our team of expert marketers" light={false}/>
                <div className="aboutus-team-container">
                    <TeamCard name="Vincie Vincent" role="Lead Manager" picture={person1}/>
                    <TeamCard name="Richard Walsh" role="Co-Founder" picture={person2}/>
                    <TeamCard name="Elspeth Clarkson" role="Creative Director" picture={person3}/>
                </div>
            </div>

            <div className="aboutus-office">
                
                    <div className="office-wrapper">
                        <ServicesHeading titletext="Come visit us. We are all around the world" spantext="04 . OUR OFFICES"
                            image={office} buttontext="Get in touch" light={false}/>
                        <div className="office-container">
                            <Office flag={america} city="San Francisco, USA" address1="1650 Page. San Francisco" 
                                address2="Carlofornia(CA), 94117" phone="(414) 809 - 2514" email="contact@poromote.com"/>
                            <Office flag={canada} city="Toronto, CA" address1="6 Queens Park Cres W." 
                                address2="Toronto, Canada" phone="(414) 809 - 2598" email="contacta@poromote.com"/>
                            <Office flag={america} city="Chicago, USA" address1="1314 Oak Avenue. Chicago," 
                                address2="Illinois, 60607" phone="(414) 809 - 2494" email="contactchia@poromote.com"/>
                        </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default AboutUs