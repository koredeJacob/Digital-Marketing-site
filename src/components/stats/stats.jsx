import React from "react"

import "./stats.css"

const Stats=({addborder})=>{
    return (
        <div className="project-footer" style={addborder?{ borderTop: "1px solid #5d5d63"}:{}}>
            <div className="project-stat">
                <h4 className="client-title">325<span style={{color:"blue"}}>+</span></h4>
                <div>
                    <p className="client-content">CLIENTS WORLDWIDE</p>
                </div>
            </div>
            <div className="project-stat">
                <h4 className="client-title">975<span style={{color:"red"}}>+</span></h4>
                <div>
                    <p className="client-content">PROJECTS COMPLETED</p>
                </div>
            </div>
            <div className="project-stat">
                <h4 className="client-title">70<span style={{color:" #FFDC60"}}>+</span></h4>
                    <div>
                        <p className="client-content">TEAM MEMBERS</p>
                    </div>
            </div>
            <div className="project-stat">
                <h4 className="client-title">85m<span style={{color:"#38E65E"}}>+</span></h4>
                <div>
                    <p className="client-content">REVENUE GENERATED</p>
                </div>
            </div>
        </div>
    )

}

export default Stats