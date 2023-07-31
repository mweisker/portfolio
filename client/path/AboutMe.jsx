import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


export default function AboutMe() {

  // const navigate = useNavigate();

  return (
    <div className='main-div'>
      <h1>About Me</h1>
      {/* <button onClick={() => {navigate('')}}>About Me</button> */}
      <Link to='/'>Home</Link>
    </div>
  )
}