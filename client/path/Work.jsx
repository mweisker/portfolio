import React from 'react';
import { Link } from 'react-router-dom';

import './Work.scss'


export default function Work() {

  return (
    <div className='background-work'>
      <h1>My Work</h1>
      <Link to='/'>Home</Link>
    </div>
  )
}