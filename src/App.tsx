import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import '@fontsource/ubuntu';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import AllProjects from './components/AllProjects';
import { prefetchData } from './apollo';

function App() {
  const storedMode = localStorage.getItem('mode');
  const [mode, setMode] = useState(storedMode || 'light');

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('mode', newMode);
  };

  useEffect(() => {
    prefetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('mode', mode);
  }, [mode]);

  return (
    <div
      className={`font-quicksand text-slate-700 ${
        mode === 'dark' ? 'dark' : ''
      }`}
    >
      <div className="px-4">
        <BrowserRouter>
          <Nav mode={mode} toggleMode={toggleMode} />
          <div className="max-w-[900px] mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<AllProjects />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
