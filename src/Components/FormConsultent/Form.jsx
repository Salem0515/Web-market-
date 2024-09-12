import React from 'react'
import './Form.css'
import Down from '../../assets/Group3.png'

const Form = () => {
  return (
    <div>
      <div className="Scrolling">
        <img src={Down} alt="" />
      </div>
      <div className="form">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae unde ducimus itaque magni velit placeat maxime laborum totam? Nam a, pariatur fuga dignissimos placeat earum explicabo perferendis reprehenderit. Expedita, non.</p>
        <h3>Free consultant form </h3>
        <div className="inputs">
            <input type="text" placeholder='Full Name' />
            <input type="text" placeholder='Phone NUmber' />
            <input type="text" placeholder='Email' />
        </div>
      </div>
    </div>
  )
}

export default Form
