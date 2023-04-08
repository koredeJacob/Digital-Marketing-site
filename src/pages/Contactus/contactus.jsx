import React from "react";

import handshake from "../../assets/aboutimages/handshake.png"
import Nav from "../../components/navigation/navigation";
import Banner from "../../components/banner/banner";
import Header from "../../components/header/header";

function ContactUs(){
    return (
        <div>
            <header className="services-hero" style={{background: "linear-gradient(111.23deg, #F5E9FF 9.95%, #FFDBD5 85.17%)"}}>
                <Nav/>
                <div className="banner-container">
                    <Banner text="Let's Talk" bluetext="" first= "#D9D9D9" second="#DDFF7C" third="#FFC4BB"/>
                </div>
            </header>
            <div className="contactus-contact-container">
                <div>
                    <Header image={handshake} spantext="01 . CONTACT US" content="Let's market awesome together" light={false}/>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default ContactUs