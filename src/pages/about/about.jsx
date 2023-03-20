import React from "react";
import { Link } from "react-router-dom";

import desktop from "../../assets/aboutimages/desktop.png"
import atsymbol from "../../assets/homeimages/atsymbol.png"
import bullseye from "../../assets/homeimages/pattern.png"
import megaphone from "../../assets/services-images/megaphone.png"
import handshake from "../../assets/aboutimages/handshake.png"
import person1 from "../../assets/aboutimages/person1.jpg"
import person2 from "../../assets/aboutimages/person2.jpg"
import person3 from "../../assets/aboutimages/person3.jpg"
import Nav from "../../components/navigation/navigation"
import Banner from "../../components/banner/banner"
import Header from "../../components/header/header"
import Stats from "../../components/stats/stats"
import TeamCard from "../../components/teamcard/teamcard";
import "./about.css"

function AboutUs(){
    return (
        <div >
            <header className="services-hero">
                <Nav/>
                <div className="banner-container">
                    <Banner/>
                </div>
            </header>
            <div className="about-stats">
                <div className="wrapper"><Stats addborder={false}/></div>
            </div>
            <div className="aboutus-about-wrapper">
                <div className="aboutus-about-content">
                    <div className="desktop">
                        <img src={desktop} loading="lazy"/>
                    </div>
                    <div className="aboutus-about-words">
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
                    </div>
                </div>
            </div>
            <div className="aboutus-team">
                <Header spantext=" O3. OUR TEAM" image={handshake} content="Our team of expert marketers"/>
                <div className="aboutus-team-container">
                    <TeamCard name="Vincie Vincent" role="Lead Manager" picture={person1}/>
                    <TeamCard name="Richard Walsh" role="Co-Founder" picture={person2}/>
                    <TeamCard name="Elspeth Clarkson" role="Creative Director" picture={person3}/>
                </div>
            </div>
        </div>
    )
}

export default AboutUs