import React from 'react';
import { Link } from 'react-router-dom';


export default function home() {

  return (
    <div className='component-holder'>
      <div className='text-holder'>
        <h2>To learn about my interests outside of Software Engineering, hover over the images above,</h2>
        <h2 className='return-home'>or click <Link to='/'>HERE</Link> to return to the main page</h2>
      </div>
    </div>
  )
}