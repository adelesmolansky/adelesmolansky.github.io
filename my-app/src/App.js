import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import AI_Learners from './pages/AI-Learners';
import Research from './pages/Research';

function App() {
return (
	<Router>
    <Navbar />
    
    <Routes>
      <Route path='/' exact component={About} />
      <Route path='/about' component={About} />
      <Route path='/ai-learners' component={AI_Learners} />
      <Route path='/research' component={Research} />
    </Routes>
	</Router>
);
}

export default App;
