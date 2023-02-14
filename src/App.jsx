import React from "react";
import { Routes,Router, Route } from "react-router-dom";
import Aboutus from "./pages/aboutus/aboutus";
import ContactUs from "./pages/Contactus/contactus";
import Home from "./pages/home/home";
import Blog from "./pages/blog/blog"
import Services from "./pages/servicesPage/services"


function App(){
    return( 
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Aboutus' element={<Aboutus/>}/>
            <Route path='/ContactUs' element={<ContactUs/>}/>
            <Route path='/Blog' element={<Blog/>}/>
            <Route path='/Services' element={<Services/>}/>
        </Routes>)
}

export default App