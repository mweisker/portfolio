import React from 'react';

import flyingCrowImage from '../../images/the-flying-crow.png'

export default function flyingCrow() {

  return (
    <div className='component-holder'>
      <div className='image-holder'>
        <img className='work-image flying-crow-image' src={flyingCrowImage} />
      </div>
      <div className='text-holder'>
        <h1>The Flying Crow</h1>
        <h3>is an app that will tell you the distance between any two points on the map.  You can either click the map directly or input your own latitude and longitude, and it will automatically show you the distance.</h3>
        <h3>Click <a href='https://mweisker.github.io/the-flying-crow/'>HERE</a> and try it out</h3>
      </div>
    </div>
  )
}