import React from 'react'
import './Service.css'
import Arrow from '../../assets/Arrow2.png'
import Forinfo from '../../assets/Forinfo.png'
const Service = () => {
  return (
    <div className='Service'>
        <h1>Web</h1>
        <h1>Services</h1>
        <div className="tabels">
        <div className="basic">
            <h2><span>Basic</span> for 1 year</h2>
            <h3>Rs. 12,000</h3>
            <ul>
                <li className='color_white'>Free Domain</li>
                <li className='color_white'>Free Sll Security</li>
                <li className='gary'>Free Professional Email</li>
                <li className='gary'>Seo Support</li>
                <li className='gary'>Standard Performance</li>
                <li className='gary'>28- Day Free update</li>
                <li className='gary'>Free Connect with customer by Email</li>
            </ul>
            <button className='Get'>Get Now</button>
        </div>
        <div className="Premium">
            <h2><span>Premium</span> for 1 year</h2>
            <h3>Rs. 22,000</h3>
            <ul>
                <li className='color_white'>Free Domain</li>
                <li className='color_white'>Free Sll Security</li>
                <li className='color_white'>Free Professional Email</li>
                <li className='color_white'>Seo Support</li>
                <li className='color_white'>Standard Performance</li>
                <li className='color_white'>28- Day Free update</li>
                <li className='color_white'>Free Connect with customer by Email</li>
            </ul>
            <button className='Get'>Get Now</button>
        </div>
            <img className='info' src={Forinfo} alt="" />
            <img className='arrow' src={Arrow} alt="" />
        </div>
    </div>
  )
}

export default Service
