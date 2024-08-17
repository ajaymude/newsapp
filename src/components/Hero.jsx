import React, { useState } from 'react'
import "../index.css";

const Hero = ({setSearch}) => {
  const [name, setName] = useState('');
 
  const searchnews = () => {
    setSearch(name);
}
   
  return (
    <div>
    <header>
    <div className='hero'>
    <div className='hero-banner'>
      <h4>News Store</h4>
      <p>All new news is an old news happenning to new people</p>
      <input type='text' placeholder='' onChange={(e)=>{setName(e.target.value)}}className='input-bar' />
      <button className='hero-btn' onClick={searchnews}>Search</button>
      </div>
    </div>
    </header>
    </div>
  )
}

export default Hero
