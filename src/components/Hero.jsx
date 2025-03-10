import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <div className='hero-container' id='hero'>
      
      <div className="hero-text">
        <span>
          <div className="hero-line" />
          <h5>Insane Fitness</h5>
        </span>
        <h2>Unleash the Insane <b>Fitness</b> Transform Your Body, <b>Mind</b> For Lasting Success!</h2>
        <a href="#search"><button>View more</button></a>
      </div>
    </div>
  )
}

export default Hero