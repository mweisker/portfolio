import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


export default function Home() {

  // const navigate = useNavigate();

  return (
    <div className='main-div'>
      <h1>Home</h1>
      {/* <button onClick={() => {navigate('AboutMe')}}>About Me</button> */}
      <Link to='AboutMe'>About Me</Link>
    </div>
  )
}