import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import './Work.scss'
import Codesmith from '../components/WorkComponents/codesmith.jsx';
import FlyingCrow from '../components/WorkComponents/flyingCrow.jsx';
import Home from '../components/WorkComponents/home.jsx';
import Obsidian from '../components/WorkComponents/obsidian.jsx';
import Procrastination from '../components/WorkComponents/procrastination.jsx';


export default function Work() {
  const [center, setCenter] = useState('home');
  const [active, setActive] = useState({home: true, codesmith: false, obsidian: false, flyingCrow: false, procrastination: false})

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
        <div className={`link-circle circle codesmith ${active['codesmith'] ? 'active' : ''}`} onMouseEnter={() => {handleMouseEnter('codesmith')}}></div>
        <div className={`link-circle circle obsidian ${active['obsidian'] ? 'active' : ''}`} onMouseEnter={() => {handleMouseEnter('obsidian')}}></div>
        <div className={`link-circle circle flying-crow ${active['flyingCrow'] ? 'active' : ''}`} onMouseEnter={() => {handleMouseEnter('flyingCrow')}}></div>
        <div className={`link-circle circle procrastination ${active['procrastination'] ? 'active' : ''}`} onMouseEnter={() => {handleMouseEnter('procrastination')}}></div>
      </div>

      { center === 'home' ? <Home/> : null }
      { center === 'codesmith' ? <Codesmith/> : null }
      { center === 'obsidian' ? <Obsidian/> : null }
      { center === 'flyingCrow' ? <FlyingCrow/> : null }
      { center === 'procrastination' ? <Procrastination/> : null }


      <Link to='/'>Home</Link>
      <div className='link-holder home-link'>
        <div className={`link-circle circle home ${active['home'] ? 'active' : ''}`} onMouseEnter={() => {handleMouseEnter('home')}}></div>
      </div>
    </div>
  )
}