import React from 'react';
import { Link } from 'react-router-dom';

import './About.scss';


export default function About() {

  return (
    <div className='background-about'>
      <h1>About Me</h1>
      <Link to='/'>Home</Link>
    </div>
  )
}