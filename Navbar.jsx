import React from 'react'
import "./Navbar.css"
import Header from './images/Header.png';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <nav>
      <div className='logo'>
        <img src={Header} alt="logo" />
      </div>
      <ul>
        <li>Home</li> 
        <li>About</li>
        <li>Contact</li>
      </ul>
      </nav>
 
      
    </div>
  )
}

export default Navbar
