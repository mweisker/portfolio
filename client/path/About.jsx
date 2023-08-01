import React from 'react';
import { Link } from 'react-router-dom';


export default function About() {

  return (
    <div className='main-div'>
      <h1>About Me</h1>
      <Link to='/'>Home</Link>
    </div>
  )
}