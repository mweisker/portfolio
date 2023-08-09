import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Default from '../components/InnerCircleDefault.jsx';
import Work from '../components/InnerCircleWork.jsx';
import About from '../components/InnerCircleAbout.jsx';
import Contact from '../components/InnerCircleContact.jsx';



export default function Home() {
  const [center, setCenter] = useState('default');
  const [active, setActive] = useState({work: false, about: false, contact: false})

  const handleMouseEnter = (activeCircle) => {
    setCenter(activeCircle);
    const activeCopy = {...active};
    for (const circle in activeCopy) {
      activeCopy[circle] = false;
    }
    activeCopy[activeCircle] = true;
    setActive(activeCopy);
  }

  return (
    <div className='main-div'>

      <div className='outer-circle circle center'>
        <div className={`link-circle about-circle circle spin ${active['about'] ? 'active' : ''}` } onMouseEnter={() => {handleMouseEnter('about')}}></div>
        <div className={`link-circle work-circle circle spin ${active['work'] ? 'active' : ''}`} onMouseEnter={() => {handleMouseEnter('work')}}></div>
        <div className={`link-circle contact-circle circle spin ${active['contact'] ? 'active' : ''}`} onMouseEnter={() => {handleMouseEnter('contact')}}></div>

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