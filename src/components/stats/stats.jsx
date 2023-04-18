import React from "react"
import {motion} from "framer-motion"

import "./stats.css"

const Stats=({addborder})=>{
    return (
        <div className="project-footer" style={addborder?{ borderTop: "1px solid #5d5d63"}:{}}>
            <motion.div className="project-stat"
                initial={{opacity:0,y:110}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                transition={{duration:0.7,ease:"easeOut"}}>
                <h4 className="client-title">325<span style={{color:"blue"}}>+</span></h4>
                <div>
                    <p className="client-content">CLIENTS WORLDWIDE</p>
                </div>
            </motion.div>
            <motion.div className="project-stat"
                initial={{opacity:0,y:110}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                transition={{duration:0.7,ease:"easeOut"}}>
                <h4 className="client-title">975<span style={{color:"red"}}>+</span></h4>
                <div>
                    <p className="client-content">PROJECTS COMPLETED</p>
                </div>
            </motion.div>
            <motion.div className="project-stat"
                initial={{opacity:0,y:110}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                transition={{duration:0.7,ease:"easeOut"}}>
                <h4 className="client-title">70<span style={{color:" #FFDC60"}}>+</span></h4>
                    <div>
                        <p className="client-content">TEAM MEMBERS</p>
                    </div>
            </motion.div>
            <motion.div className="project-stat"
                initial={{opacity:0,y:110}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                transition={{duration:0.7,ease:"easeOut"}}>
                <h4 className="client-title">85m<span style={{color:"#38E65E"}}>+</span></h4>
                <div>
                    <p className="client-content">REVENUE GENERATED</p>
                </div>
            </motion.div>
        </div>
    )

}

export default Stats