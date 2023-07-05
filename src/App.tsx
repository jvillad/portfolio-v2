import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import '@fontsource/ubuntu';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';

function App() {
  const storedMode = localStorage.getItem('mode');
  const [mode, setMode] = useState(storedMode || 'light');

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('mode', newMode);
  };

  useEffect(() => {
    localStorage.setItem('mode', mode);
  }, [mode]);

  return (
    <div className={`font-inter ${mode === 'dark' ? 'darkMode' : ''}`}>
      <div className="px-4 ">
        <BrowserRouter>
          <Nav mode={mode} toggleMode={toggleMode} />
          <div className="text-gray-700 max-w-[900px] mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
