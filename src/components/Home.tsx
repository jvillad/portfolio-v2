import Contact from './Contact';
import Intro from './Intro';
import MainProjects from './MainProjects';

function Home() {
  return (
    <>
      <Intro />
      {/* <TechStack /> */}
      <MainProjects />
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Home;
