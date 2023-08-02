import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



export default function innerCircleAbout() {

  return (
    <div className='inner-circle-component center circle about'>
      <h1>About Me</h1>
      <Link to='About'>About Me</Link>
    </div>
  )
}