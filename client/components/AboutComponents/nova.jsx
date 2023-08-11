import React from 'react';

import Carousel from '../Carousel.jsx';

// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';

import NovaAdventure from '../../images/nova-adventure.jpg';
import NovaToy from '../../images/nova-toy.jpg';
import NovaView from '../../images/nova-view.jpg';
import NovaShadowChill from '../../images/nova+shadow-chill.jpg';
import NovaShadowUfo from '../../images/nova+shadow-ufo.jpg';
import ShadowCute from '../../images/shadow-cute.jpg';


export default function nova() {

  const carouselItems = [
    NovaAdventure, ShadowCute, NovaToy, 
    NovaShadowChill, NovaView, NovaShadowUfo
  ]

  return (
    <div className='component-holder'>
      <div className='carousel-holder'>

        <Carousel items={carouselItems}></Carousel>

      </div>
      <div className='text-holder'>
        <h1>Dogs</h1>
        <h3>I love all the dogs in my life.  My fiancé and I have Nova, a sassy little chiweenie (chihuahua and dachshund mix), and when I visit my family I get to see Shadow. </h3>
        <h3>Dogs big and small, I love them all.</h3>
      </div>
    </div>
  )
}