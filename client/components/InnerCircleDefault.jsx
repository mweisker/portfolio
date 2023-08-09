import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import profile from '../images/profile.JPG';


export default function innerCircleDefault() {

  return (
    <div className='inner-circle-component center circle default'>
      <div className='img-wrapper circle'>
        <img src={profile} className='profile-photo circle' />
      </div>
    </div>
  )
}