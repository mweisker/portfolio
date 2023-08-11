import React from 'react';

export default function CarouselItem({ item, width }) {
  return <div className='carousel-item'>
    <img className='carousel-img' src={item}></img>
  </div>
}