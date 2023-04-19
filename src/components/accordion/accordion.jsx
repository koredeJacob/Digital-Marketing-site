import React, { useEffect, useRef, useState } from "react"

import vector from "../../assets/homeimages/Vector.png"
import "./accordion.css"

const Accordion=({items , light})=>{
    const start=light?-1:1
    const [clicked, setclicked]=useState(start)

    const handleToggle=(index)=>{
        setclicked(index)
    }
    
    return(
        <div className="accordion-container">
            {items.map((item,i)=>{
                return <AccordionItem key={i} index={i} content={item} handleToggle={handleToggle}
                    active={clicked} light={light}/>
            })}
        </div>
    )
}

export const AccordionItem=({content ,index,active,light,handleToggle=f=>f})=>{
    const [height,setheight]=useState()

    const {header,text}=content
    const contentEl=useRef()

    useEffect(()=>{setheight(contentEl.current.scrollHeight),[]})

    return (
        <div className={`item-container ${light&active===index?"newcolour":""}`} style={light?{background:"#fff", border:"1.5px solid #DCDCDC"}:{background:"#383840", border:"1px solid #5E5E62", boxShadow:"0px 18px 50px rgba(0, 0, 0, 0.25)"}}>
            <div className="accordion-header" onClick={()=>handleToggle(index)}>
                <h3 style={light?{color:"#292930"}:{color:"#fff"}}>{header}</h3>
                <div className={`arrow-circle ${active===index?'rotate':''}`}>
                    <img src={vector}/>
                </div>
            </div>
            <div ref={contentEl} className={`accordion-content ${active===index?'open':''}`} 
                style={active===index?{height:height}:{height:'0px'}}>
                <p style={light?{color:"#555"}:{color:"#d0d0d0"}}>{text}</p>
            </div> 
        </div>
    )
}

export default Accordion