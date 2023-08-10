import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import './Work.scss'
import Home from '../components/AboutComponents/homeAbout.jsx';
import Travel from '../components/AboutComponents/travel.jsx';
import Nova from '../components/AboutComponents/nova.jsx';
import Books from '../components/AboutComponents/books.jsx';
import Resume from '../components/AboutComponents/resume.jsx';



export default function Work() {
  const [center, setCenter] = useState('home');
  const [active, setActive] = useState({home: true, travel: false, nova: false, books: false, resume: false})

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
    <div className='background background-work'>
      <div className='link-holder work-links'>
        <div className={`link-circle circle travel ${active['travel'] ? 'active' : ''}`} onMouseEnter={() => {handleMouseEnter('travel')}}></div>
        <div className={`link-circle circle nova ${active['nova'] ? 'active' : ''}`} onMouseEnter={() => {handleMouseEnter('nova')}}></div>
        <div className={`link-circle circle books ${active['books'] ? 'active' : ''}`} onMouseEnter={() => {handleMouseEnter('books')}}></div>
        <div className={`link-circle circle resume ${active['resume'] ? 'active' : ''}`} onMouseEnter={() => {handleMouseEnter('resume')}}></div>
      </div>

      { center === 'home' ? <Home/> : null }
      { center === 'travel' ? <Travel/> : null }
      { center === 'nova' ? <Nova/> : null }
      { center === 'books' ? <Books/> : null }
      { center === 'resume' ? <Resume/> : null }

      <div className='link-holder home-link'>
        <div className={`link-circle circle home ${active['home'] ? 'active' : ''}`} onMouseEnter={() => {handleMouseEnter('home')}}></div>
      </div>
    </div>
  )
}