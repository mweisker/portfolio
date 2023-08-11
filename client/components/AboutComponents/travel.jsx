import React, { useState } from 'react';

import Carousel from '../Carousel.jsx';

import KoreaTemple from '../../images/korea-temple.jpg';
import KoreaBusan from '../../images/korea-busan.jpg';
import KoreaParaglide from '../../images/korea-paraglide.jpeg';
import KoreaTempleAutumn from '../../images/korea-temple-autumn.jpg';

import PohnpeiSokehs from '../../images/pohnpei-sokehs.jpg';
import PohnpeiSakau from '../../images/pohnpei-sakau.jpg';
import PohnpeiShip from '../../images/pohnpei-ship.jpg';

import ChileRuins from '../../images/chile-ruins.jpg';
import ChileMatchupichu from '../../images/chile-matchupichu.jpg';


export default function travel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const carouselItems = [
    KoreaTemple, KoreaBusan, KoreaParaglide, KoreaTempleAutumn,
    PohnpeiSokehs, PohnpeiSakau, PohnpeiShip,
    ChileRuins, ChileMatchupichu
  ]

  console.log(activeIndex);

  return (
    <div className='component-holder'>
      <div className='carousel-holder'>

        <Carousel items={carouselItems} activeIndex={activeIndex} setActiveIndex={setActiveIndex}></Carousel>

      </div>
      <div className='text-holder'>
        <h1>Travel</h1>
        {/* <h3>I have been lucky enough to live abroad several times in my life.</h3> */}
        { activeIndex < 4 ? <h3>I have been lucky enough to live abroad several times in my life.  
          Most recently I lived in Korea from 2019-2022 teaching English.</h3> : null }
        { activeIndex >= 4 && activeIndex < 7 ? <h3>Before that I lived in Pohnpei, Micronesia from 2016-2018 as a Peace Corps Volunteer.</h3> : null }
        { activeIndex >= 7 ? <h3>My passion for traveling started when I studied for a semester in Chile, and I got to visit the Atacama Desert and Machu Picchu.</h3> : null }
      </div>
    </div>
  )
}