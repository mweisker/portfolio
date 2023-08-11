import React from 'react';

import procrastinationImage from '../../images/procrastination.png';

export default function procrastination() {

  return (
    <div className='component-holder'>
      <div className='image-holder'>
        <img className='work-image procrastination-image' src={procrastinationImage} />
      </div>
      <div className='text-holder'>
        <h1>Procrastination Dissuasion</h1>
        <h3>is my rendition of a full-stack to do list.  It features adding task title, description, due-date, and status.  You can also sort by due date, status, or title, and easily edit or delete each task.</h3>
        <h3 className='click-here'>Click <a href='https://procrastination-dissuasion.onrender.com/'>HERE</a> and try it out</h3>
      </div>
    </div>
  )
}