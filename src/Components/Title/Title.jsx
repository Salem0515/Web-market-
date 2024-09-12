import React from 'react'
import "./Title.css"
const Title = () => {
  return (
    <div className='father'>
      <div className="title">
      <h1><span className="bold-text">WEB DESIGN</span></h1>
<h1><span className="outlined-text">DEVELOP @</span></h1>
<h1><span className="bold-text">MARKETING</span></h1>

        <a href="#">Grow your business online with us</a>
      </div>
      <div className="subtitle">
        <h2>Search your favorite services</h2>
        <input type="text" placeholder='search' />
  </div>
    </div>
  )
}

export default Title
