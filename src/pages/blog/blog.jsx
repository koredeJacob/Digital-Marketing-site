import React from "react"

import file from "../../assets/blogimages/icon (1).png"
import articleimage from "../../assets/homeimages/small businesses.png"
import Nav from "../../components/navigation/navigation"
import Banner from "../../components/banner/banner"
import Header from "../../components/header/header"
import Article from "../../components/article/article"
import "./blog.css"

function Blog(){
    return (
        <div>   
            <header className="services-hero" style={{background: "linear-gradient(111.23deg, #F5E9FF 9.95%, #FFDBD5 85.17%)"}}>
                <Nav/>
                <div className="banner-container">
                    <Banner text="Our" bluetext="Blog" first= "#FA95D1" second="#DDFF7C" third="#FFC4BB"/>
                </div>
            </header>
            <div className="blog-section">
                <Header image={file} light={false} spantext="01 . ARTICLES" content="Browse our content on digital marketing growth"/>
                <Article image={articleimage} date="MARCH 10, 2023" title="The best 4 types of Marketing Strategies For Small Businesses" background="#FFF3CA" reverse={false}/>
            </div>
        </div>
    )
}

export default Blog