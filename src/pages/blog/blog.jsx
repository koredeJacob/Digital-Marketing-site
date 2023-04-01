import React from "react"
import Nav from "../../components/navigation/navigation"
import Banner from "../../components/banner/banner"
import "./blog.css"

function Blog(){
    return (
        <div>   
            <header className="services-hero" style={{background: "linear-gradient(111.23deg, #CFD4FF 9.95%, #FFFFFD 85.17%)"}}>
                <Nav/>
                <div className="banner-container">
                    <Banner text="Our" bluetext="Blog" first= "#7DFFE8" second="#7CFF99" third="#EDFFBB"/>
                </div>
            </header>
        </div>
    )
}

export default Blog