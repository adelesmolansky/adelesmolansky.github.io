import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import AI_Learners from './pages/AI-Learners';
import Research from './pages/Research';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route exact path='/' element={<About />} />
        <Route path='/about' element={<About />} />
        <Route path='/ai-learners' element={<AI_Learners />} />
        <Route path='/research' element={<Research />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
