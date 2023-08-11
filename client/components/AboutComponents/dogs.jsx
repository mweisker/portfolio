import React, { useState } from 'react';

import Carousel from '../Carousel.jsx';

// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';

import NovaAdventure from '../../images/nova-adventure.jpg';
import NovaToy from '../../images/nova-toy.jpg';
import NovaView from '../../images/nova-view.jpg';
import NovaPaddleboard from '../../images/nova-paddleboard.jpg';
import NovaShadowChill from '../../images/nova+shadow-chill.jpg';
import NovaShadowUfo from '../../images/nova+shadow-ufo.jpg';
import ShadowCute from '../../images/shadow-cute.jpg';
import ShadowCool from '../../images/shadow-cool.jpeg';


export default function dogs() {
  const [activeIndex, setActiveIndex] = useState(0)

  const carouselItems = [
    NovaAdventure, NovaView, NovaToy, NovaPaddleboard,
    ShadowCute, ShadowCool,
    NovaShadowChill, NovaShadowUfo
  ]

  return (
    <div className='component-holder'>
      <div className='carousel-holder'>

        <Carousel items={carouselItems} activeIndex={activeIndex} setActiveIndex={setActiveIndex}></Carousel>

      </div>
      <div className='text-holder'>
        <h1>Dogs</h1>
        { activeIndex < 4 ? <h3>I love all the dogs in my life.  My fiancé and I have Nova, a sassy little chiweenie (chihuahua and dachshund mix).  
          She mostly sleeps all day in her poof, but don't let that fool you, she loves going on adventures!  Especially going on hikes or paddleboarding</h3> : null }
        { activeIndex >= 4 && activeIndex < 6 ? <h3>My family also has a dog named shadow.  He's a big goofball who loves long walks and tug-o-war</h3> : null }
        { activeIndex >= 6 ? <h3>We recently introduced Nova and Shadow for the first time.  We were not sure how it would go because Nova is nervous around big dogs, but clearly they got along famously</h3> : null }
      </div>
    </div>
  )
}