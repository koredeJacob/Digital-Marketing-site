import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Nav from "../../components/navigation/navigation"
import monitor from "../../assets/pattern (3).png"
import check from "../../assets/pattern (1).png"
import bullseye from "../../assets/pattern.png"
import star from "../../assets/star.png"
import phoneabout from "../../assets/phoneaboutus.png"
import atsymbol from "../../assets/atsymbol.png"
import abouticon from "../../assets/abouticon.png"
import abouticon2 from "../../assets/abouticon2.png"
import ladder from "../../assets/ladder.png"
import charts from "../../assets/charts.png"
import graphics from "../../assets/graphics.png"
import notification from "../../assets/notification.png"
import redicon from "../../assets/red icon.png"
import keyboard from "../../assets/keyboard.jpg"
import ServicesContainer from "../../components/services-component/services-container";
import dollars from "../../assets/dollars.png"
import coin from "../../assets/coin.png"
import settings from "../../assets/settings.png"
import startup from "../../assets/services-images/Startup.png"
import { ServicesHeading } from "../../components/services-component/services-container";
import Header from "../../components/header/header";
import Accordion from "../../components/accordion/accordion";
import Pricing from "../../components/pricing/pricingcomponet";
import "./home.css"


const Accordionitems=[
    {header:"Online Media Management",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae\
    laborum facilis hic alias dolorum repellendus\
    obcaecati dolorem eligendi, saepe fugit, mollitia perspiciatis sit culpa?"},

    {header:"Experential Marketing",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae\
    laborum facilis hic alias dolorum repellendus\
    obcaecati dolorem eligendi, saepe fugit, mollitia perspiciatis sit culpa?"},

    {header:"Email Marketing",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae\
    laborum facilis hic alias dolorum repellendus\
    obcaecati dolorem eligendi, saepe fugit, mollitia perspiciatis sit culpa?"}]

const pricingitems=[{plan:"Starter", image:settings,price:"29",pricing_content:[{description:"Email Marketing content",selected:true},
                     {description:"Marketing Voice",selected:true},
                     {description:"Optimize SEO",selected:true},
                     {description:"Consulting Video",selected:false},
                     {description:"Marketing Advertising",selected:false}]},

                     {plan:"Enterprise", image:startup,price:"66",pricing_content:[{description:"Email Marketing content",selected:true},
                     {description:"Marketing Voice",selected:true},
                     {description:"Optimize SEO",selected:true},
                     {description:"Consulting Video",selected:true},
                     {description:"Marketing Advertising",selected:false}]},

                     {plan:"Professional", image:coin,price:"89",pricing_content:[{description:"Email Marketing content",selected:true},
                     {description:"Marketing Voice",selected:true},
                     {description:"Optimize SEO",selected:true},
                     {description:"Consulting Video",selected:true},
                     {description:"Marketing Advertising",selected:true}]}
]

function Home(){
    return(
        <div>
            <header className="hero">
                <Nav/>

                <div className="banner">
                    <div className="banner-content">
                        <p className="agency-text" style={{margin:'0px'}}>
                            <span style={{color:'#fec90c'}}>// </span>
                            AGENCY
                        </p>
                        <h1 style={{margin:'0px'}} className="banner-text">A Fully Integrated Digital 
                            <span style={{color:'#5956e8'}}> Marketing </span>Agency
                        </h1>
                        <p style={{margin:'0px'}} className='dummy-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde autem 
                        mazim mundi debitis deserunt fuga id architecto, quasi iusto eius pluto.</p>
                        <div className="banner-buttons">
                            <Link to="" className="banner-getstarted">Get Started</Link>
                            <Link to="/services" className="banner-services">Services</Link>
                        </div>
                    </div>
                    <div className="banner-image">
                        <img src={monitor} className="monitor" alt="monitor photo"/>
                        <motion.img src={check} className="check" alt="check mark"
                            initial={{opacity:0}}
                            whileInView={{opacity:1}}
                            viewport={{once:true}}
                            transition={{duration:0.7}}/>
                        <motion.img src={bullseye} 
                            className="bullseye" alt="bullseye"
                            initial={{opacity:0}}
                            whileInView={{opacity:1}}
                            viewport={{once:true}}
                            transition={{duration:0.7}}
                        />
                        <img src={star} className="star" alt="star"/>
                    </div>
                </div>
                <div className="banner-circle"></div>
            </header>

            <ServicesContainer/>

            <div className="home-about">
                <motion.div className="about-image-container"
                    initial={{opacity:0,y:110}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once:true}}
                    transition={{duration:0.7,ease:"easeOut"}}>
                    <img className="about-image" src={phoneabout} loading="lazy"/>
                </motion.div>
                <div className="about-container">
                    <motion.div 
                        initial={{opacity:0,y:110}}
                        whileInView={{opacity:1,y:0}}
                        viewport={{once:true}}
                        transition={{duration:0.7,ease:"easeOut"}}>
                        <div className="about-sub">
                            <img src={atsymbol} className="at-symbol" loading="lazy"/>
                            <div className="about-title">
                                <p className="about-info"> <span>// </span> 02. ABOUT US</p>
                                <h2>The #1  number digital services company</h2>
                            </div>
                        </div>
                        <div style={{width:'100%', border:'1px solid #cfcfcf'}}></div>
                        <p className="about-text"> Lorem ipsum dolor si
                            t amet consectetur adipisicing elit. Facere vel iure natus veritatis doloribus vero quae fugiat odio repellendus, omnis consequatur id sit nihil 
                            accusantium! Cum odit asperiores beatae voluptates 
                            quaerat consectetur? Ullam, iure.
                        </p>
                    </motion.div>

                    <div className="about-point">

                        <motion.div className="points"
                            initial={{opacity:0,x:"25%"}} 
                            whileInView={{opacity:1,x:0}}
                            viewport={{once:true}}
                            transition={{duration:0.7,ease:"easeOut"}}>
                            <img src={abouticon}/>
                            <div className="linebreaker"/>
                            <div className="point-container">
                                <h3 className="point-header">Guaranteed Results</h3>
                                <p className="point-text">Lorem ipsum dolor, sit amet consectetur 
                                adipisicing elit. Et eveniet nihil non? Adipisci provident debitis dicta illo.</p>
                            </div>
                        </motion.div>

                        <motion.div className="points second"
                            initial={{opacity:0,x:"25%"}} 
                            whileInView={{opacity:1,x:0}}
                            viewport={{once:true}}
                            transition={{duration:0.7,ease:"easeOut"}}>   
                            <img src={abouticon2}/>
                            <div className="linebreaker"/>
                            <div className="point-container">
                                <h3 className="point-header">Team Of Industry Experts</h3>
                                <p className="point-text">Lorem ipsum dolor, sit amet consectetur 
                                adipisicing elit. Et eveniet nihil non? Adipisci provident debitis dicta illo.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>  
            </div>

            <div className="home-process">
                <Header spantext=" O3. PROCESS" image={ladder} content="A simple, yet powerful and efficient digital process"/>
                <div className="illustrations">
                    <div className="illustration-content">
                        <img src={charts}/>
                        <div className="illustration-text">
                            <h4>Marketing Plan</h4>
                            <p>Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Eaque blanditiis atque quasi explicabo?</p>
                        </div>
                    </div>
                    <div className="illustration-content reverse" style={{marginTop:'40px'}}>
                        <img src={notification} loading="lazy"/>
                        <div className="illustration-text">
                            <h4>Work Execution</h4>
                            <p>Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Eaque blanditiis atque quasi explicabo?</p>
                        </div>
                    </div>
                    <div className="illustration-content">
                        <img src={graphics} loading="lazy"/>
                        <div className="illustration-text">
                            <h4>Growth & Scale</h4>
                            <p>Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Eaque blanditiis atque quasi explicabo?</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-project">
                <div className="wrapper">
                    <ServicesHeading titletext="Browse our latest case study on Marketing Agency"
                    buttontext="Case studies" spantext="05. CASE STUDIES" image={redicon}/>
                    <div className="project-content">
                        <Accordion items={Accordionitems}/>
                        <div className="keyboard-background">
                            <img src={keyboard} loading="lazy"/>
                        </div>
                    </div>
                    <div className="project-footer">
                        <div className="project-stat">
                            <h4 className="client-title">325 <span style={{color:"blue"}}>+</span></h4>
                            <div>
                                <p className="client-content">CLIENTS WORLDWIDE</p>
                            </div>
                        </div>
                        <div className="project-stat">
                            <h4 className="client-title">975 <span style={{color:"red"}}>+</span></h4>
                            <div>
                                <p className="client-content">PROJECTS COMPLETED</p>
                            </div>
                        </div>
                        <div className="project-stat">
                            <h4 className="client-title">70 <span style={{color:" #FFDC60"}}>+</span></h4>
                            <div>
                                <p className="client-content">TEAM MEMBERS</p>
                            </div>
                        </div>
                        <div className="project-stat">
                            <h4 className="client-title">85m <span style={{color:"#38E65E"}}>+</span></h4>
                            <div>
                                <p className="client-content">REVENUE GENERATED</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="home-pricing">
                <Header image={dollars} spantext="06 . PRICE & PLAN" content="Our Flexible Pricing Plans"/>
                <div className="pricing-container">
                    {pricingitems.map((pricingitem,i)=>{
                        return <Pricing key={i} index={i} items={pricingitem}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home