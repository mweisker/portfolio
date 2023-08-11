
import React, { useState } from 'react';

import CarouselItem from './CarouselItem.jsx';

export default function Carousel({ items, activeIndex, setActiveIndex }) {
  // const [activeIndex, setAtciveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) newIndex = items.length - 1;
    else if (newIndex >= items.length) newIndex = 0;
    
    setActiveIndex(newIndex);
  }

  return (
    <div className='carousel'>
      <div className='main-carousel'>
        <div 
          className='inner'
          style={{transform: `translate(-${activeIndex * 100}%)`}}
        >
          {items.map((item, key) => {
              return <CarouselItem item={item} width={'100%'} key={key} />;
          })}
        </div>
      </div>

      <div className='carousel-buttons'>
        <button onClick={() => {
            updateIndex(activeIndex - 1);
          }} className='button-arrow left'>
            
        </button>
        <div className='indicators'>
          {items.map((item, index) => {
            return (
              <button onClick={() => {
                updateIndex(index);
              }} className={`indicator-buttons ${
                index === activeIndex 
                ? "indicator-symbol-active" 
                : "indicator-symbol"}`}>
                {/* <span className={`material-symbol-outlined ${
                  index === activeIndex 
                  ? "indicator-symbol-active" 
                  : "indicator-symbol"}`}
                >
                  
                </span> */}
              </button>
            )
          })}
        </div>
        <button onClick={() => {
            updateIndex(activeIndex + 1);
          }} className='button-arrow right'>
        </button>
      </div>
    </div>
  )
}
