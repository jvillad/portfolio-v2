import Intro from './components/Intro';
import Nav from './components/Nav';
import Projects from './components/Projects';
import '@fontsource/ubuntu';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav />
      <div className="font-inter text-gray-700 max-w-[900px] mx-auto">
        <Intro />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
