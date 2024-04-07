import React from 'react'
import "./Navbar.css"
import logo from '../../assets/logo.png'
import person from '../../assets/program-icon-3.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img className='logo' src={logo} alt="Navbar Logo" />
        <ul>
            <li>Home</li>
            <li>Why Choose us</li>
            <li>ACCA</li>
            <li>Placement</li>
            <li>Indigo Learn</li>
            <li><button className='btn'><img className='person-logo' src = {person} alt="person" />Login/SignUp</button></li>
        </ul>
    </nav>
  )
}

export default Navbar