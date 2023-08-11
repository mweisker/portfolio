import React from 'react';
import { Link } from 'react-router-dom';


export default function home() {

  return (
    <div className='component-holder'>
      <div className='text-holder'>
        <h2>To learn about my work experience and projects, hover over the images above,</h2>
        <h2>or you can take a look at my <a href='https://drive.google.com/file/d/1IVmHvv5TEi7MYPaTiTCvM1lnquye5HYR/view?usp=sharing'>RESUME</a></h2>
        <h2 className='return-home'>Click <Link to='/'>HERE</Link> to return to the main page</h2>
      </div>
    </div>
  )
}