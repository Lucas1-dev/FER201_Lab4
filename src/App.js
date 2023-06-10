import './App.css';
import React from 'react';

import Navbar1 from './components/Navigation/Navigation';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Contact from './pages/Contact';

import Movie from './components/Content/MovieLists/MoviesDetail';

function App() {
  return (
    <div className='App'>

        <Router>
        <Navbar1 />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='movie/:id' element={<Movie/>}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='news' element={<News />}></Route>
          <Route path='contact' element={<Contact />}></Route>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
