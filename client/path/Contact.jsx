import React from 'react';
import { Link } from 'react-router-dom';

// import './Contact.scss'


export default function Contact() {

  return (
    <div className='background background-contact'>
      <h1>Contact Me</h1>
      <Link to='/'>Home</Link>
    </div>
  )
}