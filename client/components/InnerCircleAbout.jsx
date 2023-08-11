import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



export default function innerCircleAbout() {

  return (
    <div className='inner-circle-component center circle about'>
      <Link to='About'>
        <h1>About Me</h1>
        <h3>To see what I'm doing when I'm not making kickass websites</h3>
        <h3>Click here</h3>
      </Link>
    </div>
  )
}