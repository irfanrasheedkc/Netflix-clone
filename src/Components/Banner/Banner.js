import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className="banner">
      <div className='content'>
        <h1 className='title'>Movie Name</h1>
        <div className='banner_buttons'>
          <button className='button'>Play</button>
          <button className='button'>My List</button>
        </div>
        <h1 className='description'>Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools.</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
