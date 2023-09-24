import About from './About';
import Contact from './Contact';
import Intro from './Intro';
import MainProjects from './MainProjects';

function Home() {
  return (
    <>
      <Intro />
      <section id="about">
        <About />
      </section>
      <MainProjects />
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Home;
