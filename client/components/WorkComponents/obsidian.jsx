import React from 'react';

import Obsidian from '../../images/obsidian.png';

export default function obsidian() {

  return (
    <div className='component-holder'>
      <div className='image-holder'>
        <img className='work-image obsidian-image' src={Obsidian} />
      </div>
      <div className='text-holder'>
        <h1>Obsidian</h1>
        <h3>is an Open Source Product that connects Deno Applications with GraphQL.  My work on Obsidian involved creating new cache invalidation algorithms so that the query calls could be more efficient.</h3>
        <h3>Click <a href='http://getobsidian.io/'>HERE</a> to learn more about Obsidian</h3>
      </div>
    </div>
  )
}