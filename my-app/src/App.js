import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import AiLearners from './pages/AiLearners/AiLearners';
import Research from './pages/Research/Research';
import News from './pages/News/News';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route exact path='/' element={<About />} />
        <Route path='/about' element={<About />} />
        <Route path='/ai-learners' element={<AiLearners />} />
        <Route path='/research' element={<Research />} />
        <Route path='/news' element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
