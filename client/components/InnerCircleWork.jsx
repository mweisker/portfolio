import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



export default function innerCircleWork() {

  return (
    <div className='inner-circle-component center circle work'>
      <h1>Work</h1>
      <Link to='Work'>My Work</Link>
    </div>
  )
}