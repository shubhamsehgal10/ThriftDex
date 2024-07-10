import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.PNG'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h2>New Arrivals Only</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>New</p>
                </div>
                <p>Collections</p>
                <p>For everyone</p>
            </div>
            <div className="hero-latest-btn">
                <Link to="/mens" style={{textDecoration: 'none'}}><div style={{textDecoration:'none', color:'black'} }>Latest Collection</div></Link>
                <img src={arrow} alt='arrow' />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt=''/>
        </div>
        
      
    </div>
  )
}

export default Hero
