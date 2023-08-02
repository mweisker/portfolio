import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Default from '../components/InnerCircleDefault.jsx';
import Work from '../components/InnerCircleWork.jsx';
import About from '../components/InnerCircleAbout.jsx';
import Contact from '../components/InnerCircleContact.jsx';



export default function Home() {
  const [center, setCenter] = useState('default')

  // const navigate = useNavigate();
  console.log(center)

  return (
    <div className='main-div'>

      <div className='outer-circle circle center'>
        <div className='link-circle about-circle circle' onMouseEnter={() => {setCenter('about')}}></div>
        <div className='link-circle work-circle circle' onMouseEnter={() => {setCenter('work')}}></div>
        <div className='link-circle contact-circle circle' onMouseEnter={() => {setCenter('contact')}}></div>

      </div>
      <div className='inner-circle circle center background-circle'></div>
      <div className='inner-circle circle center'>
        { center === 'default' ? <Default/> : null }
        { center === 'work' ? <Work/> : null }
        { center === 'about' ? <About/> : null }
        { center === 'contact' ? <Contact/> : null }

      </div>
    </div>
  )
}