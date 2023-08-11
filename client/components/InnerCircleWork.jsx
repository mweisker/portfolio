import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



export default function innerCircleWork() {

  return (
    <div className='inner-circle-component center circle work'>
      <Link to='Work'>
        <h1>Work</h1>
        <h3>To look at my work history and past projects</h3>
        <h3>Click here</h3>
      </Link>
    </div>
  )
}