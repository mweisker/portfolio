import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './path/Home.jsx';
import AboutMe from './path/AboutMe.jsx';


const App = () => {
  return (
    <div>
      <h1>Matthew's Portfolio</h1>
      {/* <Router> */}
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/AboutMe' element={ < AboutMe /> } />
        </Routes>
      {/* </Router> */}
    </div>
  )
}

export default App;