import React, { useEffect, useRef, useState } from "react"

import vector from "../../assets/vector.png"
import "./accordion.css"

const Accordion=({items})=>{
    const [clicked, setclicked]=useState(1)

    const handleToggle=(index)=>{
        setclicked(index)
    }
    
    return(
        <div className="accordion-container">
            {items.map((item,i)=>{
                return <AccordionItem key={i} index={i} content={item} handleToggle={handleToggle}
                    active={clicked}/>
            })}
        </div>
    )
}

export const AccordionItem=({content ,index,active,handleToggle=f=>f})=>{
    const [height,setheight]=useState()

    const {header,text}=content
    const contentEl=useRef()

    useEffect(()=>{setheight(contentEl.current.scrollHeight),[]})

    return (
        <div className="item-container">
            <div className="accordion-header" onClick={()=>handleToggle(index)}>
                <h3>{header}</h3>
                <div className={`arrow-circle ${active===index?'rotate':''}`}>
                    <img src={vector}/>
                </div>
            </div>
            <div ref={contentEl} className={`accordion-content ${active===index?'open':''}`} 
                style={active===index?{height:height}:{height:'0px'}}>
                <p>{text}</p>
            </div> 
        </div>
    )
}

export default Accordion