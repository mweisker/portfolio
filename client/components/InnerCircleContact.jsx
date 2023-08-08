import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



export default function innerCircleContact() {

  return (
    <div className='inner-circle-component center circle contact'>
      <Link to='Contact'>
        <h1>Contact me</h1>
        <h3>If you'd like to reach out to me with any questions, or if you just want to chat</h3>
        <h3>Click here</h3>
      </Link>
    </div>
  )
}