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

      <div className='outer-circle circle center about-placement'>
        <Link to='About' className='slide-oval'>
          <div className={`link-circle about-circle circle spin ${active['about'] ? 'active' : ''}` } onMouseEnter={() => {handleMouseEnter('about')}}></div>
        </Link>
      </div>
      <div className='outer-circle circle center work-placement'>
        <Link to='Work'>
          <div className={`link-circle work-circle circle spin ${active['work'] ? 'active' : ''}`} onMouseEnter={() => {handleMouseEnter('work')}}></div>
        </Link>
      </div>
      <div className='outer-circle circle center contact-placement'>
        <Link to='Contact'>
          <div className={`link-circle contact-circle circle spin ${active['contact'] ? 'active' : ''}`} onMouseEnter={() => {handleMouseEnter('contact')}}></div>
        </Link>
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