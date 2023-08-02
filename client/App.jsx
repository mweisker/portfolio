import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './path/Home.jsx';
import About from './path/About.jsx';
import Contact from './path/Contact.jsx';
import Work from './path/Work.jsx';


const App = () => {
  return (
    <div>
      {/* <Router> */}
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/Work' element={ < Work /> } />
          <Route path='/About' element={ < About /> } />
          <Route path='/Contact' element={ < Contact /> } />
        </Routes>
      {/* </Router> */}
    </div>
  )
}

export default App;