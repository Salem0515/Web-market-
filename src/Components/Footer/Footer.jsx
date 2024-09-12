import React from 'react'
import './Footer.css'
import twitter from '../../assets/twitter.png'
import facebook from '../../assets/facebook.png'
const Footer = () => {
  return (
    <div className='Footer'>
      <h1>WEBDEV</h1>

<div className="lists">
    <ul>
        <li><a href="#Home">Home</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Support">Support</a></li>
    </ul>
    <img src={twitter} alt="" />
    <img src={facebook} alt="" />
</div>
    </div>
  )
}

export default Footer
