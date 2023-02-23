import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";

import App from './App'
import ServicesGrid from './components/services-component/services-grid';
import image from './assets/services-images/mobilephone.png' 
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App/>
      <div>
        <ServicesGrid image={image} sub='Social Media Marketing' text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eligendi aliquid doloribus?'}/>
      </div>
    </Router>
    
  </React.StrictMode>,
)
