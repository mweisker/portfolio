
import React, { useState } from 'react';

import CarouselItem from './CarouselItem.jsx';

export default function Carousel({ items }) {
  const [activeIndex, setAtciveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) newIndex = items.length - 1;
    else if (newIndex >= items.length) newIndex = 0;
    
    setAtciveIndex(newIndex);
  }

  return (
    <div className='carousel'>
      <div main-carousel>
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
                <span className={`material-symbol-outlined ${
                  index === activeIndex 
                  ? "indicator-symbol-active" 
                  : "indicator-symbol"}`}
                >
                  
                </span>
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



/*
import React, { useState } from "react";
import CarouselItem from "./CarouselItem.jsx";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "Baseball",
      description:
        "Baseball is a bat-and-ball sport played between two teams of nine players each, taking turns batting and fielding. The game occurs over the course of several plays, with each play generally beginning when a player on the fielding team, called the pitcher.",
      icon: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
    },
    {
      title: "Walking",
      description:
        "Walking (also known as ambulation) is one of the main gaits of terrestrial locomotion among legged animals. Walking is typically slower than running and other gaits. ",
      icon: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
    },
    {
      title: "Weights",
      description:
        "Weightlifting generally refers to activities in which people lift weights, often in the form of dumbbells or barbells. People lift various kinds of weights for a variety of different reasons.",
      icon: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'
    },
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)`
     }}
      >
        {items.map((item) => {
          return <CarouselItem item={item} width={"100%"} />;
        })}
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span class="material-symbols-outlined">arrow_back_ios</span>{" "}
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};

*/