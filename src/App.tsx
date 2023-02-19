import Intro from './components/Intro';
import Nav from './components/Nav';
import Projects from './components/Projects';
import '@fontsource/ubuntu';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter text-gray-700 max-w-[900px] mx-auto">
      <Nav />
      <Intro />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
