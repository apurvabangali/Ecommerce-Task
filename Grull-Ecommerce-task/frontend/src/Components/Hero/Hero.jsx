import React from 'react'
import './Hero.css'
import wproduct from '../../Components/Assets/product_4.png'
import mproduct from '../../Components/Assets/product_23.png'
import kproduct from '../../Components/Assets/product_32.png'
import pic from '../../Components/Assets/hero_image.png'

const Hero = () => {
  return (
    <div className="home-background">
    <div className='content'>
    
    <h1 classname="animation">Make<br/>New Friends</h1>
    <p classname="animation"><h2 className="wave">👋</h2>Lorem ipsum, dolor sit amet consectetur.</p>
    <a href="#" className='btn animation'>Get Started!</a>
    </div>
    <img src={pic} className="pic-img animation"/>

    <div class="cards">
      <h1>Pick a Category</h1>
      <a style={{textDecoration:'none',color:'black'}} href='/womens'>
        <img className="products" src={wproduct} />
      </a>
      <a style={{textDecoration:'none',color:'black'}} href='/mens'>
        <img className="products" src={mproduct}/>
      </a>
      <a style={{textDecoration:'none',color:'black'}} href='/kids'>
        <img className="products" src={kproduct}/>
      </a>
    <div class="container">
      <h4><b>Women</b></h4>
      <h4><b>Men</b></h4>
      <h4><b>Kids</b></h4>    
    </div>

</div>
    </div>
  )
}

export default Hero
