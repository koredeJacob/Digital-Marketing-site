import React, { useState } from "react"
import { motion } from "framer-motion"

import commitment from "../../assets/aboutimages/commitment.png"
import leftarrow from "../../assets/aboutimages/left arrow.png"
import arrow from "../../assets/homeimages/Vector.png"
import settings from "../../assets/aboutimages/settings.png"
import teamwork from "../../assets/aboutimages/team work.png" 
import portfolio from "../../assets/aboutimages/portfolio.png"
import "./carousel.css"

const items=[{image:settings,header:"Commitment"},{image:portfolio,header:"Accountability"},
                {image:commitment,header:"Efficiency"},{image:settings,header:"Ideas"},
                {image:teamwork,header:"Team Work"}
            ]

const CarouselContainer = () =>{
    const [index , setIndex]=useState(0)
    const [color , setColor]=useState(1)

    const handleSlide= (newIndex) =>{
        if (newIndex<0){
            newIndex=4
        }
        else if(newIndex>4){
            newIndex=0
        }
        setIndex(newIndex)
    }

    const handleColor = (button) =>{
        setColor(button)
    }

    return(
        <motion.div className="carousel-container"
            initial={{opacity:0,x:110}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            transition={{duration:0.7,ease:"easeOut"}}>
            <div className="carousel-inner">
                {items.map((item,i)=>{
                    return <CarouselItem key={i} image={item.image} header={item.header} position={index}/>
                })}
            </div>
            <div className={`left-control ${color===0?"clicked":""}`} onClick={()=>{handleSlide(index-1); handleColor(0)}}>
                <img src={leftarrow}/>
            </div>
            <div className={`right-control ${color===1?"clicked":""}`} onClick={()=>{handleSlide(index+1); handleColor(1)}}>
                <img src={arrow}/>
            </div>
        </motion.div>
    )

}

const CarouselItem = ({image, header, position}) =>{
    return (
        <div className="carousel-item-outer" style={{transform:`translateX(-${position * 100}%)`}}>
            <div className="carousel-item">
                <div className="carousel-item-wrapper">
                    <div className="carousel-item-image">
                        <img src={image} alt="card image" loading="lazy"/>
                    </div>
                    <div className="carousel-item-words">
                        <h3>{header}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                            elit. Hic, explicabo nemo esse voluptas quam exercitationem 
                            necessitatibus quos.</p>
                    </div>
                    <div className="carousel-item-line"></div>
                </div>
            </div>
        </div>
    )
}

export default CarouselContainer