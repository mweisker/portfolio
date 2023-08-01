import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


export default function Home() {

  // const navigate = useNavigate();

  return (
    <div className='main-div'>
      <h1>Home</h1>
      {/* <button onClick={() => {navigate('AboutMe')}}>About Me</button> */}
      <Link to='Work'>My Work</Link>
      <br />
      <Link to='About'>About Me</Link>
      <br />
      <Link to='Contact'>Contact Me</Link>
    </div>
  )
}