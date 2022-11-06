import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import AI_Learners from './pages/AI-Learners';
import Research from './pages/Research';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route exact path='/' component={About} />
        <Route path='/about' component={About} />
        <Route path='/ai-learners' component={AI_Learners} />
        <Route path='/research' component={Research} />
      </Routes>
    </Router>
  );
}

export default App;
