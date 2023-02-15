import Intro from './components/Intro';
import Nav from './components/Nav';
import Projects from './components/Projects';
import '@fontsource/ubuntu';

function App() {
  return (
    <div className="font-ubuntu">
      <Nav />
      <Intro />
      <Projects />
    </div>
  );
}

export default App;
