import React from 'react';
import { Link } from 'react-router-dom';

// import './Contact.scss'
import MeAndNova from '../images/me+nova.jpeg';


export default function Contact() {

  return (
    <div className='background background-contact'>
        {/* <h1>Contact Me</h1> */}
        <img src={MeAndNova} className='contact-profile circle' />
        {/* <div className='text-holder'> */}
          <h2>If you want to reach me, my email is <a href='mailto:mweisker27@gmail.com?'>mweisker27@gmail.com</a></h2>
          <h2>or you can find me on</h2>
          <div className='contact-link-holder'>
            <h2><img src='https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png'/><a href='https://www.linkedin.com/in/matthew-weisker/'>LinkedIn</a></h2>
            <h2><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png'/><a href='https://github.com/mweisker'>GitHub</a></h2>
          </div>
          <h2 className='return-home'>Click <Link to='/'>HERE</Link> to return to the main page</h2>
        {/* </div> */}
    </div>
  )
}