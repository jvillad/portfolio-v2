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
    <div className="font-inter">
      <div className="px-4 ">
        <BrowserRouter>
          <Nav />
          <div className=" text-gray-700 max-w-[900px] mx-auto">
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
