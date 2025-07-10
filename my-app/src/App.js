import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import AiLearners from './pages/AiLearners/AiLearners';
import Research from './pages/Research/Research';
import News from './pages/News/News';
import PD from './pages/PD/PD';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/ai-learners" element={<AiLearners />} />
          <Route path="/research" element={<Research />} />
          <Route path="/news" element={<News />} />
          {/* <Route path="/professional-development" element={<PD />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
