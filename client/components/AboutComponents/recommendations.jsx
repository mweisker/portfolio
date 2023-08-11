import React, { useState } from 'react';

import Carousel from '../Carousel.jsx';

export default function recommendations() {
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselItems = [
    'https://www.analyticsinsight.net/wp-content/uploads/2023/07/Elon-Musk-Twitter-to-Embrace-Dark-Mode-Only.jpg',
    'https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/medium/oapgW_Fp_400x400.jpg',
    'https://www.indiewire.com/wp-content/uploads/2016/06/the-social-network.jpg',
    'https://img-cdn.inc.com/image/upload/w_1024,h_576,c_fill/images/panoramic/jeff-bezos_530800_usxpdh.jpg'
  ]

  return (
    <div className='component-holder'>
      <div className='carousel-holder'>

        <Carousel items={carouselItems} activeIndex={activeIndex} setActiveIndex={setActiveIndex}></Carousel>

      </div>
      <div className='text-holder'>
        <h1>Recommendations</h1>
        { activeIndex === 0 ? <div>
          <h2>"Matthew told me not to buy twitter...I should have listened"</h2>
          <h3>-Elon Musk</h3>
        </div> : null}
        { activeIndex === 1 ? <div>
          <h2>"Matthew taught me how to center a div"</h2>
          <h3>-Dan Abramov</h3>
        </div> : null}
        { activeIndex === 2 ? <div>
          <h2>"I'm watching his career closely, think I'll get the next Threads out of it!"</h2>
          <h3>-Mark Zuckerberg?</h3>
        </div> : null}
        { activeIndex === 3 ? <div>
          <h2>"Who?"</h2>
          <h3>-Jeff Bezos</h3>
        </div> : null}
      </div>
    </div>
  )
}