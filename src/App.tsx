import Intro from './components/Intro';
import Nav from './components/Nav';
import Projects from './components/Projects';
import '@fontsource/ubuntu';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="font-ubuntu">
      <Nav />
      <Intro />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
