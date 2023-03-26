import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Nav from "../../components/navigation/navigation"
import monitor from "../../assets/homeimages/pattern (3).png"
import check from "../../assets/homeimages/pattern (1).png"
import bullseye from "../../assets/homeimages/pattern.png"
import star from "../../assets/homeimages/star.png"
import phoneabout from "../../assets/homeimages/phoneaboutus.png"
import atsymbol from "../../assets/homeimages/atsymbol.png"
import abouticon from "../../assets/homeimages/abouticon.png"
import abouticon2 from "../../assets/homeimages/abouticon2.png"
import ladder from "../../assets/homeimages/ladder.png"
import charts from "../../assets/homeimages/charts.png"
import graphics from "../../assets/homeimages/graphics.png"
import notification from "../../assets/homeimages/notification.png"
import redicon from "../../assets/homeimages/red icon.png"
import keyboard from "../../assets/homeimages/keyboard.jpg"
import dollars from "../../assets/homeimages/dollars.png"
import coin from "../../assets/homeimages/coin.png"
import settings from "../../assets/homeimages/settings.png"
import startup from "../../assets/services-images/Startup.png"
import greencircle from "../../assets/homeimages/greencircle.png"
import increasetraffic from "../../assets/homeimages/increase traffic.png"
import smallbusinesses from "../../assets/homeimages/small businesses.png"
import morearticles from "../../assets/homeimages/more articles.png"
import { ServicesHeading } from "../../components/services-component/services-container"
import ServicesContainer from "../../components/services-component/services-container"
import Header from "../../components/header/header"
import Accordion from "../../components/accordion/accordion"
import Pricing from "../../components/pricing/pricingcomponet"
import Article from "../../components/article/article"
import "./home.css"
import Footer from "../../components/footer/footer";
import Stats from "../../components/stats/stats";


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
                        style={{position:"relative",zIndex:"1"}}
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
                <Header spantext=" O3. PROCESS" image={ladder} content="A simple, yet powerful and efficient digital process" light={false}/>
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
                    buttontext="Case studies" spantext="05. CASE STUDIES" image={redicon} light={true}/>
                    <div className="project-content">
                        <Accordion items={Accordionitems}/>
                        <div className="keyboard-background">
                            <img src={keyboard} loading="lazy"/>
                        </div>
                    </div>
                    <Stats addborder={true}/>
                </div>
            </div>
            
            <div className="home-pricing">
                <Header image={dollars} spantext="06 . PRICE & PLAN" content="Our Flexible Pricing Plans" light={false}/>
                <div className="pricing-container">
                    {pricingitems.map((pricingitem,i)=>{
                        return <Pricing key={i} index={i} items={pricingitem}/>
                    })}
                </div>
            </div>

            <div className="home-article">
                <Header image={greencircle} spantext="08 . Articles" content="Browse Our Content on Growth Marketing"/>
                <Article image={smallbusinesses} title="The Best 4 Types Of Business Strategies For Small Business" 
                    date="MARCH 10, 2023" background="#FFF3CA" reverse={false}/>
                <Article image={increasetraffic} title="Learn How To Increase Traffic To Your Website Organically"
                    date="MARCH 11, 2023" background="#E9F7FF" reverse={true}/>
                <div className="more-articles">
                    <Link to="#">More Articles</Link>
                    <img src={morearticles}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home