import React,{useState} from 'react'
import { Link } from 'react-router-dom'

import './navigation.css'
import logo from '../../assets/homeimages/Logo.png'


function Nav() {
	const [Show,setShow]=useState(false)

	const handleToggle=()=>{
		setShow(!Show)
	}

	return (
		<>	<div className='navigation-small'>

				<div className='navbody'>
					<div className='logo'>
						<img className='logo-image' src={logo} alt='company logo'/>
					</div>
					<div className='menu-button' style={{backgroundColor: `${Show?'#ffdc60':'#5956e8'}`}} onClick={handleToggle}>
						<span className='first-line' style={{backgroundColor: `${Show?'#292930':'#f6f6f6'}`}}></span>
						<span className='second-line' style={{backgroundColor: `${Show?'#292930':'#f6f6f6'}`}}></span>
						<span className='third-line' style={{backgroundColor: `${Show?'#292930':'#f6f6f6'}`}}></span>
					</div>
				</div>
				<div className='menu-wrapper'>
					<nav className={`menu ${ Show ? 'open' : 'close' }`}>
						<Link to='/'>Home</Link>
						<Link to='/Aboutus'>About</Link>
						<Link to='#'>Blog</Link>
						<Link to='/Blog'>Pages</Link>
						<Link to='/Services'>Services</Link>
						<Link to='/ContactUs'>Contact</Link>
						<div className='get-started-button'>
							Get Started
						</div>
					</nav>
				</div>
				<nav className='menu-large'>
					<Link to='/'>Home</Link>
					<Link to='/Aboutus'>About</Link>
					<Link to='#'>Blog</Link>
					<Link to='/Blog'>Pages</Link>
					<Link to='/Services'>Services</Link>
					<Link to='/ContactUs'>Contact</Link>
					<div className='get-started-button'>
						Get Started
					</div>
				</nav>
			</div>
		</>
	)
}

export default Nav
