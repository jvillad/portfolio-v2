import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import Intro from './components/Intro';
import Nav from './components/Nav';
// import Projects from './components/Projects';
import '@fontsource/ubuntu';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <div className="font-inter text-gray-700 max-w-[900px] mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
