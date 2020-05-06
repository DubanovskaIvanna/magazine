import React from 'react';
import Logo from '../Logo.png'
import Background from '../background.jpg'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper pink ">
    
      <div className="container">
        <Link className="brand-logo" to="/"></Link>
        <img src={Logo} alt="Logo" height = "60" width = "280"/>
        <ul className="right">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to='/news'>News</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
      </div>
    <img src={Background} alt="Background" width = "1915" height = "920" />
    </nav> 
  )
}

export default withRouter(Navbar)